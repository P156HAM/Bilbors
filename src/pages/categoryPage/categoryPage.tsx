import { Link, useParams } from "react-router-dom";
import BreadcrumbComponent from "../../components/breadCrumbs/breadCrumbs";
import { slugify } from "../../utils/slugify";
import Products, { ProductsStyle } from "../../components/products/products";
import { useEffect, useState } from "react";
import FilterModal from "../../components/filterModal/filterModal";
import SortModal from "../../components/sortModal/sortModal";
import SortModalDesktop from "../../components/sortModal/sortModalDesktop";
import FilterModalDesktop from "../../components/filterModal/filterModalDesktop";
import { getCategory, getProductsByCategory } from "../../hooks/hooks";
import { ProductType } from "../../constants/schema";
interface urlParams {
  category?: string;
  subcategory?: string;
  subsubcategory?: string;
}
const CategoryPage = () => {
  const [isMobileSortOpen, setIsMobileSortOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const { category, subcategory, subsubcategory }: urlParams = useParams();
  const { data, loading, error } = getCategory({ category });
  const {
    data: products,
    loading: productsIsLoading,
    error: errorGettingProducts,
    refetch,
  } = getProductsByCategory({
    category,
    subCategory: subcategory,
    subSubCategory: subsubcategory,
  });

  // getProductsByCategory will refetch when these variable changes. (when user clicks back and forth between category, subcategory and subsubcategory)
  useEffect(() => {
    refetch();
  }, [category, subcategory, subsubcategory, refetch]);

  // displayProducts will change based on the arguments getProductsByCategory() gets.
  let displayProducts: ProductType[] = [];

  const applyFilters = (filters: any) => {
    // console.log("Applying filters:", filters);
  };
  const applySort = (sort: any) => {
    // console.log("Applying sort:", sort);
  };

  // This will be the parent (category) storing data from
  const currentCategory = data?.getCategory;

  // Display name as a header..
  let currentName = currentCategory?.name;

  const currentSubCategoryName = currentCategory?.subCategory?.filter(
    (sub) => sub.slug === subcategory
  )[0]?.name;

  // Find the subcategories to render based on the current navigation
  let subCategoriesToRender: string[] = [];

  // if the user is on the parent category http://localhost:5173/klader
  if (category) {
    // Redeclare subCategoriesToRender to parents subCategories
    subCategoriesToRender = currentCategory?.subCategory?.map(
      (el) => el.slug
    ) as string[];

    // Redeclare displayProducts and display the product from the current url path.
    displayProducts = products?.getProductsByCategory
      ?.products as ProductType[];
  }

  // if the user is on the parent subCategory http://localhost:5173/klader/herr
  if (category && subcategory) {
    // Redeclare subCategoriesToRender to render parents subCategories
    subCategoriesToRender = currentCategory?.subCategory
      ?.filter((sub) => sub.slug === subcategory)[0]
      ?.subSubCategory?.map((subSub) => subSub.name) as string[];

    // Redeclare displayProducts and display the product from the current url path
    displayProducts = products?.getProductsByCategory
      ?.products as ProductType[];

    // Redeclare the parent (category) subCategory
    currentName = currentSubCategoryName;
  }

  // A function to construct the correct link path
  const constructLinkPath = (key: string) => {
    let linkPath = `/${slugify(category!)}`;
    if (subcategory) {
      linkPath += `/${slugify(subcategory)}`;
    }
    linkPath += `/${slugify(key)}`;
    return linkPath;
  };

  const renderSubcategoryButtons = () => {
    if (!subCategoriesToRender) {
      return <p>No subCategories available</p>;
    }

    return (
      <div className="flex flex-wrap gap-2">
        {subCategoriesToRender?.map((sub) => (
          <Link
            key={sub}
            to={constructLinkPath(sub)}
            className="bg-secondary3 text-secondary1 font-bold hover:bg-gray-400 hover:text-white py-2 px-4 "
          >
            <button>{sub}</button>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="py-10">
      <section className="flex flex-col w-full mb-4 px-5">
        <BreadcrumbComponent />
        <h1 className="text-xl font-bold text-secondary1 py-2">
          {currentName}
        </h1>
        {renderSubcategoryButtons()}
      </section>

      <div className="flex flex-row justify-around w-full mb-4 divide-x lg:hidden xl:hidden 2xl:hidden">
        <button
          className="flex flex-row justify-center text-primary3 font-headline text-base border-y-1 w-1/2 py-3 hover:bg-secondary3 hover:text-primary3"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          <span className="pr-2">
            <img
              width="22"
              height="22"
              src="https://img.icons8.com/ios/50/sorting-options--v1.png"
              alt="sorting-options--v1"
            />
          </span>
          Filter
        </button>

        <button
          className="flex flex-row justify-center text-primary3 text-base font-headline border-y-1 w-1/2 py-3 hover:bg-secondary3 hover:text-primary3"
          onClick={() => setIsMobileSortOpen(true)}
        >
          <span className="pr-2">
            <img
              width="22"
              height="22"
              src="https://img.icons8.com/ios/50/generic-sorting.png"
              alt="generic-sorting"
            />
          </span>
          Sortera
        </button>
      </div>

      <SortModal
        isMobileSortOpen={isMobileSortOpen}
        setIsMobileSortOpen={setIsMobileSortOpen}
      />
      <FilterModal
        isMobileFilterOpen={isMobileFilterOpen}
        setIsMobileFilterOpen={setIsMobileFilterOpen}
      />

      <div className=" grid grid-cols-3 sd:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        <div className="sd:hidden sm:hidden md:hidden h-full p-2">
          <SortModalDesktop />
          <FilterModalDesktop />
        </div>
        {productsIsLoading ? (
          <div>Loading..........⏰</div>
        ) : (
          <Products
            style={ProductsStyle.GALLERYPRODUCTS}
            products={displayProducts}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
