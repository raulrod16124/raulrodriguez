import { Badge, Button, Heading, Inline, Stack, Text } from '@raulrod/ui';
import { Check } from '@raulrod/icons';
import { Section } from '../../components/section/Section';
import { useSiteContent } from '../../i18n/useSiteContent';
import {
  HighlightItem,
  HighlightList,
  ProjectCard,
  ProjectHeader,
  ProjectList,
  ProjectMedia,
  ProjectRole,
} from './Work.styled';

export const Work = () => {
  const { work, common } = useSiteContent();

  return (
    <Section id="work" index="02" eyebrow={work.eyebrow} title={work.title}>
      <ProjectList>
        {work.projects.map((project, index) => {
          const titleId = `work-${project.id}-title`;

          return (
            <ProjectCard
              key={project.id}
              aria-labelledby={titleId}
              data-reverse={index % 2 === 1 ? 'true' : undefined}
            >
              <ProjectMedia>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={1440}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </ProjectMedia>
              <Stack gap="space-4">
                <ProjectHeader>
                  <Heading as="h3" id={titleId}>
                    {project.name}
                  </Heading>
                  <Text size="font.size.lg" weight="font.weight.semibold">
                    {project.tagline}
                  </Text>
                </ProjectHeader>
                <p>
                  <Text color="color.text.muted">{project.summary}</Text>
                </p>
                <ProjectRole>
                  <span>{common.roleValue(project.role)}</span>
                  {project.year ? (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </>
                  ) : null}
                </ProjectRole>
                <Inline gap="space-2" align="center" wrap>
                  {project.stack.map(item => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </Inline>
                <HighlightList>
                  {project.highlights.map(highlight => (
                    <HighlightItem key={highlight}>
                      <Check aria-hidden="true" />
                      <span>{highlight}</span>
                    </HighlightItem>
                  ))}
                </HighlightList>
                <Inline gap="space-2" align="center" wrap>
                  {project.links.map(link => (
                    <Button
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                    >
                      {link.label}
                    </Button>
                  ))}
                </Inline>
              </Stack>
            </ProjectCard>
          );
        })}
      </ProjectList>
    </Section>
  );
};
