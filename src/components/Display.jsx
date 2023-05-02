import React from "react";

import Article from "./Article";

function Display(props) {
  return (
    <main>
      <ul>
        {props.articles.map((card, i) => (
          <Article key={i} card={card} />
        ))}
      </ul>
    </main>
  );
}

export default Display;
