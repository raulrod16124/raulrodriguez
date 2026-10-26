import { Badge, Heading, Inline, Stack, Text } from '@raulrod/ui';
import { Section } from '../../components/section/Section';
import { WHAT_I_DO } from './WhatIDo.constants';
import { Card, Grid } from './WhatIDo.styled';

export const WhatIDo = () => {
  return (
    <Section id="what-i-do" title={WHAT_I_DO.title}>
      <Grid>
        {WHAT_I_DO.cards.map(card => {
          const titleId = `what-i-do-${card.id}-title`;

          return (
            <Card key={card.id} aria-labelledby={titleId}>
              <Stack gap="space-3">
                <Heading as="h3" id={titleId}>
                  {card.title}
                </Heading>
                <p>
                  <Text color="color.text.muted">{card.description}</Text>
                </p>
                <Inline gap="space-2" align="start" wrap>
                  {card.tags.map(tag => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </Inline>
              </Stack>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};
