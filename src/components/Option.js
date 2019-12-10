import React from 'react';

const Option = (props) => {
    const handleClick = () => {
      props.handleDeleteOption(props.optionText);
    }
    return (
      <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button onClick={handleClick} className="button button--link">Remove</button>
      </div>
    )
  }

export default Option;