import React from "react";

function SearchBar(props) {
  const { articles } = props;
  const [filteredData, setFilteredData] = React.useState([]);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    if (!searchWord) return setFilteredData(articles);
    const newFilter = articles.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        item.author.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    setFilteredData(newFilter);
  };
  console.log(filteredData);
  return (
    <div className="search">
      <div className="searchInputs">
        <form>
          <label>
            <input
              type="text"
              placeholder=" Search by Article or Author"
              onChange={(e) => handleFilter(e)}
            />
          </label>
        </form>
      </div>
      {filteredData.length < 100 ? (
        <div className="dataResults">
          {filteredData.map((value, key) => {
            return (
              <li className="card" key={key}>
                <a className="card-title" href={value.url}>
                  {value.title}
                </a>
                <p className="card-description">
                  {value.author} |{" "}
                  {new Date(value.date).toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}{" "}
                  | {value.points} points | {value.comments} comments
                </p>
              </li>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
