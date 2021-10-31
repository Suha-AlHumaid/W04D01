import React, { Component } from 'react'
import './style.css'

class ToDoItem extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="todoItem">
                <li>{this.props.todo.name} <span onClick={()=> this.props.deleteList(this.props.todo.id)}>X</span></li>
                

            </div>
        )
    }
}
export default ToDoItem;
