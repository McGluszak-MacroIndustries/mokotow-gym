import { ref } from "vue";

export type Item = {
  name: string;
  title: string;
  description: string;
  src: string;
};

export const isEnglishLanguageOn = ref<boolean>(false);

export const stringWithLineBreak = `O mnie:

Sporty kopane i uderzane uprawiam od 15 lat. Moje zajęcia mają opinie wymagających: nie oszczędzam ani siebie, ani podopiecznych. Uczestnicy treningów wychodzą z nich zmęczeni, ale zadowoleni. Oprócz przygotowania kondycyjnego bardzo duży nacisk kładę na technikę. Poszczególne ciosy czy akcje powtarzamy aż do momentu kiedy ćwiczący opanują je do perfekcji.

Prowadzone zajęcia:
- boks
- kickboxing
- treningi indywidualne

Po godzinach:

Moim hobby są kuchnie świata (sport i karierę trenera łączę z pracą w gastronomii). Gram również w piłkę nożną i tenisa.`;

export const teamItems: Array<Item> = [
  {
    name: "team",
    title: "FILIP SZAMBORSKI",
    description: `Sport zacząłem uprawiać w wieku 9 lat, kiedy to mama zaprowadziło mnie na judo i szermierkę. Jako nastolatek zająłem się parkourem i treningiem na siłowni. Od sześciu lat pracuję zawodowo jako trener personalny.
    Szczególny nacisk kładę na staranność i dokładność w wykonywaniu ćwiczeń, a także kompleksową mobilizację i rozciągnięcie po treningu. Moją specjalizacją jest modelowanie sylwetki, mogę pochwalić się licznymi spektakularnymi przemianami klientów.
    
    Po godzinach aktywnie podrózuję po Europie, zajmuję się modelingiem, kuchnią, a także zwierzętami - jestem wolontariuszem w schronisku dla psów
    
    Prowadzone zajęcia:
    
    ○ fitness dla kobiet
    ○ power pump
    ○ modelowanie sylwetki dla mężczyzn
    ○ zdrowe plecy
    ○ treningi personalne
    `,
    src: "2x.jpg",
  },
  {
    name: "team",
    title: "JAREK KRZOSEK",
    description: `Sporty kopane i uderzane uprawiam od 15 lat. Moje zajęcia mają opinie wymagających: nie oszczędzam ani siebie, ani podopiecznych. Uczestnicy treningów wychodzą z nich zmęczeni, ale zadowoleni. Oprócz przygotowania kondycyjnego bardzo duży nacisk kładę na technikę. Poszczególne ciosy czy akcje powtarzamy aż do momentu kiedy ćwiczący opanują je do perfekcji.
    Moim hobby są kuchnie świata (sport i karierę trenera łączę z pracą w gastronomii). Gram również w piłkę nożną i tenisa.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:
    ○ boks
    ○ kickboxing
    ○ treningi indywidualne
    `,
    src: "2x.jpg",
  },
  {
    name: "team",
    title: "KAROLINA UJEJSKA",
    description: `Specjalizuję się w treningu z Kettlebells wg metody Hardstyle. Jestem wicemistrzynią Polski Kettlebell Hardstyle oraz zwyciężczynią pucharu Polskiej Ligi Kettlebell Hardstyle w kategorii pro.
  Doświadczenia zawodnicze i wnioski wyniesione z wielu lat ciężkich treningów pozwalają efektywniej pomagać moim podopiecznym. Nacisk na technikę i dbałość o detale w połączeniu z wytrwałością, mogą wznieść każdego na niespotykany poziom siły -  która jest podstawą dla pozostałych cech motorycznych oraz pracy nad sylwetką.

  Po godiznach jestem fotografką, pasjonatką podróży i entuzjastką zdrowego stylu życia :)

    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Kettlebells / explosive strength`,
    src: "moz.jpg",
  },
  {
    name: "team",
    title: "MARCIN NASIADKO",
    description: `Kickboxing to moja pasja i życie od 15 lat. Trenowałem w Polsce oraz w najlepszych klubach Holandii, Łotwy i Norwegii. Dziewięciokrotnie zdobywałem Mistrzostwo Polski i Puchar Świata. Jako członek kadry narodowej pięciokrotnie reprezentowałem Polskę na Mistrzostwach Świata i Mistrzostwach Europy, walczyłem też w barwach największej zawodowej organizacji kickboxingu w Polsce – DSF Kickboxing Challenge.
    Od 4 lat trenuję dzieci, młodzież i dorosłych – zawodników oraz osoby ćwiczące rekreacyjnie. Dbam o każdy aspekt przygotowania technicznego, motorycznego i psychologicznego moich wychowanków.
    
    Po godzinach, oprócz sportów walki uprawiam narciarstwo. Bardzo lubię podróże.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:
    
    ○ kickboxing
    ○ boks
    ○ treningi personalne
    `,
    src: "nasiadko.jpg",
  },
  {
    name: "team",
    title: "MATEUSZ KRYNICKI",
    description: `Od dzieciństwa interesowałem się sportami walki. Na początku było to Oyama Karate, później odkryłem pasję do boksu tajskiego. Muai Thai ćwiczyłem w wielu klubach w Polsce i za granicą (Londyn, Kijów, Tajlandia) pod okiem wielu znamienitych osobistości. 
    Posiadam uprawnienia trenera nie tylko boksu tajskiego, ale również boksu klasycznego. 
    Ukończyłem również 9-miesięczne szkolenie dla służb mundurowych prowadzone przez byłych żołnierzy jednostki GROM.
    
    Po godzinach uprawiam survival i wspinaczkę wysokogórską. Interesuję się historią. Bardzo lubię teatr.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Muai Thai
    ○ boks
    ○ kickboxing
    ○ samoobrona dla kobiet

    `,
    src: "krynicki.jpg",
  },
  {
    name: "team",
    title: "PATRYCJA CZEKAJ",
    description: `Według znajomych jestem wulkanem energii. Od ponad 20 lat ćwiczę taniec, miałam styczność z wieloma stylami - od inscenizacji tanecznych, przez jazz, po cheerleading, hip hop, new style, commercial i shuffle. Wielokrotnie uczestniczyłam w mistrzostwach na poziomie krajowym oraz europejskim, realizowałam pokazy taneczne na wydarzeniach sportowych i kulturalnych, koncerty, teledyski i eventy telewizyjne.
    Jestem absolwentką socjologii oraz kryminologii, a na codzień pracuję w branży Public Relations.

    Zdecydowanie unikam nudy, rzucam sobie wyzwania i próbuję nowych rzeczy, obecnie uczę się bachaty sensual. Interesuję się też modą. Każdą wolną chwilę poświęcam mojej największej miłości - maltance Sheri.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Shuffle dance
    ○ Hip hop, new style
    ○ Commercial
    ○ Cheerleaders`,
    src: "czekaj.jpg",
  },
  {
    name: "team",
    title: "PIOTR BURZYKOWSKI",
    description: `Tłumacz, trener, terapeuta. Od najmłodszych lat podróżuję po świecie w poszukiwaniu wiedzy, doświadczeń i nowych smaków. Wierzę, że najszybszym sposobem na poprawę jakości życia każdego człowieka jest zwiększenie jego siły. Specjalizuję się w treningu według metody „Starting Strength”.

    Po godzinach zajmuję się urban exploration, filozofią, stolarstwem.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Trening siłowy ze sztangą (Starting Strength)
    ○ Treningi personalne

    

    `,
    src: "burzykowski.jpg",
  },
  {
    name: "team",
    title: "SANDRA WOCH",
    description: `Moimi sportowymi pasjami są taniec towarzyski, siatkówka i siłownia. Specjalizuję się w modelowaniu ciała oraz zajęciach dla kobiet w ciąży i świeżo upieczonych mam. Mam doświadczenie w prowadzeniu zajęć dla kobiet w każdym wieku.

    Jestem fanką egzotycznych podróży i dobrych książek oraz właścicielką pieska Cookie. Bardzo lubię stawać przed aparatem fotograficznym. Ciekawym doświadczeniem był udział w konkursie Miss Warsawy, gdzie dotarłam do finału.
    
    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ mama wraca do formy
    ○ jędrne pośladki,płaski brzuch
    ○ treningi personalne`,
    src: "woch.jpg",
  },
  {
    name: "team",
    title: "TOMEK RYTEL",
    description: `Jestem posiadaczem czarnego pasa w BJJ (brazylijskim jiu jitsu), członkiem kadry narodowej grapplingu, kilkukrotnym mistrzem polski ADCC, zdobywcą African Championship Masterclass 2021 w kategorii 65kg. Umiejętności przez wiele lat szlifowałem w Polsce, Abu Dhabi i Brazylii. Aktualnie pozostaję czynnym zawodnikiem i trenerem.
    
    Jestem człowiekiem rodzinnym. Moją drugą wielką pasją poza sportem jest sushi.

    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ BJJ dla dorosłych
    ○ BJJ dla dzieci
    ○ treningi personalne
    
    `,
    src: "rytel.jpg",
  },
  {
    name: "team",
    title: "MOKEBE GŁUSZAK",
    description: `Biznesmen, człowiek sukcesu wykształcony na filmach Roberta Kiyosaki i Trader21.

    Po godzinach jestem człowiekiem czarnoskórym.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Boks grupa początkująca`,
    src: "2x.jpg",
  },
];

