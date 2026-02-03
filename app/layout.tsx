import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blocky - Multi-Language Code Composer",
  description: "Visual no-code platform for extracting reusable code blocks from production codebases with MCP integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
