import { useState } from 'react';
import { HiEye } from 'react-icons/hi';
import {
  AboutContainer,
  AboutLabel,
  AboutText,
  CVLink,
} from './AboutBlock.styled';
import { increaseExperience } from './helper';
import { PdfViewerModal } from '../../components/pdf-viewer';
import cv from '../../assets/cv/CV-Raul.pdf';

export const AboutBlock = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <AboutContainer data-testid="about-block">
      <AboutLabel>About me</AboutLabel>
      <AboutText>
        Frontend Engineer with {increaseExperience()}+ years of experience
        building scalable web applications and reusable frontend systems. I've
        worked across fintech, e-mobility, and web/mobile products, always
        focusing on maintainable architecture and code quality.
      </AboutText>
      <CVLink as="button" onClick={() => setIsPdfOpen(true)}>
        <HiEye aria-hidden="true" />
        View CV
      </CVLink>
      <PdfViewerModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
        pdfUrl={cv}
        fileName="CV-Raul"
      />
    </AboutContainer>
  );
};
