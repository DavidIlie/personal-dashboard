import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
   const encoded = req.nextUrl.searchParams.get("url");

   if (!encoded) return new Response("no");

   const url = decodeURIComponent(encoded);
   const result = await fetch(url);
   const body = result.body;

   return new Response(body);
};
