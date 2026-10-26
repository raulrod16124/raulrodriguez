import { Stack, Text } from '@raulrod/ui';
import { Section } from '../../components/section/Section';
import { CvDialog } from '../../components/cv-dialog/CvDialog';
import { SITE } from '../../content/site';
import { getYearsOfExperience } from '../../helpers/experience';
import { ABOUT } from './About.constants';
import { AboutContent, AboutParagraph } from './About.styled';

export const About = () => {
  const years = getYearsOfExperience();

  return (
    <Section id="about" eyebrow={ABOUT.eyebrow} title={ABOUT.title}>
      <AboutContent>
        <Stack gap="space-4">
          <AboutParagraph>
            <Text size="font.size.lg">{ABOUT.lead(years)}</Text>
          </AboutParagraph>
          <AboutParagraph>
            <Text color="color.text.muted">{ABOUT.body}</Text>
          </AboutParagraph>
        </Stack>
        <CvDialog cvUrl={SITE.cvUrl} fileName="CV-Raul.pdf" />
      </AboutContent>
    </Section>
  );
};
