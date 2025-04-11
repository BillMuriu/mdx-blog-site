import Image from "next/image";
import Link from "next/link";
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
  a: ({ href, ...props }) =>
    href?.startsWith("http") ? (
      <a href={href} {...props} target="_blank" rel="noopener noreferrer" />
    ) : (
      <Link href={href} {...props} />
    ),
};

function MDXContent({ code }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}

export { MDXContent };
