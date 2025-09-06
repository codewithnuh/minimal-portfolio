import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Project Title",
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
            if (data?.title && typeof data.title === "string") {
              return data.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "");
            }
            return undefined;
          },
        ],
      },
    },
    {
      name: "liveUrl",
      type: "text",
      label: "Live Demo URL",
      required: false,
    },
    {
      name: "githubUrl",
      type: "text",
      label: "GitHub URL",
      required: false,
    },
    {
      name: "image",
      type: "upload",
      label: "Project Image",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Project Description",
      required: true,
      maxLength: 250,
    },
    {
      name: "details",
      type: "richText",
      label: "Project Details",
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: "techStack",
      type: "array",
      label: "Technologies Used",
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: "tech",
          type: "select",
          label: "Technology Name",
          required: true,
          options: [
            { label: "Next.js", value: "Next.js" },
            { label: "React", value: "React" },
            { label: "Tailwind CSS", value: "Tailwind CSS" },
            { label: "Node.js", value: "Node.js" },
            { label: "MongoDB", value: "MongoDB" },
            { label: "Framer Motion", value: "Framer Motion" },
            { label: "TypeScript", value: "TypeScript" },
            { label: "PostgreSQL", value: "PostgreSQL" },
            { label: "JavaScript", value: "JavaScript" },
            { label: "HTML5", value: "HTML5" },
            { label: "CSS3", value: "CSS3" },
            { label: "Sass", value: "Sass" },
            { label: "Git", value: "Git" },
            { label: "Firebase", value: "Firebase" },
            { label: "Docker", value: "Docker" },
            { label: "Python", value: "Python" },
            { label: "Java", value: "Java" },
            { label: "C++", value: "C++" },
            { label: "Django", value: "Django" },
            { label: "Flask", value: "Flask" },
            { label: "SQL", value: "SQL" },
          ],
        },
      ],
    },
  ],
};

export default Projects;
