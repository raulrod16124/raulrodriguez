import { type ReactNode } from 'react';
import {
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionEyebrow,
  SectionHeader,
  SectionHeaderContent,
  SectionIndex,
  SectionTitle,
} from './Section.styled';

export type SectionVariant = 'default' | 'editorial' | 'statement';

export interface SectionProps {
  id: string;
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  tone?: 'default' | 'muted';
  variant?: SectionVariant;
}

export const Section = ({
  id,
  index,
  eyebrow,
  title,
  description,
  actions,
  children,
  tone = 'default',
  variant = 'default',
}: SectionProps) => {
  return (
    <SectionContainer
      id={id}
      data-tone={tone}
      data-variant={variant}
      aria-labelledby={`${id}-title`}
    >
      <SectionContent>
        <SectionHeader data-variant={variant} data-index={index}>
          <SectionHeaderContent>
            {eyebrow ? (
              <SectionEyebrow>
                {index ? <SectionIndex aria-hidden="true">{index}</SectionIndex> : null}
                <span>{eyebrow}</span>
              </SectionEyebrow>
            ) : null}
            <SectionTitle id={`${id}-title`} as="h2">
              {title}
            </SectionTitle>
            {description ? (
              <SectionDescription>{description}</SectionDescription>
            ) : null}
          </SectionHeaderContent>
          {actions ? actions : null}
        </SectionHeader>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};
