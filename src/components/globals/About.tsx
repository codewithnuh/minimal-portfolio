import { GlobalConfig } from "payload";

export const About: GlobalConfig = {
  slug: "about",
  label: "About Section",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      required: true,
    },
    {
      name: "profileImage",
      type: "upload",
      label: "Profile Image",
      relationTo: "media",
      required: true,
    },
    {
      name: "aboutParagraphs",
      type: "array",
      label: "About Paragraphs",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Paragraph Text",
          required: true,
        },
      ],
      admin: {
        description: "Add multiple paragraphs for the about section.",
      },
    },
    {
      name: "skills",
      type: "array",
      label: "Skills",
      fields: [
        {
          name: "skill",
          type: "text",
          label: "Skill",
          required: true,
        },
      ],
      admin: {
        description: "Add your skills here.",
      },
    },
    {
      name: "socialLinks",
      type: "group",
      label: "Social Links",
      fields: [
        {
          name: "githubUrl",
          type: "text",
          label: "GitHub URL",
          required: true,
        },
        {
          name: "linkedinUrl",
          type: "text",
          label: "LinkedIn URL",
          required: true,
        },
        {
          name: "mailToUrl",
          type: "text",
          label: "Email (mailto: URL)",
          required: true,
        },
      ],
    },
    {
      name: "ctaButtons",
      type: "array",
      label: "Call to Action Buttons",
      minRows: 2,
      maxRows: 2,
      fields: [
        {
          name: "text",
          type: "text",
          label: "Button Text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          label: "Button Link (Href)",
          required: true,
        },
        {
          name: "variant",
          type: "select",
          label: "Button Variant",
          options: [
            {
              label: "Primary",
              value: "default",
            },
            {
              label: "Outline",
              value: "outline",
            },
          ],
          defaultValue: "default",
        },
      ],
    },
  ],
};

export default About;
