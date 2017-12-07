import {CalendarCell} from "../../components/calendarcell/CalendarCell.js";
import {CalendarRow} from "../../components/calendarrow/CalendarRow.js";

export class CalendarTable {
	constructor (data, count = 7) {
		this.el = document.createElement('table');
		this.el.className = "calendar__table";
		this.data = data;
		this.count = count;
		this.days = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

		this.el.innerHTML = `<tbody class="table__inner"></tbody>`;
	}

	render (title = false) {

		if (title) {

			new CalendarRow(this.days).insertRow(this.el.querySelector(".table__inner"));			
		} else {

			this.data.forEach((rowData) => {
				new CalendarRow(rowData).insertRow(this.el.querySelector(".table__inner"));
			});
		}
		
	}


	insertTable (container) {
		this.render(true);
		this.render();
		container.append(this.el);
	}
}