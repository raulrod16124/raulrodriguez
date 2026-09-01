import {
  ExperienceSection,
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
  VisuallyHidden,
} from './Experience.styled';
import {EXPERIENCES} from './Experience.constants';
import {ScrollReveal} from '../../components/ScrollReveal';

export const Experience = () => {
  return (
    <ExperienceSection
      data-testid="experience"
      id="experience"
      aria-labelledby="experience-title">
      <VisuallyHidden as="h2" id="experience-title">Professional Experience</VisuallyHidden>
      <ExperienceList>
        {EXPERIENCES.map((exp, index) => (
          <ScrollReveal key={exp.id} delay={index * 100}>
            <ExperienceCard
              $isLatest={index === 0}
              aria-label={`${exp.role} at ${exp.company}`}>
              <RoleTitle>{exp.role}</RoleTitle>
              <CompanyInfo>
                <CompanyName>{exp.company}</CompanyName>
                <Separator aria-hidden="true">·</Separator>
                <span>{exp.location}</span>
                <Separator aria-hidden="true">·</Separator>
                <span>{exp.dates}</span>
              </CompanyInfo>
              <DescriptionList>
                {exp.description.map((text, idx) => (
                  <DescriptionItem key={idx}>{text}</DescriptionItem>
                ))}
              </DescriptionList>
              <TechTags aria-label="Technologies used">
                {exp.technologies.map(tech => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechTags>
            </ExperienceCard>
          </ScrollReveal>
        ))}
      </ExperienceList>
    </ExperienceSection>
  );
};
