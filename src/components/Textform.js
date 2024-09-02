import React, {useState}from 'react'

// const [text, setText] = useState('Enter text here');


export default function Textform(props) {
    const handleUpClick= ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handledonChange= (event)=>{
        console.log("on change ");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    console.log(useState('Enter text here'))
  return (
    <div>
  <h1>Enter the text to analyze below </h1>
<div className="mb-3">
<textarea className="form-control" value= {text} onChange={(handledonChange)} id="mybox" rows="10"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}> convert to uppearcase</button>

    </div>
  )
}
