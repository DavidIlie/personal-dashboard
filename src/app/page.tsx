import React from "react";

import { pinnedPages } from "~/data/pinnedPages";

import Header from "./Header";
import Pins from "./Pins";
import Articles from "./Articles";

const Page = async () => {
   const articles = await fetch(
      `https://newsapi.org/v2/everything?q=technology&sources=the-verge&sortBy=publishedAt&pageSize=12&apiKey=${process.env.NEWS_API_KEY}`
   );

   return (
      <div className="min-h-screen px-6 py-6 md:px-16 md:py-16 xl:px-24 xl:py-16 2xl:px-32 2xl:py-18 3xl:px-72 3xl:py-24 ">
         <Header
            weather_api_key={process.env.WEATHER_API_KEY as any}
            ip_locator_key={process.env.IP_LOCATOR_KEY as any}
            name={process.env.NAME as any}
         />
         <Pins pins={pinnedPages} />
         {articles.status === 200 && (
            <Articles articles={(await articles.json()).articles} />
         )}
      </div>
   );
};

export default Page;
