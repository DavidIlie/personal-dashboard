import { formatDistance } from "date-fns";
import Image from "next/image";

export const Article = ({
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
}) => {
    return (
        <a
            className="px-4 xl:max-w-sm max-w-md hoverItem duration-200"
            href={url}
            target="_blank"
        >
            <div className="bg-gray-800 border-2 border-gray-700 shadow-2xl rounded-lg mb-6 tracking-wide">
                <div className="md:flex-shrink-0">
                    <Image
                        src={urlToImage}
                        width="500px"
                        height="300px"
                        blurDataURL={
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIklEQVQImWNgYBDnFZCxsfc0tvJkCI/O+vP/f0tdhZK8CgBLPAfARKUieAAAAABJRU5ErkJggg=="
                        }
                        placeholder="blur"
                        className="object-cover h-64 w-full rounded-lg rounded-b-none"
                    />
                </div>
                <div className="px-4 py-2 mt-2">
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
                                    { addSuffix: true }
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
