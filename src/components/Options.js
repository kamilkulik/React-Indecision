import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      {props.options.length > 0 && <button 
        className="button button--link"
        onClick={props.handleDelete}
        >
        Remove All
        </button>}
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
    {props.options.map((option, index) => {
      return (
        <div key={option}>
          <Option 
            count={index + 1}
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
            />
        </div>
      )
    })}
  </div>
)

  export default Options;