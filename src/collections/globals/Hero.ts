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
      defaultValue: "Hi, I am John Doe",
    },
    {
      name: "headline",
      type: "text",
      label: "Headline",
      required: true,
      maxLength: 50,
      defaultValue: "Turning Ideas Into Captivating Web Experiences",
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      required: true,
      maxLength: 150,
      defaultValue:
        "Full-stack developer crafting elegant, high-performance applications that solve complex problems with intuitive design.",
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
          defaultValue: "Get Quote Know",
        },
        {
          name: "href",
          type: "text",
          label: "Button Link (Href)",
          required: true,
          defaultValue: "/#contact",
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
          defaultValue: "View Projects",
        },
        {
          name: "href",
          type: "text",
          label: "Button Link (Href)",
          required: true,
          defaultValue: "/#projects",
        },
      ],
    },
  ],
};

export default Hero;
