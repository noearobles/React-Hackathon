import React from 'react';

function Article(props) {
    const { author, comments, date, points, title } = props.card;

    return (
        <li className="card">
            <a className="card-title"
                href={props.card}
                target="_blank"
                rel="noreferrer"
            >
                {title}
            </a>
            <p className="card-description">
                {author} | {date.slice(0, 10)} | {points} points | {comments} comments
            </p>
        </li>
    );
}

export default Article;
