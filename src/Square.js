import React from 'react'; 


// Functional Component. 
const Square = (props) => { 
return ( 
  <div>
	<input type = 'button' value = {props.value} className="square" onClick = {props.handleClick} /> 
  </div>  
) 
} 

// Export Output Screen. 
export default Square; 
