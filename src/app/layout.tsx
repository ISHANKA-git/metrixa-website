import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetriXa | Next-Gen Software Agency",
  description:
    "MetriXa builds high-performance web applications, custom enterprise software, and AI automation solutions.",
  icons: {
    icon: "/logo.jpg", // public ෆෝල්ඩරයට දැමූ ඔබේ logo එක Browser Tab එකේ පෙන්වයි
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} antialiased bg-[#09090b] text-[#fafafa] selection:bg-[#bef264] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}