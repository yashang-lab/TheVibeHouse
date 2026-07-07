import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The Vibe House | Event Management Reimagined.",
  description: "Stop Stressing. Start Celebrating.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-text-main selection:bg-brand-accent/20">
        <div className="relative z-0">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
