import React from "react";

function Article(props) {
  const { author, comments, date, points, title, url } = props.card;

  return (
    <li className="card">
      <a className="card-title" href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
      <p className="card-description">
        {author} |{" "}
        {new Date(date).toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}{" "}
        | {points} points | {comments} comments
      </p>
    </li>
  );
}

export default Article;
