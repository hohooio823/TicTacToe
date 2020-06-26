import React from 'react'

const Info = (props)=>{
    props = props.stateProps
    const {red,blue,counter1,counter2,Player1,Player2} = props;
    return(
        <div className='row info d-flex'>
        <div className='col-4 col-sm-4 ml-4 ml-sm-3 ml-md-4 col-lg-2 ml-lg-2 ml-xl-3 ' style={{color:red}}>{Player1}</div>
        <div className='col-3 col-lg-1'><span style={{color:red}}>{counter1}</span> : <span style={{color:blue}}>{counter2}</span></div>
        <div className='col-4 col-sm-3 col-lg-2' style={{color:blue}}>{Player2}</div>
      </div>
    )
}
export default Info