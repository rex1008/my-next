"use client"

import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()
  console.log(pathname)

  return (
    <div>
      <div className='flex gap-4 font-bold text-lg mb-4'>
        <Link className={pathname === "/dashboard/about" ? "text-purple-500" : ""} href="/dashboard/about">About</Link>
        <Link className={pathname === "/dashboard/settings" ? "text-purple-500" : ""} href="/dashboard/settings">Settings</Link>
      </div>
      <h1>我是dashboard布局</h1>
      {children}
    </div>
  );
}
