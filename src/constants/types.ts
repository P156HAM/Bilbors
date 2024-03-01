export type IconsProps = {
  stroke?: string;
  color?: string;
  hoverColor?: string;
  tailwindClass?: string;
};

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

export interface Photo {
  alt: string;
  title: string;
  callToAction: string;
  imageUrl: string;
  ctaButtonText: string;
}
