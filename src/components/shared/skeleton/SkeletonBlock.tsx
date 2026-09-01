import { VisuallyHidden } from '../VisuallyHidden';
import {
  SkeletonContainer,
  SkeletonBlock as StyledBlock,
  SkeletonCircle,
  SkeletonPill,
  SkeletonCard,
} from './SkeletonBlock.styled';

interface SkeletonBlockProps {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
}

export const SkeletonBlock = ({ $width, $height, $borderRadius }: SkeletonBlockProps) => (
  <StyledBlock $width={$width} $height={$height} $borderRadius={$borderRadius} />
);

export const SkeletonCircleBlock = ({ $size }: { $size?: string }) => (
  <SkeletonCircle $size={$size} />
);

export const SkeletonPillBlock = ({ $width }: { $width?: string }) => (
  <SkeletonPill style={{ width: $width ?? '60px' }} />
);

export const SkeletonCardBlock = ({
  children,
  $highlighted,
}: {
  children: React.ReactNode;
  $highlighted?: boolean;
}) => <SkeletonCard $highlighted={$highlighted}>{children}</SkeletonCard>;

export const SkeletonPageContainer = ({ children }: { children: React.ReactNode }) => (
  <SkeletonContainer role="status" aria-busy="true">
    <VisuallyHidden>Loading...</VisuallyHidden>
    {children}
  </SkeletonContainer>
);
