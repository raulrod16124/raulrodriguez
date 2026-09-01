import { HomeSkeleton } from './HomeSkeleton';
import { ExperienceSkeleton } from './ExperienceSkeleton';
import { ExpertiseSkeleton } from './ExpertiseSkeleton';
import { ContactSkeleton } from './ContactSkeleton';

const SKELETON_MAP: Record<string, React.ComponentType> = {
  '/': HomeSkeleton,
  '/home': HomeSkeleton,
  '/experience': ExperienceSkeleton,
  '/expertise': ExpertiseSkeleton,
  '/contact': ContactSkeleton,
};

interface PageSkeletonProps {
  pathname: string;
}

export const PageSkeleton = ({ pathname }: PageSkeletonProps) => {
  const Skeleton = SKELETON_MAP[pathname] ?? HomeSkeleton;
  return <Skeleton />;
};
