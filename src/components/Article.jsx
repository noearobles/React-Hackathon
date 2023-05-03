export default function Article(props) {
    const { author, comments, date, points, title, url } = props.card;

    return (
        <li className="card">
            <a className="card-title"
                href={url}
                target="_blank"
                rel="noreferrer">
                {title}
            </a>
            <p className="card-description">
                {author} | { }
                {new Date(date).toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                })} { }
                | {points} points | {comments} comments
            </p>
        </li>
    );
}
