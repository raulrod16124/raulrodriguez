import { useNavigate } from 'react-router-dom';
import { ErrorContainer, ErrorMessage, ErrorSubtitle, HomeButton } from './ErroPage.styled';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <ErrorContainer>
      <ErrorMessage>404 - Page Not Found</ErrorMessage>
      <ErrorSubtitle>Oops! The link you followed may be broken, or the page may have been removed.</ErrorSubtitle>
      <HomeButton onClick={redirectToHome}>Go Back to Home</HomeButton>
    </ErrorContainer>
  );
};
