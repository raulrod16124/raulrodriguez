import { type ReactNode } from 'react';
import { Heading, Text } from '@raulrod/ui';
import {
  SectionContainer,
  SectionContent,
  SectionHeader,
  SectionHeaderContent,
} from './Section.styled';

export interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  tone?: 'default' | 'muted';
}

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  actions,
  children,
  tone = 'default',
}: SectionProps) => {
  return (
    <SectionContainer id={id} data-tone={tone} aria-labelledby={`${id}-title`}>
      <SectionContent>
        <SectionHeader>
          <SectionHeaderContent>
            {eyebrow ? <Text>{eyebrow}</Text> : null}
            <Heading id={`${id}-title`} as="h2">
              {title}
            </Heading>
            {description ? <Text>{description}</Text> : null}
          </SectionHeaderContent>
          {actions ? actions : null}
        </SectionHeader>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};
