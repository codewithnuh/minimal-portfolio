import { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  fields: [
    {
      name: "defaultMeta",
      label: "Default SEO",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Default Title",
          type: "text",
        },
        {
          name: "description",
          label: "Default Description",
          type: "textarea",
        },
        {
          name: "keywords",
          label: "Keywords",
          type: "text",
          admin: {
            description:
              "A comma-separated list of keywords for search engines.",
          },
        },
        {
          name: "robots",
          label: "Robots Meta Tag",
          type: "select",
          options: [
            { label: "index, follow", value: "index,follow" },
            { label: "noindex, follow", value: "noindex,follow" },
            { label: "index, nofollow", value: "index,nofollow" },
            { label: "noindex, nofollow", value: "noindex,nofollow" },
          ],
          defaultValue: "index,follow",
        },
      ],
    },
    {
      name: "openGraph",
      label: "Open Graph (Social Sharing)",
      type: "group",
      fields: [
        {
          name: "ogTitle",
          label: "Title",
          type: "text",
          admin: {
            description:
              "The title displayed when sharing the site on social media. Defaults to the main title.",
          },
        },
        {
          name: "ogDescription",
          label: "Description",
          type: "textarea",
          admin: {
            description:
              "The description displayed when sharing the site on social media. Defaults to the main description.",
          },
        },
        {
          name: "ogImage",
          label: "Image",
          type: "upload",
          relationTo: "media",
          admin: {
            description:
              "The image displayed when sharing the site on social media.",
          },
        },
      ],
    },
    {
      name: "twitter",
      label: "Twitter Card",
      type: "group",
      fields: [
        {
          name: "twitterCard",
          label: "Card Type",
          type: "select",
          options: [
            { label: "Summary Card", value: "summary" },
            {
              label: "Summary Card with Large Image",
              value: "summary_large_image",
            },
            { label: "App Card", value: "app" },
            { label: "Player Card", value: "player" },
          ],
          defaultValue: "summary_large_image",
          admin: {
            description: "The type of Twitter card to display.",
          },
        },
        {
          name: "twitterSite",
          label: "Site",
          type: "text",
          admin: {
            description:
              "The Twitter account for the site, e.g., @your_handle.",
          },
        },
      ],
    },
  ],
};
