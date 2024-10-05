import SearchResults from "@/components/searchResults/SearchResults";

function Search() {
  return (
    <div className="xl:p-4">
      <h2 className="text-2xl font-semibold text-dark shadow-md p-4">
      Search
      </h2>
        <SearchResults />
    </div>
  );
}

export default Search;
