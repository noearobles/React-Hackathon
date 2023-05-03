import React from "react";

export default function SortButton(props) {
  const { articles, setArticles } = props;

  function handleChange(e) {
    const copy = [...articles];

    e.target.value === "oldest"
      ? copy.sort((a, b) => a.date.localeCompare(b.date))
      : copy.sort((a, b) => b.date.localeCompare(a.date));
    setArticles(copy);
  }
  return (
    <select onChange={(e) => handleChange(e)}>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
}
