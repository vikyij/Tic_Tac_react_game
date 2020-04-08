import React from 'react'; 
  
class Tictac extends React.Component { 

    constructor(props) { 
        super(props); 
      
        // set our default state 
        this.state = {           
          winner: undefined
        } 
        this.gameState = {
          count: 0,
          board: Array(9).fill(''),
          turn: 'X',
          gameEnded: false,
        }
        this.handleClick = this.handleClick.bind(this); 
      } 
      handleClick(e){ 
        if(this.gameState.gameEnded) return;
        if(this.gameState.board[e.target.dataset.square] === '') {
         this.gameState.board[e.target.dataset.square] = this.gameState.turn
        e.target.innerText = this.gameState.turn;
        
          this.gameState.turn= this.gameState.turn === 'X' ? 'O' : 'X';
    
         this.gameState.count++;
      }

        let result = this.checkWinner();

        if(result === 'X') {
          this.gameState.gameEnded = true;
          this.setState({
            winner: 'X wins!'
          });  console.log(this.state.gameEnded)

        } else if(result === 'O') {
          this.gameState.gameEnded = true;
            this.setState({
              winner: 'O wins!'
            })
          }
           else if(result === 'draw') {
            this.gameState.gameEnded = true;
            this.setState({              
              winner: 'its a draw'
            })
          }

           console.log(this.gameState.gameEnded)
        
     } 


   checkWinner() {
     let winMoves = [[0,3,6], [1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]]
     let board = this.gameState.board;
     for(let i = 0; i < winMoves.length; i++) {
        if(board[winMoves[i][0]] === board[winMoves[i][1]] && board[winMoves[i][1]] === board[winMoves[i][2]]) {
          return board[winMoves[i][0]];
        }
        console.log(this.gameState.count);
        if(this.gameState.count === 9 && board[winMoves[i][0]]) {
          return 'draw';
        }
     }
    }


      
    render() 
    { 
    return ( 
       <div className='tictac'>
         <p className= 'tictac'>{this.gameState.turn} turn</p>
         <div className='board' onClick = {(e) => this.handleClick(e)}>
           <div className='square' data-square='0'></div>
           <div className='square' data-square='1'></div>
           <div className='square' data-square='2'></div>
           <div className='square' data-square='3'></div>
           <div className='square' data-square='4'></div>
           <div className='square' data-square='5'></div>
           <div className='square' data-square='6'></div>
           <div className='square' data-square='7'></div>
           <div className='square' data-square='8'></div>
        </div>
        <div>{this.state.winner}</div>
       </div>

    ); 
  } 
} 
  
export default Tictac; 
