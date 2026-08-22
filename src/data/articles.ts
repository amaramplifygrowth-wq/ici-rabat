import { Article } from '../types';

// Illustrated author avatars live in /public (not imported as ES modules)
// because this data file is also loaded directly by scripts/prerender.ts
// via tsx/Node, which — unlike Vite — cannot resolve binary asset imports.
const avatarNadia = '/avatars/nadia.png';
const avatarYassine = '/avatars/yassine.png';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-08',
    slug: 'ba-fares-diour-jamaa',
    category: 'horeca',
    categoryLabel: {
      fr: 'Petit-Déjeuner & Tradition',
      ar: 'الفطور والتقاليد',
      en: 'Breakfast & Tradition'
    },
    title: {
      fr: 'Ba Fares : le petit-déjeuner qui fait la fierté de Diour Jamaa depuis 1957',
      ar: 'باء فارس: الفطور الذي يفتخر به حي ديور الجامع منذ 1957',
      en: 'Ba Fares: The Breakfast Diour Jamaa Has Been Proud of Since 1957'
    },
    subtitle: {
      fr: 'Une institution rbatie où la tradition laitière et le petit-déjeuner marocain se dégustent sans artifice, table après table.',
      ar: 'مؤسسة رباطية عريقة حيث تُقدَّم تقاليد الألبان والفطور المغربي بأصالة، مائدة تلو الأخرى.',
      en: 'A Rabat institution where dairy tradition and Moroccan breakfast are served with no frills, table after table.'
    },
    excerpt: {
      fr: 'Depuis 1957, cette crèmerie de Diour Jamaa sert le petit-déjeuner marocain dans sa version la plus authentique, entre produits laitiers maison, plateau généreux et couscous du vendredi.',
      ar: 'منذ سنة 1957، تقدم هذه الكريمري بحي ديور الجامع الفطور المغربي بأصالته الكاملة، بين منتجات ألبان منزلية، طبق سخي وكسكس الجمعة.',
      en: 'Since 1957, this Diour Jamaa dairy house has served Moroccan breakfast in its most authentic form, house-made dairy, a generous platter, and Friday couscous.'
    },
    body: {
      fr: [
        "Il y a des adresses à Rabat qu'on ne présente plus, et Ba Fares en fait partie. Nichée avenue Al Ghazali, dans le quartier historique de Diour Jamaa, cette crèmerie traditionnelle sert des petits-déjeuners marocains authentiques depuis 1957. Pas de filtre Instagram, pas de tendance passagère, juste un savoir-faire transmis avec sérieux, table après table.",
        "Ce qui frappe d'abord, c'est la vitrine réfrigérée à l'entrée, un mur de pâtisseries et de produits laitiers maison qui donne le ton avant même de s'asseoir. Raib frais, yaourts artisanaux, mhalabia et cheesecake au caramel, Ba Fares a bâti sa réputation sur des produits laitiers qu'on ne trouve nulle part ailleurs en ville avec cette régularité.",
        "Mais c'est autour de la table du petit-déjeuner que l'expérience prend tout son sens. Msemen dorés, batbout tièdes, œufs au plat noyés sous une montagne de fromage râpé, jben frais, olives noires, huile d'olive et amlou en accompagnement, le plateau Ba Fares ne fait pas les choses à moitié. Ajoutez un verre de jus d'orange pressé, un thé à la menthe généreusement servi et un lait battu bien frais, et vous comprendrez pourquoi les habitués reviennent semaine après semaine.",
        "La maison ne s'arrête pas au petit-déjeuner traditionnel, Ba Fares propose aussi des pizzas généreusement garnies, thon, olives, poivrons, tomates cerises, pour ceux qui cherchent une pause déjeuner qui change du registre habituel. Autre rendez-vous incontournable, le couscous du vendredi, préparé selon la tradition, qui attire chaque semaine son lot d'habitués et de familles du quartier.",
        "Côté prix, Ba Fares reste fidèle à son ADN de quartier, les formules petit-déjeuner oscillent entre 55 et 79 MAD, largement accessibles pour la qualité proposée. Les produits laitiers à emporter, eux, démarrent autour de 30 MAD le pack. Que vous soyez du quartier ou de passage, Ba Fares reste une référence pour qui cherche un vrai petit-déjeuner rbati, sans artifice, tel qu'on le sert à Rabat depuis presque sept décennies."
      ],
      ar: [
        "هناك عناوين في الرباط لا تحتاج إلى تعريف، ومطعم باء فارس واحد منها. تقع هذه الكريمري التقليدية في شارع الغزالي، بحي ديور الجامع العريق، وتقدم فطوراً مغربياً أصيلاً منذ سنة 1957. لا فلاتر إنستغرام، ولا موضة عابرة، بل خبرة متوارثة تُقدَّم بجدية، مائدة تلو الأخرى.",
        "أول ما يلفت الانتباه هو الواجهة المبردة عند المدخل، جدار من الحلويات ومنتجات الألبان المصنوعة يدوياً يعطي الطابع العام قبل حتى الجلوس. الرايب الطازج، الزبادي التقليدي، المحلبية وتشيزكيك الكراميل، بنى باء فارس سمعته على منتجات ألبان لا تجدها في أي مكان آخر بالمدينة بهذه الجودة المنتظمة.",
        "لكن التجربة الحقيقية تتجلى حول مائدة الفطور. مسمن ذهبي، بطبوط دافئ، بيض مقلي مغطى بجبل من الجبن المبشور، جبن طري، زيتون أسود، زيت زيتون وأملو كمرافقات، طبق باء فارس لا يفعل الأشياء بنصف جهد. أضف كأس عصير برتقال طازج، شاياً بالنعناع يُقدَّم بسخاء، ولبناً بارداً منعشاً، وستفهم لماذا يعود الزبائن الدائمون أسبوعاً بعد أسبوع.",
        "لا تتوقف المؤسسة عند الفطور التقليدي فقط، فباء فارس يقدم أيضاً بيتزا غنية بالمكونات، تونة، زيتون، فلفل، طماطم كرزية، لمن يبحث عن استراحة غداء تخرج عن المألوف. موعد آخر لا يُفوَّت هو كسكس الجمعة، المحضر وفق التقاليد، والذي يجذب أسبوعياً زبائنه الدائمين وعائلات الحي.",
        "من ناحية الأسعار، يبقى باء فارس وفياً لهويته كمطعم حي، تتراوح أسعار وجبات الفطور بين 55 و79 درهماً، وهي في متناول الجميع مقارنة بالجودة المقدمة. أما منتجات الألبان للأخذ، فتبدأ من حوالي 30 درهماً للعلبة. سواء كنت من سكان الحي أو زائراً عابراً، يبقى باء فارس مرجعاً لمن يبحث عن فطور رباطي أصيل، بلا تكلف، كما يُقدَّم في الرباط منذ ما يقارب سبعة عقود."
      ],
      en: [
        "There are addresses in Rabat that need no introduction, and Ba Fares is one of them. Tucked away on Avenue Al Ghazali in the historic Diour Jamaa district, this traditional dairy house has been serving authentic Moroccan breakfasts since 1957. No Instagram filter, no passing trend, just know-how passed down with care, table after table.",
        "The first thing that catches the eye is the refrigerated display at the entrance, a wall of house-made pastries and dairy products that sets the tone before you even sit down. Fresh raib, artisanal yogurts, mhalabia and caramel cheesecake, Ba Fares built its reputation on dairy products you won't find anywhere else in the city with this level of consistency.",
        "But it's around the breakfast table that the experience truly comes together. Golden msemen, warm batbout, fried eggs buried under a mountain of grated cheese, fresh jben, black olives, olive oil and amlou on the side, the Ba Fares platter doesn't do things by halves. Add a glass of fresh orange juice, a generously poured mint tea and a chilled buttermilk, and you'll understand why regulars keep coming back week after week.",
        "The house doesn't stop at traditional breakfast, Ba Fares also serves generously topped pizzas, tuna, olives, peppers, cherry tomatoes, for those looking for a lunch break that changes things up. Another not-to-be-missed appointment is Friday couscous, prepared the traditional way, which draws its regulars and neighborhood families every single week.",
        "As for prices, Ba Fares stays true to its neighborhood roots, breakfast formulas range between 55 and 79 MAD, well within reach given the quality on offer. Takeaway dairy products start at around 30 MAD per pack. Whether you're a local or just passing through, Ba Fares remains a benchmark for anyone looking for a genuine Rbati breakfast, no frills, served in Rabat for nearly seven decades."
      ]
    },
    heroImage: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Fba-fares%2F01-hero-main-petit-dejeuner.jpg?alt=media&token=e14416ee-b815-47ec-bf94-699533c6e0d0",
    heroOverlapImage: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Fba-fares%2F02-hero-overlap-vitrine.jpg?alt=media&token=a82d2d04-19ce-422d-9ea4-ec35adc29d37",
    heroImageCaption: {
      fr: 'Le plateau petit-déjeuner signature de Ba Fares, œufs, jben, msemen et jus frais.',
      ar: 'طبق الفطور المميز لباء فارس، بيض، جبن، مسمن وعصير طازج.',
      en: "Ba Fares' signature breakfast platter, eggs, jben, msemen and fresh juice."
    },
    galleryImages: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Fba-fares%2F03-gallery-pizza.jpg?alt=media&token=ebaaa63a-8aa6-4f80-9fc7-e018e4509c6a",
        caption: {
          fr: "Une des pizzas généreusement garnies de la maison.",
          ar: "إحدى بيتزات المطعم الغنية بالمكونات.",
          en: "One of the house's generously topped pizzas."
        },
        credit: 'Photo : Ba Fares / Ici Rabat'
      }
    ],
    publishedAt: '2026-08-18',
    readTime: {
      fr: '4 min',
      ar: '٤ دقائق',
      en: '4 min'
    },
    location: {
      fr: 'Diour Jamaa, Rabat',
      ar: 'ديور الجامع، الرباط',
      en: 'Diour Jamaa, Rabat'
    },
    author: {
      name: 'Nadia El Fassi',
      role: {
        fr: 'Rédactrice en chef Gastronomie',
        ar: 'رئيسة تحرير قسم المذاق وفنون الطهي',
        en: 'Gastronomy Editor-in-Chief'
      },
      avatar: avatarNadia
    },
    relatedBusinessName: 'Ba Fares',
    relatedBusinessUrl: 'https://bafares.pages.dev',
    businessDetails: {
      name: 'Ba Fares',
      category: {
        fr: 'Crèmerie & Petit-Déjeuner Traditionnel',
        ar: 'كريمري وفطور تقليدي',
        en: 'Dairy House & Traditional Breakfast'
      },
      neighborhood: {
        fr: 'Diour Jamaa',
        ar: 'ديور الجامع',
        en: 'Diour Jamaa'
      },
      address: 'Avenue Al Ghazali, Imm. Frej, Diour Jamaa, Rabat',
      priceLevel: '€',
      openingHours: {
        fr: 'Tlj : 07h30 – 22h00',
        ar: 'يومياً: ٠٧:٠٠ – ٢٢:٠٠',
        en: 'Daily: 7:30 AM – 10:00 PM'
      },
      websiteUrl: 'https://bafares.pages.dev',
      phone: '+212 537 707 370',
      servesCuisine: 'Marocain, Petit-déjeuner, Pizza',
      specialty: {
        fr: 'Plateau petit-déjeuner traditionnel, produits laitiers maison & couscous du vendredi',
        ar: 'طبق الفطور التقليدي، منتجات الألبان المنزلية وكسكس الجمعة',
        en: 'Traditional breakfast platter, house-made dairy & Friday couscous'
      }
    },
    isFeaturedHero: false,
    isEditorialPick: true,
    isPartner: true,
    partnerLabel: {
      fr: 'Partenaire Amplify',
      ar: 'شريك Amplify',
      en: 'Amplify Partner'
    },
    tags: [
      { fr: 'Petit-Déjeuner Rabat', ar: 'فطور الرباط', en: 'Rabat Breakfast' },
      { fr: 'Diour Jamaa', ar: 'ديور الجامع', en: 'Diour Jamaa' },
      { fr: 'Produits Laitiers', ar: 'منتجات الألبان', en: 'Dairy Products' },
      { fr: 'Couscous du Vendredi', ar: 'كسكس الجمعة', en: 'Friday Couscous' }
    ]
  },

