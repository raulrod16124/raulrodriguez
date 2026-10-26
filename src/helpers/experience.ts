const CAREER_START = new Date('2021-07-01T00:00:00Z');

export function getYearsOfExperience(now: Date = new Date()): number {
  const startYear = CAREER_START.getUTCFullYear();
  const startMonth = CAREER_START.getUTCMonth();
  const startDay = CAREER_START.getUTCDate();

  let years = now.getUTCFullYear() - startYear;

  const beforeAnniversary =
    now.getUTCMonth() < startMonth ||
    (now.getUTCMonth() === startMonth && now.getUTCDate() < startDay);

  if (beforeAnniversary) {
    years -= 1;
  }

  return Math.max(0, years);
}
