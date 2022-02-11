export type SpaceDataType = {
  image: {
    png: string;
    webp: string;
  };
  name: string;
  description: string;
  statistics: {
    label: string;
    value: string;
  }[];
};
