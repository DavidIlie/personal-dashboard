"use client";

import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { Fade } from "react-awesome-reveal";

import { getHumanizedDate } from "~/lib/getHumanizedDate";
import weatherQuery from "~/lib/weatherQuery";
import { weatherProps, locationProps } from "~/types/weather";
import capitalizeTheFirstLetterOfEachWord from "~/lib/capitalizeTheFirstLetterOfEachWord";
import Tooltip from "~/components/Tooltip";

const Header: React.FC<{}> = () => {
   const now = new Date();

   const [weather, setWeather] = useState<weatherProps>({
      weather: [
         {
            description: "pending",
         },
      ],
      main: {
         temp: 0,
         feels_like: 0,
      },
   });

   const [location, setLocation] = useState<locationProps>({
      city: "pending",
      country: "pending",
   });

   useEffect(() => {
      const runQuery = async () => await weatherQuery(setWeather, setLocation);
      runQuery();
   }, []);

   return (
      <>
         <Fade delay={500} direction="down" triggerOnce>
            <p className="ml-1 text-xl font-semibold gradient-text">
               {dateFormat(now, "dddd, dS mmmm yyyy, h:MM TT")}
            </p>
         </Fade>
         <Fade direction="left" triggerOnce>
            <h1 className="text-4xl font-semibold 2xl:text-5xl xl:text-5xl">
               {getHumanizedDate()}{" "}
               <span className="gradient-text">David!</span>
            </h1>
         </Fade>
         <Fade delay={750} direction="up" triggerOnce>
            <p className="mt-2 ml-1 text-xl font-semibold">
               <span className="gradient-text">
                  {capitalizeTheFirstLetterOfEachWord(
                     weather.weather[0].description
                  ) || "Pending"}
               </span>
               ,{" "}
               <span className="gradient-text">
                  {Math.trunc(weather.main.temp - 273.15) || 0}
               </span>{" "}
               degrees, but feels like{" "}
               <span className="gradient-text">
                  {Math.trunc(weather.main.feels_like - 273.15) || 0}{" "}
               </span>
               degrees in{" "}
               <Tooltip content={location.country} animation="shift-away">
                  <span className="cursor-pointer gradient-text">
                     {location.city || "Pending"}
                  </span>
               </Tooltip>
            </p>
         </Fade>
      </>
   );
};
export default Header;
