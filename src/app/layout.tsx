import './globals.css';
import 'antd/dist/reset.css'; 
import type { Metadata } from 'next';
import AppLayout from "@/components/AppLayout";
import { Inter } from "next/font/google";
export const metadata: Metadata = {
  title: 'Booking Hotels App',
  description: 'Generated by create next app',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
