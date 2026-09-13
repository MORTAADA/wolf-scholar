// ============================================================
//  WHITE WOLF SCHOLAR — SCRIPT V39
//  Full with Advanced Stats (Heatmap + Charts)
// ============================================================
(function(){
'use strict';

// ============================================================
//  MASTER APCE
// ============================================================
var MASTER_SUBJECTS = [
  {id:'s1',code:'CHM-101',name:'Spectroscopie moléculaire',semester:'S1',credits:5},
  {id:'s2',code:'CHM-102',name:'Spectroscopie atomique',semester:'S1',credits:4},
  {id:'s3',code:'CHM-103',name:'Chimie analytique',semester:'S1',credits:6},
  {id:'s4',code:'CHM-104',name:'Séparation et analyse chromatographique',semester:'S1',credits:5},
  {id:'s5',code:'CHM-105',name:'Méthodes d\'analyse des solides',semester:'S1',credits:4},
  {id:'s6',code:'QAL-101',name:'Normes et qualité',semester:'S1',credits:3},
  {id:'s7',code:'HSE-101',name:'Hygiène, sécurité et qualité',semester:'S1',credits:3},
  {id:'s8',code:'GEN-101',name:'Génie chimique',semester:'S1',credits:5},
  {id:'s9',code:'ENE-101',name:'Efficacité énergétique',semester:'S1',credits:4}
];

var TOPICS_SEED = [
  {id:'s1_1',subject_id:'s1',title:'UV/Visible'},
  {id:'s1_2',subject_id:'s1',title:'Spectroscopie infrarouge (IR)'},
  {id:'s1_3',subject_id:'s1',title:'RMN du proton (1H NMR)'},
  {id:'s1_4',subject_id:'s1',title:'RMN du carbone 13 (13C NMR)'},
  {id:'s1_5',subject_id:'s1',title:'Spectroscopie d\'absorption atomique'},
  {id:'s1_6',subject_id:'s1',title:'Spectroscopie d\'émission atomique'},
  {id:'s1_7',subject_id:'s1',title:'Complémentarité des techniques'},
  {id:'s1_8',subject_id:'s1',title:'Élucidation des structures'},
  {id:'s2_1',subject_id:'s2',title:'AAS avec flamme'},
  {id:'s2_2',subject_id:'s2',title:'Perturbations/interférences'},
  {id:'s2_3',subject_id:'s2',title:'AAS électrothermique'},
  {id:'s2_4',subject_id:'s2',title:'Génération d\'hydrures'},
  {id:'s2_5',subject_id:'s2',title:'Émission atomique flamme'},
  {id:'s2_6',subject_id:'s2',title:'Émission atomique plasma'},
  {id:'s2_7',subject_id:'s2',title:'Applications — Normes ISO'},
  {id:'s3_1',subject_id:'s3',title:'Introduction et statistiques'},
  {id:'s3_2',subject_id:'s3',title:'Échantillonnage'},
  {id:'s3_3',subject_id:'s3',title:'Chimie en solution aqueuse'},
  {id:'s3_4',subject_id:'s3',title:'Méthodes titrimétriques'},
  {id:'s3_5',subject_id:'s3',title:'Titrages acido-basiques'},
  {id:'s3_6',subject_id:'s3',title:'Titrages par précipitation'},
  {id:'s3_7',subject_id:'s3',title:'Titrages complexométriques'},
  {id:'s3_8',subject_id:'s3',title:'Titrages d\'oxydoréduction'},
  {id:'s3_9',subject_id:'s3',title:'Méthodes gravimétriques'},
  {id:'s4_1',subject_id:'s4',title:'Chromatographie liquide'},
  {id:'s4_2',subject_id:'s4',title:'Types de chromatographie'},
  {id:'s4_3',subject_id:'s4',title:'Équipements et détecteurs'},
  {id:'s4_4',subject_id:'s4',title:'Optimisation des conditions'},
  {id:'s4_5',subject_id:'s4',title:'Chromatographie en phase gazeuse'},
  {id:'s4_6',subject_id:'s4',title:'Électrophorèse capillaire'},
  {id:'s4_7',subject_id:'s4',title:'Couplage LC/MS'},
  {id:'s5_1',subject_id:'s5',title:'Microscopie électronique'},
  {id:'s5_2',subject_id:'s5',title:'Diffraction X sur poudres'},
  {id:'s5_3',subject_id:'s5',title:'Taille moyenne Debye-Scherrer'},
  {id:'s5_4',subject_id:'s5',title:'Analyse qualitative des éléments'},
  {id:'s5_5',subject_id:'s5',title:'Analyse thermique ATG et ATD'},
  {id:'s5_6',subject_id:'s5',title:'Couplage ATG-CPG-MS'},
  {id:'s5_7',subject_id:'s5',title:'Analyse mécanique composites'},
  {id:'s6_1',subject_id:'s6',title:'Standards et Normes'},
  {id:'s6_2',subject_id:'s6',title:'Management de la qualité'},
  {id:'s7_1',subject_id:'s7',title:'Gestion des risques industriels'},
  {id:'s7_2',subject_id:'s7',title:'Prévention et gestion opérationnelle'},
  {id:'s7_3',subject_id:'s7',title:'Réglementation industrielle'},
  {id:'s7_4',subject_id:'s7',title:'Risques d\'incendie'},
  {id:'s7_5',subject_id:'s7',title:'Hygiène et environnement'},
  {id:'s8_1',subject_id:'s8',title:'Bilans matière et chaleur'},
  {id:'s8_2',subject_id:'s8',title:'Mécanique des fluides'},
  {id:'s8_3',subject_id:'s8',title:'Régimes laminaire turbulent'},
  {id:'s8_4',subject_id:'s8',title:'Lits fixes et fluidisés'},
  {id:'s8_5',subject_id:'s8',title:'Transfert thermique'},
  {id:'s8_6',subject_id:'s8',title:'Transfert de matière'},
  {id:'s9_1',subject_id:'s9',title:'Concept d\'énergie'},
  {id:'s9_2',subject_id:'s9',title:'Sources d\'énergie'},
  {id:'s9_3',subject_id:'s9',title:'Transformation industrielle'},
  {id:'s9_4',subject_id:'s9',title:'Équipements industriels'},
  {id:'s9_5',subject_id:'s9',title:'Efficacité énergétique papier'}
];

var PROGRAMMING_TOPICS = [
  {id:'web1',domain:'Frontend',icon:'🌐',title:'HTML5 (Structure & Sémantique)',learn:['Structure de base','Balises sémantiques','Formulaires','Accessibilité'],video:{title:'HTML5',url:'https://www.youtube.com/results?search_query=html5+course',channel:'Traversy Media'}},
  {id:'web2',domain:'Frontend',icon:'🌐',title:'CSS3 (Flexbox, Grid)',learn:['Sélecteurs','Flexbox','CSS Grid','Media queries'],video:{title:'CSS',url:'https://www.youtube.com/results?search_query=css+course',channel:'freeCodeCamp'}},
  {id:'web3',domain:'Frontend',icon:'🌐',title:'JavaScript (ES6+)',learn:['let/const','Fonctions fléchées','DOM','Événements'],video:{title:'JavaScript',url:'https://www.youtube.com/results?search_query=javascript+course',channel:'Traversy Media'}},
  {id:'web4',domain:'Frontend',icon:'🌐',title:'React.js',learn:['JSX','useState','Props','Context API'],video:{title:'React',url:'https://www.youtube.com/results?search_query=react+course',channel:'Traversy Media'}},
  {id:'web5',domain:'Frontend',icon:'🌐',title:'React Native',learn:['Composants','Navigation','Styles','Publication'],video:{title:'React Native',url:'https://www.youtube.com/results?search_query=react+native',channel:'Mosh'}},
  {id:'py1',domain:'Python & Data',icon:'🐍',title:'Python (Bases)',learn:['Variables','Conditions','Boucles','Fonctions'],video:{title:'Python',url:'https://www.youtube.com/results?search_query=python+beginners',channel:'Mosh'}},
  {id:'py2',domain:'Python & Data',icon:'🐍',title:'Python (POO)',learn:['Fonctions','Modules','Classes','Héritage'],video:{title:'Python OOP',url:'https://www.youtube.com/results?search_query=python+oop',channel:'Corey Schafer'}},
  {id:'sql1',domain:'Python & Data',icon:'🐍',title:'SQL (Bases)',learn:['SELECT','INSERT','GROUP BY','Relations'],video:{title:'SQL',url:'https://www.youtube.com/results?search_query=sql+tutorial',channel:'Mosh'}},
  {id:'sql2',domain:'Python & Data',icon:'🐍',title:'SQL (Avancé)',learn:['JOIN','Index','Subqueries','Performance'],video:{title:'Advanced SQL',url:'https://www.youtube.com/results?search_query=advanced+sql',channel:'Alex The Analyst'}},
  {id:'java1',domain:'Java & C',icon:'☕',title:'Java (Bases)',learn:['Types','Contrôle','Classes','Constructeurs'],video:{title:'Java',url:'https://www.youtube.com/results?search_query=java+tutorial',channel:'Mosh'}},
  {id:'java2',domain:'Java & C',icon:'☕',title:'Java (POO)',learn:['Héritage','Interfaces','Collections','Streams'],video:{title:'Advanced Java',url:'https://www.youtube.com/results?search_query=advanced+java',channel:'Telusko'}},
  {id:'c1',domain:'Java & C',icon:'☕',title:'Langage C (Bases)',learn:['Pointeurs','Mémoire','Structures','Fichiers'],video:{title:'C',url:'https://www.youtube.com/results?search_query=c+programming',channel:'freeCodeCamp'}},
  {id:'c2',domain:'Java & C',icon:'☕',title:'Langage C (Algorithmes)',learn:['Algorithmes','Complexité','Optimisation','Debugging'],video:{title:'Algorithms',url:'https://www.youtube.com/results?search_query=algorithms+c',channel:'mycodeschool'}},
  {id:'git1',domain:'Outils & Projets',icon:'🔧',title:'Git & GitHub',learn:['init/add/commit','Branches','Pull requests','Conflits'],video:{title:'Git',url:'https://www.youtube.com/results?search_query=git+crash+course',channel:'Traversy Media'}},
  {id:'proj1',domain:'Outils & Projets',icon:'🔧',title:'Projet : Portfolio Web',learn:['Design responsive','Navigation','Contact','Déploiement'],video:{title:'Portfolio',url:'https://www.youtube.com/results?search_query=portfolio+website',channel:'freeCodeCamp'}},
  {id:'proj2',domain:'Outils & Projets',icon:'🔧',title:'Projet : React To-Do',learn:['CRUD','LocalStorage','Composants','Déploiement'],video:{title:'React To-Do',url:'https://www.youtube.com/results?search_query=react+todo',channel:'Traversy Media'}},
  {id:'proj3',domain:'Outils & Projets',icon:'🔧',title:'Projet : Mini jeu Python',learn:['Logique','Pygame','Événements','Boucle'],video:{title:'Python Game',url:'https://www.youtube.com/results?search_query=python+game',channel:'freeCodeCamp'}}
];

var LANGUAGES = [
  {id:'de',flag:'🇩🇪',name:'Deutsch',nameAr:'الألمانية',goal:'B2',goalLabel:'B2 — متقدم',
    levels:{
      A1:{label:'A1 — مبتدئ',description:'في نهاية هذا المستوى:',canDo:['التقديم','أسئلة','مواقف','فهم'],duration:'40-60 ساعة',pace:'3 دروس/أسبوع',
        lessons:[
          {num:1,title:'الأبجدية والنطق',sub:'Das Alphabet',learn:['الحروف الألمانية','النطق','الحروف الخاصة'],video:{title:'German Alphabet',url:'https://www.youtube.com/results?search_query=german+alphabet',channel:'Easy German'}},
          {num:2,title:'التحيات',sub:'Begrüßungen',learn:['Hallo','Ich heiße','Wie geht es dir'],video:{title:'Greetings',url:'https://www.youtube.com/results?search_query=german+greetings',channel:'Anja'}},
          {num:3,title:'الأرقام',sub:'Die Zahlen',learn:['0-20','العشرات','المئات'],video:{title:'Numbers',url:'https://www.youtube.com/results?search_query=german+numbers',channel:'Easy German'}},
          {num:4,title:'الضمائر',sub:'Personalpronomen',learn:['ich, du, er','wir, ihr, sie'],video:{title:'Pronouns',url:'https://www.youtube.com/results?search_query=german+pronouns',channel:'Learn German'}},
          {num:5,title:'der/die/das',sub:'Artikel',learn:['الأجناس','der/die/das','قواعد'],video:{title:'Articles',url:'https://www.youtube.com/results?search_query=der+die+das',channel:'Easy German'}},
          {num:6,title:'الأفعال',sub:'Verben',learn:['sein','haben','تصريف'],video:{title:'Verben',url:'https://www.youtube.com/results?search_query=german+verbs',channel:'Anja'}},
          {num:7,title:'المفردات',sub:'Wortschatz',learn:['الألوان','العائلة','الطعام'],video:{title:'Vocab',url:'https://www.youtube.com/results?search_query=german+vocab',channel:'Easy German'}},
          {num:8,title:'الجمل',sub:'Sätze',learn:['بنية الجملة','W-Fragen','Ja/Nein'],video:{title:'Sentences',url:'https://www.youtube.com/results?search_query=german+sentences',channel:'Easy German'}},
          {num:9,title:'المحادثات',sub:'Gespräche',learn:['المقهى','التسوق','السفر'],video:{title:'Dialogues',url:'https://www.youtube.com/results?search_query=german+dialogues',channel:'Easy German'}},
          {num:10,title:'الاختبار A1',sub:'Test',learn:['مراجعة','تمارين'],video:{title:'A1 Test',url:'https://www.youtube.com/results?search_query=german+A1',channel:'Learn German'}}
        ],resources:{books:[{title:'Menschen A1',author:'Hueber',sub:'الأساسي'}],youtube:[{title:'Easy German',sub:'حوارات'},{title:'Anja',sub:'مبتدئين'}],apps:[{title:'Anki',sub:'بطاقات'}],websites:[{title:'DW Nicos Weg',sub:'مسلسل'}]}
      },
      A2:{label:'A2 — أساسي',description:'في نهاية هذا المستوى:',canDo:['مواقف','تبادل','وصف','نصوص'],duration:'60-80 ساعة',pace:'3-4 دروس',
        lessons:[
          {num:1,title:'Perfekt',sub:'الماضي التام',learn:['تكوينه','PII','المحادثة'],video:{title:'Perfekt',url:'https://www.youtube.com/results?search_query=perfekt',channel:'Anja'}},
          {num:2,title:'Akkusativ',sub:'النصب',learn:['متى','den/die/das','الضمائر'],video:{title:'Akkusativ',url:'https://www.youtube.com/results?search_query=akkusativ',channel:'Easy German'}},
          {num:3,title:'Dativ',sub:'الجر',learn:['متى','dem/der','حروف'],video:{title:'Dativ',url:'https://www.youtube.com/results?search_query=dativ',channel:'Easy German'}},
          {num:4,title:'Wechselpräpositionen',sub:'حروف متغيرة',learn:['in/auf','Wohin/Wo','تمارين'],video:{title:'Wechsel',url:'https://www.youtube.com/results?search_query=wechsel',channel:'Learn German'}},
          {num:5,title:'Trennbare Verben',sub:'أفعال منفصلة',learn:['aufstehen','القاعدة'],video:{title:'Trennbar',url:'https://www.youtube.com/results?search_query=trennbar',channel:'Easy German'}},
          {num:6,title:'الصفات',sub:'Adjektive',learn:['الصفات','المقارنة'],video:{title:'Adjectives',url:'https://www.youtube.com/results?search_query=adjectives',channel:'Learn German'}},
          {num:7,title:'الملكية',sub:'Possessiv',learn:['mein/dein','unser'],video:{title:'Possessiv',url:'https://www.youtube.com/results?search_query=possessiv',channel:'Easy German'}},
          {num:8,title:'الانعكاسية',sub:'Reflexiv',learn:['mich/dich','الأفعال'],video:{title:'Reflexive',url:'https://www.youtube.com/results?search_query=reflexive',channel:'Learn German'}},
          {num:9,title:'Konjunktionen',sub:'حروف الوصل',learn:['und/aber','weil/dass'],video:{title:'Konj',url:'https://www.youtube.com/results?search_query=konjunktionen',channel:'Easy German'}},
          {num:10,title:'الساعة',sub:'Uhrzeit',learn:['الوقت','الأيام','التاريخ'],video:{title:'Time',url:'https://www.youtube.com/results?search_query=time+german',channel:'Learn German'}},
          {num:11,title:'التسوق',sub:'Einkaufen',learn:['المطعم','السوبر'],video:{title:'Shopping',url:'https://www.youtube.com/results?search_query=shopping+german',channel:'Easy German'}},
          {num:12,title:'اختبار A2',sub:'Test A2',learn:['مراجعة','B1'],video:{title:'A2 Test',url:'https://www.youtube.com/results?search_query=german+A2',channel:'Learn German'}}
        ],resources:{books:[{title:'Menschen A2',author:'Hueber',sub:'الأساسي'}],youtube:[{title:'Easy German',sub:'حوارات'},{title:'Marija',sub:'بالعربية'}],apps:[{title:'Anki A2',sub:'مفردات'}],websites:[{title:'DW A2',sub:'دروس'}]}
      },
      B1:{label:'B1 — متوسط',description:'في نهاية هذا المستوى:',canDo:['السفر','تجارب','آراء','نصوص'],duration:'80-120 ساعة',pace:'4 دروس',
        lessons:[
          {num:1,title:'Präteritum',sub:'الماضي',learn:['تكوينه','الشاذة','استخدام'],video:{title:'Präteritum',url:'https://www.youtube.com/results?search_query=praeteritum',channel:'Easy German'}},
          {num:2,title:'Futur',sub:'المستقبل',learn:['werden','الخطط'],video:{title:'Futur',url:'https://www.youtube.com/results?search_query=futur',channel:'Learn German'}},
          {num:3,title:'Modalverben',sub:'الوسيطة',learn:['können/müssen','sollen/wollen'],video:{title:'Modal',url:'https://www.youtube.com/results?search_query=modal',channel:'Easy German'}},
          {num:4,title:'Relativsätze',sub:'الموصولة',learn:['der/die/das','دمج'],video:{title:'Relativ',url:'https://www.youtube.com/results?search_query=relativ',channel:'Learn German'}},
          {num:5,title:'Genitiv',sub:'حالة الجر',learn:['الملكية','حروف'],video:{title:'Genitiv',url:'https://www.youtube.com/results?search_query=genitiv',channel:'Easy German'}},
          {num:6,title:'Passiv',sub:'المجهول',learn:['werden+PII','الأزمنة'],video:{title:'Passiv',url:'https://www.youtube.com/results?search_query=passiv',channel:'Learn German'}},
          {num:7,title:'Konjunktiv II',sub:'الشرط',learn:['würde','الأمنيات'],video:{title:'Konj II',url:'https://www.youtube.com/results?search_query=konjunktiv+2',channel:'Easy German'}},
          {num:8,title:'المقارنة',sub:'Komparativ',learn:['الشاذة','als/wie'],video:{title:'Compar',url:'https://www.youtube.com/results?search_query=komparativ',channel:'Learn German'}},
          {num:9,title:'Relativpronomen',sub:'الضمائر',learn:['der/die','الإعراب'],video:{title:'Relativ P',url:'https://www.youtube.com/results?search_query=relativpronomen',channel:'Easy German'}},
          {num:10,title:'Redewendungen',sub:'التعبيرات',learn:['Daumen','Schwein'],video:{title:'Idioms',url:'https://www.youtube.com/results?search_query=redensarten',channel:'Get Germanized'}},
          {num:11,title:'Beruf',sub:'العمل',learn:['مفردات','البريد'],video:{title:'Business',url:'https://www.youtube.com/results?search_query=business',channel:'Easy German'}},
          {num:12,title:'Nachrichten',sub:'الأخبار',learn:['فهم','الرأي'],video:{title:'News',url:'https://www.youtube.com/results?search_query=tagesschau',channel:'Tagesschau'}},
          {num:13,title:'Briefe',sub:'الرسائل',learn:['Sehr geehrte','البنية'],video:{title:'Letters',url:'https://www.youtube.com/results?search_query=briefe',channel:'Learn German'}},
          {num:14,title:'Kultur',sub:'الثقافة',learn:['العادات','الأعياد'],video:{title:'Culture',url:'https://www.youtube.com/results?search_query=kultur',channel:'Get Germanized'}},
          {num:15,title:'اختبار B1',sub:'Test B1',learn:['مراجعة','Goethe'],video:{title:'B1 Test',url:'https://www.youtube.com/results?search_query=goethe+B1',channel:'Learn German'}}
        ],resources:{books:[{title:'Menschen B1',author:'Hueber',sub:'الأساسي'}],youtube:[{title:'Easy German Podcast',sub:'حوارات'},{title:'Tagesschau',sub:'أخبار'}],apps:[{title:'Anki B1',sub:'مفردات'}],websites:[{title:'DW B1',sub:'دروس'}]}
      },
      B2:{label:'B2 — متقدم',description:'في نهاية هذا المستوى:',canDo:['نصوص معقدة','طلاقة','كتابة','نقاش'],duration:'120-180 ساعة',pace:'4-5 دروس',
        lessons:[
          {num:1,title:'Alle Zeiten',sub:'الأزمنة',learn:['جدول','متى'],video:{title:'Tenses',url:'https://www.youtube.com/results?search_query=all+tenses',channel:'Learn German'}},
          {num:2,title:'Komposita',sub:'المركبة',learn:['تكوين','البادئة'],video:{title:'Komposita',url:'https://www.youtube.com/results?search_query=komposita',channel:'Easy German'}},
          {num:3,title:'Infinitive',sub:'التراكيب',learn:['um zu','ohne zu'],video:{title:'Infinitive',url:'https://www.youtube.com/results?search_query=infinitive',channel:'Learn German'}},
          {num:4,title:'Konjunktiv I',sub:'غير مباشر',learn:['Indirekte','الصحافة'],video:{title:'Konj I',url:'https://www.youtube.com/results?search_query=konjunktiv+1',channel:'Easy German'}},
          {num:5,title:'Konditional',sub:'الشرط',learn:['wenn/falls','المستحيل'],video:{title:'Kond',url:'https://www.youtube.com/results?search_query=konditional',channel:'Learn German'}},
          {num:6,title:'Verben+Präp',sub:'أفعال+حروف',learn:['warten auf','قائمة'],video:{title:'Verben',url:'https://www.youtube.com/results?search_query=verben+praep',channel:'Easy German'}},
          {num:7,title:'Academic',sub:'كتابة',learn:['المقال','الروابط'],video:{title:'Writing',url:'https://www.youtube.com/results?search_query=academic+writing',channel:'Learn German'}},
          {num:8,title:'Listening',sub:'الاستماع',learn:['بودكاست','أفلام'],video:{title:'Listening',url:'https://www.youtube.com/results?search_query=listening+B2',channel:'Easy German'}},
          {num:9,title:'Literatur',sub:'الأدب',learn:['Goethe','Kafka'],video:{title:'Lit',url:'https://www.youtube.com/results?search_query=literatur',channel:'Get Germanized'}},
          {num:10,title:'Ingenieure',sub:'هندسة',learn:['مفردات','القراءة'],video:{title:'Technical',url:'https://www.youtube.com/results?search_query=technical',channel:'Learn German'}},
          {num:11,title:'Goethe B2',sub:'الامتحان',learn:['البنية','محاكاة'],video:{title:'Goethe B2',url:'https://www.youtube.com/results?search_query=goethe+B2',channel:'Learn German'}},
          {num:12,title:'Review B2',sub:'المراجعة',learn:['شامل','C1'],video:{title:'Review',url:'https://www.youtube.com/results?search_query=B2+review',channel:'Easy German'}}
        ],resources:{books:[{title:'Sicher! B2',author:'Hueber',sub:'الأساسي'}],youtube:[{title:'Easy German',sub:'سريع'},{title:'Tagesschau',sub:'أخبار'}],apps:[{title:'Anki B2',sub:'مفردات'}],websites:[{title:'Goethe B2',sub:'نماذج'}]}
      }
    }
  },
  {id:'en',flag:'🇬🇧',name:'English',nameAr:'الإنجليزية',goal:'C1',goalLabel:'C1 — إتقان',
    levels:{
      A1:{label:'A1 — مبتدئ',description:'في نهاية هذا المستوى:',canDo:['التقديم','أسئلة','مواقف','فهم'],duration:'40-60 ساعة',pace:'3 دروس',
        lessons:[
          {num:1,title:'Alphabet',sub:'النطق',learn:['26 letters','Vowels','Consonants'],video:{title:'Alphabet',url:'https://www.youtube.com/results?search_query=english+alphabet',channel:'BBC Learning'}},
          {num:2,title:'Greetings',sub:'التحيات',learn:['Hello','Good morning'],video:{title:'Greetings',url:'https://www.youtube.com/results?search_query=english+greetings',channel:'BBC Learning'}},
          {num:3,title:'Introducing Yourself',sub:'التعريف',learn:['My name is','I am from'],video:{title:'Introduce',url:'https://www.youtube.com/results?search_query=introduce',channel:'Lucy'}},
          {num:4,title:'Numbers',sub:'الأرقام',learn:['0-20','Tens','نطق'],video:{title:'Numbers',url:'https://www.youtube.com/results?search_query=english+numbers',channel:'BBC Learning'}},
          {num:5,title:'Articles',sub:'الأدوات',learn:['a/an/the','الجمع'],video:{title:'Articles',url:'https://www.youtube.com/results?search_query=english+articles',channel:'Lucy'}},
          {num:6,title:'To Be',sub:'أفعال',learn:['to be','to have'],video:{title:'To Be',url:'https://www.youtube.com/results?search_query=english+to+be',channel:'BBC Learning'}},
          {num:7,title:'Present Simple',sub:'المضارع',learn:['التكوين','النفي'],video:{title:'Present',url:'https://www.youtube.com/results?search_query=present+simple',channel:'Lucy'}},
          {num:8,title:'Vocabulary',sub:'مفردات',learn:['Colors','Family','Food'],video:{title:'Vocab',url:'https://www.youtube.com/results?search_query=english+vocab',channel:'BBC Learning'}},
          {num:9,title:'Sentences',sub:'جمل',learn:['SVO','Questions'],video:{title:'Sentences',url:'https://www.youtube.com/results?search_query=english+sentences',channel:'BBC Learning'}},
          {num:10,title:'Test A1',sub:'الاختبار',learn:['مراجعة','A2'],video:{title:'A1 Test',url:'https://www.youtube.com/results?search_query=english+A1',channel:'BBC Learning'}}
        ],resources:{books:[{title:'English File A1',author:'Oxford',sub:'الأساسي'}],youtube:[{title:'BBC Learning',sub:'رسمي'},{title:'Lucy',sub:'مبسط'}],apps:[{title:'Duolingo',sub:'تمارين'}],websites:[{title:'BBC Learning',sub:'مجاني'}]}
      },
      A2:{label:'A2 — أساسي',description:'في نهاية هذا المستوى:',canDo:['مواقف','تبادل','وصف','نصوص'],duration:'60-80 ساعة',pace:'3-4 دروس',
        lessons:[
          {num:1,title:'Past Simple',sub:'الماضي',learn:['Regular','Irregular','النفي'],video:{title:'Past Simple',url:'https://www.youtube.com/results?search_query=past+simple',channel:'Lucy'}},
          {num:2,title:'Past Continuous',sub:'المستمر',learn:['was/were+ing','الاستخدام'],video:{title:'Past Cont',url:'https://www.youtube.com/results?search_query=past+continuous',channel:'BBC'}},
          {num:3,title:'Future',sub:'المستقبل',learn:['will','going to'],video:{title:'Future',url:'https://www.youtube.com/results?search_query=future',channel:'Lucy'}},
          {num:4,title:'Comparatives',sub:'المقارنة',learn:['-er/more','than'],video:{title:'Compar',url:'https://www.youtube.com/results?search_query=comparatives',channel:'BBC'}},
          {num:5,title:'Modals',sub:'الوسيطة',learn:['can/could','must/should'],video:{title:'Modals',url:'https://www.youtube.com/results?search_query=modals',channel:'Lucy'}},
          {num:6,title:'Prepositions',sub:'حروف الجر',learn:['in/on/at','under/over'],video:{title:'Prep',url:'https://www.youtube.com/results?search_query=prepositions',channel:'BBC'}},
          {num:7,title:'Countable',sub:'القابل للعد',learn:['some/any','much/many'],video:{title:'Countable',url:'https://www.youtube.com/results?search_query=countable',channel:'Lucy'}},
          {num:8,title:'Present Perfect',sub:'التام',learn:['have+PII','just/already'],video:{title:'Present Perf',url:'https://www.youtube.com/results?search_query=present+perfect',channel:'BBC'}},
          {num:9,title:'Phrasal Verbs',sub:'مركبة',learn:['get up','look for'],video:{title:'Phrasal',url:'https://www.youtube.com/results?search_query=phrasal',channel:'Lucy'}},
          {num:10,title:'Conversations',sub:'محادثات',learn:['المطعم','التسوق','السفر'],video:{title:'Conversations',url:'https://www.youtube.com/results?search_query=daily',channel:'BBC'}},
          {num:11,title:'Writing',sub:'الكتابة',learn:['Emails','Notes'],video:{title:'Writing',url:'https://www.youtube.com/results?search_query=writing',channel:'Lucy'}},
          {num:12,title:'Test A2',sub:'الاختبار',learn:['مراجعة','B1'],video:{title:'A2 Test',url:'https://www.youtube.com/results?search_query=english+A2',channel:'BBC'}}
        ],resources:{books:[{title:'English File A2',author:'Oxford',sub:'الأساسي'}],youtube:[{title:'BBC Learning',sub:'رسمي'},{title:'VOA',sub:'بطيء'}],apps:[{title:'Anki',sub:'مفردات'}],websites:[{title:'British Council',sub:'رسمي'}]}
      },
      B1:{label:'B1 — متوسط',description:'في نهاية هذا المستوى:',canDo:['السفر','تجارب','آراء','نصوص'],duration:'80-120 ساعة',pace:'4 دروس',
        lessons:[
          {num:1,title:'PPC',sub:'التام المستمر',learn:['have been+ing','الاستخدام'],video:{title:'PPC',url:'https://www.youtube.com/results?search_query=ppc',channel:'Lucy'}},
          {num:2,title:'Past Perfect',sub:'الماضي التام',learn:['had+PII','الترتيب'],video:{title:'Past Perf',url:'https://www.youtube.com/results?search_query=past+perfect',channel:'BBC'}},
          {num:3,title:'Conditionals',sub:'الشرط',learn:['Type 1,2,3','Mixed'],video:{title:'Cond',url:'https://www.youtube.com/results?search_query=conditionals',channel:'Lucy'}},
          {num:4,title:'Passive',sub:'المجهول',learn:['be+PII','الأزمنة'],video:{title:'Passive',url:'https://www.youtube.com/results?search_query=passive',channel:'BBC'}},
          {num:5,title:'Reported Speech',sub:'غير مباشر',learn:['said that','تغيير'],video:{title:'Reported',url:'https://www.youtube.com/results?search_query=reported',channel:'Lucy'}},
          {num:6,title:'Relative Clauses',sub:'الموصولة',learn:['who/which','that'],video:{title:'Relative',url:'https://www.youtube.com/results?search_query=relative',channel:'BBC'}},
          {num:7,title:'Phrasal Adv',sub:'مركبة متقدمة',learn:['look after','take off'],video:{title:'Phrasal B1',url:'https://www.youtube.com/results?search_query=advanced+phrasal',channel:'Lucy'}},
          {num:8,title:'Idioms',sub:'تعبيرات',learn:['Break a leg','Piece of cake'],video:{title:'Idioms',url:'https://www.youtube.com/results?search_query=idioms',channel:'BBC'}},
          {num:9,title:'Business',sub:'العمل',learn:['Emails','Meetings'],video:{title:'Business',url:'https://www.youtube.com/results?search_query=business',channel:'Lucy'}},
          {num:10,title:'Listening',sub:'الاستماع',learn:['Podcasts','Movies'],video:{title:'Listening',url:'https://www.youtube.com/results?search_query=listening+B1',channel:'BBC'}},
          {num:11,title:'Writing B1',sub:'الكتابة',learn:['Essays','Articles'],video:{title:'Writing B1',url:'https://www.youtube.com/results?search_query=writing+B1',channel:'Lucy'}},
          {num:12,title:'Culture',sub:'الثقافة',learn:['UK/US','Traditions'],video:{title:'Culture',url:'https://www.youtube.com/results?search_query=culture',channel:'BBC'}},
          {num:13,title:'Academic',sub:'أكاديمي',learn:['Essays','Research'],video:{title:'Academic',url:'https://www.youtube.com/results?search_query=academic',channel:'Lucy'}},
          {num:14,title:'Exam Prep',sub:'الامتحانات',learn:['IELTS','TOEFL'],video:{title:'Exam',url:'https://www.youtube.com/results?search_query=exam',channel:'BBC'}},
          {num:15,title:'Test B1',sub:'الاختبار',learn:['مراجعة','B2'],video:{title:'B1 Test',url:'https://www.youtube.com/results?search_query=english+B1',channel:'Lucy'}}
        ],resources:{books:[{title:'English File B1',author:'Oxford',sub:'الأساسي'}],youtube:[{title:'BBC Learning',sub:'رسمي'},{title:'TED',sub:'محاضرات'}],apps:[{title:'Anki B1',sub:'مفردات'}],websites:[{title:'BBC 6 Min',sub:'مجاني'}]}
      },
      B2:{label:'B2 — متقدم',description:'في نهاية هذا المستوى:',canDo:['نصوص معقدة','طلاقة','كتابة','مناقشة'],duration:'120-180 ساعة',pace:'4-5 دروس',
        lessons:[
          {num:1,title:'Adv Tenses',sub:'أزمنة متقدمة',learn:['Future Perfect','Mixed'],video:{title:'Adv Tenses',url:'https://www.youtube.com/results?search_query=advanced+tenses',channel:'Lucy'}},
          {num:2,title:'Mixed Cond',sub:'مختلط',learn:['Type 2+3','أمثلة'],video:{title:'Mixed',url:'https://www.youtube.com/results?search_query=mixed+cond',channel:'BBC'}},
          {num:3,title:'Adv Passive',sub:'المجهول',learn:['Complex','الأخبار'],video:{title:'Adv Passive',url:'https://www.youtube.com/results?search_query=advanced+passive',channel:'Lucy'}},
          {num:4,title:'Inversion',sub:'القلب',learn:['Never have I','Rarely'],video:{title:'Inversion',url:'https://www.youtube.com/results?search_query=inversion',channel:'BBC'}},
          {num:5,title:'Cleft',sub:'مشقوقة',learn:['It is...that','What...is'],video:{title:'Cleft',url:'https://www.youtube.com/results?search_query=cleft',channel:'Lucy'}},
          {num:6,title:'Adv Phrasal',sub:'مركبة متقدمة',learn:['Three-part','Idiomatic'],video:{title:'Adv Phrasal',url:'https://www.youtube.com/results?search_query=advanced+phrasal',channel:'BBC'}},
          {num:7,title:'Formal/Informal',sub:'رسمي',learn:['Register','Styles'],video:{title:'Formal',url:'https://www.youtube.com/results?search_query=formal',channel:'Lucy'}},
          {num:8,title:'Academic',sub:'كتابة',learn:['Essays','Research'],video:{title:'Academic',url:'https://www.youtube.com/results?search_query=academic',channel:'BBC'}},
          {num:9,title:'Collocations',sub:'الفروق',learn:['Word choice','Collocations'],video:{title:'Colloc',url:'https://www.youtube.com/results?search_query=collocations',channel:'Lucy'}},
          {num:10,title:'Cultural Refs',sub:'ثقافية',learn:['Idioms','Pop culture'],video:{title:'Culture',url:'https://www.youtube.com/results?search_query=culture+refs',channel:'BBC'}},
          {num:11,title:'Debating',sub:'النقاش',learn:['Agreeing','Persuading'],video:{title:'Debate',url:'https://www.youtube.com/results?search_query=debating',channel:'Lucy'}},
          {num:12,title:'Professional',sub:'مهني',learn:['Negotiations','Presentations'],video:{title:'Professional',url:'https://www.youtube.com/results?search_query=professional',channel:'BBC'}},
          {num:13,title:'Literature',sub:'أدب',learn:['Books','Movies'],video:{title:'Literature',url:'https://www.youtube.com/results?search_query=literature',channel:'BBC'}},
          {num:14,title:'IELTS/TOEFL',sub:'امتحانات',learn:['Listening','Reading'],video:{title:'IELTS',url:'https://www.youtube.com/results?search_query=ielts',channel:'Lucy'}},
          {num:15,title:'Critical',sub:'تفكير نقدي',learn:['Analyzing','Evaluating'],video:{title:'Critical',url:'https://www.youtube.com/results?search_query=critical',channel:'BBC'}},
          {num:16,title:'Adv Listening',sub:'استماع',learn:['Podcasts','Lectures'],video:{title:'Adv Listening',url:'https://www.youtube.com/results?search_query=advanced+listening',channel:'BBC'}},
          {num:17,title:'Adv Writing',sub:'كتابة متقدمة',learn:['Essays','Reports'],video:{title:'Adv Writing',url:'https://www.youtube.com/results?search_query=advanced+writing',channel:'Lucy'}},
          {num:18,title:'Test B2',sub:'الاختبار',learn:['مراجعة','C1'],video:{title:'B2 Test',url:'https://www.youtube.com/results?search_query=english+B2',channel:'BBC'}}
        ],resources:{books:[{title:'English File B2',author:'Oxford',sub:'الأساسي'}],youtube:[{title:'BBC Learning',sub:'رسمي'},{title:'TED',sub:'محاضرات'}],apps:[{title:'Anki B2',sub:'مفردات'}],websites:[{title:'BBC News',sub:'أخبار'}]}
      },
      C1:{label:'C1 — إتقان',description:'في نهاية هذا المستوى:',canDo:['أي نص','طلاقة','احترافي','أكاديمي'],duration:'180-250 ساعة',pace:'5 دروس',
        lessons:[
          {num:1,title:'Adv Grammar',sub:'مراجعة',learn:['All tenses','Structures'],video:{title:'Adv Grammar',url:'https://www.youtube.com/results?search_query=advanced+grammar',channel:'Lucy'}},
          {num:2,title:'Academic',sub:'كتابة',learn:['Research','Essays'],video:{title:'Academic',url:'https://www.youtube.com/results?search_query=academic+C1',channel:'BBC'}},
          {num:3,title:'Adv Vocab',sub:'مفردات',learn:['Collocations','Idioms'],video:{title:'Adv Vocab',url:'https://www.youtube.com/results?search_query=advanced+vocab',channel:'Lucy'}},
          {num:4,title:'Literary',sub:'تحليل أدبي',learn:['Novels','Poetry'],video:{title:'Lit',url:'https://www.youtube.com/results?search_query=literary',channel:'BBC'}},
          {num:5,title:'Rhetoric',sub:'بلاغة',learn:['Ethos','Pathos','Logos'],video:{title:'Rhetoric',url:'https://www.youtube.com/results?search_query=rhetoric',channel:'TED'}},
          {num:6,title:'Philosophy',sub:'فلسفة',learn:['Abstract','Arguments'],video:{title:'Philosophy',url:'https://www.youtube.com/results?search_query=philosophy',channel:'BBC'}},
          {num:7,title:'Scientific',sub:'علمية',learn:['Research','Methods'],video:{title:'Science',url:'https://www.youtube.com/results?search_query=scientific',channel:'TED'}},
          {num:8,title:'Leadership',sub:'قيادة',learn:['Management','Strategy'],video:{title:'Leadership',url:'https://www.youtube.com/results?search_query=leadership',channel:'TED'}},
          {num:9,title:'Adv Listening',sub:'استماع',learn:['Native speed','Accents'],video:{title:'Listening',url:'https://www.youtube.com/results?search_query=listening+C1',channel:'BBC'}},
          {num:10,title:'Nuances',sub:'دقيقة',learn:['Tone','Register'],video:{title:'Nuances',url:'https://www.youtube.com/results?search_query=nuances',channel:'Lucy'}},
          {num:11,title:'Translation',sub:'ترجمة',learn:['Arabic-English','Context'],video:{title:'Translation',url:'https://www.youtube.com/results?search_query=translation',channel:'BBC'}},
          {num:12,title:'Conversation',sub:'محادثة',learn:['Native-like','Debates'],video:{title:'Conversation',url:'https://www.youtube.com/results?search_query=conversation',channel:'Lucy'}},
          {num:13,title:'Culture C1',sub:'ثقافة',learn:['History','Media'],video:{title:'Culture',url:'https://www.youtube.com/results?search_query=culture+C1',channel:'BBC'}},
          {num:14,title:'Creative',sub:'إبداعية',learn:['Stories','Poetry'],video:{title:'Creative',url:'https://www.youtube.com/results?search_query=creative+writing',channel:'BBC'}},
          {num:15,title:'C1 Exam',sub:'امتحان',learn:['CAE','CPE','IELTS'],video:{title:'C1 Exam',url:'https://www.youtube.com/results?search_query=CAE',channel:'Lucy'}},
          {num:16,title:'Adv Debating',sub:'مناظرة',learn:['Structuring','Rebuttal'],video:{title:'Debating',url:'https://www.youtube.com/results?search_query=debating',channel:'BBC'}},
          {num:17,title:'Media',sub:'إعلام',learn:['News','Advertising'],video:{title:'Media',url:'https://www.youtube.com/results?search_query=media+analysis',channel:'TED'}},
          {num:18,title:'Prof Writing',sub:'مهنية',learn:['Reports','Publications'],video:{title:'Writing',url:'https://www.youtube.com/results?search_query=professional+writing',channel:'Lucy'}},
          {num:19,title:'Fluency',sub:'طلاقة',learn:['Speed','Naturalness'],video:{title:'Fluency',url:'https://www.youtube.com/results?search_query=fluency',channel:'BBC'}},
          {num:20,title:'C1 Test',sub:'الاختبار',learn:['Comprehensive','Mastery'],video:{title:'C1 Test',url:'https://www.youtube.com/results?search_query=C1+test',channel:'Lucy'}}
        ],resources:{books:[{title:'Advanced Grammar',author:'Cambridge',sub:'مرجع'}],youtube:[{title:'TED',sub:'محاضرات'},{title:'Economist',sub:'تحليلي'}],apps:[{title:'Anki Adv',sub:'مفردات'}],websites:[{title:'Guardian',sub:'صحيفة'}]}
      }
    }
  },
  {id:'es',flag:'🇪🇸',name:'Español',nameAr:'الإسبانية',goal:'B2',goalLabel:'B2 — متقدم',
    levels:{
      A1:{label:'A1 — مبتدئ',description:'في نهاية هذا المستوى:',canDo:['التقديم','مواقف','فهم','أسئلة'],duration:'40-60 ساعة',pace:'3 دروس',
        lessons:[
          {num:1,title:'El Alfabeto',sub:'الأبجدية',learn:['27 حرفاً','ñ','النطق'],video:{title:'Alphabet',url:'https://www.youtube.com/results?search_query=spanish+alphabet',channel:'SpanishPod'}},
          {num:2,title:'Saludos',sub:'التحيات',learn:['Hola','Buenos días'],video:{title:'Greetings',url:'https://www.youtube.com/results?search_query=spanish+greetings',channel:'Easy Spanish'}},
          {num:3,title:'Presentarse',sub:'التعريف',learn:['Me llamo','Soy de'],video:{title:'Introduce',url:'https://www.youtube.com/results?search_query=introduce+spanish',channel:'SpanishPod'}},
          {num:4,title:'Números',sub:'الأرقام',learn:['0-20','Decenas'],video:{title:'Numbers',url:'https://www.youtube.com/results?search_query=spanish+numbers',channel:'Easy Spanish'}},
          {num:5,title:'Artículos',sub:'الأدوات',learn:['el/la','los/las'],video:{title:'Articles',url:'https://www.youtube.com/results?search_query=spanish+articles',channel:'SpanishPod'}},
          {num:6,title:'Ser & Estar',sub:'فعلان',learn:['ser','estar','الفروق'],video:{title:'Ser/Estar',url:'https://www.youtube.com/results?search_query=ser+estar',channel:'Butterfly'}},
          {num:7,title:'Presente',sub:'المضارع',learn:['-ar','-er','-ir'],video:{title:'Present',url:'https://www.youtube.com/results?search_query=spanish+present',channel:'SpanishPod'}},
          {num:8,title:'Vocabulario',sub:'مفردات',learn:['Colores','Familia'],video:{title:'Vocab',url:'https://www.youtube.com/results?search_query=spanish+vocab',channel:'Easy Spanish'}},
          {num:9,title:'Frases',sub:'جمل',learn:['SVO','Preguntas'],video:{title:'Sentences',url:'https://www.youtube.com/results?search_query=spanish+sentences',channel:'SpanishPod'}},
          {num:10,title:'Examen A1',sub:'الاختبار',learn:['مراجعة','A2'],video:{title:'A1 Test',url:'https://www.youtube.com/results?search_query=spanish+A1',channel:'Easy Spanish'}}
        ],resources:{books:[{title:'Aula Internacional 1',author:'Difusión',sub:'الأساسي'}],youtube:[{title:'SpanishPod',sub:'دروس'},{title:'Easy Spanish',sub:'شارع'}],apps:[{title:'Duolingo',sub:'تمارين'}],websites:[{title:'SpanishDict',sub:'قاموس'}]}
      },
      A2:{label:'A2 — أساسي',description:'في نهاية هذا المستوى:',canDo:['مواقف','تبادل','وصف','نصوص'],duration:'60-80 ساعة',pace:'3-4 دروس',
        lessons:[
          {num:1,title:'Indefinido',sub:'الماضي',learn:['Regular','Irregular'],video:{title:'Indefinido',url:'https://www.youtube.com/results?search_query=indefinido',channel:'Butterfly'}},
          {num:2,title:'Imperfecto',sub:'الناقص',learn:['-aba,-ía','الفرق'],video:{title:'Imperfecto',url:'https://www.youtube.com/results?search_query=imperfecto',channel:'SpanishPod'}},
          {num:3,title:'Futuro',sub:'المستقبل',learn:['-é,-ás','ir+a'],video:{title:'Futuro',url:'https://www.youtube.com/results?search_query=futuro',channel:'Easy Spanish'}},
          {num:4,title:'Pronombres',sub:'المفعول',learn:['me/te/lo','le/les'],video:{title:'Pronouns',url:'https://www.youtube.com/results?search_query=spanish+pronouns',channel:'Butterfly'}},
          {num:5,title:'Reflexivos',sub:'انعكاسية',learn:['me/te/se','levantarse'],video:{title:'Reflexive',url:'https://www.youtube.com/results?search_query=reflexive',channel:'SpanishPod'}},
          {num:6,title:'Gustar',sub:'شبيهة',learn:['me gusta','encantar'],video:{title:'Gustar',url:'https://www.youtube.com/results?search_query=gustar',channel:'Butterfly'}},
          {num:7,title:'Comparativos',sub:'مقارنة',learn:['más...que','menos...que'],video:{title:'Compar',url:'https://www.youtube.com/results?search_query=comparativos',channel:'Easy Spanish'}},
          {num:8,title:'Perfecto',sub:'التام',learn:['he+PII','الاستخدام'],video:{title:'Perfecto',url:'https://www.youtube.com/results?search_query=perfecto',channel:'SpanishPod'}},
          {num:9,title:'Por vs Para',sub:'حروف',learn:['por','para','الفروق'],video:{title:'Por/Para',url:'https://www.youtube.com/results?search_query=por+para',channel:'Butterfly'}},
          {num:10,title:'Diálogos',sub:'محادثات',learn:['المطعم','التسوق'],video:{title:'Dialogues',url:'https://www.youtube.com/results?search_query=dialogues',channel:'Easy Spanish'}},
          {num:11,title:'Escritura',sub:'الكتابة',learn:['Emails','Textos'],video:{title:'Writing',url:'https://www.youtube.com/results?search_query=writing+spanish',channel:'SpanishPod'}},
          {num:12,title:'Examen A2',sub:'الاختبار',learn:['مراجعة','B1'],video:{title:'A2 Test',url:'https://www.youtube.com/results?search_query=spanish+A2',channel:'Easy Spanish'}}
        ],resources:{books:[{title:'Aula Internacional 2',author:'Difusión',sub:'الأساسي'}],youtube:[{title:'Easy Spanish',sub:'شارع'},{title:'Butterfly',sub:'قواعد'}],apps:[{title:'Anki A2',sub:'مفردات'}],websites:[{title:'RTVE',sub:'رسمي'}]}
      },
      B1:{label:'B1 — متوسط',description:'في نهاية هذا المستوى:',canDo:['السفر','تجارب','آراء','نصوص'],duration:'80-120 ساعة',pace:'4 دروس',
        lessons:[
          {num:1,title:'Subjuntivo',sub:'الشرط',learn:['التكوين','بعد que'],video:{title:'Subjuntivo',url:'https://www.youtube.com/results?search_query=subjuntivo',channel:'Butterfly'}},
          {num:2,title:'Condicional',sub:'الشرطي',learn:['-ía','الطلبات'],video:{title:'Condicional',url:'https://www.youtube.com/results?search_query=condicional',channel:'SpanishPod'}},
          {num:3,title:'Pluscuamperfecto',sub:'التام',learn:['había+PII','الترتيب'],video:{title:'Plus',url:'https://www.youtube.com/results?search_query=pluscuamperfecto',channel:'Easy Spanish'}},
          {num:4,title:'Imperativo',sub:'الأمر',learn:['tú,usted','Negative'],video:{title:'Imperativo',url:'https://www.youtube.com/results?search_query=imperativo',channel:'Butterfly'}},
          {num:5,title:'Relativos',sub:'موصولة',learn:['que,quien','cuyo'],video:{title:'Relativos',url:'https://www.youtube.com/results?search_query=relativos',channel:'SpanishPod'}},
          {num:6,title:'Discurso',sub:'غير مباشر',learn:['Dijo que','تغيير'],video:{title:'Indirect',url:'https://www.youtube.com/results?search_query=indirecto',channel:'Easy Spanish'}},
          {num:7,title:'Subj Imperfecto',sub:'شرط الماضي',learn:['-ra,-se','الأمنيات'],video:{title:'Subj Imp',url:'https://www.youtube.com/results?search_query=subjuntivo+imperfecto',channel:'Butterfly'}},
          {num:8,title:'Perífrasis',sub:'تراكيب',learn:['ir a+inf','soler'],video:{title:'Perífrasis',url:'https://www.youtube.com/results?search_query=perifrasis',channel:'SpanishPod'}},
          {num:9,title:'Vocab',sub:'مفردات',learn:['Trabajo','Salud'],video:{title:'Vocab',url:'https://www.youtube.com/results?search_query=vocab+spanish',channel:'Easy Spanish'}},
          {num:10,title:'Escucha',sub:'الاستماع',learn:['Podcasts','Noticias'],video:{title:'Listening',url:'https://www.youtube.com/results?search_query=listening+B1',channel:'Notes in Spanish'}},
          {num:11,title:'Cultura',sub:'الثقافة',learn:['España','Latinoamérica'],video:{title:'Culture',url:'https://www.youtube.com/results?search_query=hispanic+culture',channel:'Easy Spanish'}},
          {num:12,title:'Negocios',sub:'العمل',learn:['Emails','Reuniones'],video:{title:'Business',url:'https://www.youtube.com/results?search_query=business+spanish',channel:'SpanishPod'}},
          {num:13,title:'Escritura Av',sub:'الكتابة',learn:['Ensayos','Cartas'],video:{title:'Writing',url:'https://www.youtube.com/results?search_query=writing+B1',channel:'Butterfly'}},
          {num:14,title:'DELE B1',sub:'تحضير',learn:['Estructura','Consejos'],video:{title:'DELE B1',url:'https://www.youtube.com/results?search_query=dele+B1',channel:'SpanishPod'}},
          {num:15,title:'Examen B1',sub:'الاختبار',learn:['مراجعة','B2'],video:{title:'B1 Test',url:'https://www.youtube.com/results?search_query=spanish+B1',channel:'Easy Spanish'}}
        ],resources:{books:[{title:'Aula Internacional 3',author:'Difusión',sub:'الأساسي'}],youtube:[{title:'Easy Spanish',sub:'شارع'},{title:'Notes',sub:'بودكاست'}],apps:[{title:'Anki B1',sub:'مفردات'}],websites:[{title:'RTVE',sub:'دروس'}]}
      },
      B2:{label:'B2 — متقدم',description:'في نهاية هذا المستوى:',canDo:['نصوص معقدة','طلاقة','كتابة','نقاش'],duration:'120-180 ساعة',pace:'4-5 دروس',
        lessons:[
          {num:1,title:'Subj Avanzado',sub:'شرط متقدم',learn:['All forms','Sequences'],video:{title:'Subj Adv',url:'https://www.youtube.com/results?search_query=advanced+subjuntivo',channel:'Butterfly'}},
          {num:2,title:'Cond Mixtos',sub:'مختلط',learn:['Type 2+3','Combinations'],video:{title:'Mixed',url:'https://www.youtube.com/results?search_query=mixed+cond',channel:'SpanishPod'}},
          {num:3,title:'Ser/Estar Adv',sub:'الفروق',learn:['Change meaning','Idioms'],video:{title:'Ser/Estar',url:'https://www.youtube.com/results?search_query=ser+estar+advanced',channel:'Easy Spanish'}},
          {num:4,title:'Modismos',sub:'تعبيرات',learn:['Idioms','Refranes'],video:{title:'Idioms',url:'https://www.youtube.com/results?search_query=idioms+spanish',channel:'Easy Spanish'}},
          {num:5,title:'Estilo Indirecto',sub:'غير مباشر',learn:['Complex','Commands'],video:{title:'Indirect',url:'https://www.youtube.com/results?search_query=indirect+adv',channel:'Butterfly'}},
          {num:6,title:'Pasiva',sub:'مجهول',learn:['ser+PII','Impersonal'],video:{title:'Pasiva',url:'https://www.youtube.com/results?search_query=pasiva',channel:'SpanishPod'}},
          {num:7,title:'Conectores',sub:'روابط',learn:['sin embargo','por lo tanto'],video:{title:'Conectores',url:'https://www.youtube.com/results?search_query=conectores',channel:'Easy Spanish'}},
          {num:8,title:'Vocab Esp',sub:'متخصص',learn:['Ciencia','Tecnología'],video:{title:'Specialized',url:'https://www.youtube.com/results?search_query=specialized+spanish',channel:'SpanishPod'}},
          {num:9,title:'Literatura',sub:'أدب',learn:['Cervantes','Márquez'],video:{title:'Literature',url:'https://www.youtube.com/results?search_query=literature+spanish',channel:'Easy Spanish'}},
          {num:10,title:'Debate',sub:'النقاش',learn:['Estructura','Refutación'],video:{title:'Debate',url:'https://www.youtube.com/results?search_query=debate+spanish',channel:'SpanishPod'}},
          {num:11,title:'Escritura Acad',sub:'كتابة',learn:['Ensayos','Tesis'],video:{title:'Writing',url:'https://www.youtube.com/results?search_query=academic+writing',channel:'Butterfly'}},
          {num:12,title:'DELE B2',sub:'تحضير',learn:['Estructura','Práctica'],video:{title:'DELE B2',url:'https://www.youtube.com/results?search_query=dele+B2',channel:'SpanishPod'}},
          {num:13,title:'Español Prof',sub:'مهني',learn:['Reuniones','Presentaciones'],video:{title:'Professional',url:'https://www.youtube.com/results?search_query=professional',channel:'Easy Spanish'}},
          {num:14,title:'Medios',sub:'إعلام',learn:['Noticias','Análisis'],video:{title:'Media',url:'https://www.youtube.com/results?search_query=media+spanish',channel:'SpanishPod'}},
          {num:15,title:'Conversación',sub:'محادثة',learn:['Speed','Varieties'],video:{title:'Conversation',url:'https://www.youtube.com/results?search_query=native+spanish',channel:'Easy Spanish'}},
          {num:16,title:'Traducción',sub:'ترجمة',learn:['Árabe-Español','Contexto'],video:{title:'Translation',url:'https://www.youtube.com/results?search_query=translation',channel:'Butterfly'}},
          {num:17,title:'Refinamiento',sub:'الأسلوب',learn:['Register','Tone'],video:{title:'Style',url:'https://www.youtube.com/results?search_query=style+spanish',channel:'SpanishPod'}},
          {num:18,title:'Examen B2',sub:'الاختبار',learn:['مراجعة','C1'],video:{title:'B2 Test',url:'https://www.youtube.com/results?search_query=spanish+B2',channel:'Easy Spanish'}}
        ],resources:{books:[{title:'Aula Internacional 4',author:'Difusión',sub:'الأساسي'}],youtube:[{title:'Easy Spanish',sub:'شارع'},{title:'RTVE',sub:'أخبار'}],apps:[{title:'Anki B2',sub:'مفردات'}],websites:[{title:'El País',sub:'صحيفة'}]}
      }
    }
  }
];

var COURSE_SCHEDULE = [
  {day:'lundi',start:'08:30',end:'10:00',subject:'Analyse des solides',type:'Cours',room:'S.C.CHIM'},
  {day:'lundi',start:'10:15',end:'11:45',subject:'Analyse des solides',type:'TD',room:'S.C.CHIM'},
  {day:'lundi',start:'14:00',end:'15:30',subject:'Séparation chromato.',type:'Cours',room:'S.C.CHIM'},
  {day:'lundi',start:'15:45',end:'17:15',subject:'Séparation chromato.',type:'TD',room:'S.C.CHIM'},
  {day:'mardi',start:'08:30',end:'10:00',subject:'Chimie Analytique',type:'TD',room:'S.C.CHIM'},
  {day:'mardi',start:'10:15',end:'11:45',subject:'Chimie Analytique',type:'Cours',room:'S.C.CHIM'},
  {day:'mardi',start:'13:15',end:'14:45',subject:'Spectroscopie atomique',type:'Cours',room:'P21'},
  {day:'mercredi',start:'08:30',end:'11:30',subject:'TP',type:'TP',room:'Labo'},
  {day:'mercredi',start:'13:30',end:'15:30',subject:'Hygiène sécurité',type:'Cours',room:'ME205'},
  {day:'mercredi',start:'15:45',end:'17:00',subject:'Efficacité énergétique',type:'Cours',room:'ME205'},
  {day:'jeudi',start:'08:30',end:'11:30',subject:'TP',type:'TP',room:'Labo'},
  {day:'jeudi',start:'14:00',end:'17:00',subject:'TP',type:'TP',room:'Labo'},
  {day:'vendredi',start:'08:30',end:'10:00',subject:'Normes et qualité',type:'Cours',room:'S.Bib.CHIM'},
  {day:'vendredi',start:'10:15',end:'11:45',subject:'Spectroscopie moléculaire',type:'Cours',room:'S.Bib.CHIM'},
  {day:'vendredi',start:'13:45',end:'15:15',subject:'Spectroscopie moléculaire',type:'TD',room:'S.Bib.CHIM'}
];

var DEFAULT_SCHEDULE = {
  lundi:'📚 Chimie analytique + Spectroscopie + Python',
  mardi:'📚 Chromatographie + exercices • 🏋️ 19:30',
  mercredi:'📚 Analyse solides + OOP',
  jeudi:'📚 Spectroscopie + Génie • 🏋️ 19:30',
  vendredi:'📚 Spectroscopie atomique + DSA',
  samedi:'📚 Révision + Git • 🏋️ 19:30',
  dimanche:'🛌 Repos'
};

var DB_NAME='WhiteWolfDB', STORE_NAME='data', db=null;
function openDB(){return new Promise(function(res,rej){var req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=function(ev){var d=ev.target.result;if(!d.objectStoreNames.contains(STORE_NAME))d.createObjectStore(STORE_NAME,{keyPath:'key'})};req.onsuccess=function(ev){db=ev.target.result;res(db)};req.onerror=function(ev){rej(ev.target.error)}})}
function dbGet(k){return new Promise(function(res,rej){var tx=db.transaction(STORE_NAME,'readonly');var s=tx.objectStore(STORE_NAME);var r=s.get(k);r.onsuccess=function(){res(r.result?r.result.value:null)};r.onerror=function(){rej(r.error)}})}
function dbSet(k,v){return new Promise(function(res,rej){var tx=db.transaction(STORE_NAME,'readwrite');var s=tx.objectStore(STORE_NAME);var r=s.put({key:k,value:v});r.onsuccess=function(){res()};r.onerror=function(){rej(r.error)}})}

var state = {
  route:'dashboard', subjectId:null, topicId:null, langId:null, levelKey:'A1', lessonNum:null,
  statsTab:'overview', errFilter:'all',
  fcLang:null, fcScreen:'list', fcSession:null, fcFlipped:false,
  resFilter:'Tout', resSearch:'', resOpenGroups:{},
  subjects:MASTER_SUBJECTS, topics:TOPICS_SEED, progress:{}, sessions:[], errors:[],
  programming:{}, languages:JSON.parse(JSON.stringify(LANGUAGES)), langDone:{},
  flashcards:{}, fcReview:{},
  tasks:[], exams:[], resources:{}, ignoredTopics:{},
  settings:{showSmartRevision:true, notifications:true},
  onboardingDone:false, onboardingStep:0,
  onboardingData:{name:'',goal:'',studyTime:'',notif:true},
  customSchedule:{}, isEditingPlanning:false, modal:null, isSettingsOpen:false,
  studyStreak:0, lastStudyDate:null, xp:0, reviewSession:null,
  notifications:[], readNotifications:{}, lastNotifCheck:0, _lastSentNotifs:{}
};
var pomodoro = {workTime:25, breakTime:5, remaining:25*60, isRunning:false, isBreak:false, timerId:null};

// ============================================================
//  HELPERS
// ============================================================
function generateId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function getLevelLabel(level){var l=['Pas commencé','Découverte','Compris','Maîtrise','Maîtrise solide'];return l[level]||'Inconnu'}
function getStatusClass(level){return 'status-'+Math.min(Math.max(level,0),4)}
function getProgress(topicId){return state.progress[topicId]||{level:0,score:0,last_studied:null,notes:''}}
function getSubjectProgress(subjectId){var tops=state.topics.filter(function(t){return t.subject_id===subjectId});if(!tops.length)return 0;var total=0;tops.forEach(function(t){total+=getProgress(t.id).level});return Math.round((total/(tops.length*4))*100)}
function computeMasteryScore(topicId){var p=getProgress(topicId);return Math.min(p.level*25+20,100)}
function getTasksForToday(){var today=new Date().toISOString().slice(0,10);return state.tasks.filter(function(t){return t.date===today&&!t.isDone})}
function getScheduleStatus(){var now=new Date();var dn=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];var today=dn[now.getDay()];var cm=now.getHours()*60+now.getMinutes();var cls=COURSE_SCHEDULE.filter(function(c){return c.day===today});var cur=null,nxt=null;cls.forEach(function(c){var s=parseInt(c.start.split(':')[0])*60+parseInt(c.start.split(':')[1]);var e=parseInt(c.end.split(':')[0])*60+parseInt(c.end.split(':')[1]);if(cm>=s&&cm<e)cur=c});cls.forEach(function(c){var s=parseInt(c.start.split(':')[0])*60+parseInt(c.start.split(':')[1]);if(cm<s&&!nxt)nxt=c});return{currentClass:cur,nextClass:nxt}}
function computeSmartRevision(){var now=Date.now();var recs=[];state.topics.forEach(function(topic){var ign=state.ignoredTopics[topic.id];if(ign&&now<ign)return;var p=getProgress(topic.id);var ls=p.last_studied?new Date(p.last_studied).getTime():0;var days=Math.floor((now-ls)/86400000);var u=days*0.5+(4-p.level)*5;if(u>8&&days>0)recs.push({topicId:topic.id,subjectId:topic.subject_id,title:topic.title,level:p.level,daysSinceLastStudy:days,urgency:u})});recs.sort(function(a,b){return b.urgency-a.urgency});var g={};recs.forEach(function(r){if(!g[r.subjectId])g[r.subjectId]=[];g[r.subjectId].push(r)});return g}
function getLang(id){for(var i=0;i<state.languages.length;i++){if(state.languages[i].id===id)return state.languages[i]}return state.languages[0]}
function langProg(langId,lk){var L=getLang(langId);if(!L)return{done:0,total:0,percent:0};var lv=L.levels[lk];if(!lv||!lv.lessons.length)return{done:0,total:0,percent:0};var total=lv.lessons.length;var done=lv.lessons.filter(function(l){return state.langDone[langId+'_'+lk+'_'+l.num]}).length;return{done:done,total:total,percent:Math.round((done/total)*100)}}
function langIsDone(langId,lk,num){return !!state.langDone[langId+'_'+lk+'_'+num]}
function langCurrentLevel(langId){var L=getLang(langId);if(!L)return'A1';var keys=Object.keys(L.levels);for(var i=0;i<keys.length;i++){if(langProg(langId,keys[i]).percent<100)return keys[i]}return keys[keys.length-1]}
function langTotalDone(langId){var c=0;for(var k in state.langDone){if(k.indexOf(langId+'_')===0)c++}return c}
function progTotalDone(){var c=0;for(var k in state.programming){if(state.programming[k]&&state.programming[k].level>0)c++}return c}
function showToast(msg){var t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2400)}
function navigate(route,params){state.route=route;if(params){if(params.subjectId)state.subjectId=params.subjectId;if(params.topicId)state.topicId=params.topicId;if(params.langId)state.langId=params.langId;if(params.levelKey)state.levelKey=params.levelKey;if(params.lessonNum)state.lessonNum=params.lessonNum;if(params.fcLang)state.fcLang=params.fcLang}state.isEditingPlanning=false;state.isSettingsOpen=false;render()}

