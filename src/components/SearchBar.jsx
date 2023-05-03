export default function SearchBar(props) {
    const { articles, setFilteredData } = props;

    function handleFilter(e) {
        const searchText = e.target.value.toLowerCase().trim();

        if (!searchText) {
            setFilteredData([]);
            return;
        }

        const filtered = articles.filter(item =>
            item.title.toLowerCase().includes(searchText)
            || item.author.toLowerCase().includes(searchText)
        );

        setFilteredData(filtered);
    }

    return (
        <input className="navbar-searchbar"
            placeholder="Search by Article or Author"
            maxLength="50"
            onChange={handleFilter}
        />
    );
}
