import React, { useState } from "react";
import "./App.css";

import MathMode from "./components/math-mode";
import Problem from "./components/problem";
import Solution from "./components/solution";
import CalcPad from "./components/calc-pad";
import CountDown from "./components/count-down";
import GameStateModal from "./components/game-state-modal";
import Utils from "./utils/utils";

const getSolution = currentProblem => {
  const [part1, operator, part2] = currentProblem.split(" ");
  return Number(part1) * Number(part2);
};

const getRandomProblem = () => {
  const arr = Utils.range(11, 99);
  const first = arr[Math.floor(Math.random() * arr.length)];
  const second = arr[Math.floor(Math.random() * arr.length)];
  return `${first} by ${second}`;
};

function App() {

  const COUNT_DOWN = 20;

  const [score, setScore] = useState(0);
  const [currentMode, setCurrentMode] = useState("");
  const [currentProblem, setCurrentProblem] = useState(getRandomProblem());
  const [currentValue, setCurrentValue] = useState("");
  const [solution, setSolution] = useState(getSolution(currentProblem));
  const [gameState, setGameState] = useState("playing");

  const onModeClick = modeClicked => {
    console.log(modeClicked);
    setCurrentMode({
      currentMode: modeClicked
    });
  };

  const calculateSolution = number => {
    console.log(solution);
    const current = currentValue + number;
    if (gameState !== "lost") {
      if (Number(current) === Number(solution)) {
        const problem = getRandomProblem();
        setGameState("won");
        setCurrentProblem(problem);
        setSolution(getSolution(problem));
        setCurrentValue("");
        setScore(score + 10);
      } else if (current.length >= solution.length) {
        setGameState("lost");
      }
    } else {
      if (current.length < solution.length) {
        setGameState("playing");
      }
    }
  };

  const handleClickPad = number => {
    setCurrentValue(currentValue + number);
    calculateSolution(number);
  };

  const handleBackspace = () => {
    setCurrentValue(currentValue.slice(0, currentValue.length - 1));
  };

  const handleClearInput = () => {
    setCurrentValue("");
  };

  const onKeepPlaying = () => {
    const problem = getRandomProblem();
    setGameState("playing");
    setCurrentProblem(problem);
    setSolution(getSolution(problem));
  };

  const onPlayLater = () => {
    const problem = getRandomProblem();
    setGameState("playing");
    setCurrentProblem(problem);
    setSolution(getSolution(problem));
  };

  const onCountDownFinished = () => setGameState("lost");

  return (
    <div className="App">
      <MathMode handleModeClick={onModeClick} />
      <div>{score}</div>
      <Problem currentProblem={currentProblem} />
      <Solution value={currentValue} />
      <CalcPad
        onClickPad={handleClickPad}
        onBackspace={handleBackspace}
        onClear={handleClearInput}
      />
      <CountDown timeLeft={COUNT_DOWN} onCountDownFinished={onCountDownFinished} />
      {gameState !== "playing" ? (
        <GameStateModal
          gameState={gameState}
          keepPlaying={onKeepPlaying}
          playLater={onPlayLater}
        />
      ) : null}
    </div>
  );
}

export default App;
