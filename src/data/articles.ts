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
    tags: [
      { fr: 'Petit-Déjeuner Rabat', ar: 'فطور الرباط', en: 'Rabat Breakfast' },
      { fr: 'Diour Jamaa', ar: 'ديور الجامع', en: 'Diour Jamaa' },
      { fr: 'Produits Laitiers', ar: 'منتجات الألبان', en: 'Dairy Products' },
      { fr: 'Couscous du Vendredi', ar: 'كسكس الجمعة', en: 'Friday Couscous' }
    ],
    relatedSlugs: ['guide-etudiant-rabat', 'guide-etudiant-rabat-logement-forfaits', 'doms-cafe-agdal']
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
    tags: [
      { fr: 'Café Wifi Agdal', ar: 'مقهى واي فاي أكدال', en: 'Wifi Café Agdal' },
      { fr: 'Billard Rabat', ar: 'بلياردو الرباط', en: 'Billiards Rabat' },
      { fr: 'Coworking Café', ar: 'مقهى للعمل', en: 'Coworking Café' },
      { fr: 'Tacos & Pâtes', ar: 'تاكوس ومعكرونة', en: 'Tacos & Pasta' },
      { fr: 'Agdal', ar: 'أكدال', en: 'Agdal' }
    ],
    relatedSlugs: ['guide-etudiant-rabat', 'guide-etudiant-rabat-logement-forfaits', 'ba-fares-diour-jamaa']
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
    heroImage: '/banners/banner_lifestyle_guide.jpg',
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
    ],
    relatedSlugs: ['guide-etudiant-rabat-logement-forfaits', 'transport-rabat-etudiant-tramway-taxi', 'ba-fares-diour-jamaa'],
    faq: [
      {
        question: {
          fr: "Combien d'étudiants compte l'Université Mohammed V de Rabat ?",
          ar: 'كم عدد طلبة جامعة محمد الخامس بالرباط؟',
          en: 'How many students does Université Mohammed V de Rabat have?'
        },
        answer: {
          fr: "Environ 90 688 étudiants durant l'année 2023-2024, répartis entre le pôle d'Agdal (FSJES, Lettres, Sciences de l'Éducation) et celui de Souissi/Madinat Al Irfane (FSJES-Souissi, Sciences, ENSIAS).",
          ar: 'نحو 90,688 طالباً خلال الموسم الجامعي 2023-2024، موزعين بين قطب أكدال (العلوم القانونية، الآداب، علوم التربية) وقطب السويسي/مدينة العرفان (العلوم القانونية بالسويسي، العلوم، الإنسياس).',
          en: 'Roughly 90,688 students in the 2023-2024 academic year, split between the Agdal hub (FSJES, Letters, Education Sciences) and the Souissi/Madinat Al Irfane hub (FSJES-Souissi, Sciences, ENSIAS).'
        }
      },
      {
        question: {
          fr: 'Comment se déplacer entre les facultés à Rabat sans voiture ?',
          ar: 'كيف يمكن التنقل بين الكليات بالرباط دون سيارة؟',
          en: 'How do you get between faculties in Rabat without a car?'
        },
        answer: {
          fr: 'Le tramway de Rabat-Salé, avec ses deux lignes, 27 km de réseau et 43 stations, relie Hay Karima à Salé jusqu\'à Agdal en passant par le domaine universitaire de Bab Al Irfane.',
          ar: 'يربط ترامواي الرباط-سلا، بخطيه الاثنين وشبكته الممتدة على 27 كلم و43 محطة، حي كريمة بسلا بحي أكدال، مروراً بالفضاء الجامعي لباب العرفان.',
          en: "The Rabat-Salé tramway, with its two lines, 27 km of track and 43 stations, links Hay Karima in Salé all the way to Agdal, passing through the Bab Al Irfane university district."
        }
      },
      {
        question: {
          fr: 'Où manger pas cher près des facultés à Rabat ?',
          ar: 'أين يمكن الأكل بأسعار معقولة قرب الكليات بالرباط؟',
          en: 'Where can you eat cheaply near the faculties in Rabat?'
        },
        answer: {
          fr: "Ba Fares, à Diour Jamaa, avec des formules petit-déjeuner entre 55 et 79 MAD ; et Dom's Café, à Agdal, avec wifi rapide et tables ouvertes de 7h30 à 23h30 du lundi au samedi.",
          ar: 'باء فارس بحي ديور الجامع، بأسعار فطور تتراوح بين 55 و79 درهماً؛ ودومز كافيه بأكدال، بواي فاي سريع وطاولات مفتوحة من 7:30 صباحاً إلى 11:30 مساءً من الإثنين إلى السبت.',
          en: "Ba Fares in Diour Jamaa, with breakfast formulas between 55 and 79 MAD; and Dom's Café in Agdal, with fast wifi and tables open 7:30 AM to 11:30 PM, Monday to Saturday."
        }
      }
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
  },
  {
    id: 'art-17',
    slug: 'guide-etudiant-rabat-logement-forfaits',
    category: 'lifestyle',
    categoryLabel: {
      fr: 'Vie Étudiante',
      ar: 'حياة الطلبة',
      en: 'Student Life'
    },
    title: {
      fr: "Logement étudiant à Rabat : prix des studios à Agdal et forfaits mobiles",
      ar: 'سكن الطلبة بالرباط: أسعار الاستوديوهات بأكدال وباقات الهاتف',
      en: 'Student Housing in Rabat: Studio Prices in Agdal & Mobile Plans'
    },
    subtitle: {
      fr: "La suite promise du guide Vie Étudiante : cités universitaires, résidences privées, marché locatif à Agdal et forfaits mobiles, sans bon plan inventé.",
      ar: 'تكملة دليل الحياة الطلابية كما وعدنا: الأحياء الجامعية، السكنات الخاصة، سوق الكراء بأكدال وباقات الهاتف، دون أي نصيحة مختلقة.',
      en: "The follow-up we promised to the Student Life guide: university residences, private housing, the Agdal rental market and mobile plans, no invented tips."
    },
    excerpt: {
      fr: "Logement subventionné, résidences privées, prix réels du marché à Agdal, et le meilleur forfait mobile pour un budget étudiant : la suite vérifiée du guide.",
      ar: 'السكن المدعوم، السكنات الخاصة، الأسعار الحقيقية بسوق أكدال، وأفضل باقة هاتف لميزانية طالب: تكملة الدليل الموثقة.',
      en: "Subsidized housing, private residences, real market prices in Agdal, and the best mobile plan for a student budget: the verified follow-up to the guide."
    },
    body: {
      fr: [
        "Dans notre premier guide Vie Étudiante, nous avions promis de compléter logement et forfaits mobiles dès que ces informations seraient vérifiées sur le terrain, jamais avant. Voici cette suite.",
        "Pour le logement subventionné, l'ONOUSC (Office National des Œuvres Universitaires Sociales et Culturelles) gère quatre cités universitaires publiques à Rabat : la Cité Moulay Ismaïl (avenue de la Résistance), la Cité Agdal (avenue des Nations-Unies, tél. 05 37 77 19 47), et les Cités Souissi I et II (Campus Universitaire Allal El Fassi). L'accès y est réservé aux étudiants inscrits dans l'enseignement supérieur, originaires d'une autre ville et issus d'une famille à revenu modeste ; les tarifs ne sont pas publiés en ligne et s'obtiennent uniquement en déposant un dossier auprès de l'ONOUSC, lié au statut de bourse de l'étudiant.",
        "Pour celles et ceux qui ne remplissent pas ces critères, deux résidences étudiantes privées existent à Rabat : Résidence Ryad Souissi (avenue Bani Wrayine, Hay Riad) et Bayt Al Maarifa (avenue Allal Al Fassi, Madinat Al Irfane). Leurs tarifs varient selon le type de chambre et ne sont pas communiqués publiquement ; la demande y dépasse chaque année l'offre disponible, mieux vaut donc candidater tôt plutôt qu'à la rentrée.",
        "Sur le marché locatif libre, les annonces actuelles à Agdal donnent une fourchette claire pour un studio : entre 3 300 DH pour un petit studio non meublé sans ascenseur, et 8 000 DH pour un studio meublé haut standing, la majorité des studios meublés se situant entre 5 500 et 6 700 DH par mois. Partager un studio à deux reste, dans les faits, la méthode la plus courante pour ramener ce budget à un niveau tenable.",
        "Côté forfait mobile, trois options se distinguent clairement par leurs tarifs publics : chez inwi, 49 DH pour 5 Go, 99 DH pour 25 Go, 199 DH pour 100 Go ou 349 DH en illimité ; chez Maroc Telecom, 165 DH pour 14 Go d'internet avec 14h d'appels, ou 349 DH pour 45 à 55 Go selon les offres en cours ; chez Orange, les forfaits s'échelonnent de 69 à 299 DH sans détail de volume de données publiquement communiqué au moment de la rédaction. Pour un usage étudiant classique (cours, cartes, réseaux sociaux), le palier autour de 100 DH pour 25 Go suffit dans la grande majorité des cas.",
        "Ce guide reste, comme le premier, volontairement incomplet : transport, jobs étudiants et couverture santé suivront dans une prochaine édition, uniquement une fois confirmés sur le terrain."
      ],
      ar: [
        "في دليلنا الأول للحياة الطلابية، وعدنا بإكمال معلومات السكن وباقات الهاتف فور التحقق منها ميدانياً، وليس قبل ذلك. وها هي التكملة.",
        "بخصوص السكن المدعوم، يدير المكتب الوطني للأعمال الجامعية الاجتماعية والثقافية (ONOUSC) أربع أحياء جامعية عمومية بالرباط: حي مولاي إسماعيل (شارع المقاومة)، حي أكدال (شارع الأمم المتحدة، هاتف: 05 37 77 19 47)، وحيا السويسي 1 و2 (الحرم الجامعي علال الفاسي). يقتصر الولوج إليها على الطلبة المسجلين بالتعليم العالي، القادمين من مدينة أخرى، والمنحدرين من أسر ذات دخل محدود؛ ولا تُنشر الأسعار عبر الإنترنت وتُحدد فقط بإيداع ملف لدى المكتب الوطني، مرتبط بوضعية المنحة الدراسية للطالب.",
        "لمن لا تنطبق عليهم هذه الشروط، توجد سكنيتان طلابيتان خاصتان بالرباط: إقامة رياض السويسي (شارع بني ورايين، حي الرياض) وبيت المعرفة (شارع علال الفاسي، مدينة العرفان). تختلف أسعارهما حسب نوع الغرفة ولا تُعلن للعموم؛ ويفوق الطلب فيهما العرض المتاح كل سنة، لذا يُفضل التقديم مبكراً بدل انتظار الدخول الجامعي.",
        "أما في سوق الكراء الحر، فتُظهر الإعلانات الحالية بأكدال هامشاً واضحاً لثمن الاستوديو: بين 3300 درهم لاستوديو صغير غير مفروش بدون مصعد، و8000 درهم لاستوديو مفروش راقٍ، مع تمركز أغلب الاستوديوهات المفروشة بين 5500 و6700 درهم شهرياً. ويبقى تقاسم استوديو بين طالبين، في الواقع، الطريقة الأكثر شيوعاً لجعل هذه الميزانية معقولة.",
        "أما بخصوص باقات الهاتف، فتتميز ثلاثة خيارات بأسعارها المعلنة بوضوح: لدى Inwi، 49 درهماً مقابل 5 جيغا، 99 درهماً مقابل 25 جيغا، 199 درهماً مقابل 100 جيغا، أو 349 درهماً بلا حدود؛ ولدى اتصالات المغرب، 165 درهماً مقابل 14 جيغا مع 14 ساعة اتصال، أو 349 درهماً مقابل 45 إلى 55 جيغا حسب العروض الجارية؛ ولدى Orange، تتراوح الباقات بين 69 و299 درهماً دون تفاصيل حجم البيانات معلنة للعموم وقت كتابة هذا المقال. وبالنسبة لاستخدام طلابي عادي (الدروس، الخرائط، الشبكات الاجتماعية)، تكفي في الغالب الفئة المقاربة لـ100 درهم مقابل 25 جيغا.",
        "يبقى هذا الدليل، كسابقه، غير مكتمل عمداً: النقل، فرص العمل الطلابية والتغطية الصحية ستُضاف في إصدار قادم، فقط بعد التحقق منها ميدانياً."
      ],
      en: [
        "In our first Student Life guide, we promised to complete the housing and mobile plan information once it was verified on the ground, never before. Here is that follow-up.",
        "For subsidized housing, ONOUSC (the National Office for Social and Cultural University Works) runs four public university residences in Rabat: Cité Moulay Ismaïl (avenue de la Résistance), Cité Agdal (avenue des Nations-Unies, tel. 05 37 77 19 47), and Cités Souissi I and II (Allal El Fassi University Campus). Access is limited to students enrolled in higher education, from outside the city, and from lower-income families; rates aren't published online and are only available by filing an application with ONOUSC, tied to the student's scholarship status.",
        "For those who don't meet those criteria, two private student residences exist in Rabat: Résidence Ryad Souissi (avenue Bani Wrayine, Hay Riad) and Bayt Al Maarifa (avenue Allal Al Fassi, Madinat Al Irfane). Their rates vary by room type and aren't publicly listed; demand exceeds available spots every year, so applying early beats waiting for the start of term.",
        "On the open rental market, current listings in Agdal show a clear range for a studio: from 3,300 DH for a small unfurnished studio with no elevator, up to 8,000 DH for a high-standing furnished one, with most furnished studios clustering between 5,500 and 6,700 DH a month. Splitting a studio between two students remains, in practice, the most common way to bring that down to a manageable budget.",
        "On mobile plans, three options stand out with clearly published rates: at inwi, 49 DH for 5 GB, 99 DH for 25 GB, 199 DH for 100 GB, or 349 DH unlimited; at Maroc Telecom, 165 DH for 14 GB with 14 hours of calls, or 349 DH for 45 to 55 GB depending on current offers; at Orange, plans range from 69 to 299 DH with no data volume publicly detailed per tier at the time of writing. For typical student use (classes, maps, social media), the tier around 100 DH for 25 GB covers most needs.",
        "Like the first one, this guide stays deliberately incomplete: transport, student jobs and health coverage will follow in a future edition, only once confirmed on the ground."
      ]
    },
    heroImage: '/banners/banner_lifestyle_logement.jpg',
    heroImageCaption: {
      fr: "Studios et cités universitaires autour d'Agdal, entre budget étudiant et vie de quartier.",
      ar: 'استوديوهات وأحياء جامعية حول أكدال، بين ميزانية الطالب وحياة الحي.',
      en: 'Studios and university residences around Agdal, between a student budget and neighborhood life.'
    },
    galleryImages: [],
    publishedAt: '2026-08-22',
    readTime: {
      fr: '4 min',
      ar: '٤ دقائق',
      en: '4 min'
    },
    location: {
      fr: 'Agdal & Souissi, Rabat',
      ar: 'أكدال والسويسي، الرباط',
      en: 'Agdal & Souissi, Rabat'
    },
    author: {
      name: 'Nadia El Fassi',
      role: {
        fr: 'Rédactrice en chef Gastronomie',
        ar: 'رئيسة تحرير قسم الطبخ',
        en: 'Editor-in-Chief, Gastronomy'
      },
      avatar: avatarNadia
    },
    isFeaturedHero: false,
    isEditorialPick: true,
    tags: [
      { fr: 'Vie Étudiante', ar: 'حياة الطلبة', en: 'Student Life' },
      { fr: 'Logement Étudiant', ar: 'سكن الطلبة', en: 'Student Housing' },
      { fr: 'Agdal', ar: 'أكدال', en: 'Agdal' },
      { fr: 'Forfait Mobile', ar: 'باقة الهاتف', en: 'Mobile Plan' }
    ],
    relatedSlugs: ['guide-etudiant-rabat', 'transport-rabat-etudiant-tramway-taxi', 'ba-fares-diour-jamaa'],
    faq: [
      {
        question: {
          fr: 'Combien coûte un studio à Agdal pour un étudiant ?',
          ar: 'كم يكلف استوديو بأكدال بالنسبة لطالب؟',
          en: 'How much does a studio in Agdal cost for a student?'
        },
        answer: {
          fr: 'Entre 3 300 DH pour un petit studio non meublé sans ascenseur et 8 000 DH pour un studio meublé haut standing, la majorité des studios meublés se situant entre 5 500 et 6 700 DH par mois. Partager un studio à deux ramène ce budget à un niveau plus tenable.',
          ar: 'بين 3300 درهم لاستوديو صغير غير مفروش بدون مصعد، و8000 درهم لاستوديو مفروش راقٍ، مع تمركز أغلب الاستوديوهات المفروشة بين 5500 و6700 درهم شهرياً. ويجعل تقاسم الاستوديو بين طالبين هذه الميزانية أكثر احتمالاً.',
          en: 'Between 3,300 DH for a small unfurnished studio with no elevator and 8,000 DH for a high-standing furnished one, with most furnished studios clustering between 5,500 and 6,700 DH a month. Splitting a studio between two students brings that down to a more manageable budget.'
        }
      },
      {
        question: {
          fr: 'Comment obtenir une chambre en cité universitaire à Rabat ?',
          ar: 'كيف يمكن الحصول على غرفة بحي جامعي بالرباط؟',
          en: 'How do you get a room in a public university residence in Rabat?'
        },
        answer: {
          fr: "Via l'ONOUSC, réservé aux étudiants inscrits dans le supérieur, originaires d'une autre ville et issus d'une famille à revenu modeste. Les tarifs ne sont pas publiés en ligne : il faut déposer un dossier directement auprès de l'ONOUSC, lié au statut de bourse de l'étudiant.",
          ar: 'عبر المكتب الوطني للأعمال الجامعية (ONOUSC)، المخصص للطلبة المسجلين بالتعليم العالي، القادمين من مدينة أخرى، والمنحدرين من أسر ذات دخل محدود. الأسعار غير معلنة عبر الإنترنت: يجب إيداع ملف مباشرة لدى المكتب، مرتبط بوضعية المنحة الدراسية.',
          en: "Through ONOUSC, reserved for students enrolled in higher education, from outside the city, and from lower-income families. Rates aren't published online — you file an application directly with ONOUSC, tied to the student's scholarship status."
        }
      },
      {
        question: {
          fr: 'Quel forfait mobile choisir comme étudiant à Rabat ?',
          ar: 'ما هي باقة الهاتف المناسبة للطالب بالرباط؟',
          en: 'Which mobile plan should a student in Rabat pick?'
        },
        answer: {
          fr: "Chez inwi, 99 DH pour 25 Go couvre la majorité des usages étudiants classiques (cours, cartes, réseaux sociaux). Maroc Telecom propose 165 DH pour 14 Go avec 14h d'appels, et Orange des forfaits entre 69 et 299 DH.",
          ar: 'لدى Inwi، تكفي 99 درهماً مقابل 25 جيغا لتغطية معظم استخدامات الطالب المعتادة (الدروس، الخرائط، الشبكات الاجتماعية). وتقترح اتصالات المغرب 165 درهماً مقابل 14 جيغا مع 14 ساعة اتصال، وOrange باقات بين 69 و299 درهماً.',
          en: 'At inwi, 99 DH for 25 GB covers most typical student use (classes, maps, social media). Maroc Telecom offers 165 DH for 14 GB with 14 hours of calls, and Orange has plans between 69 and 299 DH.'
        }
      }
    ]
  },
  {
    id: 'art-18',
    slug: 'transport-rabat-etudiant-tramway-taxi',
    category: 'lifestyle',
    categoryLabel: {
      fr: 'Vie Étudiante',
      ar: 'حياة الطلبة',
      en: 'Student Life'
    },
    title: {
      fr: 'Se déplacer à Rabat : prix du tramway, taxis et VTC pour un budget étudiant',
      ar: 'التنقل بالرباط: أسعار الترامواي والطاكسي وتطبيقات النقل لميزانية الطالب',
      en: 'Getting Around Rabat: Tram, Taxi & Ride-Hailing Prices for a Student Budget'
    },
    subtitle: {
      fr: "Épisode 3 du guide Vie Étudiante, comme promis : abonnement tramway étudiant, tarifs des petits taxis et couverture Careem à Rabat, avec les vrais prix.",
      ar: 'الحلقة 3 من دليل الحياة الطلابية كما وعدنا: اشتراك الترامواي للطلبة، أسعار الطاكسي الصغير وتغطية Careem بالرباط، بأسعار حقيقية.',
      en: "Episode 3 of the Student Life guide, as promised: the student tram subscription, petit taxi fares and Careem coverage in Rabat, with real prices."
    },
    excerpt: {
      fr: "Abonnement tramway étudiant à 160 DH/mois, prix réels des petits taxis, et couverture VTC : le guide vérifié pour se déplacer à Rabat sans se ruiner.",
      ar: 'اشتراك ترامواي للطلبة بـ160 درهماً شهرياً، الأسعار الحقيقية للطاكسي الصغير، وتغطية تطبيقات النقل: الدليل الموثق للتنقل بالرباط دون إفلاس.',
      en: "A 160 DH/month student tram subscription, real petit taxi prices, and ride-hailing coverage: the verified guide to getting around Rabat without breaking the bank."
    },
    body: {
      fr: [
        "Dans notre deuxième guide Vie Étudiante, nous avions promis d'ajouter le transport dans une prochaine édition, une fois les informations vérifiées sur le terrain. Voici cette suite.",
        "Pour le tramway de Rabat-Salé, le ticket simple coûte 7 DH et permet de voyager librement sur tout le réseau pendant une heure après validation, avec correspondances entre lignes incluses. Un ticket Trambus à 10 DH couvre en plus la ligne de bus 30. Pour un usage quotidien, l'abonnement IRTIYAH Talib, réservé aux étudiants de moins de 26 ans, coûte 160 DH par mois, 450 DH par trimestre, 860 DH par semestre ou 1 600 DH par an, contre 270 DH par mois pour l'abonnement IRTIYAH classique, hors statut étudiant. Il existe aussi un Pass Jeunes (16-30 ans) via l'application du Ministère de la Jeunesse, mais son tarif n'est pas communiqué publiquement au moment de la rédaction, l'inscription et la vérification d'éligibilité se faisant via l'appli Tram Mobile avant tout paiement.",
        "Pour les petits taxis bleus de Rabat, il n'existe pas de grille tarifaire officielle publiée en ligne par kilomètre : le compteur reste la référence, et les prix constatés pour une course en ville se situent généralement entre 15 et 30 DH de jour pour un trajet court, jusqu'à 40 DH pour une traversée plus longue. Une majoration d'environ 50 % s'applique après 20h, comme dans la plupart des villes marocaines. Vérifier que le compteur est enclenché reste le meilleur réflexe.",
        "Côté applications de VTC, Careem est actuellement l'option la plus fiable à Rabat, la ville étant décrite comme l'une des deux mieux couvertes du pays avec Casablanca, aux côtés de Casablanca. Le prix est affiché et confirmé dans l'application avant la course, ce qui évite toute négociation, contrairement au petit taxi.",
        "Ce guide reste, comme les précédents, volontairement incomplet : santé et jobs étudiants suivront dans une prochaine édition, uniquement une fois confirmés sur le terrain."
      ],
      ar: [
        "في دليلنا الثاني للحياة الطلابية، وعدنا بإضافة معلومات التنقل في إصدار قادم، فور التحقق منها ميدانياً. وها هي التكملة.",
        "بخصوص ترامواي الرباط-سلا، تكلفة التذكرة العادية 7 دراهم، وتتيح التنقل بحرية عبر الشبكة كاملة لمدة ساعة بعد التصديق عليها، مع إمكانية التبديل بين الخطوط. أما تذكرة Trambus بـ10 دراهم فتغطي إضافة إلى ذلك خط الحافلة 30. بالنسبة للاستخدام اليومي، يبلغ سعر اشتراك IRTIYAH Talib، المخصص لطلبة أقل من 26 سنة، 160 درهماً شهرياً، 450 درهماً كل ثلاثة أشهر، 860 درهماً كل ستة أشهر، أو 1600 درهم سنوياً، مقابل 270 درهماً شهرياً لاشتراك IRTIYAH العادي دون صفة طالب. يوجد أيضاً Pass Jeunes (16-30 سنة) عبر تطبيق وزارة الشباب، لكن سعره غير معلن للعموم وقت كتابة هذا المقال، ويتم التسجيل والتحقق من الأهلية عبر تطبيق Tram Mobile قبل أي دفع.",
        "أما بخصوص سيارات الأجرة الصغيرة الزرقاء بالرباط، فلا توجد قائمة أسعار رسمية منشورة عبر الإنترنت لكل كيلومتر: يبقى العداد هو المرجع، وتتراوح الأسعار المعاينة لرحلة داخل المدينة عادة بين 15 و30 درهماً نهاراً للمسافة القصيرة، وحتى 40 درهماً للمسافة الأطول. وتُطبق زيادة بنسبة 50% تقريباً بعد الساعة الثامنة مساءً، كما هو الحال في أغلب المدن المغربية. التأكد من تشغيل العداد يبقى أفضل احتياط.",
        "أما بخصوص تطبيقات النقل، فتُعد Careem حالياً الخيار الأكثر موثوقية بالرباط، حيث تُوصف المدينة بأنها من بين الأفضل تغطية بالمغرب إلى جانب الدار البيضاء. ويُعرض السعر ويُؤكَّد داخل التطبيق قبل الرحلة، ما يُجنّب أي تفاوض، خلافاً للطاكسي الصغير.",
        "يبقى هذا الدليل، كسابقيه، غير مكتمل عمداً: الصحة وفرص العمل الطلابية ستُضاف في إصدار قادم، فقط بعد التحقق منها ميدانياً."
      ],
      en: [
        "In our second Student Life guide, we promised to add transport in a future edition, once verified on the ground. Here is that follow-up.",
        "For the Rabat-Salé tramway, a single ticket costs 7 DH and allows unlimited travel across the network for one hour after validation, including transfers between lines. A 10 DH Trambus ticket also covers Bus Line 30. For daily use, the IRTIYAH Talib subscription, reserved for students under 26, costs 160 DH a month, 450 DH a quarter, 860 DH for six months, or 1,600 DH a year, versus 270 DH a month for the regular IRTIYAH subscription without student status. A Pass Jeunes (ages 16-30) also exists via the Ministry of Youth's app, but its price isn't publicly listed at the time of writing, with registration and eligibility checks done through the Tram Mobile app before any payment.",
        "For Rabat's blue petit taxis, there's no official per-kilometer fare table published online: the meter remains the reference, and observed prices for an in-city trip typically run 15 to 30 DH daytime for a short ride, up to 40 DH for a longer crossing. A roughly 50% surcharge applies after 8 PM, as in most Moroccan cities. Checking that the meter is running remains the best habit.",
        "On ride-hailing apps, Careem is currently the most reliable option in Rabat, the city being described as one of the two best-covered in the country alongside Casablanca. The price is shown and confirmed in the app before the ride, avoiding any negotiation, unlike the petit taxi.",
        "Like the previous ones, this guide stays deliberately incomplete: health coverage and student jobs will follow in a future edition, only once confirmed on the ground."
      ]
    },
    heroImage: '/banners/banner_lifestyle_transport.jpg',
    heroImageCaption: {
      fr: 'Le tramway de Rabat-Salé, colonne vertébrale du trajet quotidien entre facultés et quartiers résidentiels.',
      ar: 'ترامواي الرباط-سلا، العمود الفقري للتنقل اليومي بين الكليات والأحياء السكنية.',
      en: "The Rabat-Salé tramway, the backbone of the daily commute between faculties and residential neighborhoods."
    },
    galleryImages: [],
    publishedAt: '2026-08-23',
    readTime: {
      fr: '3 min',
      ar: '٣ دقائق',
      en: '3 min'
    },
    location: {
      fr: 'Rabat & Salé',
      ar: 'الرباط وسلا',
      en: 'Rabat & Salé'
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
      { fr: 'Tramway Rabat-Salé', ar: 'ترامواي الرباط-سلا', en: 'Rabat-Salé Tramway' },
      { fr: 'Transport', ar: 'النقل', en: 'Transport' },
      { fr: 'Petit Taxi', ar: 'طاكسي صغير', en: 'Petit Taxi' }
    ],
    relatedSlugs: ['guide-etudiant-rabat', 'guide-etudiant-rabat-logement-forfaits', 'que-faire-a-rabat-itineraire'],
    faq: [
      {
        question: {
          fr: "Combien coûte l'abonnement tramway étudiant à Rabat ?",
          ar: 'كم يكلف اشتراك الترامواي للطلبة بالرباط؟',
          en: "How much does the student tram subscription cost in Rabat?"
        },
        answer: {
          fr: "L'abonnement IRTIYAH Talib, réservé aux étudiants de moins de 26 ans, coûte 160 DH par mois, 450 DH par trimestre, 860 DH par semestre ou 1 600 DH par an — contre 270 DH par mois pour l'abonnement classique.",
          ar: 'يكلف اشتراك IRTIYAH Talib، المخصص لطلبة أقل من 26 سنة، 160 درهماً شهرياً، 450 درهماً كل ثلاثة أشهر، 860 درهماً كل ستة أشهر، أو 1600 درهم سنوياً — مقابل 270 درهماً شهرياً للاشتراك العادي.',
          en: "The IRTIYAH Talib subscription, reserved for students under 26, costs 160 DH a month, 450 DH a quarter, 860 DH for six months, or 1,600 DH a year — versus 270 DH a month for the regular subscription."
        }
      },
      {
        question: {
          fr: 'Combien coûte un petit taxi à Rabat ?',
          ar: 'كم يكلف الطاكسي الصغير بالرباط؟',
          en: 'How much does a petit taxi cost in Rabat?'
        },
        answer: {
          fr: "Il n'existe pas de grille officielle par kilomètre, mais les prix constatés pour une course en ville vont de 15 à 30 DH de jour pour un trajet court, jusqu'à 40 DH pour une traversée plus longue, avec une majoration d'environ 50 % après 20h.",
          ar: 'لا توجد قائمة رسمية لكل كيلومتر، لكن الأسعار المعاينة لرحلة داخل المدينة تتراوح بين 15 و30 درهماً نهاراً للمسافة القصيرة، وحتى 40 درهماً للمسافة الأطول، مع زيادة بنسبة 50% تقريباً بعد الساعة الثامنة مساءً.',
          en: "There's no official per-kilometer table, but observed prices for an in-city trip run 15 to 30 DH daytime for a short ride, up to 40 DH for a longer crossing, with a roughly 50% surcharge after 8 PM."
        }
      },
      {
        question: {
          fr: 'Careem fonctionne-t-il bien à Rabat ?',
          ar: 'هل يعمل تطبيق Careem بشكل جيد بالرباط؟',
          en: 'Does Careem work well in Rabat?'
        },
        answer: {
          fr: "Oui, Rabat est décrite comme l'une des deux villes les mieux couvertes du Maroc avec Casablanca, avec un prix affiché et confirmé dans l'application avant la course.",
          ar: 'نعم، تُوصف الرباط بأنها من بين أفضل مدينتين تغطية بالمغرب إلى جانب الدار البيضاء، مع سعر يُعرض ويُؤكَّد داخل التطبيق قبل الرحلة.',
          en: "Yes, Rabat is described as one of the two best-covered cities in Morocco alongside Casablanca, with a price shown and confirmed in the app before the ride."
        }
      }
    ]
  },
  {
    id: 'art-19',
    slug: 'que-faire-a-rabat-itineraire',
    category: 'lifestyle',
    categoryLabel: {
      fr: 'Guide Pratique',
      ar: 'دليل عملي',
      en: 'Practical Guide'
    },
    title: {
      fr: 'Que faire à Rabat en 1 jour (ou un week-end) : l\'itinéraire complet, vérifié',
      ar: 'ماذا تفعل في الرباط في يوم واحد (أو نهاية أسبوع): البرنامج الكامل الموثق',
      en: 'What to Do in Rabat in One Day (or a Weekend): The Complete Verified Itinerary'
    },
    subtitle: {
      fr: 'Kasbah des Oudayas, Tour Hassan, Chellah, médina et Musée Mohammed VI : notre parcours pas à pas dans la capitale, avec les vrais tarifs et horaires.',
      ar: 'قصبة الأوداية، صومعة حسان، شالة، المدينة القديمة ومتحف محمد السادس: مسارنا خطوة بخطوة في العاصمة، بالأسعار والمواعيد الحقيقية.',
      en: 'Kasbah des Oudayas, Hassan Tower, Chellah, the medina and the Mohammed VI Museum: our step-by-step route through the capital, with real prices and hours.'
    },
    excerpt: {
      fr: 'De la Kasbah des Oudayas au Musée Mohammed VI, un itinéraire complet et vérifié pour découvrir Rabat en une journée — ou un week-end tranquille.',
      ar: 'من قصبة الأوداية إلى متحف محمد السادس، برنامج كامل وموثق لاكتشاف الرباط في يوم واحد — أو نهاية أسبوع هادئة.',
      en: 'From the Kasbah des Oudayas to the Mohammed VI Museum, a complete, verified itinerary to discover Rabat in one day — or a relaxed weekend.'
    },
    body: {
      fr: [
        "Un week-end à Rabat suffit pour comprendre pourquoi la ville figure aujourd'hui au patrimoine mondial de l'UNESCO : une capitale à taille humaine, où l'on passe de la nécropole médiévale à l'art contemporain en une flânerie de quelques kilomètres. Voici un itinéraire vérifié sur le terrain, avec les vrais tarifs et horaires, pour une journée bien remplie — ou un week-end plus tranquille.",
        "La matinée commence par la Kasbah des Oudayas, à l'entrée du fleuve Bouregreg : ruelles bleu et blanc, remparts du XIIe siècle et jardin andalou à l'accès gratuit et libre toute la journée. Comptez une à trois heures pour flâner jusqu'au Café Maure, qui sert thé à la menthe et pâtisseries avec vue sur l'estuaire — une pause obligatoire avant de continuer.",
        "À quinze minutes à pied ou en petit taxi, la Tour Hassan et le Mausolée Mohammed V se visitent gratuitement, tous les jours de 9h à 18h. La photographie est interdite à l'intérieur du mausolée et une tenue correcte est demandée : c'est un lieu à la fois historique et toujours en usage religieux, où des récitateurs du Coran se relaient jour et nuit.",
        "En redescendant vers la médina, la Rue des Consuls concentre l'essentiel de l'artisanat rbati : tapis, poteries, argenterie et objets en bois, dans une ambiance nettement moins pressante que les souks de Marrakech ou Fès. Pour l'argent au poids, le prix au gramme ne devrait pas dépasser 15 DH — un repère utile avant de négocier.",
        "Pour l'après-midi, la nécropole de Chellah — rouverte au public en 2024 après une restauration complète — mérite le détour : vestiges mérinides et jardins calmes à environ 2 km du centre-ville. L'entrée coûte 70 DH pour un adulte, 50 DH pour les 15-25 ans, gratuite pour les moins de 7 ans, avec 50 % de réduction pour les résidents marocains et étrangers. Horaires : 9h-20h d'avril à septembre, 9h-18h le reste de l'année, fermeture anticipée à 15h pendant le Ramadan.",
        "Direction ensuite la marina du Bouregreg, en contrebas des remparts : promenade le long du fleuve, vue sur la médina de Salé en face, et traversée en barque traditionnelle pour 2,5 DH la place — l'une des traversées les plus anciennes et les moins chères de la ville, gérée par une association de bateliers en activité quasi continue. Pour un aller-retour plus rapide, le tramway relie aussi les deux rives pour 7 DH le ticket simple.",
        "En fin d'après-midi, le Musée Mohammed VI d'art moderne et contemporain, avenue Allal Ben Abdellah, ferme le mardi mais ouvre le reste de la semaine de 10h à 18h ; comptez environ 30 à 40 DH l'entrée selon la source consultée, avec un tarif réduit pour les étudiants et un accès gratuit le vendredi après-midi pour les citoyens marocains. C'est l'endroit pour prendre le pouls de la scène artistique marocaine contemporaine, à quelques minutes à pied de la gare Rabat-Ville.",
        "Pour le dîner, direction notre Guide Horeca : les tables d'Agdal, d'Hassan ou du bord du Bouregreg couvrent tous les budgets. Et si le week-end le permet, une deuxième journée plus lente — vieille médina de Salé accessible par la même barque ou le tram, cafés d'Agdal ou de Souissi — complète bien ce premier jour dense. Comme pour nos autres guides, cet itinéraire reste volontairement resserré sur ce que nous avons pu vérifier nous-mêmes : les adresses et tarifs seront mis à jour si les tarifs officiels changent."
      ],
      ar: [
        "تكفي عطلة نهاية أسبوع واحدة في الرباط لفهم سبب إدراج المدينة ضمن التراث العالمي لليونسكو: عاصمة بحجم إنساني، تنتقل فيها من مقبرة من العصور الوسطى إلى الفن المعاصر في نزهة لا تتجاوز بضعة كيلومترات. إليكم برنامجاً موثقاً ميدانياً، بالأسعار والمواعيد الحقيقية، ليوم حافل — أو عطلة أهدأ.",
        "تبدأ الصباح بقصبة الأوداية، عند مصب نهر أبي رقراق: أزقة زرقاء وبيضاء، أسوار من القرن الثاني عشر، وحديقة أندلسية يمكن دخولها مجاناً وبحرية طوال اليوم. خصصوا ما بين ساعة وثلاث ساعات للتجول وصولاً إلى المقهى المغربي (Café Maure)، الذي يقدم أتاي بالنعناع وحلويات مع إطلالة على مصب النهر — استراحة لا بد منها قبل المتابعة.",
        "على بعد خمس عشرة دقيقة سيراً أو بطاكسي صغير، تُزار صومعة حسان وضريح محمد الخامس مجاناً، يومياً من الساعة 9 صباحاً حتى 6 مساءً. التصوير ممنوع داخل الضريح، ويُطلب من الزوار ارتداء لباس محتشم: فالمكان تاريخي ولا يزال في الوقت نفسه مكان عبادة نشطاً، حيث يتناوب قراء القرآن ليلاً ونهاراً.",
        "بالعودة نحو المدينة القديمة، يجمع شارع القناصل (Rue des Consuls) معظم الحرف اليدوية الرباطية: سجاد، فخار، فضيات وأشغال خشبية، في أجواء أقل ضغطاً بكثير من أسواق مراكش أو فاس. بالنسبة للفضة المباعة بالوزن، لا ينبغي أن يتجاوز سعر الغرام 15 درهماً — معيار مفيد قبل المساومة.",
        "بعد الظهر، تستحق مقبرة شالة الأثرية — التي أعيد فتحها للعموم سنة 2024 بعد ترميم شامل — التوقف عندها: أطلال مرينية وحدائق هادئة على بعد حوالي 2 كم من وسط المدينة. تبلغ تكلفة الدخول 70 درهماً للبالغين، و50 درهماً للفئة العمرية 15-25 سنة، ومجانية لمن هم دون 7 سنوات، مع تخفيض 50% للمقيمين المغاربة والأجانب. المواعيد: من 9 صباحاً حتى 8 مساءً من أبريل إلى شتنبر، ومن 9 صباحاً حتى 6 مساءً باقي السنة، مع إغلاق مبكر عند الساعة 3 زوالاً خلال شهر رمضان.",
        "من هناك، اتجهوا نحو مارينا أبي رقراق أسفل الأسوار: ممشى على ضفة النهر في مواجهة مدينة سلا القديمة، وعبور بقارب تقليدي مقابل 2.5 درهم للمقعد الواحد — من أقدم وأرخص المعابر النهرية بالمدينة، تديره جمعية للبحارة تعمل بشكل شبه متواصل. لعبور أسرع ذهاباً وإياباً، يربط الترامواي أيضاً بين الضفتين مقابل 7 دراهم لتذكرة عادية.",
        "في آخر النهار، يُغلق متحف محمد السادس للفن الحديث والمعاصر، الواقع بشارع علال بن عبد الله، أبوابه يوم الثلاثاء، لكنه يفتح باقي أيام الأسبوع من 10 صباحاً حتى 6 مساءً؛ توقعوا دفع ما بين 30 و40 درهماً للدخول حسب المصدر، مع تعريفة مخفضة للطلبة ودخول مجاني عصر يوم الجمعة للمواطنين المغاربة. إنه المكان المناسب لمواكبة نبض المشهد الفني المعاصر بالمغرب، على بعد خطوات من محطة قطار الرباط المدينة.",
        "للعشاء، يغطي دليلنا للمطاعم والمقاهي كل الميزانيات بين أكدال وحسان وضفة أبي رقراق. وإذا سمحت عطلة نهاية الأسبوع، فإن يوماً ثانياً أهدأ — المدينة القديمة بسلا التي يمكن بلوغها بنفس القارب أو الترامواي، أو مقاهي أكدال والسويسي — يُكمّل بشكل جيد هذا اليوم الأول الحافل. وكما في أدلتنا الأخرى، يبقى هذا البرنامج مقتصراً عمداً على ما تمكّنا من التحقق منه بأنفسنا: ستُحدَّث العناوين والأسعار إذا تغيّرت التعريفات الرسمية."
      ],
      en: [
        "A weekend in Rabat is enough to understand why the city made UNESCO's World Heritage list: a human-scale capital where a walk of a few kilometers takes you from a medieval necropolis to contemporary art. Here's an itinerary verified on the ground, with real prices and hours, for a full day out — or a more relaxed weekend.",
        "The morning starts at the Kasbah des Oudayas, where the Bouregreg River meets the ocean: blue-and-white lanes, 12th-century ramparts, and an Andalusian garden that's free and open all day. Allow one to three hours to wander through to the Café Maure, which serves mint tea and pastries with a view over the estuary — a mandatory break before continuing.",
        "A fifteen-minute walk or petit taxi ride away, the Hassan Tower and the Mausoleum of Mohammed V are free to visit, open daily from 9 AM to 6 PM. Photography is banned inside the mausoleum and modest dress is expected: it's both a historical site and an active place of worship, where Quran reciters take turns day and night.",
        "Heading back down toward the medina, Rue des Consuls concentrates most of Rabat's craftsmanship: carpets, pottery, silverware and woodwork, in an atmosphere noticeably less pushy than the souks of Marrakech or Fez. For silver sold by weight, the price per gram shouldn't exceed 15 DH — a useful benchmark before negotiating.",
        "In the afternoon, the Chellah necropolis — reopened to the public in 2024 after a full restoration — is worth the detour: Marinid ruins and quiet gardens about 2 km from downtown. Entry costs 70 DH for an adult, 50 DH for ages 15-25, free under 7, with a 50% discount for Moroccan and foreign residents. Hours: 9 AM-8 PM from April to September, 9 AM-6 PM the rest of the year, closing early at 3 PM during Ramadan.",
        "From there, head to the Bouregreg marina below the ramparts: a riverside walk facing Salé's medina, and a crossing by traditional rowboat for 2.5 DH a seat — one of the city's oldest and cheapest river crossings, run by an association of boatmen operating almost around the clock. For a quicker round trip, the tramway also links both banks for a 7 DH single ticket.",
        "Late afternoon, the Mohammed VI Museum of Modern and Contemporary Art, on Avenue Allal Ben Abdellah, closes on Tuesdays but opens the rest of the week from 10 AM to 6 PM; expect to pay roughly 30 to 40 DH for entry depending on the source, with a reduced student rate and free access on Friday afternoons for Moroccan citizens. It's the place to take the pulse of Morocco's contemporary art scene, a short walk from Rabat-Ville train station.",
        "For dinner, our Horeca guide covers every budget across Agdal, Hassan, and the Bouregreg waterfront. And if the weekend allows, a slower second day — Salé's old medina, reachable by the same rowboat or the tram, or the cafés of Agdal and Souissi — rounds out this dense first day nicely. Like our other guides, this itinerary stays deliberately narrow to what we could verify ourselves: addresses and prices will be updated if official rates change."
      ]
    },
    heroImage: '/banners/banner_lifestyle_itineraire.jpg',
    heroImageCaption: {
      fr: 'La Kasbah des Oudayas au coucher du soleil, point de départ de notre itinéraire dans Rabat.',
      ar: 'قصبة الأوداية عند غروب الشمس، نقطة انطلاق برنامجنا في الرباط.',
      en: 'The Kasbah des Oudayas at sunset, the starting point of our Rabat itinerary.'
    },
    galleryImages: [],
    publishedAt: '2026-08-23',
    readTime: {
      fr: '5 min',
      ar: '٥ دقائق',
      en: '5 min'
    },
    location: {
      fr: 'Rabat',
      ar: 'الرباط',
      en: 'Rabat'
    },
    author: {
      name: 'Nadia El Fassi',
      role: {
        fr: 'Rédactrice Lifestyle',
        ar: 'محررة أسلوب الحياة',
        en: 'Lifestyle Writer'
      },
      avatar: avatarNadia
    },
    isFeaturedHero: false,
    isEditorialPick: true,
    tags: [
      { fr: 'Que Faire à Rabat', ar: 'ماذا تفعل بالرباط', en: 'What to Do in Rabat' },
      { fr: 'Kasbah des Oudayas', ar: 'قصبة الأوداية', en: 'Kasbah des Oudayas' },
      { fr: 'Chellah', ar: 'شالة', en: 'Chellah' },
      { fr: 'Tourisme Rabat', ar: 'سياحة الرباط', en: 'Rabat Tourism' }
    ],
    relatedSlugs: ['ba-fares-diour-jamaa', 'indian-flavors-agdal', 'transport-rabat-etudiant-tramway-taxi'],
    faq: [
      {
        question: {
          fr: "Combien coûte l'entrée à la nécropole de Chellah ?",
          ar: 'كم تكلفة الدخول إلى مقبرة شالة الأثرية؟',
          en: 'How much does entry to the Chellah necropolis cost?'
        },
        answer: {
          fr: "70 DH pour un adulte, 50 DH pour les 15-25 ans, gratuite pour les moins de 7 ans, avec 50 % de réduction pour les résidents marocains et étrangers.",
          ar: '70 درهماً للبالغين، 50 درهماً للفئة العمرية 15-25 سنة، ومجانية لمن هم دون 7 سنوات، مع تخفيض 50% للمقيمين المغاربة والأجانب.',
          en: "70 DH for an adult, 50 DH for ages 15-25, free under 7, with a 50% discount for Moroccan and foreign residents."
        }
      },
      {
        question: {
          fr: "Le Musée Mohammed VI d'art moderne est-il gratuit ?",
          ar: 'هل الدخول إلى متحف محمد السادس للفن الحديث مجاني؟',
          en: 'Is the Mohammed VI Museum of Modern Art free to visit?'
        },
        answer: {
          fr: "Pas en général : comptez 30 à 40 DH selon la source consultée, avec un tarif réduit étudiant. L'accès est gratuit le vendredi après-midi pour les citoyens marocains ; le musée est fermé le mardi.",
          ar: 'ليس عموماً: توقعوا دفع ما بين 30 و40 درهماً حسب المصدر، مع تعريفة مخفضة للطلبة. الدخول مجاني عصر يوم الجمعة للمواطنين المغاربة؛ والمتحف مغلق يوم الثلاثاء.',
          en: "Not generally: expect to pay 30 to 40 DH depending on the source, with a reduced student rate. Entry is free on Friday afternoons for Moroccan citizens; the museum is closed on Tuesdays."
        }
      },
      {
        question: {
          fr: 'Combien coûte la traversée en barque entre Rabat et Salé ?',
          ar: 'كم تكلفة العبور بالقارب بين الرباط وسلا؟',
          en: 'How much does the rowboat crossing between Rabat and Salé cost?'
        },
        answer: {
          fr: "2,5 DH la place, à bord des barques traditionnelles qui traversent le Bouregreg en quelques minutes, en activité quasi continue.",
          ar: '2.5 درهم للمقعد الواحد، على متن القوارب التقليدية التي تعبر أبي رقراق في دقائق معدودة، وتعمل بشكل شبه متواصل.',
          en: "2.5 DH per seat, aboard the traditional rowboats that cross the Bouregreg in a few minutes and operate almost around the clock."
        }
      }
    ]
  },
  {
    id: 'art-20',
    slug: 'so-lounge-souissi',
    category: 'sortir',
    categoryLabel: {
      fr: 'Lounge & Bar Festif',
      ar: 'صالة سهر وحفلات',
      en: 'Lounge & Nightlife Bar'
    },
    title: {
      fr: 'So Lounge : le bar-lounge du Sofitel qui inaugure notre rubrique Sortir',
      ar: 'So Lounge: بار الصالة بفندق سوفيتيل الذي يفتتح ركن السهر لدينا',
      en: 'So Lounge: The Sofitel Bar-Lounge That Opens Our Sortir Section'
    },
    subtitle: {
      fr: "Trois ambiances, un seul lieu : cocktails, dancefloor et coin lounge intimiste au Sofitel Rabat Jardin des Roses, à Souissi.",
      ar: 'ثلاث أجواء في مكان واحد: كوكتيلات، مضمار رقص وركن هادئ بفندق سوفيتيل الرباط جاردان دي روز بالسويسي.',
      en: "Three moods, one address: cocktails, a dancefloor, and an intimate lounge corner at the Sofitel Rabat Jardin des Roses, in Souissi."
    },
    excerpt: {
      fr: "Le bar-lounge du Sofitel Rabat Jardin des Roses ouvre notre rubrique Sortir : trois espaces, soirées dansantes le week-end, et les infos pratiques vérifiées.",
      ar: 'بار الصالة بفندق سوفيتيل الرباط جاردان دي روز يفتتح ركن السهر لدينا: ثلاث مساحات، أمسيات راقصة نهاية الأسبوع، ومعلومات عملية موثقة.',
      en: "The bar-lounge at the Sofitel Rabat Jardin des Roses opens our Sortir section: three spaces, weekend dinner-dance evenings, and the verified practical details."
    },
    body: {
      fr: [
        "Pour inaugurer notre rubrique Sortir, nous avons choisi une adresse installée plutôt qu'une découverte non vérifiée : le So Lounge, à l'intérieur du Sofitel Rabat Jardin des Roses à Souissi. L'établissement se décrit lui-même comme \"un lieu tendance à l'ambiance lounge sophistiquée, devenu une destination incontournable de la capitale\" — une réputation que confirment les avis indépendants consultés pour cet article.",
        "Le lieu se décline en trois espaces distincts : So Nice, le bar à cocktails ; So Fun, l'espace dancefloor animé toute l'année par des DJ et de la musique live ; et So Zen, un coin lounge plus intimiste pour une soirée plus calme. Le week-end, des soirées dînatoires dansantes sont proposées le vendredi et le samedi.",
        "Côté pratique : le So Lounge est ouvert tous les jours de 20h à 4h, fermé le lundi, avec une cuisine internationale et un positionnement haut de gamme (comptez large, l'adresse se situe dans la catégorie la plus élevée relevée par les avis consultés). L'entrée se fait par le Sofitel Rabat Jardin des Roses, avenue Imam Malek, à Souissi.",
        "Honnêtement : ni le droit d'entrée éventuel ni un code vestimentaire officiel ne sont publiés par l'établissement au moment de la rédaction. Nous mettrons à jour cette fiche dès que ces informations seront confirmées directement auprès du lieu.",
        "D'autres adresses suivront dans cette rubrique Sortir, uniquement une fois vérifiées sur le terrain ou auprès des établissements eux-mêmes — comme pour tous nos guides."
      ],
      ar: [
        "لافتتاح ركن السهر لدينا، اخترنا عنواناً راسخاً بدل اكتشاف غير موثق: So Lounge، داخل فندق سوفيتيل الرباط جاردان دي روز بالسويسي. يصف المكان نفسه بأنه \"وجهة رائجة بأجواء صالة راقية، أصبحت معلماً لا يفوت في العاصمة\" — وهي سمعة تؤكدها التقييمات المستقلة التي تم الاطلاع عليها لهذا المقال.",
        "يتوزع المكان على ثلاث مساحات: So Nice، بار الكوكتيلات؛ So Fun، مضمار الرقص الذي ينشط طوال السنة بحفلات دي جي وموسيقى حية؛ وSo Zen، ركن هادئ أكثر حميمية لأمسية أهدأ. في عطلة نهاية الأسبوع، تُقام أمسيات عشاء راقصة أيام الجمعة والسبت.",
        "من الناحية العملية: يفتح So Lounge أبوابه يومياً من الساعة 8 مساءً حتى 4 صباحاً، ويُغلق يوم الاثنين، بمطبخ عالمي وتموضع راقٍ (توقعوا ميزانية مرتفعة، إذ يقع العنوان ضمن أعلى فئة سعرية وردت في التقييمات المُطّلع عليها). المدخل عبر فندق سوفيتيل الرباط جاردان دي روز، شارع الإمام مالك بالسويسي.",
        "بصراحة: لا رسوم الدخول المحتملة ولا قواعد اللباس الرسمية منشورة من طرف المؤسسة وقت كتابة هذا المقال. سنُحدّث هذه البطاقة فور تأكيد هذه المعلومات مباشرة من المكان.",
        "ستتبع عناوين أخرى في ركن السهر هذا، فقط بعد التحقق منها ميدانياً أو لدى المؤسسات نفسها — كما هو الحال في كل أدلتنا."
      ],
      en: [
        "To open our Sortir section, we chose an established address rather than an unverified discovery: So Lounge, inside the Sofitel Rabat Jardin des Roses in Souissi. The venue describes itself as \"a stylish hotspot with a sophisticated lounge vibe... a now-iconic destination\" in the capital — a reputation backed up by the independent reviews consulted for this piece.",
        "The venue is split into three distinct spaces: So Nice, the cocktail bar; So Fun, the dancefloor animated year-round by DJs and live music; and So Zen, a more intimate lounge corner for a quieter evening. On weekends, dinner-dance evenings are held on Fridays and Saturdays.",
        "Practically speaking: So Lounge is open daily from 8 PM to 4 AM, closed on Mondays, with an international menu and an upscale positioning (budget accordingly — the address falls in the highest price bracket noted across the reviews consulted). Entry is through the Sofitel Rabat Jardin des Roses, Avenue Imam Malek, Souissi.",
        "In the interest of honesty: neither a specific entry fee nor an official dress code is published by the venue at the time of writing. We'll update this listing as soon as those details are confirmed directly with the establishment.",
        "More addresses will follow in this Sortir section, only once verified on the ground or directly with the venues themselves — as with all our guides."
      ]
    },
    heroImage: '/banners/banner_sortir_so_lounge.jpg',
    heroImageCaption: {
      fr: "Illustration éditoriale — ambiance du bar-lounge So Lounge, en attendant une photo officielle du lieu.",
      ar: 'رسم توضيحي تحريري — أجواء بار So Lounge، بانتظار صورة رسمية للمكان.',
      en: "Editorial illustration — the So Lounge bar-lounge atmosphere, pending an official photo of the venue."
    },
    galleryImages: [],
    publishedAt: '2026-08-23',
    readTime: {
      fr: '3 min',
      ar: '٣ دقائق',
      en: '3 min'
    },
    location: {
      fr: 'Souissi',
      ar: 'السويسي',
      en: 'Souissi'
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
    relatedBusinessName: 'So Lounge',
    relatedBusinessUrl: 'https://sofitel.accor.com/en/hotels/6813/B003.bar.html',
    businessDetails: {
      name: 'So Lounge',
      category: {
        fr: 'Lounge & Bar Festif',
        ar: 'صالة سهر وحفلات',
        en: 'Lounge & Nightlife Bar'
      },
      neighborhood: {
        fr: 'Souissi',
        ar: 'السويسي',
        en: 'Souissi'
      },
      address: 'Sofitel Rabat Jardin des Roses, Avenue Imam Malek, Souissi, Rabat',
      priceLevel: '€€€€',
      openingHours: {
        fr: 'Tous les jours, 20h-4h — fermé le lundi',
        ar: 'يومياً من 20:00 حتى 4:00 صباحاً — مغلق يوم الاثنين',
        en: 'Daily, 8 PM-4 AM — closed Mondays'
      },
      websiteUrl: 'https://sofitel.accor.com/en/hotels/6813/B003.bar.html',
      phone: '+212 537 67 56 56',
      specialty: {
        fr: 'Trois espaces : So Nice (bar à cocktails), So Fun (dancefloor/DJ), So Zen (lounge intimiste)',
        ar: 'ثلاث مساحات: So Nice (بار كوكتيلات)، So Fun (مضمار رقص/دي جي)، So Zen (صالة هادئة)',
        en: 'Three spaces: So Nice (cocktail bar), So Fun (dancefloor/DJ), So Zen (intimate lounge)'
      },
      servesCuisine: 'International'
    },
    isFeaturedHero: false,
    isEditorialPick: true,
    tags: [
      { fr: 'Sortir Rabat', ar: 'السهر بالرباط', en: 'Rabat Nightlife' },
      { fr: 'Souissi', ar: 'السويسي', en: 'Souissi' },
      { fr: 'Bar Lounge', ar: 'بار صالة', en: 'Lounge Bar' },
      { fr: 'Sofitel Rabat', ar: 'سوفيتيل الرباط', en: 'Sofitel Rabat' }
    ],
    relatedSlugs: ['red-house-sofia-palace-souissi', 'que-faire-a-rabat-itineraire'],
    faq: [
      {
        question: {
          fr: 'Où se trouve le So Lounge à Rabat ?',
          ar: 'أين يقع So Lounge بالرباط؟',
          en: 'Where is So Lounge located in Rabat?'
        },
        answer: {
          fr: "À l'intérieur du Sofitel Rabat Jardin des Roses, avenue Imam Malek, dans le quartier de Souissi.",
          ar: 'داخل فندق سوفيتيل الرباط جاردان دي روز، شارع الإمام مالك، بحي السويسي.',
          en: 'Inside the Sofitel Rabat Jardin des Roses, Avenue Imam Malek, in the Souissi district.'
        }
      },
      {
        question: {
          fr: 'Quels sont les horaires du So Lounge ?',
          ar: 'ما هي مواعيد عمل So Lounge؟',
          en: 'What are So Lounge\'s opening hours?'
        },
        answer: {
          fr: 'Tous les jours de 20h à 4h, fermé le lundi.',
          ar: 'يومياً من 20:00 حتى 4:00 صباحاً، مغلق يوم الاثنين.',
          en: 'Daily from 8 PM to 4 AM, closed on Mondays.'
        }
      },
      {
        question: {
          fr: "Le So Lounge propose-t-il des soirées à thème ?",
          ar: 'هل يقدم So Lounge أمسيات خاصة؟',
          en: 'Does So Lounge host special evenings?'
        },
        answer: {
          fr: "Oui, des soirées dînatoires dansantes sont organisées le vendredi et le samedi.",
          ar: 'نعم، تُنظَّم أمسيات عشاء راقصة أيام الجمعة والسبت.',
          en: 'Yes, dinner-dance evenings are held on Fridays and Saturdays.'
        }
      }
    ]
  },
  {
    id: 'art-21',
    slug: 'red-house-sofia-palace-souissi',
    category: 'sortir',
    categoryLabel: {
      fr: 'Club & Nightlife',
      ar: 'نادي ليلي وسهر',
      en: 'Club & Nightlife'
    },
    title: {
      fr: 'Red House : le club électro-house du complexe Sofia Palace à Souissi',
      ar: 'Red House: نادي الإلكترو-هاوس بمجمع صوفيا بالاس بالسويسي',
      en: 'Red House: The Electro-House Club Inside the Sofia Palace Complex'
    },
    subtitle: {
      fr: 'DJs internationaux, musique électro/house/afro/hip-hop et soirées à thème, au sein du complexe nocturne Sofia Palace.',
      ar: 'دي جي عالميون، موسيقى إلكترو/هاوس/أفرو/هيب هوب وأمسيات ذات طابع خاص، ضمن مجمع صوفيا بالاس الليلي.',
      en: 'International DJs, electro/house/afro/hip-hop music and themed nights, inside the Sofia Palace nightlife complex.'
    },
    excerpt: {
      fr: 'Deuxième adresse de notre rubrique Sortir : Red House, le club du complexe Sofia Palace à Souissi, avec DJs et soirées à thème vérifiés.',
      ar: 'العنوان الثاني في ركن السهر لدينا: Red House، نادي مجمع صوفيا بالاس بالسويسي، مع دي جي وأمسيات ذات طابع خاص موثقة.',
      en: 'The second address in our Sortir section: Red House, the club inside the Sofia Palace complex in Souissi, with verified DJs and themed nights.'
    },
    body: {
      fr: [
        "Deuxième adresse de notre rubrique Sortir : Red House, à l'intérieur du complexe Sofia Palace, avenue Mehdi Ben Barka à Souissi. Sofia Palace se présente comme un complexe nocturne réunissant cinq espaces sous un même toit — dont Red House, son club dédié à la musique électronique — en activité depuis 2015 et revendiquant environ 8 000 visiteurs par mois.",
        "Le club met en avant une programmation de DJs internationaux et d'artistes invités, sur une sélection musicale électro, house, afro et hip-hop, avec des soirées à thème et des apparitions surprises principalement le week-end, selon les informations publiées par l'établissement lui-même.",
        "Red House est ouvert tous les jours, de 21h à 4h du matin. La réservation de table se fait par téléphone, une pratique courante pour ce type d'établissement qui fonctionne beaucoup sur le service de table plutôt que sur l'entrée simple.",
        "Honnêtement : ni le tarif d'entrée, ni un code vestimentaire officiel, ni le prix des tables ne sont publiés par l'établissement au moment de la rédaction — ces informations varient probablement selon la soirée et l'événement. Nous les ajouterons dès qu'elles seront confirmées.",
        "Comme pour So Lounge, cette fiche restera mise à jour au fil des vérifications : notre rubrique Sortir grandit adresse par adresse, jamais par supposition."
      ],
      ar: [
        "العنوان الثاني في ركن السهر لدينا: Red House، داخل مجمع صوفيا بالاس، شارع مهدي بنبركة بحي السويسي. يُقدَّم مجمع صوفيا بالاس كمجمع ليلي يجمع خمس مساحات تحت سقف واحد — من بينها Red House، ناديه المخصص للموسيقى الإلكترونية — يعمل منذ سنة 2015 ويُعلن استقباله لحوالي 8000 زائر شهرياً.",
        "يُبرز النادي برمجة تضم دي جي عالميين وفنانين ضيوفاً، بانتقاء موسيقي يجمع الإلكترو والهاوس والأفرو والهيب هوب، مع أمسيات ذات طابع خاص وظهورات مفاجئة أساساً في عطلة نهاية الأسبوع، وفق المعلومات المنشورة من طرف المؤسسة نفسها.",
        "يفتح Red House أبوابه يومياً من الساعة 9 مساءً حتى 4 صباحاً. يتم حجز الطاولات عبر الهاتف، وهي ممارسة شائعة لهذا النوع من المؤسسات التي تعتمد كثيراً على خدمة الطاولات بدل الدخول البسيط.",
        "بصراحة: لا رسوم الدخول ولا قواعد اللباس الرسمية ولا أسعار الطاولات منشورة من طرف المؤسسة وقت كتابة هذا المقال — من المرجح أن تتغير هذه المعلومات حسب الأمسية والحدث. سنضيفها فور تأكيدها.",
        "كما هو الحال مع So Lounge، ستبقى هذه البطاقة محدَّثة مع كل تحقق جديد: ركن السهر لدينا ينمو عنواناً بعد عنوان، لا بالتخمين أبداً."
      ],
      en: [
        "The second address in our Sortir section: Red House, inside the Sofia Palace complex on Avenue Mehdi Ben Barka in Souissi. Sofia Palace presents itself as a nightlife complex bringing five spaces together under one roof — including Red House, its electronic-music club — operating since 2015 and claiming around 8,000 visitors a month.",
        "The club highlights a lineup of international DJs and guest artists, with a musical selection spanning electro, house, afro and hip-hop, plus themed nights and surprise appearances mainly on weekends, according to information published by the venue itself.",
        "Red House is open daily from 9 PM to 4 AM. Table reservations are made by phone, a common practice for this type of venue, which relies heavily on table service rather than simple entry.",
        "In the interest of honesty: neither the entry fee, an official dress code, nor table pricing are published by the venue at the time of writing — these details likely vary by night and event. We'll add them once confirmed.",
        "As with So Lounge, this listing will stay updated as we verify more: our Sortir section grows address by address, never by assumption."
      ]
    },
    heroImage: '/banners/banner_sortir_red_house.jpg',
    heroImageCaption: {
      fr: "Illustration éditoriale — le dancefloor de Red House, en attendant une photo officielle du lieu.",
      ar: 'رسم توضيحي تحريري — مضمار الرقص بـ Red House، بانتظار صورة رسمية للمكان.',
      en: "Editorial illustration — the Red House dancefloor, pending an official photo of the venue."
    },
    galleryImages: [],
    publishedAt: '2026-08-23',
    readTime: {
      fr: '3 min',
      ar: '٣ دقائق',
      en: '3 min'
    },
    location: {
      fr: 'Souissi',
      ar: 'السويسي',
      en: 'Souissi'
    },
    author: {
      name: 'Nadia El Fassi',
      role: {
        fr: 'Rédactrice Lifestyle',
        ar: 'محررة أسلوب الحياة',
        en: 'Lifestyle Writer'
      },
      avatar: avatarNadia
    },
    relatedBusinessName: 'Red House',
    relatedBusinessUrl: 'https://www.redhouselounge.com/',
    businessDetails: {
      name: 'Red House',
      category: {
        fr: 'Club & Nightlife',
        ar: 'نادي ليلي وسهر',
        en: 'Club & Nightlife'
      },
      neighborhood: {
        fr: 'Souissi',
        ar: 'السويسي',
        en: 'Souissi'
      },
      address: '2 Avenue Mehdi Ben Barka, Sofia Palace, Souissi, Rabat',
      priceLevel: '€€€',
      openingHours: {
        fr: 'Tous les jours, 21h-4h',
        ar: 'يومياً من 21:00 حتى 4:00 صباحاً',
        en: 'Daily, 9 PM-4 AM'
      },
      websiteUrl: 'https://www.redhouselounge.com/',
      phone: '+212 6 62 62 64 23',
      specialty: {
        fr: 'DJs internationaux, musique électro/house/afro/hip-hop, soirées à thème',
        ar: 'دي جي عالميون، موسيقى إلكترو/هاوس/أفرو/هيب هوب، أمسيات ذات طابع خاص',
        en: 'International DJs, electro/house/afro/hip-hop music, themed nights'
      },
      musicGenre: 'Électro, House, Afro, Hip-Hop'
    },
    isFeaturedHero: false,
    isEditorialPick: true,
    tags: [
      { fr: 'Sortir Rabat', ar: 'السهر بالرباط', en: 'Rabat Nightlife' },
      { fr: 'Souissi', ar: 'السويسي', en: 'Souissi' },
      { fr: 'Sofia Palace', ar: 'صوفيا بالاس', en: 'Sofia Palace' },
      { fr: 'Club Électro', ar: 'نادي إلكترو', en: 'Electro Club' }
    ],
    relatedSlugs: ['so-lounge-souissi', 'que-faire-a-rabat-itineraire'],
    faq: [
      {
        question: {
          fr: 'Où se trouve Red House à Rabat ?',
          ar: 'أين يقع Red House بالرباط؟',
          en: 'Where is Red House located in Rabat?'
        },
        answer: {
          fr: "À l'intérieur du complexe Sofia Palace, 2 avenue Mehdi Ben Barka, à Souissi.",
          ar: 'داخل مجمع صوفيا بالاس، 2 شارع مهدي بنبركة، بحي السويسي.',
          en: 'Inside the Sofia Palace complex, 2 Avenue Mehdi Ben Barka, in Souissi.'
        }
      },
      {
        question: {
          fr: 'Quels sont les horaires de Red House ?',
          ar: 'ما هي مواعيد عمل Red House؟',
          en: "What are Red House's opening hours?"
        },
        answer: {
          fr: 'Tous les jours de 21h à 4h du matin.',
          ar: 'يومياً من الساعة 9 مساءً حتى 4 صباحاً.',
          en: 'Daily from 9 PM to 4 AM.'
        }
      },
      {
        question: {
          fr: 'Quel style de musique joue-t-on à Red House ?',
          ar: 'ما هو أسلوب الموسيقى المُشغَّل في Red House؟',
          en: 'What style of music plays at Red House?'
        },
        answer: {
          fr: "Électro, house, afro et hip-hop, avec des DJs internationaux et des soirées à thème, principalement le week-end.",
          ar: 'إلكترو، هاوس، أفرو وهيب هوب، مع دي جي عالميين وأمسيات ذات طابع خاص، أساساً في عطلة نهاية الأسبوع.',
          en: 'Electro, house, afro and hip-hop, with international DJs and themed nights, mainly on weekends.'
        }
      }
    ]
  },
  {
    id: 'art-22',
    slug: 'plages-rabat-guide',
    category: 'lifestyle',
    categoryLabel: {
      fr: 'Guide Pratique',
      ar: 'دليل عملي',
      en: 'Practical Guide'
    },
    title: {
      fr: 'Les plages de Rabat et alentours : guide complet, plage par plage',
      ar: 'شواطئ الرباط وضواحيها: دليل كامل، شاطئاً بشاطئ',
      en: "Rabat's Beaches, Near and Far: The Complete, Beach-by-Beach Guide"
    },
    subtitle: {
      fr: 'Des Oudayas à Bouznika, cinq plages vérifiées avec distances, équipements et consignes de sécurité — pas de bon plan inventé.',
      ar: 'من الأوداية إلى بوزنيقة، خمس شواطئ موثقة بالمسافات والتجهيزات وتعليمات السلامة — بدون أي معلومة مختلقة.',
      en: 'From the Oudayas to Bouznika, five verified beaches with distances, facilities, and safety guidance — no invented tips.'
    },
    excerpt: {
      fr: 'Cinq plages autour de Rabat, de la plus proche à la plus lointaine, avec distances, équipements et consignes de sécurité vérifiés — pour profiter de la côte sans mauvaise surprise.',
      ar: 'خمس شواطئ حول الرباط، من الأقرب إلى الأبعد، بمسافات وتجهيزات وتعليمات سلامة موثقة — للاستمتاع بالساحل دون مفاجآت.',
      en: 'Five beaches around Rabat, from closest to farthest, with verified distances, facilities, and safety guidance — so you can enjoy the coast without surprises.'
    },
    body: {
      fr: [
        "Rabat borde l'Atlantique, et la côte offre plusieurs options de plage, de la plus proche accessible à pied à la sortie de journée en voiture. Voici cinq adresses vérifiées, classées par distance, avec équipements et consignes de sécurité — car plusieurs de ces plages n'ont ni surveillance ni poste de secours, une information à connaître avant de s'y baigner.",
        "Plage des Oudayas, à 5-10 minutes à pied de la médina, est la plus accessible : sable épais avec des zones plus caillouteuses vers les rochers, sans surveillance, toilettes ni douches, et une offre de restauration limitée à la Kasbah. Idéale pour une pause rapide, moins pour la baignade.",
        "De l'autre côté du fleuve, Plage de Salé s'atteint en 13 minutes en voiture ou environ 35 minutes en tramway, avec une vue panoramique sur la médina et les remparts de Rabat. Elle non plus n'est pas surveillée, et le vent y est fréquent ; en revanche, la restauration est abondante du côté de la marina.",
        "Plage des Nations, à environ 15 km de Rabat, est un spot de surf reconnu, à l'accès gratuit et ouvert à tous. Elle a obtenu le label Pavillon Bleu cinq années consécutives, un gage de qualité de l'eau et de propreté du sable, grâce à une gestion associative appuyée par les autorités locales.",
        "Plus au sud, Plage de Skhirat (environ 26 km, 30 minutes en voiture) offre un sable fin et clair adapté aux familles comme aux surfeurs, avec toilettes et douches sur place, mais peu d'ombre et une offre de restauration limitée — prévoir un pique-nique.",
        "Enfin, Plage de Bouznika (environ 35 minutes en voiture) déroule 5 km de sable doré et une eau réputée limpide, avec des maîtres-nageurs en été, des douches, et des restaurants de fruits de mer à proximité — la mieux équipée des cinq pour une journée complète.",
        "Un point de sécurité, sérieusement : la Protection civile marocaine recommande de se baigner uniquement dans les zones surveillées, de respecter les drapeaux de baignade, de ne jamais nager seul, de surveiller les enfants en permanence même en zone surveillée, et d'éviter la baignade juste après un repas copieux ou une forte exposition au soleil. Sur les plages non surveillées de cette liste — Oudayas et Salé notamment — la prudence est d'autant plus de mise.",
        "Pour s'y rendre sans voiture, notre guide transport détaille les prix du tramway ; et pour combiner plage et visite, notre itinéraire d'une journée à Rabat commence justement du côté de la Kasbah des Oudayas."
      ],
      ar: [
        "تطل الرباط على المحيط الأطلسي، ويوفر ساحلها عدة خيارات للشواطئ، من مسافة قريبة يمكن قطعها سيراً إلى رحلة يوم كامل بالسيارة. إليكم خمسة عناوين موثقة، مرتبة حسب المسافة، مع التجهيزات وملاحظات السلامة — إذ لا تتوفر عدة شواطئ في هذه القائمة على حراسة أو نقطة إسعافات أولية، وهي معلومة يجدر معرفتها قبل السباحة.",
        "شاطئ الأوداية، على بعد 5 إلى 10 دقائق سيراً من المدينة القديمة، هو الأقرب: رمل سميك مع مناطق أكثر صخرية قرب الصخور، دون حراسة أو مراحيض أو دشات، وعرض مطاعم محدود عند القصبة. مناسب لاستراحة سريعة، أقل ملاءمة للسباحة.",
        "على الضفة الأخرى من النهر، يُمكن الوصول إلى شاطئ سلا خلال 13 دقيقة بالسيارة أو حوالي 35 دقيقة بالترامواي، مع إطلالة بانورامية على المدينة القديمة وأسوار الرباط. وهو أيضاً غير مراقَب، والرياح متكررة فيه؛ في المقابل، تتوفر المطاعم بكثرة قرب المارينا.",
        "شاطئ الأمم، على بعد حوالي 15 كم من الرباط، هو موقع معروف لركوب الأمواج، بدخول مجاني ومفتوح للجميع. حصل على شارة العلم الأزرق خمس سنوات متتالية — وهي علامة على جودة المياه ونظافة الرمال — بفضل تسيير جمعوي مدعوم من السلطات المحلية.",
        "جنوباً أكثر، يوفر شاطئ الصخيرات (حوالي 26 كم، 30 دقيقة بالسيارة) رملاً ناعماً فاتح اللون يناسب العائلات وراكبي الأمواج على حد سواء، مع مراحيض ودشات في الموقع، لكن ظلاً قليلاً وعرض مطاعم محدود — يُنصح بإحضار وجبة خفيفة.",
        "أخيراً، يمتد شاطئ بوزنيقة (حوالي 35 دقيقة بالسيارة) على 5 كم من الرمل الذهبي بمياه توصف بالصفاء، مع منقذين في الصيف، ودشات، ومطاعم للمأكولات البحرية قريبة — الأفضل تجهيزاً من بين الخمسة ليوم كامل.",
        "ملاحظة سلامة مهمة: توصي الحماية المدنية المغربية بالسباحة فقط في المناطق المراقَبة، واحترام إشارات أعلام السباحة، وعدم السباحة منفرداً أبداً، ومراقبة الأطفال باستمرار حتى في المناطق المراقَبة، وتجنب السباحة مباشرة بعد وجبة دسمة أو تعرض مطول للشمس. وفي الشواطئ غير المراقَبة بهذه القائمة — الأوداية وسلا خصوصاً — تزداد أهمية الحذر.",
        "للوصول دون سيارة، يفصّل دليلنا للتنقل أسعار الترامواي؛ ولمن يريد الجمع بين الشاطئ والزيارة، يبدأ برنامجنا ليوم واحد بالرباط تحديداً من جهة قصبة الأوداية."
      ],
      en: [
        "Rabat sits on the Atlantic, and the coastline offers several beach options, from a short walk away to a full car day-trip. Here are five verified addresses, ranked by distance, with facilities and safety notes — because several of these beaches have no lifeguards or first-aid post, worth knowing before you swim.",
        "Plage des Oudayas, a 5-10 minute walk from the medina, is the most accessible: thick sand with rockier patches near the rocks, no lifeguards, toilets or showers, and limited dining options up at the Kasbah. Good for a quick break, less so for swimming.",
        "Across the river, Plage de Salé is reachable in 13 minutes by car or roughly 35 minutes by tram, with panoramic views of Rabat's medina and ramparts. It's also unsupervised, and wind is common; dining, on the other hand, is plentiful near the marina.",
        "Plage des Nations, about 15 km from Rabat, is a recognized surf spot with free, open access. It has held Blue Flag certification for five consecutive years — a mark of water quality and sand cleanliness — thanks to volunteer association management backed by local authorities.",
        "Further south, Plage de Skhirat (about 26 km, 30 minutes by car) offers fine, light-colored sand suited to both families and surfers, with toilets and showers on site, but little shade and limited dining — bring a picnic.",
        "Finally, Plage de Bouznika (about 35 minutes by car) stretches 5 km of golden sand with reputedly crystal-clear water, summer lifeguards, showers, and nearby seafood restaurants — the best-equipped of the five for a full day out.",
        "A serious safety note: Morocco's Protection Civile recommends swimming only in supervised zones, following the beach flag signals, never swimming alone, watching children constantly even in supervised areas, and avoiding swimming right after a heavy meal or prolonged sun exposure. On the unsupervised beaches in this list — Oudayas and Salé in particular — extra caution applies.",
        "To get there without a car, our transport guide covers tram prices; and to combine a beach stop with sightseeing, our one-day Rabat itinerary starts right by the Kasbah des Oudayas."
      ]
    },
    heroImage: '/banners/banner_about.jpg',
    heroImageCaption: {
      fr: "Illustration éditoriale — ambiance côtière, en attendant une image dédiée aux plages de Rabat.",
      ar: 'رسم توضيحي تحريري — أجواء ساحلية، بانتظار صورة مخصصة لشواطئ الرباط.',
      en: "Editorial illustration — coastal ambiance, pending a dedicated image for Rabat's beaches."
    },
    galleryImages: [],
    publishedAt: '2026-08-23',
    readTime: {
      fr: '4 min',
      ar: '٤ دقائق',
      en: '4 min'
    },
    location: {
      fr: 'Rabat & environs',
      ar: 'الرباط وضواحيها',
      en: 'Rabat & surroundings'
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
      { fr: 'Plages Rabat', ar: 'شواطئ الرباط', en: 'Rabat Beaches' },
      { fr: 'Plage des Nations', ar: 'شاطئ الأمم', en: 'Plage des Nations' },
      { fr: 'Sécurité Baignade', ar: 'سلامة السباحة', en: 'Swimming Safety' },
      { fr: 'Tourisme Rabat', ar: 'سياحة الرباط', en: 'Rabat Tourism' }
    ],
    relatedSlugs: ['que-faire-a-rabat-itineraire', 'transport-rabat-etudiant-tramway-taxi'],
    faq: [
      {
        question: {
          fr: 'Quelle est la plage la plus proche du centre de Rabat ?',
          ar: 'ما هو أقرب شاطئ من وسط الرباط؟',
          en: "What's the closest beach to central Rabat?"
        },
        answer: {
          fr: "Plage des Oudayas, à 5-10 minutes à pied de la médina — mais sans surveillance ni équipements (toilettes, douches).",
          ar: 'شاطئ الأوداية، على بعد 5 إلى 10 دقائق سيراً من المدينة القديمة — لكن دون حراسة أو تجهيزات (مراحيض، دشات).',
          en: "Plage des Oudayas, 5-10 minutes on foot from the medina — but with no lifeguards or facilities (toilets, showers)."
        }
      },
      {
        question: {
          fr: 'Quelle plage près de Rabat a le label Pavillon Bleu ?',
          ar: 'أي شاطئ قرب الرباط يحمل شارة العلم الأزرق؟',
          en: 'Which beach near Rabat holds Blue Flag certification?'
        },
        answer: {
          fr: "Plage des Nations (environ 15 km de Rabat), certifiée Pavillon Bleu cinq années consécutives.",
          ar: 'شاطئ الأمم (على بعد حوالي 15 كم من الرباط)، حاصل على شارة العلم الأزرق خمس سنوات متتالية.',
          en: "Plage des Nations (about 15 km from Rabat), Blue Flag-certified for five consecutive years."
        }
      },
      {
        question: {
          fr: 'Quelles plages autour de Rabat sont surveillées par des maîtres-nageurs ?',
          ar: 'ما هي الشواطئ المراقَبة بمنقذين حول الرباط؟',
          en: 'Which beaches around Rabat have lifeguards?'
        },
        answer: {
          fr: "D'après nos sources, seule Plage de Bouznika mentionne des maîtres-nageurs, en été. Les autres plages de cette liste (Oudayas, Salé, Nations, Skhirat) ne sont pas surveillées : respectez les consignes générales de sécurité en mer.",
          ar: 'وفق مصادرنا، شاطئ بوزنيقة فقط يذكر وجود منقذين، في الصيف. أما الشواطئ الأخرى في هذه القائمة (الأوداية، سلا، الأمم، الصخيرات) فغير مراقَبة: يُرجى احترام تعليمات السلامة العامة في البحر.',
          en: "According to our sources, only Plage de Bouznika mentions lifeguards, in summer. The other beaches on this list (Oudayas, Salé, Nations, Skhirat) are unsupervised: follow general sea-safety guidance."
        }
      }
    ]
  },
  {
    id: 'art-23',
    slug: 'sante-jobs-etudiants-rabat-amo-anapec',
    category: 'lifestyle',
    categoryLabel: {
      fr: 'Vie Étudiante',
      ar: 'حياة الطلبة',
      en: 'Student Life'
    },
    title: {
      fr: 'Santé et petits jobs à Rabat : la couverture AMO et les pistes ANAPEC pour étudiants',
      ar: 'الصحة والعمل الطلابي بالرباط: التغطية الصحية AMO ومسارات الوكالة الوطنية ANAPEC',
      en: 'Health Cover and Student Jobs in Rabat: AMO Coverage and ANAPEC Pathways'
    },
    subtitle: {
      fr: "Épisode 4 du guide Vie Étudiante, comme promis : l'assurance maladie obligatoire (AMO) gratuite et ce que l'on sait vraiment des jobs et stages étudiants.",
      ar: 'الحلقة 4 من دليل الحياة الطلابية كما وعدنا: التغطية الصحية الإجبارية (AMO) المجانية وما نعرفه فعلاً عن العمل الطلابي والتداريب.',
      en: "Episode 4 of the Student Life guide, as promised: the free mandatory health coverage (AMO) and what's actually known about student jobs and internships."
    },
    excerpt: {
      fr: "L'AMO étudiante est gratuite pour les moins de 30 ans, l'inscription se fait via votre université, et l'ANAPEC reste le point d'entrée officiel pour stages et insertion. Voici ce qui est vérifié — et ce qui ne l'est pas.",
      ar: 'التغطية الصحية الطلابية مجانية لمن هم دون 30 سنة، ويتم التسجيل عبر جامعتكم، وتبقى الوكالة الوطنية ANAPEC المدخل الرسمي للتداريب والإدماج المهني. إليكم ما تم التحقق منه — وما لم يُتحقق منه بعد.',
      en: "Student AMO coverage is free for under-30s, registration runs through your university, and ANAPEC remains the official entry point for internships and job placement. Here's what's verified — and what isn't."
    },
    body: {
      fr: [
        "Comme promis dans notre guide transport, voici le quatrième épisode de notre série Vie Étudiante, consacré à deux sujets qui touchent directement le quotidien étudiant à Rabat : la couverture santé et les petits jobs.",
        "Commençons par l'AMO (Assurance Maladie Obligatoire) étudiante : elle est entièrement gratuite pour les étudiants inscrits régulièrement dans un établissement d'enseignement supérieur ou de formation professionnelle, à condition d'avoir 30 ans ou moins et de ne pas déjà bénéficier d'une autre couverture médicale. L'État prend en charge les cotisations pour les étudiants du public. L'inscription se fait chaque année via un formulaire électronique sur la plateforme de votre université — pour l'Université Mohammed V de Rabat par exemple, sur etu.um5.ac.ma — après quoi l'établissement transmet la demande à la CNOPS (Caisse Nationale des Organismes de Prévoyance Sociale). La CNOPS traite ensuite le dossier dans un délai maximal de 30 jours, et le suivi des remboursements se fait sur le portail cnops.org.ma.",
        "Pour les petits jobs et stages, les sources disponibles restent plus vagues que pour l'AMO — nous préférons le dire honnêtement plutôt que d'inventer des chiffres. Les postes les plus fréquemment cités pour les étudiants marocains incluent le travail saisonnier dans le tourisme et l'hôtellerie, le soutien scolaire particulier, les centres d'appel, et les postes d'accueil. Aucune grille de salaire fiable et vérifiable n'a été trouvée pour ces postes au moment de la rédaction : nous ne publierons donc pas de chiffre tant qu'il n'est pas confirmé par une source solide.",
        "Pour l'insertion professionnelle après le diplôme, l'ANAPEC (Agence Nationale de Promotion de l'Emploi et des Compétences) est l'organisme public de référence. Son programme phare, IDMAJ, favorise l'insertion via des stages rémunérés pour les jeunes diplômés. L'inscription se fait en ligne sur anapec.org : création d'un compte, envoi des documents (copie de la carte d'identité nationale, copies des diplômes, CV à jour), puis passage à l'agence ANAPEC la plus proche pour finaliser le dossier. Un dispositif complémentaire, TAHFIZ, encourage les employeurs à recruter de jeunes diplômés en réduisant leurs charges sociales — un mécanisme qui joue indirectement en faveur des candidats.",
        "Comme pour les épisodes précédents, ce guide reste volontairement prudent sur ce qui n'est pas vérifiable : les montants exacts des stages IDMAJ et les tarifs des petits jobs évoluent et ne sont pas systématiquement publiés — mieux vaut confirmer directement auprès de l'agence ANAPEC ou de l'employeur concerné plutôt que de se fier à un chiffre non sourcé."
      ],
      ar: [
        "كما وعدنا في دليل التنقل، إليكم الحلقة الرابعة من سلسلتنا حول الحياة الطلابية، المخصصة لموضوعين يمسان مباشرة الحياة اليومية للطلبة بالرباط: التغطية الصحية والعمل الطلابي.",
        "لنبدأ بالتغطية الصحية الإجبارية (AMO) للطلبة: وهي مجانية بالكامل للطلبة المسجلين بانتظام في مؤسسة للتعليم العالي أو التكوين المهني، بشرط أن تكون أعمارهم 30 سنة أو أقل وألا يستفيدوا بالفعل من تغطية صحية أخرى. تتحمل الدولة الاشتراكات بالنسبة لطلبة القطاع العام. يتم التسجيل سنوياً عبر استمارة إلكترونية على منصة جامعتكم — بالنسبة لجامعة محمد الخامس بالرباط مثلاً، عبر etu.um5.ac.ma — وبعدها تُحيل المؤسسة الطلب إلى الصندوق الوطني لمنظمات الاحتياط الاجتماعي (CNOPS). يعالج الصندوق الملف بعدها في أجل أقصاه 30 يوماً، ويتم تتبع التعويضات عبر بوابة cnops.org.ma.",
        "أما بخصوص العمل الطلابي والتداريب، فالمصادر المتوفرة تبقى أقل دقة مقارنة بمعلومات AMO — ونفضل قول ذلك بصراحة بدل اختلاق أرقام. أكثر الوظائف المذكورة للطلبة المغاربة تشمل العمل الموسمي في السياحة والفندقة، الدروس الخصوصية، مراكز الاتصال، ووظائف الاستقبال. لم يتم العثور على أي جدول أجور موثوق وقابل للتحقق لهذه الوظائف وقت كتابة هذا المقال: لن ننشر إذن أي رقم قبل التأكد منه عبر مصدر موثوق.",
        "بالنسبة للإدماج المهني بعد التخرج، تبقى الوكالة الوطنية لإنعاش التشغيل والكفاءات (ANAPEC) الهيئة العمومية المرجعية. برنامجها الرئيسي، إدماج (IDMAJ)، يشجع الإدماج المهني عبر تداريب مؤدى عنها للخريجين الشباب. يتم التسجيل عبر الإنترنت على anapec.org: إنشاء حساب، إرسال الوثائق (نسخة من البطاقة الوطنية، نسخ الشهادات، سيرة ذاتية محينة)، ثم التوجه إلى أقرب وكالة ANAPEC لإتمام الملف. يوجد أيضاً برنامج تحفيز (TAHFIZ) يشجع أصحاب العمل على توظيف الخريجين الشباب عبر تخفيض الأعباء الاجتماعية — آلية تصب بشكل غير مباشر في صالح المترشحين.",
        "كما في الحلقات السابقة، يبقى هذا الدليل حذراً عمداً بخصوص ما لا يمكن التحقق منه: المبالغ الدقيقة لتداريب IDMAJ وأسعار العمل الطلابي تتغير ولا تُنشر بشكل منتظم — الأفضل التأكد مباشرة لدى وكالة ANAPEC أو صاحب العمل المعني بدل الاعتماد على رقم غير موثق."
      ],
      en: [
        "As promised in our transport guide, here's the fourth episode of our Student Life series, covering two topics that directly affect daily student life in Rabat: health coverage and student jobs.",
        "Let's start with student AMO (Assurance Maladie Obligatoire) coverage: it's entirely free for students regularly enrolled in a higher education or vocational training institution, provided they are 30 or younger and not already covered by another medical plan. The state covers contributions for public-sector students. Registration happens each year through an online form on your university's platform — for Mohammed V University in Rabat, for instance, at etu.um5.ac.ma — after which the institution forwards the request to CNOPS (Caisse Nationale des Organismes de Prévoyance Sociale). CNOPS then processes the file within a maximum of 30 days, and reimbursement tracking is done through the cnops.org.ma portal.",
        "For student jobs and internships, the available sources are notably vaguer than for AMO — we'd rather say so honestly than invent figures. The positions most commonly cited for Moroccan students include seasonal work in tourism and hospitality, private tutoring, call centers, and reception roles. No reliable, verifiable pay scale was found for these roles at the time of writing, so we won't publish a figure until one is confirmed by a solid source.",
        "For post-graduation job placement, ANAPEC (Agence Nationale de Promotion de l'Emploi et des Compétences) is the reference public agency. Its flagship program, IDMAJ, supports professional insertion through paid internships for young graduates. Registration is done online at anapec.org: create an account, submit documents (national ID copy, diploma copies, an up-to-date CV), then visit the nearest ANAPEC agency to finalize the file. A complementary scheme, TAHFIZ, encourages employers to hire young graduates by reducing their social contributions — a mechanism that indirectly benefits candidates.",
        "As with previous episodes, this guide stays deliberately cautious about what isn't verifiable: exact IDMAJ internship amounts and student job pay rates change and aren't systematically published — better to confirm directly with the ANAPEC agency or the employer in question than to rely on an unsourced figure."
      ]
    },
    heroImage: '/banners/banner_lifestyle_sante_jobs.jpg',
    heroImageCaption: {
      fr: "Illustration : campus universitaire, carte d'assurance santé et ordinateur portable — le quotidien administratif étudiant à Rabat.",
      ar: 'رسم توضيحي: حرم جامعي، بطاقة تأمين صحي وحاسوب محمول — الحياة الإدارية اليومية للطالب بالرباط.',
      en: "Illustration: university campus, health insurance card and laptop — the everyday administrative side of student life in Rabat."
    },
    galleryImages: [],
    publishedAt: '2026-08-23',
    readTime: {
      fr: '3 min',
      ar: '٣ دقائق',
      en: '3 min'
    },
    location: {
      fr: 'Rabat',
      ar: 'الرباط',
      en: 'Rabat'
    },
    author: {
      name: 'Nadia El Fassi',
      role: {
        fr: 'Rédactrice Lifestyle',
        ar: 'محررة أسلوب الحياة',
        en: 'Lifestyle Writer'
      },
      avatar: avatarNadia
    },
    isFeaturedHero: false,
    isEditorialPick: true,
    tags: [
      { fr: 'Vie Étudiante', ar: 'حياة الطلبة', en: 'Student Life' },
      { fr: 'AMO Étudiante', ar: 'التغطية الصحية الطلابية', en: 'Student Health Coverage' },
      { fr: 'ANAPEC', ar: 'ANAPEC', en: 'ANAPEC' },
      { fr: 'Jobs Étudiants', ar: 'العمل الطلابي', en: 'Student Jobs' }
    ],
    relatedSlugs: ['transport-rabat-etudiant-tramway-taxi', 'guide-etudiant-rabat-logement-forfaits', 'guide-etudiant-rabat'],
    faq: [
      {
        question: {
          fr: "L'AMO est-elle vraiment gratuite pour les étudiants ?",
          ar: 'هل التغطية الصحية AMO مجانية فعلاً للطلبة؟',
          en: 'Is student AMO coverage really free?'
        },
        answer: {
          fr: "Oui, pour les étudiants inscrits régulièrement dans l'enseignement supérieur ou la formation professionnelle, âgés de 30 ans ou moins, et non déjà couverts par une autre assurance médicale.",
          ar: 'نعم، بالنسبة للطلبة المسجلين بانتظام في التعليم العالي أو التكوين المهني، البالغين 30 سنة أو أقل، وغير المستفيدين مسبقاً من تأمين صحي آخر.',
          en: 'Yes, for students regularly enrolled in higher education or vocational training, aged 30 or under, and not already covered by another medical plan.'
        }
      },
      {
        question: {
          fr: "Comment s'inscrire à l'AMO étudiante ?",
          ar: 'كيف يتم التسجيل في التغطية الصحية الطلابية AMO؟',
          en: 'How do you register for student AMO coverage?'
        },
        answer: {
          fr: "Via un formulaire électronique annuel sur la plateforme de votre université (etu.um5.ac.ma pour l'UM5), qui transmet ensuite votre dossier à la CNOPS, traité sous 30 jours maximum.",
          ar: 'عبر استمارة إلكترونية سنوية على منصة جامعتكم (etu.um5.ac.ma بالنسبة لجامعة محمد الخامس)، التي تحيل بعدها ملفكم إلى CNOPS، الذي يعالجه في أجل أقصاه 30 يوماً.',
          en: "Through an annual online form on your university's platform (etu.um5.ac.ma for UM5), which then forwards your file to CNOPS, processed within a maximum of 30 days."
        }
      },
      {
        question: {
          fr: "Combien paie-t-on pour un stage IDMAJ via l'ANAPEC ?",
          ar: 'كم يُدفع مقابل تدريب IDMAJ عبر ANAPEC؟',
          en: 'How much do IDMAJ internships via ANAPEC pay?'
        },
        answer: {
          fr: "Nous n'avons pas trouvé de montant fiable et vérifiable au moment de la rédaction — mieux vaut se renseigner directement auprès de l'agence ANAPEC ou de l'employeur.",
          ar: 'لم نعثر على مبلغ موثوق وقابل للتحقق وقت كتابة هذا المقال — الأفضل الاستفسار مباشرة لدى وكالة ANAPEC أو صاحب العمل.',
          en: "We couldn't find a reliable, verifiable amount at the time of writing — best to check directly with the ANAPEC agency or the employer."
        }
      }
    ]
  },
  {
    id: 'art-24',
    slug: 'corniche-bouregreg-plus-beaux-points-de-vue-rabat',
    category: 'lifestyle',
    categoryLabel: {
      fr: 'Guide Pratique',
      ar: 'دليل عملي',
      en: 'Practical Guide'
    },
    title: {
      fr: 'La Corniche Bouregreg et les plus beaux points de vue de Rabat',
      ar: 'كورنيش أبي رقراق وأجمل نقاط الإطلالة بالرباط',
      en: "Corniche Bouregreg and Rabat's Best Viewpoints"
    },
    subtitle: {
      fr: "Au-delà des Oudayas et de Chellah déjà couverts dans notre itinéraire, la promenade du Bouregreg et deux adresses avec vue méritent le détour.",
      ar: 'إلى جانب الأوداية وشالة اللتين سبق تناولهما في مقال البرنامج اليومي، يستحق كورنيش أبي رقراق وعنوانان بإطلالة مميزة زيارة خاصة.',
      en: "Beyond the Oudayas and Chellah already covered in our day-trip itinerary, the Bouregreg promenade and two spots with a view are worth the detour."
    },
    excerpt: {
      fr: "La Corniche Bouregreg, artère de promenade entre Rabat et Salé, plus deux adresses vérifiées avec vue sur la vallée — un complément à notre itinéraire d'une journée, pas une redite.",
      ar: 'كورنيش أبي رقراق، شريان التنزه بين الرباط وسلا، إضافة إلى عنوانين موثقين بإطلالة على الوادي — تكملة لمقال برنامجنا اليومي، وليس تكراراً له.',
      en: "The Corniche Bouregreg, the promenade linking Rabat and Salé, plus two verified spots with a view over the valley — a complement to our day-trip itinerary, not a repeat of it."
    },
    body: {
      fr: [
        "Notre itinéraire d'une journée à Rabat couvre déjà la Kasbah des Oudayas, le Café Maure et Chellah — trois valeurs sûres pour la vue. Cet article se concentre volontairement sur ce qui n'y figure pas encore, à commencer par la Corniche Bouregreg.",
        "La Corniche Bouregreg est la promenade aménagée le long de l'avenue Al Marsa, sur la rive qui relie Rabat et Salé de part et d'autre du fleuve, à proximité de la Kasbah des Oudayas, de la Tour Hassan et de la médina. On y marche, on y fait du vélo, on y pique-nique dans des espaces verts aménagés, et on peut traverser le Bouregreg en petite embarcation reliant les deux rives. Le fleuve a longtemps servi de route commerciale entre les deux villes, et des investissements urbains récents ont modernisé les quais et créé des zones de loisirs le long du parcours.",
        "Pour dîner avec vue sur l'eau, le Dhow, restaurant et lounge installé sur un bateau amarré Quai de Bouregreg, avenue Al Marsa, propose une vue panoramique sur le fleuve et la ville — une option à considérer pour un dîner plutôt qu'un déjeuner rapide, sans que nous ayons de retour vérifié sur les prix ou la carte au moment de la rédaction.",
        "Du côté de Chellah, La Ciconia, café-restaurant situé aux abords du site archéologique, offre une vue dégagée sur la Tour Mohammed VI et la vallée du Bouregreg, dans un cadre végétalisé, avec salades et jus proposés en carte — une halte à envisager après la visite de Chellah plutôt qu'un point de passage obligé en soi.",
        "Nous avons volontairement écarté certaines adresses de rooftop repérées en recherche mais dont nous n'avons pas pu confirmer indépendamment les détails (horaires, accès, existence actuelle) — nous préférons publier moins d'adresses mais toutes vérifiées.",
        "Pour la suite du programme journée ou week-end, notre itinéraire complet reste le point de départ ; ce guide en est le complément, pas le remplaçant."
      ],
      ar: [
        "يغطي مقال برنامجنا اليومي بالرباط بالفعل قصبة الأوداية، المقهى المغربي (Café Maure) وشالة — ثلاث قيم مضمونة للإطلالة. يركز هذا المقال عمداً على ما لم يُذكر بعد، بدءاً بكورنيش أبي رقراق.",
        "كورنيش أبي رقراق هو الممشى المهيأ على طول شارع المرسى، على الضفة التي تربط الرباط وسلا على جانبي النهر، بالقرب من قصبة الأوداية وصومعة حسان والمدينة القديمة. يمكن التنزه سيراً، ركوب الدراجات، التنزه في المساحات الخضراء المهيأة، وعبور أبي رقراق بقارب صغير يربط الضفتين. لطالما كان النهر طريقاً تجارياً بين المدينتين، وساهمت استثمارات حضرية حديثة في تحديث الأرصفة وإنشاء مناطق ترفيهية على طول المسار.",
        "لتناول العشاء بإطلالة على الماء، يقترح مطعم وصالة Le Dhow، المُقام على قارب راسٍ برصيف أبي رقراق بشارع المرسى، إطلالة بانورامية على النهر والمدينة — خيار يُنظر فيه للعشاء أكثر من الغداء السريع، دون أن نتوفر على تقييم موثق للأسعار أو القائمة وقت كتابة هذا المقال.",
        "بالقرب من شالة، يوفر La Ciconia، وهو مقهى ومطعم قريب من الموقع الأثري، إطلالة مفتوحة على صومعة محمد السادس ووادي أبي رقراق، في محيط أخضر، مع سلطات وعصائر ضمن قائمته — محطة يُنظر فيها بعد زيارة شالة أكثر من كونها محطة إلزامية بحد ذاتها.",
        "استبعدنا عمداً بعض عناوين الـrooftop التي رصدناها أثناء البحث لكن لم نتمكن من التحقق منها بشكل مستقل (المواقيت، الولوج، الوجود الفعلي حالياً) — نفضل نشر عدد أقل من العناوين لكن كلها موثقة.",
        "لبرنامج يوم كامل أو نهاية أسبوع، يبقى مقال برنامجنا اليومي الكامل نقطة الانطلاق؛ هذا الدليل يكمّله، ولا يحل محله."
      ],
      en: [
        "Our day-trip itinerary for Rabat already covers the Kasbah des Oudayas, Café Maure, and Chellah — three reliable picks for a view. This article deliberately focuses on what isn't in there yet, starting with the Corniche Bouregreg.",
        "The Corniche Bouregreg is the developed promenade running along Avenue Al Marsa, on the bank connecting Rabat and Salé on either side of the river, near the Kasbah des Oudayas, the Hassan Tower, and the medina. You can walk it, cycle it, picnic in landscaped green spaces, and cross the Bouregreg by small boat linking the two banks. The river long served as a trade route between the two cities, and recent urban investment has modernized the docks and created recreation zones along the route.",
        "For dinner with a water view, Le Dhow, a restaurant and lounge set on a boat moored at Quai de Bouregreg, Avenue Al Marsa, offers panoramic views of the river and city — worth considering for dinner rather than a quick lunch, though we have no verified feedback on pricing or the menu at the time of writing.",
        "Near Chellah, La Ciconia, a café-restaurant close to the archaeological site, offers an open view of the Mohammed VI Tower and the Bouregreg valley in a green setting, with salads and juices on the menu — a stop worth considering after visiting Chellah rather than a must on its own.",
        "We deliberately left out a few rooftop spots surfaced during research whose details (hours, access, whether they're currently operating) we couldn't independently confirm — we'd rather publish fewer addresses, all verified, than more with gaps.",
        "For a full day or weekend program, our complete itinerary remains the starting point; this guide is its complement, not a replacement."
      ]
    },
    heroImage: '/banners/banner_lifestyle_corniche.jpg',
    heroImageCaption: {
      fr: 'Illustration : la Corniche Bouregreg au coucher du soleil, avec la Kasbah des Oudayas et Salé en arrière-plan.',
      ar: 'رسم توضيحي: كورنيش أبي رقراق عند غروب الشمس، مع قصبة الأوداية وسلا في الخلفية.',
      en: 'Illustration: the Corniche Bouregreg at sunset, with the Kasbah des Oudayas and Salé in the background.'
    },
    galleryImages: [],
    publishedAt: '2026-08-23',
    readTime: {
      fr: '3 min',
      ar: '٣ دقائق',
      en: '3 min'
    },
    location: {
      fr: 'Rabat & Salé',
      ar: 'الرباط وسلا',
      en: 'Rabat & Salé'
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
      { fr: 'Corniche Bouregreg', ar: 'كورنيش أبي رقراق', en: 'Corniche Bouregreg' },
      { fr: 'Points de Vue', ar: 'نقاط الإطلالة', en: 'Viewpoints' },
      { fr: 'Chellah', ar: 'شالة', en: 'Chellah' },
      { fr: 'Guide Pratique', ar: 'دليل عملي', en: 'Practical Guide' }
    ],
    relatedSlugs: ['que-faire-a-rabat-itineraire', 'plages-rabat-guide', 'so-lounge-souissi'],
    faq: [
      {
        question: {
          fr: "Qu'est-ce que la Corniche Bouregreg ?",
          ar: 'ما هو كورنيش أبي رقراق؟',
          en: 'What is the Corniche Bouregreg?'
        },
        answer: {
          fr: "La promenade aménagée le long de l'avenue Al Marsa, reliant les rives de Rabat et Salé, avec pistes pour la marche et le vélo, espaces verts, et une traversée en petite embarcation entre les deux villes.",
          ar: 'الممشى المهيأ على طول شارع المرسى، الذي يربط ضفتي الرباط وسلا، مع مسارات للمشي وركوب الدراجات، ومساحات خضراء، وعبور بقارب صغير بين المدينتين.',
          en: "The developed promenade along Avenue Al Marsa, connecting the Rabat and Salé riverbanks, with walking and cycling paths, green spaces, and a small-boat crossing between the two cities."
        }
      },
      {
        question: {
          fr: 'Cet article répète-t-il notre itinéraire déjà publié ?',
          ar: 'هل يكرر هذا المقال برنامجنا اليومي المنشور سابقاً؟',
          en: 'Does this article repeat our already-published itinerary?'
        },
        answer: {
          fr: "Non : la Kasbah des Oudayas, le Café Maure et Chellah sont déjà couverts en détail dans notre itinéraire d'une journée. Cet article se concentre sur la Corniche Bouregreg et deux adresses supplémentaires vérifiées.",
          ar: 'لا: تم تناول قصبة الأوداية والمقهى المغربي وشالة بالتفصيل في مقال برنامجنا اليومي. يركز هذا المقال على كورنيش أبي رقراق وعنوانين إضافيين موثقين.',
          en: "No — the Kasbah des Oudayas, Café Maure, and Chellah are already covered in detail in our day-trip itinerary. This article focuses on the Corniche Bouregreg and two additional verified spots."
        }
      },
      {
        question: {
          fr: 'Où dîner avec une vue sur le Bouregreg ?',
          ar: 'أين يمكن تناول العشاء بإطلالة على أبي رقراق؟',
          en: 'Where can you have dinner with a view of the Bouregreg?'
        },
        answer: {
          fr: "Le Dhow, restaurant-lounge sur un bateau amarré Quai de Bouregreg, avenue Al Marsa, propose une vue panoramique sur le fleuve — nous n'avons toutefois pas de retour vérifié sur les prix ou la carte.",
          ar: 'Le Dhow، مطعم-صالة على متن قارب راسٍ برصيف أبي رقراق بشارع المرسى، يوفر إطلالة بانورامية على النهر — لا نتوفر مع ذلك على تقييم موثق للأسعار أو القائمة.',
          en: "Le Dhow, a restaurant-lounge on a boat moored at Quai de Bouregreg, Avenue Al Marsa, offers a panoramic river view — though we have no verified feedback on pricing or the menu."
        }
      }
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
  },
  sortir: {
    title: {
      fr: 'Sortir à Rabat',
      ar: 'السهر بالرباط',
      en: 'Rabat Nightlife'
    },
    subtitle: {
      fr: 'Bars à cocktails, rooftops, lounges et clubs — les adresses vérifiées pour sortir à Rabat, en préparation.',
      ar: 'حانات الكوكتيل، الأسطح المفتوحة، الصالات والنوادي الليلية — عناوين موثقة للسهر بالرباط، قيد الإعداد.',
      en: 'Cocktail bars, rooftops, lounges and clubs — verified addresses for going out in Rabat, coming soon.'
    }
  }
};
