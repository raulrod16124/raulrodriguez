import { CheckIcon, SuccessMessageContainer, SuccessText } from './SuccessAnimation.styled';

export const SuccessAnimation = () => {
  return (
    <SuccessMessageContainer>
      <CheckIcon />
      <SuccessText>Form submitted successfully!</SuccessText>
    </SuccessMessageContainer>
  );
};
