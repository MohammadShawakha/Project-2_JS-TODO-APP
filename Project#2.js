const readline = require("readline");

// Create readline 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Task object constructor
function Task(description, dueDate, priority) {
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = false;
}

// Array of tasks
const taskList = [];

// Function to add a new task
function addTask() {
  rl.question("Enter task description: ", (description) => {
    rl.question("Enter due date: ", (dueDate) => {
      rl.question("Enter priority level: ", (priority) => {
        const newTask = new Task(description, dueDate, priority);
        taskList.push(newTask);
        console.log("Task added successfully!");
        rl.question('Press Enter key... ', () => {
           displayMenu();
        });
       
      });
    });
  });
}

// Function to list all tasks
function listAllTasks() {
  console.log("All tasks:");
  taskList.forEach((task, index) => {
    console.log(
      `${index + 1}) ${task.description} - Due: ${task.dueDate} - Priority: ${
        task.priority
      } - Completed: ${task.completed}`
    );
  });

  rl.question('Press Enter key... ', () => {
    displayMenu();
 });
}

// Function to list completed tasks
function listCompletedTasks() {
  console.log("Completed tasks:");
  const completedTasks = taskList.filter((task) => task.completed);
  completedTasks.forEach((task, index) => {
    console.log(
      `${index + 1}) ${task.description} - Due: ${task.dueDate} - Priority: ${
        task.priority
      }`
    );
  });

  rl.question('Press Enter key... ', () => {
    displayMenu();
 });
}

// Function to mark a task as completed
function markTaskAsCompleted() {
  rl.question(
    "Enter the index of the task to mark as completed: ",
    (taskIndex) => {
      if (taskIndex >= 1 && taskIndex <= taskList.length) {
        taskList[taskIndex - 1].completed = true;
        console.log("Task marked as completed!");
      } else {
        console.log("Invalid task index!");
      }

      rl.question('Press Enter key... ', () => {
        displayMenu();
     });
    }
  );
}

// Function to delete a task
function deleteTask() {
  rl.question("Enter the index of the task to delete: ", (taskIndex) => {
    if (taskIndex >= 1 && taskIndex <= taskList.length) {
      taskList.splice(taskIndex - 1, 1);
      console.log("Task deleted successfully!");
    } else {
      console.log("Invalid task index!");
    }

    rl.question('Press Enter key... ', () => {
      displayMenu();
   });
  });
}

// Function to sort tasks by the due date
function sortByDueDate() {
  taskList.sort(
    (task1, task2) => new Date(task1.dueDate) - new Date(task2.dueDate)
  );
  console.log("Tasks sorted by due date!");

  rl.question('Press Enter key... ', () => {
    displayMenu();
 });
}

// Function to sort tasks by priority
function sortByPriority() {
  taskList.sort((task1, task2) => task1.priority - task2.priority);
  console.log("Tasks sorted by priority!");

  rl.question('Press Enter key... ', () => {
    displayMenu();
 });
}

// Function to clear all tasks
function clearAllTasks() {
  taskList.length = 0;
  console.log("All tasks cleared!");

  rl.question('Press Enter key... ', () => {
    displayMenu();
 });
}

// Function to display the menu 
function displayMenu() {
  console.log("***************************");
  console.log("Welcome to JS TODO-APP");
  console.log("***************************");
  console.log("Select an action:");
  console.log("1) Add a new task");
  console.log("2) List all tasks");
  console.log("3) List completed tasks");
  console.log("4) Mark a task as completed");
  console.log("5) Delete a task");
  console.log("6) Sort tasks by due date");
  console.log("7) Sort tasks by priority");
  console.log("8) Clear all tasks");
  console.log("***************************");

  rl.question("Enter your choice (1-8): ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listAllTasks();
        break;
      case "3":
        listCompletedTasks();
        break;
      case "4":
        markTaskAsCompleted();
        break;
      case "5":
        deleteTask();
        break;
      case "6":
        sortByDueDate();
        break;
      case "7":
        sortByPriority();
        break;
      case "8":
        clearAllTasks();
        break;
      default:
        console.log("Invalid choice!");
        displayMenu();
    }
  });
}

// Start the app
displayMenu();
