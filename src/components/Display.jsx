import Article from './Article';

export default function Display(props) {
    return (
        <main className={props.isFiltered ? "display__filtered" : "display"}>
            <ul>
                {props.articles.map((card, i) => <Article key={i} card={card} />)}
            </ul>
        </main>
    );
}
