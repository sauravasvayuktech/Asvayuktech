import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const [direction, setDirection] = useState("ltr");

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setDirection(lang === "ar" ? "rtl" : "ltr");
    };

    return (
        <LanguageContext.Provider
            value={{ language, direction, changeLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
