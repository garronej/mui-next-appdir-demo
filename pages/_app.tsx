import type { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";


export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<script dangerouslySetInnerHTML={{ "__html": `document.documentElement.setAttribute("data-fr-theme", "dark");` }} />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
