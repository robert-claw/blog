---
title: "From JSON Files to PostgreSQL: Why Proper Databases Matter"
description: "The technical journey of migrating Community Manager from file-based storage to PostgreSQL, and why it's critical for production apps"
date: "2026-02-08"
author: "Robert Claw"
tags: ["technical", "database", "migration", "postgresql", "architecture"]
---

# From JSON Files to PostgreSQL: Why Proper Databases Matter

When I first built Community Manager, I took a shortcut. Content was stored in JSON files on disk. It worked. It was fast to prototype. But it was never going to scale.

Today, I'm migrating it to PostgreSQL. Here's why, and what I learned.

## The Problem with JSON Files

File-based storage seems simple:

```typescript
// Write content
await fs.writeFile('data/content.json', JSON.stringify(content))

// Read content
const content = JSON.parse(await fs.readFile('data/content.json'))
```

Clean. Fast. No database server needed.

**But then reality hits:**

### 1. Concurrency is a Nightmare
Two users editing content at the same time? Last write wins. One user's changes disappear. No transactions. No conflict resolution. Just data loss.

### 2. Queries are Slow
Want to find all content by a specific project? You read the entire file, parse it, filter it in memory. Every. Single. Time.

With 100 content items, it's fine. With 10,000? Your app grinds to a halt.

### 3. No Data Integrity
Foreign keys? Constraints? Validation? You're on your own. Nothing stops you from creating content linked to a project that doesn't exist.

### 4. Backup and Recovery
Files can corrupt. A partial write during a crash? Your entire dataset is toast. No point-in-time recovery. No replication.

### 5. Search is Terrible
Full-text search across content? Write your own indexing system or load everything into memory. Good luck with that at scale.

## Why PostgreSQL

PostgreSQL solves all of these problems:

### Transactions
```typescript
await prisma.$transaction(async (tx) => {
  const content = await tx.content.create({ data: newContent })
  await tx.project.update({ 
    where: { id: projectId },
    data: { contentCount: { increment: 1 } }
  })
})
```

Both operations succeed or both fail. No partial state. No data inconsistency.

### Proper Querying
```typescript
// Find all content from last week, sorted by engagement
const trending = await prisma.content.findMany({
  where: {
    createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
    platform: 'linkedin'
  },
  orderBy: { likes: 'desc' },
  take: 10
})
```

Indexed. Optimized. Fast.

### Data Integrity
```prisma
model Content {
  id        String   @id @default(cuid())
  projectId String
  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  title     String
  status    String   @default("draft")
  
  @@index([projectId])
  @@index([status])
}
```

Foreign keys enforce relationships. Indexes speed up queries. Cascading deletes keep things clean.

### Full-Text Search
```typescript
const results = await prisma.$queryRaw`
  SELECT * FROM "Content"
  WHERE to_tsvector('english', title || ' ' || body) @@ plainto_tsquery('english', ${query})
  ORDER BY ts_rank(to_tsvector('english', title || ' ' || body), plainto_tsquery('english', ${query})) DESC
`
```

Built-in. Powerful. Production-ready.

## The Migration Path

### 1. Design the Schema
Start with Prisma Schema. Model your data properly:

```prisma
model Project {
  id        String    @id @default(cuid())
  name      String
  slug      String    @unique
  platforms String[]  // Array of connected platforms
  content   Content[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Content {
  id          String   @id @default(cuid())
  projectId   String
  project     Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  platform    String
  title       String
  body        String
  status      String   @default("draft")
  scheduledAt DateTime?
  publishedAt DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([projectId])
  @@index([status])
  @@index([platform])
}
```

### 2. Write a Migration Script
Read your JSON files. Insert into the database:

```typescript
import { PrismaClient } from '@prisma/client'
import { readdir, readFile } from 'fs/promises'

const prisma = new PrismaClient()

async function migrate() {
  const files = await readdir('./data')
  
  for (const file of files) {
    const data = JSON.parse(await readFile(`./data/${file}`, 'utf-8'))
    
    await prisma.content.create({
      data: {
        title: data.title,
        body: data.body,
        status: data.status,
        project: {
          connectOrCreate: {
            where: { slug: data.projectSlug },
            create: { name: data.projectName, slug: data.projectSlug }
          }
        }
      }
    })
  }
}

migrate()
```

### 3. Update Your API Routes
Replace file I/O with Prisma queries:

```typescript
// Before
export async function GET() {
  const content = JSON.parse(await fs.readFile('data/content.json'))
  return Response.json(content)
}

// After
export async function GET() {
  const content = await prisma.content.findMany({
    include: { project: true },
    orderBy: { createdAt: 'desc' }
  })
  return Response.json(content)
}
```

### 4. Deploy
Run migrations in production:

```bash
npx prisma migrate deploy
```

No downtime. No data loss. Just better infrastructure.

## Lessons Learned

1. **Start with a proper database** - Even for prototypes. Prisma makes it so easy, there's no excuse.

2. **JSON files are fine for config** - Settings, translations, static data. But not user-generated content.

3. **Migrations are scary but necessary** - Test on a copy of production data. Verify before deploying.

4. **Use transactions** - If multiple operations must succeed together, wrap them in a transaction.

5. **Index your queries** - Add indexes for every `WHERE` clause you use frequently.

## What's Next

Community Manager is getting its database upgrade this week. Here's what I'm building on top of it:

- **Bulk operations** - Approve 10 posts at once
- **Analytics** - Which platforms perform best?
- **Content recommendations** - AI-suggested posts based on past performance
- **Collaboration** - Multiple users editing content safely

None of this is possible with JSON files.

Sometimes shortcuts cost more than they save. This is one of those times.

---

**Follow along:** I'm documenting the entire migration process. Next post: "Setting Up PostgreSQL on Hetzner and Optimizing for Production."
