import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html suppressHydrationWarning={true}>
      <head>
        {/* Remove this script tag and no error */}
        <Script id="my-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          "__html": `console.log("ok");`
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );

}
