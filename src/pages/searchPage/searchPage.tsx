import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get("query");

  // Now you can use this `query` to fetch and display search results
  // Fetch data based on `query` or pass it to another component or hook

  return (
    <div>
      {/* Render your search results based on `query` */}
      Search results for: {query}
    </div>
  );
}

export default SearchResults;
