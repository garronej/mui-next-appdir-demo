import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import AppThemeProvider from "../shared/AppThemeProvider";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head></head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          <AppThemeProvider>{children}</AppThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
