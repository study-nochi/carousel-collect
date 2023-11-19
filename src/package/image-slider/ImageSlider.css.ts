import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "300vw",
  transition: "transform 500ms",
});

export const inner = style({
  width: "100vw",
  float: "left",
});

export const warpper = style({
  overflow: "hidden",
});

globalStyle(`${inner} img`, {
  width: "100%",
  height: 500,
});
