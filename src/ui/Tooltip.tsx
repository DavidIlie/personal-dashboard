import Tippy from "@tippyjs/react";
import React from "react";

type ToolTipAnimation = "shift-away" | "shift-toward" | "scale" | "perspective";

interface ToolTipProps {
  children: any;
  content: string;
  animation: ToolTipAnimation;
}

export default function Tooltip({
  children,
  content,
  animation,
}: ToolTipProps): JSX.Element {
  return (
    <Tippy
      content={content}
      hideOnClick={true}
      animation={animation ? animation : "shift-away"}
    >
      {children}
    </Tippy>
  );
}
