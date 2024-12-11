import React, { useState } from 'react';


//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red");

	return (
		<div class="semaforo ">
			<button onClick={() => setColor("red")} class={`luz roja ${color == "red" ? "encendida" : ""}`}></button>
			<button onClick={() => setColor("yellow")} class={`luz amarilla ${color == "yellow" ? "encendida" : ""}`}></button>
			<button onClick={() => setColor("green")} class={`luz verde ${color == "green" ? "encendida" : ""}`}></button>
		</div>
	);
};

export default TrafficLight;
