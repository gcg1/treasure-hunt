import React from "react";
import { Riddle } from "./Riddle";
import { addCompletionToGoogleSheet } from "../GoogleSheet";
import { scroller } from "react-scroll";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAnswers: 0,
      correctAnswers: 0,
      error: "",
      riddles: [
        {
          id: "latin",
          question:
            "Which Latin motto is written 4 times on the doors of a building?",
          options: ["Emeritus", "Meliora", "Serviam", "Apricus"],
          answer: "Serviam",
        },
        {
          id: "bikes",
          question: "How many bike rails in the bike shelter?",
          options: ["10", "12", "14", "16"],
          answer: "12",
        },
        {
          id: "oak",
          question: "What dangerous insect lives in the old oak tree?",
          options: ["Stag beetle", "Moth", "Bumblebee", "Grasshopper"],
          answer: "Moth",
        },
        {
          id: "scouts",
          question:
            "They have a hut in the South West corner of the Park. What colour is their banner?",
          options: ["Purple", "Orange", "Green", "Blue"],
          answer: "Purple",
        },
        {
          id: "steps",
          question: "How many steps up to the wildflower meadow?",
          options: ["11", "13", "15", "17"],
          answer: "15",
        },
        {
          id: "pond",
          question: "What are tall and skinny and live in the pond?",
          options: ["Foxgloves", "Bamboo", "Sunflowers", "Bulrushes"],
          answer: "Bulrushes",
        },
        {
          id: "fruit",
          question: "What summer fruit can you find in the meadow?",
          options: ["Pears", "Strawberries", "Blackberries", "Cherries"],
          answer: "Blackberries",
        },
        {
          id: "flowers",
          question: "Which colour flower CAN’T you find in the park?",
          options: ["Red", "White", "Purple", "Yellow"],
          answer: "Red",
        },
        {
          id: "benches",
          question: "How many benches are there in the meadow?",
          options: ["1", "2", "3", "4"],
          answer: "3",
        },
        {
          id: "woodland",
          question: "What animal’s house can you see along the woodland walk?",
          options: ["Horse", "Badger", "Bat", "Butterfly"],
          answer: "Bat",
        },
      ],
    };

    this.incrementTotalAnswers = this.incrementTotalAnswers.bind(this);
    this.incrementCorrectAnswers = this.incrementCorrectAnswers.bind(this);
    this.decrementCorrectAnswers = this.decrementCorrectAnswers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeError = this.removeError.bind(this);
  }

  incrementTotalAnswers() {
    const updatedTotalAnswers = this.state.totalAnswers + 1;
    this.setState({ totalAnswers: updatedTotalAnswers });
  }

  incrementCorrectAnswers() {
    const updatedCorrectAnswers = this.state.correctAnswers + 1;
    this.setState({ correctAnswers: updatedCorrectAnswers });
  }

  decrementCorrectAnswers() {
    const updatedCorrectAnswers = this.state.correctAnswers - 1;
    this.setState({ correctAnswers: updatedCorrectAnswers });
  }

  failureAnimation() {
    document.getElementsByClassName("locked")[0].play();
    setTimeout(() => document.getElementsByClassName("ohdear")[0].play(), 300);
    document.getElementById("lock").classList.add("animating");
    setTimeout(
      () => document.getElementById("lock").classList.remove("animating"),
      500
    );
  }

  successTransition() {
    this.props.toggleSuccess();
    document.getElementsByClassName("creak")[0].play();
    document.getElementsByClassName("fanfare")[0].play();
    setTimeout(
      () => document.getElementById("treasure-chest").classList.add("unlocked"),
      600
    );
    addCompletionToGoogleSheet();
  }

  removeError() {
    this.state.error.length > 0 && this.setState({ error: "" });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.totalAnswers < this.state.riddles.length) {
      this.setState({ error: "Have you answered ALL the questions?" });
      scroller.scrollTo("unanswered", {
        duration: 500,
        offset: 80,
        delay: 50,
        smooth: true,
      });
    } else if (this.state.correctAnswers === this.state.riddles.length) {
      this.successTransition();
    } else {
      this.setState({
        error: "Not quite right... try again!",
      });
      this.failureAnimation();
    }
  }

  render() {
    const riddlesList = this.state.riddles.map((riddle, index) => (
      <Riddle
        key={riddle.id}
        id={riddle.id}
        questionNumber={index + 1}
        questionsLeft={this.state.riddles.length - (index + 1)}
        question={riddle.question}
        options={riddle.options}
        answer={riddle.answer}
        totalQuestions={this.state.riddles.length}
        totalAnswers={this.state.totalAnswers}
        incrementTotalAnswers={this.incrementTotalAnswers}
        incrementCorrectAnswers={this.incrementCorrectAnswers}
        decrementCorrectAnswers={this.decrementCorrectAnswers}
      />
    ));

    return (
      <form name="riddles" className="riddles" onChange={this.removeError}>
        {riddlesList}

        <div id="check" className="treasure-chest-wrapper">
          <div className="vertical-line"></div>
          <svg
            width="243"
            height="168"
            viewBox="0 0 243 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="treasure-chest">
              <path
                id="lid-underside"
                d="M39.5 30.5L46.5 74.5H196L203.5 30.5H39.5Z"
                fill="#30160A"
              />
              <g id="treasure">
                <path
                  id="depth"
                  d="M46.5 74.5L30 91H212.5L196 74.5H46.5Z"
                  fill="#4F230D"
                />
                <ellipse
                  id="gold"
                  cx="121.5"
                  cy="95"
                  rx="78.5"
                  ry="36"
                  fill="#FDB62F"
                />
                <g id="gold-blur">
                  <g id="Blur" filter="url(#filter0_f)">
                    <ellipse
                      cx="121.5"
                      cy="78"
                      rx="78.5"
                      ry="36"
                      fill="#FDB62F"
                    />
                  </g>
                  <g id="Blur_2" filter="url(#filter1_f)">
                    <ellipse
                      cx="121.5"
                      cy="72"
                      rx="91.5"
                      ry="42"
                      fill="#FDB62F"
                      fillOpacity="0.6"
                    />
                  </g>
                </g>
              </g>
              <g id="chest-top">
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="30"
                  y="44"
                  width="183"
                  height="47"
                >
                  <rect
                    id="Mask"
                    x="30"
                    y="44"
                    width="183"
                    height="47"
                    fill="#C4C4C4"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <g id="chest">
                    <path
                      id="Vector"
                      d="M178.875 43.5625H64.125C55.812 56.032 51.375 70.6849 51.375 85.6726V94.5625L54.2437 151.912L68.0233 151.938H181.492L188.756 151.902L191.625 94.5625V85.6726C191.625 70.6849 187.188 56.032 178.875 43.5625V43.5625Z"
                      fill="#4F230D"
                    />
                    <path
                      id="Vector_2"
                      d="M86.4375 43.5625C80.2314 51.8372 76.875 61.9034 76.875 72.25V151.938H89.625V72.25C89.625 61.9034 92.9814 51.8372 99.1875 43.5625H86.4375Z"
                      fill="#FDB62F"
                    />
                    <path
                      id="Vector_3"
                      d="M156.562 43.5625H143.812C150.019 51.8372 153.375 61.9034 153.375 72.25V151.938H166.125V72.25C166.125 61.9034 162.769 51.8372 156.562 43.5625Z"
                      fill="#FDB62F"
                    />
                    <path
                      id="Vector_4"
                      d="M211.053 71.485C209.057 55.5348 195.498 43.5625 179.423 43.5625H178.875C187.188 56.032 191.625 70.6849 191.625 85.6726V94.5625L188.438 158.312V167.875H207.563L211.923 117.732C212.592 110.022 212.854 102.289 212.707 94.5625C212.564 86.8519 212.012 79.1478 211.053 71.485V71.485Z"
                      fill="#FDB62F"
                    />
                    <path
                      id="Vector_5"
                      d="M64.1252 43.5625H63.577C47.5024 43.5625 33.9428 55.5316 31.9474 71.485C30.0285 86.8264 29.7385 102.33 31.0772 117.736L35.4377 167.875H54.5627V158.312L51.3752 94.5625V85.6726C51.3752 70.6849 55.8122 56.032 64.1252 43.5625Z"
                      fill="#FDB62F"
                    />
                    <path
                      id="Vector_6"
                      d="M41.8125 85C40.053 85 38.625 83.572 38.625 81.8125C38.625 80.053 40.053 78.625 41.8125 78.625C43.572 78.625 45 80.053 45 81.8125C45 83.572 43.572 85 41.8125 85Z"
                      fill="#30160A"
                    />
                    <path
                      id="Vector_7"
                      d="M201.188 85C199.428 85 198 83.572 198 81.8125C198 80.053 199.428 78.625 201.188 78.625C202.947 78.625 204.375 80.053 204.375 81.8125C204.375 83.572 202.947 85 201.188 85Z"
                      fill="#30160A"
                    />
                    <path
                      id="Vector_8"
                      d="M128.997 112.158L126.498 106.293C131.206 104.281 134.25 99.6784 134.25 94.5625C134.25 87.5309 128.532 81.8125 121.5 81.8125C114.468 81.8125 108.75 87.5309 108.75 94.5625C108.75 99.6784 111.794 104.281 116.505 106.293L114.006 112.158C106.94 109.142 102.375 102.238 102.375 94.5625C102.375 84.0151 110.953 75.4375 121.5 75.4375C132.047 75.4375 140.625 84.0151 140.625 94.5625C140.625 102.238 136.061 109.142 128.997 112.158V112.158Z"
                      fill="#30160A"
                    />
                  </g>
                </g>
              </g>
              <g id="chest-bottom">
                <mask
                  id="mask1"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="30"
                  y="91"
                  width="183"
                  height="77"
                >
                  <rect
                    id="Mask_2"
                    x="30"
                    y="91"
                    width="183"
                    height="77"
                    fill="#C4C4C4"
                  />
                </mask>
                <g mask="url(#mask1)">
                  <g id="Chest">
                    <path
                      id="Vector_9"
                      d="M178.875 43.5625H64.125C55.812 56.032 51.375 70.6849 51.375 85.6726V94.5625L54.2437 151.912L68.0233 151.938H181.492L188.756 151.902L191.625 94.5625V85.6726C191.625 70.6849 187.188 56.032 178.875 43.5625V43.5625Z"
                      fill="#4F230D"
                    />
                    <path
                      id="Vector_10"
                      d="M86.4375 43.5625C80.2314 51.8372 76.875 61.9034 76.875 72.25V151.938H89.625V72.25C89.625 61.9034 92.9814 51.8372 99.1875 43.5625H86.4375Z"
                      fill="#FDB62F"
                    />
                    <path
                      id="Vector_11"
                      d="M156.562 43.5625H143.812C150.019 51.8372 153.375 61.9034 153.375 72.25V151.938H166.125V72.25C166.125 61.9034 162.769 51.8372 156.562 43.5625Z"
                      fill="#FDB62F"
                    />
                    <path
                      id="Vector_12"
                      d="M76.875 107.312H89.625V113.688H76.875V107.312Z"
                      fill="#DB9E29"
                    />
                    <path
                      id="Vector_13"
                      d="M153.375 107.312H166.125V113.688H153.375V107.312Z"
                      fill="#DB9E29"
                    />
                    <path
                      id="Vector_14"
                      d="M54.2432 151.912L54.5619 158.312L111.937 167.875L121.499 161.5L131.062 167.875L188.437 158.312L188.756 151.925L54.2432 151.912Z"
                      fill="#281207"
                    />
                    <path
                      id="Vector_15"
                      d="M211.053 71.485C209.057 55.5348 195.498 43.5625 179.423 43.5625H178.875C187.188 56.032 191.625 70.6849 191.625 85.6726V94.5625L188.438 158.312V167.875H207.563L211.923 117.732C212.592 110.022 212.854 102.289 212.707 94.5625C212.564 86.8519 212.012 79.1478 211.053 71.485V71.485Z"
                      fill="#FDB62F"
                    />
                    <path
                      id="Vector_16"
                      d="M64.1252 43.5625H63.577C47.5024 43.5625 33.9428 55.5316 31.9474 71.485C30.0285 86.8264 29.7385 102.33 31.0772 117.736L35.4377 167.875H54.5627V158.312L51.3752 94.5625V85.6726C51.3752 70.6849 55.8122 56.032 64.1252 43.5625Z"
                      fill="#FDB62F"
                    />
                    <path
                      id="Vector_17"
                      d="M54.0842 148.75H33.7734L35.4373 167.875H54.5623V158.312L54.0842 148.75Z"
                      fill="#EDAB2C"
                    />
                    <path
                      id="Vector_18"
                      d="M188.916 148.75L188.438 158.312V167.875H207.563L209.226 148.75H188.916Z"
                      fill="#EDAB2C"
                    />
                    <path
                      id="Vector_19"
                      d="M41.8125 110.5C40.053 110.5 38.625 109.072 38.625 107.312C38.625 105.553 40.053 104.125 41.8125 104.125C43.572 104.125 45 105.553 45 107.312C45 109.072 43.572 110.5 41.8125 110.5Z"
                      fill="#30160A"
                    />
                    <path
                      id="Vector_20"
                      d="M41.8125 136C40.053 136 38.625 134.572 38.625 132.812C38.625 131.053 40.053 129.625 41.8125 129.625C43.572 129.625 45 131.053 45 132.812C45 134.572 43.572 136 41.8125 136Z"
                      fill="#30160A"
                    />
                    <path
                      id="Vector_21"
                      d="M201.188 110.5C199.428 110.5 198 109.072 198 107.312C198 105.553 199.428 104.125 201.188 104.125C202.947 104.125 204.375 105.553 204.375 107.312C204.375 109.072 202.947 110.5 201.188 110.5Z"
                      fill="#30160A"
                    />
                    <path
                      id="Vector_22"
                      d="M201.188 136C199.428 136 198 134.572 198 132.812C198 131.053 199.428 129.625 201.188 129.625C202.947 129.625 204.375 131.053 204.375 132.812C204.375 134.572 202.947 136 201.188 136Z"
                      fill="#30160A"
                    />
                    <path
                      id="Vector_23"
                      opacity="0.16"
                      d="M30.293 91.375H212.71V97.75H30.293V91.375Z"
                      fill="black"
                    />
                    <path
                      id="Vector_24"
                      d="M128.997 112.158L126.498 106.293C131.206 104.281 134.25 99.6784 134.25 94.5625C134.25 87.5309 128.532 81.8125 121.5 81.8125C114.468 81.8125 108.75 87.5309 108.75 94.5625C108.75 99.6784 111.794 104.281 116.505 106.293L114.006 112.158C106.94 109.142 102.375 102.238 102.375 94.5625C102.375 84.0151 110.953 75.4375 121.5 75.4375C132.047 75.4375 140.625 84.0151 140.625 94.5625C140.625 102.238 136.061 109.142 128.997 112.158V112.158Z"
                      fill="#30160A"
                    />
                  </g>
                </g>
              </g>
              <g id="lock">
                <path
                  id="Group"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M131.062 114.688H134.25C136.01 114.688 137.438 116.116 137.438 117.875V143.375C137.438 145.134 136.01 146.562 134.25 146.562H108.75C106.991 146.562 105.562 145.134 105.562 143.375V117.875C105.562 116.116 106.991 114.688 108.75 114.688H111.938V111.5C111.938 106.228 116.228 101.938 121.5 101.938C126.772 101.938 131.062 106.228 131.062 111.5V114.688ZM121.5 108.312C119.744 108.312 118.312 109.744 118.312 111.5V114.688H124.688V111.5C124.688 109.744 123.256 108.312 121.5 108.312ZM121.5 124.25C123.26 124.25 124.688 125.678 124.688 127.438C124.688 128.559 124.072 129.5 123.196 130.07V140.146H119.807V130.07C118.928 129.503 118.312 128.563 118.312 127.438C118.312 125.678 119.741 124.25 121.5 124.25Z"
                  fill="#FDB62F"
                />
                <rect
                  id="lock-gap"
                  x="111"
                  y="110"
                  width="8"
                  height="4"
                  fill="#4F230D"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="29"
                y="28"
                width="185"
                height="100"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="7"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter1_f"
                x="0"
                y="0"
                width="243"
                height="144"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <input
          className="big-button fill-button"
          type="submit"
          onClick={this.handleSubmit}
          value="Check your answers"
        />
        <span className="error-message">{this.state.error}</span>
      </form>
    );
  }
}
