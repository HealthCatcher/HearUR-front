import {ThemeProvider} from "@/components/theme-provider";
import "./globals.css";
import TopNavigator from "@/components/common/topnav/topnav";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <>
        <html>
        <body>
        <ThemeProvider>
          <TopNavigator/>
          <div className={"mt-16"}>
            {children}
          </div>
        </ThemeProvider>
        </body>
        </html>
      </>
  );
}