{
    id: 'art-07',
    slug: 'indian-flavors-agdal',
    category: 'horeca',
    categoryLabel: {
      fr: 'Cuisine Indienne Authentique',
      ar: 'المطبخ الهندي الأصيل',
      en: 'Authentic Indian Cuisine'
    },
    title: {
      fr: "Indian Flavors : L'Authenticité Indienne au Cœur d'Agdal",
      ar: "إنديان فلافورز : أصالة المطبخ الهندي في قلب حي أكدال",
      en: "Indian Flavors: Authentic Indian Cuisine in the Heart of Agdal"
    },
    subtitle: {
      fr: "Une immersion gustative sans compromis menée par un chef originaire d'Inde, entre tradition tandoori et épices d'exception.",
      ar: "رحلة ذوقية فريدة يقودها شيف هندي محترف، بين تقاليد التندوري العريقة وتناغم التوابل الأصيلة.",
      en: "An uncompromising culinary voyage led by a native chef from India, uniting tandoori mastery and fragrant spices."
    },
    excerpt: {
      fr: "Niché au 29 Jbel El Ayachi à Agdal, Indian Flavors fait l'unanimité avec sa note de 4,8 sur Google : une cuisine indienne fidèle, portée par un chef natif et plébiscitée par la communauté.",
      ar: "يقع مطعم إنديان فلافورز في 29 جبل العياشي بأكدال، محققاً تقييماً استثنائياً 4.8 بفضل أطباقه المتقنة بإشراف شيف هندي وإقبال واسع من عشاق التوابل الأصيلة.",
      en: "Nestled at 29 Jbel El Ayachi in Agdal, Indian Flavors boasts a stellar 4.8 rating on Google: authentic Indian recipes crafted by a native chef."
    },
    pullQuote: {
      text: {
        fr: "« Chez Indian Flavors, la cuisine est confiée à un chef originaire d'Inde, garant d'une fidélité rare aux techniques et aux dosages d'épices traditionnels. »",
        ar: "« في إنديان فلافورز، يُعهد بالمطبخ لشيف هندي متمرس، ليضمن دقة التوابل وتقنيات الطهي التقليدية الأصيلة. »",
        en: "“At Indian Flavors, the kitchen is helmed by a chef from India, guaranteeing a rare faithfulness to traditional spice blends and authentic techniques.”"
      },
      author: {
        fr: "Guide Horeca — Ici Rabat",
        ar: "دليل المذاق — هنا الرباط",
        en: "Horeca Guide — Ici Rabat"
      }
    },
    body: {
      fr: [
        "Derrière chaque grand restaurant indien se cache un chef qui a grandi avec ces saveurs. Chez Indian Flavors, niché au 29 Jbel El Ayachi, en plein cœur d'Agdal, c'est précisément cette authenticité qui fait la différence : la cuisine est confiée à un chef originaire d'Inde, garant d'une fidélité rare aux techniques et aux dosages d'épices traditionnels, loin des versions édulcorées que l'on trouve parfois ailleurs.",
        "Cette exigence se reflète directement dans l'accueil réservé à l'établissement : avec une note de 4,8 sur Google, Indian Flavors s'est hissé parmi les adresses les plus plébiscitées de la capitale pour la cuisine indienne. Un score qui ne trompe pas, et qui témoigne d'une constance rare, service après service.",
        "Mais ce qui distingue véritablement Indian Flavors, c'est son lien profond avec la communauté indienne de Rabat. Bien plus qu'un simple restaurant, l'adresse est devenue un point de repère pour celles et ceux en quête d'un goût de chez eux, un lieu où les expatriés retrouvent des saveurs justes et où les Rbatis curieux découvrent une cuisine dans toute sa vérité.",
        "Pour qui recherche un restaurant indien à Rabat qui ne transige pas sur l'authenticité, Indian Flavors coche toutes les cases. Situé en plein Agdal, l'un des quartiers les plus vivants de la capitale, l'établissement s'est taillé une réputation solide parmi les amateurs de cuisine indienne à Rabat, qu'ils soient expatriés en quête de repères ou Rbatis curieux de découvrir de nouvelles saveurs.",
        "Ouvert tous les jours de 13h à 23h, l'établissement propose également un système de commande directe via WhatsApp, avec une gestion précise des zones de livraison, pour que l'expérience reste fidèle jusque dans votre salon. Que ce soit pour découvrir la cuisine indienne pour la première fois ou retrouver des saveurs familières, Indian Flavors s'impose comme une référence à Rabat.",
        "Que vous cherchiez le meilleur Butter Chicken de Rabat ou simplement une expérience culinaire indienne complète, l'adresse d'Agdal s'impose naturellement dans le paysage gastronomique de la capitale.",
        "Une adresse à découvrir sans attendre, portée par un savoir-faire authentique et une communauté qui ne s'y trompe pas."
      ],
      ar: [
        "وراء كل مطعم هندي متميز يقف شيف تشبع بهذه النكهات منذ الصغر. في مطعم «إنديان فلافورز»، الكائن في 29 شارع جبل العياشي بقلب حي أكدال، تشكل هذه الأصالة جوهر التجربة: المطبخ تحت إشراف شيف هندي، مما يضمن التزاماً حقيقياً بتقنيات الطهي وتوازن التوابل التقليدية بعيداً عن الوصفات المعدلة.",
        "تنعكس هذه الجودة العالية مباشرة في رضا الزوار: مع تقييم 4.8 على جوجل، بات إنديان فلافورز من أكثر العناوين تقديراً وشهرة في العاصمة للمطبخ الهندي، وهو تقييم يبرهن على التميز المستمر والثابت وجبة تلو الأخرى.",
        "لكن ما يميز إنديان فلافورز حقاً هو ارتباطه الوثيق بالجالية الهندية في الرباط. فهو أكثر من مجرد مطعم؛ لقد أصبح وجهة مألوفة لمن يبحثون عن نكهات بلادهم الأصيلة، ومكاناً يلتقي فيه المغتربون بالذوق الموثوق ويكتشف فيه سكان الرباط روائع هذا المطبخ على أصوله.",
        "لكل من يبحث عن مطعم هندي في الرباط لا يساوم على الأصالة، فإن «إنديان فلافورز» يلبي كافة التطلعات. يقع في قلب حي أكدال، أحد أكثر أحياء العاصمة حيوية، وقد بنى لنفسه سمعة راسخة ومكانة رائدة بين عشاق المطبخ الهندي في الرباط، سواء من الجالية الباحثة عن نكهات الوطن أو من سكان الرباط الشغوفين باكتشاف أفضل مطعم هندي في أكدال.",
        "يستقبل المطعم زواره يومياً من الساعة 13:00 حتى 23:00، كما يوفر خدمة الطلب المباشر عبر واتساب مع تغطية دقيقة لمناطق التوصيل، لتستمتعوا بالنكهات الطازجة في منازلكم. وسواء كنتم تخوضون تجربتكم الأولى مع المطبخ الهندي أو تبحثون عن أطباقكم المفضلة، يفرض إنديان فلافورز نفسه كعنوان لا غنى عنه في الرباط.",
        "سواء كنتم تبحثون عن أفضل طبق بتر تشيكن في الرباط أو ترغبون بتجربة طهي متكاملة مع المطبخ الهندي في أكدال، فإن هذا العنوان في قلب العاصمة يفرض نفسه بامتياز في المشهد الغدائي للمدينة.",
        "عنوان يستحق الاستكشاف دون تردد، يقوده شغف حقيقي بالطهي وثقة واسعة من رواده الدائمين."
      ],
      en: [
        "Behind every exceptional Indian restaurant stands a chef steeped in these flavors from childhood. At Indian Flavors, nestled at 29 Jbel El Ayachi in the heart of Agdal, this authenticity makes all the difference: the kitchen is helmed by a native chef from India, ensuring rare fidelity to traditional cooking techniques and meticulous spice balance, far from watered-down adaptations.",
        "This unwavering commitment shows clearly in customer reception: with an outstanding 4.8 rating on Google, Indian Flavors has rapidly established itself as one of the capital’s most beloved destinations for authentic Indian cuisine—a testament to consistent culinary excellence service after service.",
        "Yet what truly sets Indian Flavors apart is its deep bond with Rabat’s Indian diaspora. Far more than just an eatery, it has become a cultural touchstone for those craving a true taste of home, a sanctuary where expats reconnect with genuine flavors and curious locals experience authentic culinary heritage.",
        "For anyone seeking an Indian restaurant in Rabat that never compromises on authenticity, Indian Flavors checks every box. Situated in the heart of Agdal, one of the capital's liveliest districts, the establishment has earned an enviable reputation among lovers of Indian cuisine in Rabat and visitors looking for the quintessential Indian restaurant in Agdal, whether expatriates longing for familiar tastes or curious locals eager to explore authentic culinary treasures.",
        "Open daily from 1:00 PM to 11:00 PM, the restaurant also features a direct WhatsApp ordering service with precise delivery zone management, bringing the vibrant feast right to your dining room. Whether exploring Indian cuisine for the very first time or seeking comfort food, Indian Flavors stands out as a true Rabat benchmark.",
        "Whether you are in search of the best Butter Chicken in Rabat or simply a comprehensive Indian dining journey in Agdal, this address naturally stands out in the capital's rich gastronomic landscape.",
        "A must-visit culinary destination, elevated by genuine craft and a dedicated community of discerning food lovers."
      ]
    },
    heroImage: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Findian-flavors%2F01-hero-main-curries.webp?alt=media&token=c3ee5fff-d4c7-4265-b522-4c0d2883a2fa",
    heroOverlapImage: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Findian-flavors%2F02-hero-overlap-interior.webp?alt=media&token=72948347-a3aa-4a82-a22b-3240d56956f9",
    heroImageCaption: {
      fr: 'Butter Chicken crémeux, assortiment de currys et grillades tandoori servis chez Indian Flavors.',
      ar: 'بتر تشيكن كريمي، تشكيلة الكاري والمشاوي في التندور لدى إنديان فلافورز.',
      en: 'Creamy Butter Chicken, rich curries and sizzling tandoori grill at Indian Flavors.'
    },
    galleryImages: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Findian-flavors%2F03-gallery-naan.webp?alt=media&token=b62cea3f-04f6-4c3a-9c55-1fc61ae28df9",
        caption: {
          fr: 'Naans au beurre et à l’ail tout juste sortis du four tandoor traditionnel.',
          ar: 'خبز النان بالثوم والزبدة طازج ومقرمش من فرن التندور التقليدي.',
          en: 'Freshly baked garlic butter naan straight from the traditional tandoor oven.'
        },
        credit: 'Photo : Indian Flavors / Ici Rabat'
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Findian-flavors%2F04-gallery-facade.webp?alt=media&token=d51b205e-19b9-41ec-a5fa-e04e8da1a5de",
        caption: {
          fr: 'La façade et l’entrée chaleureuse d’Indian Flavors au 29 Rue Jbel El Ayachi à Agdal.',
          ar: 'واجهة ومدخل مطعم إنديان فلافورز في 29 شارع جبل العياشي بحي أكدال.',
          en: 'Welcoming storefront and entrance of Indian Flavors at 29 Rue Jbel El Ayachi, Agdal.'
        },
        credit: 'Photo : Indian Flavors / Ici Rabat'
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Findian-flavors%2F05-gallery-spread-cropped.webp?alt=media&token=619a83cf-3c1a-489f-aa02-1d3b1483afa8",
        caption: {
          fr: 'Festin indien complet : pani puri croustillants, currys en handi de cuivre et chutneys.',
          ar: 'وليمة هندية متكاملة: باني بوري مقرمش، أطباق الكاري في أواني النحاس وصلصات الشاتني.',
          en: 'Complete Indian culinary feast: crisp pani puri, curries in copper handi and chutneys.'
        },
        credit: 'Photo : Indian Flavors / Ici Rabat'
      }
    ],
    publishedAt: '2026-08-16',
    readTime: {
      fr: '5 min',
      ar: '٥ دقائق',
      en: '5 min'
    },
    location: {
      fr: 'Agdal, Rabat',
      ar: 'أكدال، الرباط',
      en: 'Agdal, Rabat'
    },
    author: {
      name: 'Nadia El Fassi',
      role: {
        fr: 'Rédactrice en chef Gastronomie',
        ar: 'رئيسة تحرير قسم المذاق',
        en: 'Gastronomy Editor-in-Chief'
      },
      avatar: avatarNadia
    },
    relatedBusinessName: 'Indian Flavors',
    relatedBusinessUrl: 'https://indianflavor.pages.dev',
    businessDetails: {
      name: 'Indian Flavors',
      category: {
        fr: 'Restaurant Indien Authentique & Tandoor',
        ar: 'مطعم هندي أصيل وتندور',
        en: 'Authentic Indian Restaurant & Tandoori'
      },
      neighborhood: {
        fr: 'Agdal',
        ar: 'أكدال',
        en: 'Agdal'
      },
      address: '29 Rue Jbel El Ayachi, Agdal, 10090 Rabat',
      priceLevel: '€€',
      openingHours: {
        fr: 'Tous les jours : 13h00 – 23h00 (Service continu & Livraison WhatsApp)',
        ar: 'يومياً: ١٣:٠٠ – ٢٣:٠٠ (خدمة مستمرة وتوصيل عبر واتساب)',
        en: 'Daily: 1:00 PM – 11:00 PM (Continuous service & WhatsApp delivery)'
      },
      websiteUrl: 'https://indianflavor.pages.dev',
      instagramUrl: 'https://instagram.com/indianflavors_rabat',
      phone: '+212 5 37 77 00 00',
      whatsapp: '+212 6 00 00 00 00',
      directOrderEnabled: true,
      directOrderUrl: 'https://indianflavor.pages.dev',
      servesCuisine: 'Indian',
      aggregateRating: {
        ratingValue: 4.8,
        reviewCount: 420,
        bestRating: 5.0
      },
      specialty: {
        fr: 'Butter Chicken, Cheese Naan au Tandoor, Biryani Royal & Tikka Masala',
        ar: 'بتر تشيكن، نان بالجبن في التندور، برياني ملكي، وتيكا ماسالا',
        en: 'Butter Chicken, Tandoor Cheese Naan, Royal Biryani & Tikka Masala'
      }
    },
    isFeaturedHero: true,
    isEditorialPick: true,
    isPartner: true,
    partnerLabel: {
      fr: 'Partenaire Amplify',
      ar: 'شريك Amplify',
      en: 'Amplify Partner'
    },
    tags: [
      { fr: 'Cuisine Indienne', ar: 'مطبخ هندي', en: 'Indian Cuisine' },
      { fr: 'Butter Chicken', ar: 'بتر تشيكن', en: 'Butter Chicken' },
      { fr: 'Agdal', ar: 'أكدال', en: 'Agdal' },
      { fr: 'Tandoor', ar: 'تندور', en: 'Tandoor' }
    ]
  },

