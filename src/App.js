import React from "react";
import "./style/main.css";
import { Audio } from "./components/Audio";
import { Map } from "./components/Map";
import { MapFAB } from "./components/MapFAB";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      mapMode: false,
      animatingFab: false,
      animatingChest: false,
      animatingSuccess: false,
    };

    this.toggleMapMode = this.toggleMapMode.bind(this);
    this.promptFab = this.promptFab.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
  }

  toggleSuccess() {
    this.setState({ success: true });
  }

  toggleMapMode() {
    this.state.mapMode
      ? this.setState({ mapMode: false })
      : this.setState({ mapMode: true });
  }

  promptFab() {
    const animate = () => {
      this.setState({ animatingFab: true });
      setTimeout(() => {
        this.setState({ animatingFab: false });
      }, 500);
    };
    !this.state.animatingFab && animate();
  }

  render() {
    // const { width, height } = useWindowSize();

    return (
      <div className="App">
        <div className="content">
          <Audio />
          {this.state.mapMode ? <Map toggleMap={this.toggleMapMode} /> : null}
          {this.state.success && <Confetti />}
          <MapFAB
            animate={this.promptFab}
            animating={this.state.animatingFab}
            toggleMap={this.toggleMapMode}
          />
          <Header />
          <Intro mapPrompt={this.promptFab} />
          <Form
            toggleSuccess={this.toggleSuccess}
            success={this.state.success}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
