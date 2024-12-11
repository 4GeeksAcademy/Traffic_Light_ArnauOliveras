import React, { useState, useEffect } from 'react';


//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red");

	useEffect(() => {
		if (color === "red") {
			document.getElementById("red").classList.add("encendida");
			document.getElementById("yellow").classList.remove("encendida");
			document.getElementById("green").classList.remove("encendida");
		}
		if (color === "yellow") {
			document.getElementById("yellow").classList.add("encendida");
			document.getElementById("red").classList.remove("encendida");
			document.getElementById("green").classList.remove("encendida");
		}
		if (color === "green") {
			document.getElementById("green").classList.add("encendida");
			document.getElementById("yellow").classList.remove("encendida");
			document.getElementById("red").classList.remove("encendida");
		}
	}, [color]);


	return (
		<div class="semaforo ">
			<button onClick={() => setColor("red")} class="luz roja" id="red"></button>
			<button onClick={() => setColor("yellow")} class="luz amarilla" id="yellow"></button>
			<button onClick={() => setColor("green")} class="luz verde" id="green"></button>
		</div>
	);
};

export default TrafficLight;