// ============================================================
//  ADVANCED STATS HELPERS
// ============================================================
function getDailyStudyMinutes(){
  var days={};
  state.sessions.forEach(function(s){
    if(!s.date)return;
    var d=s.date.slice(0,10);
    days[d]=(days[d]||0)+(s.duration||0);
  });
  state.tasks.forEach(function(t){
    if(t.isDone&&t.date){
      var d=t.date.slice(0,10);
      if(!days[d])days[d]=0;
    }
  });
  return days;
}
function getHeatmapData(){
  var days=getDailyStudyMinutes();
  var today=new Date();
  var result=[];
  var start=new Date(today);
  start.setDate(start.getDate()-364);
  // Ajuster au dimanche
  var offset=start.getDay();
  start.setDate(start.getDate()-offset);
  var totalDays=371;
  for(var i=0;i<totalDays;i++){
    var d=new Date(start);
    d.setDate(d.getDate()+i);
    if(d>today)break;
    var key=d.toISOString().slice(0,10);
    var min=days[key]||0;
    var level=0;
    if(min>=120)level=4;
    else if(min>=60)level=3;
    else if(min>=30)level=2;
    else if(min>0)level=1;
    result.push({date:key,minutes:min,level:level,weekday:d.getDay()});
  }
  return result;
}
function getWeeklyBarData(){
  // 7 derniers jours
  var days=[];
  var labels=['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
  var today=new Date();
  for(var i=6;i>=0;i--){
    var d=new Date(today);
    d.setDate(d.getDate()-i);
    var key=d.toISOString().slice(0,10);
    var min=getDailyStudyMinutes()[key]||0;
    days.push({label:labels[d.getDay()],minutes:min,date:key});
  }
  return days;
}
function getSubjectPieData(){
  var totals={};
  state.sessions.forEach(function(s){
    if(!s.subject_id)return;
    var subj=state.subjects.find(function(x){return x.id===s.subject_id});
    if(!subj)return;
    totals[subj.name]=(totals[subj.name]||0)+(s.duration||0);
  });
  var arr=Object.keys(totals).map(function(name){return{name:name,minutes:totals[name]}});
  arr.sort(function(a,b){return b.minutes-a.minutes});
  return arr.slice(0,6);
}
function getMonthlyLineData(){
  // 6 derniers mois : progression globale
  var months=[];
  var now=new Date();
  for(var i=5;i>=0;i--){
    var d=new Date(now.getFullYear(),now.getMonth()-i,1);
    var monthStr=d.toISOString().slice(0,7);
    var monthSessions=state.sessions.filter(function(s){
      return s.date && s.date.slice(0,7)===monthStr;
    });
    var min=monthSessions.reduce(function(sum,s){return sum+(s.duration||0)},0);
    months.push({
      label:d.toLocaleDateString('fr-FR',{month:'short'}),
      hours:Math.round(min/60*10)/10,
      sessions:monthSessions.length
    });
  }
  return months;
}
function getTopStudyDays(){
  var days=getDailyStudyMinutes();
  var arr=Object.keys(days).map(function(date){return{date:date,minutes:days[date]}});
  arr.sort(function(a,b){return b.minutes-a.minutes});
  return arr.slice(0,5);
}
function getTotalStudyHours(){
  var min=state.sessions.reduce(function(sum,s){return sum+(s.duration||0)},0);
  return Math.round(min/60*10)/10;
}
function getWeeklyGoalProgress(){
  var days=getDailyStudyMinutes();
  var today=new Date();
  var weekTotal=0;
  for(var i=0;i<7;i++){
    var d=new Date(today);
    d.setDate(d.getDate()-i);
    var key=d.toISOString().slice(0,10);
    weekTotal+=(days[key]||0);
  }
  var goal=7*60; // 7h/semaine par défaut
  return {current:weekTotal,goal:goal,percent:Math.min(Math.round(weekTotal/goal*100),100)};
}
function getStudyStreakFromSessions(){
  var days=getDailyStudyMinutes();
  var today=new Date();
  var streak=0;
  for(var i=0;i<365;i++){
    var d=new Date(today);
    d.setDate(d.getDate()-i);
    var key=d.toISOString().slice(0,10);
    if(days[key]&&days[key]>0)streak++;
    else if(i>0)break;
  }
  return streak;
}
function getAveragePerDay(){
  var days=getDailyStudyMinutes();
  var keys=Object.keys(days);
  if(!keys.length)return 0;
  var total=keys.reduce(function(sum,k){return sum+days[k]},0);
  return Math.round(total/keys.length);
}

// ============================================================
//  SVG CHARTS GENERATORS
// ============================================================
function generateHeatmapSVG(){
  var data=getHeatmapData();
  if(!data.length)return '<div class="chart-empty">Pas assez de données</div>';
  var cellSize=12;
  var cellGap=3;
  var weeksCount=Math.ceil(data.length/7);
  var svgWidth=weeksCount*(cellSize+cellGap)+40;
  var svgHeight=7*(cellSize+cellGap)+30;
  var colors=['#1a2430','#1f4a2f','#2a6a3f','#3a8a4f','#6ae8a5'];
  
  var cells='';
  data.forEach(function(d,i){
    var week=Math.floor(i/7);
    var day=d.weekday;
    var x=30+week*(cellSize+cellGap);
    var y=20+day*(cellSize+cellGap);
    var color=colors[d.level];
    var tooltip=d.date+' : '+d.minutes+' min';
    cells+='<rect x="'+x+'" y="'+y+'" width="'+cellSize+'" height="'+cellSize+'" rx="2" fill="'+color+'"><title>'+tooltip+'</title></rect>';
  });
  
  // Mois labels
  var monthLabels='';
  var lastMonth=-1;
  data.forEach(function(d,i){
    var week=Math.floor(i/7);
    var date=new Date(d.date);
    var month=date.getMonth();
    if(month!==lastMonth&&date.getDate()<=7){
      var x=30+week*(cellSize+cellGap);
      var monthName=date.toLocaleDateString('fr-FR',{month:'short'});
      monthLabels+='<text x="'+x+'" y="12" fill="#6b7f9a" font-size="10">'+monthName+'</text>';
      lastMonth=month;
    }
  });
  
  return '<svg class="heatmap-svg" viewBox="0 0 '+svgWidth+' '+svgHeight+'" xmlns="http://www.w3.org/2000/svg">'+monthLabels+cells+'</svg>';
}
function generateBarChartSVG(){
  var data=getWeeklyBarData();
  var max=Math.max.apply(null,data.map(function(d){return d.minutes}))||60;
  var svgWidth=340,svgHeight=180;
  var chartTop=20,chartBottom=140,chartLeft=20,chartRight=320;
  var chartHeight=chartBottom-chartTop;
  var chartWidth=chartRight-chartLeft;
  var barWidth=30;
  var gap=(chartWidth-data.length*barWidth)/(data.length+1);
  
  var bars='';
  var labels='';
  var values='';
  data.forEach(function(d,i){
    var x=chartLeft+gap+(barWidth+gap)*i;
    var h=(d.minutes/max)*chartHeight;
    var y=chartBottom-h;
    bars+='<rect class="bar" x="'+x+'" y="'+y+'" width="'+barWidth+'" height="'+h+'" rx="3"><title>'+d.minutes+' min</title></rect>';
    labels+='<text class="bar-label" x="'+(x+barWidth/2)+'" y="'+(chartBottom+15)+'">'+d.label+'</text>';
    if(d.minutes>0){
      values+='<text class="bar-value" x="'+(x+barWidth/2)+'" y="'+(y-4)+'">'+d.minutes+'</text>';
    }
  });
  
  // Grille horizontale
  var grid='';
  for(var i=0;i<=4;i++){
    var y=chartBottom-(chartHeight/4)*i;
    var val=Math.round(max/4*i);
    grid+='<line x1="'+chartLeft+'" y1="'+y+'" x2="'+chartRight+'" y2="'+y+'" stroke="#1a2430" stroke-width="1"/>';
    grid+='<text x="0" y="'+(y+3)+'" fill="#4b5a72" font-size="9">'+val+'</text>';
  }
  
  return '<svg class="chart-svg bar-chart" viewBox="0 0 '+svgWidth+' '+svgHeight+'" xmlns="http://www.w3.org/2000/svg">'+grid+bars+values+labels+'</svg>';
}
function generatePieChartSVG(){
  var data=getSubjectPieData();
  if(!data.length)return '<div class="chart-empty">Aucune session enregistrée</div>';
  var total=data.reduce(function(sum,d){return sum+d.minutes},0);
  if(total===0)return '<div class="chart-empty">Aucune session enregistrée</div>';
  
  var colors=['#4b7bec','#6ae8a5','#e8cc6a','#e86a6a','#a86ae8','#8ba2c0'];
  var cx=140,cy=120,r=90;
  var currentAngle=-90;
  var slices='';
  var legend='';
  
  data.forEach(function(d,i){
    var angle=(d.minutes/total)*360;
    var startAngle=currentAngle;
    var endAngle=currentAngle+angle;
    var largeArc=angle>180?1:0;
    var x1=cx+r*Math.cos(startAngle*Math.PI/180);
    var y1=cy+r*Math.sin(startAngle*Math.PI/180);
    var x2=cx+r*Math.cos(endAngle*Math.PI/180);
    var y2=cy+r*Math.sin(endAngle*Math.PI/180);
    var pct=Math.round(d.minutes/total*100);
    var path='M '+cx+' '+cy+' L '+x1+' '+y1+' A '+r+' '+r+' 0 '+largeArc+' 1 '+x2+' '+y2+' Z';
    slices+='<path class="pie-slice" d="'+path+'" fill="'+colors[i%colors.length]+'"><title>'+d.name+' : '+d.minutes+' min ('+pct+'%)</title></path>';
    legend+='<div class="leg-item"><div class="leg-box" style="background:'+colors[i%colors.length]+'"></div>'+d.name+'</div>';
    currentAngle=endAngle;
  });
  
  // Cercle blanc au centre
  var svg='<svg class="chart-svg" viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg">'+slices+'<circle cx="'+cx+'" cy="'+cy+'" r="40" fill="#111a24"/><text x="'+cx+'" y="'+(cy-4)+'" text-anchor="middle" fill="#8ba2c0" font-size="10">Total</text><text x="'+cx+'" y="'+(cy+12)+'" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="700">'+Math.round(total/60)+'h</text></svg>';
  
  return svg+'<div class="chart-legend">'+legend+'</div>';
}
function generateLineChartSVG(){
  var data=getMonthlyLineData();
  var max=Math.max.apply(null,data.map(function(d){return d.hours}))||10;
  var svgWidth=340,svgHeight=180;
  var chartTop=20,chartBottom=140,chartLeft=30,chartRight=320;
  var chartHeight=chartBottom-chartTop;
  var chartWidth=chartRight-chartLeft;
  var stepX=chartWidth/(data.length-1);
  
  var points=[];
  data.forEach(function(d,i){
    var x=chartLeft+i*stepX;
    var y=chartBottom-(d.hours/max)*chartHeight;
    points.push({x:x,y:y,hours:d.hours,label:d.label});
  });
  
  var pathD=points.map(function(p,i){return(i===0?'M':'L')+' '+p.x+' '+p.y}).join(' ');
  var areaD=pathD+' L '+points[points.length-1].x+' '+chartBottom+' L '+points[0].x+' '+chartBottom+' Z';
  
  var dots='';
  var labels='';
  var values='';
  points.forEach(function(p){
    dots+='<circle class="line-dot" cx="'+p.x+'" cy="'+p.y+'" r="4" fill="#4b7bec" stroke="#111a24" stroke-width="2"><title>'+p.hours+'h</title></circle>';
    labels+='<text x="'+p.x+'" y="'+(chartBottom+15)+'" text-anchor="middle" fill="#8ba2c0" font-size="10">'+p.label+'</text>';
    if(p.hours>0){
      values+='<text x="'+p.x+'" y="'+(p.y-8)+'" text-anchor="middle" fill="#c8d6e5" font-size="10" font-weight="600">'+p.hours+'</text>';
    }
  });
  
  var grid='';
  for(var i=0;i<=4;i++){
    var y=chartBottom-(chartHeight/4)*i;
    var val=Math.round(max/4*i*10)/10;
    grid+='<line x1="'+chartLeft+'" y1="'+y+'" x2="'+chartRight+'" y2="'+y+'" stroke="#1a2430" stroke-width="1"/>';
    grid+='<text x="0" y="'+(y+3)+'" fill="#4b5a72" font-size="9">'+val+'h</text>';
  }
  
  return '<svg class="chart-svg" viewBox="0 0 '+svgWidth+' '+svgHeight+'" xmlns="http://www.w3.org/2000/svg">'+grid+'<path class="line-area" d="'+areaD+'" fill="#4b7bec"/>'+'<path class="line-path" d="'+pathD+'" stroke="#4b7bec"/>'+dots+values+labels+'</svg>';
}
function generateTopDaysHTML(){
  var data=getTopStudyDays();
  if(!data.length)return '<div class="chart-empty">Aucune donnée</div>';
  var max=data[0].minutes;
  var html='';
  data.forEach(function(d,i){
    var rankClass=i===0?'gold':i===1?'silver':i===2?'bronze':'';
    var pct=max?Math.round(d.minutes/max*100):0;
    html+='<div class="top-day"><div class="td-rank '+rankClass+'">'+(i+1)+'</div><div class="td-info"><div class="td-date">'+new Date(d.date).toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'short'})+'</div><div class="td-min">'+d.minutes+' min</div></div><div class="td-bar"><div class="td-fill" style="width:'+pct+'%"></div></div></div>';
  });
  return html;
}
function generateSubjectProgressHTML(){
  var data=state.subjects.map(function(s){
    return {name:s.name,progress:getSubjectProgress(s.id),icon:'📚'};
  });
  data.sort(function(a,b){return b.progress-a.progress});
  return data.map(function(s){
    var color=s.progress<30?'#e86a6a':s.progress<60?'#e8cc6a':'#6ae8a5';
    return '<div class="subj-adv"><div class="sa-icon">'+s.icon+'</div><div class="sa-info"><div class="sa-name">'+s.name+'</div><div class="sa-bar"><div class="sa-fill" style="width:'+s.progress+'%;background:'+color+'"></div></div></div><div class="sa-pct" style="color:'+color+'">'+s.progress+'%</div></div>';
  }).join('');
}

