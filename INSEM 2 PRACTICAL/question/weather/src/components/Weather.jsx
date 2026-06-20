import  { useState, useEffect } from "react";
import "../index.css";
function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
     
        try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();
        setWeather(data.current_weather || null);
        
      } 
      catch (err) {
        setError("Failed to load weather: " + err.message);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <h2>Loading Weather Information...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!weather) return <h2>No weather data available</h2>;

  const windSpeedKmh = (weather.windspeed * 3.6).toFixed(1);

  return (
    <div className="container">
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temperature} °C</p>
      <p>Wind Speed: {windSpeedKmh} km/h</p>
      <p>Wind Direction: {weather.winddirection}°</p>
    </div>
  );
}

export default Weather;
