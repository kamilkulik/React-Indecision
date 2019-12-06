import React from 'react';

export default class AddOption extends React.Component {
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