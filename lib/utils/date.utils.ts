const getGregorianYearsFrom = (from: number) => {
  const currentYear = new Date().getFullYear();
  if (from > currentYear) {
    throw new Error('from must be less than current year');
  }
  const years = [];
  for (let i = from; i <= currentYear; i++) {
    years.push(i);
  }
  return years;
};

export const getYears = (
  from: number,
  language: string,
): Array<{ label: string; value: number }> => {
  return getGregorianYearsFrom(from).map(year => {
    const formattedYear = language === 'en' ? year.toString() : convertToPersianNumeral(year);
    return { label: formattedYear, value: year };
  });
};

export const convertToPersianNumeral = (number: number) => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number
    .toString()
    .split('')
    .map(num => persianNumbers[parseInt(num, 10)])
    .join('');
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getCurrentMonth = () => {
  return new Date().getMonth() + 1;
};

export const convertDateBasedOnLanguage = (date: string, language: string) => {
  return new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    calendar: 'gregory',
  }).format(new Date(date));
};

export const getDateRange = (year: number): { from: Date; till: Date } => {
  const fromDate = new Date(year, 0, 1);
  const toDate = new Date(year + 1, 0, 0);

  return { from: fromDate, till: toDate };
};

export const formatAndCleanDate = (date: string, language: string) => {
  let writtenDate = new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    calendar: language === 'en' ? 'gregory' : 'persian',
  }).format(new Date(date));

  if (language === 'ps-AF') {
    // If the language is Pashto
    writtenDate = writtenDate.replace(/AP/g, ''); // Replace 'AP' with an empty string
  }

  return writtenDate;
};
