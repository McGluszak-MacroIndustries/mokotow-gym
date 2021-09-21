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
    description: `Sport zacząłem uprawiać w wieku 9 lat, kiedy to mama zaprowadziło mnie na judo i szermierkę. Jako nastolatek zająłem się parkourem i treningiem na siłowni.
    Od sześciu lat zawodowo pracuję jako trener personalny. Szczególny nacisk kładę na staranność i dokładność w wykonywaniu ćwiczeń, a także kompleksową mobilizację i rozciągnięcie po treningu. Moją specjalizacją jest modelowanie sylwetki, mogę pochwalić się licznymi spektakularnymi przemianami klientów.
    
    Po godzinach zajmuję się podróżowaniem, modelingiem, kuchnią i pomocą dla zwierząt (jestem wolontariuszem w schronisku)

    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

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
    description: `Sport zacząłem uprawiać w wieku 9 lat, kiedy to mama zaprowadziło mnie na judo i szermierkę. Jako nastolatek zająłem się parkourem i treningiem na siłowni.
    Od sześciu lat zawodowo pracuję jako trener personalny. Szczególny nacisk kładę na staranność i dokładność w wykonywaniu ćwiczeń, a także kompleksową mobilizację i rozciągnięcie po treningu. Moją specjalizacją jest modelowanie sylwetki, mogę pochwalić się licznymi spektakularnymi przemianami klientów.
    
    Po godzinach zajmuję się podróżowaniem, modelingiem, kuchnią i pomocą dla zwierząt (jestem wolontariuszem w schronisku)

    
    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

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
    title: "KAROLINA UJEJSKA",
    description: `Specjalizuję się w treningu z Kettlebells wg metody Hardstyle. Jestem wicemistrzynią Polski Kettlebell Hardstyle oraz zwyciężczynią pucharu Polskiej Ligi Kettlebell Hardstyle w kategorii pro. Doświadczenia zawodnicze i wnioski wyniesione z wielu lat ciężkich treningów pozwalają efektywniej pomagać moim podopiecznym. Nacisk na technikę i dbałość o detale w połączeniu z wytrwałością, mogą wznieść każdego na niespotykany poziom siły -  która jest podstawą dla pozostałych cech motorycznych oraz pracy nad sylwetką.

    Po godzinach jestem fotografką, pasjonatką podróży i entuzjastką zdrowego stylu życia :)


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Kettlebells / explosive strength`,
    src: "moz.jpg",
  },
  {
    name: "team",
    title: "MARCIN NASIADKO",
    description: `Kickboxing to moja pasja i życie od 15 lat. Trenowałem w Polsce oraz w najlepszych klubach Holandii, Łotwy i Norwegii. Dziewięciokrotnie zdobywałem Mistrzostwo Polski i Puchar Świata. Jako członek kadry narodowej pięciokrotnie reprezentowałem Polskę na Mistrzostwach Świata i Mistrzostwach Europy, walczyłem też w barwach największej zawodowej organizacji kickboxingu w Polsce – DSF Kickboxing Challenge
    Od 4 lat trenuję dzieci, młodzież i dorosłych – zawodników oraz osoby ćwiczące rekreacyjnie. Dbam o każdy aspekt przygotowania technicznego, motorycznego i psychologicznego moich wychowanków.

    Oprócz sportów walki uprawiam narciarstwo. Bardzo lubię podróże.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ kickboxing
    ○ boks
    ○ treningi personalne`,
    src: "2x.jpg",
  },
  {
    name: "team",
    title: "MATEUSZ KRYNICKI",
    description: `Od dzieciństwa interesowałem się sportami walki. Na początku było to Oyama Karate, później odkryłem pasję do boksu tajskiego. Muai Thai ćwiczyłem w wielu klubach w Polsce i za granicą (Londyn, Kijów, Tajlandia) pod okiem wielu znamienitych osobistości. Posiadam uprawnienia trenera nie tylko boksu tajskiego, ale również boksu klasycznego. Ukończyłem również 9-miesięczne szkolenie dla służb mundurowych prowadzone przez byłych żołnierzy jednostki GROM.

    Po godzinach uprawiam survival i wspinaczkę wysokogórską. Interesuję się historią. Bardzo lubię teatr.


    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Muai Thai
    ○ boks
    ○ kickboxing
    ○ samoobrona dla kobiet`,
    src: "2x.jpg",
  },
  {
    name: "team",
    title: "PATRYCJA CZEKAJ",
    description: `Według znajomych jestem wulkanem energii. Od ponad 20 lat ćwiczę taniec, miałam styczność z wieloma stylami - od inscenizacji tanecznych, przez jazz, po cheerleading, hip hop, new style, commercial i shuffle. Wielokrotnie uczestniczyłam w mistrzostwach na poziomie krajowym oraz europejskim, realizowałam pokazy taneczne na wydarzeniach sportowych i kulturalnych, koncerty, teledyski i eventy telewizyjne.

    Po godzinach zdecydowanie unikam nudy, rzucam sobie wyzwania i próbuję nowych rzeczy, obecnie uczę się bachaty sensual. Interesuję się też modą. Każdą wolną chwilę poświęcam mojej największej miłości - maltance Sheri.
    

    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ Shuffle dance
    ○ Hip hop, new style
    ○ Commercial
    ○ Cheerleaders`,
    src: "2x.jpg",
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
    src: "2x.jpg",
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
    src: "2x.jpg",
  },
  {
    name: "team",
    title: "TOMEK RYTEL",
    description: `Jestem posiadaczem czarnego pasa w BJJ (brazylijskim jiu jitsu), członkiem kadry narodowej grapplingu i kilkukrotnym mistrzem polski ADCC. Umiejętności przez wiele lat szlifowałem w Polsce, Abu Dhabi i Brazylii. Aktualnie pozostaję czynnym zawodnikiem i trenerem.
    
    Jestem człowiekiem rodzinnym. Moją drugą wielką pasją poza sportem jest sushi.

    𝗣𝗿𝗼𝘄𝗮𝗱𝘇𝗼𝗻𝗲 𝘇𝗮𝗷𝗲̨𝗰𝗶𝗮:

    ○ BJJ dla dorosłych
    ○ BJJ dla dzieci
    ○ treningi personalne`,
    src: "2x.jpg",
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
    
    Oferujemy szeroki wybór zajęć w kameralnych grupach, treningi indywidualne i możliwość samodzielnych ćwiczeń.`,
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
    title: "Wyselekcjonowana kadra pracownicza",
    description: `Szczególną uwagę zwracamy na czynnik ludzki.
    
    Gwarantujemy, że nasi trenerzy są nie tylko świetnymi specjalistami we własnych dziedzinach, co także ciekawymi, otwartymi ludźmi, którzy bez trudu zarażą Cię pasją do sportu.`,
    src: "baner_03.jpg",
  },
];

export const offerItems: Array<Item> = [
  {
    name: "offer",
    title: "WITAJ NA MOKOTÓW GYM",
    description: "Stay tuned",
    src: "tajner.jpg",
  },
  {
    name: "offer",
    title: "MOKOTÓW GYM",
    description: "Wkrótce!",
    src: "tajnermalysz.jpg",
  },
  {
    name: "offer",
    title: "MAKE PROGRESS",
    description: "I inne hasła motywacyjne",
    src: "tajnerlep.jpg",
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
