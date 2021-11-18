import type { Context } from "@divriots/studio-doc-compiler";
import { PageGraph, buildGraph } from "./PageGraph";
import "./CoreLayout.scss";
import { NavBar } from "./NavBar";
import React, { ReactChildren, ReactChild } from "react";

export const CoreLayout = ({
  __context,
  children,
  articleClassName,
  ...props // MDX exports
}: {
  __context: Context; // Layout Context
  children: ReactChild | ReactChildren; // MDX Content
  articleClassName: string; // class to apply to <article>
}) => {
  const graph: PageGraph = buildGraph(__context);
  return (
    <main>
      <NavBar graph={graph} {...props} />
      <article className={articleClassName}>{children}</article>
    </main>
  );
};
