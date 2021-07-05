import { getHumanizedDate } from "@lib/getHumanizedDate";
import dateFormat from "dateformat";
import { NextSeo } from "next-seo";
import { Fade } from "react-awesome-reveal";

import PinnedService from "@components/PinnedService";

import { pinnedPages } from "@data/pinnedPages";

export default function Home() {
    var now = new Date();
    return (
        <>
            <NextSeo title="Home" />
            <div class="h-screen">
                <div className="2xl:px-72 xl:px-32 md:px-16 2xl:pt-24 xl:pt-24 md:pt-16 px-6 pt-6">
                    <Fade delay={500} direction="down" triggerOnce>
                        <p className="ml-1 font-semibold text-xl gradient-text">
                            {dateFormat(now, "dddd, dS mmmm yyyy, h:MM TT")}
                        </p>
                    </Fade>
                    <Fade direction="left" triggerOnce>
                        <h1 className="2xl:text-5xl xl:text-5xl text-4xl font-semibold">
                            {getHumanizedDate()},{" "}
                            <span className="gradient-text">David!</span>
                        </h1>
                    </Fade>
                    <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
                        <Fade delay={1000} direction="up" triggerOnce>
                            {pinnedPages.map((pin, index) => (
                                <PinnedService key={index} {...pin} />
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
}
