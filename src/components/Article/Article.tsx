import { formatDistance } from "date-fns";
import Image from "next/image";
import { shimmer } from "@lib/shimmer";

interface ArticleProps {
    description: string;
    publishedAt: Date;
    title: string;
    url: string;
    urlToImage: string;
    source: {
        name: string;
    };
}

export const Article = ({
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
}: ArticleProps): JSX.Element => {
    return (
        <a
            className="px-4 xl:max-w-sm max-w-md hoverItem duration-200"
            href={url}
            target="_blank"
        >
            <div className="bg-gray-800 border-2 border-gray-700 shadow-2xl rounded-lg mb-6 tracking-wide">
                <div className="md:flex-shrink-0">
                    <Image
                        src={`/api/imageproxy?url=${urlToImage}`}
                        width="500px"
                        height="300px"
                        className="object-cover h-64 w-full rounded-lg rounded-b-none"
                        placeholder="blur"
                        blurDataURL={shimmer(1920, 1080)}
                    />
                </div>
                <div className="px-4 py-2 -mt-1.5 border-t-4 border-gray-700">
                    <h2 className="font-bold text-2xl text-white tracking-normal truncate">
                        {title}
                    </h2>
                    <p className="text-md mt-5 text-white truncate-2-lines">
                        {description}
                    </p>
                    <div className="author flex items-center mr-1 my-3">
                        <h2 className="text-md tracking-tighter text-gray-200">
                            <span className="text-gray-400">
                                {formatDistance(
                                    new Date(publishedAt),
                                    Date.now(),
                                    {
                                        addSuffix: true,
                                    }
                                )}
                            </span>{" "}
                            on {source.name}
                        </h2>
                    </div>
                </div>
            </div>
        </a>
    );
};
