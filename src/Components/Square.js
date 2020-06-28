import React,{useState} from 'react'

const Square = (props)=>{
    props = props.stateProps
    const [square,setSquare] = useState([['','',''],['','',''],['','','']]);
    const [winState,setWin] = useState('');
    const [hideWinner,setHideWinner]=useState('')
    const {playRoleState,setPlayRole,autoPlayer,Player1,Player2,sign,setSign,counter1,counter2,setCounter1,setCounter2,red,blue} = props; 
    let playRole =playRoleState;
    let winner;
    let counter = 0;

    const role = ()=>{
        if(playRole===Player1){
          playRole = Player2
          setPlayRole(playRole)
        }else{
          playRole = Player1
          setPlayRole(playRole)
        }
      }
    const runAutoPlayer = (key,keyChild)=>{
      if(autoPlayer===true){
        if(square[0].filter(x => x === '').length+square[1].filter(x => x === '').length+square[2].filter(x => x === '').length===0){
            winner='null'};
        let tempsquare = square;
        let tempSign;
        const getRandomInt = (min,max)=>{
          min = Math.ceil(0);
          max = Math.floor(3);
          key=Math.floor(Math.random() * (max - min)) + min
          keyChild=Math.floor(Math.random() * (max - min)) + min
          if(tempsquare[key][keyChild]===''){
            return [key,keyChild]}
          else{getRandomInt();}
        }
        if(playRole!==Player2){
          role()
          if(sign!=='o' ){
            tempSign = 'o'
          }else{
            tempSign = 'x'
          }
          if(winner!=='null'){
            let random = getRandomInt();
            if(random===undefined){
              random = getRandomInt();
            }else{
              [key,keyChild]= random;
            }
          }
          tempsquare[key][keyChild]=tempSign
          win()
          if(winner==='win'){
            role()
          }
          setSign('x')
        }
      }
    }
    const counterIncrement = ()=>{
      counter += 1;
      if(playRole===Player1){
          setCounter1(counter1+1);
      }
      if(playRole===Player2){
          setCounter2(counter2+1)
      }
        setTimeout(()=>{
          newGame()
          role()
        },500)
    
      }
      const newGame = ()=>{
        setSign('x')
        setSquare([['','',''],['','',''],['','','']])
      }
        const onClickHandler = (keyChild,key) => {
          winner='';
          setHideWinner('d-none')
          role()
            if(sign==='x'){
              setSign('o')
            }else{
              setSign('x')
            }
          let tempsquare = square;
          tempsquare[key][keyChild]=sign;
          setSquare([...tempsquare])
          win();
          runAutoPlayer(key,keyChild)
          
      }
      const win = ()=>{
        if(winner!=='win'){
          if(square[0][0]===square[0][1] && square[0][1]===square[0][2] && square[0][0]!==''){
            winner='win'
          }else if(square[1][0]===square[1][1] && square[1][1]===square[1][2] && square[1][2]!==''){
            winner='win'
          }else if(square[2][0]===square[2][1] && square[2][1]===square[2][2] && square[2][0]!==''){
            winner='win'
          }else if(square[0][0]===square[1][0] && square[1][0]===square[2][0] && square[0][0]!==''){
            winner='win'
          }else if(square[0][1]===square[1][1] && square[1][1]===square[2][1] && square[0][1]!==''){
            winner='win'
          }else if(square[0][2]===square[1][2] && square[1][2]===square[2][2] && square[2][2]!==''){
            winner='win'
          }else if(square[1][1]===square[2][2] && square[2][2]===square[0][0] && square[0][0]!==''){
            winner='win'
          }else if(square[0][2]===square[1][1] && square[1][1]===square[2][0] && square[0][2]!==''){
            winner='win'
          }else{
            if(square[0].includes('')===square[1].includes('') && square[1].includes('')===square[2].includes('') && square[1].includes('')===false){
              winner='null'};
          }
        }
        if(winner==='win'){
          if(counter !== 1 ){
            counterIncrement()
          }
          setWin(winner)
        }
        if(winner==='null'){
          newGame()
          setWin(winner)
        }
        if(winner!==''){
          setHideWinner('')
        }
      }
      const Win= ()=>{
        if(winState==='win'){
          return(
            <div className={'alert alert-danger w-50  mx-auto mt-2 ' + hideWinner} role="alert">
              {playRole===Player2?Player1:Player2} Won
            </div>
          )
        }
        if(winState==='null'){
          return(
            <div className={'alert alert-danger w-50  mx-auto mt-2 ' + hideWinner} role="alert">
               Null ( None of you won )
            </div>
          )
        }
        return null
        
      }
     return(
         <>
         <Win />
         <div className='row mt-1 mb-3' ><button onClick={newGame}>New game</button></div>
        <div className='row d-grid justify-center'>
            {square.map((row,key)=><div className='w-100 d-flex' key={key}>{row.map((column,keyChild)=>
              <div className='column' onClick={onClickHandler.bind(this,keyChild,key)} style={{pointerEvents:square[key][keyChild]!==''?'none':'auto',color:playRole===Player1?red:blue}} key={keyChild}>{square[key][keyChild]}</div>
            )}</div>)}
          </div>
        </>
    )
}
export default Square