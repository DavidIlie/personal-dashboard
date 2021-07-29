import { useState } from "react";
import { useQuery } from "react-query";
import dateFormat from "dateformat";
import { NextSeo } from "next-seo";
import { Fade } from "react-awesome-reveal";

import PinnedService from "@components/PinnedService";
import Article from "@components/Article";
import Tooltip from "@ui/Tooltip";

import { pinnedPages } from "@data/pinnedPages";
import { getHumanizedDate } from "@lib/getHumanizedDate";

interface HomeProps {
    articles: [
        {
            description: string;
            publishedAt: Date;
            title: string;
            url: string;
            urlToImage: string;
            source: {
                name: string;
            };
        }
    ];
    weather_api_key: string;
    ip_locator_key: string;
}

interface weatherProps {
    weather: [
        {
            description: string;
        }
    ];
    main: {
        temp: number;
        feels_like: number;
    };
}

const Home = ({
    articles,
    weather_api_key,
    ip_locator_key,
}: HomeProps): JSX.Element => {
    var now = new Date();

    function capitalizeTheFirstLetterOfEachWord(words: string) {
        var separateWord = words.toLowerCase().split(" ");
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] =
                separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(" ");
    }

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

    const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

    const { isLoading, data } = useQuery(
        `getLocation`,
        async () => {
            const ipReq = await fetch(
                `https://api.ipregistry.co/?key=${ip_locator_key}`
            );
            const response = await ipReq.json();

            if (response.location !== undefined) {
                const weatherRequest = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${response.location.city}&appid=${weather_api_key}`
                );
                const { weather, main } = await weatherRequest.json();
                setWeather({ weather, main });
                return {
                    city: response.location.city,
                    region: response.location.region.name,
                };
            }
        },
        {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: twentyFourHoursInMs,
        }
    );

    return (
        <>
            <NextSeo title="Home" />
            <div className="3xl:px-72 2xl:px-32 xl:px-24 md:px-16 3xl:pt-24 2xl:pt-18 xl:pt-16 md:pt-16 px-6 pt-6">
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
                    <p className="ml-1 mt-2 font-semibold text-xl">
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
                        degrees in{" "}
                        {!isLoading && (
                            <>
                                {" "}
                                <Tooltip
                                    content={data.region}
                                    animation="shift-away"
                                >
                                    <span className="gradient-text cursor-pointer">
                                        {data.city}
                                    </span>
                                </Tooltip>
                            </>
                        )}
                    </p>
                </Fade>
                <Fade delay={750} direction="left" triggerOnce>
                    <h1 className="mt-8 2xl:text-4xl xl:text-4xl text-3xl font-semibold">
                        Saved <span className="gradient-text">pages</span>:
                    </h1>
                </Fade>
                <div className="flex justify-center">
                    <div className="mt-10 mb-5 grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
                        <Fade delay={1000} direction="up" triggerOnce>
                            {pinnedPages.map((pin, index) => (
                                <PinnedService key={index} {...pin} />
                            ))}
                        </Fade>
                    </div>
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
                                <Article
                                    key={index}
                                    description={article.description}
                                    publishedAt={article.publishedAt}
                                    title={article.title}
                                    url={article.url}
                                    urlToImage={article.urlToImage}
                                    source={article.source}
                                />
                            ))}
                    </div>
                </Fade>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const postRequest = await fetch(
        `https://newsapi.org/v2/everything?q=technology&sources=the-verge&sortBy=publishedAt&pageSize=8&apiKey=${process.env.NEWS_API_KEY}`
    );
    const { articles } = await postRequest.json();

    return {
        props: {
            articles: articles,
            weather_api_key: process.env.WEATHER_API_KEY,
            ip_locator_key: process.env.IP_LOCATOR_KEY,
        },
    };
}

export default Home;
