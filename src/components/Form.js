import React, { useState } from 'react'

export default function Form(props) {
    const handleonclick = () =>{
        console.log( text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted To uppercase!","Success")
    }
    const handleonclick1 = () =>{
        console.log( text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted To Lowercase!","Success")

    }
    const handleonclick2 = () =>{
        console.log( text);
        let newtext = "";
        setText(newtext)
        props.showAlert("Text Cleared!","Success")
    }
    const handleonclick3 = () =>{
        var copyText = document.getElementById("mybox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied To Clipboard!","Success")
    }
    const handleonclick4 = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra Spaces removed!","Success")
    }
    const handleonchange = (event) =>{
        console.log("On change");
        setText(event.target.value)
    }
    

    const [text,setText] = useState('');
  return (
    <>
        <div style={{color: props.mode==='dark'?'white':'rgb(17 14 38)'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3"  >
                <textarea className="form-control" value={text} onChange={handleonchange}  placeholder="Enter Your Text Here" id="mybox" rows="5" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleonclick} > Convert To uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleonclick1} > Convert To Lowercase</button>
            <button className="btn btn-danger mx-1" onClick={handleonclick2} > Clear Text </button>
            <button className="btn btn-primary mx-1" onClick={handleonclick3} > Copy Text </button>
            <button className="btn btn-primary mx-1" onClick={handleonclick4} > Remove extra space </button>

        </div>
        <div className="container1 my-5"  style={{color: props.mode==='dark'?'white':'rgb(17 14 38)'}} >
        <h1> Your Summary</h1>
            <p>Number of Words: {text.split(" ").length} </p>
            <p>Number Of Characters: {text.length}</p>
            <p>Reading Time: {0.008 * text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>

    </>
  )
}
