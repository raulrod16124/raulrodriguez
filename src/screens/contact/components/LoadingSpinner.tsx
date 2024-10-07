import { LoaderContainer, Spinner } from "./LoadingSpinner.styled";

export const LoadingSpinner= () => {
  return (
    <LoaderContainer data-testid="loading-spinner">
      <Spinner />
    </LoaderContainer>
  );
};
