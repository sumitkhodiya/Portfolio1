import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumit Kumar | B.Tech CSE Data Science | LPU",
  description: "Portfolio of Sumit Kumar, a B.Tech CSE Data Science student at Lovely Professional University. Skilled in Python, Django, Next.js, ML, and more.",
  keywords: ["Sumit Kumar", "Sumit", "LPU", "Lovely Professional University", "B.Tech CSE", "Data Science", "Portfolio", "Python", "Django", "Next.js", "Machine Learning"],
  authors: [{ name: "Sumit Kumar" }],
  openGraph: {
    title: "Sumit Kumar | B.Tech CSE Data Science | LPU",
    description: "Portfolio of Sumit Kumar, a B.Tech CSE Data Science student at Lovely Professional University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
