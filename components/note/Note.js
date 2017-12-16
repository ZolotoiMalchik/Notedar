import {NoteInput} from '../../components/noteinput/NoteInput.js';
import {NoteDisplay} from '../../components/notedisplay/NoteDisplay.js';

export class Note {
	constructor(data) {
		this.el = document.createElement('div');
		this.el.className = 'note';
		this.data = data || [
		{name: 'Первая заметка', text: 'Херачу компоненты без остановки!'},
		{name: 'Вторая заметка', text: 'Остановите меня кто-нибудь!!!'}];

		this.input = new NoteInput({onSubmit: this.onNoteInputSubmit.bind(this)});
		this.display = new NoteDisplay(this.data);

		this.el.append(this.display.el, this.input.el);
	}

	render() {
		this.display.render();
		this.input.render();
	}

	insertNote(container) {
		this.render();
		container.append(this.el);
	}

	onNoteInputSubmit(item) {
		this.display.addData(item);
		this.render();
	}
}
