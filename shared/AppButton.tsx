"use client";
//NOTE: MUI doesn't yet put "use client" in their component there is need for a wrapper
//See: https://beta.nextjs.org/docs/rendering/server-and-client-components#third-party-packages

import Button from "@mui/material/Button";

export default function MyButton(props: { children: React.ReactNode; }){
	const { children}= props;
	return (
		<Button>{children}</Button>
	);
}