import { useState } from "react";
import"../styles/clock.css"

const DigitalClock = () => {
	let Ctime = new Date().toLocaleTimeString()

	const[time, setTime] = useState(Ctime);
	const updateTime = () =>{
		Ctime = new Date().toLocaleTimeString();
		setTime(Ctime);
	}
	setInterval(updateTime, 1000);

	return(
		<div className="main-div">
			<div className="clock">
				<h1>{time}</h1>
			</div>
		</div>
	)
}
export default DigitalClock