const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const fetchWeather = async (location: string) => {
    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}`
    )

    if (!response.ok) {
        throw new Error("Failed to fetch weather data")
    }

    return response.json()
}
