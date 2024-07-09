import "./globals.css";
import TopNavigator from "@/components/common/topnav/topnav";
import {AuthProvider} from "@/utils/context/authContext";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <>
        <html>
        <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <TopNavigator/>
          <main className="flex-1" style={{minHeight: 'calc(100vh - 4rem)'}}>
            {children}
          </main>
        </AuthProvider>
        </body>
        </html>
      </>
  );
}
