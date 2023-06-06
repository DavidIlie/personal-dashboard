import React from "react";

import { pinnedPages } from "~/data/pinnedPages";

import Header from "./Header";
import Pins from "./Pins";
import Articles from "./Articles";

const Page = async () => {
   const articles = await fetch("http://127.0.0.1:3000/api/getNews", {
      cache: "no-store",
   });
   return (
      <div className="min-h-screen px-6 py-6 md:px-16 md:py-16 xl:px-24 xl:py-16 2xl:px-32 2xl:py-18 3xl:px-72 3xl:py-24 ">
         <Header />
         <Pins pins={pinnedPages} />
         {articles.status === 200 && (
            <Articles articles={await articles.json()} />
         )}
      </div>
   );
};

export default Page;
