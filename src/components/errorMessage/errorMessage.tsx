import { useAppSelector } from '../../hooks/useApp';
import './errorMessage.css';
import { getErrorMessage } from '../../store/error/selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorMessage);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
