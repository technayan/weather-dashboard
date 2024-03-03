import { useContext, useEffect, useState } from "react";
import FewClouds from "../assets/backgrounds/few-clouds.jpg";
import Mist from "../assets/backgrounds/mist.jpeg";
import RainyDay from "../assets/backgrounds/rainy-day.jpg";
import ScatteredClouds from "../assets/backgrounds/scattered-clouds.jpg";
import Snow from "../assets/backgrounds/snow.jpg";
import Sunny from "../assets/backgrounds/sunny.jpg";
import ThunderStorm from "../assets/backgrounds/thunderstorm.jpg";
import Winter from "../assets/backgrounds/winter.jpg";
import Header from "../components/Header/Header";
import WeatherBoard from "../components/Weather/WeatherBoard";
import { WeatherContext } from "../context";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);

  const [climateImage, setClimateImage] = useState("");

  const getBackgroundImage = (climate) => {
    switch (climate) {
      case "Rain":
        return RainyDay;
      case "Clouds":
        return ScatteredClouds;
      case "Clear":
        return Sunny;
      case "Snow":
        return Snow;
      case "Thunder":
        return ThunderStorm;
      case "Fog":
        return Winter;
      case "Haze":
        return FewClouds;
      case "Mist":
        return Mist;
      default:
        return Sunny;
    }
  };

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-3xl">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid place-items-center h-screen"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