export const aboutUsItems: Array<Item> = [
  {
    name: "about-us",
    title: "Nowa jakość na Mokotowie",
    description: `Mokotowski Gym to nowopowstały klub fitness przy ul. Białej Floty 2 (Marina Mokotów II) w Warszawie.
    
    Oferujemy szeroki wybór zajęć w kameralnych grupach, treningi indywidualne i możliwość samodzielnych ćwiczeń.
    
    Jesteśmy przekonani, że każdy znajdzie tutaj coś dla siebie.`,
    src: "baner_01.jpg",
  },
  {
    name: "about-us",
    title: "Taniec, sztuki walki i fitness",
    description: `Szukasz miejsca, w którym mógłbyś/mogłabyś nauczyć się tańczyć?
    Może kusi Cię boksowanie lub trening w parterze?
    Lubisz także trening siłowy?

    To się wspaniale składa. U nas znajdziesz wszystko - i to w jednym miejscu!
    `,
    src: "baner_01.jpg",
  },
  {
    name: "about-us",
    title: "Miejsce dla deweloperów",
    description: `Mokotowski Gym to projekt osób od lat związanych z branżą IT.

    Naszą ambicją jest stworzenie nie tylko doskonałego klubu sportowego, co również miejsca networkingu i integracji.
    Deweloperzy mogą wreszcie rozstrzygnąć kwestię wyższości C++ nad Javą poprzez przyjacielską wymianę argumentów na ringu`,
    src: "baner_02.jpg",
  },
  {
    name: "about-us",
    title: "Zadbaj o swoje zdrowie",
    description: `Człowiek nie został stworzony do pracy przy biurku - a jednak większość z nas tak właśnie spędza swój czas, przez co dręczą nas charakterystyczne dla tego typu życia udręki: ból pleców, zespół cieśni nadgarstka, ból karku, zwyrodnienia stawów - można by wymieniać bez końca!
    Naprawa złych nawyków może trwać latami, lecz tu z pomocą przychodzi trening siłowy - oswój się ze sztangą, przyspiesz swoje zdrowienie, zainwestuj we własne ciało.
    
    Pomóż swojej naturze. Nic tak nie wzmacnia jak trening siłowy. Zacznij już dziś, pod okiem naszych specjalistów, a wkrótce zapomnisz o bólu pleców!`,
    src: "baner_02.jpg",
  },
  {
    name: "about-us",
    title: "Wyselekcjonowana kadra pracownicza",
    description: `Szczególną uwagę zwracamy na czynnik ludzki.
    
    Gwarantujemy, że nasi trenerzy są nie tylko świetnymi specjalistami we własnych dziedzinach, co także ciekawymi, otwartymi ludźmi, którzy bez trudu zarażą Cię pasją do sportu.
    Nic nie przyspiesza rozwoju tak mocno, co dobry nauczyciel. Nasi trenerzy przeprowadzą Cię przez podstawy aż po poziom mistrzowski.
    Pamiętaj - sky is the limit.`,
    src: "baner_03.jpg",
  },
];

