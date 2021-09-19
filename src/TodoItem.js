import React, {Component} from 'react';
import './App.css';

export class TodoItem extends Component {
	getStyle = () =>{
		return{
			fontSize:'1.2rem',
			color:'black',
			padding:'20px',
			borderBottom:'3px solid',
			margin:'0 auto',
			fontWeight:'bold',
			textDecoration: this.props.todo.completed ? 'line-through':'none',
			borderImage:'linear-gradient(to right, #3494e6, #ec6ead) 1'
		}
	}

	render() {
		const {id,title } = this.props.todo;

		return (
					<div key={id} style ={this.getStyle()}>
						<input type="checkbox" checked = {this.props.todo.completed} onChange={this.props.markComplete.bind
						(this,id)}  />{' '}{title}
						<button style={btnStyle} onClick={this.props.delTodo.bind
						(this,id)}>x</button>
					</div>
		)
	}
}

const btnStyle = {
	color:'#ff0800',
	fontSize:'25px',
	background:'transparent',
	border:'none',
	cursor:'pointer',
	float:'right',
	marginLeft:'auto'
}

export default TodoItem