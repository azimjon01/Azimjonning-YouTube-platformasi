import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search_icon from "../../assets/search.png";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // YouTube qidiruv natijalariga yo'naltirish
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="search-box flex-div border border-[#ccc] mr-[15px] py-2 px-3 rounded-[25px]"
    >
      <input
        type="text"
        placeholder="Search"
        className="w-[400px] border-0 outline-0 bg-transparent text-black dark:text-white "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <img src={search_icon} className="w-[15px]" />
    </form>
  );
};

export default Search;
