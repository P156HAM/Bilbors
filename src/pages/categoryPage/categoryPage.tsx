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
import toast from "react-hot-toast";
import { Skeleton } from "@nextui-org/react";
interface urlParams {
  category?: string;
  subcategory?: string;
  subsubcategory?: string;
}

const CategoryPage = () => {
  const [isMobileSortOpen, setIsMobileSortOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [displayProducts, setDisplayProducts] = useState<ProductType[]>([]);
  const [subCategoriesToRender, setSubCategoriesToRender] = useState<string[]>(
    []
  );
  const [currentName, setCurrentName] = useState<string>("");
  const { category, subcategory, subsubcategory }: urlParams = useParams();

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = getCategory({ category });
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
  }, [category, subcategory, subsubcategory]);

  // displayProducts will change based on the arguments getProductsByCategory() gets.
  useEffect(() => {
    if (products) {
      setDisplayProducts(products.getProductsByCategory?.products || []);
    }
    console.log("displayProducts", displayProducts);
  }, [products]);

  const applyFilters = (filters: any) => {
    // console.log("Applying filters:", filters);
  };
  const applySort = (sort: any) => {
    // console.log("Applying sort:", sort);
  };

  useEffect(() => {
    const errorMessage = `Sorry, there was a problem fetching the data. Please try reloading the page, or contact support if the problem persists.`;

    if (categoryError || errorGettingProducts) {
      toast.error(errorMessage, {
        duration: 12000,
        position: "top-center",
        style: {
          width: "auto",
          maxWidth: "100%",
          border: "1px solid #D32F2F",
          padding: "16px",
          color: "#D32F2F",
          backgroundColor: "#f0f3f7",
        },
        iconTheme: {
          primary: "#D32F2F",
          secondary: "#FFFFFF",
        },
      });
    }
  }, [categoryError, errorGettingProducts]);

  // This will be the parent (category) storing data from
  useEffect(() => {
    const currentCategory = categoryData?.getCategory;
    let newSubCategories: string[] = [];
    let currentName: string = "";

    if (currentCategory && category && !subcategory) {
      currentName = currentCategory.name || "";
      newSubCategories =
        currentCategory?.subCategory
          ?.map((el) => el.name)
          .filter((slug): slug is string => !!slug) || [];
    } else if (category && subcategory) {
      const subCategoryObject = currentCategory?.subCategory?.find(
        (sub) => sub.slug === subcategory
      );
      if (subCategoryObject) {
        console.log("subCategoryObject", subCategoryObject);
        currentName = subCategoryObject.name || "";
        newSubCategories =
          subCategoryObject.subSubCategory
            ?.map((subSub) => subSub.name)
            .filter((slug): slug is string => !!slug) || [];

        if (subsubcategory) {
          const subSubCategoryObject = subCategoryObject?.subSubCategory?.find(
            (sub) => sub.slug === subsubcategory
          );
          console.log("subsubcategory", subsubcategory);
          console.log("subSubCategoryObject", subSubCategoryObject);
          if (subSubCategoryObject) {
            currentName = subSubCategoryObject.name || "";
          }
        }
      }
    }

    setCurrentName(currentName);
    setSubCategoriesToRender(newSubCategories);
  }, [categoryData, category, subcategory, subsubcategory]);

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
    <div className="py-10 max-w-7xl mx-auto">
      {productsIsLoading && (
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
      )}
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

      <div className="flex flex-row w-full">
        <div className="sd:hidden sm:hidden md:hidden w-1/4 h-full p-2">
          <SortModalDesktop />
          <FilterModalDesktop />
        </div>

        <Products
          style={ProductsStyle.GALLERYPRODUCTS}
          products={displayProducts}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
