//UI State
type Props = {
    message: string
}

const ErrorMessage = ({ message }: Props) => {
    return <p className="text-red-500 text-center">{message}</p>
}

export default ErrorMessage
