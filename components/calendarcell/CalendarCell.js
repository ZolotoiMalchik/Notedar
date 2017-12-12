

export class CalendarCell {
	constructor(num = '') {
		this.num = num;
		this.el = document.createElement('td');
		this.el.className = 'calendar__cell';

		this.el.addEventListener('click', this.onClick.bind(this), true);
	}

	render() {
		this.el.innerHTML = `<div class="cell__wrapper">
		<span class="cell__num">${this.num}</span>
		</div>`;
	}

	insertCell(container) {
		this.render();
		container.append(this.el);
	}

	onClick (e) {
		e.cellClick = {
			state: true,
			num: this.num
		};
		/*e.preventDefault();

		let event = new Event("cellClick", {bubbles: true});
		this.el.dispatchEvent(event);*/

	}
};
