import React from 'react'

const Dialog = (props)=>{
    props = props.stateProps
    const {dialogPage,setDialogPage,setPlayer1,setPlayer2,autoPlayer,setGamePage} = props;
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
            <h5 className='mb-pl'>Player 2</h5>
            <div className='row mb-2'><input placeholder='Name' onChange={onChangePlayer2} /></div>
            </>
        )
    }
    return(
        <div className={dialogPage}>
        <h5 className='mb-pl' >Player 1</h5>
        <div className='row mb-2'><input placeholder='Name' onChange={onChangePlayer1} /></div>
        {autoPlayer?null:player2()}
        <div className='row mb-1'><button onClick={play} >Play</button></div>
        </div>
    )
}
export default Dialog