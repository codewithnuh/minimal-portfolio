import { RichText } from "@payloadcms/richtext-lexical/react";

interface LexicalRendererProps {
  lexicalData: any; // You might want to define a more specific type for lexicalData
}

export const LexicalRenderer: React.FC<LexicalRendererProps> = ({
  lexicalData,
}) => {
  return <RichText data={lexicalData} />;
};
