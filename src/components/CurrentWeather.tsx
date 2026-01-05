//Now
import type {WeatherData} from "../types/weather"

type Props = {
    data: WeatherData
}

const CurrentWeather = ({ data }: Props) => {
    const current = data.currentConditions

    return (
        <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-2xl font-bold">{data.resolvedAddress}</h2>
            <p className="text-gray-600">{current.conditions}</p>

            <div className="mt-4 grid grid-cols-2 gap-4">
                <p>🌡 {current.temp}°C</p>
                <p>💨 {current.windspeed} km/h</p>
                <p>🌧 {current.precipprob}%</p>
            </div>
        </div>
    )
}

export default CurrentWeather
