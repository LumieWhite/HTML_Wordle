export const newDiv = (cls) => {
	return Object.assign(document.createElement("div"), {className: cls});
}