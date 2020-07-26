import React from "react";
import "./style/main.css";
import { Audio } from "./components/Audio";
import { Map } from "./components/Map";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Form } from "./components/Form";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import Confetti from "react-confetti";

import Mixpanel from "mixpanel";
const mixpanel = Mixpanel.init("0116233a22eec871253819800d0214a7");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      animatingFab: false,
      animatingChest: false,
      animatingSuccess: false,
    };

    this.promptFab = this.promptFab.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
  }

  componentDidMount() {
    window.onbeforeprint = () => {
      mixpanel.track("Print", {
        print_dialogue_opened: true,
      });
    };
  }

  toggleSuccess() {
    this.setState({ success: true });
    document.getElementsByTagName("html")[0].classList.add("dark");
  }

  promptFab() {
    const animate = () => {
      this.setState({ animatingFab: true });
      setTimeout(() => {
        this.setState({ animatingFab: false });
      }, 1500);
    };
    !this.state.animatingFab && animate();
  }

  render() {
    return (
      <div className={`App ${this.state.success ? "dark" : ""}`}>
        <div className="content">
          <Audio />
          {this.state.success && <Confetti />}
          <Map animate={this.promptFab} animating={this.state.animatingFab} />
          <Header />
          <Intro mapPrompt={this.promptFab} />
          <Form
            toggleSuccess={this.toggleSuccess}
            success={this.state.success}
          />
          {this.state.success && <CTA />}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
