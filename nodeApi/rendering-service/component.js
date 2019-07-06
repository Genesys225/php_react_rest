import express from "express";
import path from "path";
import routes from "../../src/shared/routes";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import App from "../../src/shared/App";
const router = express.Router();

router.post("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  console.log(req.url);
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve("GOOD");

  promise
    .then(data => {
      const context = { data };

      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      res.send(`${markup}, ${serialize(context)}`);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve("GOOD");

  promise
    .then(data => {
      const context = { data };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      res.send(`${markup}!!, ${serialize(context)}`);
    })
    .catch(next);
});

module.exports = router;
