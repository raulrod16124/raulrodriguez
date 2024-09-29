import { useState } from 'react';
import { ProjectCard, ProjectGrid, ProjectImage, ProjectsContainer, ProjectTitle } from './Projects.styled';
import Sidebar, { ProjectType } from './components/Sidebar';
import projects from "./projects.json";
import 'animate.css';

export const Projects = () => {
  const projectsData: ProjectType[] = projects;
  const [projectSelected, setProjectSelected] = useState<ProjectType>(projectsData[1]);

  return (
    <ProjectsContainer className="animate__animated animate__fadeIn">
      <ProjectGrid>
        {projectsData.map((project, index) => {
          const title = project.title.length > 12 
            ? `${project.title.substring(0, 8)}..`  
            : project.title;

          return (
            <ProjectCard
              key={index} 
              onClick={() => setProjectSelected(project)}
              selected={project.title === projectSelected.title}
            >
              <ProjectImage href={project.image} />
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
