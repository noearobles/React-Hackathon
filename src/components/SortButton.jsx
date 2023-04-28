function SortButton() {
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
