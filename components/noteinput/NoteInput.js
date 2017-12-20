import './noteinput.css';
export class NoteInput {
	constructor({onSubmit}) {
		this.el = document.createElement('div');
		this.el.className = 'noteinput';

		this.el.addEventListener('submit', this._onSubmit.bind(this));
		this.onSubmit = onSubmit;
	}

	render() {
		this.el.innerHTML = `<form class="noteinput_form">
			<input class="form__name" type="text" value="" placeholder="Новая заметка">
			<textarea class="form__text"></textarea>
			<input type="submit" value="Обоготить память" class="form__submit">
		</form>`;
	}

	_onSubmit(e) {
		e.preventDefault();

		let event = new Event('displaySubmit', {bubbles: true});
		event.submit = {item: {
			text: e.target.querySelector('textarea').value,
			name: e.target.querySelector('.form__name').value
		}};

		console.log('_Submit', event);
		this.el.dispatchEvent(event);
		e.target.querySelector('textarea').value = '';
		e.target.querySelector('.form__name').value = '';
		/* this.onSubmit({
			text: e.target.querySelector('textarea').value,
			name: e.target.querySelector('.form__name').value
		});*/
	}
}
