import { CodeBlock, CodeBlockProps } from "@/blocks/Code/Component";
import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  JSXConvertersFunction,
  RichText,
} from "@payloadcms/richtext-lexical/react";

interface LexicalRendererProps {
  lexicalData: SerializedEditorState; // You might want to define a more specific type for lexicalData
}
type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CodeBlockProps>;

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  blocks: {
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
  },
});
export const LexicalRenderer: React.FC<LexicalRendererProps> = ({
  lexicalData,
}) => {
  return <RichText converters={jsxConverters} data={lexicalData} />;
};
