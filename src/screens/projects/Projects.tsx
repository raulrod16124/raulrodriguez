import { useState } from 'react';
import { ProjectCard, ProjectGrid, ProjectImage, ProjectsContainer, ProjectTitle } from './Projects.styled';
import { ProjectType, Sidebar } from './components/Sidebar';
import projects from "./projects.json";
import { truncateTitle } from '../../helpers';
import 'animate.css';

export const Projects = () => {
  const projectsData: ProjectType[] = projects;
  const [projectSelected, setProjectSelected] = useState<ProjectType>(projectsData[0]);

  return (
    <ProjectsContainer className="animate__animated animate__fadeIn">
      <ProjectGrid>
        {projectsData.map((project, index) => {
          const title = truncateTitle(project.title);

          return (
            <ProjectCard
              className='animate__animated animate__zoomIn'
              key={index} 
              onClick={() => setProjectSelected(project)}
              selected={project.title === projectSelected.title}
            >
              <ProjectImage src={project.image} />
              <ProjectTitle 
                selected={project.title === projectSelected.title} 
              >
                {title}
              </ProjectTitle>
            </ProjectCard>
          )
        })}
      </ProjectGrid>
      <Sidebar project={projectSelected} />
    </ProjectsContainer>
  );
};
