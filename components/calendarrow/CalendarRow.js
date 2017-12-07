import {CalendarCell} from "../../components/calendarcell/CalendarCell.js";

export class CalendarRow {
	constructor (data, count = 7) {
		this.el = document.createElement('tr');	
		this.count = count;
		this.data = data;
	}

	render () {
		
		for (let i = 0; i < this.count; i += 1) {
			new CalendarCell(this.data[i]).insertCell(this.el);
		}
	}

	insertRow (container) {
		this.render();
		container.append(this.el);
	}
}