import {CalendarCell} from '../../components/calendarcell/CalendarCell.js';

import './calendarrow.css';

export class CalendarRow {
	constructor(data, header = false, count = 7) {
		this.el = document.createElement('tr');
		this.el.className = header ? 'tr-header': 'tr-row';		
		this.count = count;
		this.data = data;
	}

	render() {
		for (let i = 0; i < this.count; i += 1) {
			new CalendarCell(i, this.data[i]).insertCell(this.el);
		}
	}

	insertRow(container) {
		this.render();
		container.append(this.el);
	}
}
