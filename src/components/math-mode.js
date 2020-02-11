import React from 'react';

import './math-menu.css';

const MathMenu = ({ handleModeClick }) => {
	const options = [
		{ key: 'multiplication-2by1', ui: '2 by 1' },
		{ key: 'multiplication-2by2', ui: '2 by 2' },
		{ key: 'multiplication-2by3', ui: '2 by 3' },
		{ key: 'multiplication-3by1', ui: '3 by 1' },
		{ key: 'multiplication-3by2', ui: '3 by 2' },
		{ key: 'multiplication-3by3', ui: '3 by 3' }
	];
	return (
		<ul style={{ display: 'flex', padding: 0 }}>
			{options.map((opt, key) => (
				<li key={key} className="menu-option">
					<button className="option-button" onClick={() => handleModeClick(opt)}>{opt.ui}</button>
				</li>
			))}
		</ul>
	);
};

export default MathMenu;
