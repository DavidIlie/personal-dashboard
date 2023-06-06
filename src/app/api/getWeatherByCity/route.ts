import { NextRequest } from "next/server";

import { env } from "~/env.mjs";

export const GET = async (req: NextRequest) => {
   const city = req.nextUrl.searchParams.get("city");

   if (!city)
      return new Response(JSON.stringify({ message: "no city" }), {
         status: 400,
      });

   const weatherRequest = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.WEATHER_API_KEY}`
   );
   const res = await weatherRequest.json();
   return new Response(
      JSON.stringify({
         weather: res.weather,
         main: res.main,
         country: res.sys.country,
         city: res.name,
      })
   );
};
