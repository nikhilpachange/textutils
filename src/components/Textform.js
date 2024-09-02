import React, {useState}from 'react'

// const [text, setText] = useState('Enter text here');


export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    console.log(useState('Enter text here'))
  return (
    <div>
  <h1>Enter the text to analyze below - {text}</h1>
<div className="mb-3">
<textarea className="form-control" id="mybox" rows="10"></textarea>
</div>
<button className="btn btn-primary"> convert to uppearcase</button>

    </div>
  )
}
