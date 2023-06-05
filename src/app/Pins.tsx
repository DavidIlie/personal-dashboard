"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

import { PinnedService } from "~/components/PinnedService";
import { PinnedPageProps } from "~/data/pinnedPages";

const Pins: React.FC<{ pins: PinnedPageProps[] }> = ({ pins }) => {
   return (
      <>
         <Fade delay={750} direction="left" triggerOnce>
            <h1 className="mt-8 text-3xl font-semibold 2xl:text-4xl xl:text-4xl">
               Saved <span className="gradient-text">pages</span>:
            </h1>
         </Fade>
         <div className="flex justify-center">
            <div className="grid w-full grid-cols-1 gap-6 mt-10 mb-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
               <Fade delay={1000} direction="up" triggerOnce>
                  {pins.map((pin: PinnedPageProps, index: number) => (
                     <PinnedService key={index} {...pin} />
                  ))}
               </Fade>
            </div>
         </div>
      </>
   );
};

export default Pins;
