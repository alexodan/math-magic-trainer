import React, { useState } from 'react';
import './App.css';

import MathMenu from './components/math-menu';

function App() {
	const [ menu, setMenu ] = useState([]);

	const onMenuClick = (menuClicked) => {
		console.log(menuClicked);
	};

	return (
		<div className="App">
			<MathMenu handleMenuClick={onMenuClick} />
		</div>
	);
}

export default App;
