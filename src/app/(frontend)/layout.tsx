import "./globals.css";
import { Inter } from "next/font/google";
import { payloadClient } from "../../lib/getPaylod";
import React from "react";
import { Navbar } from "@/components/globals/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/globals/Footer";
import { unstable_noStore as noStore } from "next/cache";
import { Media, SiteSetting } from "@/payload-types";

// 1. Import Fonts: Best practice is to import and optimize fonts
// The "variable" property sets up CSS variables that we can reference later
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// 2. Dynamic Metadata: This is a Next.js feature for handling SEO
export async function generateMetadata() {
  // Ensure global metadata is always fresh (no cache)
  noStore();

  const payload = await payloadClient();
  const siteSettings = await payload.findGlobal({
    slug: "site-settings",
    depth: 1,
  });
  const meta = siteSettings?.defaultMeta || {};
  const ogSettings = siteSettings?.openGraph || {};

  // Resolve Open Graph image URL safely regardless of relationship shape
  let ogImageUrl: string | undefined;
  const ogImage: unknown = (ogSettings as SiteSetting["openGraph"])?.ogImage;
  if (ogImage) {
    if (typeof ogImage === "string") {
      ogImageUrl = ogImage;
    } else if (typeof ogImage === "number") {
      try {
        const media = await payload.findByID({
          collection: "media",
          id: ogImage,
        });
        ogImageUrl = (media as Media)?.url as string | undefined;
      } catch {
        // ignore resolution errors and continue without image
      }
    } else if (
      typeof ogImage === "object" &&
      ogImage !== null &&
      "url" in (ogImage as Media)
    ) {
      ogImageUrl = (ogImage as Media).url as string | undefined;
    }
  }

  // Provide sensible fallbacks for all metadata fields
  const title = (meta as SiteSetting["defaultMeta"])?.title || undefined;
  const description = (meta as SiteSetting["defaultMeta"])?.description || "";
  const keywords = (meta as SiteSetting["defaultMeta"])?.keywords || "";
  const robots = (meta as SiteSetting["defaultMeta"])?.robots || "index,follow";
  const ogTitle = (ogSettings as SiteSetting["openGraph"])?.ogTitle || title;
  const ogDescription =
    (ogSettings as SiteSetting["openGraph"])?.ogDescription || description;

  const openGraph = {
    title: ogTitle,
    description: ogDescription,
    images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
  };
  if (ogImageUrl) {
    openGraph.images = [{ url: ogImageUrl }];
  }

  return {
    title,
    description,
    keywords,
    robots,
    openGraph,
  };
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.className} scroll-smooth`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container className="relative ">
            <Navbar />
          </Container>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
