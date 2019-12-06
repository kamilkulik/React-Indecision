import React from 'react';

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

  export default Header;