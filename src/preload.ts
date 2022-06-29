window.addEventListener("DOMContentLoaded", () => {
	const mainBody = document.getElementById("main");
	console.log(mainBody);
	if (mainBody) {
		mainBody.innerHTML = `
		<button onclick="alert('THIS SUCKS')">CLICK HERE</button>	
		`;
		mainBody.innerHTML += "<p>THIS REALLY DOES SUCK</p>";
	}
});
