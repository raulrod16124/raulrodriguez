import styled from 'styled-components';
import theme from '../../../theme/theme.json';
import {
  SkeletonPageContainer,
  SkeletonBlock,
  SkeletonCircleBlock,
} from './SkeletonBlock';

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${theme.spacing['4xl']} ${theme.spacing['md']};

  ${theme.media.tablet} {
    padding: ${theme.spacing['4xl']} ${theme.spacing['xl']};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: ${theme.spacing['2xl']};
  max-width: ${theme.maxWidth.hero};
  width: 100%;

  ${theme.media.desktop} {
    flex-direction: row;
    justify-content: space-between;
    gap: ${theme.spacing['3xl']};
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing['lg']};
  width: 100%;

  ${theme.media.desktop} {
    align-items: flex-start;
    flex: 1;
  }
`;

const ImageArea = styled.div`
  flex-shrink: 0;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['xs']};
  width: 100%;
  max-width: 280px;

  ${theme.media.tablet} {
    flex-direction: row;
    max-width: none;
  }
`;

const CTAButton = styled(SkeletonBlock)`
  height: 36px;
`;

export const HomeSkeleton = () => (
  <SkeletonPageContainer>
    <HomeSection>
      <ContentWrapper>
        <TextContainer>
          <SkeletonBlock $width="260px" $height="40px" $borderRadius={theme.borderRadius.sm} />
          <SkeletonBlock $width="180px" $height="28px" $borderRadius={theme.borderRadius.sm} />
          <SkeletonBlock $width="140px" $height="16px" $borderRadius={theme.borderRadius.sm} />
          <SkeletonBlock $width="280px" $height="16px" $borderRadius={theme.borderRadius.sm} />
          <CTAContainer>
            <CTAButton $width="100%" $height="36px" $borderRadius={theme.borderRadius.sm} />
            <CTAButton $width="100%" $height="36px" $borderRadius={theme.borderRadius.sm} />
            <CTAButton $width="100%" $height="36px" $borderRadius={theme.borderRadius.sm} />
          </CTAContainer>
        </TextContainer>
        <ImageArea>
          <SkeletonCircleBlock $size="200px" />
        </ImageArea>
      </ContentWrapper>
    </HomeSection>
  </SkeletonPageContainer>
);
