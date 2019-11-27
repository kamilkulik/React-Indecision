class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'This three']
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  handleAddOption() {
    this.setState(() => {
      return {
        options: options.push(option)
      }
    });
  }
  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <Action hasOptions={this.state.options.length > 0}/>
        <Options 
          options={this.state.options} 
          handleDelete={this.handleDeleteOptions}
          />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button 
          onClick={this.handlePick}
          disabled={!this.props.hasOptions}
          >What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.length > 0 && <button onClick={this.props.handleDelete}>Remove All</button>}
        {this.props.options.map(option => <Option key={option} optionText={option} />)}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim(); //trim() removes all leading and trailing spaces without removing spaces between words
    if (option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));