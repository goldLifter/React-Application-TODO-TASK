import React from 'react';
import Checkbox from './Checkbox';
import Delete from './Delete';

class Todo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            editing: false
        };
    }
    render(){
        return(this.state.editing ?
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.title} />
                <Delete className="save icon" icon="save" type="submit" />
            </form>
            :
            <div className={`todo${this.props.completed ? ' completed' : ''}`}>
            <Checkbox checked={this.props.completed} onChange={() => this.props.onStatusChange(this.props.id)} />
            <span className="todo-title">{this.props.title}</span>
            <div className="state">
            <Delete className="edit icon" icon="edit" />
            <Delete className="delete icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)} />
            </div>
           </div>
        );
    }
}

export default Todo;