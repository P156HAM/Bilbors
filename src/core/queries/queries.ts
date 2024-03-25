import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Category, ProductType } from "../../constants/schema";

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      name
      slug
      subCategory {
        name
        slug
        subSubCategory {
          name
          slug
        }
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query GetCategory($input: CategoryQuery!) {
    getCategory(input: $input) {
      name
      slug
      subCategory {
        name
        slug
        subSubCategory {
          name
          slug
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($input: CategoryQuery!) {
    getProductsByCategory(input: $input) {
      result
      products {
        id
        name
        description
        price
        image {
          image_large
          image_medium
          image_original
          image_small
          image_xs
        }
        category
        slug {
          name
          category
        }
      }
    }
  }
`;
export const GET_PRODUCTS_BY_SUBCATEGORY = gql`
  query GetProductsBySubCategory($input: CategoryAndSubCategoryQuery!) {
    getProductsBySubCategory(input: $input) {
      products {
        id
        name
        description
        price
        image
      }
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      result
      products {
        id
        name
        description
        price
        image {
          image_large
          image_medium
          image_original
          image_small
          image_xs
        }
        slug {
          name
          category
        }
      }
    }
  }
`;

export const GET_PRODUCT_DETAILS_BY_ID = gql`
  query GetProductDetailsById($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      inventory
      image {
        image_large
        image_medium
        image_original
        image_small
        image_xs
      }
      category
      seller
    }
  }
`;

export const useCachedSearch = (searchTerm: string) => {
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useQuery(GET_ALL_CATEGORIES);
  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = useQuery(GET_ALL_PRODUCTS);

  if (
    !categoriesLoading &&
    !productsLoading &&
    !categoriesError &&
    !productsError
  ) {
    const searchLower = searchTerm.toLowerCase();

    // Extend filtering to include subCategory and subSubCategory
    const filteredCategories = categoriesData.getAllCategories.reduce(
      (acc: Category[], category: Category) => {
        // Check if category matches
        if (category?.name?.toLowerCase().includes(searchLower)) {
          acc.push(category);
          return acc;
        }

        // Check if any subCategory matches
        const matchingSubCategories = category?.subCategory?.filter(
          (subCat) =>
            subCat?.name?.toLowerCase().includes(searchLower) ||
            subCat?.subSubCategory?.some((subSubCat) =>
              subSubCat?.name?.toLowerCase().includes(searchLower)
            )
        );

        if (matchingSubCategories && matchingSubCategories.length > 0) {
          const categoryClone = {
            ...category,
            subCategory: matchingSubCategories,
          };
          acc.push(categoryClone);
        }

        return acc;
      },
      []
    );
    const filteredProducts = productsData.getAllProducts.products.filter(
      (product: ProductType) =>
        product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { filteredCategories, filteredProducts };
  }
  console.log("loading: ", categoriesLoading, productsLoading);
  console.log("error: ", categoriesError, productsError);
  return { filteredCategories: [], filteredProducts: [] };
};
