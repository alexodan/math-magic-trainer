import React from 'react';
import './solution.css';

const Solution = ({ value }) => {
	return (
		<div className="solution-container">
			<input value={value} />
		</div>
	);
};

export default Solution;
