import {ROWS, COLS} from "./data.js"
import {newDiv} from "./utils.js"
import {handleKeyInput} from "./logic.js"

const createGameTile = () => {
	const tile = newDiv("game-tile");
	return tile;
}

const initGameContainer = () => {
	const gCon = document.querySelector(".game-container");
	gCon.innerHTML = "";
	for (let row = 0; row < ROWS; row++){
		const gRow = newDiv("game-row")
		Array(5).fill().forEach(() => {
			const gTile = createGameTile();
			gRow.appendChild(gTile);
		})
		gCon.appendChild(gRow);
	}
}

const initController = () => {
	document.addEventListener("keydown", (e) => {
		handleKeyInput(e.code);
	})
}

export const initGame = () => {
	initGameContainer();
	initController();
}