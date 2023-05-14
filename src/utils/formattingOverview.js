const formattingOverview = text => {
  let newFormat = text;
  if (newFormat.length > 50) {
    newFormat = text.slice(0, 70) + '...';
  }
  return newFormat;
};

export default formattingOverview;
