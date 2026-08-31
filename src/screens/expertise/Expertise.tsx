import {
  ExpertiseSection,
  ExpertiseGrid,
  GroupContainer,
  GroupTitle,
  TechList,
  TechTag,
  Divider,
} from './Expertise.styled';
import {EXPERTISE_GROUPS} from './Expertise.constants';
import {AboutBlock} from './AboutBlock';

export const Expertise = () => {
  return (
    <ExpertiseSection
      data-testid="expertise"
      id="expertise"
      aria-labelledby="expertise-title">
      <ExpertiseGrid>
        {EXPERTISE_GROUPS.map(group => (
          <GroupContainer key={group.title}>
            <GroupTitle>{group.title}</GroupTitle>
            <TechList aria-label={`${group.title} technologies`}>
              {group.technologies.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechList>
          </GroupContainer>
        ))}
      </ExpertiseGrid>
      <Divider aria-hidden="true" />
      <AboutBlock />
    </ExpertiseSection>
  );
};
