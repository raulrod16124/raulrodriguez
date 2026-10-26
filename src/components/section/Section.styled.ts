import styled from 'styled-components';

export const SectionContainer = styled.section`
  scroll-margin-top: 96px;
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
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const SectionHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
`;
