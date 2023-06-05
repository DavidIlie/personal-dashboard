import { formatDistance } from "date-fns";
import Image from "next/image";
import { shimmer } from "~/lib/shimmer";

export interface ArticleProps {
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
         className="max-w-md mx-4 duration-200 xl:max-w-sm hoverItem"
         href={url}
         target="_blank"
      >
         <div className="mb-6 tracking-wide bg-gray-800 border-2 border-gray-700 rounded-lg shadow-2xl">
            <div className="md:flex-shrink-0">
               <Image
                  src={`/proxy?url=${urlToImage}`}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64 rounded-lg rounded-b-none"
                  placeholder="blur"
                  blurDataURL={shimmer(1920, 1080)}
                  alt="Proxied Article Photo"
               />
            </div>
            <div className="px-4 py-2 -mt-1.5 border-t-4 border-gray-700">
               <h2 className="text-2xl font-bold tracking-normal text-white truncate">
                  {title}
               </h2>
               <p className="mt-5 text-white text-md truncate-2-lines">
                  {description}
               </p>
               <div className="flex items-center my-3 mr-1 author">
                  <h2 className="tracking-tighter text-gray-200 text-md">
                     <span className="text-gray-400">
                        {formatDistance(new Date(publishedAt), Date.now(), {
                           addSuffix: true,
                        })}
                     </span>{" "}
                     on {source.name}
                  </h2>
               </div>
            </div>
         </div>
      </a>
   );
};
