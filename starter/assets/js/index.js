

console.log(tasks[0].title);
// une fonction qui reteurn html element

var getId = (id) => {
  return document.getElementById(id);
};
// start

let toDoParent = getId("toDoparent");
let tasckId = 0;
add_task.onclick = function () {
  //title
  let title = modaleTitle.value;

  // date
  ++tasckId;
  let date = modaleDate.value;

  // descreption
  let descreption = modalTextArea.value;

  // priority
  let priority = undefined;
  if (getId("High").selected) {
    priority = getId("High").value;
  } else if (getId("Miduim").selected) {
    priority = getId("Miduim").value;
  } else if (getId("Low").selected) {
    priority = getId("Low").value;
  }

  // type
  let type = undefined;
  if (getId("radio_1").checked) {
    type = getId("radio_1").value;
  } else if (getId("radio_2").checked) {
    type = getId("radio_2").value;
  }

  let button = `<button class="d-flex  text-start mb-1  rounded-3 p-0 ">

            <div class="icon">
                <i class="  fs-25px text-danger-900 p-5px fa-regular fa-circle-question "></i> 
                
            </div>
            <div class="Title">
                <div class="fw-800">${title}</div>
                <div class="date and descreption">
                    <div class="fw-100">#${tasckId} created in ${date}</div>
                    <div class="fw-600" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">${descreption}</div>
                </div>
                <div class="preriority and type">
                    <span class="btn btn-primary fs-10px py-3px m-1 fw-800 rounded-pill ">${priority} </span>
                    <span class="btn btn-secondary fs-10px py-3px m-1 fw-800 rounded-pill ">${type}</span>
                </div>
            </div>

</button>`;

  toDoParent.innerHTML += button;
  let array = {
    title: "",
    tasckId: "",
    date: "",
    descreption: "",
    priority: "",
    type: "",
  };
  array.title = title;
  array.tasckId = tasckId;
  array.date = date;
  array.descreption = descreption;
  array.priority = priority;
  array.type = type;

  console.log(
    array.title,
    array.tasckId,
    array.date,
    array.descreption,
    array.priority,
    array.type
  );


};
