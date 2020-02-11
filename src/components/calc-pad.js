import React from 'react';

import './calc-pad.css';

const CalcPad = ({ onClickPad, onBackspace, onClear }) => {
	return (
		<div className="calcpad">
			<button className="btn" onClick={() => onClickPad(1)}>
				1
			</button>
			<button className="btn" onClick={() => onClickPad(2)}>
				2
			</button>
			<button className="btn" onClick={() => onClickPad(3)}>
				3
			</button>
			<button className="btn" onClick={() => onClickPad(4)}>
				4
			</button>
			<button className="btn" onClick={() => onClickPad(5)}>
				5
			</button>
			<button className="btn" onClick={() => onClickPad(6)}>
				6
			</button>
			<button className="btn" onClick={() => onClickPad(7)}>
				7
			</button>
			<button className="btn" onClick={() => onClickPad(8)}>
				8
			</button>
			<button className="btn" onClick={() => onClickPad(9)}>
				9
			</button>
			<button className="btn" onClick={() => onBackspace()}>
				⬅
			</button>
			<button className="btn" onClick={() => onClickPad(0)}>
				0
			</button>
			<button className="btn" onClick={() => onClear()}>
				✖
			</button>
		</div>
	);
};

export default CalcPad;
