export default async function weatherQuery(
    setWeather: any,
    setLocation: any,
    weather_api_key: string,
    ip_locator_key: string
) {
    var lat: number, lon: number;
    var locationPromise = new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                lat = pos.coords.latitude;
                lon = pos.coords.longitude;
                resolve({ lat, lon, undefined });
            },
            () => {
                resolve({ lat: 0, lon: 0, error: "error" });
            }
        );
    });

    locationPromise.then(
        async ({
            lat,
            lon,
            error,
        }: {
            lat: number;
            lon: number;
            error: string;
        }) => {
            if (!error) {
                const locationReq = await fetch(
                    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${weather_api_key}`
                );
                const response = await locationReq.json();

                if (response[0] !== undefined) {
                    const weatherRequest = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?q=${response[0].name}&appid=${weather_api_key}`
                    );
                    const { weather, main } = await weatherRequest.json();
                    setWeather({ weather, main });
                    setLocation({
                        city: response[0].name,
                        country: response[0].country,
                    });
                }
            } else {
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
                    setLocation({
                        city: response.location.city,
                        country: response.location.region.name,
                    });
                }
            }
        }
    );
}
