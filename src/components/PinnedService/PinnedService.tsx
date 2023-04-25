import { useState } from "react";
import { FaLock } from "react-icons/fa";
import Image from "next/image";

import Tooltip from "@ui/Tooltip";

interface PinnedServiceProps {
   name: string;
   type?: string;
   url: string;
   image: string;
   authelia: boolean;
}

export const PinnedService = ({
   name,
   type,
   url,
   image,
   authelia,
}: PinnedServiceProps): JSX.Element => {
   const [color, setColor] = useState("#212622");

   // offline: #dc3545
   // online: #28a745
   // pending: #212622

   return (
      <a
         href={url}
         className="flex items-center max-w-xl gap-4 p-4 mb-2 overflow-hidden duration-200 bg-gray-800 border-2 border-gray-700 shadow-xl rounded-xl hoverItem"
         style={{
            height: "80px",
            borderLeft: `10px solid ${color}`,
         }}
      >
         <div className="mt-2">
            <Image
               src={image}
               width={name === "Plausible" ? 40 : 50}
               height={50}
               blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIklEQVQImWNgYBDnFZCxsfc0tvJkCI/O+vP/f0tdhZK8CgBLPAfARKUieAAAAABJRU5ErkJggg=="
               }
               placeholder="blur"
               alt={name}
            />
         </div>
         <div className="w-full">
            {authelia && (
               <div className="float-right mt-4 mr-5">
                  <Tooltip
                     content="This is page is protected by Authelia."
                     animation="shift-away"
                  >
                     <div>
                        <FaLock />
                     </div>
                  </Tooltip>
               </div>
            )}
            <div>
               <h1>
                  {name}{" "}
                  {typeof type === "string" && (
                     <span className="text-gray-500">- {type}</span>
                  )}
               </h1>
               <p className="text-gray-400 truncate">
                  {url.split("https://").pop()}
               </p>
            </div>
         </div>
      </a>
   );
};