{
    id: 'doms-cafe-agdal',
    slug: 'doms-cafe-agdal',
    category: 'horeca',
    categoryLabel: {
      fr: 'Café & Restauration Urbaine',
      ar: 'مقهى ومطعم حضري',
      en: 'Café & Urban Dining'
    },
    title: {
      fr: "Dom's Café : Le Repaire où le Billard Rencontre la Bonne Table",
      ar: "دومز كافيه: الملاذ الذي يلتقي فيه البلياردو بالمأكولات الشهية",
      en: "Dom's Café: Where Billiards Meets Good Food"
    },
    subtitle: {
      fr: "Billard, snooker, wifi haut débit et réconfort culinaire au cœur de l'Agdal.",
      ar: "بلياردو، سنوكر، واي فاي عالي السرعة وأطباق شهية في قلب أكدال.",
      en: "Billiards, snooker, high-speed wifi, and comforting dishes in the heart of Agdal."
    },
    metaTitle: {
      fr: "Dom's Café Agdal : Café Wifi & Billard à Rabat | Ici Rabat",
      ar: "دومز كافيه أكدال: مقهى مع واي فاي وبلياردو في الرباط | هنا الرباط",
      en: "Dom's Café Agdal: Wifi Café & Billiards in Rabat | Ici Rabat"
    },
    metaDescription: {
      fr: "Dom's Café à Agdal : café avec wifi rapide idéal pour travailler, tacos et pâtes généreux, billard et snooker. L'adresse à Rabat pour combiner travail et détente.",
      ar: "دومز كافيه في أكدال: مقهى مع واي فاي سريع مثالي للعمل، تاكوس ومعكرونة غنية، بلياردو وسنوكر. العنوان الأمثل في الرباط للجمع بين العمل والاسترخاء.",
      en: "Dom's Café in Agdal: cafe with fast wifi ideal for remote work, generous tacos and pasta, billiards and snooker. The top spot in Rabat to combine work and leisure."
    },
    excerpt: {
      fr: "Il y a des adresses qui ne rentrent dans aucune case, et Dom's Café en fait clairement partie : wifi rapide pour télétravailler, billard entre amis et cuisine généreuse au 26 Rue Jabal El Ayachi.",
      ar: "يتميز دومز كافيه بكونه فضاءً هجيناً فريداً يجمع بين الواي فاي فائق السرعة للعمل، وطاولات البلياردو والسنوكر، وقائمة مأكولات دسمة في قلب أكدال.",
      en: "Dom's Café stands out as a unique hybrid venue in Agdal, combining high-speed wifi for work, billiards and snooker tables, and generous comfort dining."
    },
    body: {
      fr: [
        "Il y a des adresses qui ne rentrent dans aucune case, et Dom's Café, niché au 26 Rue Jabal El Ayachi, en fait clairement partie. Ici, l'ambiance résolument décontractée cohabite avec une cuisine soignée, le tout ponctué du claquement discret des boules de billard sur fond de wifi rapide, une combinaison rare parmi les cafés à Rabat.",
        "Derrière la verrière en résille dorée qui sépare l'espace restauration de la salle de jeux, plusieurs tables de billard et de snooker attendent les habitués. On y vient pour une partie entre amis, on y reste pour l'ambiance feutrée, les banquettes en velours vert et bleu, et les portraits vintage qui donnent au lieu des airs de club anglais revisité. Le genre d'endroit où une partie rapide se transforme facilement en après-midi entière, sans que personne ne s'en plaigne.",
        "Mais Dom's Café, c'est aussi devenu bien plus qu'un simple lieu de détente. De plus en plus de télétravailleurs et de freelances en ont fait leur adresse de prédilection pour travailler à Rabat : le wifi rapide et stable, affiché fièrement à l'entrée, en fait naturellement l'un des meilleurs cafés avec wifi à Agdal, autant qu'un vrai café internet pour ceux qui cherchent à s'installer plusieurs heures sans mauvaise surprise de connexion. On y croise autant de groupes d'amis venus pour une partie de billard que de laptops ouverts en fin de matinée.",
        "Côté cuisine, Dom's Café ne joue pas la carte du minimalisme. Les tacos y sont généreux et bien assaisonnés, pensés pour être partagés entre deux manches de billard, tandis que les pâtes, préparées avec soin, séduisent celles et ceux qui cherchent un repas plus consistant sans sacrifier la convivialité du lieu. Ce n'est pas une cuisine qui cherche à impressionner par la sophistication, elle mise plutôt sur la générosité et le réconfort.",
        "Ce qui distingue vraiment Dom's Café, c'est cette capacité à réunir plusieurs envies sous un même toit : une table correcte, un espace de jeu digne de ce nom, et une connexion fiable pour ceux qui veulent transformer leur pause café en session de travail productive. Ouvert tous les jours sauf le dimanche, dès 7h30 en semaine, l'adresse s'adapte aussi bien aux lève-tôt en quête d'un café pour travailler qu'aux habitués du soir venus suivre un match sur grand écran.",
        "Que vous cherchiez un café avec wifi à Agdal pour enchaîner les réunions en ligne, ou simplement une bonne table entre amis autour d'un billard, Dom's Café a su créer un espace hybride qui ne ressemble à aucun autre à Rabat."
      ],
      ar: [
        "هناك أماكن لا يمكن حصرها في قالب واحد، ومقهى دومز كافيه، الكائن في 26 زنقة جبل العياشي بحي أكدال، ينتمي بالتأكيد إلى هذه الفئة. هنا، تتعايش الأجواء العفوية والمريحة مع مطبخ متقن، تتخللها أصوات ضربات كرات البلياردو الهادئة على وقع شبكة واي فاي فائقة السرعة، وهي توليفة نادرة بين مقاهي الرباط.",
        "خلف الواجهة الزجاجية ذات الشبك الذهبي التي تفصل ركن المطعم عن صالة الألعاب، تنتظر عدة طاولات بلياردو وسنوكر رواد المكان الدائمين. يأتي الزوار لخوض جولة حماسية مع الأصدقاء، ويطيب لهم البقاء بفضل الأجواء الدافئة، والأرائك المخملية الخضراء والزرقاء، والصور الكلاسيكية التي تضفي على المكان طابع النوادي الإنجليزية العريقة بلمسة عصرية.",
        "لكن دومز كافيه أصبح أيضاً أكثر من مجرد مساحة للاسترخاء والترفيه؛ إذ بات وجهة مفضلة للمشتغلين عن بعد وأصحاب العمل الحر الباحثين عن بيئة ملهمة للعمل في الرباط. فالواي فاي السريع والمستقر يجعله واحداً من أفضل المقاهي المزودة بالإنترنت في أكدال، ومكاناً مثالياً لمن يقضي ساعات عمل طويلة دون انقطاع.",
        "أما من جانب المطبخ، فلا مكان للبساطة المفرطة في دومز كافيه؛ أطباق التاكوس غنية ومتبلة بعناية لتشاركها بين شوطي بلياردو، بينما تحظى أطباق المعكرونة المحضرة باهتمام بإعجاب الباحثين عن وجبة مشبعة وشهية. إنه مطبخ يركز على الكرم والأصالة ودفء المذاق.",
        "ما يميز دومز كافيه حقاً هو قدرته الفريدة على تلبية مختلف الرغبات تحت سقف واحد: طاولة طعام ممتازة، وصالة ألعاب احترافية، واتصال إنترنت موثوق لمن يرغب في تحويل استراحة القهوة إلى جلسة عمل منتجة. يفتح المقهى أبوابه يومياً ما عدا الأحد، ابتداءً من الساعة 7:30 صباحاً.",
        "سواء كنتم تبحثون عن مقهى مع واي فاي في أكدال لعقد اجتماعاتكم عبر الإنترنت، أو ببساطة عن جلسة طعام ودية مع الأصدقاء حول طاولة بلياردو، فقد نجح دومز كافيه في ابتكار فضاء هجين لا يشبه أي مكان آخر في العاصمة."
      ],
      en: [
        "There are venues that defy simple categorization, and Dom's Café, nestled at 26 Rue Jabal El Ayachi, is undeniably one of them. Here, a resolutely laid-back ambiance coexists with well-crafted comfort food, punctuated by the rhythmic clack of billiard balls against the backdrop of fast, reliable wifi—a rare blend among Rabat cafés.",
        "Behind the golden lattice glass partition separating the dining area from the gaming room, several billiard and snooker tables await regulars. Guests come for a friendly game and stay for the cozy atmosphere, deep green and blue velvet banquettes, and vintage portraits that give the place the feel of a modernized English club.",
        "Yet Dom's Café has also evolved into much more than a recreational spot. An increasing number of remote workers and freelancers have made it their go-to workstation in Rabat: the fast and stable wifi proudly displayed at the entrance makes it one of the finest wifi-enabled cafés in Agdal, offering hours of seamless productivity without connection hitches.",
        "On the culinary front, Dom's Café opts for generosity over minimalism. The tacos are packed, seasoned to perfection, and designed for sharing between billiard matches, while the carefully prepared pasta satisfies those in search of a hearty meal without losing the friendly warmth of the venue.",
        "What truly sets Dom's Café apart is its effortless ability to unite diverse cravings under one roof: dependable dining, a full-fledged gaming space, and rock-solid connectivity for turning a coffee break into a productive work session. Open every day except Sunday, starting at 7:30 AM on weekdays.",
        "Whether you are looking for a top wifi café in Agdal to attend online meetings or simply a great table with friends around a game of billiards, Dom's Café has crafted a hybrid venue unlike any other in Rabat."
      ]
    },
    heroImage: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Fdoms-cafe%2F01-hero-main-lounge.webp?alt=media&token=963dab85-cdf6-4101-87e1-fddb3de2d384",
    heroOverlapImage: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Fdoms-cafe%2F02-hero-overlap-snooker.webp?alt=media&token=8d730fe2-3cca-41f4-9bea-f13b315a988d",
    heroImageCaption: {
      fr: "L'espace lounge feutré et chaleureux de Dom's Café au 26 Rue Jabal El Ayachi à Agdal.",
      ar: "مساحة اللاونج الدافئة والأنيقة في دومز كافيه بشارع جبل العياشي في أكدال.",
      en: "Warm and cozy lounge area at Dom's Café on 26 Rue Jabal El Ayachi, Agdal."
    },
    galleryImages: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Fdoms-cafe%2F03-gallery-sofa.webp?alt=media&token=506c8a41-6424-4897-8f2e-3c261796ccc8",
        caption: {
          fr: "Banquettes confortables en velours et tables de travail avec prises et wifi rapide.",
          ar: "أرائك مخملية مريحة وطاولات عمل مجهزة بمآخذ كهربائية وواي فاي فائق السرعة.",
          en: "Comfortable velvet seating and workspace tables with power outlets and high-speed wifi."
        },
        credit: "Photo : Dom's Café / Ici Rabat"
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0510279061.firebasestorage.app/o/ici-rabat%2Fdoms-cafe%2F04-gallery-tv-pool.webp?alt=media&token=a241e870-6d7a-4d7f-9a12-6bb703211d82",
        caption: {
          fr: "Espace jeux : tables de billard et snooker professionnelles avec écrans pour les matchs.",
          ar: "فضاء الألعاب: طاولات بلياردو وسنوكر احترافية وشاشات لنقل المباريات الرياضية.",
          en: "Gaming zone: professional billiard and snooker tables with screens for sports matches."
        },
        credit: "Photo : Dom's Café / Ici Rabat"
      }
    ],
    publishedAt: '2026-08-17',
    readTime: {
      fr: '6 min',
      ar: '٦ دقائق',
      en: '6 min'
    },
    location: {
      fr: 'Agdal, Rabat',
      ar: 'أكدال، الرباط',
      en: 'Agdal, Rabat'
    },
    author: {
      name: 'Yassine Benjelloun',
      role: {
        fr: 'Critique Urbain & Art de Vivre',
        ar: 'ناقد حضري وأسلوب حياة',
        en: 'Urban & Lifestyle Critic'
      },
      avatar: avatarYassine
    },
    relatedBusinessName: "Dom's Café",
    relatedBusinessUrl: 'https://domscafe.pages.dev',
    businessDetails: {
      name: "Dom's Café",
      category: {
        fr: 'Café Lounge, Coworking & Club de Billard',
        ar: 'كافيه لاونج، مساحة عمل ونادي بلياردو',
        en: 'Café Lounge, Coworking & Billiards Club'
      },
      neighborhood: {
        fr: 'Agdal',
        ar: 'أكدال',
        en: 'Agdal'
      },
      address: '26 Rue Jabal El Ayachi, Agdal, 10090 Rabat',
      priceLevel: '€€',
      openingHours: {
        fr: 'Lun - Sam : 07h30 – 23h30 (Fermé le dimanche)',
        ar: 'الإثنين - السبت: ٠٧:٣٠ – ٢٣:٣٠ (مغلق يوم الأحد)',
        en: 'Mon - Sat: 7:30 AM – 11:30 PM (Closed on Sunday)'
      },
      websiteUrl: 'https://domscafe.pages.dev',
      servesCuisine: 'Café, Tacos, Pâtes, Snacks',
      aggregateRating: {
        ratingValue: 4.7,
        reviewCount: 280,
        bestRating: 5.0
      },
      specialty: {
        fr: 'Tacos généreux, pâtes maison, wifi rapide & ambiance billard',
        ar: 'تاكوس غني، معكرونة محضرة بعناية، واي فاي سريع وأجواء بلياردو',
        en: 'Generous tacos, homemade pasta, fast wifi & billiards lounge'
      }
    },
    isFeaturedHero: true,
    isEditorialPick: true,
    isPartner: true,
    partnerLabel: {
      fr: 'Partenaire Amplify',
      ar: 'شريك Amplify',
      en: 'Amplify Partner'
    },
    tags: [
      { fr: 'Café Wifi Agdal', ar: 'مقهى واي فاي أكدال', en: 'Wifi Café Agdal' },
      { fr: 'Billard Rabat', ar: 'بلياردو الرباط', en: 'Billiards Rabat' },
      { fr: 'Coworking Café', ar: 'مقهى للعمل', en: 'Coworking Café' },
      { fr: 'Tacos & Pâtes', ar: 'تاكوس ومعكرونة', en: 'Tacos & Pasta' },
      { fr: 'Agdal', ar: 'أكدال', en: 'Agdal' }
    ]
  },
  {
    id: 'art-11',
    slug: 'guide-etudiant-rabat',
    category: 'lifestyle',
    categoryLabel: {
      fr: 'Vie Étudiante',
      ar: 'حياة الطلبة',
      en: 'Student Life'
    },
    title: {
      fr: 'Vivre étudiant à Rabat : universités, quartiers et bons plans vérifiés',
      ar: 'الحياة الطلابية بالرباط: الجامعات، الأحياء ونصائح موثقة',
      en: 'Student Life in Rabat: Universities, Neighborhoods & Verified Tips'
    },
    subtitle: {
      fr: "Le guide pratique pour s'orienter entre Agdal, Souissi et le tramway, sans bons plans inventés.",
      ar: 'دليل عملي للتوجه بين أكدال والسويسي والترامواي، دون نصائح مختلقة.',
      en: 'A practical guide to finding your way between Agdal, Souissi and the tramway, no invented tips.'
    },
    excerpt: {
      fr: 'Où sont les facultés, comment se déplacer, et où manger sans se ruiner : le guide vérifié pour les nouveaux étudiants de Rabat.',
      ar: 'أين تقع الكليات، وكيف تتنقل، وأين تأكل دون إفلاس: الدليل الموثق للطلبة الجدد بالرباط.',
      en: "Where the faculties are, how to get around, and where to eat without breaking the bank: the verified guide for Rabat's new students."
    },
    body: {
      fr: [
        "Chaque rentrée, des milliers d'étudiants découvrent Rabat sans mode d'emploi. Ici Rabat lance donc ce guide Vie Étudiante, pensé comme un manuel pratique plutôt qu'un dépliant touristique : où sont les facultés, comment circuler, où manger sans se ruiner. Une règle simple guide chaque ligne : uniquement des informations vérifiées, jamais un bon plan inventé pour faire joli.",
        "Rabat est une ville universitaire à part entière. L'Université Mohammed V de Rabat (UM5R), née en 2014 de la fusion des anciennes UM5-Agdal et UM5-Souissi, comptait environ 90 688 étudiants lors de l'année 2023-2024. Ses facultés se répartissent en deux pôles principaux : à Agdal, la Faculté des Sciences Juridiques, Économiques et Sociales (FSJES-Agdal), la Faculté des Lettres et des Sciences Humaines et la Faculté des Sciences de l'Éducation ; à Souissi et Madinat Al Irfane, la FSJES-Souissi, la Faculté des Sciences et l'ENSIAS, l'école d'ingénieurs en informatique rattachée à l'UM5R. À cela s'ajoute l'Université Internationale de Rabat (UIR), établissement privé installé à Technopolis Rabat-Shore, sur la rocade Rabat-Salé.",
        "Côté quartiers, Agdal reste le cœur historique de la vie étudiante rbatie : c'est là que se concentrent les facultés les plus anciennes, les cafés et les librairies. Souissi et Madinat Al Irfane forment le pôle universitaire plus récent, à quelques stations de tramway. Le tramway de Rabat-Salé, avec ses deux lignes, 27 km de réseau et 43 stations, relie justement Hay Karima à Salé jusqu'au quartier d'Agdal, en passant par le domaine universitaire de Bab Al Irfane, ce qui en fait le moyen le plus simple de naviguer entre facultés, centre-ville et quartiers résidentiels sans voiture.",
        "Pour manger sans se ruiner, deux adresses déjà testées et vérifiées par notre rédaction restent des valeurs sûres pour un étudiant : Ba Fares, à Diour Jamaa, où les formules petit-déjeuner oscillent entre 55 et 79 MAD ; et Dom's Café, à Agdal, en plein cœur du pôle étudiant, avec son wifi rapide, ses tacos généreux et ses tables ouvertes de 7h30 à 23h30 du lundi au samedi, idéal pour réviser ou enchaîner les visioconférences entre deux cours.",
        "Ce guide est volontairement incomplet pour l'instant : nous préférons publier trois informations vérifiées plutôt que dix approximations. Les prochaines éditions ajouteront progressivement logement, forfaits mobiles et bons plans supplémentaires, au fur et à mesure qu'ils seront confirmés sur le terrain, jamais avant."
      ],
      ar: [
        "في كل موسم دراسي، يكتشف آلاف الطلبة مدينة الرباط دون دليل استخدام. لهذا تطلق Ici Rabat دليل الحياة الطلابية هذا، كدليل عملي وليس كمنشور سياحي: أين تقع الكليات، كيف تتنقل، وأين تأكل دون إفلاس. قاعدة واحدة بسيطة تحكم كل سطر: معلومات موثقة فقط، أبداً نصيحة مختلقة لملء الصفحة.",
        "الرباط مدينة جامعية بامتياز. جامعة محمد الخامس بالرباط (UM5R)، التي وُلدت سنة 2014 من اندماج جامعتي محمد الخامس أكدال والسويسي السابقتين، ضمت نحو 90,688 طالباً خلال الموسم الجامعي 2023-2024. تتوزع كلياتها على قطبين رئيسيين: بأكدال، كلية العلوم القانونية والاقتصادية والاجتماعية، كلية الآداب والعلوم الإنسانية، وكلية علوم التربية؛ وبالسويسي ومدينة العرفان، كلية العلوم القانونية والاقتصادية والاجتماعية بالسويسي، كلية العلوم، ومدرسة الإنسياس (ENSIAS) لهندسة المعلوميات التابعة لجامعة محمد الخامس. تضاف إلى ذلك الجامعة الدولية بالرباط (UIR)، وهي مؤسسة خاصة تقع بتكنوبوليس رباط-شور، على الطريق الدائري بين الرباط وسلا.",
        "أما على مستوى الأحياء، يبقى أكدال القلب التاريخي للحياة الطلابية بالرباط، حيث تتركز أقدم الكليات والمقاهي والمكتبات. ويشكل حي السويسي ومدينة العرفان القطب الجامعي الأحدث، على بعد محطات قليلة بالترامواي. ويربط ترامواي الرباط-سلا، بخطيه الاثنين وشبكته الممتدة على 27 كلم و43 محطة، حي كريمة بسلا بحي أكدال، مروراً بالفضاء الجامعي لباب العرفان، ما يجعله أبسط وسيلة للتنقل بين الكليات ووسط المدينة والأحياء السكنية دون سيارة.",
        "وللأكل دون إفلاس، يبقى عنوانان تم اختبارهما والتحقق منهما من طرف تحريرنا خيارين آمنين للطلبة: باء فارس بحي ديور الجامع، حيث تتراوح أسعار وجبات الفطور بين 55 و79 درهماً؛ ودومز كافيه بأكدال، في قلب القطب الطلابي، بواي فاي سريع وتاكوس سخي وطاولات مفتوحة من 7:30 صباحاً إلى 11:30 مساءً من الإثنين إلى السبت، وهو مكان مثالي للمراجعة أو لمتابعة اجتماعات مرئية متتالية بين الحصص.",
        "هذا الدليل غير مكتمل عمداً في الوقت الراهن، إذ نفضل نشر ثلاث معلومات موثقة على عشر معلومات تقريبية. ستضيف الإصدارات القادمة تدريجياً معلومات عن السكن والباقات الهاتفية ونصائح إضافية، فور التحقق منها ميدانياً، وليس قبل ذلك."
      ],
      en: [
        "Every new academic year, thousands of students discover Rabat with no instruction manual. Ici Rabat is launching this Student Life guide as a practical handbook rather than a tourist brochure: where the faculties are, how to get around, where to eat without breaking the bank. One simple rule governs every line: only verified information, never an invented tip to pad out the page.",
        "Rabat is a genuine university city. Université Mohammed V de Rabat (UM5R), born in 2014 from the merger of the former UM5-Agdal and UM5-Souissi, counted roughly 90,688 students in the 2023-2024 academic year. Its faculties cluster around two main hubs: in Agdal, the Faculty of Legal, Economic and Social Sciences (FSJES-Agdal), the Faculty of Letters and Human Sciences, and the Faculty of Education Sciences; in Souissi and Madinat Al Irfane, FSJES-Souissi, the Faculty of Sciences, and ENSIAS, the computer-science engineering school attached to UM5R. On top of that sits Université Internationale de Rabat (UIR), a private university based at Technopolis Rabat-Shore, on the Rabat-Salé ring road.",
        "As for neighborhoods, Agdal remains the historic heart of student life in Rabat, home to the oldest faculties, the cafés, and the bookshops. Souissi and Madinat Al Irfane form the newer university hub, a few tram stops away. The Rabat-Salé tramway, with its two lines, 27 km of track and 43 stations, links Hay Karima in Salé all the way to Agdal, passing through the Bab Al Irfane university district, making it the simplest way to move between faculties, downtown, and residential neighborhoods without a car.",
        "For eating without breaking the bank, two addresses already tested and verified by our editorial team remain safe bets for students: Ba Fares, in Diour Jamaa, where breakfast formulas run between 55 and 79 MAD; and Dom's Café, in Agdal, right in the middle of the student hub, with fast wifi, generous tacos, and tables open from 7:30 AM to 11:30 PM Monday to Saturday, ideal for studying or stacking video calls between classes.",
        "This guide is deliberately incomplete for now, we'd rather publish three verified facts than ten approximations. Future editions will progressively add housing, mobile plans, and further tips, only once they've been confirmed on the ground, never before."
      ]
    },
    heroImage: '/banners/banner_lifestyle.jpg',
    heroImageCaption: {
      fr: "Le pôle universitaire d'Agdal, entre facultés, cafés et vie de quartier.",
      ar: 'قطب أكدال الجامعي، بين الكليات والمقاهي وحياة الحي.',
      en: 'The Agdal university hub, where faculties, cafés and neighborhood life meet.'
    },
    galleryImages: [],
    publishedAt: '2026-08-22',
    readTime: {
      fr: '5 min',
      ar: '٥ دقائق',
      en: '5 min'
    },
    location: {
      fr: 'Agdal & Souissi, Rabat',
      ar: 'أكدال والسويسي، الرباط',
      en: 'Agdal & Souissi, Rabat'
    },
    author: {
      name: 'Yassine Benjelloun',
      role: {
        fr: 'Critique Urbain & Art de Vivre',
        ar: 'ناقد حضري وأسلوب حياة',
        en: 'Urban & Lifestyle Critic'
      },
      avatar: avatarYassine
    },
    isFeaturedHero: false,
    isEditorialPick: true,
    tags: [
      { fr: 'Vie Étudiante', ar: 'حياة الطلبة', en: 'Student Life' },
      { fr: 'Agdal', ar: 'أكدال', en: 'Agdal' },
      { fr: 'Université Mohammed V', ar: 'جامعة محمد الخامس', en: 'Université Mohammed V' },
      { fr: 'Tramway Rabat-Salé', ar: 'ترامواي الرباط-سلا', en: 'Rabat-Salé Tramway' }
    ]
  },
  {
    id: 'art-12',
    slug: 'panda-to-go-hay-riad',
    category: 'horeca',
    categoryLabel: {
      fr: 'Cuisine Asiatique & Sushi',
      ar: 'المطبخ الآسيوي والسوشي',
      en: 'Asian Cuisine & Sushi'
    },
    title: {
      fr: 'Panda To Go : sushi et wok à Hay Riad, commande directe sans détour',
      ar: 'باندا تو غو: سوشي وووك بحي الرياض، اطلب مباشرة دون وسيط',
      en: 'Panda To Go: Sushi & Wok in Hay Riad, Order Direct'
    },
    excerpt: {
      fr: "Sushi, maki et plats au wok avenue Annakhil, à Hay Riad. Panda To Go prend ses commandes via son propre site, pandatogo.ma, en plus de sa présence sur les applis tierces.",
      ar: 'سوشي وماكي وأطباق ووك في شارع النخيل بحي الرياض. تستقبل باندا تو غو طلباتها عبر موقعها الخاص pandatogo.ma، إلى جانب حضورها على التطبيقات الوسيطة.',
      en: "Sushi, maki and wok dishes on Avenue Annakhil in Hay Riad. Panda To Go takes orders through its own site, pandatogo.ma, alongside its presence on third-party apps."
    },
    body: {
      fr: [
        "Sur l'avenue Annakhil, à Hay Riad, Panda To Go propose une carte asiatique construite autour du sushi, des makis et des plats au wok. La maison s'est équipée d'un système de commande en ligne qui lui est propre, accessible sur pandatogo.ma, ainsi que d'une application dédiée.",
        "Contrairement à une adresse qui ne serait joignable que via une appli de livraison tierce, Panda To Go permet ici de composer et de valider sa commande directement chez eux, avant une livraison ou un retrait sur place à Hay Riad."
      ],
      ar: [
        "في شارع النخيل بحي الرياض، تقدم باندا تو غو قائمة آسيوية مبنية على السوشي والماكي وأطباق الووك. زودت المؤسسة نفسها بنظام طلب خاص بها، متاح عبر pandatogo.ma، إضافة إلى تطبيق مخصص.",
        "على عكس عنوان لا يمكن الوصول إليه إلا عبر تطبيق توصيل خارجي، تتيح باندا تو غو هنا تركيب وتأكيد الطلب مباشرة لديها، قبل التوصيل أو الاستلام من المحل بحي الرياض."
      ],
      en: [
        "On Avenue Annakhil in Hay Riad, Panda To Go serves an Asian menu built around sushi, maki and wok dishes. The restaurant runs its own ordering system at pandatogo.ma, alongside a dedicated app.",
        "Unlike an address only reachable through a third-party delivery app, Panda To Go lets customers build and confirm an order directly with them, ahead of delivery or pickup in Hay Riad."
      ]
    },
    heroImage: '/commander/panda-to-go.webp',
    heroImageCaption: {
      fr: 'Illustration éditoriale — plateau de sushi et wok fumant au comptoir.',
      ar: 'رسم توضيحي تحريري — طبق سوشي وووك متصاعد الدخان على الطاولة.',
      en: 'Editorial illustration — a sushi platter and a smoking wok at the counter.'
    },
    galleryImages: [],
    publishedAt: '2026-08-22',
    readTime: {
      fr: '2 min',
      ar: 'دقيقتان',
      en: '2 min'
    },
    location: {
      fr: 'Hay Riad, Rabat',
      ar: 'حي الرياض، الرباط',
      en: 'Hay Riad, Rabat'
    },
    author: {
      name: 'Yassine Benjelloun',
      role: {
        fr: 'Critique Urbain & Art de Vivre',
        ar: 'ناقد حضري وأسلوب حياة',
        en: 'Urban & Lifestyle Critic'
      },
      avatar: avatarYassine
    },
    relatedBusinessName: 'Panda To Go',
    relatedBusinessUrl: 'https://pandatogo.ma',
    businessDetails: {
      name: 'Panda To Go',
      category: {
        fr: 'Sushi & Wok Asiatique',
        ar: 'سوشي وووك آسيوي',
        en: 'Asian Sushi & Wok'
      },
      neighborhood: {
        fr: 'Hay Riad',
        ar: 'حي الرياض',
        en: 'Hay Riad'
      },
      address: 'Avenue Annakhil, Hay Riad, Rabat',
      priceLevel: '€€',
      openingHours: {
        fr: 'Commande en ligne via pandatogo.ma',
        ar: 'الطلب عبر الموقع pandatogo.ma',
        en: 'Order online via pandatogo.ma'
      },
      websiteUrl: 'https://pandatogo.ma',
      servesCuisine: 'Asian',
      directOrderEnabled: true,
      directOrderUrl: 'https://pandatogo.ma',
      specialty: {
        fr: 'Sushi, maki et plats au wok',
        ar: 'سوشي، ماكي وأطباق ووك',
        en: 'Sushi, maki and wok dishes'
      }
    },
    tags: [
      { fr: 'Sushi', ar: 'سوشي', en: 'Sushi' },
      { fr: 'Hay Riad', ar: 'حي الرياض', en: 'Hay Riad' },
      { fr: 'Commande directe', ar: 'طلب مباشر', en: 'Direct Order' }
    ]
  },
  {
    id: 'art-13',
    slug: 'instafood-souissi',
    category: 'horeca',
    categoryLabel: {
      fr: 'Fast-Food Gourmet',
      ar: 'وجبات سريعة راقية',
      en: 'Gourmet Fast Food'
    },
    title: {
      fr: 'Instafood : tacos français et burgers gourmets à Souissi',
      ar: 'إنستافود: تاكوس فرنسي وبرغر راقي بالسويسي',
      en: 'Instafood: French Tacos & Gourmet Burgers in Souissi'
    },
    excerpt: {
      fr: "Installé au Centre Commercial Al Mougar à Souissi depuis 2016, Instafood sert tacos français, burgers gourmets et Tasty Crousty, avec commande directe sur instafoodma.com.",
      ar: 'يقع إنستافود بالمركز التجاري المغار بالسويسي منذ 2016، ويقدم التاكوس الفرنسي والبرغر الراقي وتايستي كروستي، مع إمكانية الطلب المباشر عبر instafoodma.com.',
      en: "Based at Centre Commercial Al Mougar in Souissi since 2016, Instafood serves French tacos, gourmet burgers and Tasty Crousty, with direct ordering at instafoodma.com."
    },
    body: {
      fr: [
        "Au deuxième étage du Centre Commercial Al Mougar, avenue Mehdi Ben Barka à Souissi, Instafood s'est fait une place depuis 2016 sur le créneau du fast-food gourmet : tacos français, burgers, Tasty Crousty et pâtes crémeuses préparés à la commande.",
        "La maison gère sa propre commande en ligne sur instafoodma.com, en parallèle de sa présence sur Glovo, Yassir, Done et Kooul — de quoi commander en direct pour qui préfère éviter la commission d'une appli tierce."
      ],
      ar: [
        "في الطابق الثاني من المركز التجاري المغار، بشارع المهدي بن بركة بالسويسي، شقّ إنستافود طريقه منذ 2016 في مجال الوجبات السريعة الراقية: تاكوس فرنسي، برغر، تايستي كروستي، وباستا كريمية تُحضّر عند الطلب.",
        "تدير المؤسسة نظام طلب خاص بها عبر instafoodma.com، إلى جانب حضورها على Glovo وYassir وDone وKooul — خيار للطلب المباشر لمن يفضل تجنب عمولة التطبيقات الوسيطة."
      ],
      en: [
        "On the second floor of Centre Commercial Al Mougar, avenue Mehdi Ben Barka in Souissi, Instafood has carved out a spot since 2016 in the gourmet fast-food space: French tacos, burgers, Tasty Crousty and creamy pasta made to order.",
        "The restaurant runs its own online ordering at instafoodma.com, alongside its presence on Glovo, Yassir, Done and Kooul — a direct option for anyone who'd rather skip a third-party app's commission."
      ]
    },
    heroImage: '/commander/instafood.webp',
    heroImageCaption: {
      fr: 'Illustration éditoriale — tacos français et burger gourmet au comptoir.',
      ar: 'رسم توضيحي تحريري — تاكوس فرنسي وبرغر راقي على الطاولة.',
      en: 'Editorial illustration — French tacos and a gourmet burger at the counter.'
    },
    galleryImages: [],
    publishedAt: '2026-08-22',
    readTime: {
      fr: '2 min',
      ar: 'دقيقتان',
      en: '2 min'
    },
    location: {
      fr: 'Souissi, Rabat',
      ar: 'السويسي، الرباط',
      en: 'Souissi, Rabat'
    },
    author: {
      name: 'Nadia El Fassi',
      role: {
        fr: 'Rédactrice en chef Gastronomie',
        ar: 'رئيسة تحرير قسم المذاق',
        en: 'Gastronomy Editor-in-Chief'
      },
      avatar: avatarNadia
    },
    relatedBusinessName: 'Instafood Rabat',
    relatedBusinessUrl: 'https://instafoodma.com',
    businessDetails: {
      name: 'Instafood Rabat',
      category: {
        fr: 'Tacos Français & Burgers Gourmets',
        ar: 'تاكوس فرنسي وبرغر راقي',
        en: 'French Tacos & Gourmet Burgers'
      },
      neighborhood: {
        fr: 'Souissi',
        ar: 'السويسي',
        en: 'Souissi'
      },
      address: 'Centre Commercial Al Mougar, 2e étage, 90 Avenue Mehdi Ben Barka, Souissi, Rabat',
      priceLevel: '€€',
      openingHours: {
        fr: 'Commande en ligne via instafoodma.com',
        ar: 'الطلب عبر الموقع instafoodma.com',
        en: 'Order online via instafoodma.com'
      },
      websiteUrl: 'https://instafoodma.com',
      servesCuisine: 'French Tacos & Burgers',
      directOrderEnabled: true,
      directOrderUrl: 'https://instafoodma.com',
      specialty: {
        fr: 'Tacos français, burgers gourmets et Tasty Crousty',
        ar: 'تاكوس فرنسي، برغر راقي وتايستي كروستي',
        en: 'French tacos, gourmet burgers and Tasty Crousty'
      }
    },
    tags: [
      { fr: 'Tacos', ar: 'تاكوس', en: 'Tacos' },
      { fr: 'Souissi', ar: 'السويسي', en: 'Souissi' },
      { fr: 'Commande directe', ar: 'طلب مباشر', en: 'Direct Order' }
    ]
  },
  {
    id: 'art-14',
    slug: 'yoka-sushi-agdal',
    category: 'horeca',
    categoryLabel: {
      fr: 'Cuisine Japonaise',
      ar: 'المطبخ الياباني',
      en: 'Japanese Cuisine'
    },
    title: {
      fr: 'Yoka Sushi : la table japonaise de référence à Agdal depuis 2010',
      ar: 'يوكا سوشي: العنوان الياباني المرجعي بأكدال منذ 2010',
      en: 'Yoka Sushi: The Reference Japanese Table in Agdal Since 2010'
    },
    excerpt: {
      fr: "Repère japonais au Maroc depuis 2010, Yoka Sushi est présent à Agdal et prend ses commandes sur sa propre plateforme, commander.yokasushi.com, en plus de son application.",
      ar: 'علامة يابانية راسخة بالمغرب منذ 2010، يوكا سوشي حاضر بأكدال ويستقبل طلباته عبر منصته الخاصة commander.yokasushi.com، إلى جانب تطبيقه.',
      en: "A Japanese landmark in Morocco since 2010, Yoka Sushi is present in Agdal and takes orders on its own platform, commander.yokasushi.com, alongside its app."
    },
    body: {
      fr: [
        "Groupe japonais installé au Maroc depuis 2010, Yoka Sushi tient une adresse à Agdal et livre plus largement Rabat, Témara et Kénitra. La carte s'organise autour des sushis, makis et plats chauds japonais, préparés midi et soir tous les jours jusqu'à 23h.",
        "Plutôt que de dépendre uniquement d'une appli tierce, la maison a développé sa propre plateforme de commande, commander.yokasushi.com, ainsi qu'une application mobile — de quoi commander en direct, sans intermédiaire."
      ],
      ar: [
        "مجموعة يابانية حاضرة بالمغرب منذ 2010، يمتلك يوكا سوشي عنواناً بأكدال ويوصل طلباته إلى الرباط وتمارة والقنيطرة. تتمحور القائمة حول السوشي والماكي والأطباق اليابانية الساخنة، تُحضّر ظهراً ومساءً يومياً حتى الساعة 23:00.",
        "بدل الاعتماد فقط على تطبيق وسيط، طوّرت المؤسسة منصة طلب خاصة بها، commander.yokasushi.com، إضافة إلى تطبيق للهاتف — خيار للطلب المباشر دون وسيط."
      ],
      en: [
        "A Japanese group established in Morocco since 2010, Yoka Sushi runs a location in Agdal and delivers more broadly across Rabat, Témara and Kénitra. The menu centers on sushi, maki and hot Japanese dishes, served daily at lunch and dinner until 11 PM.",
        "Rather than relying solely on a third-party app, the restaurant built its own ordering platform, commander.yokasushi.com, plus a mobile app — a direct route to order with no middleman."
      ]
    },
    heroImage: '/commander/yoka-sushi.webp',
    heroImageCaption: {
      fr: 'Illustration éditoriale — découpe de sashimi et plateau-bateau en salle.',
      ar: 'رسم توضيحي تحريري — تقطيع السشيمي وطبق القارب بالصالة.',
      en: 'Editorial illustration — sashimi being sliced and a boat platter in the dining room.'
    },
    galleryImages: [],
    publishedAt: '2026-08-22',
    readTime: {
      fr: '2 min',
      ar: 'دقيقتان',
      en: '2 min'
    },
    location: {
      fr: 'Agdal, Rabat',
      ar: 'أكدال، الرباط',
      en: 'Agdal, Rabat'
    },
    author: {
      name: 'Yassine Benjelloun',
      role: {
        fr: 'Critique Urbain & Art de Vivre',
        ar: 'ناقد حضري وأسلوب حياة',
        en: 'Urban & Lifestyle Critic'
      },
      avatar: avatarYassine
    },
    relatedBusinessName: 'Yoka Sushi',
    relatedBusinessUrl: 'https://yokasushi.com',
    businessDetails: {
      name: 'Yoka Sushi',
      category: {
        fr: 'Restaurant Japonais',
        ar: 'مطعم ياباني',
        en: 'Japanese Restaurant'
      },
      neighborhood: {
        fr: 'Agdal',
        ar: 'أكدال',
        en: 'Agdal'
      },
      address: 'Agdal, Rabat',
      priceLevel: '€€',
      openingHours: {
        fr: 'Tous les jours, de midi à 23h (commande sur commander.yokasushi.com)',
        ar: 'يومياً من الظهر حتى 23:00 (الطلب عبر commander.yokasushi.com)',
        en: 'Daily, noon to 11 PM (order via commander.yokasushi.com)'
      },
      websiteUrl: 'https://yokasushi.com',
      servesCuisine: 'Japanese',
      directOrderEnabled: true,
      directOrderUrl: 'https://commander.yokasushi.com',
      specialty: {
        fr: 'Sushi, maki et plats chauds japonais',
        ar: 'سوشي، ماكي وأطباق يابانية ساخنة',
        en: 'Sushi, maki and hot Japanese dishes'
      }
    },
    tags: [
      { fr: 'Japonais', ar: 'ياباني', en: 'Japanese' },
      { fr: 'Agdal', ar: 'أكدال', en: 'Agdal' },
      { fr: 'Commande directe', ar: 'طلب مباشر', en: 'Direct Order' }
    ]
  },
  {
    id: 'art-15',
    slug: 'greenchili-mahaj-riad',
    category: 'horeca',
    categoryLabel: {
      fr: 'Burgers Faits Maison',
      ar: 'برغر منزلي الصنع',
      en: 'Homemade Burgers'
    },
    title: {
      fr: 'GreenChili : burgers faits maison à Mahaj Riad',
      ar: 'غرين تشيلي: برغر منزلي الصنع بمحج الرياض',
      en: 'GreenChili: Homemade Burgers in Mahaj Riad'
    },
    excerpt: {
      fr: "À Mahaj Riad, GreenChili prépare des burgers faits maison et des plats végétariens, avec une commande en ligne dédiée sur order.greenchili.ma.",
      ar: 'بمحج الرياض، يُحضّر غرين تشيلي برغر منزلي الصنع وأطباقاً نباتية، مع نظام طلب مخصص عبر order.greenchili.ma.',
      en: "In Mahaj Riad, GreenChili makes homemade burgers and vegetarian dishes, with dedicated online ordering at order.greenchili.ma."
    },
    body: {
      fr: [
        "GreenChili tient adresse à Mahaj Riad autour d'une promesse simple : du fait maison, burgers en tête, avec une place assumée pour les options végétariennes sur la carte.",
        "La maison a mis en place une commande en ligne dédiée, order.greenchili.ma, distincte de son site vitrine — un système propre pour livrer directement depuis Mahaj Riad, sans passer par une plateforme tierce."
      ],
      ar: [
        "يتواجد غرين تشيلي بمحج الرياض حول وعد بسيط: طعام منزلي الصنع، وعلى رأسه البرغر، مع حضور واضح للخيارات النباتية في القائمة.",
        "أنشأت المؤسسة نظام طلب خاص عبر order.greenchili.ma، منفصلاً عن موقعها التعريفي — نظام خاص للتوصيل مباشرة من محج الرياض، دون المرور عبر منصة وسيطة."
      ],
      en: [
        "GreenChili holds down an address in Mahaj Riad built on a simple promise: homemade food, burgers first, with a real place for vegetarian options on the menu.",
        "The restaurant set up dedicated online ordering at order.greenchili.ma, separate from its showcase site — its own system for delivering straight from Mahaj Riad, without going through a third-party platform."
      ]
    },
    heroImage: '/commander/greenchili.webp',
    heroImageCaption: {
      fr: 'Illustration éditoriale — montage d’un burger fait maison, bol végétarien en salle.',
      ar: 'رسم توضيحي تحريري — تركيب برغر منزلي وطبق نباتي بجانبه.',
      en: 'Editorial illustration — a homemade burger being assembled next to a vegetarian bowl.'
    },
    galleryImages: [],
    publishedAt: '2026-08-22',
    readTime: {
      fr: '2 min',
      ar: 'دقيقتان',
      en: '2 min'
    },
    location: {
      fr: 'Mahaj Riad, Rabat',
      ar: 'محج الرياض، الرباط',
      en: 'Mahaj Riad, Rabat'
    },
    author: {
      name: 'Nadia El Fassi',
      role: {
        fr: 'Rédactrice en chef Gastronomie',
        ar: 'رئيسة تحرير قسم المذاق',
        en: 'Gastronomy Editor-in-Chief'
      },
      avatar: avatarNadia
    },
    relatedBusinessName: 'GreenChili',
    relatedBusinessUrl: 'https://www.greenchili.ma',
    businessDetails: {
      name: 'GreenChili',
      category: {
        fr: 'Burgers Faits Maison & Végétarien',
        ar: 'برغر منزلي ومطبخ نباتي',
        en: 'Homemade Burgers & Vegetarian'
      },
      neighborhood: {
        fr: 'Mahaj Riad',
        ar: 'محج الرياض',
        en: 'Mahaj Riad'
      },
      address: 'Mahaj Riad, Rabat',
      priceLevel: '€€',
      openingHours: {
        fr: 'Commande en ligne via order.greenchili.ma',
        ar: 'الطلب عبر order.greenchili.ma',
        en: 'Order online via order.greenchili.ma'
      },
      websiteUrl: 'https://www.greenchili.ma',
      servesCuisine: 'Burgers & Vegetarian',
      directOrderEnabled: true,
      directOrderUrl: 'https://order.greenchili.ma',
      specialty: {
        fr: 'Burgers faits maison et plats végétariens',
        ar: 'برغر منزلي وأطباق نباتية',
        en: 'Homemade burgers and vegetarian dishes'
      }
    },
    tags: [
      { fr: 'Burgers', ar: 'برغر', en: 'Burgers' },
      { fr: 'Mahaj Riad', ar: 'محج الرياض', en: 'Mahaj Riad' },
      { fr: 'Commande directe', ar: 'طلب مباشر', en: 'Direct Order' }
    ]
  },
  {
    id: 'art-16',
    slug: 'primos-chicken-agdal',
    category: 'horeca',
    categoryLabel: {
      fr: 'Poulet & Fast-Food',
      ar: 'دجاج ووجبات سريعة',
      en: 'Chicken & Fast Food'
    },
    title: {
      fr: 'Primos Chicken : poulet, tacos et burgers, commande WhatsApp par quartier',
      ar: 'بريموس تشيكن: دجاج وتاكوس وبرغر، الطلب عبر واتساب حسب الحي',
      en: 'Primos Chicken: Chicken, Tacos & Burgers, WhatsApp Order by Neighborhood'
    },
    excerpt: {
      fr: "Poulet, bocas, tacos et burgers : Primos Chicken tient plusieurs adresses à Rabat (Agdal, Rabat Ville, L'Océan) et prend ses commandes directement sur WhatsApp, quartier par quartier.",
      ar: 'دجاج وبوكاس وتاكوس وبرغر: يتوفر بريموس تشيكن على عدة عناوين بالرباط (أكدال، الرباط المدينة، المحيط) ويستقبل طلباته مباشرة عبر واتساب حسب كل حي.',
      en: "Chicken, bocas, tacos and burgers: Primos Chicken runs several Rabat locations (Agdal, Rabat Ville, L'Océan) and takes orders directly on WhatsApp, neighborhood by neighborhood."
    },
    body: {
      fr: [
        "Primos Chicken décline sa carte, poulet, bocas, tacos, paninis et burgers, sur plusieurs adresses à Rabat, dont Agdal, Rabat Ville et L'Océan, ainsi qu'à Salé, Témara et Kénitra.",
        "Chaque point de vente affiche son propre bouton « Commander sur WhatsApp » sur le site de l'enseigne, primoschicken.com — une commande directe, quartier par quartier, sans dépendre d'une appli tierce."
      ],
      ar: [
        "يوزع بريموس تشيكن قائمته، دجاج وبوكاس وتاكوس وبانيني وبرغر، على عدة عناوين بالرباط منها أكدال والرباط المدينة والمحيط، إضافة إلى سلا وتمارة والقنيطرة.",
        "تعرض كل نقطة بيع زر «الطلب عبر واتساب» الخاص بها على موقع العلامة، primoschicken.com — طلب مباشر حسب كل حي، دون الاعتماد على تطبيق وسيط."
      ],
      en: [
        "Primos Chicken spreads its menu, chicken, bocas, tacos, paninis and burgers, across several Rabat locations including Agdal, Rabat Ville and L'Océan, plus Salé, Témara and Kénitra.",
        "Each outlet displays its own \"Order on WhatsApp\" button on the brand's site, primoschicken.com — a direct order, neighborhood by neighborhood, with no third-party app in between."
      ]
    },
    heroImage: '/commander/primos-chicken.webp',
    heroImageCaption: {
      fr: 'Illustration éditoriale — plateau de poulet frit, burger et tacos au comptoir.',
      ar: 'رسم توضيحي تحريري — طبق دجاج مقلي وبرغر وتاكوس على الطاولة.',
      en: 'Editorial illustration — a tray of fried chicken, a burger and a tacos at the counter.'
    },
    galleryImages: [],
    publishedAt: '2026-08-22',
    readTime: {
      fr: '2 min',
      ar: 'دقيقتان',
      en: '2 min'
    },
    location: {
      fr: 'Agdal, Rabat',
      ar: 'أكدال، الرباط',
      en: 'Agdal, Rabat'
    },
    author: {
      name: 'Yassine Benjelloun',
      role: {
        fr: 'Critique Urbain & Art de Vivre',
        ar: 'ناقد حضري وأسلوب حياة',
        en: 'Urban & Lifestyle Critic'
      },
      avatar: avatarYassine
    },
    relatedBusinessName: 'Primos Chicken',
    relatedBusinessUrl: 'https://primoschicken.com',
    businessDetails: {
      name: 'Primos Chicken',
      category: {
        fr: 'Poulet, Tacos & Burgers',
        ar: 'دجاج، تاكوس وبرغر',
        en: 'Chicken, Tacos & Burgers'
      },
      neighborhood: {
        fr: 'Agdal',
        ar: 'أكدال',
        en: 'Agdal'
      },
      address: 'Agdal, Rabat (plusieurs adresses : Rabat Ville, L\'Océan, Salé, Témara, Kénitra)',
      priceLevel: '€',
      openingHours: {
        fr: 'Commande directe sur WhatsApp, par quartier — voir primoschicken.com/notre-menu',
        ar: 'الطلب مباشرة عبر واتساب حسب الحي — راجع primoschicken.com/notre-menu',
        en: 'Direct WhatsApp order by neighborhood — see primoschicken.com/notre-menu'
      },
      websiteUrl: 'https://primoschicken.com/notre-menu',
      servesCuisine: 'Chicken & Fast Food',
      directOrderEnabled: true,
      directOrderUrl: 'https://primoschicken.com/notre-menu',
      specialty: {
        fr: 'Poulet, bocas, tacos, paninis et burgers',
        ar: 'دجاج، بوكاس، تاكوس، بانيني وبرغر',
        en: 'Chicken, bocas, tacos, paninis and burgers'
      }
    },
    tags: [
      { fr: 'Poulet', ar: 'دجاج', en: 'Chicken' },
      { fr: 'Agdal', ar: 'أكدال', en: 'Agdal' },
      { fr: 'Commande WhatsApp', ar: 'طلب عبر واتساب', en: 'WhatsApp Order' }
    ]
  }
];

