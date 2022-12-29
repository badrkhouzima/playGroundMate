// Create the modal element
import fatherSetTiming from "./openTime.js";

export default function openModal() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
console.log("entered in cala")
  // Get the number of days in the current month
  const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  console.log("daynums", numDays);

  const firstDayOfMonthWeekday = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  // Create an array of calendar cells for the current month
  const calendarCells = [];
  for (let i = 0; i < firstDayOfMonthWeekday; i++) {
    // Insert a blank cell
    calendarCells.push("");
  }
  for (let i = 1; i <= numDays; i++) {
    calendarCells.push(`${i}`);
    // let tr = document.createElement('tr');
    // tr.appendChild(td);
  }

  const calander = document.querySelector(".calander__container");
  calander.classList.add("is-open");
  calander.innerHTML = `<div class="modal-content"><table><thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead><tbody> </tbody></table></div>`;

  const tbody = window.document.querySelector("tbody");
  let tr = document.createElement("tr");
  let cellCounter = 0;
  for (const day of calendarCells) {
    const td = document.createElement("td");
    td.setAttribute("onclick", ()=>fatherSetTiming);
    td.textContent = day;
    tr.appendChild(td);

    cellCounter++;

    if (cellCounter === 7) {
      tbody.appendChild(tr);
      tr = document.createElement("tr");
      cellCounter = 0;
    }
    //tbody.appendChild(tr);
  }

  if (cellCounter > 0) {
    tbody.appendChild(tr);
  }
  // it used to be window.addebventlsiten the code below
  addEventListener("click", function (event) {
    if (event.target === calander) {
      calander.classList.remove("is-open");
      // () => modal.classList.remove('is-open')
    }
  });
  return calander;
}

