export const PinnedService = ({ name, type, url, image, authelia }) => {
    console.log(name, url, image, authelia);
    // offline: #dc3545
    // online: #28a745
    return (
        <div
            className="bg-gray-800  rounded-xl p-4 overflow-auto hoverItem duration-200"
            style={{
                width: "450px",
                height: "75px",
                borderLeft: "10px solid #28a745",
            }}
        >
            <div>
                <h1>
                    {name} <span className="text-gray-500">- {type}</span>
                </h1>
            </div>
        </div>
    );
};
