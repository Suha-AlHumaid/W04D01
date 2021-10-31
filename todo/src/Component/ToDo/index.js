import React, { Component } from "react";
import ToDoItem from "../ToDoItem";
import "./style.css";
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [
        { id: 0, name: "Sleep" },
        { id: 1, name: "Eat" },
        { id: 2, name: "Code" }
      ]
    }
  }// end of constractor
  //Functions
  //add task to list
  handleClick = (e)=>
  {
  e.preventDefault();// do not update the page after event
// console.log(e.target.task.value);
if (e.target.task.value){//check if text field is empty or not
const todo= { id: this.state.todos.length +1 , name: e.target.task.value}; //create new object 
this.setState({todos:[...this.state.todos, todo]}) // add object to todos array
e.target.task.value = "";//to make value text empty in text feild "task"
}
}//end add func

//delete task from list 
deleteList= (id)=>{
this.setState({todos: this.state.todos.filter(todo=> todo.id !=id)})

}
  render() {
    return (
      <div className="todo">
       
        <h1> ToDoList</h1>
        <form onSubmit= {this.handleClick}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul>
        {this.state.todos.map (
                (todo , i)=>(
             
              <ToDoItem todo={todo} key={i} deleteList = {this.deleteList}/>
                )
          )
          }
        </ul>
      </div>
    )
  }
}
export default ToDo;
