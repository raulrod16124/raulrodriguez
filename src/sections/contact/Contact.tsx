import { Button } from '@raulrod/ui';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Section } from '../../components/section/Section';
import { CvDialog } from '../../components/cv-dialog/CvDialog';
import { SITE } from '../../content/site';
import { CONTACT } from './Contact.constants';
import { ContactActions, ContactCvAction } from './Contact.styled';

const ACTION_ICONS = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

export const Contact = () => {
  return (
    <Section
      id="contact"
      eyebrow={CONTACT.eyebrow}
      title={CONTACT.title}
      description={CONTACT.description}
    >
      <ContactActions>
        {CONTACT.actions.map(action => {
          const Icon = ACTION_ICONS[action.id];

          return (
            <Button
              key={action.id}
              href={action.href}
              variant={action.id === 'email' ? 'primary' : 'secondary'}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              startIcon={<Icon size={18} aria-hidden="true" />}
            >
              {action.label}
            </Button>
          );
        })}
        <ContactCvAction>
          <CvDialog cvUrl={SITE.cvUrl} fileName={CONTACT.cvFileName} />
        </ContactCvAction>
      </ContactActions>
    </Section>
  );
};
