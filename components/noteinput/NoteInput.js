export class NoteInput {
	constructor () {
		this.el = document.createElement("div");
		this.el.className = "noteinput";
	}

	render () {
		this.el.innerHTML = `<form>
			<textarea></textarea>
			<input type="submit" value="Обоготить память">
		</form>`;
	}
}