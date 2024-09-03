import React, {useState}from 'react'

// const [text, setText] = useState('Enter text here');


export default function Textform(props) {
    const handleUpClick= ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick= ()=>{
        // console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleclearClick= ()=>{
        // console.log("clear was clicked" + text);
        let newText = '';
        setText(newText)
    }

    const handledonChange= (event)=>{
        console.log("on change ");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    console.log(useState('Enter text here'))
     const word = text.trim().split(/\s+/);
     const wordcount = word.filter(word => word!=='').length
  return ( 
    <>
    <div className='container'>
  <h1>Enter the text to analyze below </h1>
<div className="mb-3">
<textarea className="form-control" value= {text} onChange={(handledonChange)} placeholder='Enter text here'id="mybox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}> convert to uppearcase</button>
<button className="btn btn-primary" onClick={handleloClick}> convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleclearClick}> clear text</button>
    </div>
    <div className='container my-2'>
        <h1> your text sumary </h1>
        <p> {text.trim().split("").length} characters and {wordcount} word</p>
        <p> {0.008 * text.split("").length} minutes read</p>
        <h2> Preview</h2>
        <p> {text}</p>
    </div>
    </>
  )
}
