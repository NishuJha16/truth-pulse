import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as Loader } from "../../assets/images/loader.svg";

const CurrentWeather = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData(latitude, longitude);
    }
  }, [latitude, longitude]);

  const fetchWeatherData = async (lat: number, lon: number) => {
    const apiKey = "6dbc0758d55a50980b6067958de28857";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const data = await response.data;
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };
  return (
    <Box display={"flex"} gap={4}>
      {latitude && longitude ? (
        <div>
          {weather ? (
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Box
                p={1}
                borderRadius={"50%"}
                sx={{
                  background: "#f44336",
                  display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                }}
                alignItems={"center"}
                justifyContent={"center"}
                width={36}
                height={36}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  width={36}
                  height={36}
                  alt="weather"
                />
              </Box>
              <Box
                display={"flex"}
                width={"100%"}
                flexDirection={"column"}
                justifyContent={"start"}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: { lg: 20, md: 18, xs: 12 } }}
                >
                  {weather.main.temp} °C
                </Typography>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 500,
                    fontSize: { lg: 12, md: 12, xs: 10 },
                  }}
                  color={"text.secondary"}
                >
                  {weather.weather[0].description}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </Box>
  );
};
export default CurrentWeather;
