import React, { useState } from 'react';
import './App.css';

import MathMode from './components/math-mode';
import Problem from './components/problem';
import Solution from './components/solution';
import CalcPad from './components/calc-pad';

function getRandomProblem() {
	return '23 by 49';
}

function getSolution(currentProblem) {
	console.log('ASDASD', currentProblem);
	return '1127';
}

function App() {
	const [ currentMode, setCurrentMode ] = useState('');
	const [ currentProblem, setCurrentProblem ] = useState(getRandomProblem);
	const [ currentValue, setCurrentValue ] = useState('');
	const [ solution, setSolution ] = useState(getSolution(currentProblem));
	const [ gameState, setGameState ] = useState('playing');

	const onModeClick = (modeClicked) => {
		console.log(modeClicked);
		setCurrentMode({
			currentMode: modeClicked
		});
	};

	const calculateSolution = (number) => {
		const current = currentValue + number;
		// if game state ...
		if (current === solution) {
			setGameState('won');
			console.log('you  won');
			// setCurrentProblem(getRandomProblem());
		} else if (current.length >= solution.length) {
			setGameState('lost');
		}
	};

	const handleClickPad = (number) => {
		setCurrentValue(currentValue + number);
		calculateSolution(number);
	};

	const handleBackspace = () => {
		setCurrentValue(currentValue.slice(0, currentValue.length - 1));
	};

	const handleClearInput = () => {
		setCurrentValue('');
	};

	return (
		<div className="App">
			<MathMode handleModeClick={onModeClick} />
			<Problem currentProblem={currentProblem} />
			<Solution value={currentValue} />
			<CalcPad onClickPad={handleClickPad} onBackspace={handleBackspace} onClear={handleClearInput} />
		</div>
	);
}

export default App;
