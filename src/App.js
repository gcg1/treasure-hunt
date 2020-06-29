import React from "react";
import "./style/main.css";
import { Audio } from "./components/Audio";
import { MapFAB } from "./components/MapFAB";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Audio />
        <MapFAB />
        <Header />
        <Intro />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
