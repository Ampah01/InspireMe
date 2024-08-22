"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleTagClick = (tag) => {
    setSearch(tag); 
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.prompt.toLowerCase().includes(search.toLowerCase()) ||
      post.tag.toLowerCase().includes(search.toLowerCase()) ||
      post.creator.username.toLowerCase().includes(search.toLowerCase())
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
      
      <PromptCardList data={filteredPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
