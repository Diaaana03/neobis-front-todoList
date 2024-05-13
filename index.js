/// Time
const data = new Date();
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

document.getElementById("date").innerHTML = today.toDateString();

function time() {
  const data = new Date();

  let h = data.getHours();
  let m = data.getMinutes();
  let s = data.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  document.getElementById("hour").innerHTML = h + ":" + m + ":" + s;
  setTimeout("time()", 500);
}
//////////////
const submitBtn = document.querySelector("#submit__btn");

const tasks = document.querySelector(".tasks");
const task = document.querySelector("#task");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (task.value) {
    const newTask = document.createElement("div");
    newTask.className = "task-container";

    const input = document.createElement("input");
    input.className = "task-result";
    input.value = task.value;
    input.disabled = true;

    //Add
    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "delete";
    const completeBtn = document.createElement("input");
    completeBtn.type = "checkbox";
    completeBtn.className = "task-complete";

    // Checkboxes
    const category = document.querySelector(
      'input[name="category"]:checked'
    ).value;
    if (category == "business") {
      completeBtn.style.boxShadow =
        "inset 0px 0px 2px 2px var(--btn-color-purple)";
      completeBtn.classList.add("checkbox-blue");
    } else {
      completeBtn.style.boxShadow =
        "inset 0px 0px 2px 2px var(--btn-color-pink)";
      completeBtn.classList.add("checkbox-pink");
    }

    //Delete Button
    deleteBtn.addEventListener("click", (event) => {
      event.preventDefault();
      newTask.remove();
    });

    //Edit Button
    editBtn.addEventListener("click", (event) => {
      event.preventDefault();
      input.disabled = false;
    });

    completeBtn.addEventListener("click", (event) => {
      event.target.checked == true
        ? (input.style.textDecoration = "line-through")
        : (input.style.textDecoration = "none");
    });

    newTask.prepend(completeBtn);
    newTask.appendChild(input);
    newTask.appendChild(editBtn);
    newTask.appendChild(deleteBtn);

    tasks.appendChild(newTask);
  } else {
    alert("Pleade write a task");
  }
});
