import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#131313",
};

export const metadata: Metadata = {
  title: "Spider-Man: Brand New Day",
  description:
    "Peter Parker's life has been rebooted. Experience the dawn of a heroic era where every choice resonates through the city streets.",
  openGraph: {
    title: "Spider-Man: Brand New Day",
    description:
      "The world has changed. The web is expanding. Experience the dawn of a heroic era.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} dark`}
    >
      <body className="bg-background text-foreground antialiased font-body">
        {children}
      </body>
    </html>
  );
}