export const offerItems: Array<Item> = [
  {
    name: "offer",
    title: "Taniec, sztuki walki, fitness",
    description: `Nie jesteśmy gołosłowni - u nas to wszystko znajdziesz dla siebie.
    Od shuffledance, przez boks, judo, aż po treningi personalne - jestesmy tutaj właśnie dla Ciebie.
    
    Niniejszym pozwól zaprosić Cię na zapoznanie z naszą ofertą`,
    src: "tajner.jpg",
  },
  {
    name: "offer",
    title: "Starting Strength™",
    description: `Czym jest Starting Strength™?
    
    Starting Strength™  jest kompletną metodą treningu siłowego opracowaną przez trenera Marka Rippetoe.
    Trening według metody Starting Strength™ świetnie się sprawdza zarówno u nastolatków i dorosłych, którzy pragną zwiększyć swoją sprawność fizyczną i poprawić sylwetkę, jak i u seniorów, którzy pragną zachować jak najdłużej autonomię w życiu codziennym. Metoda opiera się na ćwiczeniach wielostawowych wykonywanych ze sztangą według starannie zaprojektowanego programu treningowego.

Główne ćwiczenia to:

○ przysiad ze sztangą
○ wyciskanie sztangi stojąc
○ wyciskanie sztangi leżąc
○ martwy ciąg

Zostały one wybrane, ponieważ pozwalają na zwiększenie siły u trenujących szybciej, skuteczniej i w bardziej bezpieczny sposób w porównaniu z innymi zestawami ćwiczeń. Będziesz stawał się silniejszy od samego początku programu, ponieważ na każdym treningu będziemy odpowiednio zwiększać ciężar na sztandze.
Ale bez obaw! Początkowe ciężary i progresja będą zawsze dostosowane do Twojej kondycji i poziomu siły.
W miarę postępów w programie pojawią się nowe ćwiczenia, ale i tak  przysiady, wyciskanie stojąc i leżąc oraz martwe ciągi pozostaną najczęściej wykonywanymi ćwiczeniami.

Zajęcia Starting Strength™ prowadzi u nas trener 𝐏𝐢𝐨𝐭𝐫 𝐁𝐮𝐫𝐳𝐲𝐤𝐨𝐰𝐬𝐤𝐢`,
    src: "tajnermalysz.jpg",
  },
  {
    name: "offer",
    title: "Boks",
    description: `Współczesny boks jest dyscypliną wywodzącą się z XVIII-wiecznej Anglii.
    Jako sport walki jest unikatem na skalę światową, ponieważ ciosy zadaje się tylko rękami. Bywa nazywany sportem dżentelmenów.
    
    Na grupie początkującej kształtujemy przede wszystkim odpowiednie nawyki i pamięć mięsniowo-motoryczną.
    Typowe zajęcia składają się z 15 minut rozgrzewki, a nastepnie z zajęć w parach, w których ćwiczymy wyprowadzanie ciosów, poruszanie się oraz obronę.
    Oprócz techniki kładziemy nacisk na przygotowanie kondycyjne.
    
    W miarę zdobywania doświadczenia wprowadzamy sparingi.
    
    Zajęcia są dla każdego, kto pragnie ukształtować kondycję i sylwetkę, zyskać praktyczne umiejętności obronne oraz pewność siebie.
    Prowadzimy grupy koedukacyjne oraz dedykowane dla kobiet.
    Zapraszamy również młodzież - tutaj minimalny wiek to ok. 12 lat.
    
    Zajęcia prowadzą trener 𝐉𝐚𝐫𝐞𝐤 𝐊𝐫𝐳𝐨𝐬𝐞𝐤 oraz trener 𝐌𝐚𝐫𝐜𝐢𝐧 𝐍𝐚𝐬𝐢𝐚𝐝𝐤𝐨.`,
    src: "mokebe.jpg",
  },
];

export const scheduleItems: Array<Item> = [
  {
    name: "schedule",
    title: "SALA NR1",
    description:
      "Poniżej przedstawiamy rozkład zajęć w sali numer jeden, gdzie odbywa się przede wszystkim joga i pikiety politycznych elit",
    src: "schedule.jpg",
  },
  {
    name: "schedule",
    title: "SALA NR2",
    description:
      "W sali numer dwa odbywają się z reguły zajęcia ze sztuk walki a takze uprawiamy tutaj ogółem szermiestwo",
    src: "schedule.jng",
  },
];