export const UPCOMING_SECTIONS = {
  evenements: {
    title: {
      fr: 'Événements & Agenda Culturel',
      ar: 'الأجندة الثقافية والفعاليات',
      en: 'Cultural Agenda & Events'
    },
    subtitle: {
      fr: 'Festivals d’exception, vernissages au Musée Mohammed VI et concerts intimes au Chellah.',
      ar: 'مهرجانات دولية، معارض بمتحف محمد السادس للفن المعاصر، وأمسيات موسيقية بموقع شالة الأثري.',
      en: 'Flagship festivals, exhibition openings at the Mohammed VI Modern Art Museum, and concerts at Chellah.'
    }
  },
  lifestyle: {
    title: {
      fr: 'Lifestyle & Design Rbati',
      ar: 'أسلوب الحياة والتصميم الرباطي',
      en: 'Lifestyle & Rabat Design'
    },
    subtitle: {
      fr: 'Boutiques de créateurs, ateliers de poterie à Salé, artisanat d’avant-garde et maisons d’hôtes confidentielles.',
      ar: 'أروقة المصممين المبدعين، ورشات الفخار بسلا، وحرف يدوية مبتكرة ودور ضيافة ساحرة.',
      en: 'Designer boutiques, ceramic master workshops in Salé, avant-garde crafts, and discreet boutique riads.'
    }
  }
};
