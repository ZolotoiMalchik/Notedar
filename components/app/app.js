'use strict';

import {Calendar} from '../../components/calendar/calendar.js';
import {Note} from '../../components/note/Note.js';

export class App {
	constructor () {
		this.el = document.createElement('div');
		this.el.className = "app";

		this.calendar = new Calendar();
		this.calendar.setDate(new Date(1984, 6));
		this.note = new Note();

		this.el.innerHTML = `<button class="app__back-btn back-btn_hide">Вернуться к цифериям календарным</button>`;

		this.el.append(this.calendar.el, this.note.el);

		this.el.addEventListener("cellClick", this.onBind.bind(this));
		this.el.querySelector(".app__back-btn").addEventListener('click', this.onBackBtnClick.bind(this));
	}

	render () {
		//debugger;
		/*this.el.innerHTML = `<button class="app__back-btn">Вернуться к цифериям календарным</button>
		${this.el.innerHTML}`;*/
		this.calendar.render();
		this.note.render();
		//this.el.innerHTML += `<div>Вернуться к цифериям календарным</div>`;
	}

	insertApp (container) {
		console.log("APP", this);
		this.render();
		container.append(this.el);
	}

	onBind (e) {
		console.log("BIND", e);
		this.calendar.el.classList.toggle("hidden-calendar");
		this.note.el.classList.toggle('display');
		this.el.querySelector(".app__back-btn").classList.toggle("back-btn_hide");
	}

	onBackBtnClick (e) {
		e.preventDefault();

		let event = new Event("cellClick", {bubbles: true});
		this.el.dispatchEvent(event);
	}
}
