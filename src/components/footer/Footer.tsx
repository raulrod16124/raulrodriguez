import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSiteContent } from '../../i18n/useSiteContent';
import {
  BuiltWithText,
  CopyrightText,
  FooterContainer,
  FooterIdentity,
  IconContainer,
  RoleText,
} from './Footer.styled';

const LINK_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

export const Footer = () => {
  const { footer } = useSiteContent();

  return (
    <FooterContainer data-testid="footer" aria-label="Site footer">
      <FooterIdentity>
        <RoleText>{footer.role}</RoleText>
        <CopyrightText>
          {footer.copyright(new Date().getFullYear())}
        </CopyrightText>
        <BuiltWithText>{footer.builtWith}</BuiltWithText>
      </FooterIdentity>
      <IconContainer>
        {footer.links.map(link => {
          const Icon = LINK_ICONS[link.id];

          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          );
        })}
      </IconContainer>
    </FooterContainer>
  );
};
