import { createContext, useState } from 'react';

export const langContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('eng');
  const changeLang = value => setLang(value);
  const contextValue = {
    changeLang,
    lang,
    vocabulary: {
      hello: lang === 'eng' ? 'hello' : 'Приіт',
    },
  };
  return <langContext.Provider value={contextValue}>{children}</langContext.Provider>;
};
export default LangProvider;
