const createTitleFormatter = (websiteTitle: string) => {
  return function (text: string) {
    return `${text} - ${websiteTitle}`;
  };
};

export const pageTitleCreator = createTitleFormatter('MCIT');
