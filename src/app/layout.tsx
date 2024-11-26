import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ClientLayout from "./(layout)/ClientLayout";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "코딘꼬",
  description: "코딘꼬와 코딩 배우기",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} overflow-hidden font-pretendard antialiased h-[100vh] bg-white text-black flex justify-center`}
      >
        <ClientLayout>{children}</ClientLayout>

      </body>
    </html>
  );
}
