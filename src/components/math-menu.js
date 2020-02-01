import React from 'react';

import './math-menu.css';

const MathMenu = ({ handleMenuClick }) => {
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
			{options.map((opt) => (
				<li className="menu-option">
					<button onClick={handleMenuClick}>{opt.ui}</button>
				</li>
			))}
		</ul>
	);
};

export default MathMenu;
