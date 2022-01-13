const request = require("request");

let getNews = (category, callback) => {
  let newsAPI =
    "https://newsapi.org/v2/top-headlines?language=en&category=" +
    category +
    "&apiKey=c90a86743042445aa02251336dd5e0c5";
  request({ url: newsAPI, json: true }, (error, response) => {
    if (error) {
      callback("Connection Error");
    } else if (response.body.status === "error") {
      callback(response.body.message);
    } else if (response.body.articles.length === 0) {
      callback("Internal API Link Error");
    } else {
      callback(undefined, response.body.articles);
    }
  });
};

module.exports = getNews;
