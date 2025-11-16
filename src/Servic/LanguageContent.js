import { createContext, useState, useEffect } from "react";
import MainLang from "../Data/MainLang.json";
import HeaderLang from "../Data/HeaderLang.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [selectedLang, setSelectedLang] = useState({
        header: HeaderLang[0],
        main: MainLang[0],
    });

    useEffect(() => {
        const savedLang = localStorage.getItem("selectedLang") || "uz";

        const headerLang = HeaderLang.find((l) => l.code === savedLang) || HeaderLang[0];
        const mainLang = MainLang.find((l) => l.code === savedLang) || MainLang[0];

        setSelectedLang({ header: headerLang, main: mainLang });
    }, []);

    const changeLanguage = (code) => {
        const headerLang = HeaderLang.find((l) => l.code === code) || HeaderLang[0];
        const mainLang = MainLang.find((l) => l.code === code) || MainLang[0];

        localStorage.setItem("selectedLang", code);
        setSelectedLang({ header: headerLang, main: mainLang });
    };

    return (
        <LanguageContext.Provider value={{ selectedLang, changeLanguage, HeaderLang }}>
            {children}
        </LanguageContext.Provider>
    );
};
