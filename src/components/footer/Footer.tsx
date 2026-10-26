import { Code2, UserRound } from '@raulrod/icons';
import {
  BuiltWithText,
  CopyrightText,
  FooterContainer,
  FooterIdentity,
  IconContainer,
  RoleText,
} from './Footer.styled';
import { FOOTER } from './Footer.constants';

const LINK_ICONS = {
  github: Code2,
  linkedin: UserRound,
} as const;

export const Footer = () => {
  return (
    <FooterContainer data-testid="footer" aria-label="Site footer">
      <FooterIdentity>
        <RoleText>{FOOTER.role}</RoleText>
        <CopyrightText>
          {FOOTER.copyright(new Date().getFullYear())}
        </CopyrightText>
        <BuiltWithText>{FOOTER.builtWith}</BuiltWithText>
      </FooterIdentity>
      <IconContainer>
        {FOOTER.links.map(link => {
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
