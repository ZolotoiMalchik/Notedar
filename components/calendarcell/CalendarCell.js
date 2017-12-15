

export class CalendarCell {
	constructor(day, num = '') {
		this.num = num;
		this.days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
		this.el = document.createElement('td');
		
		if (num !== '' && isNaN(parseInt(num, 10))) {
			this.el.className =	'calendar__cell calendar__cell_header';
		} else if (isNaN(parseInt(num, 10))) {
			this.el.className =	'calendar__cell calendar__cell_empty';
		} else {
			this.el.className =	'calendar__cell';
		}

		this.el.dataset.label = this.days[day];
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
		//let el = e.target;
		if (this.el.classList.contains('calendar__cell_header')) {
			
			e.stopPropagation();
			return;
		}
		if (this.el.classList.contains('calendar__cell_empty')) {
			
			e.stopPropagation();
			return;
		}
		
		e.cellClick = {
			state: true,
			num: this.num
		};
		
		/*e.preventDefault();

		let event = new Event("cellClick", {bubbles: true});
		this.el.dispatchEvent(event);*/

	}
};
