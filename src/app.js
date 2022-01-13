const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
const getNews = require("../src/getNews");
const request = require("request");

app.set("view engine", "hbs");

let staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

let viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);

let partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/general", (req, res) => {
  getNews("general", (error, response) => {
    let first = [response[0]];
    let filteredArticles = response.filter((el) => el.urlToImage !== null);
    let dateArray = [],
      timeArray = [];
    filteredArticles.forEach((el, index, arr) => {
      let singleDate = [];
      let x = el.publishedAt.split("T")[0].split("-");
      let y = el.publishedAt.split("T")[1];
      timeArray.push(y.slice(0, 5));
      singleDate.push(x[2], x[1], x[0]);
      dateArray.push(singleDate.join("/"));

      el.articleDate = dateArray[index];
      el.articleTime = timeArray[index];
    });

    res.render("general", {
      firstArticle: first,
      articles: filteredArticles,
    });
  });
});

app.get("/business", (req, res) => {
  getNews("business", (error, response) => {
    let first = [response[0]];
    let filteredArticles = response.filter((el) => el.urlToImage !== null);
    let dateArray = [],
      timeArray = [];
    filteredArticles.forEach((el, index, arr) => {
      let singleDate = [];
      let x = el.publishedAt.split("T")[0].split("-");
      let y = el.publishedAt.split("T")[1];
      timeArray.push(y.slice(0, 5));
      singleDate.push(x[2], x[1], x[0]);
      dateArray.push(singleDate.join("/"));

      el.articleDate = dateArray[index];
      el.articleTime = timeArray[index];
    });

    res.render("business", {
      firstArticle: first,
      articles: filteredArticles,
    });
  });
});

app.get("/entertainment", (req, res) => {
  getNews("entertainment", (error, response) => {
    let first = [response[0]];
    let filteredArticles = response.filter((el) => el.urlToImage !== null);
    let dateArray = [],
      timeArray = [];
    filteredArticles.forEach((el, index, arr) => {
      let singleDate = [];
      let x = el.publishedAt.split("T")[0].split("-");
      let y = el.publishedAt.split("T")[1];
      timeArray.push(y.slice(0, 5));
      singleDate.push(x[2], x[1], x[0]);
      dateArray.push(singleDate.join("/"));

      el.articleDate = dateArray[index];
      el.articleTime = timeArray[index];
    });

    res.render("entertainment", {
      firstArticle: first,
      articles: filteredArticles,
    });
  });
});

app.get("/health", (req, res) => {
  getNews("health", (error, response) => {
    let first = [response[0]];
    let filteredArticles = response.filter((el) => el.urlToImage !== null);
    let dateArray = [],
      timeArray = [];
    filteredArticles.forEach((el, index, arr) => {
      let singleDate = [];
      let x = el.publishedAt.split("T")[0].split("-");
      let y = el.publishedAt.split("T")[1];
      timeArray.push(y.slice(0, 5));
      singleDate.push(x[2], x[1], x[0]);
      dateArray.push(singleDate.join("/"));

      el.articleDate = dateArray[index];
      el.articleTime = timeArray[index];
    });

    res.render("health", {
      firstArticle: first,
      articles: filteredArticles,
    });
  });
});

app.get("/science", (req, res) => {
  getNews("science", (error, response) => {
    let first = [response[0]];
    let filteredArticles = response.filter((el) => el.urlToImage !== null);
    let dateArray = [],
      timeArray = [];
    filteredArticles.forEach((el, index, arr) => {
      let singleDate = [];
      let x = el.publishedAt.split("T")[0].split("-");
      let y = el.publishedAt.split("T")[1];
      timeArray.push(y.slice(0, 5));
      singleDate.push(x[2], x[1], x[0]);
      dateArray.push(singleDate.join("/"));

      el.articleDate = dateArray[index];
      el.articleTime = timeArray[index];
    });

    res.render("science", {
      firstArticle: first,
      articles: filteredArticles,
    });
  });
});

app.get("/sports", (req, res) => {
  getNews("sports", (error, response) => {
    let first = [response[0]];
    let filteredArticles = response.filter((el) => el.urlToImage !== null);
    let dateArray = [],
      timeArray = [];
    filteredArticles.forEach((el, index, arr) => {
      let singleDate = [];
      let x = el.publishedAt.split("T")[0].split("-");
      let y = el.publishedAt.split("T")[1];
      timeArray.push(y.slice(0, 5));
      singleDate.push(x[2], x[1], x[0]);
      dateArray.push(singleDate.join("/"));

      el.articleDate = dateArray[index];
      el.articleTime = timeArray[index];
    });

    res.render("sports", {
      firstArticle: first,
      articles: filteredArticles,
    });
  });
});

app.get("/technology", (req, res) => {
  getNews("technology", (error, response) => {
    let first = [response[0]];
    let filteredArticles = response.filter((el) => el.urlToImage !== null);
    let dateArray = [],
      timeArray = [];
    filteredArticles.forEach((el, index, arr) => {
      let singleDate = [];
      let x = el.publishedAt.split("T")[0].split("-");
      let y = el.publishedAt.split("T")[1];
      timeArray.push(y.slice(0, 5));
      singleDate.push(x[2], x[1], x[0]);
      dateArray.push(singleDate.join("/"));

      el.articleDate = dateArray[index];
      el.articleTime = timeArray[index];
    });

    res.render("technology", {
      firstArticle: first,
      articles: filteredArticles,
    });
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("Server On");
});
