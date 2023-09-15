import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import { barlow, bellefair } from "./fonts";

export const metadata: Metadata = {
  title: "Space Challenge V2",
  description: "FrontEndChallenge",
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
        <p className='footer'>
          © 2023 Ousmane Bathily. All rights reserved
        </p>
      </body>
    </html>
  );
}
