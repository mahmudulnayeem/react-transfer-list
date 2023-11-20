import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "React transfer list",
    short_name: "React transfer list",
    description:
      "The Transfer List project provides a versatile and customizable solution for managing and transferring items between two lists. This interactive and user-friendly component is designed to streamline data transfer operations within your web application.",
    start_url: "/",
    display: "standalone",
    background_color: "#111",
    theme_color: "#008080",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
