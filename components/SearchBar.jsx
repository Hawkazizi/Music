"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form className="flex justify-center mt-32">
        <input
          name="search"
          autoComplete="given-name"
          type="text"
          className=" border-foam-300 rounded p-1"
          onChange={changeHandler}
        />
        <button
          type="submit"
          value="submit"
          className="ml-6 border-2 border-foam-900 p-2 font-bold bg-foam-400 hover:bg-foam-900 rounded-lg"
          onClick={submitHandler}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
