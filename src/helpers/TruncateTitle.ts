export function truncateTitle(title: string, maxLength: number = 12): string {
  if (title.length <= maxLength) {
    return title;
  }
  const truncated = title.substring(0, maxLength - 4);
  return `${truncated}..`;
}