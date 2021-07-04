import { getHumanizedDate } from "@lib/getHumanizedDate";
import dateFormat from "dateformat";
import { NextSeo } from "next-seo";
import { Fade } from "react-awesome-reveal";

import PinnedService from "@components/PinnedService";

export default function Home() {
    var now = new Date();
    return (
        <>
            <NextSeo title="Home" />
            <div className="2xl:px-96 xl:px-96 md:px-32 2xl:py-24 xl:py-24 md:py-16 px-6 py-6">
                <Fade delay={500} direction="down" triggerOnce>
                    <p className="ml-1 font-semibold text-xl gradient-text">
                        {dateFormat(now, "dddd, d mmmm yyyy").toUpperCase()}
                    </p>
                </Fade>
                <Fade direction="left" triggerOnce>
                    <h1 className="text-5xl font-semibold">
                        {getHumanizedDate()},{" "}
                        <span className="gradient-text">David!</span>
                    </h1>
                </Fade>
                <div className="mt-10 flex flex-col justify-center items-center gap-4">
                    <PinnedService
                        name="Nucleus"
                        type="Hypervisor"
                        url="https://nucleus.davidapps.dev"
                        image="https://user-images.githubusercontent.com/47594764/124385080-8c4d8480-dcd4-11eb-9dbb-090f17f5b7ec.png"
                        authelia={false}
                    />
                </div>
            </div>
        </>
    );
}
