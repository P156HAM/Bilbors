import { Link, useParams } from "react-router-dom";
import { categories } from "../../../testData";
import BreadcrumbComponent from "../../components/breadCrumbs/breadCrumbs";
import { slugify } from "../../utils/slugify";
import { Divider } from "@nextui-org/react";
import Products from "../../components/products/products";

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
    <div className="p-5">
      <BreadcrumbComponent />
      <h1 className="text-xl font-bold mb-4">
        {displayLabel || "Category not found"}
      </h1>

      {renderSubcategoryButtons()}
      <Divider className="my-4" />
      <div className="grid grid-cols-3 sd:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        <div className="sd:hidden sm:hidden bg-primary3 h-full p-2"></div>
        <Products />
      </div>
    </div>
  );
};

export default CategoryPage;
