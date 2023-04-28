function Article(props) {
    const { card, i } = props;
    const { author, comments, date, points, title } = card;

    return (
        <li className="card" key={i}>
            <a class="card-title"
                href={card.url}
                target="_blank">
                {title}
            </a>
            <p className="card-description">
                {author} | {date.slice(0, 10)} | {points} points | {comments} comments
            </p>
        </li>
    );
}

export default Article;