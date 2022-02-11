export type TechnologyData = {
  id: string;
  name: string;
  description: string;
  image: {
    landscape: {
      png: string;
      webp: string;
      width: number;
      height: number;
    };
    portrait: {
      png: string;
      webp: string;
      width: number;
      height: number;
    };
  };
};
