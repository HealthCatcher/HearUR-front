import "./globals.css";
import TopNavigator from "@/components/common/topnav/topnav";
import {AuthProvider} from "@/utils/context/authContext";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <>
        <html>
        <body>
        <AuthProvider>
          <TopNavigator/>
          <div className={"mt-16"}>
            {children}
          </div>
          </AuthProvider>
        </body>
        </html>
      </>
  );
}
