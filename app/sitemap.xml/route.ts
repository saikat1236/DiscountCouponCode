import { NextResponse } from "next/server"

const storeData = {
  prepladder: { name: "PrepLadder" },
  cerebellum: { name: "Cerebellum" },
  dams: { name: "Dams" },
  dbmci: { name: "DBMCI" },
  egurukul: { name: "eGurukul" },
  meded: { name: "MedEd" },
  medace: { name: "Medace" },
}

export async function GET() {
  const baseUrl = "https://neetpgandfmgediscountcode.com"

  const storeUrls = Object.keys(storeData).map((slug) => {
    return `
      <url>
        <loc>${baseUrl}/store/${slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${storeUrls.join("")}
    </urlset>
  `

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
