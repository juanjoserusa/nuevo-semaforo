import React, { useState, useEffect} from "react";


function Traffic () {

    const [ selectedColor, setSelectedColor ] = useState("red");

	

	return (
<div className="container d-flex justify-content-center ">
<div onClick ={useEffect(() => {
	setTimeout(() => {setSelectedColor("green")}, 11000);
	setTimeout(() => {setSelectedColor("yellow")}, 9000);
	setTimeout(() => {setSelectedColor("red")}, 7000);
    setTimeout(() => {setSelectedColor("green")}, 5000);
	setTimeout(() => {setSelectedColor("yellow")}, 3000);
	setTimeout(() => {setSelectedColor("red")}, 1000);
},[])

}><button type="button" class="btn btn-primary btn-lg d-flex justify-content-center">Traffic light random</button></div>
		<div className="traffic-light">
			<div onClick ={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
			<div onClick ={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<div onClick ={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>	
		</div>
</div>	
	);

}

export default Traffic



