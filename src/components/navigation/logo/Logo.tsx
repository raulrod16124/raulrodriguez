import theme from '../../../theme/theme.json';
import {LogoLink, LogoSvg} from './Logo.styled';

type LogoProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

export const Logo = ({
  width = 28,
  height = 28,
  color = theme.colors.accent.main,
  className,
}: LogoProps) => (
  <LogoLink to="/home" aria-label="Go to homepage">
    <LogoSvg
      $width={width}
      $height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Raúl Rodríguez"
    >
      <rect
        x="2"
        y="2"
        width="116"
        height="116"
        rx="28"
        fill={color}
        opacity="0.12"
      />
      <rect
        x="2"
        y="2"
        width="116"
        height="116"
        rx="28"
        stroke={color}
        strokeWidth="2.5"
        opacity="0.6"
      />
      <text
        x="60"
        y="62"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="700"
        fontSize="52"
        fill={color}
        letterSpacing="-2"
      >
        RR
      </text>
    </LogoSvg>
  </LogoLink>
);
