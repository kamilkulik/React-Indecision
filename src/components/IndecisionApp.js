import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props)
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.state = {
        options: [],
        selectedOption: undefined
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
      const option = this.state.options[random];
      this.setState(() => ({ selectedOption: option}));
    }
    closeModal() {
      this.setState(() => ({ selectedOption: undefined }));
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
          <div className="container">
            <Action 
              hasOptions={this.state.options.length > 0}
              showPick={this.handlePick}
              />
            <div className="widget">
              <Options 
                options={this.state.options}
                handleDelete={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
              <AddOption addOption={this.handleAddOption}/>
            </div>
          </div>
          <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClose={this.closeModal}
          />
        </div>
      )
    }
  }