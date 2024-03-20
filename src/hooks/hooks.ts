import { useQuery } from "@apollo/client";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_CATEGORY,
  GET_PRODUCT_DETAILS_BY_ID,
} from "../core/queries/queries";
import {
  AllCategoriesResult,
  AllProductsResult,
  GetCategoryResult,
  ProductDetailsByIdResult,
  ProductsByCategoryResult,
} from "../constants/schema";

// Get all products

export const useAllProducts = () => {
  const { data, loading, error } =
    useQuery<AllProductsResult>(GET_ALL_PRODUCTS);

  return { data, loading, error };
};

// Get all categories
export const getAllCategories = () => {
  const { data, loading, error } =
    useQuery<AllCategoriesResult>(GET_ALL_CATEGORIES);

  return { data, loading, error };
};

// Get category
export const getCategory = ({ category }: CategoryQueryInput) => {
  const { data, loading, error } = useQuery<GetCategoryResult>(GET_CATEGORY, {
    variables: {
      input: {
        category,
      },
    },
  });

  return { data, loading, error };
};

// Get products by category

interface CategoryQueryInput {
  category?: string;
  subCategory?: string;
  subSubCategory?: string;
}

interface QueryInput {
  category?: string;
  subCategory?: string;
}

export const getProductsByCategory = ({
  category,
  subCategory,
  subSubCategory,
}: CategoryQueryInput) => {
  const { data, loading, error, refetch } = useQuery<ProductsByCategoryResult>(
    GET_PRODUCTS_BY_CATEGORY,
    {
      variables: {
        input: {
          category,
          subCategory,
          subSubCategory,
        },
      },
    }
  );

  return { data, loading, error, refetch };
};

interface GetProductDetailsByIdQueryInput {
  id: string;
}

export const getProductDetailsById = ({
  id,
}: GetProductDetailsByIdQueryInput) => {
  const { data, loading, error } = useQuery<ProductDetailsByIdResult>(
    GET_PRODUCT_DETAILS_BY_ID,
    {
      variables: {
        id,
      },
    }
  );

  return { data, loading, error };
};
