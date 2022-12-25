
import "./styles.css";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={{
          "__html": ` 
          document.documentElement.setAttribute("data-fr-theme", "dark") 
          `
        }}></script>

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
