export type NavBarElement = {
  frontName: string;
  routerName: string;
};

export const icons: string[] = ["fb.png", "inst.png"];

export const navbarElements: NavBarElement[] = [
  {
    frontName: "O NAS",
    routerName: "home",
  },
  {
    frontName: "OFERTA",
    routerName: "offer",
  },
  {
    frontName: "GRAFIK",
    routerName: "schedule",
  },
  {
    frontName: "ZESPÓŁ",
    routerName: "team",
  },
  {
    frontName: "GALERIA",
    routerName: "gallery",
  },
  {
    frontName: "KONTAKT",
    routerName: "contact",
  },
];
