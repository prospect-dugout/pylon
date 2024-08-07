export const computedStyleValue = (str: string) => {
  if (str.indexOf('var(--') === 0) {
    const varName = `--${str.slice(6, -1)}`;
    return getComputedStyle(document.documentElement).getPropertyValue(varName);
  } else {
    return str;
  }
};
