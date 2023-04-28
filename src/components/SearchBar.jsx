function SearchBar() {
  filterSearch = (term) => {
    return (item) => {
      return item.title.includes(term);
    };
  };

  return (
    <div className="search">
      <form onSubmit={this.handleSubmit}>
        <label>
          Search by Article:
          {/* the value of the input is tied to this.state.value so when a user types the handleChange method changes this.state.value to match*/}
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SearchBar;
