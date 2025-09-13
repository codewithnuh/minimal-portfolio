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
      // Default value for the title
      defaultValue: "About Me",
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      required: true,
      // Default value for the subtitle
      defaultValue: "A little more about my journey.",
    },
    {
      name: "profileImage",
      type: "upload",
      label: "Profile Image",
      relationTo: "media",
      required: true,
      // Note: Setting a default image is not straightforward, as it requires the image to be
      // uploaded to the CMS first. It is best to handle this by providing clear
      // instructions to the user to upload a profile image.
    },
    {
      name: "aboutParagraphs",
      type: "array",
      label: "About Paragraphs",
      maxRows: 2,
      fields: [
        {
          name: "text",
          type: "text",
          label: "Paragraph Text",
          required: true,
          maxLength: 308,
          // Default value for the first paragraph in the array
          defaultValue:
            "I am a passionate developer with a love for building innovative and beautiful digital experiences. My journey began with a curiosity for how things work, and it quickly grew into a dedication to creating clean, efficient, and user-friendly solutions.",
        },
      ],
      admin: {
        description: "Add multiple paragraphs for the about section.",
      },
      // Set the default array items here
      defaultValue: [
        {
          text: "I am a passionate developer with a love for building innovative and beautiful digital experiences. My journey began with a curiosity for how things work, and it quickly grew into a dedication to creating clean, efficient, and user-friendly solutions.",
        },
        {
          text: "This is a placeholder for a second paragraph. You can update this to share more about your skills, interests, and professional goals.",
        },
      ],
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
      // Default skills list
      defaultValue: [
        { skill: "JavaScript" },
        { skill: "React" },
        { skill: "Node.js" },
        { skill: "TypeScript" },
        { skill: "Tailwind CSS" },
        { skill: "Payload CMS" },
      ],
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
          defaultValue: "https://github.com/your-username",
        },
        {
          name: "linkedinUrl",
          type: "text",
          label: "LinkedIn URL",
          required: true,
          defaultValue: "https://linkedin.com/in/your-username",
        },
        {
          name: "mailToUrl",
          type: "text",
          label: "Email (mailto: URL)",
          required: true,
          defaultValue: "mailto:your-email@example.com",
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
            { label: "Primary", value: "default" },
            { label: "Outline", value: "outline" },
          ],
          defaultValue: "default",
        },
      ],
      // Default values for the CTA buttons
      defaultValue: [
        { text: "Download CV", href: "#", variant: "default" },
        {
          text: "Contact",
          href: "mailto:your-email@example.com",
          variant: "outline",
        },
      ],
    },
  ],
};

export default About;
