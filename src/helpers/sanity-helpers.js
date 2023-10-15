import { builder } from "@/sanity.js";

export const urlFor = (source) => {
  if (source) {
    return builder.image(source);
  }
  return "";
};
