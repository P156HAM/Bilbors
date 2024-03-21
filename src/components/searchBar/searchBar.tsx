import { useState } from "react";
import { useCachedSearch } from "../../core/queries/queries";
import { Category, ProductType } from "../../constants/schema";
import { Divider } from "@nextui-org/divider";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { filteredCategories, filteredProducts } = useCachedSearch(query);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      "filteredCategories",
      filteredCategories,
      "filteredProducts",
      filteredProducts
    );
  };

  return (
    <div className="relative w-full h-16 bg-white shadow-xl lg:h-12 xl:h-12 2xl:h-12">
      <form
        onSubmit={handleSearch}
        className="flex justify-between h-full w-full"
      >
        <input
          type="text"
          placeholder="Sök bland alla produkter..."
          className="w-full px-4 py-2 focus:outline-none transition-all ease-in-out duration-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center m-1 px-4 py-4 text-white rounded-full bg-primary3 lg:px-2 xl:px-2 2xl:px-2"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>search_line</title>
              <g id="search_line" fill="currentColor" fillRule="evenodd">
                <path
                  fill="currentColor"
                  d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2ZM4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
                />
              </g>
            </svg>
          </span>
        </button>
      </form>

      {query && (
        <ul className="absolute bg-white shadow-md max-h-60 overflow-auto z-50 border-1 w-full">
          {filteredCategories.slice(0, 2).map((category: Category) => (
            <li
              key={category.slug}
              className="p-2 hover:bg-gray-100 flex flex-row gap-2 text-md font-headline cursor-pointer text-secondary1"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g id="grid_line" fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                    <path
                      fill="#003366FF"
                      d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4Zm10 0a2 2 0 0 1 1.995 1.85L21 15v4a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-4a2 2 0 0 1 1.85-1.995L15 13h4ZM9 15H5v4h4v-4Zm10 0h-4v4h4v-4Zm0-12a2 2 0 0 1 1.995 1.85L21 5v4a2 2 0 0 1-1.85 1.995L19 11h-4a2 2 0 0 1-1.995-1.85L13 9V5a2 2 0 0 1 1.85-1.995L15 3h4ZM9 3a2 2 0 0 1 1.995 1.85L11 5v4a2 2 0 0 1-1.85 1.995L9 11H5a2 2 0 0 1-1.995-1.85L3 9V5a2 2 0 0 1 1.85-1.995L5 3h4Zm10 2h-4v4h4V5ZM9 5H5v4h4V5Z"
                    />
                  </g>
                </svg>
              </span>
              {category.name}
            </li>
          ))}
          {filteredProducts.slice(0, 6).map((product: ProductType) => (
            <li
              key={product.id}
              className="p-2 hover:bg-gray-100 flex flex-row gap-2 text-md font-headline cursor-pointer text-secondary1"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>search_line</title>
                  <g id="search_line" fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                    <path
                      fill="#003366FF"
                      d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2ZM4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
                    />
                  </g>
                </svg>
              </span>{" "}
              {product.name}
            </li>
          ))}
          {filteredCategories.length === 0 && filteredProducts.length === 0 && (
            <li className="p-2 text-gray-500 text-md font-headline text-secondary1">
              Inga sökresultat hittades.
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
