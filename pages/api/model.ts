import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({
      model: "text-davinci-002-render",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=1800, stale-while-revalidate=600",
      },
    }
  );
}
