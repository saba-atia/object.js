class ToDo {
  constructor() {
    this.taskInput = document.getElementById("taskinput");
    this.addBtn = document.querySelector("#addTask");
    this.taskList = document.getElementById("taskList");
    this.deleteAllBtn = document.getElementById("deleteAllTasks");

    this.addBtn.addEventListener("click", () => {
      this.addTask();
    });

    this.taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.addTask()
      }
    })
    
    
    this.deleteAllBtn.addEventListener("click", () => {
      this.deleteAllTasks();
    });

  }


 addTask() {
    const inputTask = this.taskInput.value;

    if (inputTask == "") {
      window.alert("Please enter value first");
      return;
    }

    const listItem = document.createElement("li");
    const inputSpan = document.createElement("span");
    const completedBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const checkbox = document.createElement("input");

    checkbox.type="checkbox";
    checkbox.classList.add("me-2");
  checkbox.addEventListener("change", () => {
    this.toggleComplete(inputSpan);
  });

    completedBtn.addEventListener("click", () => {
      this.toggleComplete(inputSpan);
    });

    deleteBtn.addEventListener("click", () => {
      this.deleteTask(listItem);
    });
    editBtn.addEventListener("click", () => {
      this.editTask(inputSpan);
    })
    // completedBtn.addEventListener("click", this.toggleComplete(inputSpan));
    completedBtn.classList.add("btn");
    completedBtn.classList.add("btn-success");

    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    editBtn.classList.add("btn", "btn-primary", "btn-warning");

    listItem.classList.add("mb-4");

    inputSpan.innerText = inputTask;
    completedBtn.innerText = "complete";
    deleteBtn.innerText = "delete";
    editBtn.innerText = "Edit";

    listItem.appendChild(inputSpan);
    listItem.appendChild(completedBtn);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    listItem.appendChild(checkbox);

    taskList.appendChild(listItem);

    this.taskInput.value = "";
  }

  toggleComplete(task) {
    task.classList.toggle("completed");
  }

  deleteTask(task) {
    task.remove();
  }
  editTask(task) {
    const currentText = task.innerText;
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = currentText;
    inputField.classList.add("form-control");

    task.replaceWith(inputField);

    inputField.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const newText = inputField.value;
        task.innerText = newText;
        inputField.replaceWith(task);
      }
    });
  }
  
  deleteAllTasks() {
    this.taskList.innerHTML = "";
  }


}

const todoTask = new ToDo();