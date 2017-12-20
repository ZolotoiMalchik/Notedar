import {CalendarRow} from '../../components/calendarrow/CalendarRow.js';

import './calendartable.css';
export class CalendarTable {
	constructor(data, count = 7) {
		this.el = document.createElement('table');
		this.el.className = 'calendar__table';
		this.data = data;
		this.count = count;
		this.days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

		this.el.innerHTML = `
		<thead class="table__inner-head"></thead>
		<tbody class="table__inner-body"></tbody>`;
	}

	render(title = false) {
		if (title) {
			new CalendarRow(this.days, true).insertRow(this.el.querySelector('.table__inner-head'));
		} else {
			this.data.forEach((rowData) => {
				new CalendarRow(rowData).insertRow(this.el.querySelector('.table__inner-body'));
			});
		}
	}


	insertTable(container) {
		this.render(true);
		this.render();
		container.append(this.el);
	}
}
