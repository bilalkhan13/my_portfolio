import React from 'react';
import data from 'https://jsonplaceholder.typicode.com/posts';

const FetchData = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container__posts">
        {data.map(({ id, title, body }) => {
          return (
            <article key={id} className="post">
              <h3 className="post__title">{title}</h3>
            <p>
              {body}
            </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FetchData;
