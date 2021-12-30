const getFormattedFullDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : `0${month}`;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : `0${day}`;

  return `${month}/${day}/${year}`;
};

const getDateInMillisecondsFromNow = (dateString) => {
  const startDate = new Date(dateString).getTime();
  const today = new Date(Date.now()).getTime();

  return today - startDate;
};

const getDateInDaysFromNow = (dateString) => {
  const day = 1000 * 60 * 60 * 24;

  return Math.ceil(getDateInMillisecondsFromNow(dateString) / day);
};

export {
  getFormattedFullDate,
  getDateInMillisecondsFromNow,
  getDateInDaysFromNow,
};
