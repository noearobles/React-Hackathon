function Display(props) {
  return (
    <main>
      {props.articles.map((e, i) => {
        return (
          <ul className="card" key={i}>
            <li>
              <a class="card-title" href={e.url}>
                {e.title}
              </a>
              <p class="card-description">
                {e.author} | {e.date.slice(0, 10)} | {e.comments} comments |{" "}
                {e.points} points
              </p>
            </li>
          </ul>
        );
      })}
    </main>
  );
}

export default Display;
