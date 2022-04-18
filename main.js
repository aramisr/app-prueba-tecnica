const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;
let var1=null;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener("submit", e => {
	e.preventDefault();

	//Comprobar que la tarea no este vacia
	if(itTask !== ""){
		//Crear tarea
		createTask(itTask.value);
		itTask.value = "";
		renderTasks();//Cada vez que se crea una tarea, y se agrega un nuevo elemento al arreglo, hay que renderizarlo 
	}
});

function createTask(value){
	//Definir un nuevo objeto
	const newTask = {
		id: (Math.random() * 100).toString(36).slice(3),//genera un valor entre 0 y 1
		title: value,
		completed: false
	};

	//Agrego la nueva tarea al arreglo
	tasks.unshift(newTask);

}

//Inyectar codigo HTML en un contenedor
function renderTasks(){

	//Nos permite recorrer un arreglo, y operar con cada iteracion
	const html = tasks.map(task => {
		return `
			<div class="task">
				<div class"completed">${task.completed ? `<span class="done">Done</span>` : `<button class="start-button" data-id="${task.id}">Start</button>`}</div>
				<div class"title">${task.title}</div>
			</div>
		`;	
	});
						
	const tasksContainer = document.querySelector("#tasks");
	tasksContainer.innerHTML = html.join("");

	//Seleccionar cada elemento .task que contenga los botones de -start-
	const startButtons = document.querySelectorAll(".task .start-button");
	
	startButtons.forEach(button => {
		button.addEventListener("click", e => {
			//Comprobar si hay una actividad en progreso
			if(!timer){//Si no existe timer
				
				const id = button.getAttribute('data-id');
				startButtonHandler(id);
				button.textContent = "In progress...";
			}
		});
	});
}

function startButtonHandler(){
	
	
}
