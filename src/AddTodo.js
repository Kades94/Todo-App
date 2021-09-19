import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css'

export class AddTodo extends Component {
	state={
		title:'',
		id:'',
		completed:false
	}

	onChange = (e) => this.setState({[e.target.name]:e.target.value});
	
	onSubmit = (e) =>{
		e.preventDefault();
		if(this.state.title !== ''){
			this.setState({
				id:shortid.generate().toString(),
				complete:false
			});

			this.props.addTodo({
				title:this.state.title,
				id:this.state.id,
				completed:this.state.completed
			});
		};
		this.setState({title:""});
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input 
				className='todoInput'
				type="text"
				name="title"
				placeholder="Add a Todo..."
				value={this.state.title}
				onChange={this.onChange}
				/>
			</form>
		);
	}
}


 export default AddTodo;