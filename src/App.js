import React from "react";
import "./style/main.css";
import { Audio } from "./components/Audio";
import { Map } from "./components/Map";
import { MapFAB } from "./components/MapFAB";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      mapMode: false,
      animatingFab: false,
      animatingChest: false,
      animatingSuccess: false,
    };

    this.toggleMapMode = this.toggleMapMode.bind(this);
    this.swellFab = this.swellFab.bind(this);
  }

  toggleMapMode() {
    this.state.mapMode
      ? this.setState({ mapMode: false })
      : this.setState({ mapMode: true });
  }

  swellFab() {
    const animate = () => {
      this.setState({ animatingFab: true });
      setTimeout(() => {
        this.setState({ animatingFab: false });
      }, 500);
    };
    !this.state.animatingFab && animate();
  }

  // Goal: when "your map" button is clicked, the fab swells

  // I can't just add/remove an animation class to the fab onClick, because React is dumb
  // So, I have to...
  // Add a special state "animatingFab: false" to App
  //
  // When "your map" button is clicked:
  // it triggers an event handler (passed down by App via props)
  // then the state change somehow (???) triggers the animation

  render() {
    return (
      <div className="App">
        <div className="content">
          <Audio />
          {this.state.mapMode ? <Map toggleMap={this.toggleMapMode} /> : null}
          <MapFAB
            animating={this.state.animatingFab}
            toggleMap={this.toggleMapMode}
          />
          <Header />
          <Intro mapPrompt={this.swellFab} />
          <Form />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
