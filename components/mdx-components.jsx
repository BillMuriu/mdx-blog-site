import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { Button } from "./ui/button";

const useMDXComponent = (code) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  Button,
};

function MDXContent({ code }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}

export { MDXContent };
