import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search_icon from "../../assets/search.png";
import { Button } from "../button/Button";
import "./Search.css";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      className="search-box flex flex-div border-[#ccc] mr-[15px] py-2 px-3 rounded-[25px] flex-grow max-w-[600px]"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        placeholder="Search"
        className="input-search rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none text-black dark:text-white bg-transparent"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="button-search py-[6px] px-4 rounded-r-full border focus:border-blue-500 border-secondary-border border-l-0 flex-shrink-0">
        <img src={search_icon} alt="" />
      </Button>
    </form>
  );
};

export default Search;
