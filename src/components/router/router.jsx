import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../homepage/homepage.jsx";

//Handles the navigation - Use <Link> tag whenever the navigation has to be handled instead of href.
const Router = () => {
  document.title = "SK-Revision";

  //Specific components can be added before or after the <Routes> tag if you want to have a header or footer to stay while the other components update.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
