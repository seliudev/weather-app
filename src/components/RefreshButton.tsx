//re-fetch
type Props = {
    onRefresh: () => void
}

const RefreshButton = ({ onRefresh }: Props) => {
    return (
        <button
            onClick={onRefresh}
            className="bg-yellow-200 px-4 py-2 rounded hover:bg-yellow-100"
        >
            Refresh Weather
        </button>
    )
}

export default RefreshButton
