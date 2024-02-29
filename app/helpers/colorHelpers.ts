export function parseColors(text: string): string[] {
  const colors = text.split("and");
  for (let color of colors) {
    if (!isValidCssColor(color)) {
      return ["white", "black"];
    }
  }
  return colors;
}

function isValidCssColor(colorValue: string) {
  return CSS.supports("color", colorValue) ? true : false;
}
