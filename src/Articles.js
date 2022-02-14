import articles from "./articles.json";

const Articles = () => {
  const _ = require("lodash");
  const articlesGroupByCategory = _.groupBy(articles, "articleCategory");

  return (
    <section className="articles">
      <div className="wrapper">
        <div className="articles__intro">
          <p>
            Here are some articles I wrote (in French 🇫🇷) about my new
            professional career in web and mobile development.
          </p>
          <p>
            The first bunch of articles explain what I did before starting my
            bootcamp and how it helps me to confirm my choice.
          </p>
        </div>

        <div className="articles__list">
          <div>
            {Object.keys(articlesGroupByCategory).map(
              (articlesByCategory, index) => {
                return (
                  <div key={index} className="articles__list-by-category">
                    <h3>{articlesByCategory}</h3>
                    <div>
                      {articlesGroupByCategory[articlesByCategory].map(
                        (article, idx) => {
                          return (
                            <p key={idx}>
                              <a
                                href={article.articleLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {article.articleTitle}
                              </a>
                            </p>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="articles__next">
          <p>⏳ Be patient, next articles are coming... !</p>
        </div>
      </div>
    </section>
  );
};

export default Articles;
