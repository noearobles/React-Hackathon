import Logo from './Logo';
import SearchBar from './SearchBar';
import SortButton from './SortButton';

export default function Navbar(props) {
    const { articles, setArticles, setFilteredData } = props;

    return (
        <nav className="navbar">
            <Logo />
            <h1 className="navbar-header">Hacker News</h1>
            <SearchBar articles={articles} setFilteredData={setFilteredData} />
            <SortButton articles={articles} setArticles={setArticles} />
        </nav>
    );
}
