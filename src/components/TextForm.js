import React, { useState } from 'react'

export default function TextForm(props) {
    const eventuphandle = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert('Text has been converted to uppercase', 'success :');
    }
    const eventlohandle = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
         props.showalert('Text has been converted to lowercase', 'success :');
    }
    const eventitalichandle = () => { 
         setText(`_${text}_`);
         //  console.log("to italic")
          props.showalert('Text has been added the underscores','success :');
    }
     const eventclearhandle = () => { 
        let new_text = ("")
        setText(new_text);
        props.showalert('Text has been clear','success :');
    }
    const changeevent = (event) => {

        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <div>
            <div className="container mb-3 " style={{color: props.mode === "dark" ? "white" : "black"}}>
                <h2 className='mt-3'>{props.heading} </h2>
                <textarea className="form-control mt-4 mb-3" style={{backgroundColor :props.mode === "light" ? "white" : "#142b3d" , color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={changeevent} id="box1" rows="8"></textarea>
                <button className="btn btn-primary btn-lg " onClick={eventuphandle}>convert to UpperCase</button>
                <button className="btn btn-primary btn-lg mx-2 my-2" onClick={eventlohandle}>convert to lowerCase</button>
                <button className="btn btn-primary btn-lg mx-2 my-2" onClick={eventitalichandle}>underscores the words</button>
                <button className="btn btn-primary btn-lg mx-2 my-2" onClick={eventclearhandle}>clear text</button>
            </div>
            <div className='container' style={{color: props.mode === "dark" ? "white" : "black"}}>
                <h2>Your text summery</h2>
                <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>

                <p>{(0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length).toFixed(2)} minutes to read</p>
                <h3>preview</h3>
                <span>{text.length>0 ?text:"No text preview here"}</span>
            </div>
        </div>
    )
}
