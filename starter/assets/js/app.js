/**
 * In this file app.js you will find all CRUD functions name.
 *
 */

var getId = (id) => {
  return document.getElementById(id);
};

let toDo_tasks = getId("toDo_tasks");

function createTask() {
  // initialiser task form
  // Afficher le boutton save
  // Ouvrir modal form
}

function saveTask() {
  // Recuperer task attributes a partir les champs input

  // type
  let type = undefined;
  if (getId("radio_1").checked) {
    type = getId("radio_1").value;
  } else if (getId("radio_2").checked) {
    type = getId("radio_2").value;
  }
  //priority
  let priority = undefined;
  if (getId("High").selected) {
    priority = getId("High").value;
  } else if (getId("Miduim").selected) {
    priority = getId("Miduim").value;
  } else if (getId("Low").selected) {
    priority = getId("Low").value;
  }
  //status
  let status = undefined;
  if (getId("To-Do").selected) {
    status = getId("To-Do").value;
  } else if (getId("in-progres").selected) {
    status = getId("in-progres").value;
  } else if (getId("Done").selected) {
    status = getId("Done").value;
  }
  // Créez task object
  //creation d object
  let objectButton = {
    id : tasks.length -1,
    title: modaleTitle.value,
    date: modaleDate.value,
    description: modalTextArea.value,
    priority: priority,
    type: type,
    status: status,
  };

  // Ajoutez object au Array
  // push object to array

  tasks.push(objectButton);
  console.table(objectButton);

  // refresh tasks
  reloadTasks();
}

function editTask(index) {
  // Initialisez task form
  initTaskForm()
  // Affichez updates
  reloadTasks() 
  // Delete Button
  // Définir l’index en entrée cachée pour l’utiliser en Update et Delete
  // Definir FORM INPUTS
  // Ouvrir Modal form
}

function updateTask() {
  // GET TASK ATTRIBUTES FROM INPUTS
  // Créez task object
  // Remplacer ancienne task par nouvelle task
  // Fermer Modal form
  // Refresh tasks
}

function deleteTask() {
  // Get index of task in the array

  // Remove task from array by index splice function
  // close modal form
  // refresh tasks
  reloadTasks() 
}
function clearSelected(idoption){
  var elements = document.getElementById(idoption).options;

  for(var i = 0; i < elements.length; i++){
    elements[i].selected = false;
  }
}
function initTaskForm() {
  // Clear task form from data

  modaleTitle.value = "";
  radio_1.checked = false;
  radio_2.checked = false;
  modaleDate.value = "";
  modalTextArea.value ="";
  clearSelected("prioriyOption"); 
  clearSelected("StatusOptions"); 
  // Hide all action buttons 
}

function reloadTasks() {
  // Remove tasks elements
  toDo_tasks.innerHTML = "";
  done_tasks.innerHTML = "";

  in_progress_tasks.innerHTML = "";
 

  // Set Task count
  for (let i of tasks) {
    if (i.status == "To Do") {
        let str = i.description.substr(0, 40);

      let button = `<button    data-bs-toggle="modal"  data-bs-target="#staticBackdrop_2"   class="d-flex  text-start mb-1  rounded-3 p-0 ">

  <div class="icon">
      <i class="  fs-25px text-danger-900 p-5px fa-regular fa-circle-question "></i> 
      
  </div>
  <div class="Title">
      <div class="fw-800">${i.title}</div>
      <div class="date and descreption">
          <div class="fw-100">#${i.id} created in ${i.date}</div>
          <div class="fw-600" title="${i.description}.">${str}</div>
      </div>
      <div class="preriority and type">
          <span class="btn btn-primary fs-10px py-3px m-1 fw-800 rounded-pill ">${i.priority} </span>
          <span class="btn btn-secondary fs-10px py-3px m-1 fw-800 rounded-pill ">${i.type}</span>
      </div>
  </div>

</button>`;

toDo_tasks.innerHTML += button;
    }
    if (i.status == "In Progress") {
        let str = i.description.substr(0, 40);

      let button = `
<button onclick="hh(${i.id})" class="d-flex  text-start mb-1  rounded-3 p-0 ">

    <div class="icon">
        <i class="m-1 text-danger-100  fs-30px spinner-border"></i>  
    </div>
    <div class="Title">
        <div class="fw-800">${i.title}</div>
        <div class="date and descreption">
            <div class="fw-100">#${i.id} created in ${i.date}</div>
            <div class="fw-600" title="${i.description}.">${str}</div>
        </div>
        <div class="preriority and type">
            <span class="btn btn-primary fs-10px py-3px m-1 fw-800 rounded-pill ">${i.priority} </span>
            <span class="btn btn-secondary fs-10px py-3px m-1 fw-800 rounded-pill ">${i.type}</span>
        </div>
    </div>

</button>`;

      in_progress_tasks.innerHTML += button;
    }
    if (i.status == "Done") {
        let str = i.description.substr(0, 40);

        let button = `
  <button class="d-flex  text-start mb-1  rounded-3 p-0 ">
  
      <div class="icon">
      <i class="fas fs-25px fa-chevron-circle-down fa-1x text-success p-2"></i>								</div>
      </div>
      <div class="Title">
          <div class="fw-800">${i.title}</div>
          <div class="date and descreption">
              <div class="fw-100">#${i.id } created in ${i.date}</div>
              <div class="fw-600" title="${i.description}.">${str}</div>
          </div>
          <div class="preriority and type">
              <span class="btn btn-primary fs-10px py-3px m-1 fw-800 rounded-pill ">${i.priority} </span>
              <span class="btn btn-secondary fs-10px py-3px m-1 fw-800 rounded-pill ">${i.type}</span>
          </div>
      </div>
  
  </button>`;
  
  done_tasks.innerHTML += button;
      }
  }
}
