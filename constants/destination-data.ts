import { SpaceDataType } from "../typings/Destination";

export const DESTINATION_DATA: SpaceDataType[] = [
  {
    image: {
      png: "/images/destination/image-moon.png",
      webp: "/images/destination/image-moon.webp",
    },
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",

    statistics: [
      {
        label: "AVG. DISTANCE",
        value: "384,400 km",
      },
      {
        label: "Est. travel time",
        value: "3 days",
      },
    ],
  },
  {
    image: {
      png: "/images/destination/image-mars.png",
      webp: "/images/destination/image-mars.webp",
    },
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    statistics: [
      {
        label: "AVG. DISTANCE",
        value: "225 MIL. km",
      },
      {
        label: "Est. travel time",
        value: "9 months",
      },
    ],
  },
  {
    image: {
      png: "/images/destination/image-europa.png",
      webp: "/images/destination/image-europa.webp",
    },
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    statistics: [
      {
        label: "AVG. DISTANCE",
        value: "628 MIL. km",
      },
      {
        label: "Est. travel time",
        value: "3 Years",
      },
    ],
  },
  {
    image: {
      png: "/images/destination/image-titan.png",
      webp: "/images/destination/image-titan.webp",
    },
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    statistics: [
      {
        label: "AVG. DISTANCE",
        value: "1.6 BIL. km",
      },
      {
        label: "Est. travel time",
        value: "7 years",
      },
    ],
  },
];
