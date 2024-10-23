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
      BulletinKey3: "Full international level management for 25 years",
      mainLoaderText: "მოგესალებით ეს არის საქართველოში საუკეთესო პროექტი",
      caluclateText: "Calculate",
      AmountMoney: "Amount of Money",
      compensation: "compensation (month)",
      month: "month",
      calculation: "calculation",
      detail: "View details",
      bulleText: "The cost of the investment restaurant is $ 1,500,000. The business model of the company gives you a special opportunity to invest at a 20 times lower price with the amount of shares you want. You can purchase a minimum share starting at $75,000, which covers 5% of the real estate.",
      bulleText2: "You can invest only half of the amount, if for example you want to buy a 5% share, the value of which is $75,000, in this case you have the option to pay only 50% of $37,500 and the remaining 50% only after 3 years without any interest or monthly payments. Most importantly, over 3 years you will receive a bank-guaranteed 16% annual investment return",
      bulleText4: "result",
      backPage: "Go Back",
      
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
      BulletinKey3: "საერთაშორისო დონის სრული მენეჯმენტი 25 წლის ვადით",
      mainLoaderText: "მოგესალებით ეს არის საქართველოში საუკეთესო პროექტი",
      caluclateText: "გამოთვალეთ,",
      AmountMoney: "თანხის ოდენობა",
      compensation: "ანაზღაურების მიღების (თვე)",
      month: "თვე",
      calculation: "კალკულაცია",
      detail: "იხილეთ დეტალურად",
      bulleText: "საინვესტიციო რესტორნის ღირებულება შეადგენს 1,500,000 $ კომპანიის ბიზნეს მოდელი გაძლევთ განსაკუთრებულ შესაძლებლობას განახორციელოთ  ინვესტირება 20 ჯერ დაბალ ფასად თქვენთვის სასურველი წილობრივი ოდენობით. მინიმალური წილის შესყიდვა შეგიძლიათ 75,000$ -დან რომელიც მოიცავს უძრავი  ქონების 5 % -ს ",
      bulleText2: "თქვენ შეგიძლიათ განახორციელოთ ინვესტირება მხოლოდ ნახევარი თანხით , თუ მაგალითად გსურთ შეიძინოთ 5 % იანი წილი , რომლის ღირებულებაც 75,000$ შეადგენს,ამ შემთხვევაში გაქვთ შესაძლებლობა გადაიხადოთ  მხოლოდ 50% 37,500$ , დარჩენილი 50%  კი მხოლოდ 3 წლის შემდეგ დაფაროთ ერთიანად ყოველგვარი პროცენტებისა  და ყოველთვიური გადახდების გარეშე. რაც ყველაზე მნიშვნელოვანია 3 წლის მანძილზე თქვენ მიიღებთ   საბანკო გარანტიით დაცულ წლიურ 16%-იან საინვესტიციო სარგებელს ",
      bulleText3: "რესტორნის მართვას განახორციელებს solar energy hotel group-ის გამოცდილი გუნდი რაც საშუალებას გაძლევთ  ისიამოვნოთ კომფორტული საინვესტიციო პირობებით, გარანტირებული პასიური შემოსავლითა და ხარისხიანი მენეჯმენტის უპირატესობებით.",
      bulleText4: "შედეგი",
      backPage: "უკან",
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
      "Полный менеджмент международного уровня в течение 25 лет.",
      mainLoaderText: "მოგესალებით ეს არის საქართველოში საუკეთესო პროექტი",
      caluclateText: "Рассчитать",
      AmountMoney: "Сумма денег",
      compensation: "компенсация (месяц)",
      month: "месяц",
      calculation: "калькуляция",
      detail: "Посмотреть детали",
      bulleText: "Стоимость инвестиционного ресторана составляет 1 500 000 долларов США. Бизнес-модель компании дает вам особую возможность инвестировать в 20 раз более низкую цену с желаемым количеством акций. Вы можете приобрести минимальную долю от $75 000, что покрывает 5% недвижимости.",
      bulleText2: "Вы можете инвестировать только половину суммы, если, например, вы хотите купить 5% акций, стоимость которых составляет 75 000 долларов США, в этом случае у вас есть возможность заплатить только 50% от 37 500 долларов США, а оставшиеся 50% только через 3 года. лет без процентов и ежемесячных платежей. Самое главное, что в течение 3 лет вы получите гарантированный банком годовой доход от инвестиций в размере 16%.",
      bulleText3: "Рестораном будет управлять опытная команда гостиничной группы солнечной энергии, что позволит вам насладиться комфортными инвестиционными условиями, гарантированным пассивным доходом и преимуществами качественного управления.",
      bulletext4: "Сохранить",
      backPage: "назад",
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
