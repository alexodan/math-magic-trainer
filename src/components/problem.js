import React from 'react';

const Problem = ({ currentProblem }) => {
	const [ part1, operator, part2 ] = currentProblem.split(' ');

	return (
		<div className="problem-container">
			<span>{part1}</span>
			<span>{operator}</span>
			<span>{part2}</span>
		</div>
	);
};

export default Problem;
