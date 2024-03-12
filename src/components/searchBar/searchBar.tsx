import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <div className="w-full h-16 bg-white shadow-xl lg:h-12 xl:h-12 2xl:h-12">
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
    </div>
  );
};

export default SearchBar;
