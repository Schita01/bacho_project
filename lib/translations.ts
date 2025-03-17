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

    // Footer
    email: "geoinvests.com@gmail.com",
    phone: "+995 599236464",
    whatsapp: "WhatsApp",
    allRightsReserved: "ყველა უფლება დაცულია.",
  },
}

