import styled, { keyframes } from 'styled-components';
import theme from "../../theme/theme.json";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const fadeInZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 800px;
  text-align: left;
  font-size: 1.2rem;
  color: ${theme.colors.neutral.darkGrey};
  line-height: 1.4;
  margin-bottom: 50px;
  animation: ${slideInUp} 1.5s ease-out;
`;

export const SubTitle = styled.span`
  min-width: 300px;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${theme.colors.neutral.white};
  text-shadow: 
    0.5px 0.5px 0 ${theme.colors.secondary.main},  /* Top-right */
    -0.5px -0.5px 0 ${theme.colors.secondary.main}, /* Bottom-left */
    -0.5px 0.5px 0 ${theme.colors.secondary.main},  /* Top-left */
    0.5px -0.5px 0 ${theme.colors.secondary.main};  /* Bottom-right */
  margin: 15px 0;
`;

export const InfoItem = styled.div`
    display: flex;
    justify-content: justify;
    align-items: center;
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    max-width: 900px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  gap: 10px;
  margin-bottom: 50px;
  max-width: 600px;
`;

export const SkillItem = styled.div`
    background-color: ${theme.colors.tertiary.dark};
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    font-size: 1.1rem;
    font-weight: 400;
    color: ${theme.colors.neutral.white};
    animation: ${slideInLeft} 1s ease-out forwards;
    opacity: 0;

  &:nth-child(1) {
    animation-delay: 0.3s;
  }
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    animation-delay: 0.7s;
  }
  &:nth-child(4) {
    animation-delay: 0.9s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
  &:nth-child(6) {
    animation-delay: 1.1s;
  }
  &:nth-child(7) {
    animation-delay: 1.2s;
  }
  &:nth-child(8) {
    animation-delay: 1.3s;
  }
  &:nth-child(9) {
    animation-delay: 1.4s;
  }
  &:nth-child(10) {
    animation-delay: 1.5s;
  }
  &:nth-child(11) {
    animation-delay: 1.6s;
  }
  &:nth-child(12) {
    animation-delay: 1.7s;
  }
  &:nth-child(13) {
    animation-delay: 1.8s;
  }
  &:nth-child(14) {
    animation-delay: 1.9s;
  }
  &:nth-child(15) {
    animation-delay: 2s;
  }
  &:nth-child(16) {
    animation-delay: 2.1s;
  }
  &:nth-child(17) {
    animation-delay: 2.2s;
  }
  &:nth-child(18) {
    animation-delay: 2.3s;
  }
`;

export const DownloadCVButton = styled.a`
  display: inline-block;
  background-color: transparent;
  border: 2px solid ${theme.colors.secondary.main};
  color: ${theme.colors.secondary.main};
  padding: 50px 30px;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  animation: ${bounce} 2s infinite;
  transition: 0.3s ease all;

  &:hover {
    border: 2px solid ${theme.colors.neutral.white};
    color: ${theme.colors.neutral.white};
  }
`;