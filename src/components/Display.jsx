import Article from './Article';

function Display(props) {
    const { articles } = props;

    return (
        <main>
            <ul>
                {articles.map((card, i) => <Article card={card} i={i} />)}
            </ul>
        </main>
    );
}

export default Display;
