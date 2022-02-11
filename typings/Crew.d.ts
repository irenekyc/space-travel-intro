export type CrewType = {
  id: string;
  name: string;
  description: string;
  role: string;
  image: {
    png: string;
    webp: string;
    height: number;
    width: number;
  };
};