// ============================================================
//  NOTIFICATIONS
// ============================================================
function requestNotificationPermission(){if(!('Notification' in window))return Promise.resolve('unsupported');if(Notification.permission==='granted')return Promise.resolve('granted');if(Notification.permission==='denied')return Promise.resolve('denied');return Notification.requestPermission()}
function sendNotification(title,body,options){if(!state.settings||!state.settings.notifications)return;if(!('Notification' in window))return;if(Notification.permission!=='granted')return;try{var n=new Notification(title,Object.assign({body:body},options||{}));n.onclick=function(){window.focus();n.close()};return n}catch(e){}}
function computeNotifications(){var notifs=[];try{var now=new Date();var nowMinutes=now.getHours()*60+now.getMinutes();var today=new Date().toISOString().slice(0,10);var dayNames=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];var todayName=dayNames[now.getDay()];COURSE_SCHEDULE.filter(function(c){return c.day===todayName}).forEach(function(c){var startM=parseInt(c.start.split(':')[0])*60+parseInt(c.start.split(':')[1]);var diff=startM-nowMinutes;if(diff>0&&diff<=15)notifs.push({id:'class_'+c.subject+'_'+c.start+'_'+today,type:'urgent',icon:'⏰',title:'Cours dans '+diff+' min',text:c.subject+' à '+c.start,date:today})});(state.exams||[]).forEach(function(exam){try{var examDate=new Date(exam.date+'T'+(exam.time||'00:00'));var daysLeft=Math.ceil((examDate-now)/86400000);if(daysLeft===0)notifs.push({id:'exam_'+exam.id+'_today',type:'urgent',icon:'🔥',title:'Examen aujourd\'hui !',text:exam.title,date:exam.date});else if(daysLeft===1)notifs.push({id:'exam_'+exam.id+'_tomorrow',type:'urgent',icon:'⚠️',title:'Examen demain !',text:exam.title,date:exam.date});else if(daysLeft===3)notifs.push({id:'exam_'+exam.id+'_3days',type:'warning',icon:'📝',title:'Examen dans 3 jours',text:exam.title,date:exam.date})}catch(e){}});var todayTasks=(state.tasks||[]).filter(function(t){return t.date===today&&!t.isDone});if(todayTasks.length>0)notifs.push({id:'tasks_'+today,type:'info',icon:'📋',title:todayTasks.length+' tâche'+(todayTasks.length>1?'s':'')+' aujourd\'hui',text:todayTasks.slice(0,2).map(function(t){return t.text}).join(', '),date:today});var errDue=0;try{errDue=getErrorsDueToday().length}catch(e){}if(errDue>0)notifs.push({id:'errors_'+today,type:'warning',icon:'⚠️',title:errDue+' erreur'+(errDue>1?'s':'')+' à réviser',text:'Stats → Erreurs',date:today});var fcDue=0;try{state.languages.forEach(function(L){fcDue+=getCardsDueToday(L.id).length})}catch(e){}if(fcDue>0)notifs.push({id:'fc_'+today,type:'info',icon:'🃏',title:fcDue+' carte'+(fcDue>1?'s':'')+' à réviser',text:'Flashcards',date:today})}catch(e){}return notifs}
function updateNotifications(){try{var notifs=computeNotifications();state.notifications=notifs;if(state.settings&&state.settings.notifications&&('Notification' in window)&&Notification.permission==='granted'){var lastSent=state._lastSentNotifs||{};notifs.forEach(function(n){if(lastSent[n.id])return;if(n.type==='urgent'||n.type==='warning'){sendNotification(n.title,n.text,{tag:n.id});lastSent[n.id]=true}});state._lastSentNotifs=lastSent}}catch(e){}}
function getUnreadNotificationsCount(){var count=0;(state.notifications||[]).forEach(function(n){if(!state.readNotifications[n.id])count++});return count}
function markAllNotificationsRead(){(state.notifications||[]).forEach(function(n){state.readNotifications[n.id]=true});saveState()}

