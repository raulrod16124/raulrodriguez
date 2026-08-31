import {
  ExperienceSection,
  SectionTitle,
  ExperienceList,
  ExperienceCard,
  RoleTitle,
  CompanyInfo,
  CompanyName,
  Separator,
  DescriptionList,
  DescriptionItem,
  TechTags,
  TechTag,
} from "./Experience.styled";
import { EXPERIENCES } from "./Experience.constants";

export const Experience = () => {
  return (
    <ExperienceSection
      className="animate__animated animate__fadeIn"
      data-testid="experience"
      id="experience"
    >
      <SectionTitle>Experience</SectionTitle>
      <ExperienceList>
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.id}>
            <RoleTitle>{exp.role}</RoleTitle>
            <CompanyInfo>
              <CompanyName>{exp.company}</CompanyName>
              <Separator>·</Separator>
              <span>{exp.location}</span>
              <Separator>·</Separator>
              <span>{exp.dates}</span>
            </CompanyInfo>
            <DescriptionList>
              {exp.description.map((text, index) => (
                <DescriptionItem key={index}>{text}</DescriptionItem>
              ))}
            </DescriptionList>
            <TechTags>
              {exp.technologies.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechTags>
          </ExperienceCard>
        ))}
      </ExperienceList>
    </ExperienceSection>
  );
};
