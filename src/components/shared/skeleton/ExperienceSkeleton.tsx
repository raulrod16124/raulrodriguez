import styled from 'styled-components';
import theme from '../../../theme/theme.json';
import {
  SkeletonPageContainer,
  SkeletonBlock,
  SkeletonPillBlock,
  SkeletonCardBlock,
} from './SkeletonBlock';

const ExperienceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing['md']};

  ${theme.media.tablet} {
    padding: ${theme.spacing['3xl']} ${theme.spacing['lg']};
  }
`;

const TitleBlock = styled(SkeletonBlock)`
  margin-top: ${theme.spacing['2xl']};
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['lg']};
  max-width: ${theme.maxWidth.content};
  width: 100%;
  margin-top: ${theme.spacing['2xl']};

  ${theme.media.tablet} {
    gap: ${theme.spacing['xl']};
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['xs']};
`;

const InfoRow = styled.div`
  display: flex;
  gap: ${theme.spacing['xs']};
  align-items: center;
`;

const DescriptionLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['xs']};
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['xxs']};
  margin-top: ${theme.spacing['xxs']};

  ${theme.media.tablet} {
    gap: ${theme.spacing['xs']};
  }
`;

export const ExperienceSkeleton = () => (
  <SkeletonPageContainer>
    <ExperienceSection>
      <TitleBlock $width="180px" $height="32px" $borderRadius={theme.borderRadius.sm} />
      <ExperienceList>
        {[0, 1, 2, 3].map((i) => (
          <SkeletonCardBlock key={i} $highlighted={i === 0}>
            <CardContent>
              <SkeletonBlock $width="200px" $height="20px" $borderRadius={theme.borderRadius.sm} />
              <InfoRow>
                <SkeletonBlock $width="100px" $height="14px" $borderRadius={theme.borderRadius.sm} />
                <SkeletonBlock $width="80px" $height="14px" $borderRadius={theme.borderRadius.sm} />
                <SkeletonBlock $width="120px" $height="14px" $borderRadius={theme.borderRadius.sm} />
              </InfoRow>
              <DescriptionLines>
                <SkeletonBlock $width="100%" $height="14px" $borderRadius={theme.borderRadius.sm} />
                <SkeletonBlock $width="90%" $height="14px" $borderRadius={theme.borderRadius.sm} />
                <SkeletonBlock $width="95%" $height="14px" $borderRadius={theme.borderRadius.sm} />
              </DescriptionLines>
              <TagsRow>
                {[60, 50, 70, 55, 65, 45, 60, 50].map((w, j) => (
                  <SkeletonPillBlock key={j} $width={`${w}px`} />
                ))}
              </TagsRow>
            </CardContent>
          </SkeletonCardBlock>
        ))}
      </ExperienceList>
    </ExperienceSection>
  </SkeletonPageContainer>
);
