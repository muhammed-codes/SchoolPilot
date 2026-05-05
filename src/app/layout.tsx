import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SchoolPilot — School Management Software for Nigerian Schools",
  description:
    "SchoolPilot is a mobile-first SaaS school management platform built for Nigerian primary and secondary schools. Streamline result management, attendance tracking, and report card generation.",
  keywords:
    "school management software, result management Nigeria, school attendance system, report card generator, Nigerian schools",
  openGraph: {
    title: "SchoolPilot — School Management Software for Nigerian Schools",
    description:
      "Eliminate paper-based result processing. Give parents real-time visibility into their child's academic performance.",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" className={`${poppins.variable} ${openSans.variable} h-full antialiased`}>
    <body className="min-h-full flex flex-col">{children}</body>
  </html>
);

export default RootLayout;
