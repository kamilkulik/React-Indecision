class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) { // making sure that we set state only when there actually are items in the options array
      this.setState(() => ({ options }));
      }
    } catch (e) {
      // if JSON data invalid do nothing at all.
      
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
  }
  handlePick() {
    const random = Math.floor(Math.random()*this.state.options.length);
    alert(this.state.options[random]);
  }
  handleAddOption(option) {
    if (!option) { // this is going to run if there's an empty string
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  render() {
    const subTitle = 'Put your life in hands of a computer';

    return (
      <div>
        <Header subtitle={subTitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          showPick={this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDelete={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
        <AddOption addOption={this.handleAddOption}/>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1 className='style'>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
};

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.showPick}
        disabled={!props.hasOptions}
        >What should I do?
      </button>
    </div>
  )
};

const Options = (props) => {
  return (
    <div>
      {props.options.length > 0 && <button onClick={props.handleDelete}>Remove All</button>}
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {props.options.map(option => {
        return (
          <div key={option}>
            <Option 
              optionText={option} 
              handleDeleteOption={props.handleDeleteOption}
              />
          </div>
        )
      })}
    </div>
  )
};

const Option = (props) => {
  const handleClick = () => {
    props.handleDeleteOption(props.optionText);
  }
  return (
    <div>
      {props.optionText}
      <button onClick={handleClick}>Remove</button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim(); //trim() removes all leading and trailing spaces without removing spaces between words
    const error = this.props.addOption(option);
    this.setState(() => ( { error } ));
    if (!error) {
      e.target.elements.option.value = ''; // wiping input if no error
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));