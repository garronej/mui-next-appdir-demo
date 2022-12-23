import React from "react";
import { createMyComponent } from "../shared/MyComponent";

const { MyComponent } = createMyComponent();

function DefaultPage() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default DefaultPage;
