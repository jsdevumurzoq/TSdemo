import { type PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  title: string;
  image: { src: string; alt: string };
}>;

function Headers({ title, image: { src, alt } }: HeaderProps) {
  return (
    <header>
      <img src={src} alt={alt} />
      <h1>{title}</h1>
    </header>
  );
}

export default Headers;
