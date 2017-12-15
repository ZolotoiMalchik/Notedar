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
		//debugger;
		if (e.cellClick) {
			//let obj = e.cellClick;
			//let ref = '' + obj.year + obj.month + obj.num;
			//this.database.getData('/notes/' + ref + '/', this._getData.bind(this));
//debugger;	
			this.el.classList.add('app-overflow');
			this.el.querySelectorAll('.calendar__cell')
				.forEach(function (cell) {
					//debugger;
					//console.log("DO WIDTH", cell.getBoundingClientRect().width);
					cell.style.top = cell.getBoundingClientRect().top + "px";
					cell.style.left = cell.getBoundingClientRect().left + "px";
					cell.oldCoords = {
						top: cell.style.top,
						left: cell.style.left,
						width: cell.getBoundingClientRect().width
					};
					
					//console.log("WIDTH", cell.oldCoords.width);
					setTimeout(function() {

						this.style.width = cell.oldCoords.width + "px";
						cell.classList.add('cell_press');

						if (Math.floor(Math.random() * 2) === 1) {
							let lefts = ["-400px", "2500px"];														
							this.style.left = lefts[Math.floor(Math.random() * 2)];
						} else {
							let tops = ["-100px", "1500px"];														
							this.style.top = tops[Math.floor(Math.random() * 2)];
						}

						/*cell.el.style.left = "0px";*/
					}.bind(cell), 10);
			});

		} else {
			this.el.classList.remove('app-overflow');
			this.el.querySelectorAll('.calendar__cell')
				.forEach((cell) => {
					//cell.classList.remove('cell_press');
					cell.style.top = cell.oldCoords.top;
					cell.style.left = cell.oldCoords.left;
					setTimeout(function() {
						/*cell.classList.remove('cell_press');
						cell.style.top = "";
						cell.style.left = "";
						cell.style.width = "inherit";*/
						
					}, 1000);
					
				});
		}
	}

	onBackBtnClick (e) {
		e.preventDefault();

		let event = new Event("cellClick", {bubbles: true});
		this.el.dispatchEvent(event);
	}

	_getData (data) {
		let result = [];
		let items = data.val();
		this.note.display.data = [];
			for (let item in items) {
				if (true) {
					result.push(items[item]);
					this.note.display.addData(items[item]);
				}
			}
			//this.note.display.addData(result);
			this.note.display.render();
	}
}
