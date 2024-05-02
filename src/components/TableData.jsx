import React from "react";
import { Table } from "antd";

const TableData = ({ data }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "id",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <span>
          {tags.map((tag) => (
            <span key={tag} style={{ margin: "0 5px" }}>
              {tag}
            </span>
          ))}
        </span>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  );
};

export default TableData;
