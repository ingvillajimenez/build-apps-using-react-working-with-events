class StatusBox extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			enabled: true,
			message: 'State is enabled'
		};
		this.showMessage = this.showMessage.bind(this);
	}

	handleClick = (e) => {

		e.preventDefault();

		this.setState(state => ({
			enabled: !state.enabled
		}));
	}

	showMessage() {

		if (this.state.enabled) {
			alert("Are you sure you want to disable this?");

			this.setState({
				message: "State is disabled"
			});
		} else {
			alert("Are you sure you want to enable this?");

			this.setState({
				message: "State is enabled"
			});
		}
	}

	render() {
		return (
			<div>
				<div className="box">
					{this.state.message}
				</div>

				<button className="button"
						onClick={(e) => {
								this.handleClick(e);
								this.showMessage();
							}}>
					{this.state.enabled ? "Disable" : "Enable"}
				</button>
			</div>
		);
	}
}

ReactDOM.render(<StatusBox />, document.getElementById("react-event-toggle"));