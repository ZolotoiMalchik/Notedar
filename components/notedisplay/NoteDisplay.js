export class NoteDisplay {
	constructor(data) {
		this.el = document.createElement('div');
		this.el.className = 'notedisplay';
		this.data = data;
	}

	render() {
		this.el.innerHTML = `${this.getHTML()}`;
	}

	getHTML() {
		return this.data.map((message) => {
			return `<div class="nodedisplay__note"><span class="note__name">${message.name}</span>
			<p class="note__text">${message.text}</p></div>`;
		}).join('');
	}

	addData (item) {
		this.data.push(item);
	}
}
