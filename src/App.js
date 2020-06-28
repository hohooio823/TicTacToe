import React, {useState} from 'react'
import Info from './Components/Info'
import Dialog from './Components/Dialog'
import Square from './Components/Square'
import './App.css'
function App() {
  const [Player1,setPlayer1]= useState('Player 1');
  const [Player2,setPlayer2]= useState('Player 2');
  const[playRoleState,setPlayRole] = useState('');
  const [sign,setSign] = useState('x') ;
  const [counter1,setCounter1] = useState(0);
  const [counter2,setCounter2] = useState(0);
  const [autoPlayer,setAutoPlayer] = useState(false);
  const [mode,setMode] = useState('d-block')
  const [gamePage,setGamePage] = useState('d-none')
  const [dialogPage,setDialogPage] = useState('d-none')
  const red = '#d8345f';
  const blue = 'rgb(0, 91, 177)';
  
  const props = {playRoleState,setPlayRole,autoPlayer,dialogPage,setDialogPage,setGamePage,setAutoPlayer,Player1,setPlayer1,Player2,setPlayer2,sign,setSign,counter1,counter2,setCounter1,setCounter2,red,blue}
  const singlePlayerHandler = ()=>{
    setAutoPlayer(true)
    setMode('d-none')
    //setGamePage('')
    setDialogPage('')
  }
  const offline2PlayersHandler = ()=>{
    setMode('d-none')
    //setGamePage('')
    setDialogPage('')
  }
  return (
      <div className="App h-100 d-flex ">
        <div className='container align-self-center'>
        <Dialog stateProps={props} />
                  <div className={mode}>
                    <h3 className='row mb-2'>Select Mode : </h3>
                    <div className='row mb-1'><button onClick={singlePlayerHandler}>One player</button></div>
                    <div className='row mb-1'><button onClick={offline2PlayersHandler}>Two players </button></div>
        </div>
        <div className={gamePage}>
          <Info stateProps={props} />
          <Square stateProps={props}  />
        </div>
        </div>
      </div>
  );
}
export default App;
