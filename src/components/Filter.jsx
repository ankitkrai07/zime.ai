import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Filter = ({ options, onChange }) => {
  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="Select tags"
      onChange={onChange}
    >
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default Filter;
