import React from 'react';
import Delete from "./Delete";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title : ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let title = this.state.title;
  
        if(title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    }

    handleChange(event) {
        let title = event.target.value;
        this.setState({ title });

    }

    render(){
        return(
            <form className="todo-form" onSubmit={this.handleSubmit} >
                <input type="text" value={this.state.title} placeholder="Что нужно сделать?" onChange={this.handleChange} />
                <Delete type="submit">Добавить</Delete>
            </form>
        )
    }
}

export default Form;