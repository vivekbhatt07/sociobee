const truncateUtility = (text: string, countLength: number): string => {
  if (text.length > countLength) {
    const nonEmojiText = text
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .replace(/\s+/g, " ")
      .trim();
    return `${nonEmojiText.slice(0, countLength)}...`;
  } else {
    return text;
  }
};

export default truncateUtility;
