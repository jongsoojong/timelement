import React, { Component } from 'react';

class DiceRoller extends Component{
	constructor (props){
		super(props);
		this.state = {rollResult : 0}
	}
	d20 () {
		var d20Result = Math.floor(Math.random() * 20+1);
		this.setState({rollResult : d20Result});
	};
	d12 () {
		var d12Result = Math.floor(Math.random() * 12+1);
		this.setState({rollResult : d12Result});
	}
	d10 () {
		var d10Result = Math.floor(Math.random() * 10+1);
		this.setState({rollResult : d10Result});
	}
	d8 () {
		var d8Result = Math.floor(Math.random() * 8+1);	
		this.setState({rollResult : d8Result});
	};
	d6() {
		var d6Result = Math.floor(Math.random() * 6+1);
		this.setState({rollResult : d6Result});
	}
	d4() {
		var d4Result = Math.floor(Math.random() * 4+1);
		this.setState({rollResult : d4Result});
	}

	componentDidMount() {

	}
	componentWillUnmount() {

	}
	render() {
		return(
			<div>
			<h1>Le Excellent Dice Roller</h1>
			<p> {this.state.rollResult}</p>
			<button type="button" onClick={this.d20.bind(this)}>D20</button>
			<button type="button" onClick={this.d12.bind(this)}>D12</button>
			<button type="button" onClick={this.d10.bind(this)}>D10</button>
			<button type="button" onClick={this.d8.bind(this)}>D8</button>
			<button type="button" onClick={this.d6.bind(this)}>D6</button>
			<button type="button" onClick={this.d4.bind(this)}>D4</button>
			</div>
			)

	}
}

export default DiceRoller;