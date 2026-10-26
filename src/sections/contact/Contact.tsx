import { Button } from '@raulrod/ui';
import { Mail } from '@raulrod/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Section } from '../../components/section/Section';
import { CvDialog } from '../../components/cv-dialog/CvDialog';
import { SITE } from '../../content/site';
import { CONTACT } from './Contact.constants';
import { useSiteContent } from '../../i18n/useSiteContent';
import { ContactActions, ContactCvAction } from './Contact.styled';

const ACTION_ICONS = {
  email: Mail,
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

export const Contact = () => {
  const { contact } = useSiteContent();

  return (
    <Section
      id="contact"
      index="06"
      variant="statement"
      eyebrow={contact.eyebrow}
      title={contact.title}
      description={contact.description}
    >
      <ContactActions>
        {contact.actions.map(action => {
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
