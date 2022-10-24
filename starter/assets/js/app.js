/**
 * In this file app.js you will find all CRUD functions name.
 *
 */

let clickedIdex = 0;
var getId = (id) => {
  return document.getElementById(id);
};

let toDo_tasks = getId("toDo_tasks");



let objectId = 18;
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

  let objectButton = {
    id: objectId++,
    title: modaleTitle.value,
    date: modaleDate.value,
    description: modalTextArea.value,
    priority: priority,
    type: type,
    status: status,
  };

  // Ajoutez object au Array

  tasks.push(objectButton);

  // refresh tasks
  reloadTasks();
}
function displayButtonSave() {
  // Afficher le boutton save

  update_task.style.display = "none";

  save_task.style.display = "block";
}
function displayButtonUpdate() {
  // Afficher le boutton save

  save_task.style.display = "none";

  update_task.style.display = "block";
}

function editTask(index) {

  clickedIdex = index;
  console.table(tasks);
  console.log(index);

  if (tasks[clickedIdex].type == "Feature") {
    radio_2.checked = false;
    radio_1.checked = true;
  } else if (tasks[clickedIdex].type == "Bug") {
    radio_2.checked = true;
    radio_1.checked = false;
  }

  modaleTitle.value = tasks[index].title;
  prioriyOption.value = tasks[index].priority;
  StatusOptions.value = tasks[index].status;
  modaleDate.value = tasks[index].date;
  modalTextArea.value = tasks[index].description;

}

function updateTask() {
  // GET TASK ATTRIBUTES FROM INPUTS

  console.log(clickedIdex);
  let type = undefined;

  if (radio_1.checked == true) {
    type = "Feature";
  } else if (radio_1.checked == false) {
    type = "Bug";
  }
  tasks[clickedIdex].title = modaleTitle.value;
  tasks[clickedIdex].date = modaleDate.value;
  tasks[clickedIdex].description = modalTextArea.value;
  tasks[clickedIdex].type = type;
  tasks[clickedIdex].priority = prioriyOption.value;
  tasks[clickedIdex].status = StatusOptions.value;

  reloadTasks();


}
let deleteindex;
function marckdeleteIndex(index){
  deleteindex = index ;

}

function deleteTask() {
  clickedIdex = deleteindex;

  tasks.splice(deleteindex, 1);

  reloadTasks();
  console.table(tasks);
}
function clearSelected(idoption) {
  var elements = document.getElementById(idoption).options;

  for (var i = 0; i < elements.length; i++) {
    elements[i].selected = false;
  }
}
function initTaskForm() {
  // Clear task form from data
  staticBackdrop.reset();
}
// dragge and drop
function start(e) {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", e.target.getAttribute("id"));
}
function over(e) {
  return false;
}
function drop(e) {
  ob = e.dataTransfer.getData("text");

  e.currentTarget.appendChild(document.getElementById(ob));

  if(e.currentTarget.getAttribute('id')== 'in_progress_tasks'){
    tasks[ob-1].status = 'In Progress' ;
  }else if(e.currentTarget.getAttribute('id')== 'done_tasks'){
    tasks[ob-1].status = 'Done' ;
  }else if (e.currentTarget.getAttribute('id')== 'toDo_tasks') {
    tasks[ob-1].status = 'To Do' ;
    
  }
  
  
  e.stopPropagation();
  reloadTasks();
}


function reloadTasks() {
  // Remove tasks elements
  toDo_tasks.innerHTML = "";
  done_tasks.innerHTML = "";

  in_progress_tasks.innerHTML = "";

  // Set Task count
  let index = 0;
  let count_Done = 0;
  let count_in_progress = 0;
  let count_to_do = 0;
  for (let i of tasks) {
    if (i.status == "To Do") {
      let str = i.description.substr(0, 40);

      let button = `
      
      
      <button  id="${i.id}"  data-bs-toggle="moda"  data-bs-target="#staticBacdrop_2"   class="d-flex  text-start mb-1  rounded-3 p-0 " draggable="true">
      
  <div class="icon">
      <i class="  fs-25px text-danger-900 p-5px fa-regular fa-circle-question "></i> 
  
          


  </div>

   <div class="Title">
      <div class="fw-800">${i.title}</div>

      <div class="date and descreption">
          <div class="fw-100">#${i.id} created in ${i.date}</div>
          <div class="fw-600" title="${i.description}.">${str}</div>
      </div>
      <i class="bi bi-pencil-square"></i>
     
       <div class="preriority and type">
              <span class="btn btn-primary fs-10px py-3px m-1 fw-800 rounded-pill ">${i.priority} </span>
              <span class="btn btn-secondary fs-10px py-3px m-1 fw-800 rounded-pill ">${i.type}</span>

            <div class=" mx-4 d-inline-block   ">


                <i class=" mx-3 fs-19px   fa fa-edit  "   data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="displayButtonUpdate(); editTask(${index})" style="color: green; "  ></i>

                <i class=" fs-19px fa  fa-trash  " data-bs-toggle="modal"  data-bs-target="#staticBackdrop_2" onclick="marckdeleteIndex(${index}) "  style="color: red;" > </i>
              </div>
        
           </div>
   </div>

</button>`;

      toDo_tasks.innerHTML += button;
      index++;
      ++count_to_do;
    }
    if (i.status == "In Progress") {
      let str = i.description.substr(0, 40);

      let button = `
<button draggable="true" id="${i.id}"  class="d-flex  text-start mb-1  rounded-3 p-0 ">

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
      
        <div class=" mx-4 d-inline-block  ">

        <i class=" mx-3 fs-19px   fa fa-edit  "   data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="displayButtonUpdate(); editTask(${index})" style="color: green; "  ></i>

        <i class=" fs-19px fa  fa-trash  " data-bs-toggle="modal"  data-bs-target="#staticBackdrop_2" onclick="marckdeleteIndex(${index}) "  style="color: red;" > </i>

        </div>
    </div>
    </div>

</button>`;

      in_progress_tasks.innerHTML += button;
      index++;
      count_in_progress++;
    }
    if (i.status == "Done") {
      let str = i.description.substr(0, 40);

      let button = `
  <button draggable="true" id="${i.id}"  class="d-flex  text-start mb-1  rounded-3 p-0 ">
  
      <div class="icon">
      <i class="fas fs-25px fa-chevron-circle-down fa-1x text-success p-2"></i>								</div>
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
       
          <div class=" mx-4 d-inline-block  ">
          <i class=" mx-3 fs-19px   fa fa-edit  "   data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="displayButtonUpdate(); editTask(${index})" style="color: green; "  ></i>

          <i class=" fs-19px fa  fa-trash  " data-bs-toggle="modal"  data-bs-target="#staticBackdrop_2" onclick="marckdeleteIndex(${index}) "  style="color: red;" > </i>
        </div>
      </div>
      </div>
  </button>`;
      done_tasks.innerHTML += button;
      index++;
      ++count_Done;
    }
  }

  display_todo(count_to_do);
  display_in_progress(count_in_progress);
  display_done(count_Done);
}

function display_todo(n) {
  $("#to-do-tasks-count").each(function () {
    $(this).text(n);
  });
}
function display_in_progress(n) {
  $("#in-progress-tasks-count").each(function () {
    $(this).text(n);
  });
}
function display_done(n) {
  $("#done-tasks-count").each(function () {
    $(this).text(n);
  });
}
reloadTasks();


