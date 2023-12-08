const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";

  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  // Create a new task element
  const newTaskElement = document.createElement("div");
  newTaskElement.innerText = taskName;

  // Append the new task element to the tasksContainer
  tasksContainer.appendChild(newTaskElement);

  // Increment taskCount and update display
  taskCount++;
  displayCount(taskCount);

  // Clear the input field
  newTaskInput.value = "";
};

// Event listener for the "Add" button
addBtn.addEventListener("click", addTask);
