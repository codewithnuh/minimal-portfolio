import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github.css"; // or other theme

type MarkdownRendererProps = {
  content: string;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          rehypeHighlight,
          rehypeSlug,
          rehypeAutolinkHeadings,
        ]}
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <pre className={`language-${match[1]}`}>
                <code {...props} className={className}>
                  {children}
                </code>
              </pre>
            ) : (
              <code
                className={`${className} bg-gray-200 rounded px-1 py-0.5`}
                {...props}
              >
                {children}
              </code>
            );
          },
          img({ src, alt }) {
            // Optionally process src or add classNames here
            return <img src={src} alt={alt} className="max-w-full rounded" />;
          },

          // Render task list items with checkbox inputs
          li({ children, checked, ...props }: any) {
            if (typeof checked === "boolean") {
              return (
                <ul>
                  <li {...props} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={Boolean(checked)}
                      // Add a visually hidden label for accessibility
                      aria-label="Task status"
                      readOnly
                      className="form-checkbox"
                    />
                    <span>{children}</span>
                  </li>
                </ul>
              );
            }
            // Ensure <li> is always inside a <ul>
            return <li {...props}>{children}</li>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default MarkdownRenderer;
