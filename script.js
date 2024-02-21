const taskInput = document.querySelector('#taskInput');
const selectDay = document.querySelector('#selectDay');
const addBtn = document.querySelector('#addBtn');
const taskSummary = document.querySelector('#taskSummary');

const todayList = document.querySelector('#todayList');
const tomorrowList = document.querySelector('#tomorrowList');

let todayCounter = 0;
let tomorrowCounter = 0;

addBtn.addEventListener('click', function() {
  if (selectDay.value === "Today") {
    todayCounter++;
    generateListEement(todayList);
    generateSummaryReport()
  } else {
    tomorrowCounter++
    generateListEement(tomorrowList);
    generateSummaryReport()
  }
  taskInput.value = ''
})

function generateListEement(day) {
  const liItem = document.createElement('li');
  liItem.className = "list-group-item";
  liItem.innerHTML = taskInput.value
  day.appendChild(liItem);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger d-flex float-end';
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function() {
    day === todayList ? todayCounter-- : tomorrowCounter--;
    liItem.remove();
    generateSummaryReport()
  })
  liItem.appendChild(deleteBtn)
}

function generateSummaryReport() {
  if (todayCounter > tomorrowCounter) { 
    taskSummary.innerHTML = `Tasks Today: ${todayCounter} | Tasks Tomorrow: ${tomorrowCounter} <br> More Tasks Today!`;
    taskSummary.style.color = 'red';
  } else if (tomorrowCounter > todayCounter) {
    taskSummary.innerHTML = `Tasks Today: ${todayCounter} | Tasks Tomorrow: ${tomorrowCounter} <br> More Tasks Tomorrow!`;
    taskSummary.style.color = "green"
  } else {
    taskSummary.innerHTML = `Tasks Today: ${todayCounter} | Tasks Tomorrow: ${tomorrowCounter}`;
    taskSummary.style.color = 'black'
  }
}