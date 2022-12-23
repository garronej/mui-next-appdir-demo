
# Next 13 AppDir MUI setup

Setup to get SSR working in an AppDir setup (using [tss-react](https://tss-react.dev) tooling).  

Note that MUI components doesn't include the `"use client";` directive yet so they can only be used
in components that are themselves labeled as client. [See Next doc](https://beta.nextjs.org/docs/rendering/server-and-client-components#third-party-packages)  

https://user-images.githubusercontent.com/6702424/209325604-51fd395c-521e-47b8-99b2-a4f908162047.mov

```bash
git clone https://github.com/garronej/mui-next-appdir-demo
cd mui-next-appdir-demo
yarn
yarn dev
```

Give [TSS](https://tss-react.dev) a spin, trying it is adoping it 😉
