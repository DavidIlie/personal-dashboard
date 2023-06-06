import { NextRequest } from "next/server";

import { env } from "~/env.mjs";

export const GET = async (req: NextRequest) => {
   const lat = req.nextUrl.searchParams.get("lat");
   const lon = req.nextUrl.searchParams.get("lon");

   if (!lat)
      return new Response(JSON.stringify({ message: "no lat" }), {
         status: 400,
      });
   if (!lon)
      return new Response(JSON.stringify({ message: "no lon" }), {
         status: 400,
      });

   const locationReq = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${env.WEATHER_API_KEY}`
   );
   const response = await locationReq.json();

   if (response[0] !== undefined) {
      const weatherRequest = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${response[0].name}&appid=${env.WEATHER_API_KEY}`
      );
      const { weather, main } = await weatherRequest.json();
      return new Response(
         JSON.stringify({
            weather,
            main,
            city: response[0].name,
            country: response[0].country,
         })
      );
   }

   return new Response(JSON.stringify({ message: "no" }));
};
