class Number extends React.Component {
	render() {
		return (
			<div className="number">{this.props.number}</div>
		);
	}
}

class EvenNumber extends React.Component {

	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.number % 2 == 0) {
			return true;
		}

		return false;
	}

	render() {
		if (this.props.number > 15) {
			throw Error("The number is greater than 15!");
		}
		return (
			<div className="evennumber">{this.props.number}</div>
		);
	}
}

class StreamingNumbers extends React.Component {
	state = {
		index: 0
	}

	next = () => {
		this.setState(function(prevState) {
			return {
				index: prevState.index + 1
			}
		});
	};

	componentDidCatch(error, info) {
		this.setState({
			index: 0
		})
	}

	render() {
		var nextNumber = this.props.numbers[this.state.index];

		return (
			<div className="box">
				<EvenNumber number={nextNumber} />
				<Number number={nextNumber} />
				<button className="button" onClick={this.next}>
					Get next
				</button>
			</div>
		);
	}
}

StreamingNumbers.defaultProps = {
	numbers: [3, 2, 5, 4, 11, 12, 9, 16,
			13, 14, 12, 20, 19, 23, 26,
			35, 29, 27, 1, 2, 45]
};

ReactDOM.render(<StreamingNumbers />, document.getElementById("outer"));