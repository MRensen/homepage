import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "./MarkdownComponent.css"

import "highlight.js/styles/github-dark.css";

type Props = {
    markdown: string;
};

export function MarkdownDoc({ markdown }: Props) {
    return (
        <div className="doc-shell">
            <article className="doc">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                >
                    {markdown}
                </ReactMarkdown>
            </article>
        </div>
    );
}