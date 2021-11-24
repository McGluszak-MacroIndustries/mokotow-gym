export type NavBarElement = {
  frontName: string;
  routerName: string;
};

export type Icon = {
  iconName: string;
  iconHref: string;
};

//["fb.png", "inst.png"];

export const icons: Icon[] = [
  { iconName: "fb.png", iconHref: "https://www.facebook.com/MokotowskiGym" },
  {
    iconName: "inst.png",
    iconHref: "https://www.instagram.com/mokotowski_gym",
  },
];

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
    frontName: "CENNIK",
    routerName: "pricelist",
  },
  {
    frontName: "KONTAKT",
    routerName: "contact",
  },
];

export const englishNavbarElements: NavBarElement[] = [
  {
    frontName: "ABOUT US",
    routerName: "home",
  },
  {
    frontName: "OFFER",
    routerName: "offer",
  },
  {
    frontName: "SCHEDULE",
    routerName: "schedule",
  },
  {
    frontName: "TEAM",
    routerName: "team",
  },
  {
    frontName: "PRICELIST",
    routerName: "pricelist",
  },
  {
    frontName: "CONTACT",
    routerName: "contact",
  },
];

export const navbarMobileElements: NavBarElement[] = [
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
    frontName: "CENNIK",
    routerName: "pricelist",
  },
  {
    frontName: "KONTAKT",
    routerName: "contact",
  },
  {
    frontName: "KUP/REZERWUJ",
    routerName: "reserve",
  },
];

export const englishNavbarMobileElements: NavBarElement[] = [
  {
    frontName: "ABOUT US",
    routerName: "home",
  },
  {
    frontName: "OFFER",
    routerName: "offer",
  },
  {
    frontName: "SCHEDULE",
    routerName: "schedule",
  },
  {
    frontName: "TEAM",
    routerName: "team",
  },
  {
    frontName: "PRICE LIST",
    routerName: "pricelist",
  },
  {
    frontName: "CONTACT",
    routerName: "contact",
  },
  {
    frontName: "RESERVE",
    routerName: "reserve",
  },
];
