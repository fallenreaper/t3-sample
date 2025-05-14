import "~/styles/globals.css";
// import "@uploadthing/react/styles.css";
// OR you can add stuff to the Globals CSS file

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import type React from "react";
import { Toaster } from "~/app/_components/shadcn/sonner";
import { PostHogProvider } from "./_analytics/providers";

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
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <PostHogProvider>
        {/* 
        I want PostHod to know about Clerk information for user tracking.
        Due to this, it needs to be inside clerk but outside the HTML
        */}
        <html lang="en">
          <body className={`font-sans ${geist.variable} dark`}>
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="h-full overflow-y-scroll">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  );
}
