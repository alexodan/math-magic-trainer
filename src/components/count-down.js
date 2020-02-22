import React, { useEffect, useState, useRef } from 'react';
import './count-down.css';

const CountDown = ({ timeLeft, updateCountDown, onCountDownFinished, isPlaying }) => {
	const savedCallback = useRef();

	function callback() {
		if (timeLeft > 0) {
			updateCountDown(timeLeft - 1);
		} else {
			onCountDownFinished();
		}
	}

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(
		() => {
			function tick() {
				savedCallback.current();
			}

			if (isPlaying) {
				let id = setInterval(tick, 1000);
				return () => clearInterval(id);
			}
		},
		[ isPlaying ]
	);

	return (
		<div className="count-down">
			<span>{timeLeft}</span>
		</div>
	);
};

export default CountDown;
