export type Item = {
  name: string;
  title: string;
  description: string;
  src: string;
};

export const aboutUsItems: Array<Item> = [
  {
    name: "about-us",
    title: "TU POWSTAJE MOKOTÓW GYM",
    description: "Najlepszy gym w Warszawie",
    src: "baner_01.jpg",
  },
  {
    name: "about-us",
    title: "TU POWSTAJE MOKOTÓW GYM",
    description: "Ale to już chyba wspominałem",
    src: "baner_02.jpg",
  },
  {
    name: "about-us",
    title: "TU POWSTAJE MOKOTÓW GYM",
    description: "Na sucho to i trawa nie urośnie",
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
    src: "schedule1.jpg",
  },
  {
    name: "schedule",
    title: "SALA NR2",
    description:
      "W sali numer dwa odbywają się z reguły zajęcia ze sztuk walki a takze uprawiamy tutaj ogółem szermiestwo",
    src: "schedule2.png",
  },
];
