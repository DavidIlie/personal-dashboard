import { env } from "~/env.mjs";

export const GET = async () => {
   const r = await fetch(
      `https://newsapi.org/v2/everything?q=technology&sources=the-verge&sortBy=publishedAt&pageSize=12&apiKey=${env.NEWS_API_KEY}`
   );

   if (r.ok) return new Response(JSON.stringify((await r.json()).articles));

   return new Response(JSON.stringify({ message: "no" }), { status: 400 });
};