// ============================================================
//  ERRORS
// ============================================================
function getErrorsDueToday(){var now=Date.now();return (state.errors||[]).filter(function(e){if(!e.next_review)return true;return new Date(e.next_review).getTime()<=now})}
function getErrorsByStatus(status){if(status==='all')return state.errors||[];return (state.errors||[]).filter(function(e){return e.status===status})}
function computeErrorStats(){var s={to_review:0,in_progress:0,mastered:0};(state.errors||[]).forEach(function(e){if(s[e.status]!==undefined)s[e.status]++});return s}
function scheduleNextReview(error){var days=2;if(error.status==='in_progress')days=7;else if(error.status==='mastered')days=30;var d=new Date();d.setDate(d.getDate()+days);error.next_review=d.toISOString().slice(0,10)}
function addError(desc,subjectId,cause,correction,difficulty){var err={id:'err_'+generateId(),description:desc,subject_id:subjectId||null,cause:cause||'other',correction:correction||'',difficulty:difficulty||'medium',status:'to_review',revisions:0,max_revisions:3,created_at:new Date().toISOString().slice(0,10),last_reviewed:null,next_review:new Date().toISOString().slice(0,10)};state.errors.push(err);scheduleNextReview(err);saveState();return err}
function reviewError(id,success){var err=(state.errors||[]).find(function(e){return e.id===id});if(!err)return;err.last_reviewed=new Date().toISOString().slice(0,10);if(success){err.revisions++;if(err.revisions>=err.max_revisions)err.status='mastered';else err.status='in_progress'}else{err.revisions=0;err.status='to_review'}scheduleNextReview(err);saveState()}
function getErrorSubjectName(err){if(err.subject_id){var s=(state.subjects||[]).find(function(x){return x.id===err.subject_id});if(s)return s.name}return 'Autre'}
function getCauseLabel(cause){var l={forgot_formula:'نسيت الصيغة',confusion:'خلط بين مفهومين',calculation:'خطأ في الحساب',reading:'سوء قراءة السؤال',methodology:'منهجية خاطئة',other:'سبب آخر'};return l[cause]||'Autre'}

