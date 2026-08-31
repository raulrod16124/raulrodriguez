import { HiCode, HiCog, HiCloud, HiChip } from 'react-icons/hi';
import {
  ExpertiseSection,
  ExpertiseGrid,
  GroupContainer,
  GroupTitle,
  TechList,
  TechTag,
  Divider,
  VisuallyHidden,
} from './Expertise.styled';
import {EXPERTISE_GROUPS} from './Expertise.constants';
import {AboutBlock} from './AboutBlock';

const GROUP_ICONS: Record<string, React.ReactNode> = {
  'Frontend': <HiCode aria-hidden="true" />,
  'Architecture & Testing': <HiCog aria-hidden="true" />,
  'Cloud & Tooling': <HiCloud aria-hidden="true" />,
  'AI & Development Workflow': <HiChip aria-hidden="true" />,
};

export const Expertise = () => {
  return (
    <ExpertiseSection
      data-testid="expertise"
      id="expertise"
      aria-labelledby="expertise-title">
      <VisuallyHidden as="h2" id="experience-title">Technical Expertise</VisuallyHidden>
      <ExpertiseGrid>
        {EXPERTISE_GROUPS.map(group => (
          <GroupContainer key={group.title}>
            <GroupTitle>
              {GROUP_ICONS[group.title]}
              {group.title}
            </GroupTitle>
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
