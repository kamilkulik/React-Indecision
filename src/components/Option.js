import React from 'react';

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

export default Option;