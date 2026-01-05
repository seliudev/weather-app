import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import CurrentWeather from "./components/CurrentWeather"
import HourlyForecast from "./components/HourlyForecast"
import RefreshButton from "./components/RefreshButton"
import Loading from "./components/Loading"
import ErrorMessage from "./components/ErrorMessage"
import { fetchWeather } from "./utils/fetchWeather.ts"
import { type WeatherData } from "./types/weather"

const App = () => {
    const [location, setLocation] = useState<string>("")
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const loadWeather = async (loc: string) => {
        try {
            setLoading(true)
            setError(null)
            setLocation(loc)

            const data = await fetchWeather(loc)
            setWeather(data)
        } catch {
            setError("Failed to fetch weather data")
        } finally {
            setLoading(false)
        }
    }

    // Default: user's current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords
                loadWeather(`${latitude},${longitude}`)
            },
            () => {
                loadWeather("London")
            }
        )
    }, [])

    return (
        <div className="min-h-screen bg-blue-200 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
                <SearchBar onSearch={loadWeather} />
                <RefreshButton onRefresh={() => loadWeather(location)} />

                {loading && <Loading />}
                {error && <ErrorMessage message={error} />}

                {weather && !loading && (
                    <>
                        <CurrentWeather data={weather} />
                        <HourlyForecast data={weather} />
                    </>
                )}
            </div>
        </div>
    )
}

export default App
