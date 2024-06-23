import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import BottomNavigator from "@/components/common/bottomnav/bottomnav";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "HearUR",
  description: "Healthcare for everyone.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      {children}
      <BottomNavigator/>
      </body>
      </html>
  );
}
