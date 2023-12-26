import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanity = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-21",
  token: import.meta.env.VITE_SANITY_API_TOKEN,
  useCdn: import.meta.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(sanity);

export { sanity, builder };
