import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Nopage from "./pages/Nopage"; // Correct the import path for NoPage

function App() {
  return (
    <Router history={Layout}>
      <Route component={Home}>
        <Route path="/" component={Home} />
        <Route path="/Home" component={home} />
        <Route path="/Nopage" component={Nopage} />
        <Route path="/Blogs" component={Blogs} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );
}


export default App;
