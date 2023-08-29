const calculatePercentageUtility = (
  textLength: number,
  textLimit: number
): number => {
  return (textLength * 100) / textLimit;
};

export default calculatePercentageUtility;
