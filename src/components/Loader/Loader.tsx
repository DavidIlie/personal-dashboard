import { NextSeo } from "next-seo";
import { Fade } from "react-awesome-reveal";

export const Loader = () => {
    return (
        <>
            <NextSeo title="Loading" />
            <section className="bg-gray-800 h-screen flex justify-center items-center">
                <Fade>
                    <div className="loading-loader">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </Fade>
            </section>
        </>
    );
};
