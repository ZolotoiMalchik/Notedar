"use strict";
/*import {CalendarCell} from "../../components/calendarcell/CalendarCell.js";
import {CalendarRow} from "../../components/calendarrow/CalendarRow.js";
import {CalendarTable} from "../../components/calendartable/CalendarTable.js";*/
import {Calendar} from "../../components/calendar/calendar.js";
import {Note} from "../../components/note/Note.js"; 



/*let data = [["", "", 1,2,3,4,5], [7,8,9,10,11,12,13]];
new CalendarTable(data).insertTable(document.querySelector(".js-container"));*/

let calendar = new Calendar();
calendar.insertCalendar(document.querySelector(".js-container"));

calendar.setDate(new Date(1984, 6));

new Note().insertNote(document.querySelector(".js-container"));
/*let data1 = calendar._getData();
window.Data = data1;*/