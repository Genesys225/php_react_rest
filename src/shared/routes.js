import React from "react";
import Home from "./Home";
import CountryItem from "./CountryItem";
import Grid from "./Grid";
import { fetchPopularRepos } from "./api";

const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />
    // fetchInitialData: () => fetchPopularRepos('all')
  },
  {
    path: "/country",
    exact: true,
    component: <CountryItem />
    // fetchInitialData: () => fetchPopularRepos('all')
  },
  {
    path: "/popular/:id",
    component: <Grid />,
    fetchInitialData: (path = "") => fetchPopularRepos(path.split("/").pop())
  }
];

export default routes;
