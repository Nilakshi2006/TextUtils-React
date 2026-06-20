import React from 'react'

function Alert(props) {
    const Capatilize=()=>{
        const lower=props.alert.type.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>   {/* this is to prevent the alert from shifting the content of the page when it appears and disappears, we can also use margin-bottom instead of height */}
   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{Capatilize(props.alert.type)}</strong> {props.alert.msg}
</div>}
</div>
  )
}

export default Alert
