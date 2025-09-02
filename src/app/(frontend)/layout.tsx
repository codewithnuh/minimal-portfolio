import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { payloadClient } from "../../lib/getPaylod";
import React from "react";

// 1. Import Fonts: Best practice is to import and optimize fonts
// The "variable" property sets up CSS variables that we can reference later
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-fallback",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-fallback",
});

// 2. Dynamic Metadata: This is a Next.js feature for handling SEO
export async function generateMetadata() {
  const payload = await payloadClient();
  const siteSettings = await payload.findGlobal({ slug: "site-settings" });
  const meta = siteSettings?.defaultMeta;
  const og = meta;

  // Provide sensible fallbacks for all metadata fields
  const title = meta?.title;
  const description = meta?.description || "";
  const keywords = meta?.keywords || "";
  const robots = meta?.robots || "index,follow";
  const ogTitle = og?.title || title;
  const ogDescription = og?.description || description;

  return {
    title,
    description,
    keywords,
    robots,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: siteSettings.openGraph?.ogImage,
        },
      ],
    },
  };
}

// 3. Root Layout Component
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Set up dynamic CSS variables on the root <html> tag
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        {/* We will add header and footer components here in a later step */}
        {children}
      </body>
    </html>
  );
}
