//24h past and future
import {type WeatherData } from "../types/weather"

type Props = {
    data: WeatherData
}

const HourlyForecast = ({ data }: Props) => {
    const hours = data.days.flatMap((day) => day.hours).slice(0, 48)

    return (
        <div>
            <h3 className="text-xl font-semibold mb-2">24-Hour Outlook</h3>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {hours.map((hour, index) => (
                    <div
                        key={index}
                        className="bg-white p-3 rounded-lg shadow text-sm"
                    >
                        <p className="font-medium">{hour.datetime}</p>
                        <p>{hour.temp}°C</p>
                        <p className="text-gray-500">{hour.conditions}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HourlyForecast
