import React from 'react';
import Option from './Option';

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

  export default Options;