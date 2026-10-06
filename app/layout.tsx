import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Jakub",
  description: "a freshman at UH Manoa studying finance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
