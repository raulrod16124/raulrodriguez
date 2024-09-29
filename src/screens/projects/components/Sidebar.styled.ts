import { FaTimes } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

export const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const SidebarContainer = styled.div`
  position: relative;
  height: 100%;
  width: 600px;
  border-left: 2px solid rgba(255,255,225, 0.2);
  padding: 20px;
  transition: transform 0.5s ease;
  z-index: 1000;
`;

export const CloseButton = styled(FaTimes)`
  font-size: 2rem;
  color: #ecf0f1;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const SidebarProjectTitle = styled.h2`
  font-size: 2rem;
  color: #ecf0f1;
  margin-bottom: 20px;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #bdc3c7;
  margin-bottom: 20px;
`;

export const TechList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const TechItem = styled.span`
  background-color: #2c3e50;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #ecf0f1;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 15px;
  a {
    color: #3498db;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    &:hover {
      color: #2980b9;
    }
  }
`;

export const ShowProjectButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #3498db;
  color: #ecf0f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;