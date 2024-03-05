import { Link, useParams } from "react-router-dom";
import { categories } from "../../../testData";
import BreadcrumbComponent from "../../components/breadCrumbs/breadCrumbs";
import { slugify } from "../../utils/slugify";
import Products from "../../components/products/products";
import { useState } from "react";
import FilterModal from "../../components/filterModal/filterModal";
import SortModal from "../../components/sortModal/sortModal";
import SortModalDesktop from "../../components/sortModal/sortModalDesktop";
import FilterModalDesktop from "../../components/filterModal/filterModalDesktop";

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
            className="bg-secondary1 hover:bg-blue-700 text-secondary4 font-bold py-2 px-4 "
          >
            <button>{subCat.label}</button>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="py-10 ">
      <section className="flex flex-col w-full mb-4 px-5">
        <BreadcrumbComponent />
        <h1 className="text-xl font-bold ">
          {displayLabel || "Category not found"}
        </h1>
        {renderSubcategoryButtons()}
      </section>

      <div className="flex flex-row justify-around w-full mb-4 divide-x lg:hidden xl:hidden 2xl:hidden">
        <button
          className="text-secondary3  text-base border-y-1 w-1/2 py-3 hover:bg-primary3 hover:text-secondary4"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          Filter
        </button>

        <button
          className="text-secondary3  text-base border-y-1 w-1/2 py-3 hover:bg-primary3 hover:text-secondary4"
          onClick={() => setIsMobileSortOpen(true)}
        >
          Sortera
        </button>
      </div>

      <SortModal
        isMobileSortOpen={isMobileSortOpen}
        setIsMobileSortOpen={setIsMobileSortOpen}
        applySort={applySort}
      />
      <FilterModal
        isMobileFilterOpen={isMobileFilterOpen}
        setIsMobileFilterOpen={setIsMobileFilterOpen}
      />

      <div className=" grid grid-cols-3 sd:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        <div className="sd:hidden sm:hidden md:hidden h-full p-2">
          <SortModalDesktop applySort={applySort} />
          <FilterModalDesktop applyFilters={applyFilters} />
        </div>
        <Products />
      </div>
    </div>
  );
};

export default CategoryPage;
