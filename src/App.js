import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import './App.css';


class App extends Component {
    state = {
        todos: [],
        page: "all"
    }

    addTodo = (todo) => {
        this.setState({
            todos: [{
                title:todo.title,
                id:todo.id,
                completed:todo.completed
            }, ...this.state.todos]
        });
    }

    delTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    updatePage = (s) => {
        this.setState({
            page: s
        })
    }

    render() {
        let todo = [];
        if (this.state.page === 'all') {
            todo = this.state.todos;
        } else if (this.state.page === 'active') {
            todo = this.state.todos.filter(todo => !todo.completed)
        } else if (this.state.page === 'complete') {
            todo = this.state.todos.filter(todo => todo.completed)
        }
        return (
            <div className="container">
                <AddTodo addTodo={this.addTodo}/>
                <div className="listContainer">
                    <div className="buttonContainer">
                        <span className='count'>{this.state.todos.filter(todo=>!todo.completed).length} : todos left</span>
                        <button className="page" onClick={()=>this.updatePage("all")}>All</button>
                        <button className="page" onClick={()=>this.updatePage("active")}>Active</button>
                        <button className="page" onClick={()=>this.updatePage("complete")}>Completed</button>
                    </div> 
                    {todo.map(todo=>(
                    <TodoItem 
                        todo={todo} 
                        id = {todo.id}
                        key={todo.id} 
                        markComplete={this.markComplete} 
                        addTodo={this.addTodo} 
                        delTodo={this.delTodo}/>
                    ))}

                </div>
            </div>
        )
    }
}
export default App;