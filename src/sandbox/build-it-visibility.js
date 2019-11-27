class VisibilityApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            toggle: false
        }
    }
    handleToggle() {
        this.setState(prevState => {
            return {
                toggle: !prevState.toggle
            }
        });
    }
    render() {
        const title = 'Visibility Toggle App';
        const label = this.state.toggle ? 'Hide details' : 'Show details';
        return (
            <div>
                <Header title={title} />
                <Button action={this.handleToggle} label={label} />
                {this.state.toggle && <p>Hey! Here are some details that you asked for!</p>}
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.action}>{this.props.label}</button>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));