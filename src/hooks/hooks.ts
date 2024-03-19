import { useQuery } from "@apollo/client";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_SUBCATEGORY,
  GET_CATEGORY,
} from "../core/queries/queries";
import {
  AllCategoriesResult,
  AllProductsResult,
  GetCategoryResult,
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

export const getProductsBySubCategory = ({
  category,
  subCategory,
}: QueryInput) => {
  const { data, loading, error } = useQuery<ProductsBySubCategoryResult>(
    GET_PRODUCTS_BY_SUBCATEGORY,
    {
      variables: {
        input: {
          category,
          subCategory,
        },
      },
    }
  );

  return { data, loading, error };
};
