class AnchorLink extends React.Component {

	state = {
		link_counter: 0
	};

	handleClick = (e) => {

		e.preventDefault();

		console.log(e.type + " " + this.state.link_counter);

		console.log("native event: " + e.nativeEvent);

		this.setState(function(prevState, props) {
			return {
				link_counter: prevState.link_counter + 1
			}
		});
	};

	render() {
		return (
			<div>
				<div className="box">
					<a href="http://www.skillsoft.com" target="_blank"
						onClick={this.handleClick}>
						Click me
					</a>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<AnchorLink />,
	document.getElementById("outer"));

