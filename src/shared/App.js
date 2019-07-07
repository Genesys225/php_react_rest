import React from "react";
import routes from "./routes";
import Navbar from "./Navbar";

// import "./App.css";

function App({ req }) {
  const { component } = routes.find(({ path }) => req.originalUrl === path);
  console.log(req.originalUrl, component);
  console.log(req.body);
  const { data } = req.body;
  return (
    <div>
      {/* <Navbar /> */}
      {React.cloneElement(component, data)}
    </div>
  );
}

export default App;
