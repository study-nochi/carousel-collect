import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const carouselWrapper = style({
  position: "relative",
  width: "100%",
  padding: "0 10%",
  overflow: "hidden",
});

export const swipeLeft = style({
  display: "none",
  left: "0",
});

export const swipeRight = style({
  display: "none",
  right: "0",
});

export const carousel = style({
  display: "flex",
  width: "100%",
});

export const carouselItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "350px",
  padding: "10px 0 15px",
  overflow: "hidden",
  borderRight: "2px solid #fff",
  borderLeft: "2px solid #fff",
  transition: "border 300ms",
});

globalStyle(`${carouselWrapper}:hover > ${swipeLeft} `, {
  position: "absolute",
  top: "45%",
  zIndex: 1,
  display: "block",
  padding: "8px 6px",
  backgroundColor: "gray",
  borderRadius: "10px",
});
globalStyle(`${carouselWrapper}:hover > ${swipeRight} `, {
  position: "absolute",
  top: "45%",
  zIndex: 1,
  display: "block",
  padding: "8px 6px",
  backgroundColor: "gray",
  borderRadius: "10px",
});

globalStyle(`${carouselItem} > img`, {
  flexShrink: 0,
  minWidth: "100%",
  minHeight: "100%",
});
globalStyle(`${carousel} > li`, {
  flex: "none",
  objectFit: "contain",
});
