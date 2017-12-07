"use strict";

export class CalendarCell {
	constructor (num = "") {
		this.num = num;
		this.el = document.createElement("td");
		this.el.className = "calendar__cell";
	}

	render () {
		this.el.innerHTML = `<div class="cell__wrapper">
		<span class="cell__num">${this.num}</span>
		</div>`;
	}

	insertCell (container)  {
		this.render();
		container.append(this.el);
	}
};
