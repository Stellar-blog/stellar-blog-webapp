import {
    ErrorMessageContainer
} from './styles'

const ErrorMessage = ({errors}) => {
    if (!errors) return null

    if (!Array.isArray(errors)) {
        return <ErrorMessageContainer>{errors.message}</ErrorMessageContainer>
    }

    return errors.map(error => <ErrorMessageContainer key={error.message}>{error.message}</ErrorMessageContainer>)
}

export default ErrorMessage