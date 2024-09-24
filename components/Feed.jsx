"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    clearTimeout(searchTimeout);
    setSearch(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filteredPosts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tag) => {
    setSearch(tag);
    const searchResult = filteredPosts(tag);
    setSearchedResults(searchResult);
  };

  const filteredPosts = (searchTerm) =>
    posts.filter(
      (post) =>
        post.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.creator.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a username or a tag"
          value={search}
          onChange={handleSearch}
          required
          className="search_input peer"
        />
      </form>

      {search ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
