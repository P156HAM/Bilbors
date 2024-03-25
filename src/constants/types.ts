import { Maybe } from "./schema";

export type IconsProps = {
  stroke?: string;
  color?: string;
  hoverColor?: string;
  tailwindClass?: string;
};

export interface Photo {
  alt: string;
  title: string;
  callToAction: string;
  imageUrl: string;
  ctaButtonText: string;
}

export interface Subcategory {
  label: string;
  subcategories?: { [key: string]: Subcategory };
}

export interface Categories {
  [key: string]: Subcategory;
}

export interface CartItemSlug {
  category?: Maybe<string>;
  description?: Maybe<string>;
  name?: Maybe<string>;
  seller?: Maybe<string>;
  subCategory?: Maybe<string>;
  subSubCategory?: Maybe<string>;
}
export interface ImageURL {
  image_large?: Maybe<string>;
  image_medium?: Maybe<string>;
  image_original?: Maybe<string>;
  image_small?: Maybe<string>;
  image_xs?: Maybe<string>;
}

export interface CartItem {
  __typename?: "Product";
  id?: Maybe<string>;
  name?: Maybe<string>;
  description?: Maybe<string>;
  price?: Maybe<number>;
  inventory?: Maybe<number>;
  image?: Maybe<ImageURL>;
  category?: Maybe<string>;
  subCategory?: Maybe<string>;
  subSubCategory?: Maybe<string>;
  section?: Maybe<string>;
  seller?: Maybe<string>;
  slug?: Maybe<CartItemSlug>;
  quantity?: Maybe<number>;
}

export type SortType =
  | "Relevans"
  | "Högsta pris"
  | "Lägsta pris"
  | "Mest sålda"
  | string;
export interface FilterState {
  sort?: SortType;
  priceRange?: {
    min: number;
    max: number;
  };
  company?: string;
}

export interface SortState {
  sortType: SortType;
}
