import { Stack, Text } from '@raulrod/ui';
import { Section } from '../../components/section/Section';
import { CvDialog } from '../../components/cv-dialog/CvDialog';
import { SITE } from '../../content/site';
import { getYearsOfExperience } from '../../helpers/experience';
import { useSiteContent } from '../../i18n/useSiteContent';
import { AboutContent, AboutParagraph } from './About.styled';

export const About = () => {
  const years = getYearsOfExperience();
  const { about } = useSiteContent();

  return (
    <Section
      id="about"
      index="05"
      variant="editorial"
      eyebrow={about.eyebrow}
      title={about.title}
    >
      <AboutContent>
        <Stack gap="space-4">
          <AboutParagraph>
            <Text size="font.size.lg">{about.lead(years)}</Text>
          </AboutParagraph>
          <AboutParagraph>
            <Text color="color.text.muted">{about.body}</Text>
          </AboutParagraph>
        </Stack>
        <CvDialog cvUrl={SITE.cvUrl} fileName="CV-Raul.pdf" />
      </AboutContent>
    </Section>
  );
};
