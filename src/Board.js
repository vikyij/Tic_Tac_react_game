import React from 'react';
import Square from './Square';

// Create Functional Component. 
const Board = (props) => {
  return (
    <>
    <div className="board">
      <Square handleClick={props.handleClick} value={props.value} />
      <Square handleClick={props.handleClick} value={props.value} />
      <Square handleClick={props.handleClick} value={props.value} />
    </div>

    <div className="board">
      <Square handleClick={props.handleClick} value={props.value} />
      <Square handleClick={props.handleClick} value={props.value} />
      <Square handleClick={props.handleClick} value={props.value} />
    </div>

    <div className="board">
      <Square handleClick={props.handleClick} value={props.value} />
      <Square handleClick={props.handleClick} value={props.value} />
      <Square handleClick={props.handleClick} value={props.value} />
    </div> 
    </>
  )
}

// Export Calculator Title. 
export default Board; 