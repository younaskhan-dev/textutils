import React from 'react'

export default function Alert(props) {
     const capitalize =(word)=>{
             if (!word) return "";   
            const lower =word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1)
        }
    return (
        <div style={{height:50+"px"}}>
        {props.Alert&& (<div>
            <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.Alert.type) }</strong> {props.Alert.msg}

            </div>

        </div>)}
        </div>
    )
}