// ============================================================
//  FLASHCARDS
// ============================================================
function getFlashcardsForLanguage(langId){if(!state.flashcards)state.flashcards={};var cards=state.flashcards[langId];if(!cards){cards=[];var L=getLang(langId);if(L){Object.keys(L.levels).forEach(function(lk){var lv=L.levels[lk];if(!lv.lessons)return;lv.lessons.forEach(function(lesson){cards.push({id:'fc_'+langId+'_'+lk+'_'+lesson.num,langId:langId,level:lk,lessonNum:lesson.num,question:'Que signifie "'+lesson.title+'" en '+L.name+'?',answer:lesson.sub+' — '+(lesson.learn&&lesson.learn[0]?lesson.learn[0]:'Voir la leçon'),hint:lesson.learn?lesson.learn.join(' · '):'',auto:true})})})}state.flashcards[langId]=cards;saveState()}return cards}
function getCardReviewInfo(langId,cardId){if(!state.fcReview)state.fcReview={};if(!state.fcReview[langId])state.fcReview[langId]={};if(!state.fcReview[langId][cardId])state.fcReview[langId][cardId]={level:0,nextReview:new Date().toISOString().slice(0,10),lastReview:null,repetitions:0};return state.fcReview[langId][cardId]}
function getCardsDueToday(langId){var cards=getFlashcardsForLanguage(langId);var now=Date.now();return cards.filter(function(c){var info=getCardReviewInfo(langId,c.id);if(!info.nextReview)return true;return new Date(info.nextReview).getTime()<=now})}
function getCardsMastered(langId){var cards=getFlashcardsForLanguage(langId);return cards.filter(function(c){return getCardReviewInfo(langId,c.id).level>=3})}
function updateCardReview(langId,cardId,quality){var info=getCardReviewInfo(langId,cardId);info.lastReview=new Date().toISOString().slice(0,10);if(quality==='hard'){info.level=Math.max(0,info.level-1);info.nextReview=new Date().toISOString().slice(0,10)}else if(quality==='ok'){info.level=Math.min(5,info.level+1);var days=info.level>=3?7:1;var d=new Date();d.setDate(d.getDate()+days);info.nextReview=d.toISOString().slice(0,10)}else if(quality==='easy'){info.level=Math.min(5,info.level+2);var days2=info.level>=4?30:(info.level>=2?7:3);var d2=new Date();d2.setDate(d2.getDate()+days2);info.nextReview=d2.toISOString().slice(0,10)}info.repetitions++;state.fcReview[langId][cardId]=info;saveState()}

// ============================================================
//  RESOURCES
// ============================================================
function detectResourceType(url){var u=(url||'').toLowerCase();if(u.indexOf('youtube.com')!==-1||u.indexOf('youtu.be')!==-1)return 'video';if(u.indexOf('.pdf')!==-1)return 'pdf';if(u.indexOf('.doc')!==-1||u.indexOf('.docx')!==-1)return 'doc';if(u.indexOf('.jpg')!==-1||u.indexOf('.jpeg')!==-1||u.indexOf('.png')!==-1||u.indexOf('.gif')!==-1)return 'image';if(u.indexOf('.mp3')!==-1)return 'audio';if(u.indexOf('.mp4')!==-1)return 'video';return 'link'}
function getResourceIcon(type){var icons={pdf:'📄',doc:'📝',image:'🖼️',video:'🎥',audio:'🎵',link:'🔗',folder:'📁'};return icons[type]||'🔗'}
function getResourceTypeLabel(type){var labels={pdf:'PDF',doc:'Document',image:'Image',video:'Vidéo',audio:'Audio',link:'Lien'};return labels[type]||'Lien'}
function getDomainName(url){try{var u=new URL(url);return u.hostname.replace('www.','')}catch(e){return ''}}
function getAllResources(){var all=[];Object.keys(state.resources||{}).forEach(function(sid){var s=(state.subjects||[]).find(function(x){return x.id===sid});var folders=state.resources[sid]||{};Object.keys(folders).forEach(function(fn){(folders[fn]||[]).forEach(function(r){all.push(Object.assign({},r,{subjectName:s?s.name:'Matière',subjectId:sid,folder:fn,type:detectResourceType(r.url)}))})})});return all}
function getResourcesStats(){var all=getAllResources();var stats={total:all.length,favorites:0,byType:{}};all.forEach(function(r){if(r.favorite)stats.favorites++;if(!stats.byType[r.type])stats.byType[r.type]=0;stats.byType[r.type]++});return stats}
function filterResources(all){var list=all;if(state.resFilter!=='Tout'){if(state.resFilter==='⭐ Favoris')list=list.filter(function(r){return r.favorite});else list=list.filter(function(r){return r.type===state.resFilter})}if(state.resSearch.trim()){var q=state.resSearch.toLowerCase();list=list.filter(function(r){return (r.title||'').toLowerCase().indexOf(q)!==-1||(r.subjectName||'').toLowerCase().indexOf(q)!==-1})}return list}

// ============================================================
//  RENDER MAIN
// ============================================================
function render(){try{var root=document.getElementById('root');if(!root)return;if(!state.onboardingDone){root.innerHTML=renderOnboarding();attachOnboarding();return}updateNotifications();root.innerHTML=renderApp();attachAppEvents()}catch(e){console.error('Render error:',e);var root=document.getElementById('root');if(root)root.innerHTML='<div style="padding:20px;color:#e86a6a;"><h2>⚠️ Erreur</h2><pre style="font-size:12px;white-space:pre-wrap;">'+e.message+'</pre><button onclick="location.reload()" style="margin-top:20px;background:#2a3f60;color:#fff;border:none;padding:10px 20px;border-radius:10px;">Recharger</button></div>'}}

function renderOnboarding(){
  var step=state.onboardingStep||0;
  var content='';
  if(step===0){content='<div class="onboarding-step-content"><div class="onboarding-icon">🐺</div><h1 class="onboarding-title">White Wolf Scholar</h1><p class="onboarding-subtitle">Study → Track → Analyze → Master</p><div class="onboarding-features"><div class="onboarding-feature"><span class="of-icon">📚</span><span class="of-text"><strong>Master APCE</strong> — 9 matières</span></div><div class="onboarding-feature"><span class="of-icon">🌱</span><span class="of-text"><strong>3 langues</strong> — A1 → C1</span></div><div class="onboarding-feature"><span class="of-icon">🤖</span><span class="of-text"><strong>Chatbot IA</strong> — 12 capacités</span></div><div class="onboarding-feature"><span class="of-icon">📊</span><span class="of-text"><strong>Stats avancées</strong> — Heatmap + Charts</span></div></div><button class="onboarding-btn" data-onboard-next>Suivant →</button></div>'}
  else if(step===1){content='<div class="onboarding-step-content"><div class="onboarding-icon">🎯</div><h1 class="onboarding-title">Ton objectif</h1><p class="onboarding-subtitle">Quel est ton but principal ?</p><div class="onboarding-goal-options"><div class="onboarding-goal '+(state.onboardingData.goal==='study'?'selected':'')+'" data-onboard-goal="study"><span class="og-icon">📚</span><span class="og-label">Étudier</span></div><div class="onboarding-goal '+(state.onboardingData.goal==='lang'?'selected':'')+'" data-onboard-goal="lang"><span class="og-icon">🌍</span><span class="og-label">Apprendre langues</span></div><div class="onboarding-goal '+(state.onboardingData.goal==='code'?'selected':'')+'" data-onboard-goal="code"><span class="og-icon">💻</span><span class="og-label">Programmer</span></div><div class="onboarding-goal '+(state.onboardingData.goal==='all'?'selected':'')+'" data-onboard-goal="all"><span class="og-icon">🚀</span><span class="og-label">Tout</span></div></div><button class="onboarding-btn" data-onboard-next>Suivant →</button><button class="onboarding-btn secondary" data-onboard-prev>← Retour</button></div>'}
  else if(step===2){content='<div class="onboarding-step-content"><div class="onboarding-icon">🔔</div><h1 class="onboarding-title">Notifications</h1><p class="onboarding-subtitle">Active les rappels pour ne rien manquer</p><div class="onboarding-features"><div class="onboarding-feature"><span class="of-icon">⏰</span><span class="of-text">Rappels de cours</span></div><div class="onboarding-feature"><span class="of-icon">📝</span><span class="of-text">Alertes examens</span></div><div class="onboarding-feature"><span class="of-icon">📋</span><span class="of-text">Tâches du jour</span></div></div><button class="onboarding-btn" data-onboard-finish>🐺 Commencer →</button><button class="onboarding-skip" data-onboard-skip>Plus tard</button></div>'}
  var dots='';
  for(var i=0;i<3;i++){var cls=i===step?'active':(i<step?'completed':'');dots+='<div class="onboarding-dot '+cls+'"></div>'}
  return '<div class="onboarding-wrap"><div class="onboarding-container"><div class="onboarding-progress">'+dots+'</div>'+content+'</div></div>';
}
function attachOnboarding(){var next=document.querySelector('[data-onboard-next]');if(next)next.onclick=function(){state.onboardingStep=(state.onboardingStep||0)+1;render()};var prev=document.querySelector('[data-onboard-prev]');if(prev)prev.onclick=function(){state.onboardingStep=Math.max(0,(state.onboardingStep||0)-1);render()};var skip=document.querySelector('[data-onboard-skip]');if(skip)skip.onclick=function(){finishOnboarding(false)};var finish=document.querySelector('[data-onboard-finish]');if(finish)finish.onclick=function(){finishOnboarding(true)};document.querySelectorAll('[data-onboard-goal]').forEach(function(el){el.onclick=function(){state.onboardingData.goal=this.dataset.onboardGoal;render()}})}
function finishOnboarding(enableNotifs){state.onboardingDone=true;state.onboardingStep=0;if(enableNotifs){state.settings.notifications=true;requestNotificationPermission().then(function(result){if(result==='granted')showToast('🔔 Notifications activées')})}else{state.settings.notifications=false}saveState();render()}

function renderApp(){
  var a=state.route;
  var inG=(a==='growth'||a==='language'||a==='lesson'||a==='programming'||a==='flashcards');
  var unread=getUnreadNotificationsCount();
  var bellDot=unread>0?'<span class="notif-badge">'+unread+'</span>':'';
  return '<div class="app">'+
    '<div class="header"><h1><span class="wolf-icon">🐺</span> White Wolf v39</h1>'+
      '<div style="position:relative;display:flex;align-items:center;gap:8px;">'+
        '<span class="settings-btn" id="notif-trigger" style="position:relative;">🔔'+bellDot+'</span>'+
        '<span class="settings-btn" id="settings-trigger">⚙️</span>'+
        '<div class="settings-dropdown" id="settings-menu">'+
          '<div class="section-label">Préférences</div>'+
          '<div class="item" data-setting="showSmartRevision"><span class="icon">🧠</span> Recommandations <span class="toggle-status">'+(state.settings.showSmartRevision?'✅':'❌')+'</span></div>'+
          '<div class="item" data-setting="notifications"><span class="icon">🔔</span> Notifications <span class="toggle-status">'+(state.settings.notifications?'✅':'❌')+'</span></div>'+
          '<div class="divider"></div>'+
          '<div class="section-label">Actions</div>'+
          '<div class="item" data-modal="notifications"><span class="icon">📬</span> Centre de notifications</div>'+
          '<div class="item" data-modal="about"><span class="icon">ℹ️</span> À propos</div>'+
        '</div></div></div>'+
    renderContent(a)+
    '<nav class="bottom-nav">'+
      '<button class="'+(a==='dashboard'?'active':'')+'" data-route="dashboard"><span class="nav-icon">📊</span>Dashboard</button>'+
      '<button class="'+(a==='master'||a==='subject'||a==='topic'?'active':'')+'" data-route="master"><span class="nav-icon">📚</span>Master</button>'+
      '<button class="'+(inG?'active':'')+'" data-route="growth"><span class="nav-icon">🌱</span>Growth</button>'+
      '<button class="'+(a==='planning'?'active':'')+'" data-route="planning"><span class="nav-icon">📅</span>Planning</button>'+
      '<button class="'+(a==='stats'?'active':'')+'" data-route="stats"><span class="nav-icon">📈</span>Stats</button>'+
      '<button class="'+(a==='emploi'?'active':'')+'" data-route="emploi"><span class="nav-icon">📋</span>Emploi</button>'+
      '<button class="'+(a==='resources'?'active':'')+'" data-route="resources"><span class="nav-icon">📚</span>Ressources</button>'+
    '</nav></div>'+(state.modal?renderModal():'');
}

function renderContent(r){switch(r){case'dashboard':return renderDashboard();case'master':return renderMaster();case'subject':return renderSubject();case'topic':return renderTopic();case'growth':return renderGrowth();case'language':return renderLanguage();case'lesson':return renderLesson();case'programming':return renderProgramming();case'flashcards':return renderFlashcards();case'planning':return renderPlanning();case'stats':return renderStats();case'emploi':return renderEmploi();case'resources':return renderResources();default:return renderDashboard()}}

function renderDashboard(){
  var tt=state.topics.length;
  var pr=state.topics.filter(function(t){return getProgress(t.id).level>0}).length;
  var ov=tt?Math.round((pr/tt)*100):0;
  var tasks=getTasksForToday();
  var mins=Math.floor(pomodoro.remaining/60),secs=pomodoro.remaining%60;
  var ts=(mins<10?'0':'')+mins+':'+(secs<10?'0':'')+secs;
  var sc=getScheduleStatus();
  var rev=computeSmartRevision();
  var hasRev=Object.keys(rev).length>0;
  var xpL=Math.floor(state.xp/100)+1,xpI=state.xp%100;
  var lg=langTotalDone('de')+langTotalDone('en')+langTotalDone('es');
  var pg=progTotalDone();
  var errDue=getErrorsDueToday().length;
  var notifs=state.notifications||[];
  var urgentNotifs=notifs.filter(function(n){return n.type==='urgent'||n.type==='warning'});
  return '<div>'+
    (urgentNotifs.length>0?'<div class="notif-widget" data-modal="notifications"><div class="nw-top"><span class="nw-icon">🔔</span><span class="nw-title">Notifications</span><span class="nw-count">'+urgentNotifs.length+'</span></div><div class="nw-list">'+urgentNotifs.slice(0,3).map(function(n){return '<div class="nw-item"><span class="nw-item-dot '+(n.type==='urgent'?'urgent':n.type==='warning'?'warning':'info')+'"></span>'+n.icon+' '+n.title+'</div>'}).join('')+'</div></div>':'')+
    '<div class="card" style="padding:14px;"><div class="card-title" style="margin-bottom:8px;">📋 Emploi du temps</div><div class="schedule-status-container">'+
      (sc.currentClass?'<div class="schedule-status-item"><div class="status-icon">🔴</div><div><div class="status-text">En cours : '+sc.currentClass.subject+'</div><div class="status-sub">'+sc.currentClass.start+' - '+sc.currentClass.end+'</div></div></div>':'')+
      (sc.nextClass?'<div class="schedule-status-item"><div class="status-icon">⏳</div><div><div class="status-text">Prochain : '+sc.nextClass.subject+'</div><div class="status-sub">À '+sc.nextClass.start+'</div></div></div>':'<div class="schedule-status-item"><div class="status-icon">☕</div><div><div class="status-text">Aucun cours</div></div></div>')+
    '</div></div>'+
    (errDue>0?'<div class="err-widget" data-route="stats" data-stats-tab="errors"><div class="ew-top"><div class="ew-icon">⚠️</div><div class="ew-title">Erreurs à revoir</div><div class="ew-count">'+errDue+'</div></div><div class="ew-sub">Clique pour réviser</div></div>':'')+
    '<div class="card" style="background:linear-gradient(135deg,#16222e,#111a24);"><div class="flex-between"><div><div style="font-size:12px;color:#8ba2c0;">XP</div><div style="font-size:26px;font-weight:700;color:#e8cc6a;">'+state.xp+'</div></div><div style="text-align:right;"><div style="font-size:12px;color:#8ba2c0;">NIVEAU '+xpL+'</div><div style="font-size:13px;color:#8fb3e6;">'+xpI+'/100</div></div></div><div class="progress-bar" style="margin-top:10px;"><div class="fill" style="width:'+xpI+'%;background:linear-gradient(90deg,#4b7bec,#e8cc6a);"></div></div></div>'+
    '<div class="card"><div class="card-title">Progression <span class="badge">'+ov+'%</span></div><div class="progress-bar"><div class="fill" style="width:'+ov+'%;"></div></div><div class="flex-between text-small" style="margin-top:6px;"><span>'+pr+'/'+tt+' chapitres</span><span>'+lg+' leçons · '+pg+' prog</span></div></div>'+
    '<div class="card"><div class="card-title">📋 Tâches du jour <span class="badge">'+new Date().toLocaleDateString('fr-FR')+'</span></div>'+
      (tasks.length?tasks.map(function(t){return '<div class="task-item"><div class="task-left"><div class="task-text">'+t.text+'</div><div class="task-meta">'+(t.time||'')+' • '+t.priority+'</div></div><div class="task-right"><span class="task-priority '+t.priority+'">'+t.priority+'</span><button class="btn-small btn-outline" data-task-done="'+t.id+'">✅</button><button class="btn-small btn-outline" data-task-delete="'+t.id+'">🗑️</button></div></div>'}).join(''):'<div class="text-muted text-small">Aucune tâche.</div>')+
    '</div>'+
    (hasRev&&state.settings.showSmartRevision?'<div class="card"><div class="card-title">🧠 À réviser <span class="badge">'+Object.keys(rev).reduce(function(a,k){return a+rev[k].length},0)+'</span></div>'+Object.keys(rev).map(function(sid){var items=rev[sid];var s=state.subjects.find(function(x){return x.id===sid});return '<div class="revision-group"><div class="revision-group-header" data-group-toggle="'+sid+'"><div><span class="group-title">📖 '+(s?s.name:'Matière')+'</span><span class="group-meta"> • '+items.length+'</span></div><span class="group-meta">▼</span></div><div class="revision-group-body" id="body-'+sid+'">'+items.map(function(r){return '<div class="revision-item"><div><div class="name">'+r.title+'</div><div class="sub">📅 '+r.daysSinceLastStudy+' jours · Niveau '+r.level+'/4</div></div><button class="btn-small btn-outline" data-session-topic="'+r.topicId+'">🔄</button></div>'}).join('')+'</div></div>'}).join('')+'</div>':'')+
    '<div class="card"><div class="card-title">⏱️ Pomodoro <span class="badge">'+(pomodoro.isBreak?'☕ Pause':'📖 Travail')+'</span></div><div class="pomodoro-container"><div class="timer-display">'+ts+'</div><div class="timer-controls">'+(!pomodoro.isRunning?'<button class="btn-start" data-pomo-start>▶️ Démarrer</button>':'<button class="btn-start running" data-pomo-pause>⏸️ Pause</button>')+'<button class="btn-stop" data-pomo-stop>⏹️ Arrêter</button><button class="btn-reset" data-pomo-reset>↺ Reset</button></div></div></div>'+
  '</div>';
}

function renderMaster(){return '<div><h2 style="font-size:20px;margin-bottom:14px;">📚 Master APCE — S1</h2><div class="subject-grid">'+state.subjects.map(function(s){return '<div class="subject-card" data-subject-id="'+s.id+'"><h4>'+s.name+'</h4><div class="sub-meta"><span>'+getSubjectProgress(s.id)+'%</span><span>'+s.code+'</span></div><div class="progress-bar" style="margin-top:6px;"><div class="fill" style="width:'+getSubjectProgress(s.id)+'%;"></div></div></div>'}).join('')+'</div></div>'}
function renderSubject(){var sub=state.subjects.find(function(s){return s.id===state.subjectId});if(!sub)return '<div class="card">Matière non trouvée</div>';var tops=state.topics.filter(function(t){return t.subject_id===sub.id});return '<div><button class="back-btn" data-route="master">← Retour</button><h2 style="font-size:18px;margin-bottom:14px;">'+sub.name+'</h2><div class="card">'+tops.map(function(t){var p=getProgress(t.id);return '<div class="topic-item" data-topic-id="'+t.id+'"><div class="left"><span class="name">'+t.title+'</span><span class="sub">Niveau '+p.level+'/4</span></div><div class="right"><span class="'+getStatusClass(p.level)+'">●</span><button class="btn-small btn-outline" data-topic-down="'+t.id+'">−</button><button class="btn-small btn-outline" data-topic-up="'+t.id+'">+</button></div></div>'}).join('')+'</div></div>'}
function renderTopic(){var t=state.topics.find(function(x){return x.id===state.topicId});if(!t)return '<div class="card">Chapitre non trouvé</div>';var p=getProgress(t.id);return '<div><button class="back-btn" data-route="subject" data-subject-id="'+t.subject_id+'">← Retour</button><h2 style="font-size:18px;margin-bottom:14px;">'+t.title+'</h2><div class="card"><div class="card-title">Maîtrise <span class="badge">'+getLevelLabel(p.level)+'</span></div><div class="progress-bar"><div class="fill" style="width:'+(p.level*25)+'%;"></div></div><div style="margin-top:12px;display:flex;gap:8px;justify-content:center;"><button class="btn-small btn-outline" data-topic-down="'+t.id+'">−</button><button class="btn-small btn-outline" data-topic-up="'+t.id+'">+</button></div></div><div class="card"><div class="card-title">Notes</div><textarea id="topic-notes" rows="3">'+(p.notes||'')+'</textarea><button class="btn-primary btn-small mt-8" data-save-notes="'+t.id+'">Enregistrer</button></div></div>'}

