import { useState } from "react"

type SearchBarProps = {
    onSearch: (loc: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [value, setValue] = useState("")

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                onSearch(value)
            }}
            className="flex gap-2"
        >
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="flex-1 border rounded p-2 bg-white"
                placeholder="Enter location..."
            />
            <button className="bg-blue-600 text-white px-4 rounded">
                Search
            </button>
        </form>
    )
}

export default SearchBar
