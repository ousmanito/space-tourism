import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import { barlow, bellefair } from "./fonts";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Are you interested in spatial exploration ? We will provide you some basic informations about that topic, buckle up !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[bellefair.variable, barlow.className].join(' ')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
