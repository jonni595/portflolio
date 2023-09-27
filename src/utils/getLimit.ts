export function getLimit(text: string): string {
  return text.length > 90 ? text.slice(0, 80) + "..." : text;
}
