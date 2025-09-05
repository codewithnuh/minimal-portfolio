import { GlobalConfig } from "payload";

export const Hero: GlobalConfig = {
  slug: "hero",
  label: "Hero Section",
  fields: [
    {
      name: "greeting",
      type: "text",
      label: "Greeting",
      required: true,
    },
    {
      name: "headline",
      type: "text",
      label: "Headline",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      required: true,
    },
    {
      name: "primaryButton",
      type: "group",
      label: "Primary Button",
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
      ],
    },
    {
      name: "secondaryButton",
      type: "group",
      label: "Secondary Button",
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
      ],
    },
  ],
};

export default Hero;
