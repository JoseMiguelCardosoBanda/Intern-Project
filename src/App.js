import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import FormCreator from "./components/FormCreator";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <section>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/builder" element={<FormCreator />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
