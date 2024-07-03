import type {Metadata} from "next";

import "./globals.css";
import TopNavigator from "@/components/common/topnav/topnav";

export const metadata: Metadata = {
  title: "HearUR",
  description: "Healthcare for everyone.",
};


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
      <body>
      <TopNavigator/>
      <div className={"mt-14"}>
      {children}
        </div>
      </body>
      </html>
  );
}
