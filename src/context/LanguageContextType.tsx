import { createContext, useState, useContext, ReactNode } from "react";

// Define types for the context state
interface LanguageContextType {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  languages: any; // You can define the type of your translations if needed
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("GE");

  const languages =  {
    EN: {
      mainText:"Special real estate investment opportunities",
      backPage: "Go Back",
      moreBtn: "more",
      investmentMainText: "investment",
      restaurantMainText: "About the Restaurant",
      aboutInvestmentText1: "heelo1",
      aboutInvestmentText2: "heelo1",
      aboutInvestmentText3: "heelo1",
      aboutInvestmentText4: "heelo1",
      
    },
    GE: {
      
      backPage: "უკან",
      mainText: "სპეციალური საინვესტიციო შესაძლებლობები უძრავ ქონებაში",
      moreBtn: "იხილეთ მეტი",
      investmentMainText: "ინვესტიცია",
      aboutInvestmentText1: "hhello1",
      aboutInvestmentText2: "hhello1",
      aboutInvestmentText3: "hhello1",
      aboutInvestmentText4: "hhello1",
      restaurantMainText: "რესტორნის შესახებ",
    },
    RU: {
      
      backPage: "назад",
      mainText: "Специальные инвестиционные возможности в недвижимост",
      moreBtn: "более",
      investmentMainText: "инвестиции",
      restaurantMainText: "О ресторане",
      aboutInvestmentText1: "hello1",
      aboutInvestmentText2: "hello1",
      aboutInvestmentText3: "hello1",
      aboutInvestmentText4: "hello1",
      
    },
  };
  
  return (
    <LanguageContext.Provider
    value={{ selectedLanguage, setSelectedLanguage, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
