
import { PostType, BlogPost } from './types';

export const MOCK_POSTS: BlogPost[] = [
  // --- BOOK REVIEWS: ADVENTURE (Preserved) ---
  {
    id: 'adv-1',
    type: PostType.BOOK_REVIEW,
    title: 'Des frères en finale',
    author: 'Fabrice Colin',
    date: '2024-01-01',
    rating: 4, // 8/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Freres+En+Finale',
    content: "",
    summary: "L'euro débute dans 3 semaines. Taleb El Kader passionné de foot ne le ratera absolument pas. Mais une vilaine blessure le rend triste et renfermé son frère Ilian fera tout pour l'aider ...",
    critique: "Je recommande ce livre surtout aux passionnés de foot, les illustrations sont assez fréquentes donc c'est assez facile a lire.",
    ageRecommendation: "A partir de 9 ans",
    reviewerName: "Benjamin 10 ans",
    purchaseLink: "https://bit.ly/3ce8pee",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-2',
    type: PostType.BOOK_REVIEW,
    title: 'Alex Rider : Stormbreaker',
    author: 'Anthony Horowitz',
    date: '2024-01-02',
    rating: 5, // 9.5/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Alex+Rider',
    content: "",
    summary: "Alex Rider, jeune homme de 14 ans est engagé par le MI6 à la suite de la mort de son tuteur, lui même espion pour le MI6. Il travaillera cependant au fil des tomes pour le FBI, la CIA, et une organisation mafieuse du nom de Scorpia...",
    critique: "Romans d'espionnage très, très, très captivants ! Cette série est un véritable coup de coeur et cela donne à la fin de chaque tome l'envie au lecteur de lire le suivant.",
    ageRecommendation: "A lire à partir de 11 ans",
    reviewerName: "Maxime 11 ans et demi",
    purchaseLink: "https://bit.ly/3rpyJCj",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-3',
    type: PostType.BOOK_REVIEW,
    title: 'Lancelot Agent Secret',
    author: 'Vladimir Volkoff',
    date: '2024-01-03',
    rating: 4, // 8.5/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Lancelot',
    content: "",
    summary: "Lancelot, est agent secret dans l'agence ultra-secrete de renseignements du S.N.I.F. Il vivra un grand nombre d'aventures pleines de suspense ...",
    critique: "Romans très bien écrits, captivants et pleins de suspense. Il n'est pas nécessaire de les lire à la suite les histoires n'ayant pas de liens entres elles.",
    ageRecommendation: "A partir de 10/11 ans",
    reviewerName: "Maxime 12 ans",
    purchaseLink: "https://bit.ly/3v5HLgy",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-4',
    type: PostType.BOOK_REVIEW,
    title: 'Conspiration 365 : Janvier',
    author: 'Gabrielle Lord',
    date: '2024-01-04',
    rating: 5, // 10/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Conspiration+365',
    content: "",
    summary: "La veille du Nouvel An, Cal, 15 ans, reçoit un terrible avertissement : \" Ils ont tué ton père. Ils te tueront. Tu dois te cacher pendant un an!\" Commence alors pour lui une folle course contre la montre. Chaque seconde qui passe risque d'être la dernière... Il a 365 jours pour survivre.",
    critique: "On adore le concept de cette série de Gabrielle Lord, 12 tomes, 12 mois d'aventures palpitantes aux cotés de Cal, le héros de cette histoire.",
    ageRecommendation: "A partir de 11 ans",
    reviewerName: "Maxime 12 ans",
    purchaseLink: "https://bit.ly/3boLYDZ",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-5',
    type: PostType.BOOK_REVIEW,
    title: 'Les ombres de Kerohan',
    author: 'N-M Zimmermann',
    date: '2024-01-05',
    rating: 3, // 6.5/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Les+Ombres',
    content: "",
    summary: "L'histoire de Silvia qui se voit obligée de passer ses vacances dans le mystérieux manoir de son oncle. Elle est loin d'être prête à ce qui l'y attend...",
    critique: "Ce livre en fera frissonner plus d'un ! Amoureux de romans policiers, fantastiques ou de la Bretagne vous serez séduits ! Ce n'est pas un « coup de cœur » mais reste un très bon livre.",
    ageRecommendation: "A partir de 10/11 ans",
    reviewerName: "Maxime 12 ans",
    purchaseLink: "https://bit.ly/38dMNh5",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-6',
    type: PostType.BOOK_REVIEW,
    title: "La vérité sur l'Affaire Harry Quebert",
    author: 'Joël Dicker',
    date: '2024-01-06',
    rating: 5,
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Harry+Quebert',
    content: "",
    summary: "L'histoire incroyable de l'enquête de l'écrivain Marcus Goldman à propos de l'accusation de meurtre dont fait l'objet son ancien professeur Harry Quebert. Persuadé de son innocence il remuera ciel et terre pour le prouver et provoquera de multiples rebondissements.",
    critique: "Enorme coup de cœur pour cet admirable roman ! un policier ? un roman sentimental ? On ne pourrait pas le mettre dans une case précise. A lire absolument !",
    ageRecommendation: "A partir de 14 ans",
    reviewerName: "Maxime 15 ans",
    purchaseLink: "https://bit.ly/3c8zqji",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-7',
    type: PostType.BOOK_REVIEW,
    title: '20 000 lieux sous les mers',
    author: 'Jules Verne',
    date: '2024-01-07',
    rating: 3, // 6.5/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=20000+Lieux',
    content: "",
    summary: "Le professeur Aronnax, son domestique Conseil et le harponneur Ned Land, qui cherchaient à capturer un fantastique monstre marin, se retrouvent prisonniers du capitaine Némo, à bord de son sous-marin le Nautilus. Quel lourd secret cache Némo pour vouloir les retenir ainsi à jamais ?",
    critique: "Très beau roman avec une histoire originale, cependant le livre est difficile à lire et il faut s'accrocher pour le finir !",
    ageRecommendation: "A partir de 12 ans",
    reviewerName: "Maxime 13 ans",
    purchaseLink: "https://bit.ly/3tooYIi",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-8',
    type: PostType.BOOK_REVIEW,
    title: 'Le mystérieux cercle Benedict',
    author: 'T-L Stewart',
    date: '2024-01-08',
    rating: 4, // 9/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Cercle+Benedict',
    content: "",
    summary: "Quatre orphelins surdoués aux tempéraments explosifs infiltrent un pensionnat dirigé par un savant fou maléfique.",
    critique: "Roman exceptionnel ! Ce livre est un magnifique mélange entre roman policier et roman fantastique. Une fin absolument surprenante et des héros très attachants, à lire au plus vite !",
    ageRecommendation: "A partir de 10 ans",
    reviewerName: "Maxime 12 ans",
    purchaseLink: "https://bit.ly/30nBJJL",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-9',
    type: PostType.BOOK_REVIEW,
    title: 'Le comte de Monte-Cristo',
    author: 'Alexandre Dumas',
    date: '2024-01-09',
    rating: 4, // 8/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Monte+Cristo',
    content: "",
    summary: "Nous avons ici un grand classique de la littérature française ! Les amateurs de romans historiques ne seront pas déçus, tant l'histoire de la vengeance d'Edmond Dantès est passionnante et pleine de rebondissements. Cependant je ne conseille qu'aux lecteurs les plus aguerris de se lancer dans sa lecture car l'œuvre complète (les deux tomes) fait plus de 2000 pages (!) et certains passages sont un peu longs.",
    critique: "J'ai beaucoup apprécié ce livre car l'histoire est passionnante.",
    ageRecommendation: "A partir de 12-13 ans",
    reviewerName: "Maxime 14 ans",
    purchaseLink: "https://bit.ly/2PCvYGx",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-10',
    type: PostType.BOOK_REVIEW,
    title: 'Une famille aux petits oignons',
    author: 'Jean-Philippe Arrou-Vignod',
    date: '2024-01-10',
    rating: 4, // 9/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Famille+Oignons',
    content: "",
    summary: "L'histoire d'une famille qui a six enfants : Jean-A, Jean-B, Jean-C, Jean-D, Jean-E, Jean-F, d'un père bricoleur et médecin et d'une mère très organisée. Vous imaginez bien que leur maison n'est jamais calme ! Il arrive toute sorte d'aventures à cette famille...",
    critique: "J'ai beaucoup apprécié ce livre car il est très drôle et facile à lire. On a pas besoin d'être un passionné de lecture pour le lire. Je recommande beaucoup ce livre.",
    ageRecommendation: "A partir de 9 ans",
    reviewerName: "Inès 10 ans",
    purchaseLink: "https://bit.ly/2OtiRXk",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-11',
    type: PostType.BOOK_REVIEW,
    title: "J'irai tuer pour vous",
    author: 'Henri Loevenbruck',
    date: '2024-01-11',
    rating: 5, // 9.5/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Jirai+Tuer',
    content: "",
    summary: "1985, Paris est frappé par des attentats comme le pays en a rarement connu. Dans ce contexte, Marc Masson, un déserteur parti à l'aventure en Amérique du Sud, est soudain rattrapé par la France. Recruté par la DGSE, il est officiellement agent externe mais, officieusement, il va devenir assassin pour le compte de l'État...",
    critique: "Je vous conseille vivement d'aller lire ce Thriller/Roman d'espionnage qui est vraiment super intéressant ! En plus d'une histoire bien construite et pleine de suspense, ce livre vous en apprendra sur le fonctionnement des services secrets français dans les années 80 ainsi que sur la géopolitique de l'époque. A ne pas rater !",
    ageRecommendation: "A partir de 14 ans",
    reviewerName: "Maxime 15 ans",
    purchaseLink: "https://bit.ly/3kSaf8y",
    genre: 'ADVENTURE'
  },
  {
    id: 'adv-12',
    type: PostType.BOOK_REVIEW,
    title: 'Retour de service',
    author: 'John le Carré',
    date: '2024-01-12',
    rating: 3, // 7/10
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Retour+De+Service',
    content: "",
    summary: "Nat, un ex-agent des services secrets britanniques accepte une dernière mission : diriger le Refuge, une sous station du département Russie devenue parfaitement inutile à cause de l'incompétence des agents y travaillent...",
    critique: "Très bon roman d'espionnage, ce qui est intéressant ici, c'est que l'intrigue se déroule de nos jours , ce qui permet de mieux s'identifier aux personnages mais également de découvrir les rouages des services secrets à l'époque contemporaine. L'unique point faible de ce livre est tout de même son manque d'action.",
    ageRecommendation: "A partir de 14 ans",
    reviewerName: "Maxime 15 ans",
    purchaseLink: "https://bit.ly/30rO4MZ",
    genre: 'ADVENTURE'
  },

  // --- BOOK REVIEWS: BANDES DESSINÉES (COMIC) ---
  {
    id: 'bd-1',
    type: PostType.BOOK_REVIEW,
    title: 'Lumière dans la tour',
    author: 'Marie-Mad Bourdin',
    date: '2024-01-20',
    rating: 3,
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Lumiere+Tour',
    content: "",
    summary: "Guy et Martine sont en vacances chez oncle Urbain malade. Pendant que leur maman s'occupe du pauvre homme, les enfants découvrent qu'un mystère se noue autour de Grégoire, son aide. D'exploration en lumière étrange, les enfants devront faire preuve de perspicacité et de courage.",
    critique: "BD très simple à lire avec de beaux dessins. Cette histoire manque peut-être de suspense.",
    ageRecommendation: "A partir de 8 ans",
    purchaseLink: "https://bit.ly/2MVrrxz",
    genre: 'COMIC'
  },
  {
    id: 'bd-2',
    type: PostType.BOOK_REVIEW,
    title: 'Barbe Rouge (L\'intégrale 3)',
    author: 'J-M Charlier & V. Hubinon',
    date: '2024-01-21',
    rating: 4,
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Barbe+Rouge',
    content: "",
    summary: "Holà, hardis moussaillons ! Barbe Rouge, le terrible pirate créé par Jean-Michel Charlier et Victor Hubinon, est de retour dans cette superbe intégrale qui reprend trois des meilleurs volumes de la série. Batailles navales, trésors cachés, trahisons et têtes de mort sont à l'honneur dans cet archétype inégalé de la grande aventure maritime !",
    critique: "Magnifique recueil de 3 histoires de Barbe Rouge. Les dessins sont magnifiques mais l'histoire est assez longue et difficile à lire.",
    ageRecommendation: "A partir de 12 ans",
    purchaseLink: "https://bit.ly/3eifiOY",
    genre: 'COMIC'
  },
  {
    id: 'bd-3',
    type: PostType.BOOK_REVIEW,
    title: 'Tintin au pays des soviets',
    author: 'Hergé',
    date: '2024-01-22',
    rating: 5,
    coverUrl: 'https://placehold.co/400x600/e2e8f0/1e293b?text=Tintin+Soviets',
    content: "",
    summary: "Notre héros, accompagné dès la première case par Milou, part comme reporter en Russie. Sa mission : tenir les jeunes lecteurs du journal Le Petit Vingtième au courant de ce qui se passe en Union Soviétique. Son reportage sera semé d'embûches et il devra faire preuve de courage et d'audace pour parvenir a se tirer de se tirer de ce pétrin",
    critique: "Très belle réédition en couleur du tome.1 de Tintin. De beaux dessins, et une histoire intéressante tout y est ! Nous vous le recommandons fortement",
    ageRecommendation: "A partir de 9 ans",
    purchaseLink: "https://bit.ly/3rqkbIN",
    genre: 'COMIC'
  },

  // --- BOOK REVIEWS: HISTORIQUES (HISTORY) ---
  {
    id: 'hist-1',
    type: PostType.BOOK_REVIEW,
    title: "L'espion de Richelieu",
    author: 'Claude Merle',
    date: '2024-01-30',
    rating: 4, // 8.5/10
    coverUrl: 'https://placehold.co/400x600/f1f5f9/475569?text=Espion+Richelieu',
    content: "",
    summary: "Les aventures d'un jeune soldat enrôlé comme espion au service du mystérieux cardinal de Richelieu...",
    critique: "Coup de coeur ! Ce livre, destiné à tous les amateurs de romans historiques et d'espionnage, est un vrai bijou ! Ici Claude Merle parvient à relater des faits complexes avec des mots simples.",
    ageRecommendation: "A partir de 11 ans.",
    reviewerName: "Maxime 12 ans et demi",
    purchaseLink: "https://bit.ly/3ej8VKW",
    genre: 'HISTORY'
  },
  {
    id: 'hist-2',
    type: PostType.BOOK_REVIEW,
    title: 'Le garçon au sommet de la montagne',
    author: 'John Boyne',
    date: '2024-01-31',
    rating: 5, // 9/10
    coverUrl: 'https://placehold.co/400x600/f1f5f9/475569?text=Garcon+Sommet',
    content: "",
    summary: "À l'aube de la Seconde Guerre mondiale, Pierrot vit à Paris avec ses parents, ignorant tout des nazis. Devenu orphelin, il est envoyé chez sa tante, en Allemagne, dans une maison au sommet d'une montagne. Ce n'est pas une maison ordinaire. Le Berghof est la résidence d'Adolf Hitler. Pierrot va découvrir là un autre monde, fascinant et monstrueux.",
    critique: "Histoire très émouvante de Pierrot, ce petit garçon innocent qui vous fera vivre à travers ses yeux sa découverte du nazisme. Pour tous les amateurs de romans historiques. Un livre que je vous recommande chaudement.",
    ageRecommendation: "A partir de 11 ans.",
    reviewerName: "Maxime 12 ans",
    purchaseLink: "https://bit.ly/3Op3X0g",
    genre: 'HISTORY'
  },
  {
    id: 'hist-3',
    type: PostType.BOOK_REVIEW,
    title: 'Les derniers jours de nos pères',
    author: 'Joël Dicker',
    date: '2024-02-01',
    rating: 5, // 11/10 !
    coverUrl: 'https://placehold.co/400x600/f1f5f9/475569?text=Derniers+Jours',
    content: "",
    summary: "Fin 1940, le jeune Paul-Émile quitte Paris pour Londres dans l'espoir de rejoindre la Résistance. Rapidement recruté par les services secrets britanniques, il est intégré à un groupe de Français qui deviendront ses compagnons de cœur et d'armes. Entraînés et formés de façon intense aux quatre coins de l'Angleterre, ceux qui passeront la sélection se verront bientôt renvoyés en France occupée pour contribuer à la formation des réseaux de résistance.",
    critique: "Je crois que jamais un autre roman ne m'a jamais procuré plus d'émotions que celui-ci ! Pour un lecteur passionné d'histoire comme moi, que demander de plus ? L'intrigue se déroulant au cours de la Seconde Guerre Mondiale, vous en apprendrez beaucoup mais ce n'est pas tout ! En parallèle vous vous attacherez aux personnages, vous vivrez l'histoire avec eux, ressentirez leurs craintes, leurs angoisses, mais aussi leurs joies !",
    ageRecommendation: "A partir de 13 ans.",
    reviewerName: "Maxime 14 ans et demi",
    purchaseLink: "https://bit.ly/3V4nJ60",
    genre: 'HISTORY'
  },
  {
    id: 'hist-4',
    type: PostType.BOOK_REVIEW,
    title: 'Un ado nommé Churchill',
    author: 'Sophie Doudet',
    date: '2024-02-02',
    rating: 4, // 8/10
    coverUrl: 'https://placehold.co/400x600/f1f5f9/475569?text=Churchill',
    content: "",
    summary: "L'histoire de l'enfance agitée du futur Premier Ministre Anglais.",
    critique: "Cette biographie vous en apprendra beaucoup sur le fameux Premier Ministre ayant fait face aux nazis pendant la Seconde Guerre Mondiale, il est destiné aux passionnés d'histoire.",
    ageRecommendation: "A partir de 12 ans.",
    reviewerName: "Maxime 13 ans",
    purchaseLink: "https://bit.ly/3rwCVqs",
    genre: 'HISTORY'
  },
  {
    id: 'hist-5',
    type: PostType.BOOK_REVIEW,
    title: '1984',
    author: 'George Orwell',
    date: '2024-02-03',
    rating: 3, // 6.5/10
    coverUrl: 'https://placehold.co/400x600/f1f5f9/475569?text=1984',
    content: "",
    summary: "Londres, 1984. Smith est un employé du Parti chargé de réviser l'Histoire. Dans un monde où toute sentimentalité est interdite, il est attiré par Julia, une femme peut-être dangereuse pour lui. Ensemble, ils vont tenter d'échapper à l'emprise du gouvernement et de Big Brother, le chef omnipotent du gouvernement. Mais est-ce possible dans un monde où tout fait et geste est surveillé et enregistré ?",
    critique: "Un livre intéressant. Cependant pour tout comprendre, il vous faudra de longues minutes pour déchiffrer chaque phrase tant l'écriture est complexe. Personnellement, j'en ai perdu le plaisir de lire, malgré le fait que le contenu soit très intéressant.",
    ageRecommendation: "A partir de 15 ans.",
    reviewerName: "Maxime 15 ans",
    purchaseLink: "https://bit.ly/3v5SBDg",
    genre: 'HISTORY'
  },
  {
    id: 'hist-6',
    type: PostType.BOOK_REVIEW,
    title: 'Petit Pays',
    author: 'Gaël Faye',
    date: '2024-02-04',
    rating: 5, // 9.5/10
    coverUrl: 'https://placehold.co/400x600/f1f5f9/475569?text=Petit+Pays',
    content: "",
    summary: "Ce roman raconte l'histoire d'un jeune garçon, Gabriel, qui grandit au Burundi dans une famille métisse. Alors que son enfance est paisible et heureuse, la guerre civile et le génocide rwandais bouleversent son quartier et tout bascule. Gabriel doit faire face à la violence qui l'entoure et se découvre métis, Tutsi et Français.",
    critique: "Le livre le plus touchant que je n'ai jamais lu ! Découvrir l'horreur du génocide rwandais à travers les yeux d'un jeune garçon de 10 ans est simplement bouleversant. Gabi est attachant, on s'attache un peu plus à ce qu'il incarne à chaque nouvelle page, on ressent d'abord ses joies et puis ses peurs. Il me faut cependant vous avertir que le livre est loin d'être facile à lire. Le style n'est ici pas le problème, la plume de Gaël Faye étant limpide. La difficulté est ici que, même vécue à travers les mots, la violence est insoutenable tant elle est extrême. Il ne faut pas avoir peur de lâcher quelques larmes !",
    ageRecommendation: "A partir de 16 ans.",
    reviewerName: "Maxime 16 ans",
    purchaseLink: "https://bit.ly/3JE5sKW",
    genre: 'HISTORY'
  },

  // --- BOOK REVIEWS: BIOGRAPHIES ---
  {
    id: 'bio-1',
    type: PostType.BOOK_REVIEW,
    title: 'Moi, Malala',
    author: 'Malala Yousafzai',
    date: '2024-02-10',
    rating: 5, // Implicit high rating
    coverUrl: 'https://placehold.co/400x600/f1f5f9/475569?text=Malala',
    content: "",
    summary: "L'autobiographie d'une jeune pakistanaise ayant lutté (luttant toujours d'ailleurs !) pour le droit à l'éducation des filles, elle fit face aux talibans ce qui lui valut de gros ennuis !",
    critique: "Un très beau livre, le format de l'auto biographie permet de mieux se rendre compte de ce que pouvait ressentir Malala à cette période et de mieux constater son incroyable courage. Un livre facile à lire (dans le sens de la compréhension du texte) et très enrichissant.",
    ageRecommendation: "A partir de 11 ans.",
    reviewerName: "Maxime 12 ans",
    purchaseLink: "https://bit.ly/2MUPZ9P",
    genre: 'BIOGRAPHY'
  },
  {
    id: 'bio-2',
    type: PostType.BOOK_REVIEW,
    title: 'Fouché',
    author: 'Stefan Zweig',
    date: '2024-02-11',
    rating: 5,
    coverUrl: 'https://placehold.co/400x600/f1f5f9/475569?text=Fouche',
    content: "",
    summary: "Une biographie de Joseph Fouché, un homme politique qui a su se maintenir au pouvoir à travers les régimes qui se sont succédés, de la Révolution Française à la Restauration...",
    critique: "Cette œuvre m'a permis de découvrir sous la très belle plume de Zweig la vie passionnante de Joseph Fouché. Peu connu du grand public, c'est pourtant un personnage clé de la fin du XVIIIe siècle et du début du XIXe. On découvre les multiples manœuvres qu'il a initié pendant cette période de troubles politiques, pour à chaque fois se maintenir à la tête de l'Etat. A ne pas manquer !",
    ageRecommendation: "A partir de 15 ans.",
    reviewerName: "Maxime 17 ans",
    purchaseLink: "https://amzn.to/3QGKeC3",
    genre: 'BIOGRAPHY'
  },

  // --- ESSAYS (ARTICLES) ---
  
  // POLITIQUE ET GÉOPOLITIQUE
  {
    id: 'e-1',
    type: PostType.ESSAY,
    category: 'POLITICS',
    title: 'Que penser de l\'européanisation de la force de dissuasion française ?',
    subtitle: 'Essai nucléaire français dans le Sahara en 1961',
    date: '30 mars 2025',
    readTime: '10 min',
    coverUrl: 'https://placehold.co/800x600/e5e7eb/1f2937?text=Essai+Nucleaire',
    content: `« La où croit le péril croît aussi ce qui sauve » écrivait Friedrich Hölderlin. Alors que les démocraties libérales européennes sont confrontées à la plus dangereuse menace qu'elles aient connue depuis la fin de la Seconde Guerre mondiale, la France a l'opportunité de s'en servir comme d'un levier pour retrouver une place de leader sur le Vieux Continent.

Il y a quelques semaines, l'idée d'une défense européenne pouvait encore passer pour un serpent de mer, lubie de quelques fous fédéralistes et de vieux généraux à la retraite vociférant sur les plateaux des chaînes de télévision. L'arrivée de Donald Trump à la Maison Blanche n'a pas tardé à remettre les pendules à l'heure. L'inquiétude face à l'unilatéralisme renouvelé des Etats-Unis et à l'impérialisme russe qui se conjuguent dans une internationale réactionnaire a bien réveillé les consciences.

Seulement, si un consensus est né à propos de la nécessité existentielle d'acquérir une autonomie stratégique européenne, les contours de celle-ci peinent à clairement se dessiner. Les propositions réalisables semblent avoir du mal à se substituer aux petites phrases des dirigeants. Parmi les rares idées avancées, il y a l'européanisation de la force de dissuasion nucléaire française. Alors serait-ce une bonne chose ?

Il faut tout d'abord battre en brèche l'idée selon laquelle l'européanisation de notre arme nucléaire reviendrait à en partager la décision finale d'utilisation. Celle-ci resterait entre les mains du Président de la République. Il s'agirait plutôt de modifier la doctrine française afin d'élargir le territoire qu'elle protège vers les Etats alliés. Pourtant, si ce changement majeur permettrait de rendre effective la solidarité européenne en matière de défense, certains persistent à la faire passer pour une mauvaise idée. Il convient donc de faire litière de certains préjugés : le coût d'une telle mesure resterait très mesuré, et elle s'avère nécessaire au vu du contexte.

Tout d'abord, il s'avère que l'européanisation de notre force de dissuasion est une opportunité inédite pour nos finances. Qui a dit que notre protection serait gratuite ? Il faudrait bien sûr la monnayer contre des euros que les Etats, effrayés par la menace russe et dont les dépenses en matière de défense ne cessent d'augmenter, n'auraient aucun mal à lâcher. Par là même, le problème du coût se mue en une opportunité de combler un déficit dont les pouvoirs publics peinent à se départir.

D'un autre côté, l'aversion d'une partie des commentateurs pour l'élargissement de notre force de dissuasion traduit une certaine indifférence pour la situation de nos alliés d'Europe de l'Est. Quand on sait les velléités impérialistes de Vladimir Poutine, il est naturel de s'étonner face à ces tergiversations. Alors que l'histoire illustre à maintes reprises l'inassouvissement de tout impérialisme, certains observateurs ne semblent pas s'émouvoir de celui du président russe. Auraient-ils oublié qu'avant d'arriver à nos frontières, de l'Autriche à Dantzig en passant par la Tchécoslovaquie, Hitler annexe dans l'indifférence la plus générale la moitié de l'Europe ? La même mécanique est aujourd'hui en route et il nous appartient de ne pas reproduire les mêmes erreurs que nos ancêtres. Ne soyons pas les nouveaux Marcel Déat qui refusait de mourir pour Dantzig quelques mois avant la guerre. Surtout qu'on ne parle pas là de mourir.

Bismarck disait : "La diplomatie sans les armes c'est la musique sans les instruments" et nous devons reconnaître cette triste réalité. Si les nombreuses tentatives de négociation avec Vladimir Poutine sont louables, la réalité impose un changement d'attitude. Par conséquent, des paroles il faut passer aux actes, parmi lesquels une force de dissuasion française dont bénéficierait toute l'Europe paraît être le plus adapté.`
  },

  // HISTOIRE
  {
    id: 'e-2',
    type: PostType.ESSAY,
    category: 'HISTORY',
    title: 'Les prix Nobel',
    subtitle: 'Alfred Nobel',
    date: 'il y a 7 ans',
    readTime: '3 min',
    coverUrl: 'https://placehold.co/800x600/e5e7eb/1f2937?text=Alfred+Nobel',
    content: `La fondation Nobel est crée suite à la mort à la fin du 19e siècle d'Alfred Nobel, scientifique suédois notamment reconnu pour avoir inventé la dynamite. Elle discerne chaque année des prix dans cinq catégories : la littérature, la paix, la physique, la chimie et la médecine pour récompenser les personnes qui ont rendu "les plus grands services à l'Humanité".

Ces prix ne prennent réellement d'importance qu'au moment où les américains commencent à s'y intéresser après la fin de la Seconde Guerre Mondiale.

Il n'y a pas de catégorie destinée aux mathématiques, chose surprenante considérant l'importance que beaucoup accordent aujourd'hui à la discipline. Plutôt que les légendes liant cette décision à des mésaventures conjugales de Mr. Nobel l'explication est plus rationnelle. Le scientifique n'aurait de son vivant jamais porté d'intérêt particulier aux mathématiques dont il ne voyait (sans doute à tord !) pas d'application directe au quotidien.

Article écrit par Maxime, 17 ans`
  },

  // SOCIÉTÉ
  {
    id: 'e-3',
    type: PostType.ESSAY,
    category: 'SOCIETY',
    title: 'Le système d\'appellation des ouragans',
    subtitle: 'Une convention météorologique',
    date: 'il y a 7 ans',
    readTime: '4 min',
    coverUrl: 'https://placehold.co/800x600/e5e7eb/1f2937?text=Ouragan',
    content: `Chaque année, l'Office Mondial de Météorologie détermine une liste de 21 prénoms qu'il attribue aux ouragans. Les prénoms masculins et féminins alternent. ceux commençant par Q, U, X, Y, Z ne sont pas utilisés, jugés trop durs à prononcer. Ces prénoms alternent par roulement, et ceux qui ont désignés des ouragans particulièrement meurtriers ou couteux [Irma; Katrina] sont retirés de la liste.

Il est arrivé, ces dernières années, que l'OMM soit à cours de prénom en fin d'année à cause d'un trop grand nombre d'ouragans.
Cette augmentation du nombre annuel d'ouragans peut avoir pour raison le réchauffement climatique. Cependant cette explication est nuancée par certains spécialistes, sans pour autant contester la réalité du phénomène climatique. Ils justifient cette augmentation par une amélioration des technologies satellites. Cela permet donc aux météorologues de capter plus de tempêtes.

Article écrit par Maxime, 17 ans`
  },

  // --- PRESS SUMMARIES ---
  {
    id: 'p-1',
    type: PostType.PRESS_SUMMARY,
    title: '« L\'IA ne se heurte pas à un mur. Mais les LLMs si » : Gary Marcus à propos de la dernière recherche d\'Apple - Dans Le Grand Continent',
    originalSource: 'Le Grand Continent',
    context: "Gary Marcus est un psychologue scientifique américain, spécialiste de l'intelligence artificielle",
    date: '2025-01-01',
    tags: ['IA', 'LLM', 'Gary Marcus'],
    summary: "Gary Marcus souligne une limite critique de l'IA générative : « exécuter ne signifie pas comprendre ». Les LLMs (Large Language Models) produisent des résultats convaincants sans véritable compréhension des concepts manipulés.\n\nL'IA générative ne surpasse pas les algorithmes spécialisés dans leurs domaines. On ne peut pas simplement déployer un LLM sur un problème complexe et espérer une résolution optimale.\n\nL'alignement désigne la nécessité d'assurer qu'un système d'IA poursuit des objectifs compatibles avec les intentions, valeurs et intérêts humains.\n\nMarcus propose une approche équilibrée : « l'objectif de l'AGI (Artificial General Intelligence) ne devrait pas être de répliquer parfaitement l'humain, mais de combiner le meilleur des deux mondes : l'adaptabilité humaine avec la force brute et la fiabilité computationnelle ».\n\nMalgré l'adoption massive de ChatGPT (qui dépasse maintenant Wikipedia en utilisation), Marcus avertit : « toute personne qui pense que les LLMs représentent un chemin direct vers une AGI capable de transformer radicalement la société pour le bien commun se berce d'illusions »."
  },
  {
    id: 'p-2',
    type: PostType.PRESS_SUMMARY,
    title: "Conférence de Yann le Cun, Apprentissage profond et au-delà : les nouveaux défis de l'IA",
    originalSource: 'Youtube - Ecole Nationale des Ponts et Chaussées',
    context: "Yann le Cun est un chercheur en intelligence artificielle franco-américain",
    date: '2025-01-15',
    tags: ['IA', 'Deep Learning', 'Yann Le Cun'],
    summary: "Une conférence passionnante de Yann le Cun qui aborde les limites actuelles de l'apprentissage profond (Deep Learning) et propose des pistes pour la prochaine génération d'intelligence artificielle. Il insiste sur le besoin de systèmes capables d'apprendre des modèles du monde, à la manière des humains et des animaux, plutôt que de simplement prédire le mot suivant. Pour lui, l'avenir réside dans l'apprentissage auto-supervisé et les architectures capables de raisonner et de planifier, dépassant ainsi les simples corrélations statistiques des modèles de langage actuels."
  },

  // --- CORRESPONDENCE ---
  {
    id: '4',
    type: PostType.CORRESPONDENCE,
    title: 'Chroniques du Brésil',
    recipient: 'João',
    date: '2025',
    intro: "L'actualité de son pays vue de l'intérieur – celle qui fait débat dans les rues, les universités et les familles brésiliennes. Ces chroniques mensuelles sont une fenêtre ouverte sur le Brésil contemporain, loin des filtres médiatiques habituels. À travers le regard de João, je découvre un autre point de vue sur l'actualité mondiale",
    messages: [
      { 
        id: 'c-1',
        sender: 'them', 
        title: 'Chronique du 26 septembre 2025',
        image: 'https://placehold.co/600x400/f1f5f9/1e293b?text=UN+Assembly',
        text: "One of the most relevant events of September related to Brazil was that Luiz Inácio Lula da Silva attended the 80th United Nations General Assembly. The Brazilian president will be the first one to speak at the Debate. This gives Lula the chance to present the Brazilian priorities and highlight its position on urgent international challenges representing the commitment to multilateralism.\n\nOne of the principal reasons for the relevance of this event is Brazilian ambition to strengthen its image as a global leader on climate and sustainable development. Lula expects to be capable of using the UN platform to advocate for stronger climate action, fairer energy transitions, and protection of the Amazon creating a base to what Brazil wants to debate at COP30, that will be hosted in Brazil, making this Assembly an important stage to build international credibility.", 
        timestamp: '26 Sept 2025' 
      },
      { 
        id: 'c-2',
        sender: 'them', 
        title: 'Chronique du 26 octobre 2025',
        image: 'https://placehold.co/600x400/f1f5f9/1e293b?text=H2LATAM',
        text: "During October the event H2LATAM SUMMIT was hosted in Fortaleza, and it’s an important event focused on the global energy transition. The Summit was important because it developed partnerships to strengthen Latin America’s position in the global hydrogen economy specially because they discussed a new promising technology that is green hydrogen.\n\nThe event had an importance internationally considering the partnership between Latin America and Europe because it was possible to demonstrate Brazilian potential in renewable energy sources (bioenergy, solar, etc), one thing that can prove that, is the % of electricity generation due to renewable sources in Brazil at 2024 (84%), demonstrating the relevance of the country in discussions about energy transition, and with that we can conclude that by hosting the H2LATAM, Brazil strengthened ties with partners in Europe and Latin America and reinforced its image as a country capable of leading the renewable energy transition.", 
        timestamp: '26 Oct 2025' 
      }
    ]
  }
];
