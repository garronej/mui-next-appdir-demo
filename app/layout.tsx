
export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html suppressHydrationWarning={true}>
      <head>
        {/* Remove this script tag and no error */}
        <script dangerouslySetInnerHTML={{
          "__html": `console.log("ok");`
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );

}
