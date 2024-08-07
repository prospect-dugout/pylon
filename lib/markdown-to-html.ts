export const markdownToHtml = (input: string): string => {
  const patterns: Record<string, RegExp> = {
    bold: /\*\*(.+?)\*\*/g,
    italic: /(^|\W)\*(.+?)\*(\W|$)/g,
    italicAlt: /(^|\W)_(.+?)_(\W|$)/g,
    boldItalic: /\*\*\*(.+?)\*\*\*/g,
    underline: /__(.+?)__/g,
    link: /\[(.+?)\]\((.+?)\)/g,
    strike: /\~\~(.+?)\~\~/g,
    cleanLines: /\n\s*\n\s*\n/g,
  };

  const output = input
    .replace(patterns.cleanLines, '\n\n')
    .replace(patterns.boldItalic, '<strong><em>$1</em></strong>')
    .replace(patterns.bold, '<strong>$1</strong>')
    .replace(patterns.underline, '<u>$1</u>')
    .replace(patterns.italic, '$1<em>$2</em>$3')
    .replace(patterns.italicAlt, '$1<em>$2</em>$3')
    .replace(
      patterns.link,
      '<a href="$2" target="_blank" rel="noopener">$1</a>',
    )
    .replace(patterns.strike, '<del>$1</del>');

  return output;
};
