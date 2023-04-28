import React from "react";

function SortButton() {
  // const { articles, setArticles } = props;
  return (
    <div className="hacker-news-logo">
      <select>
        <option selected>Date Added</option>
        <option value="0">Newest</option>
        <option value="1">Oldest</option>
      </select>
    </div>
  );
}

export default SortButton;
