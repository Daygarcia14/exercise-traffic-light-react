import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [color, setcolor] = useState();
	return (
		<>
			<div className="center">
				<div className="center1"></div>
				<div className="trafficLight">
					<div
						className={
							"light red" +
							(color === "darkred" ? " encendido" : "")
						}
						onClick={() => setcolor("darkred")}></div>
					<div
						className={
							"light yellow" +
							(color === "darkorange" ? " encendido" : "")
						}
						onClick={() => setcolor("darkorange")}></div>
					<div
						className={
							"light green" +
							(color === "darkgreen" ? " encendido" : "")
						}
						onClick={() => setcolor("darkgreen")}></div>
				</div>
			</div>
		</>
	);
};

export default Home;
