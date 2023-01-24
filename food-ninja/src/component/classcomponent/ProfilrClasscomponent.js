import React, { Component } from 'react';

export class ProfilrClasscomponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	async componentDidMount() {
		//called api
		const data = await fetch('');
		const json = await data.json();
	}
	render() {
		// let { count } = this.state.count;
		return (
			<div>
				<h1>ProfilrClasscomponent</h1>
				<h2>Name:{this.props.name}</h2>
				<p>Count:{this.state.count}</p>
				{/* <button
					onClick={() => {
						this.setState({
							count: this.state.count + 1
						});
					}}
				>
					Count plus
				</button> */}
			</div>
		);
	}
}

export default ProfilrClasscomponent;
