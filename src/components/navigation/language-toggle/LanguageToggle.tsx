import { useLocale } from '../../../i18n';
import { useSiteContent } from '../../../i18n/useSiteContent';
import { LanguageOption, LanguageToggleGroup } from './LanguageToggle.styled';

export const LanguageToggle = () => {
  const { locale, setLocale } = useLocale();
  const { language } = useSiteContent();

  return (
    <LanguageToggleGroup role="group" aria-label={language.label}>
      {language.options.map((option) => (
        <LanguageOption
          key={option.value}
          type="button"
          lang={option.value}
          aria-label={option.label}
          aria-pressed={locale === option.value}
          onClick={() => setLocale(option.value)}
        >
          {option.short}
        </LanguageOption>
      ))}
    </LanguageToggleGroup>
  );
};
