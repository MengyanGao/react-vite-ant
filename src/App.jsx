import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "../src/router/index";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        // 不是老版本的：Switch
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={item.path}
              element={<item.component />} // 不是老版本的：component 或 render
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
