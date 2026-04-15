import { NextResponse } from "next/server";

export interface PriceData {
  price: number;
  pct: number;
  post: number | null;
  postPct: number | null;
}

// Revalidate at most once every 60 seconds (ISR-style caching)
export const revalidate = 60;

export async function GET() {
  try {
    // The Vercel proxy returns JSONP: tmdxPrice({...});
    // Fetching server-side eliminates CORS entirely.
    const res = await fetch(
      "https://tmdx-price-proxy.vercel.app/api/price?cb=tmdxPrice",
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error(`Proxy responded ${res.status}`);

    const text = await res.text();

    // Strip JSONP wrapper: tmdxPrice({...}); → {...}
    const jsonMatch = text.match(/tmdxPrice\((\{.*\})\)/s);
    if (!jsonMatch) throw new Error("Unexpected proxy format");

    const data: PriceData = JSON.parse(jsonMatch[1]);

    return NextResponse.json(data, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30" },
    });
  } catch (err) {
    console.error("[/api/price]", err);
    return NextResponse.json({ error: "Price unavailable" }, { status: 502 });
  }
}
