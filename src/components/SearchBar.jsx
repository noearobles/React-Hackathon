import React from "react";

function SearchBar(props) {
  const { articles } = props;
  const [filteredData, setFilteredData] = React.useState([]);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = articles.filter((item) => {
      return item.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  console.log(filteredData);
  return (
    <div className="search">
      <div className="searchInputs">
        <form>
          <label>
            Search by Article
            <input
              type="text"
              placeholder="here"
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
              <a className="card-title"
                  href={value.url}
                  //target=""
                  >
                  {value.title}
              </a>
              <p className="card-description">
                  {value.author} | {value.date.slice(0, 10)} | {value.points} points | {value.comments} comments
              </p>
          </li>
            );
          })}
        </div>
      ):null}
    </div>
  );
}

export default SearchBar;
