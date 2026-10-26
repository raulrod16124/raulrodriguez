import { Badge, Heading, Stack, Text } from '@raulrod/ui';
import { Section } from '../../components/section/Section';
import { useSiteContent } from '../../i18n/useSiteContent';
import {
  PrincipleCard,
  PrincipleIndex,
  PrincipleItem,
  PrincipleList,
} from './Engineering.styled';

export const Engineering = () => {
  const { engineering } = useSiteContent();

  return (
    <Section
      id="engineering"
      index="04"
      eyebrow={engineering.eyebrow}
      title={engineering.title}
    >
      <PrincipleList role="list">
        {engineering.principles.map((principle, index) => {
          const titleId = `engineering-${principle.id}-title`;
          const number = String(index + 1).padStart(2, '0');

          return (
            <PrincipleItem key={principle.id}>
              <PrincipleCard aria-labelledby={titleId}>
                <Stack gap="space-3">
                  <PrincipleIndex>
                    <Badge aria-hidden="true">{number}</Badge>
                  </PrincipleIndex>
                  <Heading as="h3" id={titleId}>
                    {principle.title}
                  </Heading>
                  <p>
                    <Text color="color.text.muted">{principle.description}</Text>
                  </p>
                </Stack>
              </PrincipleCard>
            </PrincipleItem>
          );
        })}
      </PrincipleList>
    </Section>
  );
};
