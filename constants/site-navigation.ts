import { RoutesType } from "../typings/Routes";

export const ROUTE_HOME = "/";
export const ROUTE_DESINTATION = "/destination";
export const ROUTE_CREW = "/crew";
export const ROUTE_TECHNOLOGY = "/technology";

export const SITE_ROUTES: RoutesType[] = [
  {
    number: "00",
    vanityName: "Home",
    route: ROUTE_HOME,
  },
  {
    number: "01",
    vanityName: "Destination",
    route: ROUTE_DESINTATION,
  },
  {
    number: "02",
    vanityName: "Crew",
    route: ROUTE_CREW,
  },
  {
    number: "03",
    vanityName: "Technology",
    route: ROUTE_TECHNOLOGY,
  },
];
