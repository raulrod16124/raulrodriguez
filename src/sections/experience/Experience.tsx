import { Badge, Heading, Inline, Stack } from '@raulrod/ui';
import { Section } from '../../components/section/Section';
import { ScrollReveal } from '../../components/ScrollReveal';
import { EXPERIENCE } from './Experience.constants';
import {
  CardHeader,
  ExperienceCard,
  Meta,
  ResponsibilityItem,
  ResponsibilityList,
  Role,
  Separator,
  Timeline,
  TimelineEntry,
} from './Experience.styled';

export const Experience = () => {
  return (
    <Section id="experience" title={EXPERIENCE.title}>
      <Timeline>
        {EXPERIENCE.items.map((item, index) => {
          const titleId = `experience-${item.id}-title`;
          const current = item.current ? 'true' : 'false';

          return (
            <TimelineEntry key={item.id} data-current={current}>
              <ScrollReveal delay={index * 100}>
                <ExperienceCard aria-labelledby={titleId} data-current={current}>
                  <Stack gap="space-4">
                    <CardHeader>
                      <Heading as="h3" id={titleId}>
                        {item.company}
                      </Heading>
                      {item.current ? <Badge variant="success">Current</Badge> : null}
                    </CardHeader>
                    <Meta>
                      <Role>{item.role}</Role>
                      <Separator aria-hidden="true">·</Separator>
                      <span>{item.location}</span>
                      <Separator aria-hidden="true">·</Separator>
                      <span>{item.dates}</span>
                    </Meta>
                    <ResponsibilityList>
                      {item.description.map(text => (
                        <ResponsibilityItem key={text}>{text}</ResponsibilityItem>
                      ))}
                    </ResponsibilityList>
                    <Inline gap="space-2" align="start" wrap>
                      {item.technologies.map(technology => (
                        <Badge key={technology}>{technology}</Badge>
                      ))}
                    </Inline>
                  </Stack>
                </ExperienceCard>
              </ScrollReveal>
            </TimelineEntry>
          );
        })}
      </Timeline>
    </Section>
  );
};
