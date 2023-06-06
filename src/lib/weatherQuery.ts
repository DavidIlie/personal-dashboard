export default async function weatherQuery(
   setWeather: (s: any) => void,
   setLocation: (s: any) => void
) {
   try {
      const { latitude, longitude } = await getCurrentLocation();
      const weatherData = await getWeatherDataByCoordinates(
         latitude,
         longitude
      );
      setWeather({ weather: weatherData.weather, main: weatherData.main });
      setLocation({ city: weatherData.name, country: weatherData.country });
   } catch (error) {
      console.error("Error fetching weather data:", error);
      const locationData = await getLocationByIP();
      const weatherData = await getWeatherDataByCity(locationData.city);
      setWeather({ weather: weatherData.weather, main: weatherData.main });
      setLocation({ city: weatherData.city, country: weatherData.country });
   }
}

const getCurrentLocation = async () => {
   return new Promise<{ latitude: number; longitude: number }>(
      (resolve, reject) => {
         navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error)
         );
      }
   );
};

const getWeatherDataByCoordinates = async (
   latitude: number,
   longitude: number
) => {
   const response = await fetch(
      `/api/getWeather?lat=${latitude}&lon=${longitude}`
   );
   if (!response.ok) {
      throw new Error("Failed to fetch weather data");
   }
   return response.json();
};

const getLocationByIP = async () => {
   const response = await fetch(`http://ip-api.com/json/?fields=61439`);
   if (!response.ok) {
      throw new Error("Failed to fetch location data");
   }
   return response.json();
};

const getWeatherDataByCity = async (city: string) => {
   const response = await fetch(`/api/getWeatherByCity?city=${city}`);
   if (!response.ok) {
      throw new Error("Failed to fetch weather data");
   }
   return response.json();
};