function renderGrowth(){
  var totalProg=PROGRAMMING_TOPICS.length;
  var doneProg=progTotalDone();
  var percentProg=Math.round((doneProg/totalProg)*100);
  return '<div><h2 style="font-size:22px;margin-bottom:6px;">🌱 Growth</h2><p style="font-size:13px;color:#8ba2c0;margin-bottom:20px;">طوّر مهاراتك</p><div class="card" style="background:linear-gradient(135deg,#16222e,#111a24);padding:14px;"><div class="flex-between"><div><div style="font-size:12px;color:#8ba2c0;">مرحباً بك</div><div style="font-size:17px;font-weight:700;margin-top:4px;">اختر مساراً</div></div><div style="text-align:center;"><div style="font-size:26px;">🔥</div><div style="font-size:15px;font-weight:700;color:#e8cc6a;">'+state.studyStreak+'</div><div style="font-size:10px;color:#8ba2c0;">يوم</div></div></div></div>'+
    '<div style="font-size:14px;font-weight:600;color:#8ba2c0;margin:20px 0 12px;">💻 البرمجة</div>'+
    '<div class="growth-path-card" data-route="programming"><div class="path-header"><div class="path-icon">💻</div><div class="path-info"><h3>Programmation</h3><div class="path-sub">Frontend · Python · Java · Projets</div></div></div><div class="progress-bar"><div class="fill" style="width:'+percentProg+'%;background:linear-gradient(90deg,#4b7bec,#6ae8a5);"></div></div><div class="path-goal"><span>'+doneProg+' / '+totalProg+' sujets</span><span class="goal-badge">'+percentProg+'%</span></div></div>'+
    '<div style="font-size:14px;font-weight:600;color:#8ba2c0;margin:20px 0 12px;">🌍 اللغات</div>'+
    state.languages.map(function(L){var c=langCurrentLevel(L.id);var p=langProg(L.id,c);return '<div class="growth-path-card" data-lang="'+L.id+'"><div class="path-header"><div class="path-icon">'+L.flag+'</div><div class="path-info"><h3>'+L.name+' <span style="font-size:13px;color:#8ba2c0;">'+L.nameAr+'</span></h3><div class="path-sub">الهدف: '+L.goalLabel+' · الحالي: '+c+'</div></div></div><div class="progress-bar"><div class="fill" style="width:'+p.percent+'%;"></div></div><div class="path-goal"><span>'+p.done+'/'+p.total+' دروس '+c+'</span><span class="goal-badge">'+p.percent+'%</span></div></div>'}).join('')+
  '</div>';
}

function renderProgramming(){var domains=['Frontend','Python & Data','Java & C','Outils & Projets'];var emojis={'Frontend':'🌐','Python & Data':'🐍','Java & C':'☕','Outils & Projets':'🚀'};return '<button class="back-btn" data-route="growth">← رجوع</button><h2 style="font-size:22px;margin-bottom:14px;">💻 البرمجة</h2><p style="font-size:13px;color:#8ba2c0;margin-bottom:16px;">17 موضوعاً في 4 مجالات</p>'+domains.map(function(dom){var topics=PROGRAMMING_TOPICS.filter(function(t){return t.domain===dom});if(!topics.length)return '';return '<div class="prog-category"><div class="cat-header"><span class="cat-icon">'+emojis[dom]+'</span>'+dom+'<span class="cat-count">'+topics.length+'</span></div>'+topics.map(function(t){var p=state.programming[t.id]||{level:0,score:0};return '<div class="lesson-row '+(p.level>0?'completed':'')+'" data-prog-id="'+t.id+'"><div class="lesson-num">'+t.icon+'</div><div class="lesson-info"><div class="lesson-title">'+t.title+'</div><div class="lesson-sub">'+getLevelLabel(p.level)+'</div></div><div class="lesson-status">'+(p.level>0?'✅':'▶️')+'</div></div>'}).join('')+'</div>'}).join('')}

function renderLanguage(){
  var L=getLang(state.langId);
  var keys=Object.keys(L.levels);
  var cur=langCurrentLevel(L.id);
  var curIdx=keys.indexOf(cur);if(curIdx<0)curIdx=0;
  var lv=L.levels[state.levelKey]||L.levels[cur];
  if(!lv)return '<div class="card">اللغة غير متوفرة</div>';
  var p=langProg(L.id,state.levelKey);
  var td=langTotalDone(L.id);
  var cefr=keys.map(function(k,i){var cls='';if(i<curIdx)cls='completed';else if(k===cur)cls='active';else if(k===L.goal)cls='target';var lbl='';if(i<curIdx)lbl='✓';else if(k===cur)lbl='حالي';else if(k===L.goal)lbl='🎯';return '<div class="cefr-step '+cls+'"><div class="cefr-circle">'+k+'</div><div class="cefr-lbl">'+lbl+'</div></div>'}).join('');
  var tabs=keys.map(function(k){var i=keys.indexOf(k);var unlocked=i<=curIdx;var pk=langProg(L.id,k);var cls='';if(k===state.levelKey)cls+=' active';if(!unlocked)cls+=' locked';if(pk.percent===100)cls+=' completed';return '<div class="level-tab'+cls+'" '+(unlocked?'data-level="'+k+'"':'')+'>'+k+(pk.percent===100?' ✓':'')+'</div>'}).join('');
  var nextInc=-1;for(var i=0;i<lv.lessons.length;i++){if(!langIsDone(L.id,state.levelKey,lv.lessons[i].num)){nextInc=i;break}}
  var lessons=lv.lessons.map(function(lesson,idx){var done=langIsDone(L.id,state.levelKey,lesson.num);var locked=!done&&(nextInc===-1||idx>nextInc);var cls=done?'completed':(locked?'locked':'');var icon=done?'✅':(locked?'🔒':'▶️');return '<div class="lesson-row '+cls+'" data-lesson="'+lesson.num+'"><div class="lesson-num">'+lesson.num+'</div><div class="lesson-info"><div class="lesson-title">'+lesson.title+'</div><div class="lesson-sub">'+lesson.sub+'</div></div><div class="lesson-status">'+icon+'</div></div>'}).join('');
  var cards=getFlashcardsForLanguage(L.id);var due=getCardsDueToday(L.id).length;
  var fcEntry='<div class="fc-entry" data-route="flashcards" data-fc-lang="'+L.id+'"><div class="fce-ic">🃏</div><div class="fce-info"><h3>Flashcards</h3><div class="fce-sub">'+cards.length+' cartes · '+due+' à réviser</div></div><div class="fce-arrow">→</div></div>';
  var res='';
  res+='<div class="res-group">📕 كتب</div>'+lv.resources.books.map(function(b){return '<div class="res-row"><div class="res-icon">📕</div><div class="res-info"><div class="title">'+b.title+'</div><div class="sub">'+b.author+' · '+b.sub+'</div></div></div>'}).join('');
  res+='<div class="res-group">🎥 يوتيوب</div>'+lv.resources.youtube.map(function(y){return '<div class="res-row"><div class="res-icon">🎥</div><div class="res-info"><div class="title">'+y.title+'</div><div class="sub">'+y.sub+'</div></div><a href="https://www.youtube.com/results?search_query='+encodeURIComponent(y.title)+'" target="_blank">بحث</a></div>'}).join('');
  res+='<div class="res-group">📱 تطبيقات</div>'+lv.resources.apps.map(function(a){return '<div class="res-row"><div class="res-icon">📱</div><div class="res-info"><div class="title">'+a.title+'</div><div class="sub">'+a.sub+'</div></div></div>'}).join('');
  res+='<div class="res-group">🌐 مواقع</div>'+lv.resources.websites.map(function(w){return '<div class="res-row"><div class="res-icon">🌐</div><div class="res-info"><div class="title">'+w.title+'</div><div class="sub">'+w.sub+'</div></div></div>'}).join('');
  return '<button class="back-btn" data-route="growth">← رجوع</button>'+
    '<div class="lang-hero"><div class="hero-top"><div class="hero-flag">'+L.flag+'</div><div class="hero-title"><h2>'+L.name+'</h2><div class="hero-sub">'+L.nameAr+' · الهدف: '+L.goalLabel+'</div></div></div><div class="lang-stats-row"><div class="lang-stat-box"><div class="stat-emoji">🔥</div><div class="stat-num">'+state.studyStreak+'</div><div class="stat-lbl">سلسلة</div></div><div class="lang-stat-box"><div class="stat-emoji">📚</div><div class="stat-num">'+td+'</div><div class="stat-lbl">دروس</div></div><div class="lang-stat-box"><div class="stat-emoji">⭐</div><div class="stat-num">'+state.xp+'</div><div class="stat-lbl">XP</div></div></div></div>'+
    fcEntry+'<div class="cefr-ladder">'+cefr+'</div><div class="level-tabs">'+tabs+'</div>'+
    '<div class="level-desc"><h3>📌 '+lv.label+'</h3><p>'+lv.description+'</p><ul>'+lv.canDo.map(function(c){return '<li>✓ '+c+'</li>'}).join('')+'</ul><div class="meta-row"><span>⏱️ '+lv.duration+'</span><span>📅 '+lv.pace+'</span><span>📖 '+lv.lessons.length+' دروس</span></div></div>'+
    '<div class="card"><div class="card-title">📋 خطة '+state.levelKey+' <span class="badge">'+p.percent+'%</span></div><div class="progress-bar"><div class="fill" style="width:'+p.percent+'%;"></div></div><div style="margin-top:12px;">'+lessons+'</div></div>'+
    '<div class="resources-section"><h4>📚 المراجع</h4>'+res+'</div>';
}

function renderLesson(){
  var L=getLang(state.langId);
  var lv=L.levels[state.levelKey];
  if(!lv)return '<div class="card">الدرس غير موجود</div>';
  var lesson=null;for(var i=0;i<lv.lessons.length;i++){if(lv.lessons[i].num===state.lessonNum){lesson=lv.lessons[i];break}}
  if(!lesson)return '<div class="card">الدرس غير موجود</div>';
  var done=langIsDone(L.id,state.levelKey,lesson.num);
  return '<button class="back-btn" data-route="language" data-lang="'+L.id+'">← رجوع إلى '+state.levelKey+'</button>'+
    '<div class="lesson-detail"><div class="lbl">الدرس '+lesson.num+' · '+state.levelKey+' · '+L.name+'</div><h3>'+lesson.title+'</h3><div class="lsub">'+lesson.sub+'</div><div class="what-learn"><h4>💡 ما ستتعلمه:</h4><ul>'+lesson.learn.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div>'+
    '<div style="font-size:13px;color:#8ba2c0;margin-bottom:8px;">🎥 فيديو موصى به:</div>'+
    '<a class="video-link" href="'+lesson.video.url+'" target="_blank"><div class="vid-icon">▶️</div><div class="vid-info"><div class="t">'+lesson.video.title+'</div><div class="s">'+lesson.video.channel+'</div></div><div class="vid-arrow">→</div></a>'+
    '<button class="action-btn '+(done?'done':'')+'" '+(done?'disabled':'')+' data-complete="'+lesson.num+'">'+(done?'✅ أكملت':'✅ أكملت (+10 XP)')+'</button></div>'+
    '<div class="card" style="padding:12px;"><div style="font-size:13px;color:#8ba2c0;line-height:1.6;">💡 ادرس الدرس، ثم ارجع وأكمل.</div></div>';
}

function renderFlashcards(){
  var L=getLang(state.fcLang||state.langId||'de');
  if(state.fcScreen==='session')return renderFcSession(L);
  var cards=getFlashcardsForLanguage(L.id);var due=getCardsDueToday(L.id);var mastered=getCardsMastered(L.id);
  var header='<div class="fc-header"><div class="fc-top"><div class="fc-icon">🃏</div><div class="fc-title"><h2>Flashcards</h2><div class="fc-sub">'+L.flag+' '+L.name+' · '+L.nameAr+'</div></div></div><div class="fc-stats"><div class="fc-stat total"><div class="fs-num">'+cards.length+'</div><div class="fs-lbl">Total</div></div><div class="fc-stat due"><div class="fs-num">'+due.length+'</div><div class="fs-lbl">À réviser</div></div><div class="fc-stat mastered"><div class="fs-num">'+mastered.length+'</div><div class="fs-lbl">Maîtrisées</div></div></div></div>';
  var actions='<div class="fc-actions"><button class="fc-action-btn primary" data-start-fc-session '+(due.length===0?'disabled':'')+'>▶️ Réviser ('+due.length+')</button><button class="fc-action-btn secondary" data-add-fc-manual>➕ Ajouter</button></div>';
  var list='';if(cards.length===0){list='<div class="fc-empty"><div class="fce-icon">🃏</div><div class="fce-text">Aucune carte</div></div>'}else{list='<div class="card"><div class="card-title">📋 Toutes les cartes <span class="badge">'+cards.length+'</span></div><div class="fc-list">'+cards.map(function(c){var info=getCardReviewInfo(L.id,c.id);var statusEmoji=info.level>=3?'🟢':(info.level>=1?'🟡':'🔴');var nextDate=info.nextReview?new Date(info.nextReview).toLocaleDateString('fr-FR'):'maintenant';return '<div class="fc-list-item"><div class="fli-content"><div class="fli-q">'+statusEmoji+' '+c.question+'</div><div class="fli-a">'+c.answer+'</div><div class="fli-meta">Niveau '+info.level+' · Prochaine: '+nextDate+'</div></div><button class="btn-small btn-outline" data-delete-fc="'+c.id+'">🗑️</button></div>'}).join('')+'</div></div>'}
  return '<button class="back-btn" data-route="language" data-lang="'+L.id+'">← رجوع</button>'+header+actions+list;
}

function renderFcSession(L){
  var session=state.fcSession;
  if(!session||!session.cards.length)return '<button class="back-btn" data-route="flashcards" data-fc-lang="'+L.id+'">← رجوع</button><div class="fc-end"><div class="fe-icon">🎉</div><div class="fe-title">Session terminée !</div><button class="btn-primary" data-end-fc-session style="width:100%;justify-content:center;">Retour</button></div>';
  var idx=session.currentIdx;
  if(idx>=session.cards.length){var reviewed=session.reviewed;var correct=session.correct;state.fcSession=null;state.fcScreen='list';return '<div class="fc-end"><div class="fe-icon">🎉</div><div class="fe-title">Terminé !</div><div class="fe-stats"><div class="fe-stat"><div class="fes-num" style="color:#8fb3e6">'+reviewed+'</div><div class="fes-lbl">Revues</div></div><div class="fe-stat"><div class="fes-num" style="color:#6ae8a5">'+correct+'</div><div class="fes-lbl">Correctes</div></div><div class="fe-stat"><div class="fes-num" style="color:#e8cc6a">'+Math.round((correct/Math.max(reviewed,1))*100)+'%</div><div class="fes-lbl">Score</div></div></div><button class="btn-primary" data-end-fc-session style="width:100%;justify-content:center;">Retour</button></div>'}
  var card=session.cards[idx];var progress=Math.round((idx/session.cards.length)*100);
  var cardHTML='<div class="fc-card '+(state.fcFlipped?'flipped':'')+'" data-flip-card><div class="fc-side-label">'+(state.fcFlipped?'RÉPONSE':'QUESTION')+'</div>'+(state.fcFlipped?'<div class="fc-answer">'+card.answer+'</div>'+(card.hint?'<div class="fc-hint">💡 '+card.hint+'</div>':''):'<div class="fc-question">'+card.question+'</div><div class="fc-hint">Clique pour voir la réponse</div>')+'</div>';
  var difficulty='';if(state.fcFlipped){difficulty='<div class="fc-difficulty"><button class="fc-diff-btn hard" data-fc-quality="hard"><span class="fdb-icon">❌</span><span>Difficile</span></button><button class="fc-diff-btn ok" data-fc-quality="ok"><span class="fdb-icon">👍</span><span>OK</span></button><button class="fc-diff-btn easy" data-fc-quality="easy"><span class="fdb-icon">✅</span><span>Facile</span></button></div>'}
  return '<button class="back-btn" data-end-fc-session>← Arrêter</button><div class="fc-session-bar"><span>'+L.flag+' '+L.name+'</span><span class="sb-progress">'+(idx+1)+' / '+session.cards.length+'</span></div><div class="fc-progress-bar"><div class="fill" style="width:'+progress+'%"></div></div>'+cardHTML+difficulty;
}

