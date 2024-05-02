import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchInput = ({ onSearch }) => {
  return <Search placeholder="Search posts" onSearch={onSearch} />;
};

export default SearchInput;
