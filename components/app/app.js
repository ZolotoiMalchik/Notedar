import {Data} from "../../components/database/database.js";
import {Calendar} from '../../components/calendar/calendar.js';
import {Note} from '../../components/note/Note.js';

export class App {
	constructor () {
		this.el = document.createElement('div');
		this.el.className = "app";

		this.database = new Data(this);

		this.el.innerHTML = `<div class="btn-wrapper">
		<button class="app__back-btn back-btn_hide">Вернуться к цифериям календарным</button>
		</div>`;

		this.el.addEventListener("cellClick", this.onBind.bind(this));
		this.el.querySelector(".app__back-btn").addEventListener('click', this.onBackBtnClick.bind(this));
	}

	init (cnt) {
		this.database.init();

		this.calendar = new Calendar();
		this.calendar.setDate(new Date(1984, 6));
		this.note = new Note();
		this.el.append(this.calendar.el, this.note.el);
		this.insertApp(cnt);

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

		this.database.getData('/notes/1984618/', this._getData.bind(this));
	}

	onBackBtnClick (e) {
		e.preventDefault();

		let event = new Event("cellClick", {bubbles: true});
		this.el.dispatchEvent(event);
	}

	_getData (data) {
		let result = [];
		let items = data.val();
			for (let item in items) {
				result.push(items[item]);
				this.note.display.addData(items[item]);
			}
			//this.note.display.addData(result);
			this.note.display.render();
	}
}
