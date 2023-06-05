"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

import { Article, ArticleProps } from "~/components/Article";

const Articles: React.FC<{ articles: ArticleProps[] }> = ({ articles }) => {
   return (
      <>
         <Fade delay={1250} direction="left" triggerOnce>
            <h1 className="text-3xl font-semibold 2xl:text-4xl xl:text-4xl">
               Today on the <span className="gradient-text">news</span>:
            </h1>
         </Fade>
         <div className="flex justify-center">
            <Fade delay={2000} triggerOnce>
               <div className="grid w-full mt-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                  {articles
                     ?.sort(
                        (a, b) =>
                           new Date(a.publishedAt).getTime() -
                           new Date(b.publishedAt).getTime()
                     )
                     .reverse()
                     .map((article, index) => (
                        <Article key={index} {...article} />
                     ))}
               </div>
            </Fade>
         </div>
      </>
   );
};

export default Articles;
