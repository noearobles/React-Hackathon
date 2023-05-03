import React from 'react';
import axios from 'axios';

import Display from './components/Display';
import Navbar from './components/Navbar';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export default function App() {
    const [articles, setArticles] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);

    React.useEffect(() => {
        (async function () {
            const data = [];
            const res = await axios('/search_by_date?query=austin&tags=story&hitsPerPage=100');
            const hits = res.data.hits;

            for (const e of hits) {
                data.push({
                    title: e.title,
                    url: e.url,
                    date: e.created_at,
                    author: e.author,
                    points: e.points,
                    comments: e.num_comments,
                });
            }

            setArticles(data);
        }());
    }, []);

    return (
        <>
            <Navbar
                articles={articles}
                setArticles={setArticles}
                setFilteredData={setFilteredData}
            />
            <Display
                articles={filteredData.length ? filteredData : articles}
                setArticles={setArticles}
                isFiltered={filteredData.length}
            />
        </>
    );
}
