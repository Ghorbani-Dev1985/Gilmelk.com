import { MetadataRoute } from "next";

const SiteUrl = process.env.NEXT_PUBLIC_BASE_URL

let Items = Array.from({ length: 10 }, (_v,i) => ({url: `${SiteUrl}/read/${i+1}`, lastModified: new Date() }));

export default function sitemap(): MetadataRoute.Sitemap {
 
  return [
    {
      url: `${SiteUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${SiteUrl}/estate`,
      lastModified: new Date(),
    },
   ];

}