import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "Just a Sample Gallery",
  description: "Sample information with db set up, auth, and more!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${geist.variable} bg-black text-white flex flex-col gap-4`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
