import React from "react";
import "./App.css";
import { MapFAB } from "./components/MapFAB";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MapFAB />
      <Header />
      <Intro />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
