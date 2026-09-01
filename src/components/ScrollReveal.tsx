import { useInView } from '../hooks/useInView';
import { RevealContainer } from './ScrollReveal.styled';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeIn';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 400,
  className,
}: ScrollRevealProps) => {
  const { ref, isInView } = useInView({ triggerOnce: true });

  return (
    <RevealContainer
      ref={ref}
      $isVisible={isInView}
      $animation={animation}
      $delay={delay}
      $duration={duration}
      className={className}
    >
      {children}
    </RevealContainer>
  );
};
