export const mainLoop = (currentTime) => {
	requestAnimationFrame(mainLoop);
}

export const handleKeyInput = (keyCode) => {
	if (keyCode.startsWith("Key")) {
		console.log(keyCode);
	} else if (keyCode == "Backspace") {
		console.log("Deleted")
	}
}