import React from "react";
const Search = ({ setSearch }) => {
  return (
    <div>
      <h1 className="search-title"> Movies </h1>
      <form className="here">
       <input
        type="text"
        placeholder="search . . ."
        onChange={(e) => setSearch(e.target.value)}
      />
       </form>
    </div>
  );
};
export default Search;