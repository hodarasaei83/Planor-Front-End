import { createElement } from "react";

import type { ComponentProps } from "react";

type SVGElementType =
  | "circle"
  | "ellipse"
  | "g"
  | "line"
  | "path"
  | "polygon"
  | "polyline"
  | "rect";

type IconNode = [element: SVGElementType, attrs: Record<string, string>];

export const createIconSvg = (
  attrs: ComponentProps<"svg">,
  node: IconNode[]
) => {
  return createElement(
    "svg",
    {
      ...attrs,
      xmlns: "http://www.w3.org/2000/svg",
    },
    ...node.map(([element, attrs]) => createElement(element, attrs))
  );
};
