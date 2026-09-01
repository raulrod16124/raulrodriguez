import styled from 'styled-components';
import theme from '../../../theme/theme.json';
import {
  SkeletonPageContainer,
  SkeletonBlock,
  SkeletonPillBlock,
  SkeletonCardBlock,
} from './SkeletonBlock';

const ExpertiseSection = styled.div`
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

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['lg']};
  max-width: ${theme.maxWidth.content};
  width: 100%;
  margin-top: ${theme.spacing['2xl']};

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing['xl']};
  }
`;

const GroupTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['xs']};
`;

const IconPlaceholder = styled(SkeletonBlock)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['xxs']};

  ${theme.media.tablet} {
    gap: ${theme.spacing['xs']};
  }
`;

const Divider = styled(SkeletonBlock)`
  max-width: ${theme.maxWidth.content};
  margin-top: ${theme.spacing['xl']};

  ${theme.media.tablet} {
    margin-top: ${theme.spacing['2xl']};
  }
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing['md']};
  max-width: ${theme.maxWidth.content};
  width: 100%;
  margin-top: ${theme.spacing['xl']};

  ${theme.media.tablet} {
    margin-top: ${theme.spacing['2xl']};
  }
`;

export const ExpertiseSkeleton = () => (
  <SkeletonPageContainer>
    <ExpertiseSection>
      <TitleBlock $width="220px" $height="32px" $borderRadius={theme.borderRadius.sm} />
      <ExpertiseGrid>
        {[0, 1, 2, 3].map((i) => (
          <SkeletonCardBlock key={i}>
            <GroupTitleRow>
              <IconPlaceholder $width="20px" $height="20px" $borderRadius="50%" />
              <SkeletonBlock $width="140px" $height="20px" $borderRadius={theme.borderRadius.sm} />
            </GroupTitleRow>
            <TagsRow>
              {Array.from({ length: i === 0 ? 4 : i === 3 ? 3 : 6 }).map((_, j) => (
                <SkeletonPillBlock
                  key={j}
                  $width={`${50 + ((j * 13) % 30)}px`}
                />
              ))}
            </TagsRow>
          </SkeletonCardBlock>
        ))}
      </ExpertiseGrid>
      <Divider $width="100%" $height="1px" $borderRadius="0" />
      <AboutSection>
        <SkeletonBlock $width="80px" $height="12px" $borderRadius={theme.borderRadius.sm} />
        <SkeletonBlock $width="320px" $height="16px" $borderRadius={theme.borderRadius.sm} />
        <SkeletonBlock $width="280px" $height="16px" $borderRadius={theme.borderRadius.sm} />
        <SkeletonBlock $width="120px" $height="36px" $borderRadius={theme.borderRadius.sm} />
      </AboutSection>
    </ExpertiseSection>
  </SkeletonPageContainer>
);
