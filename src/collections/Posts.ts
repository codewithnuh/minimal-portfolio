import { CollectionConfig } from "payload";
import {
  lexicalEditor,
  BlocksFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HorizontalRuleFeature,
} from "@payloadcms/richtext-lexical";
import { Code } from "@/blocks/Code/config";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "author", "publishedDate"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Post Title",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      unique: true,
      required: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
            }
          },
        ],
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      label: "Author",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      label: "Published Date",
      required: true,
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      label: "Featured Image",
      required: false,
    },
    {
      name: "content",
      type: "richText",
      label: "Post Content",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          HorizontalRuleFeature(),
          BlocksFeature({
            blocks: [Code], // Add your custom blocks here
          }),
        ],
      }),
    },
    {
      name: "tags",
      type: "select",
      label: "Tags",
      hasMany: true,
      options: [
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "React", value: "react" },
        { label: "Node.js", value: "nodejs" },
        { label: "Next.js", value: "nextjs" },
        { label: "Databases", value: "databases" },
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Posts;
