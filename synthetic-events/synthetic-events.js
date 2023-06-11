class Counter extends React.Component {

	state = {
		counter: 0
	};

	incrementCount = (e) => {
		e.preventDefault();

		var increment = 1;
		if (e.shiftKey) {
			increment = 10;
		}
		if (e.altKey) {
			increment = 100;
		}

		this.setState(function(prevState, props) {
			return {
				counter: prevState.counter + increment
			};
		});
	};

	decrementCount = (e) => {
		e.preventDefault();

		var decrement = 1;
		if (e.shiftKey) {
			decrement = 10;
		}
		if (e.altKey) {
			decrement = 100;
		}

		this.setState(function(prevState, props) {
			return {
				counter: prevState.counter - decrement
			}
		})
	}

	render() {
		return (
			<div>
				<div className="box">
					{this.state.counter}
				</div>
				<button className="button"
						onClick={this.incrementCount}>
					+
				</button>
				<button className="button"
						onClick={this.decrementCount}>
					-
				</button>
				<div>
					*Change increment and decrement values using Shift and Alt keys
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Counter />,
	document.getElementById("outer"));