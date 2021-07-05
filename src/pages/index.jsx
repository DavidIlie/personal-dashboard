import { getHumanizedDate } from "@lib/getHumanizedDate";
import dateFormat from "dateformat";
import { NextSeo } from "next-seo";
import { Fade } from "react-awesome-reveal";

import PinnedService from "@components/PinnedService";
import Article from "@components/Article";

import { pinnedPages } from "@data/pinnedPages";

const Home = ({ articles, weather }) => {
    var now = new Date();

    function capitalizeTheFirstLetterOfEachWord(words) {
        var separateWord = words.toLowerCase().split(" ");
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] =
                separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(" ");
    }

    return (
        <>
            <NextSeo title="Home" />
            <div className="2xl:px-72 xl:px-32 md:px-16 2xl:pt-24 xl:pt-24 md:pt-16 px-6 pt-6">
                <Fade delay={500} direction="down" triggerOnce>
                    <p className="ml-1 font-semibold text-xl gradient-text">
                        {dateFormat(now, "dddd, dS mmmm yyyy, h:MM TT")}
                    </p>
                </Fade>
                <Fade direction="left" triggerOnce>
                    <h1 className="2xl:text-5xl xl:text-5xl text-4xl font-semibold">
                        {getHumanizedDate()}{" "}
                        <span className="gradient-text">David!</span>
                    </h1>
                </Fade>
                <Fade delay={750} direction="up" triggerOnce>
                    <p className="ml-1 font-semibold text-xl">
                        <span className="gradient-text">
                            {capitalizeTheFirstLetterOfEachWord(
                                weather.weather[0].description
                            )}
                        </span>
                        ,{" "}
                        <span className="gradient-text">
                            {Math.trunc(weather.main.temp - 273.15)}
                        </span>{" "}
                        degrees, but feels like{" "}
                        <span className="gradient-text">
                            {Math.trunc(weather.main.feels_like - 273.15)}{" "}
                        </span>
                        degrees
                    </p>
                </Fade>
                <Fade delay={750} direction="left" triggerOnce>
                    <h1 className="mt-8 2xl:text-4xl xl:text-4xl text-3xl font-semibold">
                        Saved <span className="gradient-text">pages</span>:
                    </h1>
                </Fade>
                <div className="mt-10 mb-5 flex flex-wrap justify-center items-center gap-6">
                    <Fade delay={1000} direction="up" triggerOnce>
                        {pinnedPages.map((pin, index) => (
                            <PinnedService key={index} {...pin} />
                        ))}
                    </Fade>
                </div>
                <Fade delay={1250} direction="left" triggerOnce>
                    <h1 className="2xl:text-4xl xl:text-4xl text-3xl font-semibold">
                        Today on the <span className="gradient-text">news</span>
                        :
                    </h1>
                </Fade>
                <Fade delay={2000} triggerOnce>
                    <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                        {articles
                            .sort(
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

export async function getServerSideProps() {
    const postRequest = await fetch(
        `https://newsapi.org/v2/everything?q=technology&sources=the-verge&sortBy=publishedAt&pageSize=16&apiKey=${process.env.NEWS_API_KEY}`
    );
    const { articles } = await postRequest.json();

    const weatherRequest = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Alicante&appid=${process.env.WEATHER_API_KEY}`
    );
    const { weather, main } = await weatherRequest.json();

    return { props: { articles: articles, weather: { weather, main } } };
}

export default Home;
