class EmployeeList extends React.Component {

	constructor(props) {
		super(props);

		console.log("1. constructor", props.initialNames);

		this.state = {
			names: props.initialNames
		}
	}

	deleteRandom = () => {
		var index = Math.floor(Math.random() * this.state.names.length);

		this.setState(function(prevState) {
			var names = prevState.names.concat();

			names.splice(index, 1);

			return {
				names: names
			}
		});
	};

	render() {
		var index = 0;
		return (
			<div>
				{this.state.names.map(
					(name) => <Employee key={index++}
										name={name}
										deleteRandom={this.deleteRandom} />
				)}

				<button className="button" onClick={this.deleteRandom}>
					Delete random employee
				</button>
			</div>
		);
	}
}

class Employee extends React.Component {

	constructor(props) {
		super(props);
		console.log("1. constructor: " + this.props.name);
	}

	render() {
		console.log("2. render: " + this.props.name);
		return (
			<div>
				<div className="employee">
					{this.props.name}
				</div>
			</div>
		);
	}

	componentDidMount() {
		console.log("3. componentDidMount: " + this.props.name);
	}

	componentWillUnmount() {
		console.log("4. componentDidUnMount: " + this.props.name);
	}
}

ReactDOM.render(<EmployeeList initialNames={['Ronald', 'Donald', 'Elise', 'Kim']} />,
	document.getElementById("outer"));