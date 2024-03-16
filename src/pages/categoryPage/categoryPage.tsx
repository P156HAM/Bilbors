import { Link, useParams } from "react-router-dom";
import BreadcrumbComponent from "../../components/breadCrumbs/breadCrumbs";
import { slugify } from "../../utils/slugify";
import Products, { ProductsStyle } from "../../components/products/products";
import { useEffect, useState } from "react";
import FilterModal from "../../components/filterModal/filterModal";
import SortModal from "../../components/sortModal/sortModal";
import SortModalDesktop from "../../components/sortModal/sortModalDesktop";
import FilterModalDesktop from "../../components/filterModal/filterModalDesktop";
import { getAllCategories, getProductsByCategory } from "../../hooks/hooks";

interface Category {
  category: string;
  subCategory: string[];
  subSubCategory: string[];
}

const CategoryPage = () => {
  const { category, subcategory, subsubcategory } = useParams<{
    category?: string;
    subcategory?: string;
    subsubcategory?: string;
  }>();
  const [isMobileSortOpen, setIsMobileSortOpen] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = getAllCategories();

  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = getProductsByCategory({ category: "kläder" });

  console.log(
    "productsData",
    productsData?.getAllProducts.products,
    productsError
  );

  useEffect(() => {
    // You might want to call some action here if needed.
  }, [category, subcategory, subsubcategory]);

  if (categoriesLoading || productsLoading) return <div>Loading...</div>;
  console.log(categoriesData);

  const currentCategory = categoriesData?.getAllCategories?.find(
    (cat) => cat.slug === category
  );
  const subCategories = currentCategory?.subCategory || [];
  // Find the subcategories to render based on the current navigation depth
  // we need to test this with the backend data..
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
    return (
      <div className="flex flex-wrap gap-2">
        {subCategories.map((subCat, key: number) => (
          <Link
            key={key}
            to={constructLinkPath(subCat.slug!)}
            className="bg-secondary3 text-secondary1 font-bold hover:bg-gray-400 hover:text-white py-2 px-4 "
          >
            <button>{subCat.name}</button>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="py-10">
      <section className="flex flex-col w-full mb-4 px-5">
        <BreadcrumbComponent />
        {/* <h1 className="text-xl font-bold text-secondary1 py-2">
          {displayLabel || "Category not found"}
        </h1> */}
        {renderSubcategoryButtons()}
      </section>

      <div className="flex flex-row justify-around w-full mb-4 divide-x lg:hidden xl:hidden 2xl:hidden">
        <button
          className="flex flex-row justify-center text-primary3 font-headline text-base border-y-1 w-1/2 py-3 hover:bg-secondary3 hover:text-primary3"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          {" "}
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
          {" "}
          <span className="pr-2">
            {" "}
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
        <Products
          style={ProductsStyle.GALLERYPRODUCTS}
          products={productsData?.getAllProducts.products}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
