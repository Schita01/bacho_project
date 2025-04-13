// Translation data for all supported languages
export type Language = "EN" | "RU" | "AR" | "GE"

export type TranslationKey =
  // Hero slider
  | "luxuryInvestment"
  | "exclusiveInvestment"
  | "guaranteedReturns"
  | "secureInvestment"
  | "hassleOwnership"
  | "zeroExpense"
  | "exclusiveOffer"
  | "limitedOpportunity"
  | "ownLuxury"
  | "roomPrice"
  | "guaranteedROI"
  | "fixedPayments"
  | "buybackGuarantee"
  | "fullyManaged"
  | "operatedUnder"
  | "freeInsurance"
  | "ownersPayNo"
  | "contactUs"
  | "reserveUnit"
  | "scroll"

  // Services section
  | "investmentProcess"
  | "reliableInvestment"
  | "agreement"
  | "agreementDesc"
  | "registration"
  | "registrationDesc"
  | "propertyOwner"
  | "propertyOwnerDesc"

  // Gallery section
  | "ourGallery"
  | "architecturalExcellence"
  | "distinctiveArchitecture"
  | "distinctiveDesc"
  | "smartLiving"
  | "smartLivingDesc"
  | "intelligentBathroom"
  | "intelligentBathroomDesc"
  | "premiumShower"
  | "premiumShowerDesc"

  // CTA section
  | "aboutProject"
  | "aboutProjectDesc1"
  | "aboutProjectDesc2"

  // FAQ section
  | "faq"
  | "frequentlyAskedQuestions"
  | "generalQuestions"
  | "investmentFinancials"
  | "legalOwnership"
  | "bookingContact"
  // FAQ Questions
  | "whatIsVerticalCapital"
  | "whatIsVerticalCapitalAnswer"
  | "whoManagesHotel"
  | "whoManagesHotelAnswer"
  | "benefitsOfInvesting"
  | "benefitsOfInvestingAnswer"
  | "investmentCost"
  | "investmentCostAnswer"
  | "howToReceiveReturns"
  | "howToReceiveReturnsAnswer"
  | "isInvestmentSecured"
  | "isInvestmentSecuredAnswer"
  | "canSellBeforeFiveYears"
  | "canSellBeforeFiveYearsAnswer"
  | "legalOwnershipQuestion"
  | "legalOwnershipAnswer"
  | "taxesAndFees"
  | "taxesAndFeesAnswer"
  | "afterFiveYears"
  | "afterFiveYearsAnswer"
  | "howToBook"
  | "howToBookAnswer"
  | "canVisitBeforeInvesting"
  | "canVisitBeforeInvestingAnswer"

  // Footer
  | "email"
  | "phone"
  | "whatsapp"
  | "allRightsReserved"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  EN: {
    // Hero slider
    luxuryInvestment: "LUXURY INVESTMENT OPPORTUNITY",
    exclusiveInvestment: "Exclusive Investment in a 5-Star Hotel",
    guaranteedReturns: "GUARANTEED RETURNS",
    secureInvestment: "Secure & Profitable Investment",
    hassleOwnership: "HASSLE-FREE OWNERSHIP",
    zeroExpense: "Zero Expense, 100% Profit",
    exclusiveOffer: "EXCLUSIVE OFFER",
    limitedOpportunity: "Limited Opportunity – Act Now!",
    ownLuxury:
      "Own a Luxury Hotel Room in Old Tbilisi\nUnmatched Renovation, High-End Furniture & Advanced Technology\nAI-Powered & Fully Sustainable – The Future of Hospitality",
    roomPrice:
      "Room Price: $150,000\nGuaranteed ROI: 10% Per Year 15,000$\nFixed, Secure Monthly Payments by Georgia's Largest Bank\nBuyback Guarantee After 5 Years",
    guaranteedROI: "Guaranteed ROI: 10% Per Year 15,000$",
    fixedPayments: "Fixed, Secure Monthly Payments by Georgia's Largest Bank",
    buybackGuarantee: "Buyback Guarantee After 5 Years",
    fullyManaged:
      "Fully Managed – No Operational Hassle\nOperated Under International Hotel Standards\nFree Insurance for Hotel Rooms\nOwners Pay No Fees, No Taxes, No Expenses – Just Receive Income",
    operatedUnder: "Operated Under International Hotel Standards",
    freeInsurance: "Free Insurance for Hotel Rooms",
    ownersPayNo: "Owners Pay No Fees, No Taxes, No Expenses – Just Receive Income",
    contactUs: "Contact Us Today (Phone, WhatsApp, Email)\nReserve Your Unit Before It's Sold Out",
    reserveUnit: "Reserve Your Unit Before It's Sold Out",
    scroll: "SCROLL",

    // Services section
    investmentProcess: "INVESTMENT PROCESS",
    reliableInvestment: "The most reliable, 100% secure, and simple investment",
    agreement: "Agreement",
    agreementDesc: "We prepare and sign a contract that ensures your property rights and investment conditions.",
    registration: "Registration",
    registrationDesc: "We register the contract with the Ministry of Justice of Georgia.",
    propertyOwner: "You are the property owner!",
    propertyOwnerDesc:
      "As the rightful property owner, you will receive an extract from the Public Registry in your name.",

    // Gallery section
    ourGallery: "OUR GALLERY",
    architecturalExcellence: "Architectural Excellence",
    distinctiveArchitecture: "Distinctive Architecture",
    distinctiveDesc: "Innovative design with flowing balconies and glass facades",
    smartLiving: "Smart Living Space",
    smartLivingDesc: "Modern interiors with ambient lighting and entertainment systems",
    intelligentBathroom: "Intelligent Bathroom",
    intelligentBathroomDesc: "Marble finishes with integrated smart technology",
    premiumShower: "Premium Shower Suite",
    premiumShowerDesc: "Designer fixtures with elegant marble and gold details",

    // CTA section
    aboutProject: "About Our Project",
    aboutProjectDesc1:
      "For the first time in Georgia, the real estate investment company Geoinvest presents the United Nations and European Union award-winning project, which is an exclusive 5* premium-class investment hotel located in the most expensive and tourist-heavy area of Tbilisi – Old Tbilisi.",
    aboutProjectDesc2:
      "The hotel comprises 70 premium-class rooms spread across 8 floors. Its key features include the highest construction quality with international recognition, exclusive infrastructure, luxurious and expensive rooms, ultra-modern technologies, and premium-class services and amenities. This project is unmatched throughout the Caucasus region.",

    // FAQ section
    faq: "FAQ",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    generalQuestions: "General Questions",
    investmentFinancials: "Investment & Financials",
    legalOwnership: "Legal & Ownership",
    bookingContact: "Booking & Contact",

    // FAQ Questions & Answers
    whatIsVerticalCapital: "What is The Vertical Capital?",
    whatIsVerticalCapitalAnswer:
      "The Vertical Capital is a real estate investment company offering a unique opportunity to own a luxury hotel room in a 5-star hotel in Old Tbilisi, with guaranteed rental income.",
    whoManagesHotel: "Who manages the hotel and the investment?",
    whoManagesHotelAnswer:
      "The hotel is managed under international hospitality standards, ensuring hassle-free ownership for investors.",
    benefitsOfInvesting: "What are the benefits of investing in a hotel room?",
    benefitsOfInvestingAnswer:
      "• Guaranteed 10% ROI per year ($15,000 on a $150,000 investment) • Fixed monthly payments secured by a top Georgian bank • A buyback option after 5 years • No operational involvement, taxes, or extra fees",
    investmentCost: "How much does it cost to invest?",
    investmentCostAnswer: "Each hotel room costs $150,000, with a guaranteed 10% annual ROI.",
    howToReceiveReturns: "How do I receive my returns?",
    howToReceiveReturnsAnswer: "Investors receive fixed monthly payments directly from the hotel's earnings.",
    isInvestmentSecured: "Is my investment secured?",
    isInvestmentSecuredAnswer:
      "Yes, payments are guaranteed by Georgia's largest bank, and investors have legal property ownership.",
    canSellBeforeFiveYears: "Can I sell my investment before 5 years?",
    canSellBeforeFiveYearsAnswer:
      "Yes, you can resell your hotel room at any time, or use the buyback option after 5 years.",
    legalOwnershipQuestion: "Will I own the hotel room legally?",
    legalOwnershipAnswer:
      "Yes, after investing, you will receive an ownership certificate registered with the Ministry of Justice of Georgia.",
    taxesAndFees: "Do I need to pay any taxes or fees?",
    taxesAndFeesAnswer: "No, investors are exempt from operational fees, maintenance costs, and property taxes.",
    afterFiveYears: "What happens after 5 years?",
    afterFiveYearsAnswer:
      "• You can continue receiving rental income • Sell your hotel room to a new investor • Use the buyback option to get your investment back",
    howToBook: "How can I book a hotel room investment?",
    howToBookAnswer:
      "• To reserve a unit, please contact us: • 📩 Email: geoinvests.com@gmail.com • 📞 Phone: +995 599 236 464",
    canVisitBeforeInvesting: "Can I visit the hotel before investing?",
    canVisitBeforeInvestingAnswer: "Yes! We welcome investors to visit the property in Old Tbilisi.",

    // Footer
    email: "geoinvests.com@gmail.com",
    phone: "+995 599236464",
    whatsapp: "WhatsApp",
    allRightsReserved: "All rights reserved.",
  },

  RU: {
    // Hero slider
    luxuryInvestment: "ЭЛИТНАЯ ИНВЕСТИЦИОННАЯ ВОЗМОЖНОСТЬ",
    exclusiveInvestment: "Эксклюзивные инвестиции в 5-звездочный отель",
    guaranteedReturns: "ГАРАНТИРОВАННАЯ ДОХОДНОСТЬ",
    secureInvestment: "Надежные и прибыльные инвестиции",
    hassleOwnership: "ВЛАДЕНИЕ БЕЗ ХЛОПОТ",
    zeroExpense: "Нулевые расходы, 100% прибыль",
    exclusiveOffer: "ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ",
    limitedOpportunity: "Ограниченное предложение – Действуйте сейчас!",
    ownLuxury:
      "Владейте роскошным номером в отеле в Старом Тбилиси\nНепревзойденная реновация, элитная мебель и передовые технологии\nС поддержкой ИИ и полностью экологичный – Будущее гостиничного бизнеса",
    roomPrice:
      "Цена номера: $150,000\nГарантированная доходность: 10% в год 15,000$\nФиксированные, безопасные ежемесячные платежи от крупнейшего банка Грузии\nГарантия обратного выкупа через 5 лет",
    guaranteedROI: "Гарантированная доходность: 10% в год 15,000$",
    fixedPayments: "Фиксированные, безопасные ежемесячные платежи от крупнейшего банка Грузии",
    buybackGuarantee: "Гарантия обратного выкупа через 5 лет",
    fullyManaged:
      "Полное управление – Никаких операционных хлопот\nРаботает по международным гостиничным стандартам\nБесплатная страховка для гостиничных номеров\nВладельцы не платят комиссии, налоги, расходы – Только получают доход",
    operatedUnder: "Работает по международным гостиничным стандартам",
    freeInsurance: "Бесплатная страховка для гостиничных номеров",
    ownersPayNo: "Владельцы не платят комиссии, налоги, расходы – Только получают доход",
    contactUs: "Свяжитесь с нами сегодня (Телефон, WhatsApp, Email)\nЗабронируйте свой номер, пока он не продан",
    reserveUnit: "Забронируйте свой номер, пока он не продан",
    scroll: "ПРОКРУТИТЬ",

    // Services section
    investmentProcess: "ИНВЕСТИЦИОННЫЙ ПРОЦЕСС",
    reliableInvestment: "Самые надежные, 100% безопасные и простые инвестиции",
    agreement: "Соглашение",
    agreementDesc:
      "Мы подготавливаем и подписываем контракт, который обеспечивает ваши права собственности и инвестиционные условия.",
    registration: "Регистрация",
    registrationDesc: "Мы регистрируем контракт в Министерстве юстиции Грузии.",
    propertyOwner: "Вы являетесь владельцем недвижимости!",
    propertyOwnerDesc: "Как законный владелец недвижимости, вы получите выписку из Публичного реестра на ваше имя.",

    // Gallery section
    ourGallery: "НАША ГАЛЕРЕЯ",
    architecturalExcellence: "Архитектурное совершенство",
    distinctiveArchitecture: "Уникальная архитектура",
    distinctiveDesc: "Инновационный дизайн с плавными балконами и стеклянными фасадами",
    smartLiving: "Умное жилое пространство",
    smartLivingDesc: "Современные интерьеры с атмосферным освещением и развлекательными системами",
    intelligentBathroom: "Интеллектуальная ванная комната",
    intelligentBathroomDesc: "Мраморная отделка с интегрированными умными технологиями",
    premiumShower: "Премиальная душевая",
    premiumShowerDesc: "Дизайнерская сантехника с элегантным мрамором и золотыми деталями",

    // CTA section
    aboutProject: "О нашем проекте",
    aboutProjectDesc1:
      "Впервые в Грузии инвестиционная компания Geoinvest представляет отмеченный наградами ООН и Европейского Союза проект – эксклюзивный 5* инвестиционный отель премиум-класса, расположенный в самом дорогом и туристическом районе Тбилиси – Старом Тбилиси.",
    aboutProjectDesc2:
      "Отель включает 70 номеров премиум-класса на 8 этажах. Его ключевые особенности включают высочайшее качество строительства с международным признанием, эксклюзивную инфраструктуру, роскошные и дорогие номера, ультрасовременные технологии и услуги и удобства премиум-класса. Этот проект не имеет аналогов во всем Кавказском регионе.",

    // FAQ section
    faq: "ЧАВО",
    frequentlyAskedQuestions: "Часто Задаваемые Вопросы",
    generalQuestions: "Общие Вопросы",
    investmentFinancials: "Инвестиции и Финансы",
    legalOwnership: "Юридические Вопросы и Право Собственности",
    bookingContact: "Бронирование и Контакты",

    // FAQ Questions & Answers
    whatIsVerticalCapital: "Что такое The Vertical Capital?",
    whatIsVerticalCapitalAnswer:
      "The Vertical Capital - это компания по инвестициям в недвижимость, предлагающая уникальную возможность владеть роскошным номером в 5-звездочном отеле в Старом Тбилиси с гарантированным доходом от аренды.",
    whoManagesHotel: "Кто управляет отелем и инвестициями?",
    whoManagesHotelAnswer:
      "Отель управляется по международным стандартам гостеприимства, обеспечивая беспроблемное владение для инвесторов.",
    benefitsOfInvesting: "Каковы преимущества инвестирования в гостиничный номер?",
    benefitsOfInvestingAnswer:
      "• Гарантированная доходность 10% в год (15 000$ на инвестицию в 150 000$) • Фиксированные ежемесячные платежи, обеспеченные ведущим грузинским банком • Опция обратного выкупа через 5 лет • Отсутствие операционного участия, налогов или дополнительных сборов",
    investmentCost: "Сколько стоит инвестиция?",
    investmentCostAnswer: "Каждый гостиничный номер стоит $150,000, с гарантированной годовой доходностью 10%.",
    howToReceiveReturns: "Как я получаю свой доход?",
    howToReceiveReturnsAnswer: "Инвесторы получают фиксированные ежемесячные платежи непосредственно от доходов отеля.",
    isInvestmentSecured: "Защищены ли мои инвестиции?",
    isInvestmentSecuredAnswer:
      "Да, платежи гарантированы крупнейшим банком Грузии, и инвесторы имеют законное право собственности.",
    canSellBeforeFiveYears: "Могу ли я продать свою инвестицию до истечения 5 лет?",
    canSellBeforeFiveYearsAnswer:
      "Да, вы можете перепродать свой гостиничный номер в любое время или воспользоваться опцией обратного выкупа через 5 лет.",
    legalOwnershipQuestion: "Буду ли я законным владельцем гостиничного номера?",
    legalOwnershipAnswer:
      "Да, после инвестирования вы получите свидетельство о собственности, зарегистрированное в Министерстве юстиции Грузии.",
    taxesAndFees: "Нужно ли мне платить налоги или сборы?",
    taxesAndFeesAnswer:
      "Нет, инвесторы освобождены от операционных сборов, затрат на обслуживание и налогов на недвижимость.",
    afterFiveYears: "Что происходит через 5 лет?",
    afterFiveYearsAnswer:
      "• Вы можете продолжать получать доход от аренды • Продать свой гостиничный номер новому инвестору • Использовать опцию обратного выкупа, чтобы вернуть свои инвестиции",
    howToBook: "Как забронировать инвестицию в гостиничный номер?",
    howToBookAnswer:
      "• Чтобы зарезервировать номер, пожалуйста, свяжитесь с нами: • 📩 Email: geoinvests.com@gmail.com • 📞 Телефон: +995 599 236 464",
    canVisitBeforeInvesting: "Могу ли я посетить отель перед инвестированием?",
    canVisitBeforeInvestingAnswer: "Да! Мы приглашаем инвесторов посетить объект в Старом Тбилиси.",

    // Footer
    email: "geoinvests.com@gmail.com",
    phone: "+995 599236464",
    whatsapp: "WhatsApp",
    allRightsReserved: "Все права защищены.",
  },

  AR: {
    // Hero slider
    luxuryInvestment: "فرصة استثمارية فاخرة",
    exclusiveInvestment: "استثمار حصري في فندق 5 نجوم",
    guaranteedReturns: "عوائد مضمونة",
    secureInvestment: "استثمار آمن ومربح",
    hassleOwnership: "ملكية خالية من المتاعب",
    zeroExpense: "صفر نفقات، 100% ربح",
    exclusiveOffer: "عرض حصري",
    limitedOpportunity: "فرصة محدودة - تصرف الآن!",
    ownLuxury:
      "امتلك غرفة فندقية فاخرة في تبليسي القديمة\nتجديد لا مثيل له، أثاث راقي وتكنولوجيا متطورة\nمدعوم بالذكاء الاصطناعي ومستدام بالكامل - مستقبل الضيافة",
    roomPrice:
      "سعر الغرفة: 150,000 دولار\nعائد استثمار مضمون: 10% سنويًا 15,000 دولار\nمدفوعات شهرية ثابتة وآمنة من أكبر بنك في جورجيا\nضمان إعادة الشراء بعد 5 سنوات",
    guaranteedROI: "عائد استثمار مضمون: 10% سنويًا 15,000 دولار",
    fixedPayments: "مدفوعات شهرية ثابتة وآمنة من أكبر بنك في جورجيا",
    buybackGuarantee: "ضمان إعادة الشراء بعد 5 سنوات",
    fullyManaged:
      "إدارة كاملة - لا متاعب تشغيلية\nتعمل وفق معايير الفنادق الدولية\nتأمين مجاني لغرف الفندق\nالمالكون لا يدفعون رسومًا أو ضرائب أو نفقات - فقط يتلقون الدخل",
    operatedUnder: "تعمل وفق معايير الفنادق الدولية",
    freeInsurance: "تأمين مجاني لغرف الفندق",
    ownersPayNo: "المالكون لا يدفعون رسومًا أو ضرائب أو نفقات - فقط يتلقون الدخل",
    contactUs: "اتصل بنا اليوم (هاتف، واتساب، بريد إلكتروني)\nاحجز وحدتك قبل نفاذها",
    reserveUnit: "احجز وحدتك قبل نفاذها",
    scroll: "تمرير",

    // Services section
    investmentProcess: "عملية الاستثمار",
    reliableInvestment: "الاستثمار الأكثر موثوقية وآمن 100% وبسيط",
    agreement: "الاتفاقية",
    agreementDesc: "نقوم بإعداد وتوقيع عقد يضمن حقوق الملكية الخاصة بك وشروط الاستثمار.",
    registration: "التسجيل",
    registrationDesc: "نقوم بتسجيل العقد لدى وزارة العدل في جورجيا.",
    propertyOwner: "أنت مالك العقار!",
    propertyOwnerDesc: "بصفتك المالك الشرعي للعقار، ستحصل على مستخرج من السجل العام باسمك.",

    // Gallery section
    ourGallery: "معرض الصور",
    architecturalExcellence: "التميز المعماري",
    distinctiveArchitecture: "هندسة معمارية مميزة",
    distinctiveDesc: "تصميم مبتكر مع شرفات متموجة وواجهات زجاجية",
    smartLiving: "مساحة معيشة ذكية",
    smartLivingDesc: "ديكورات داخلية عصرية مع إضاءة محيطة وأنظمة ترفيهية",
    intelligentBathroom: "حمام ذكي",
    intelligentBathroomDesc: "تشطيبات رخامية مع تكنولوجيا ذكية متكاملة",
    premiumShower: "جناح استحمام فاخر",
    premiumShowerDesc: "تجهيزات مصممة مع رخام أنيق وتفاصيل ذهبية",

    // CTA section
    aboutProject: "عن مشروعنا",
    aboutProjectDesc1:
      "لأول مرة في جورجيا، تقدم شركة الاستثمار العقاري Geoinvest المشروع الحائز على جوائز الأمم المتحدة والاتحاد الأوروبي، وهو فندق استثماري حصري من فئة 5 نجوم يقع في أغلى وأكثر المناطق السياحية في تبليسي - تبليسي القديمة.",
    aboutProjectDesc2:
      "يضم الفندق 70 غرفة من الدرجة الممتازة موزعة على 8 طوابق. تشمل ميزاته الرئيسية أعلى جودة بناء معترف بها دوليًا، وبنية تحتية حصرية، وغرف فاخرة وباهظة الثمن، وتقنيات فائقة الحداثة، وخدمات ووسائل راحة من الدرجة الممتازة. هذا المشروع لا مثيل له في جميع أنحاء منطقة القوقاز.",

    // FAQ section
    faq: "الأسئلة الشائعة",
    frequentlyAskedQuestions: "الأسئلة المتكررة",
    generalQuestions: "أسئلة عامة",
    investmentFinancials: "الاستثمار والأمور المالية",
    legalOwnership: "الملكية القانونية",
    bookingContact: "الحجز والاتصال",

    // FAQ Questions & Answers
    whatIsVerticalCapital: "ما هو The Vertical Capital؟",
    whatIsVerticalCapitalAnswer:
      "The Vertical Capital هي شركة استثمار عقاري تقدم فرصة فريدة لامتلاك غرفة فندقية فاخرة في فندق 5 نجوم في تبليسي القديمة، مع دخل إيجار مضمون.",
    whoManagesHotel: "من يدير الفندق والاستثمار؟",
    whoManagesHotelAnswer: "تتم إدارة الفندق وفقًا لمعايير الضيافة الدولية، مما يضمن ملكية خالية من المتاعب للمستثمرين.",
    benefitsOfInvesting: "ما هي فوائد الاستثمار في غرفة فندقية؟",
    benefitsOfInvestingAnswer:
      "• عائد استثمار مضمون بنسبة 10% سنويًا (15,000 دولار على استثمار بقيمة 150,000 دولار) • مدفوعات شهرية ثابتة مضمونة من قبل بنك جورجي رائد • خيار إعادة الشراء بعد 5 سنوات • لا مشاركة تشغيلية، ولا ضرائب، ولا رسوم إضافية",
    investmentCost: "كم تكلفة الاستثمار؟",
    investmentCostAnswer: "تكلفة كل غرفة فندقية 150,000 دولار، مع عائد استثمار سنوي مضمون بنسبة 10%.",
    howToReceiveReturns: "كيف أتلقى عوائدي؟",
    howToReceiveReturnsAnswer: "يتلقى المستثمرون مدفوعات شهرية ثابتة مباشرة من أرباح الفندق.",
    isInvestmentSecured: "هل استثماري آمن؟",
    isInvestmentSecuredAnswer:
      "نعم، المدفوعات مضمونة من قبل أكبر بنك في جورجيا، ويتمتع المستثمرون بملكية قانونية للعقار.",
    canSellBeforeFiveYears: "هل يمكنني بيع استثماري قبل 5 سنوات؟",
    canSellBeforeFiveYearsAnswer:
      "نعم، يمكنك إعادة بيع غرفتك الفندقية في أي وقت، أو استخدام خيار إعادة الشراء بعد 5 سنوات.",
    legalOwnershipQuestion: "هل سأمتلك الغرفة الفندقية قانونيًا؟",
    legalOwnershipAnswer: "نعم، بعد الاستثمار، ستحصل على شهادة ملكية مسجلة لدى وزارة العدل في جورجيا.",
    taxesAndFees: "هل أحتاج إلى دفع أي ضرائب أو رسوم؟",
    taxesAndFeesAnswer: "لا، المستثمرون معفون من رسوم التشغيل وتكاليف الصيانة وضرائب الملكية.",
    afterFiveYears: "ماذا يحدث بعد 5 سنوات؟",
    afterFiveYearsAnswer:
      "• يمكنك الاستمرار في تلقي دخل الإيجار • بيع غرفتك الفندقية لمستثمر جديد • استخدام خيار إعادة الشراء لاسترداد استثمارك",
    howToBook: "كيف يمكنني حجز استثمار غرفة فندقية؟",
    howToBookAnswer:
      "• لحجز وحدة، يرجى الاتصال بنا: • 📩 البريد الإلكتروني: geoinvests.com@gmail.com • 📞 الهاتف: +995 599 236 464",
    canVisitBeforeInvesting: "هل يمكنني زيارة الفندق قبل الاستثمار؟",
    canVisitBeforeInvestingAnswer: "نعم! نرحب بالمستثمرين لزيارة العقار في تبليسي القديمة.",

    // Footer
    email: "geoinvests.com@gmail.com",
    phone: "+995 599236464",
    whatsapp: "واتساب",
    allRightsReserved: "جميع الحقوق محفوظة.",
  },

  GE: {
    // Hero slider
    luxuryInvestment: "ლუქს საინვესტიციო შესაძლებლობა",
    exclusiveInvestment: "ექსკლუზიური ინვესტიცია 5-ვარსკვლავიან სასტუმროში",
    guaranteedReturns: "გარანტირებული შემოსავალი",
    secureInvestment: "უსაფრთხო და მომგებიანი ინვესტიცია",
    hassleOwnership: "უპრობლემო მფლობელობა",
    zeroExpense: "ნულოვანი ხარჯი, 100% მოგება",
    exclusiveOffer: "ექსკლუზიური შეთავაზება",
    limitedOpportunity: "შეზღუდული შესაძლებლობა - იმოქმედეთ ახლავე!",
    ownLuxury:
      "ფლობთ ლუქს სასტუმროს ოთახს ძველ თბილისში\nუნიკალური რენოვაცია, მაღალი ხარისხის ავეჯი და თანამედროვე ტექნოლოგიები\nხელოვნური ინტელექტით აღჭურვილი და სრულად მდგრადი - სტუმართმოყვარეობის მომავალი",
    roomPrice:
      "ოთახის ფასი: $150,000\nგარანტირებული ROI: 10% წელიწადში 15,000$\nფიქსირებული, უსაფრთხო ყოველთვიური გადახდები საქართველოს უდიდესი ბანკისგან\nგამოსყიდვის გარანტია 5 წლის შემდეგ",
    guaranteedROI: "გარანტირებული ROI: 10% წელიწადში 15,000$",
    fixedPayments: "ფიქსირებული, უსაფრთხო ყოველთვიური გადახდები საქართველოს უდიდესი ბანკისგან",
    buybackGuarantee: "გამოსყიდვის გარანტია 5 წლის შემდეგ",
    fullyManaged:
      "სრულად მართული - არანაირი საოპერაციო პრობლემა\nმუშაობს საერთაშორისო სასტუმროს სტანდარტებით\nუფასო დაზღვევა სასტუმროს ოთახებისთვის\nმფლობელები არ იხდიან საკომისიოებს, გადასახადებს, ხარჯებს - მხოლოდ იღებენ შემოსავალს",
    operatedUnder: "მუშაობს საერთაშორისო სასტუმროს სტანდარტებით",
    freeInsurance: "უფასო დაზღვევა სასტუმროს ოთახებისთვის",
    ownersPayNo: "მფლობელები არ იხდიან საკომისიოებს, გადასახადებს, ხარჯებს - მხოლოდ იღებენ შემოსავალს",
    contactUs: "დაგვიკავშირდით დღესვე (ტელეფონი, WhatsApp, ელფოსტა)\nდაჯავშნეთ თქვენი ერთეული სანამ გაიყიდება",
    reserveUnit: "დაჯავშნეთ თქვენი ერთეული სანამ გაიყიდება",
    scroll: "ჩამოსქროლეთ",

    // Services section
    investmentProcess: "საინვესტიციო პროცესი",
    reliableInvestment: "ყველაზე საიმედო, 100% უსაფრთხო და მარტივი ინვესტიცია",
    agreement: "ხელშეკრულება",
    agreementDesc:
      "ჩვენ ვამზადებთ და ვაწერთ ხელს ხელშეკრულებას, რომელიც უზრუნველყოფს თქვენს საკუთრების უფლებებს და საინვესტიციო პირობებს.",
    registration: "რეგისტრაცია",
    registrationDesc: "ჩვენ ვარეგისტრირებთ ხელშეკრულებას საქართველოს იუსტიციის სამინისტროში.",
    propertyOwner: "თქვენ ხართ ქონების მფლობელი!",
    propertyOwnerDesc: "როგორც კანონიერი მფლობელი, თქვენ მიიღებთ ამონაწერს საჯარო რეესტრიდან თქვენს სახელზე.",

    // Gallery section
    ourGallery: "ჩვენი გალერეა",
    architecturalExcellence: "არქიტექტურული სრულყოფილება",
    distinctiveArchitecture: "გამორჩეული არქიტექტურა",
    distinctiveDesc: "ინოვაციური დიზაინი მოედინებადი აივნებით და მინის ფასადებით",
    smartLiving: "ჭკვიანი საცხოვრებელი სივრცე",
    smartLivingDesc: "თანამედროვე ინტერიერი ამბიენტური განათებით და გასართობი სისტემებით",
    intelligentBathroom: "ინტელექტუალური აბაზანა",
    intelligentBathroomDesc: "მარმარილოს მოპირკეთება ინტეგრირებული ჭკვიანი ტექნოლოგიით",
    premiumShower: "პრემიუმ საშხაპე",
    premiumShowerDesc: "დიზაინერული მოწყობილობები ელეგანტური მარმარილოთი და ოქროს დეტალებით",

    // CTA section
    aboutProject: "ჩვენი პროექტის შესახებ",
    aboutProjectDesc1:
      "პირველად საქართველოში, უძრავი ქონების საინვესტიციო კომპანია Geoinvest წარმოადგენს გაეროსა და ევროკავშირის ჯილდოს მფლობელ პროექტს, რომელიც არის ექსკლუზიური 5* პრემიუმ კლასის საინვესტიციო სასტუმრო, მდებარე თბილისის ყველაზე ძვირ და ტურისტულ უბანში - ძველ თბილისში.",
    aboutProjectDesc2:
      "სასტუმრო შედგება 70 პრემიუმ კლასის ოთახისგან, განაწილებული 8 სართულზე. მისი ძირითადი მახასიათებლები მოიცავს უმაღლესი ხარისხის მშენებლობას საერთაშორისო აღიარებით, ექსკლუზიურ ინფრასტრუქტურას, ლუქს და ძვირადღირებულ ოთახებს, ულტრათანამედროვე ტექნოლოგიებს და პრემიუმ კლასის სერვისებსა და კომფორტს. ეს პროექტი უნიკალურია მთელს კავკასიის რეგიონში.",

    // FAQ section
    faq: "ხშირად დასმული კითხვები",
    frequentlyAskedQuestions: "ხშირად დასმული კითხვები",
    generalQuestions: "ზოგადი კითხვები",
    investmentFinancials: "ინვესტიცია და ფინანსები",
    legalOwnership: "იურიდიული საკითხები და საკუთრება",
    bookingContact: "დაჯავშნა და კონტაქტი",

    // FAQ Questions & Answers
    whatIsVerticalCapital: "რა არის The Vertical Capital?",
    whatIsVerticalCapitalAnswer:
      "The Vertical Capital არის უძრავი ქონების საინვესტიციო კომპანია, რომელიც გთავაზობთ უნიკალურ შესაძლებლობას, ფლობდეთ ლუქს სასტუმროს ოთახს 5-ვარსკვლავიან სასტუმროში ძველ თბილისში, გარანტირებული საიჯარო შემოსავლით.",
    whoManagesHotel: "ვინ მართავს სასტუმროს და ინვესტიციას?",
    whoManagesHotelAnswer:
      "სასტუმრო იმართება საერთაშორისო სტუმართმოყვარეობის სტანდარტებით, რაც უზრუნველყოფს უპრობლემო მფლობელობას ინვესტორებისთვის.",
    benefitsOfInvesting: "რა სარგებელი აქვს სასტუმროს ოთახში ინვესტირებას?",
    benefitsOfInvestingAnswer:
      "• გარანტირებული 10% ROI წელიწადში (15,000$ ინვესტიციაზე 150,000$) • ფიქსირებული ყოველთვიური გადახდები, უზრუნველყოფილი წამყვანი ქართული ბანკის მიერ • გამოსყიდვის ვარიანტი 5 წლის შემდეგ • არანაირი საოპერაციო ჩართულობა, გადასახადები ან დამატებითი მოსაკრებლები",
    investmentCost: "რა ღირს ინვესტიცია?",
    investmentCostAnswer: "თითოეული სასტუმროს ოთახი ღირს $150,000, გარანტირებული 10% წლიური ROI-ით.",
    howToReceiveReturns: "როგორ მივიღებ ჩემს შემოსავალს?",
    howToReceiveReturnsAnswer: "ინვესტორები იღებენ ფიქსირებულ ყოველთვიურ გადახდებს პირდაპირ სასტუმროს შემოსავლებიდან.",
    isInvestmentSecured: "არის თუ არა ჩემი ინვესტიცია დაცული?",
    isInvestmentSecuredAnswer:
      "დიახ, გადახდები გარანტირებულია საქართველოს უდიდესი ბანკის მიერ და ინვესტორებს აქვთ ქონების კანონიერი მფლობელობა.",
    canSellBeforeFiveYears: "შემიძლია თუ არა ჩემი ინვესტიციის გაყიდვა 5 წლამდე?",
    canSellBeforeFiveYearsAnswer:
      "დიახ, შეგიძლიათ თქვენი სასტუმროს ოთახის გადაყიდვა ნებისმიერ დროს, ან გამოიყენოთ გამოსყიდვის ვარიანტი 5 წლის შემდეგ.",
    legalOwnershipQuestion: "ვიქნები თუ არა სასტუმროს ოთახის კანონიერი მფლობელი?",
    legalOwnershipAnswer:
      "დიახ, ინვესტირების შემდეგ მიიღებთ საკუთრების სერტიფიკატს, რომელიც რეგისტრირებულია საქართველოს იუსტიციის სამინისტროში.",
    taxesAndFees: "მჭირდება თუ არა რაიმე გადასახადების ან მოსაკრებლების გადახდა?",
    taxesAndFeesAnswer:
      "არა, ინვესტორები გათავისუფლებულნი არიან საოპერაციო მოსაკრებლებისგან, ტექნიკური მომსახურების ხარჯებისგან და ქონების გადასახადებისგან.",
    afterFiveYears: "რა ხდება 5 წლის შემდეგ?",
    afterFiveYearsAnswer:
      "• შეგიძლიათ განაგრძოთ საიჯარო შემოსავლის მიღება • გაყიდოთ თქვენი სასტუმროს ოთახი ახალ ინვესტორზე • გამოიყენოთ გამოსყიდვის ვარიანტი თქვენი ინვესტიციის დასაბრუნებლად",
    howToBook: "როგორ შემიძლია სასტუმროს ოთახის ინვესტიციის დაჯავშნა?",
    howToBookAnswer:
      "• ერთეულის დასაჯავშნად, გთხოვთ დაგვიკავშირდეთ: • 📩 ელფოსტა: geoinvests.com@gmail.com • 📞 ტელეფონი: +995 599 236 464",
    canVisitBeforeInvesting: "შემიძლია თუ არა სასტუმროს მონახულება ინვესტირებამდე?",
    canVisitBeforeInvestingAnswer: "დიახ! ჩვენ მოვიწვევთ ინვესტორებს ქონების მოსანახულებლად ძველ თბილისში.",

    // Footer
    email: "geoinvests.com@gmail.com",
    phone: "+995 599236464",
    whatsapp: "WhatsApp",
    allRightsReserved: "ყველა უფლება დაცულია.",
  },
}
