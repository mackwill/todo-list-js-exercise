// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Watch Nicolas Cage Movies", "Take serious acting notes");
const task2 = newTask("Do Laundry", "Be as clean as Nicolas Cage");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
