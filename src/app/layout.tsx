import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EnvProvider } from "@/components/env-provider/env-provider";

export const dynamic = 'force-dynamic'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const baseURL = process.env.baseURL ?? 'http://localhost:3001';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EnvProvider baseURL={baseURL}>
          {children}
        </EnvProvider>
      </body>
    </html>
  );
}
