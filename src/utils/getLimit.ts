export function getLimit(text: string): string {
  return text.length < 70 ? text.slice(0, 80) + "..." : text;
}
