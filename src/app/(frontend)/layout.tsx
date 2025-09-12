import "./globals.css";
import { Inter } from "next/font/google";
import { payloadClient } from "../../lib/getPaylod";
import React from "react";
import { Navbar } from "@/components/globals/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/globals/Footer";

// 1. Import Fonts: Best practice is to import and optimize fonts
// The "variable" property sets up CSS variables that we can reference later
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
