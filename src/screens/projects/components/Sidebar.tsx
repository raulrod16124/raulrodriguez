import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { CloseButton, LinksContainer, ProjectDescription, ShowProjectButton, SidebarContainer, SidebarProjectTitle, TechItem, TechList } from './Sidebar.styled';

export type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  repoLink: string;
  demoLink?: string;
}

interface IProps {
    project: ProjectType;
}

const Sidebar = ({ project }: IProps) => {
  return (
    <div>
      <SidebarContainer>
        <SidebarProjectTitle>{project.title}</SidebarProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>

        <TechList>
          {project.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>

        <LinksContainer>
          {project.demoLink && (
            <a href={project.demoLink} target="_blank">
              <FaExternalLinkAlt /> 
            </a>
          )}
          {project.repoLink && (
            <a href={project.repoLink} target="_blank">
              <FaGithub /> 
            </a>
          )}
        </LinksContainer>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
