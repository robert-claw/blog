import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

// Configure marked with GitHub Flavored Markdown and syntax highlighting
marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

// Custom renderer for better styling
const renderer = {
  // Custom link renderer - open external links in new tab
  link({ href, title, tokens }: any): string {
    const text = (this as any).parser.parseInline(tokens);
    const titleAttr = title ? ` title="${title}"` : '';
    const external = href?.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${href}"${titleAttr}${external}>${text}</a>`;
  },

  // Custom table renderer with proper classes
  table({ header, rows }: any): string {
    const head = `<thead>${header}</thead>`;
    const body = `<tbody>${rows}</tbody>`;
    return `
      <div class="table-wrapper">
        <table>
          ${head}
          ${body}
        </table>
      </div>
    `;
  },

  // Custom code block renderer  
  code({ text, lang }: any): string {
    const language = lang || 'plaintext';
    const validLang = hljs.getLanguage(language) ? language : 'plaintext';
    const highlighted = hljs.highlight(text, { language: validLang }).value;
    
    return `
      <div class="code-block">
        <div class="code-header">
          <span class="code-language">${language}</span>
        </div>
        <pre><code class="hljs language-${validLang}">${highlighted}</code></pre>
      </div>
    `;
  },
};

marked.use({ renderer });

export function renderMarkdown(content: string): string {
  return marked(content) as string;
}