function renderPlanning(){
  var days=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  var keys=['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
  var schedule=Object.assign({},DEFAULT_SCHEDULE,state.customSchedule);
  var todayTasks=state.tasks.filter(function(t){return t.date===new Date().toISOString().slice(0,10)});
  if(state.isEditingPlanning){return '<div><h2 style="font-size:22px;margin-bottom:16px;">📅 Modifier</h2><div class="card">'+keys.map(function(k,i){return '<div class="planning-day-edit"><div class="day-header"><span>'+days[i]+'</span><button class="btn-small btn-outline" data-reset-day="'+k+'">↺</button></div><input type="text" id="planning-input-'+k+'" value="'+(schedule[k]||'')+'"></div>'}).join('')+'<div style="display:flex;gap:8px;margin-top:16px;"><button class="btn-primary" data-save-planning>💾 Enregistrer</button><button class="btn-outline" data-cancel-planning>Annuler</button></div></div></div>'}
  return '<div><div class="flex-between" style="margin-bottom:16px;"><h2 style="font-size:22px;">📅 Planning</h2><button class="btn-primary btn-small" data-edit-planning>✏️ Modifier</button></div><div class="card"><div class="card-title">Planning hebdo</div>'+keys.map(function(k,i){return '<div class="stat-row"><span style="font-weight:500;min-width:80px;">'+days[i]+'</span><span class="text-small">'+(schedule[k]||'—')+'</span></div>'}).join('')+'</div><div class="card"><div class="card-title">📋 Tâches <span class="badge">'+new Date().toLocaleDateString('fr-FR')+'</span></div>'+(todayTasks.length?todayTasks.map(function(t){return '<div class="task-item"><div class="task-left"><div class="task-text '+(t.isDone?'task-done':'')+'">'+t.text+'</div><div class="task-meta">'+(t.time||'')+' • '+t.priority+'</div></div><div class="task-right"><span class="task-priority '+t.priority+'">'+t.priority+'</span>'+(t.isDone?'':'<button class="btn-small btn-outline" data-task-done="'+t.id+'">✅</button>')+'<button class="btn-small btn-outline" data-task-delete="'+t.id+'">🗑️</button></div></div>'}).join(''):'<div class="text-muted text-small">Aucune tâche.</div>')+'<button class="btn-primary btn-small mt-8" data-add-task>➕ Ajouter</button></div><div class="card"><div class="card-title">📝 Examens <span class="badge">'+state.exams.length+'</span></div>'+(state.exams.length?state.exams.map(function(e){var dLeft=Math.ceil((new Date(e.date)-new Date())/86400000);var cls=dLeft<=1?'urgent':dLeft<=3?'soon':'';var label=dLeft===0?'Aujourd\'hui':dLeft===1?'Demain':'Dans '+dLeft+'j';return '<div class="exam-item"><div class="exam-left"><div class="exam-title">'+e.title+'</div><div class="exam-date">📅 '+new Date(e.date).toLocaleDateString('fr-FR')+' '+(e.time?'à '+e.time:'')+'</div></div><div class="exam-right"><span class="exam-badge '+cls+'">'+label+'</span><button class="btn-small btn-outline" data-delete-exam="'+e.id+'">🗑️</button></div></div>'}).join(''):'<div class="text-muted text-small">Aucun examen.</div>')+'<button class="btn-primary btn-small mt-8" data-add-exam>➕ Ajouter</button></div></div>';
}

// ============================================================
//  STATS (avec onglets + Advanced)
// ============================================================
function renderStats(){
  var tab=state.statsTab||'overview';
  var errDue=getErrorsDueToday().length;
  var tabsHTML='<div class="inner-tabs">'+
    '<div class="inner-tab '+(tab==='overview'?'active':'')+'" data-stats-tab="overview">📈 Vue générale</div>'+
    '<div class="inner-tab '+(tab==='advanced'?'active':'')+'" data-stats-tab="advanced">📊 Analyses</div>'+
    '<div class="inner-tab '+(tab==='errors'?'active':'')+'" data-stats-tab="errors">⚠️ Erreurs'+(errDue>0?' <span class="tab-count">'+errDue+'</span>':'')+'</div>'+
  '</div>';
  var content='';
  if(tab==='errors')content=renderErrorsScreen();
  else if(tab==='advanced')content=renderAdvancedStats();
  else content=renderStatsOverview();
  return '<div><h2 style="font-size:22px;margin-bottom:16px;">📈 Statistiques</h2>'+tabsHTML+content+'</div>';
}

function renderStatsOverview(){
  var totalSessions=state.sessions.length;
  var totalTopics=state.topics.length;
  var progressed=state.topics.filter(function(t){return getProgress(t.id).level>0}).length;
  var totalHours=getTotalStudyHours();
  var best=null,bestP=-1,worst=null,worstP=101;
  state.subjects.forEach(function(s){var p=getSubjectProgress(s.id);if(p>bestP){bestP=p;best=s}if(p<worstP){worstP=p;worst=s}});
  var progDone=progTotalDone();
  var totalProg=PROGRAMMING_TOPICS.length;
  var resStats=getResourcesStats();
  var avgPerDay=getAveragePerDay();
  var streak=getStudyStreakFromSessions();
  return '<div>'+
    '<div class="stats-hero"><div class="sh-top"><div class="sh-icon">📊</div><div class="sh-title"><h2>Aperçu global</h2><div class="sh-sub">Toutes tes statistiques</div></div></div><div class="sh-grid"><div class="sh-box"><div class="sh-num" style="color:#e8cc6a;">'+state.xp+'</div><div class="sh-lbl">XP Total</div></div><div class="sh-box"><div class="sh-num" style="color:#e86a6a;">'+state.studyStreak+'</div><div class="sh-lbl">Série actuelle</div></div><div class="sh-box"><div class="sh-num" style="color:#6ae8a5;">'+totalHours+'h</div><div class="sh-lbl">Temps total</div></div></div></div>'+
    '<div class="card"><div class="card-title">Master APCE</div><div class="stat-row"><span class="label">⏱️ Temps</span><span class="value">'+totalHours+' h</span></div><div class="stat-row"><span class="label">📚 Sessions</span><span class="value">'+totalSessions+'</span></div><div class="stat-row"><span class="label">📖 Chapitres</span><span class="value">'+progressed+'/'+totalTopics+'</span></div><div class="stat-row"><span class="label">⏱️ Moyenne/jour</span><span class="value">'+avgPerDay+' min</span></div><div class="stat-row"><span class="label">🔥 Série calculée</span><span class="value">'+streak+' jours</span></div><div class="stat-row"><span class="label">🥇 Forte</span><span class="value">'+(best?best.name:'—')+'</span></div><div class="stat-row"><span class="label">⚠️ Faible</span><span class="value">'+(worst?worst.name:'—')+'</span></div></div>'+
    '<div class="card"><div class="card-title">💻 Programmation</div><div class="stat-row"><span class="label">Sujets commencés</span><span class="value">'+progDone+'/'+totalProg+'</span></div></div>'+
    '<div class="card"><div class="card-title">📚 Ressources</div><div class="stat-row"><span class="label">Total</span><span class="value">'+resStats.total+'</span></div><div class="stat-row"><span class="label">⭐ Favoris</span><span class="value">'+resStats.favorites+'</span></div></div>'+
    '<div class="card"><div class="card-title">🌍 Langues</div>'+state.languages.map(function(L){var cur=langCurrentLevel(L.id);var p=langProg(L.id,cur);return '<div style="margin-bottom:12px;"><div class="flex-between text-small"><span>'+L.flag+' '+L.name+' ('+cur+')</span><span>'+p.percent+'%</span></div><div class="progress-bar"><div class="fill" style="width:'+p.percent+'%;"></div></div></div>'}).join('')+'</div>'+
  '</div>';
}

function renderAdvancedStats(){
  return '<div>'+
    '<div class="card"><div class="card-title">🔥 Heatmap annuel <span class="badge">365 jours</span></div><div class="heatmap-wrap">'+generateHeatmapSVG()+'</div><div class="heatmap-legend"><span>Moins</span><div class="hl-box hl-0"></div><div class="hl-box hl-1"></div><div class="hl-box hl-2"></div><div class="hl-box hl-3"></div><div class="hl-box hl-4"></div><span>Plus</span></div></div>'+
    '<div class="objective-card"><div class="obj-header"><div class="obj-title">🎯 Objectif hebdomadaire (7h)</div><div class="obj-percent">'+getWeeklyGoalProgress().percent+'%</div></div><div class="obj-bar"><div class="obj-fill" style="width:'+getWeeklyGoalProgress().percent+'%"></div></div><div class="obj-meta"><span>'+Math.round(getWeeklyGoalProgress().current/60*10)/10+'h cette semaine</span><span>Objectif: 7h</span></div></div>'+
    '<div class="streak-card"><div class="st-fire">🔥</div><div class="st-num">'+getStudyStreakFromSessions()+'</div><div class="st-lbl">Jours consécutifs d\'étude</div><div class="st-sub">Continue comme ça !</div></div>'+
    '<div class="chart-wrap"><div class="chart-title">📊 Étude des 7 derniers jours</div>'+generateBarChartSVG()+'</div>'+
    '<div class="chart-wrap"><div class="chart-title">📈 Évolution mensuelle (6 mois)</div>'+generateLineChartSVG()+'</div>'+
    '<div class="chart-wrap"><div class="chart-title">🥧 Répartition par matière</div>'+generatePieChartSVG()+'</div>'+
    '<div class="card"><div class="card-title">🏆 Top 5 jours d\'étude</div>'+generateTopDaysHTML()+'</div>'+
    '<div class="card"><div class="card-title">📚 Progression par matière</div>'+generateSubjectProgressHTML()+'</div>'+
  '</div>';
}

function renderErrorsScreen(){
  if(state.reviewSession)return renderReviewSession();
  var stats=computeErrorStats();
  var filt=state.errFilter||'all';
  var filtered=getErrorsByStatus(filt);
  var filtLabels={all:'Tout',to_review:'🔴 À revoir',in_progress:'🟡 En cours',mastered:'🟢 Maîtrisées'};
  var filtHTML='<div class="err-filters">'+Object.keys(filtLabels).map(function(k){return '<div class="err-filter '+(filt===k?'active':'')+'" data-err-filter="'+k+'">'+filtLabels[k]+'</div>'}).join('')+'</div>';
  var statsHTML='<div class="err-stats-row"><div class="err-stat-box red"><div class="es-num">'+stats.to_review+'</div><div class="es-lbl">🔴 À revoir</div></div><div class="err-stat-box yellow"><div class="es-num">'+stats.in_progress+'</div><div class="es-lbl">🟡 En cours</div></div><div class="err-stat-box green"><div class="es-num">'+stats.mastered+'</div><div class="es-lbl">🟢 Maîtrisées</div></div></div>';
  var dueCount=getErrorsDueToday().length;
  var startBtn=dueCount>0?'<button class="btn-primary" data-start-review style="width:100%;justify-content:center;margin-bottom:14px;">🔄 Démarrer la révision ('+dueCount+')</button>':'';
  var listHTML='';
  if(state.errors.length===0){listHTML='<div class="err-empty"><div class="empty-icon">🎯</div><div class="empty-text">Aucune erreur enregistrée</div></div>'}
  else if(filtered.length===0){listHTML='<div class="err-empty"><div class="empty-icon">🔍</div><div class="empty-text">Aucune erreur dans ce filtre</div></div>'}
  else{listHTML=filtered.map(function(err){var statusLabel=err.status==='to_review'?'🔴 À revoir':(err.status==='in_progress'?'🟡 En cours':'🟢 Maîtrisé');var revDots='';for(var i=0;i<err.max_revisions;i++){revDots+='<div class="rev-dot '+(i<err.revisions?'filled':'')+'"></div>'}var meta='<span>📚 '+getErrorSubjectName(err)+'</span><span>💬 '+getCauseLabel(err.cause)+'</span><span>📅 '+new Date(err.created_at).toLocaleDateString('fr-FR')+'</span>';return '<div class="error-card status-'+err.status+'"><div class="ec-header"><div class="ec-title">'+err.description+'</div><div class="ec-badge">'+statusLabel+'</div></div><div class="ec-meta">'+meta+'</div>'+(err.correction?'<div class="ec-detail">✅ '+err.correction+'</div>':'')+'<div class="ec-revisions"><span>Révisions :</span><div class="rev-dots">'+revDots+'</div><span>'+err.revisions+'/'+err.max_revisions+'</span></div><div class="ec-actions"><button class="btn-small btn-outline" data-review-error="'+err.id+'">🔄 Réviser</button><button class="btn-small btn-outline" data-delete-error="'+err.id+'">🗑️ Supprimer</button></div></div>'}).join('')}
  return '<div>'+statsHTML+'<button class="btn-primary" data-add-error style="width:100%;justify-content:center;margin-bottom:14px;">➕ Ajouter une erreur</button>'+startBtn+filtHTML+listHTML+'</div>';
}

function renderReviewSession(){
  var session=state.reviewSession;
  if(!session||session.currentIdx>=session.errors.length){
    var reviewed=session?session.errors.length:0;state.reviewSession=null;
    return '<div class="review-session" style="text-align:center;"><div style="font-size:48px;margin-bottom:12px;">🎉</div><div style="font-size:18px;font-weight:700;color:#6ae8a5;margin-bottom:8px;">Session terminée !</div><div style="font-size:13px;color:#c8d6e5;margin-bottom:16px;">Tu as révisé '+reviewed+' erreur'+(reviewed>1?'s':'')+'.</div><button class="btn-primary" data-end-review style="width:100%;justify-content:center;">Retour</button></div>';
  }
  var err=session.errors[session.currentIdx];var meta=getErrorSubjectName(err)+' · '+getCauseLabel(err.cause);
  return '<div class="review-session"><div class="rs-progress"><span>Révision '+(session.currentIdx+1)+'/'+session.errors.length+'</span><span>Révisions: '+err.revisions+'/'+err.max_revisions+'</span></div><div class="rs-question">'+err.description+'</div><div style="font-size:12px;color:#8ba2c0;text-align:center;margin-bottom:12px;">'+meta+'</div>'+(err.correction?'<div class="rs-correction">✅ '+err.correction+'</div>':'')+'<div style="font-size:13px;color:#c8d6e5;text-align:center;margin-bottom:14px;">Maîtrises-tu ?</div><div class="rs-actions"><button class="rs-btn-no" data-review-result="no">❌ Non</button><button class="rs-btn-yes" data-review-result="yes">✅ Oui</button></div><button class="btn-outline btn-small" data-end-review style="width:100%;justify-content:center;margin-top:10px;">Arrêter</button></div>';
}

function renderEmploi(){
  var days=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  var keys=['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
  return '<div><h2 style="font-size:22px;margin-bottom:16px;">📋 Emploi</h2>'+keys.map(function(k,idx){var cls=COURSE_SCHEDULE.filter(function(c){return c.day===k});if(!cls.length)return '<div class="card"><div class="card-title">'+days[idx]+'</div><div class="text-muted text-small">Aucun cours</div></div>';return '<div class="card"><div class="card-title">'+days[idx]+'</div>'+cls.map(function(c){return '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #111a24;font-size:14px;"><span>'+c.subject+'</span><div style="display:flex;align-items:center;gap:8px;"><span style="color:#6b7f9a;">'+c.start+' - '+c.end+'</span><span style="color:#8ba2c0;font-size:12px;">• '+c.room+'</span></div></div>'}).join('')+'</div>'}).join('')+'</div>';
}

function renderResources(){
  var all=getAllResources();var stats=getResourcesStats();var filtered=filterResources(all);
  var header='<div class="res-header"><div class="res-top"><div class="res-icon-main">📚</div><div class="res-title"><h2>Ressources</h2><div class="res-sub">Centralise tous tes liens</div></div></div><div class="res-stats"><div class="res-stat"><div class="rs-num">'+stats.total+'</div><div class="rs-lbl">Total</div></div><div class="res-stat"><div class="rs-num" style="color:#e8cc6a;">'+stats.favorites+'</div><div class="rs-lbl">⭐ Favoris</div></div><div class="res-stat"><div class="rs-num" style="color:#6ae8a5;">'+Object.keys(stats.byType).length+'</div><div class="rs-lbl">Types</div></div></div></div>';
  var search='<div class="res-search"><input type="text" id="res-search-input" placeholder="🔍 Rechercher..." value="'+state.resSearch+'"><span class="search-icon">🔍</span></div>';
  var actions='<div class="res-quick-actions"><button class="res-action-btn primary" data-add-resource>➕ Nouveau lien</button><button class="res-action-btn secondary" data-add-folder>📁 Dossier</button></div>';
  var filterLabels={Tout:'Tout',pdf:'📄 PDF',doc:'📝 Docs',image:'🖼️ Images',video:'🎥 Vidéos',link:'🔗 Liens','⭐ Favoris':'⭐ Favoris'};
  var filters='<div class="res-filters">'+Object.keys(filterLabels).map(function(k){return '<div class="res-filter '+(state.resFilter===k?'active':'')+'" data-res-filter="'+k+'">'+filterLabels[k]+'</div>'}).join('')+'</div>';
  var content='';
  if(filtered.length===0){content='<div class="res-empty"><div class="re-icon">📚</div><div class="re-text">'+(all.length===0?'Aucune ressource':'Aucun résultat')+'</div>'+(all.length===0?'<button class="btn-primary" data-add-resource>➕ Ajouter</button>':'')+'</div>'}
  else{var grouped={};filtered.forEach(function(r){if(!grouped[r.subjectName])grouped[r.subjectName]=[];grouped[r.subjectName].push(r)});content=Object.keys(grouped).map(function(subjectName){var items=grouped[subjectName];var isOpen=state.resOpenGroups[subjectName]!==false;var itemsHTML=isOpen?items.map(function(r){var type=r.type;var icon=getResourceIcon(type);var domain=getDomainName(r.url);var star=r.favorite?'⭐':'☆';return '<div class="res-card type-'+type+'"><div class="rc-star '+(r.favorite?'active':'')+'" data-toggle-fav="'+r.subjectId+'|'+r.id+'">'+star+'</div><div class="rc-header"><div class="rc-icon">'+icon+'</div><div class="rc-info"><div class="rc-title">'+r.title+'</div><div class="rc-meta"><span class="rc-badge">'+getResourceTypeLabel(type)+'</span>'+(domain?'<span>🌐 '+domain+'</span>':'')+'</div></div></div><div class="rc-actions"><a href="'+r.url+'" target="_blank" class="btn-open">🔗 Ouvrir</a><button class="btn-copy" data-copy-url="'+(r.url||'').replace(/"/g,'&quot;')+'">📋</button><button class="btn-delete" data-delete-resource="'+r.subjectId+'|'+r.id+'">🗑️</button></div></div>'}).join(''):'';return '<div style="margin-bottom:16px;"><div class="res-group-header '+(isOpen?'open':'')+'" data-toggle-group="'+subjectName+'"><div class="rgh-title">📚 '+subjectName+'</div><div style="display:flex;align-items:center;gap:10px;"><span class="rgh-count">'+items.length+'</span><span class="rgh-arrow">'+(isOpen?'▼':'▶')+'</span></div></div>'+itemsHTML+'</div>'}).join('')}
  return '<div>'+header+search+actions+filters+'<div class="card" style="padding:14px;">'+content+'</div></div>';
}

function renderModal(){
  var m=state.modal;if(!m)return '';
  if(m.type==='notifications'){var notifs=state.notifications||[];var unread=notifs.filter(function(n){return !state.readNotifications[n.id]});var listHTML='';if(notifs.length===0){listHTML='<div class="notif-empty"><div class="ne-icon">🔕</div><div class="ne-text">Aucune notification</div></div>'}else{listHTML='<div class="notif-list">'+notifs.map(function(n){var isRead=state.readNotifications[n.id];return '<div class="notif-item '+n.type+'" style="'+(isRead?'opacity:.5':'')+'"><div class="ni-icon">'+n.icon+'</div><div class="ni-content"><div class="ni-title">'+n.title+'</div><div class="ni-meta">'+n.text+'</div></div></div>'}).join('')+'</div>'}var clearBtn=unread.length>0?'<button class="btn-outline btn-small" data-mark-all-read style="margin-bottom:12px;">✅ Tout marquer comme lu</button>':'';return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>📬 Notifications</h3>'+clearBtn+listHTML+'<div class="modal-actions"><button class="btn-primary" data-close-modal>Fermer</button></div></div></div>'}
  if(m.type==='about'){return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>ℹ️ À propos</h3><div style="text-align:center;padding:10px 0;"><div style="font-size:64px;">🐺</div><div style="font-weight:600;font-size:22px;">White Wolf Scholar</div><div class="text-muted">Version 39 — Advanced Stats</div><div class="text-muted text-small" style="margin-top:8px;">+ Heatmap · Charts · Analyse avancée</div></div><div class="modal-actions"><button class="btn-primary" data-close-modal>Fermer</button></div></div></div>'}
  if(m.type==='task'){var today=new Date().toISOString().slice(0,10);return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>➕ Nouvelle tâche</h3><div style="display:grid;gap:12px;"><input id="task-text" placeholder="Description" autofocus><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div><label>📅 Date</label><input type="date" id="task-date" value="'+today+'"></div><div><label>⏰ Heure</label><input type="time" id="task-time" value="09:00"></div></div><div><label>🎯 Priorité</label><select id="task-priority"><option value="Basse">🟢 Basse</option><option value="Moyenne" selected>🟡 Moyenne</option><option value="Haute">🔴 Haute</option></select></div></div><div class="modal-actions"><button class="btn-outline" data-close-modal>Annuler</button><button class="btn-primary" data-save-task>✅ Enregistrer</button></div></div></div>'}
  if(m.type==='exam'){var today2=new Date().toISOString().slice(0,10);return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>📝 Nouvel examen</h3><div style="display:grid;gap:12px;"><input id="exam-title" placeholder="Titre" autofocus><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div><label>📅 Date</label><input type="date" id="exam-date" value="'+today2+'"></div><div><label>⏰ Heure</label><input type="time" id="exam-time" value="09:00"></div></div><div><label>📚 Matière</label><select id="exam-subject"><option value="">Aucune</option>'+state.subjects.map(function(s){return '<option value="'+s.id+'">'+s.name+'</option>'}).join('')+'</select></div><textarea id="exam-notes" rows="2" placeholder="Notes"></textarea></div><div class="modal-actions"><button class="btn-outline" data-close-modal>Annuler</button><button class="btn-primary" data-save-exam>✅ Enregistrer</button></div></div></div>'}
  if(m.type==='folder'){return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>📁 Nouveau dossier</h3><div style="display:grid;gap:12px;"><select id="folder-subject"><option value="">Choisir matière</option>'+state.subjects.map(function(s){return '<option value="'+s.id+'">'+s.name+'</option>'}).join('')+'</select><input id="folder-name" placeholder="Nom du dossier"></div><div class="modal-actions"><button class="btn-outline" data-close-modal>Annuler</button><button class="btn-primary" data-save-folder>Enregistrer</button></div></div></div>'}
  if(m.type==='resource'){return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>🔗 Nouvelle ressource</h3><div style="display:grid;gap:12px;"><select id="resource-subject"><option value="">Choisir matière</option>'+state.subjects.map(function(s){return '<option value="'+s.id+'">'+s.name+'</option>'}).join('')+'</select><input id="resource-title" placeholder="Titre"><input id="resource-url" placeholder="https://..." type="url"></div><div class="modal-actions"><button class="btn-outline" data-close-modal>Annuler</button><button class="btn-primary" data-save-resource>✅ Enregistrer</button></div></div></div>'}
  if(m.type==='session'){var today3=new Date().toISOString().slice(0,10);var tid=m.topicId;return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>📚 Session</h3><div style="display:grid;gap:12px;"><div><label>📅 Date</label><input type="date" id="session-date" value="'+today3+'"></div><div><label>⏱️ Durée (min)</label><input type="number" id="session-duration" value="30" min="5" max="240"></div></div><div class="modal-actions"><button class="btn-outline" data-close-modal>Annuler</button><button class="btn-primary" data-save-session="'+tid+'">Enregistrer</button></div></div></div>'}
  if(m.type==='progDetail'){var t=PROGRAMMING_TOPICS.find(function(x){return x.id===m.topicId});if(!t)return '';return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>'+t.icon+' '+t.title+'</h3><div class="what-learn"><h4>💡 ما ستتعلمه:</h4><ul>'+t.learn.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div><div class="modal-actions"><button class="btn-primary" data-close-modal>Fermer</button></div></div></div>'}
  if(m.type==='addError'){return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>➕ Erreur</h3><div style="display:grid;gap:12px;"><input id="err-desc" placeholder="Description" autofocus><select id="err-subject"><option value="">Aucune</option>'+state.subjects.map(function(s){return '<option value="'+s.id+'">'+s.name+'</option>'}).join('')+'</select><select id="err-cause"><option value="forgot_formula">نسيت الصيغة</option><option value="confusion">خلط</option><option value="calculation">حساب</option><option value="reading">قراءة</option><option value="methodology">منهجية</option><option value="other">أخرى</option></select><textarea id="err-correction" rows="2" placeholder="الصواب"></textarea></div><div class="modal-actions"><button class="btn-outline" data-close-modal>Annuler</button><button class="btn-primary" data-save-error>✅ Enregistrer</button></div></div></div>'}
  if(m.type==='addFcManual'){return '<div class="modal-overlay"><div class="modal-content"><span class="close-btn" data-close-modal>❌</span><h3>➕ Flashcard</h3><div style="display:grid;gap:12px;"><input id="fc-q" placeholder="Question" autofocus><input id="fc-a" placeholder="Réponse"></div><div class="modal-actions"><button class="btn-outline" data-close-modal>Annuler</button><button class="btn-primary" data-save-fc>✅ Ajouter</button></div></div></div>'}
  return '';
}

function startPomodoro(){if(pomodoro.isRunning)return;pomodoro.isRunning=true;if(pomodoro.remaining<=0)pomodoro.remaining=pomodoro.isBreak?pomodoro.breakTime*60:pomodoro.workTime*60;pomodoro.timerId=setInterval(function(){pomodoro.remaining--;if(pomodoro.remaining<=0){clearInterval(pomodoro.timerId);pomodoro.isRunning=false;pomodoro.isBreak=!pomodoro.isBreak;pomodoro.remaining=pomodoro.isBreak?pomodoro.breakTime*60:pomodoro.workTime*60;if(navigator.vibrate)navigator.vibrate(200);sendNotification(pomodoro.isBreak?'☕ Pause terminée':'⏰ Travail terminé',pomodoro.isBreak?'Reprends':'Pause',{tag:'pomodoro'});render()}render()},1000);render()}
function pausePomodoro(){if(!pomodoro.isRunning)return;clearInterval(pomodoro.timerId);pomodoro.isRunning=false;render()}
function stopPomodoro(){clearInterval(pomodoro.timerId);pomodoro.isRunning=false;pomodoro.isBreak=false;pomodoro.remaining=pomodoro.workTime*60;render()}
function resetPomodoro(){stopPomodoro()}

function attachAppEvents(){
  document.querySelectorAll('.bottom-nav button').forEach(function(b){b.onclick=function(){if(this.dataset.route)navigate(this.dataset.route)}});
  document.querySelectorAll('[data-route]').forEach(function(el){el.onclick=function(){var r=this.dataset.route;var p={};if(this.dataset.subjectId)p.subjectId=this.dataset.subjectId;if(this.dataset.langId)p.langId=this.dataset.langId;if(this.dataset.fcLang)p.fcLang=this.dataset.fcLang;if(r)navigate(r,p)}});
  document.querySelectorAll('.subject-card[data-subject-id]').forEach(function(el){el.onclick=function(){navigate('subject',{subjectId:this.dataset.subjectId})}});
  document.querySelectorAll('.topic-item[data-topic-id]').forEach(function(el){el.onclick=function(){navigate('topic',{topicId:this.dataset.topicId})}});
  document.querySelectorAll('.growth-path-card[data-lang]').forEach(function(el){el.onclick=function(){state.langId=this.dataset.lang;state.levelKey=langCurrentLevel(this.dataset.lang);state.route='language';render()}});
  document.querySelectorAll('.lesson-row:not(.locked)').forEach(function(el){el.onclick=function(){if(this.dataset.lesson){var num=parseInt(this.dataset.lesson);var L=getLang(state.langId);var lv=L.levels[state.levelKey];var idx=-1,nextInc=-1;for(var k=0;k<lv.lessons.length;k++){if(lv.lessons[k].num===num)idx=k;if(nextInc===-1&&!langIsDone(L.id,state.levelKey,lv.lessons[k].num))nextInc=k}if(nextInc!==-1&&idx>nextInc)return;state.lessonNum=num;state.route='lesson';render()}}});
  document.querySelectorAll('.lesson-row[data-prog-id]').forEach(function(el){el.onclick=function(){state.modal={type:'progDetail',topicId:this.dataset.progId};render()}});
  document.querySelectorAll('[data-level]').forEach(function(el){el.onclick=function(){state.levelKey=this.dataset.level;render()}});
  document.querySelectorAll('[data-complete]').forEach(function(el){el.onclick=function(){var n=parseInt(this.dataset.complete);var key=state.langId+'_'+state.levelKey+'_'+n;if(!state.langDone[key]){state.langDone[key]=true;state.xp+=10;var today=new Date().toISOString().slice(0,10);if(state.lastStudyDate!==today){var y=new Date(Date.now()-86400000).toISOString().slice(0,10);state.studyStreak=state.lastStudyDate===y?state.studyStreak+1:1;state.lastStudyDate=today}showToast('🎉 +10 XP');saveState();render()}}});
  var nt=document.getElementById('notif-trigger');if(nt)nt.onclick=function(e){e.stopPropagation();state.modal={type:'notifications'};render()};
  var st=document.getElementById('settings-trigger');if(st)st.onclick=function(e){e.stopPropagation();state.isSettingsOpen=!state.isSettingsOpen;document.getElementById('settings-menu').classList.toggle('open')};
  document.addEventListener('click',function(e){var m=document.getElementById('settings-menu');var t=document.getElementById('settings-trigger');if(m&&m.classList.contains('open')&&!m.contains(e.target)&&!t.contains(e.target)){state.isSettingsOpen=false;m.classList.remove('open')}});
  document.querySelectorAll('[data-setting]').forEach(function(el){el.onclick=function(){var s=this.dataset.setting;if(s==='showSmartRevision'){state.settings.showSmartRevision=!state.settings.showSmartRevision}else if(s==='notifications'){state.settings.notifications=!state.settings.notifications;if(state.settings.notifications){requestNotificationPermission().then(function(r){if(r==='granted')showToast('🔔 Activées')})}}state.isSettingsOpen=false;document.getElementById('settings-menu').classList.remove('open');saveState();render()}});
  document.querySelectorAll('[data-modal]').forEach(function(el){el.onclick=function(){state.isSettingsOpen=false;document.getElementById('settings-menu').classList.remove('open');state.modal={type:this.dataset.modal};render()}});
  document.querySelectorAll('[data-close-modal]').forEach(function(el){el.onclick=function(){state.modal=null;render()}});
  document.querySelectorAll('[data-mark-all-read]').forEach(function(el){el.onclick=function(){markAllNotificationsRead();render()}});
  document.querySelectorAll('[data-topic-up]').forEach(function(el){el.onclick=function(e){e.stopPropagation();var tid=this.dataset.topicUp;var p=getProgress(tid);if(p.level<4){p.level++;p.score=computeMasteryScore(tid);p.last_studied=new Date().toISOString();state.progress[tid]=p;state.xp+=5;saveState();render()}}});
  document.querySelectorAll('[data-topic-down]').forEach(function(el){el.onclick=function(e){e.stopPropagation();var tid=this.dataset.topicDown;var p=getProgress(tid);if(p.level>0){p.level--;p.score=computeMasteryScore(tid);state.progress[tid]=p;saveState();render()}}});
  document.querySelectorAll('[data-save-notes]').forEach(function(el){el.onclick=function(){var tid=this.dataset.saveNotes;var e2=document.getElementById('topic-notes');if(e2){var p=getProgress(tid);p.notes=e2.value;state.progress[tid]=p;saveState();render()}}});
  document.querySelectorAll('[data-add-task]').forEach(function(el){el.onclick=function(){state.modal={type:'task'};render()}});
  document.querySelectorAll('[data-save-task]').forEach(function(el){el.onclick=function(){var text=document.getElementById('task-text').value;var date=document.getElementById('task-date').value;var time=document.getElementById('task-time').value;var priority=document.getElementById('task-priority').value;if(!text){alert('Écrire une tâche');return}state.tasks.push({id:generateId(),text:text,priority:priority,date:date,time:time,isDone:false});state.modal=null;saveState();render()}});
  document.querySelectorAll('[data-task-done]').forEach(function(el){el.onclick=function(e){e.stopPropagation();var t=state.tasks.find(function(x){return x.id===el.dataset.taskDone});if(t){t.isDone=true;state.xp+=5;saveState();render()}}});
  document.querySelectorAll('[data-task-delete]').forEach(function(el){el.onclick=function(e){e.stopPropagation();state.tasks=state.tasks.filter(function(x){return x.id!==el.dataset.taskDelete});saveState();render()}});
  document.querySelectorAll('[data-add-exam]').forEach(function(el){el.onclick=function(){state.modal={type:'exam'};render()}});
  document.querySelectorAll('[data-save-exam]').forEach(function(el){el.onclick=function(){var title=document.getElementById('exam-title').value;var date=document.getElementById('exam-date').value;var time=document.getElementById('exam-time').value;if(!title||!date){alert('Titre et date requis');return}state.exams.push({id:generateId(),title:title,date:date,time:time});state.modal=null;saveState();render()}});
  document.querySelectorAll('[data-delete-exam]').forEach(function(el){el.onclick=function(e){e.stopPropagation();state.exams=state.exams.filter(function(x){return x.id!==el.dataset.deleteExam});saveState();render()}});
  document.querySelectorAll('[data-session-topic]').forEach(function(el){el.onclick=function(e){e.stopPropagation();state.modal={type:'session',topicId:this.dataset.sessionTopic};render()}});
  document.querySelectorAll('[data-save-session]').forEach(function(el){el.onclick=function(){var tid=this.dataset.saveSession;var date=document.getElementById('session-date').value;var duration=parseInt(document.getElementById('session-duration').value);var p=getProgress(tid);p.level=Math.min(p.level+1,4);p.score=computeMasteryScore(tid);p.last_studied=new Date().toISOString();state.progress[tid]=p;state.xp+=5;state.sessions.push({id:generateId(),topic_id:tid,date:date,duration:duration});state.modal=null;showToast('✅ Session enregistrée');saveState();render()}});
  document.querySelectorAll('[data-pomo-start]').forEach(function(el){el.onclick=startPomodoro});
  document.querySelectorAll('[data-pomo-pause]').forEach(function(el){el.onclick=pausePomodoro});
  document.querySelectorAll('[data-pomo-stop]').forEach(function(el){el.onclick=stopPomodoro});
  document.querySelectorAll('[data-pomo-reset]').forEach(function(el){el.onclick=resetPomodoro});
  document.querySelectorAll('[data-edit-planning]').forEach(function(el){el.onclick=function(){state.isEditingPlanning=true;render()}});
  document.querySelectorAll('[data-cancel-planning]').forEach(function(el){el.onclick=function(){state.isEditingPlanning=false;render()}});
  document.querySelectorAll('[data-save-planning]').forEach(function(el){el.onclick=function(){var keys=['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];var ns={};keys.forEach(function(k){var i=document.getElementById('planning-input-'+k);if(i)ns[k]=i.value.trim()});state.customSchedule=ns;state.isEditingPlanning=false;saveState();render()}});
  document.querySelectorAll('[data-reset-day]').forEach(function(el){el.onclick=function(){var k=this.dataset.resetDay;var i=document.getElementById('planning-input-'+k);if(i)i.value=DEFAULT_SCHEDULE[k]||''}});
  document.querySelectorAll('[data-group-toggle]').forEach(function(el){el.onclick=function(){var b=document.getElementById('body-'+this.dataset.groupToggle);if(b)b.classList.toggle('open')}});
  document.querySelectorAll('[data-stats-tab]').forEach(function(el){el.onclick=function(){state.statsTab=this.dataset.statsTab;state.reviewSession=null;render()}});
  document.querySelectorAll('[data-err-filter]').forEach(function(el){el.onclick=function(){state.errFilter=this.dataset.errFilter;render()}});
  document.querySelectorAll('[data-add-error]').forEach(function(el){el.onclick=function(){state.modal={type:'addError'};render()}});
  document.querySelectorAll('[data-save-error]').forEach(function(el){el.onclick=function(){var desc=document.getElementById('err-desc').value;var subject=document.getElementById('err-subject').value;var cause=document.getElementById('err-cause').value;var correction=document.getElementById('err-correction').value;if(!desc){alert('Description requise');return}addError(desc,subject,cause,correction,'medium');state.modal=null;showToast('✅ Ajoutée');render()}});
  document.querySelectorAll('[data-delete-error]').forEach(function(el){el.onclick=function(e){e.stopPropagation();if(confirm('Supprimer ?')){state.errors=state.errors.filter(function(x){return x.id!==el.dataset.deleteError});saveState();render()}}});
  document.querySelectorAll('[data-review-error]').forEach(function(el){el.onclick=function(e){e.stopPropagation();state.modal={type:'reviewError',errorId:this.dataset.reviewError};render()}});
  document.querySelectorAll('[data-review-result]').forEach(function(el){el.onclick=function(){var success=(this.dataset.reviewResult==='yes');if(state.reviewSession){var currentErr=state.reviewSession.errors[state.reviewSession.currentIdx];reviewError(currentErr.id,success);state.reviewSession.currentIdx++;if(success)state.xp+=5;saveState();render()}}});
  document.querySelectorAll('[data-start-review]').forEach(function(el){el.onclick=function(){var due=getErrorsDueToday();if(!due.length){showToast('Aucune erreur');return}state.reviewSession={errors:due,currentIdx:0};render()}});
  document.querySelectorAll('[data-end-review]').forEach(function(el){el.onclick=function(){state.reviewSession=null;render()}});
  document.querySelectorAll('[data-start-fc-session]').forEach(function(el){el.onclick=function(){var L=getLang(state.fcLang||state.langId);var due=getCardsDueToday(L.id);if(!due.length){showToast('Aucune carte');return}state.fcSession={cards:due,currentIdx:0,reviewed:0,correct:0};state.fcScreen='session';state.fcFlipped=false;render()}});
  document.querySelectorAll('[data-end-fc-session]').forEach(function(el){el.onclick=function(){state.fcSession=null;state.fcScreen='list';state.fcFlipped=false;render()}});
  document.querySelectorAll('[data-flip-card]').forEach(function(el){el.onclick=function(){state.fcFlipped=!state.fcFlipped;render()}});
  document.querySelectorAll('[data-fc-quality]').forEach(function(el){el.onclick=function(){var quality=this.dataset.fcQuality;var L=getLang(state.fcLang||state.langId);if(!state.fcSession)return;var card=state.fcSession.cards[state.fcSession.currentIdx];if(!card)return;updateCardReview(L.id,card.id,quality);state.fcSession.reviewed++;if(quality!=='hard')state.fcSession.correct++;state.xp+=2;state.fcSession.currentIdx++;state.fcFlipped=false;saveState();render()}});
  document.querySelectorAll('[data-add-fc-manual]').forEach(function(el){el.onclick=function(){state.modal={type:'addFcManual'};render()}});
  document.querySelectorAll('[data-save-fc]').forEach(function(el){el.onclick=function(){var q=document.getElementById('fc-q').value;var a=document.getElementById('fc-a').value;if(!q||!a){alert('Question et réponse requises');return}var L=getLang(state.fcLang||state.langId);if(!state.flashcards[L.id])getFlashcardsForLanguage(L.id);state.flashcards[L.id].push({id:'fc_manual_'+generateId(),langId:L.id,question:q,answer:a,hint:'',auto:false});state.modal=null;showToast('✅ Ajoutée');saveState();render()}});
  document.querySelectorAll('[data-delete-fc]').forEach(function(el){el.onclick=function(e){e.stopPropagation();var fid=this.dataset.deleteFc;var L=getLang(state.fcLang||state.langId);if(state.flashcards[L.id]){state.flashcards[L.id]=state.flashcards[L.id].filter(function(c){return c.id!==fid});if(state.fcReview[L.id]&&state.fcReview[L.id][fid])delete state.fcReview[L.id][fid];saveState();render()}}});
  document.querySelectorAll('[data-res-filter]').forEach(function(el){el.onclick=function(){state.resFilter=this.dataset.resFilter;render()}});
  var si=document.getElementById('res-search-input');if(si){si.oninput=function(){state.resSearch=this.value;clearTimeout(window._resSearchTimer);window._resSearchTimer=setTimeout(function(){render()},300)}}
  document.querySelectorAll('[data-toggle-group]').forEach(function(el){el.onclick=function(){var g=this.dataset.toggleGroup;state.resOpenGroups[g]=!state.resOpenGroups[g];render()}});
  document.querySelectorAll('[data-toggle-fav]').forEach(function(el){el.onclick=function(e){e.stopPropagation();var parts=this.dataset.toggleFav.split('|');var sid=parts[0],rid=parts[1];var folders=state.resources[sid]||{};Object.keys(folders).forEach(function(fn){var item=(folders[fn]||[]).find(function(r){return r.id===rid});if(item){item.favorite=!item.favorite}});saveState();render()}});
  document.querySelectorAll('[data-copy-url]').forEach(function(el){el.onclick=function(e){e.stopPropagation();var url=this.dataset.copyUrl;if(navigator.clipboard){navigator.clipboard.writeText(url).then(function(){showToast('📋 Copié !')})}}});
  document.querySelectorAll('[data-add-folder]').forEach(function(el){el.onclick=function(){state.modal={type:'folder'};render()}});
  document.querySelectorAll('[data-save-folder]').forEach(function(el){el.onclick=function(){var sid=document.getElementById('folder-subject').value;var fn=document.getElementById('folder-name').value;if(!sid||!fn){alert('Remplir');return}if(!state.resources[sid])state.resources[sid]={};if(state.resources[sid][fn]){alert('Existe');return}state.resources[sid][fn]=[];state.modal=null;showToast('✅ Créé');saveState();render()}});
  document.querySelectorAll('[data-add-resource]').forEach(function(el){el.onclick=function(){state.modal={type:'resource'};render()}});
  document.querySelectorAll('[data-save-resource]').forEach(function(el){el.onclick=function(){var sid=document.getElementById('resource-subject').value;var title=document.getElementById('resource-title').value;var url=document.getElementById('resource-url').value;if(!sid||!title||!url){alert('Remplir');return}if(!state.resources[sid])state.resources[sid]={};if(!state.resources[sid]['Général'])state.resources[sid]['Général']=[];state.resources[sid]['Général'].push({id:generateId(),title:title,url:url,tag:'📚',dateAdded:new Date().toISOString().slice(0,10),favorite:false});state.modal=null;showToast('✅ Ajoutée');saveState();render()}});
  document.querySelectorAll('[data-delete-resource]').forEach(function(el){el.onclick=function(e){e.stopPropagation();if(!confirm('Supprimer ?'))return;var parts=this.dataset.deleteResource.split('|');var sid=parts[0],rid=parts[1];if(state.resources[sid]){Object.keys(state.resources[sid]).forEach(function(f){state.resources[sid][f]=state.resources[sid][f].filter(function(r){return r.id!==rid})})}saveState();render()}});
}

async function saveState(){try{var data={subjects:state.subjects,topics:state.topics,progress:state.progress,sessions:state.sessions,errors:state.errors,programming:state.programming,languages:state.languages,langDone:state.langDone,flashcards:state.flashcards,fcReview:state.fcReview,tasks:state.tasks,exams:state.exams,resources:state.resources,ignoredTopics:state.ignoredTopics,settings:state.settings,onboardingDone:state.onboardingDone,onboardingData:state.onboardingData,customSchedule:state.customSchedule,xp:state.xp,studyStreak:state.studyStreak,lastStudyDate:state.lastStudyDate,readNotifications:state.readNotifications};await dbSet('appState',data)}catch(e){console.warn('saveState error',e)}}

async function loadState(){try{var data=await dbGet('appState');if(data){state.subjects=data.subjects||MASTER_SUBJECTS;state.topics=data.topics||TOPICS_SEED;state.progress=data.progress||{};state.sessions=data.sessions||[];state.errors=data.errors||[];state.programming=data.programming||{};state.languages=data.languages||JSON.parse(JSON.stringify(LANGUAGES));state.langDone=data.langDone||{};state.flashcards=data.flashcards||{};state.fcReview=data.fcReview||{};state.tasks=data.tasks||[];state.exams=data.exams||[];state.resources=data.resources||{};state.ignoredTopics=data.ignoredTopics||{};state.settings=data.settings||{showSmartRevision:true,notifications:true};if(state.settings.notifications===undefined)state.settings.notifications=true;state.onboardingDone=data.onboardingDone||false;state.onboardingData=data.onboardingData||{name:'',goal:'',studyTime:'',notif:true};state.customSchedule=data.customSchedule||{};state.xp=data.xp||0;state.studyStreak=data.studyStreak||0;state.lastStudyDate=data.lastStudyDate||null;state.readNotifications=data.readNotifications||{}}if(!state.notifications)state.notifications=[];if(!state.readNotifications)state.readNotifications={};if(!state._lastSentNotifs)state._lastSentNotifs={}}catch(e){console.warn('Load error',e);state.subjects=MASTER_SUBJECTS;state.topics=TOPICS_SEED;state.languages=JSON.parse(JSON.stringify(LANGUAGES));state.notifications=[];state.readNotifications={}}}

var chatMsgs=document.getElementById('chatbot-messages');
var chatInput=document.getElementById('chatbot-input');
var botState={context:{awaitingAnswer:false,currentQuestionIndex:0,currentQuizQuestions:[],quizScore:0,quizTotal:0,lastQuiz:null}};

function addMessage(text,sender){if(!chatMsgs)return;var d=document.createElement('div');d.className='message '+sender;d.innerHTML=text.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');chatMsgs.appendChild(d);chatMsgs.scrollTop=chatMsgs.scrollHeight}
function showTyping(){if(!chatMsgs)return;var div=document.createElement('div');div.className='typing-indicator';div.id='typing-indicator';div.innerHTML='<span></span><span></span><span></span>';chatMsgs.appendChild(div);chatMsgs.scrollTop=chatMsgs.scrollHeight}
function hideTyping(){var i=document.getElementById('typing-indicator');if(i)i.remove()}

function detectIntent(text){var t=text.toLowerCase().trim();if(/^(تنبيهات|notifications)/.test(t))return 'notifications';if(/^(إحصائيات|stats)/.test(t))return 'stats';if(/^(تقدم|progression)/.test(t))return 'progress';if(/^(شجعني|encourage)/.test(t))return 'encourage';if(/^(aide|help|مساعدة)/.test(t))return 'help';return 'unknown'}

function processBot(text){
  var t=text.toLowerCase().trim();
  showTyping();
  setTimeout(function(){
    hideTyping();
    var intent=detectIntent(text);
    if(intent==='help'){addMessage('🐺 **Commandes:**\n\n🔔 "تنبيهات"\n📊 "إحصائيات"\n📈 "تقدم"\n💪 "شجعني"','bot');return}
    if(intent==='notifications'){var notifs=state.notifications||[];addMessage('🔔 **Notifications ('+notifs.length+')**\n\n'+(notifs.length?notifs.slice(0,5).map(function(n){return n.icon+' '+n.title}).join('\n'):'Aucune'),'bot');return}
    if(intent==='stats'){var avg=getAveragePerDay();var streak=getStudyStreakFromSessions();var html='📊 **Stats avancées:**\n\n⏱️ Total: '+getTotalStudyHours()+'h\n📅 Moyenne/jour: '+avg+' min\n🔥 Série: '+streak+'j\n📚 Sessions: '+state.sessions.length;addMessage(html,'bot');return}
    if(intent==='progress'){var html='📊 **Progression:**\n\n⭐ '+state.xp+' XP\n🔥 '+state.studyStreak+'j\n🎓 '+(langTotalDone('de')+langTotalDone('en')+langTotalDone('es'))+' leçons\n💻 '+progTotalDone()+'/'+PROGRAMMING_TOPICS.length;addMessage(html,'bot');return}
    if(intent==='encourage'){var msgs=['💪 Continue ! 🌟','🔥 Chaque effort compte !','🏆 Tu es un vrai loup blanc !'];addMessage(msgs[Math.floor(Math.random()*msgs.length)],'bot');return}
    addMessage('🤔 Écris "aide".','bot');
  },500);
}

if(chatMsgs){
  var cfb=document.getElementById('chatbot-fab');if(cfb)cfb.onclick=function(){var cw=document.getElementById('chatbot-window');if(cw){cw.classList.toggle('open');if(cw.classList.contains('open')&&chatInput)chatInput.focus()}};
  var cc=document.getElementById('chatbot-close');if(cc)cc.onclick=function(){var cw=document.getElementById('chatbot-window');if(cw)cw.classList.remove('open')};
  var cs=document.getElementById('chatbot-send');if(cs)cs.onclick=function(){if(chatInput&&chatInput.value.trim()){var t=chatInput.value;addMessage(t,'user');chatInput.value='';processBot(t)}};
  if(chatInput)chatInput.onkeydown=function(e){if(e.key==='Enter'&&chatInput.value.trim()){var t=chatInput.value;addMessage(t,'user');chatInput.value='';processBot(t)}};
}

setInterval(function(){if(state.onboardingDone){updateNotifications()}},60000);

async function init(){try{await openDB();await loadState();render()}catch(e){console.error('Init error:',e);var root=document.getElementById('root');if(root)root.innerHTML='<div style="padding:20px;color:#e86a6a;"><h2>⚠️ Erreur</h2><pre>'+e.message+'</pre><button onclick="location.reload()">Recharger</button></div>'}}

init();

})();
