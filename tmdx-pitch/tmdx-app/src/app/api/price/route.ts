import { NextResponse } from "next/server";

export interface PriceData {
  price: number;
  pct: number;
  post: number | null;
  postPct: number | null;
}

// Cache for 60 s; stale-while-revalidate for another 30 s
export const revalidate = 60;

/**
 * Fetch TMDX live price from Yahoo Finance v8 chart API.
 * Running server-side avoids CORS; Yahoo blocks browser-origin requests.
 *
 * Response shape (abbreviated):
 *   chart.result[0].meta.{
 *     regularMarketPrice, regularMarketChangePercent,
 *     marketState,           // "REGULAR" | "PRE" | "POST" | "POSTPOST" | "CLOSED"
 *     postMarketPrice, postMarketChangePercent   // only when marketState === "POST"
 *   }
 */
async function fetchYahoo(): Promise<PriceData> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000); // 5 s hard timeout

  try {
    const res = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/TMDX?interval=1d&range=1d",
      {
        signal: controller.signal,
        headers: {
          // Yahoo blocks default fetch UA; mimic a real browser
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "application/json",
        },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) throw new Error(`Yahoo responded ${res.status}`);

    const json = await res.json();
    const meta = json?.chart?.result?.[0]?.meta;
    if (!meta?.regularMarketPrice) throw new Error("Unexpected Yahoo shape");

    const isPostMarket =
      meta.marketState === "POST" || meta.marketState === "POSTPOST";

    return {
      price: meta.regularMarketPrice,
      pct: meta.regularMarketChangePercent ?? 0,
      post: isPostMarket ? (meta.postMarketPrice ?? null) : null,
      postPct: isPostMarket ? (meta.postMarketChangePercent ?? null) : null,
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  try {
    const data = await fetchYahoo();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (err) {
    console.error("[/api/price] All sources failed:", err);
    // Return 502 so the client can fall back to the Yahoo Finance link
    return NextResponse.json({ error: "Price unavailable" }, { status: 502 });
  }
}
