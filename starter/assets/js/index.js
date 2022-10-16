// une fonction qui reteurn html element

var get = (id) => {
  return document.getElementById(id);
};
// start


let toDoParent = get("toDoparent");

add_task.onclick = function () {

    let modaleTitl = modaleTitle.value ;
    getElementByName("radio_1").value;

    let button = `<button class="d-flex  text-start mb-1  rounded-3 p-0 ">

            <div class="icon">
                <i class="  fs-25px text-danger-900 p-5px fa-regular fa-circle-question "></i> 
                
            </div>
            <div class="Title">
                <div class="fw-800">${modaleTitl}</div>
                <div class="date anddescreption">
                    <div class="fw-100">#1 created in 2022-10-08</div>
                    <div class="fw-600" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">There is hardly anything more frustrating than having t...</div>
                </div>
                <div class="preriority andstatus">
                    <span class="btn btn-primary fs-10px py-3px m-1 fw-800 rounded-pill ">High</span>
                    <span class="btn btn-secondary fs-10px py-3px m-1 fw-800 rounded-pill ">Feature</span>
                </div>
            </div>

</button>`;
   
  toDoParent.innerHTML += button;

};
