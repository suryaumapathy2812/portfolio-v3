import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: {
    default: "suryaumapathy",
    template: "%s | suryaumapathy",
  },
  description:
    "Passionate Full Stack Web Developer from Chennai, crafting innovative digital solutions during the tranquility of the night",
  openGraph: {
    title: "suryaumapathy",
    description:
      "Passionate Full Stack Web Developer from Chennai, crafting innovative digital solutions during the tranquility of the night",
    url: "https://suryaumapathy.in",
    siteName: "suryaumapathy",
    images: [
      {
        url: "https://suryaumapathy.in/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "suryaumapathy",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/android-chrome-512x512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(
          GeistSans.className,
          "container w-full md:w-4/5 lg:w-4/6 xl:w-3/6 mx-auto mb-24 md:mb-32"
        )}
      >
        <Providers>
          <Header></Header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
