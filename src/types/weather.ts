export type WeatherData = {
    resolvedAddress: string
    currentConditions: {
        temp: number
        windspeed: number
        precipprob: number
        conditions: string
    }
    days: {
        datetime: string
        hours: {
            datetime: string
            temp: number
            windspeed: number
            precipprob: number
            conditions: string
        }[]
    }[]
}
