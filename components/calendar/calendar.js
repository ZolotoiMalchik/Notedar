/* import {CalendarCell} from "../../components/calendarcell/CalendarCell";
import {CalendarRow} from "../../components/calendarrow/CalendarRow.js";*/
import {CalendarTable} from '../../components/calendartable/CalendarTable.js';

export class Calendar {
	constructor() {
		this.el = document.createElement('div');
		this.el.className = 'calendar';
		this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
		this.date = new Date();


		this._setData();
		this.el.addEventListener("click", this.onCellClick.bind(this));
	}

	render() {
		this.el.innerHTML = `<div class="calendar__cnt">
			<div class="calendar__title">
				<span class="title__year">${this.titleYear}</span>
				<span class="title__month">${this.titleMonth}</span>
			</div>
			<div class="table__cnt"></div>
		</div>`;

		this.renderTable();
	}

	renderTable() {
		new CalendarTable(this.data).insertTable(this.el.querySelector('.table__cnt'));
	}

	insertCalendar(container) {
		this.render();
		container.append(this.el);
	}

	setDate(date = new Date()) {
		this.date = date;
		this._setData();
		this.render();
	}

	_setData(date = this.date) {
		this.titleYear = this.date.getFullYear();
		this._curMonth = this.date.getMonth();
		this.titleMonth = this.months[this._curMonth];
		this._Date = new Date(this.titleYear, this._curMonth);
		this._firstDayOfMonth = this._getDay(this._Date);

		let data = [];
		let mainData = [];
		let lastDay;

		while (this._Date.getMonth() === this._curMonth) {
			data.push(this._Date.getDate());

			this._Date.setDate(this._Date.getDate() + 1);
			lastDay = this._getDay(this._Date);
		}


		for (let i = 0; i < this._firstDayOfMonth; i += 1) {
			data.unshift('');
		}
		for (let i = 0; i < lastDay; i += 1) {
			data.push('');
		}

		for (let i = 0; i < data.length; i += 7) {
			mainData.push(data.slice(i, i + 7));
		}

		this.data = mainData;
	}

	_getDay(date) {
		let day = date.getDay();
		if (day === 0) {
			day = 7;
		}
		return day - 1;
	}

	_getData() {
		return this.data;
	}

	onCellClick (e) {
		console.log("CELL CLICK", e.target, e.currentTarget, e.cellClick);
		if (e.cellClick) {
			//this.el.classList.add("hidden-calendar");

			let event = new Event("cellClick", {bubbles: true});
			this.el.dispatchEvent(event);
		}
	}
}
