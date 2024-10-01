export function increaseExperience(): number {
    const defaultExp = 4;
    const initialYearOfCreation = "2024";
    const currentYear = String(new Date().getFullYear());
    const experienceToAdd = Number(currentYear.slice(-1)) - Number(initialYearOfCreation.slice(-1)) 
    return defaultExp + experienceToAdd;
}