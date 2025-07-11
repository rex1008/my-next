import type { Metadata } from "next";
import { Inder } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Link from "next/link";

const inder = Inder({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inder.className}>
        <AntdRegistry>
          {children}
          {modal}
        </AntdRegistry>
      </body>
    </html>
  );
}
