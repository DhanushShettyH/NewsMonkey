import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    // we use this because our initial props here is null so by useing this first check if its null it not check further if its true it check next and return means if props.alert is null it return nothing if props.alert not null it return  
    // by the abow logic if props.alert is null it return nothing. if its not null than it return component
    <div style={{height:'10px'}}>
       {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}

</div>}
    </div>
  )
}

export default Alert
