import { CartItemSlug } from "./types";
export type Maybe<T> = T | null;

export type SubSubCategory = {
  __typename?: "SubSubCategory";
  name: Maybe<string>;
  slug: Maybe<string>;
};

export type SubCategory = {
  __typename?: "SubCategory";
  name: Maybe<string>;
  slug: Maybe<string>;
  subSubCategory: Maybe<SubSubCategory[]>;
};

export type Category = {
  __typename?: "Category";
  name: Maybe<string>;
  slug: Maybe<string>;
  subCategory: Maybe<SubCategory[]>;
};

export type AllCategoriesResult = {
  getAllCategories: Maybe<Category[]>;
};

export type GetCategoryResult = {
  getCategory: Maybe<Category>;
};

export type ProductsByCategoryResult = {
  getProductsByCategory: Maybe<ProductsByCategory>;
};

export type ProductType = {
  __typename?: "Product";
  id?: Maybe<string>;
  name?: Maybe<string>;
  description?: Maybe<string>;
  price?: Maybe<number>;
  inventory?: Maybe<number>;
  image?: Maybe<string>;
  category?: Maybe<string>;
  subCategory?: Maybe<string>;
  subSubCategory?: Maybe<string>;
  section?: Maybe<string>;
  seller?: Maybe<string>;
  slug?: Maybe<CartItemSlug>;
};

export type ProductDetailsByIdResult = {
  getProduct: Maybe<ProductType>;
};

export type ProductsByCategory = {
  result?: Maybe<number>;
  products: Maybe<ProductType[]>;
};

export type AllProductsResult = {
  getAllProducts: Maybe<ProductType[]>;
};

export type SingleProductResult = {
  product?: Maybe<ProductType>;
};
