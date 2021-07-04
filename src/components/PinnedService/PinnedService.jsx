import { useState } from "react";
import { FaLock } from "react-icons/fa";
import Image from "next/image";

import Tooltip from "@ui/Tooltip";

export const PinnedService = ({ name, type, url, image, authelia }) => {
    const [color, setColor] = useState("#212622");

    // offline: #dc3545
    // online: #28a745
    // pending: #212622

    return (
        <a
            href={url}
            target="_blank"
            className="bg-gray-800 border-2 border-gray-700 rounded-xl p-4 overflow-hidden shadow-xl flex hoverItem duration-200 items-center gap-4"
            style={{
                width: "400px",
                height: "80px",
                borderLeft: `10px solid ${color}`,
            }}
        >
            <div className="mt-2">
                <Image src={image} width="50%" height="50%" blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIklEQVQImWNgYBDnFZCxsfc0tvJkCI/O+vP/f0tdhZK8CgBLPAfARKUieAAAAABJRU5ErkJggg=="
                }
                    placeholder="blur" />
            </div>
            <div className="w-full">
                {authelia && (
                    <div className="float-right mr-5 mt-4">
                        <Tooltip content="This is page is protected by Authelia.">
                            <div>
                                <FaLock />
                            </div>
                        </Tooltip>
                    </div>
                )}
                <div>
                    <h1>
                        {name} <span className="text-gray-500">- {type}</span>
                    </h1>
                    <p className="text-gray-400 truncate">
                        {url.split("https://").pop()}
                    </p>
                </div>
            </div>
        </a>
    );
};
