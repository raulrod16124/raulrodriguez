import { Badge, Heading, Inline, Stack, Text } from '@raulrod/ui';
import { Component, Layers, Network } from '@raulrod/icons';
import { Section } from '../../components/section/Section';
import { useSiteContent } from '../../i18n/useSiteContent';
import { Card, CardIcon, Grid } from './WhatIDo.styled';

const ICONS = {
  layers: Layers,
  component: Component,
  network: Network,
} as const;

export const WhatIDo = () => {
  const { whatIDo } = useSiteContent();

  return (
    <Section
      id="what-i-do"
      index="01"
      eyebrow={whatIDo.eyebrow}
      title={whatIDo.title}
    >
      <Grid>
        {whatIDo.cards.map(card => {
          const titleId = `what-i-do-${card.id}-title`;
          const Icon = ICONS[card.icon];

          return (
            <Card key={card.id} aria-labelledby={titleId}>
              <Stack gap="space-3">
                <CardIcon aria-hidden="true">
                  <Icon size={22} />
                </CardIcon>
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
