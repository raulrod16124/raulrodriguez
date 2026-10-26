import styled from 'styled-components';
import { Heading } from '@raulrod/ui';
import theme from '../../theme/theme.json';

export const SectionContainer = styled.section`
  scroll-margin-top: calc(var(--navbar-height, 68px) + 24px);
  padding: clamp(64px, 10vw, 120px) 0;

  &[data-tone='muted'] {
    background: var(--rr-color-background-sunken, #0f0f0f);
  }
`;

export const SectionContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 clamp(16px, 6vw, 32px);
  display: flex;
  flex-direction: column;
  gap: clamp(32px, 6vw, 48px);
`;

export const SectionHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &[data-variant='default']::after {
    content: attr(data-index);
    position: absolute;
    top: -34px;
    right: 0;
    font-size: clamp(4.5rem, 10vw, 7rem);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.06em;
    color: ${theme.colors.accent.main};
    opacity: 0.08;
    pointer-events: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  &[data-variant='editorial'],
  &[data-variant='statement'] {
    flex-direction: column;
    align-items: flex-start;
  }

  &[data-variant='statement'] {
    align-items: center;
    text-align: center;

    &::after {
      display: none;
    }
  }
`;

export const SectionHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 760px;

  [data-variant='editorial'] & {
    max-width: 840px;
    padding-left: clamp(16px, 3vw, 28px);
    border-left: 2px solid ${theme.colors.semantic.accentBorder};
  }

  [data-variant='statement'] & {
    align-items: center;
    max-width: 860px;
  }
`;

export const SectionEyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${theme.colors.accent.highContrast};
`;

export const SectionIndex = styled.span`
  color: ${theme.colors.neutral.grey};
  font-variant-numeric: tabular-nums;

  &::after {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    margin-left: 10px;
    vertical-align: middle;
    background-color: ${theme.colors.accent.main};
  }
`;

export const SectionTitle = styled(Heading)`
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  text-wrap: balance;

  [data-variant='editorial'] & {
    max-width: 14ch;
    font-size: clamp(2.5rem, 6vw, 4rem);
    background: linear-gradient(
      92deg,
      ${theme.colors.neutral.white} 0%,
      ${theme.colors.accent.light} 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  [data-variant='statement'] & {
    max-width: 20ch;
    font-size: clamp(2.25rem, 5vw, 3.75rem);
    text-wrap: balance;
  }
`;

export const SectionDescription = styled.p`
  margin: 0;
  max-width: 62ch;
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: ${theme.font.lineHeight.relaxed};
  color: ${theme.colors.neutral.grey};

  [data-variant='statement'] & {
    max-width: 56ch;
  }
`;
