
import "./styles.css";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={{
          "__html": ` 
          document.documentElement.setAttribute("data-fr-theme", "dark") 

          document.getElementById("root-color-scheme")?.remove();

          document.head.insertAdjacentHTML(
              "afterend",
              \`<style id="root-color-scheme">:root { color-scheme: dark; }</style>\`
          );

          document.querySelector("meta[name=theme-color]")?.remove();

          document.head.insertAdjacentHTML(
              "afterend",
              \`<meta name="theme-color" content="black">\`
          );

          `
        }}></script>

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
