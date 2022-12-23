
export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head></head>
      <body>
        {children}
      </body>
    </html>
  );
}
