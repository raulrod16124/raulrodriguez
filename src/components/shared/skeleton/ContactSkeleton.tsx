import styled from 'styled-components';
import theme from '../../../theme/theme.json';
import { SkeletonPageContainer, SkeletonBlock, SkeletonCircleBlock } from './SkeletonBlock';

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${theme.spacing['3xl']} ${theme.spacing['md']};
  text-align: center;

  ${theme.media.tablet} {
    padding: ${theme.spacing['3xl']} ${theme.spacing['lg']};
  }
`;

const TitleBlock = styled(SkeletonBlock)`
  margin-bottom: ${theme.spacing['xs']};
`;

const SubtitleBlock = styled(SkeletonBlock)`
  margin-bottom: ${theme.spacing['2xl']};
`;

const LinksRow = styled.div`
  display: flex;
  gap: ${theme.spacing['lg']};
  flex-wrap: wrap;
  justify-content: center;

  ${theme.media.tablet} {
    gap: ${theme.spacing['xl']};
  }
`;

const LinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing['xs']};
  padding: ${theme.spacing['sm']} ${theme.spacing['md']};
`;

export const ContactSkeleton = () => (
  <SkeletonPageContainer>
    <ContactSection>
      <TitleBlock $width="280px" $height="36px" $borderRadius={theme.borderRadius.sm} />
      <SubtitleBlock $width="320px" $height="16px" $borderRadius={theme.borderRadius.sm} />
      <LinksRow>
        {[0, 1, 2].map((i) => (
          <LinkBlock key={i}>
            <SkeletonCircleBlock $size="40px" />
            <SkeletonBlock $width="60px" $height="14px" $borderRadius={theme.borderRadius.sm} />
          </LinkBlock>
        ))}
      </LinksRow>
    </ContactSection>
  </SkeletonPageContainer>
);
