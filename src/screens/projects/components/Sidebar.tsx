import { CarouselContainer, CarouselImage, Header, IconContainer, NameAndLinksContainer, ProjectContainer, ProjectDescription, ProjectImage, ProjectName, TechItem, TechList } from './Sidebar.styled';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { ImageModal } from './ImageModal';

export type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  carouselImages: string[],
  repoLink?: string;
  demoLink?: string;
}

interface IProps {
    project: ProjectType;
}

export const Sidebar = ({ project }: IProps) => {
    const [imageSelected, setImageSelected] = useState<string | undefined>();

    return (
        <ProjectContainer>
            <Header>
                <ProjectImage src={project.image} alt={project.title} />
                <NameAndLinksContainer>
                    <ProjectName>{project.title}</ProjectName>
                    <IconContainer>
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
                    </IconContainer>
                </NameAndLinksContainer>
            </Header>

            <ProjectDescription>{project.description}</ProjectDescription>

            <TechList>
                {project.technologies.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
                ))}
            </TechList>

            <CarouselContainer>
                { project.carouselImages.map( (image, index)=> (
                    <CarouselImage
                        key={image + index}
                        src={image}
                        alt={`Image ${image}`}
                        onClick={()=>setImageSelected(image)}
                    />
                ))}
            </CarouselContainer>
            { imageSelected && (
                <ImageModal imgSrc={imageSelected} onClose={() => setImageSelected(undefined)} />
            )}
        </ProjectContainer>
    );
};
