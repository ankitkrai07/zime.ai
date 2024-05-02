import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import TableData from "../components/TableData";
import Filter from "../components/Filter";
import SearchInput from "../components/SearchInput";
import { fetchPosts } from "../services/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
          setFilteredPosts(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleTagChange = (selectedTags) => {
    setSelectedTags(selectedTags);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredPosts = posts.filter((post) => {
    return (
      (selectedTags.length === 0 ||
        post.tags.some((tag) => selectedTags.includes(tag))) &&
      (searchQuery === "" ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Filter options={tags} onChange={handleTagChange} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <SearchInput onSearch={handleSearch} />
        </Col>
      </Row>
      <TableData data={filteredPosts} />
    </div>
  );
};

export default Home;
