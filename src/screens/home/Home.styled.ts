import styled, {keyframes} from 'styled-components';
import theme from '../../theme/theme.json';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HomeSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: calc(100vh - 85vh);
  overflow: hidden;
  @media (max-width: ${theme.responsive.laptops}) {
    padding-top: calc(100vh - 80vh);
  }
`;

export const TitleContainer = styled.div`
  margin-left: -150px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  z-index: 1;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    margin-left: 0;
    margin-top: 120px;
  }
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    margin-left: 0;
  }
`;

export const NameText = styled.h1`
  margin: 0;
  padding-left: 10px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  color: ${theme.colors.neutral.white};
  animation: ${fadeInUp} 0.5s ease-out forwards;

  @media (max-width: ${theme.responsive.laptops}) {
    font-size: 2rem;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 1.5rem;
  }
`;

export const RoleText = styled.span`
  margin: 0;
  font-size: 6rem;
  font-weight: bolder;
  color: ${theme.colors.secondary.main};
  line-height: 1;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 ${theme.colors.neutral.white},
    -1px -1px 0 ${theme.colors.neutral.white},
    -1px 1px 0 ${theme.colors.neutral.white},
    1px -1px 0 ${theme.colors.neutral.white};
  animation: ${fadeInUp} 0.5s ease-out forwards;

  @media (max-width: ${theme.responsive.laptops}) {
    font-size: 5rem;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.span`
  margin: 8px 0 0 10px;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${theme.colors.neutral.grey};
  letter-spacing: 0.15em;
  animation: ${fadeInUp} 0.5s ease-out forwards;

  @media (max-width: ${theme.responsive.laptops}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 1.2rem;
  }
`;

export const ValueProp = styled.p`
  margin: 24px 0 0 10px;
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.6;
  color: ${theme.colors.neutral.lightGrey};
  max-width: 480px;
  animation: ${fadeInUp} 0.5s ease-out forwards;

  @media (max-width: ${theme.responsive.laptops}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  animation: ${fadeInUp} 0.5s ease-out forwards;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.neutral.black};
  background-color: ${theme.colors.secondary.main};
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${theme.colors.secondary.dark};
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${theme.colors.secondary.light};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    width: 100%;
    text-align: center;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -50px;
  right: -200px;
  width: 380px;
  height: auto;
  z-index: 0;
  animation: ${fadeInRight} 0.5s ease-out forwards;
  border-radius: 50%;
  border: 0.2rem solid ${theme.colors.secondary.main};
  aspect-ratio: 1/1;

  @media (max-width: ${theme.responsive.laptops}) {
    top: -50px;
    right: -180px;
    width: 300px;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    top: -100px;
    right: 50px;
    width: 200px;
  }
`;

export const TextImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;
