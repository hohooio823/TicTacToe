import React from 'react'

const Dialog = (props)=>{
    props = props.stateProps
    const {dialogPage,setDialogPage,setPlayer1,setPlayer2,autoPlayer,setGamePage} = props;
    console.log(autoPlayer)
    const play = ()=>{
        setGamePage('')
        setDialogPage('d-none')
    }
    const onChangePlayer1 = (e)=>{
        setPlayer1(e.target.value);
    }
    const onChangePlayer2 = (e)=>{
        setPlayer2(e.target.value);
    }
    const player2 = ()=>{
        return(
            <>
            <div>Player2</div>
            <div className='row mb-1'><input placeholder='Name' onChange={onChangePlayer2} /></div>
            </>
        )
    }
    return(
        <div className={dialogPage}>
        <div>Player1</div>
        <div className='row mb-1'><input placeholder='Name' onChange={onChangePlayer1} /></div>
        {autoPlayer?null:player2()}
        <div className='row mb-1'><button onClick={play} >Play</button></div>
        </div>
    )
}
export default Dialog