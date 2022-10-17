// une fonction qui reteurn html element

var getId = (id) => {
  return document.getElementById(id);
};

// start

let toDoParent = getId("toDoparent");
let buttonId = 0;


// function  add task

add_task.onclick = function () {


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
  //cut array

  //title
  let objectButton = {
    
    title: modaleTitle.value,
    date: modaleDate.value,
    description: modalTextArea.value,
    priority: priority,
    type: type,
    status: status,
  };

 
  tasks.push(objectButton);
  console.table(objectButton);
//--------------

  let width = getId('toDoparent').offsetWidth;
  console.log(width);
  
  console.log(tasks[buttonId].description.length);

    if(  tasks[buttonId].description.length < width  ) console.log('hello');


 

  let button = `<button class="d-flex  text-start mb-1  rounded-3 p-0 ">

            <div class="icon">
                <i class="  fs-25px text-danger-900 p-5px fa-regular fa-circle-question "></i> 
                
            </div>
            <div class="Title">
                <div class="fw-800">${tasks[buttonId].title}</div>
                <div class="date and descreption">
                    <div class="fw-100">#${buttonId} created in ${tasks[buttonId].date}</div>
                    <div class="fw-600" title="${tasks[buttonId].description}.">${tasks[buttonId].description}</div>
                </div>
                <div class="preriority and type">
                    <span class="btn btn-primary fs-10px py-3px m-1 fw-800 rounded-pill ">${tasks[buttonId].priority} </span>
                    <span class="btn btn-secondary fs-10px py-3px m-1 fw-800 rounded-pill ">${tasks[buttonId].type}</span>
                </div>
            </div>

</button>`;

  toDoParent.innerHTML += button;
  ++buttonId;
};
