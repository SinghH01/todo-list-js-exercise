// Creates a new object for the given task
function newTask (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print's out provided task details
    logTaskState: function() {
      console.log(`${this.title} has ${this.complete ? "" : "not "}been completed`);
    },

    //Mark's the provided task as completed
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
}


//TEST CODE
  const task1 = newTask("Study OOP", "Finish Module 1 Week 3 today");
  const task2 = newTask("Cooking","Do meal prep for next few days");

  const tasks = [task1, task2];

  task1.logTaskState();
  task1.completeTask();
  task1.logTaskState();

  console.log(tasks);




/*
// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
*/
