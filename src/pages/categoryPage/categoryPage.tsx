import { Link, useParams } from "react-router-dom";
import { categories } from "../../../testData";
import BreadcrumbComponent from "../../components/breadCrumbs/breadCrumbs";
import { slugify } from "../../utils/slugify";
import Products, { ProductsStyle } from "../../components/products/products";
import { useState } from "react";
import FilterModal from "../../components/filterModal/filterModal";
import SortModal from "../../components/sortModal/sortModal";
import SortModalDesktop from "../../components/sortModal/sortModalDesktop";
import FilterModalDesktop from "../../components/filterModal/filterModalDesktop";
import { getCategory } from "../../hooks/hooks";

interface SubCategory {
  label: string;
  subcategories?: { [key: string]: SubCategory };
}

interface Category {
  label: string;
  subcategories?: { [key: string]: SubCategory };
}

const CategoryPage = () => {
  const { category, subcategory, subsubcategory } = useParams<{
    category?: string;
    subcategory?: string;
    subsubcategory?: string;
  }>();

  const { data, loading, error } = getCategory({ category });
  if (loading) console.log("loading..");
  if (error) console.log("Error: ", error.message);
  console.log(
    "Clicked data category is calling  this fucking kahbe(GET_CATEGORY) --->",
    data?.__typename
  );

  const [isMobileSortOpen, setIsMobileSortOpen] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const applyFilters = (filters: any) => {
    console.log("Applying filters:", filters);
  };
  const applySort = (sort: any) => {
    console.log("Applying sort:", sort);
  };
  const currentCategory: Category = categories[category ?? ""];

  // Find the subcategories to render based on the current navigation depth
  // we need to test this with the backend data..
  const subcategoriesToRender = subcategory
    ? currentCategory?.subcategories?.[subcategory]?.subcategories
    : currentCategory?.subcategories;
  console.log("subcategoriesToRender", subcategoriesToRender);

  let displayLabel = currentCategory?.label; // this is to display the label name as a header..

  if (subcategory) {
    // If there's a subcategory, attempt to update the label to the subcategory
    // this state handels even the nested subcategory..
    const subCategoryLabel = subsubcategory
      ? currentCategory?.subcategories?.[subcategory]?.subcategories?.[
          subsubcategory
        ].label
      : currentCategory?.subcategories?.[subcategory]?.label;
    if (subCategoryLabel) {
      displayLabel = subCategoryLabel;
    }
    console.log(displayLabel);
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
    if (!subcategoriesToRender) {
      return <p>No subcategories available</p>;
    }

    return (
      <div className="flex flex-wrap gap-2">
        {Object.entries(subcategoriesToRender).map(([key, subCat]) => (
          <Link
            key={key}
            to={constructLinkPath(key)}
            className="bg-secondary3 text-secondary1 font-bold hover:bg-gray-400 hover:text-white py-2 px-4 "
          >
            <button>{subCat.label}</button>
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
          {displayLabel || "Category not found"}
        </h1>
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
        <Products style={ProductsStyle.GALLERYPRODUCTS} />
      </div>
    </div>
  );
};

export default CategoryPage;
