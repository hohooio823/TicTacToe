import React,{useState} from 'react'

const Square = (props)=>{
    props = props.stateProps
    const [square,setSquare] = useState([['','',''],['','',''],['','','']]);
    const {playRoleState,setPlayRole,autoPlayer,online,secondPlayer,Player1,Player2,sign,setSign,counter1,counter2,setCounter1,setCounter2,red,blue} = props; 
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
          let random = getRandomInt();
          if(random===undefined){
            random = getRandomInt();
          }else{
            [key,keyChild]= random;
          }
          tempsquare[key][keyChild]=tempSign
          setTimeout(()=>setSquare(tempsquare),2000)
          win()
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
      if(autoPlayer===false){
        setTimeout(()=>{
          setSquare([['','',''],['','',''],['','','']]);
          role()
        },500)
      }
      }
      const newGame = ()=>{
        setSquare([['','',''],['','',''],['','','']])
      }
        const onClickHandler = (keyChild,key) => {
          role()
            if(sign==='x'){
              setSign('o')
            }else{
              setSign('x')
            }
          console.log(sign)
          let tempsquare = square;
          tempsquare[key][keyChild]=sign;
          setSquare([...tempsquare])
          win();
          runAutoPlayer(key,keyChild)
          
      }
      const win = ()=>{
        let result;
        if(winner!='win'){
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
        }
      }
     return(
         <>
         <div className='row mb-5' ><button onClick={newGame}>new Game</button></div>
        <div className='row d-grid justify-center'>
            {square.map((row,key)=><div className='w-100 d-flex' key={key}>{row.map((column,keyChild)=>
              <div className='column' onClick={onClickHandler.bind(this,keyChild,key)} style={{pointerEvents:square[key][keyChild]!==''?'none':'auto',color:playRole===Player1?red:blue}} key={keyChild}>{square[key][keyChild]}</div>
            )}</div>)}
          </div>
        </>
    )
}
export default Square