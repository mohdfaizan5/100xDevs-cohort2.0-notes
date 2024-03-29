/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor()
  {
    this.todos = [];
  }
  add(task)
  {
    this.todos.push(task);
  }
  remove(indexOfTodo)
  {
  if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
    this.todos.splice(indexOfTodo, 1);
  }
  else {
    console.error("Invalid index for removal");
  }

  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.error("Invalid index for update");
    }
  }
  
  
  getAll()
  {
    return this.todos;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.error("Invalid index for get");
      return null;
    }
  }
  
  clear()
  {
    this.todos = [];
  }

}
const todoList = new Todo();
todoList.add("Task 1");
todoList.add("Task 2");
todoList.add("Task 3");

console.log("All tasks:", todoList.getAll());

const taskAtIndex2 = todoList.get(2);
console.log("Task at index 2:", taskAtIndex2);

todoList.update(1, "Updated Task 2");

console.log("All tasks after update:", todoList.getAll());

