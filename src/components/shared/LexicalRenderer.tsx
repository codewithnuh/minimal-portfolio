import { RichText } from "@payloadcms/richtext-lexical/react";

export const LexicalRenderer = ({ lexicalData }) => {
  return <RichText data={lexicalData} />;
};
