import { gql } from "@apollo/client";

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
        image
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
        image
        slug
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
      image
      category
      seller
    }
  }
`;
