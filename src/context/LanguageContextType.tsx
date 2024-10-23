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

  const languages = {
    EN: {
      title:
        "Invest in an exclusive 5-star hotel at Solar Energy Hotel Groups premium restaurant starting from just $75,000 and enjoy exceptional investment conditions unmatched in Georgia's real estate investment market.",
      description:
        "“Central Park Towers” is a five-star multifunctional hotel complex in Tbilisi, on Al. Kazbegi Avenue, next to Central Park. The total investment value of the project is 300 million dollars.",
      blAccordionItem1: "Unique business model",
      blAccordionItem2: "100% secured capital",
      blAccordionItem3: "100% secured profit",
      blAccordionItem4: "Monthly dividend",
      content1:
        "Investing in high-class commercial real estate and ready-made businesses at a price 20 times lower than the market value.",
      content2:
        "100% secured capital backed by million-dollar real estate, the value of which increases year after year.",
      content3:
        "Guaranteed investment profit, which is secured by the banking guarantee of Georgia's largest bank",
      content4: "Receive investment dividends monthly",
      ViewProject: "View Project",
      bulletinCard1: "Investment at 20 times below market value",
      bulletinCard2: "Special payment condition +",
      bulletinCard3:
        "Receiving investment profits with conditions tailored to you",
      openProject: "Read more",
      BulletinKey: "Investment on Market Value 20",
      BulletinKey2:
        "Special Payment Conditions + Guaranteed 16% Investment Profit",
      BulletinKey3: "Earning investment profit with conditions tailored to you",
    },
    GE: {
      title:
        "განსაკუთრებული შესაძლებლობები უძრავ ქონებაში ინევსტირებისთვის,რომელსაც ანალოგი არ გააჩნია საქართველოს უძრავი ქონების საინვესტიციო ბაზარზე.",
      description:
        "კომპანია ჯეოინვესტი ,წარმოადგენს უძრავი ქონების საინვესტიციო კომპანიას,რომლის არატრადიციული ბიზნეს მოდელი ქმნის განსაკუთრებულ შესაძლებლობებს უძრავ ქონებაში ინვესტირებით დაინტერესებული პირებისთვის , განახორციელონ 100% იანი დაცული და მომგებიანი ინვესტიციები მილიონ დოლარიან უძრავ ქონებაში საბაზრო ღირებულებაზე 20 ჯერ დაბალ ფასად და მიიღონ საბანკო ანაბარზე 10 ჯერ მეტი სარგებელი",
      blAccordionItem1: "განსაკუთრებული ბიზნეს მოდელი",
      blAccordionItem2: "100% დაცული კაპიტალი",
      blAccordionItem3: "100% დაცული მოგება",
      blAccordionItem4: "ყოველთვიური დივიდენდი",
      content1:
        "ინვესტირება მაღალი კლასის კომერციულ უძრავ ქონებასა და მზა ბიზნესში საბაზრო ღირებულებაზე 20-ჯერ დაბალ ფასად",
      content2:
        "მილიონ დოლარიან უძრავ ქონებაში გამყარებული 100% დაცული კაპიტალი რომლის ღირებულებაც წლიდანწლამდე იზრდება",
      content3:
        "გარანტირებული საინვესტაციო მოგება, რონელიც საქართველოს ყველაზე მსხვილ ბანკის საბანკო გარანტიით არის დაცული",
      content4: "საინვესტაციო დივიდენის მიღება ყოველთვიურად",
      ViewProject: "იხილეთ პროექტი",
      bulletinCard1: "ინვესტიცია საბაზარი ღირებულებაზე 20",
      bulletinCard2: "გადახდის განსაკუთრებული პირობა +",
      bulletinCard3: "საინვესტიციო მოგების მიღება თქვენზე მორგებული პირობებით",
      openProject: "ვრცლად",
      BulletinKey: "ინვესტიცია საბაზრი ღირებულებაზე 20 ",
      BulletinKey2:
        "გადახდის განსაკუთრებული პირობა + გარანტირებული 16% საინვესტიციო სარგებელი",
      BulletinKey3: "საინვესტიციო მოგების მიღება თქვენსე მორგებული პირობებით",
    },
    RU: {
      title:
        "Инвестируйте в эксклюзивный 5-звездочный отель в премиальном ресторане Solar Energy Hotel Group от всего лишь $75,000 и получите уникальные инвестиционные условия, не имеющие аналогов на рынке недвижимости Грузии.",
      description:
        "“Централ Парк Тауэрс” — это пятизвездочный многофункциональный гостиничный комплекс в Тбилиси, на проспекте Ал. Казбеги, рядом с Центральным парком. Общая стоимость инвестиций в проект составляет 300 миллионов долларов.",
      blAccordionItem1: "Уникальная бизнес-модель",
      blAccordionItem2: "100% защищенный капитал",
      blAccordionItem3: "100% защищенная прибыль",
      blAccordionItem4: "Ежемесячные дивиденды",
      content1:
        "Инвестирование в коммерческую недвижимость высокого класса и готовый бизнес по цене, в 20 раз ниже рыночной стоимости",
      content2:
        "100% защищенный капитал, обеспеченный недвижимостью стоимостью в миллион долларов, которая растет в цене с каждым годом",
      content3:
        "Гарантированная инвестиционная прибыль, защищенная банковской гарантией самого крупного банка Грузии",
      content4: "Получение инвестиционных дивидендов ежемесячно",
      ViewProject: "Посмотреть проект",
      bulletinCard1: "Инвестиция по цене в 20 раз ниже рыночной стоимости",
      bulletinCard2: "Особые условия оплаты +",
      bulletinCard3:
        "Получение инвестиционной прибыли на условиях, адаптированных под",
      openProject: "Подробнее",
      BulletinKey: "Инвестиция по рыночной стоимости 20",
      BulletinKey2:
        "Особые условия оплаты + Гарантированная 16% прибыль от инвестиций",
      BulletinKey3:
        " Получение инвестиционной прибыли на условиях, адаптированных для вас",
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
