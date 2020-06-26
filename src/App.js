import React, {useState} from 'react'
import Info from './Components/Info'
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
  const [modal,setModal] = useState('d-block')
  const [gamePage,setGamePage] = useState('d-none')
  const red = '#d8345f';
  const blue = 'rgb(0, 91, 177)';
  
  const props = {playRoleState,setPlayRole,autoPlayer,setGamePage,setAutoPlayer,Player1,setPlayer1,Player2,setPlayer2,sign,setSign,counter1,counter2,setCounter1,setCounter2,red,blue}
  const singlePlayerHandler = ()=>{
    setAutoPlayer(true)
    setModal('hidden')
    setGamePage('')
  }
  const offline2PlayersHandler = ()=>{
    setModal('hidden')
    setGamePage('')
  }
  return (
      <div className="App">
        <div className='container'>
        <div className={'modal '+modal} tabindex="-1" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div className='container'>
                    <div className='row mb-1'><button onClick={singlePlayerHandler}>Singleplayer</button></div>
                    <div className='row mb-1'><button onClick={offline2PlayersHandler}>Multiplayer </button></div>
                  </div>
                </div>
              </div>
            </div>
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
