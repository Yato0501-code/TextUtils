import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpCLick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  const handleLoCLick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }

  const handleClearCLick = ()=>{
    setText('');
    props.showAlert("Cleared text","success");
  }

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces","success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const[text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpCLick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoCLick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearCLick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{ return element.length!== 0 }).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something to above preview it here'}</p>
    </div>
    </>
  )
}
