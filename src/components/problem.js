import React from 'react';
import './problem.css';

const Problem = ({ currentProblem }) => {
	const [ part1, operator, part2 ] = currentProblem.split(' ');

  const fromStringToSymbol = (operation) => {
    if (operation === 'by') {
      return 'x';
    } else if (operation === 'plus') {
      return '+';
    }
    return '?';
  }

 	return (
		<div className="problem-container">
			<span>{part1}</span>
			<span>{fromStringToSymbol(operator)}</span>
			<span>{part2}</span>
		</div>
	);
};

export default Problem;
