import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked");
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success")
  }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const handleInverseClick =()=>{
      let newText = "";
      for(let i=text.length-1;i>=0;i--){
        newText+=text[i];
        setText(newText);
      }
    }
    const speak = ()=>{
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
  }
  const stopSpeak = ()=>{
    window.speechSynthesis.cancel();
}
  const removeSpaces = ()=>{
    let newText = text.trim().replace(/\s+/g,'');
    setText(newText);
}
    const handleReClick = ()=>{
      setText("");
  }
    const [text,setText] = useState('');
    // text = 'new text'; wrong way
    // setText("New text"); correct way
  return (
    <div style={{color: props.mode==='light'?'black':'white'}}>
        <div className='container' >
            <h1 className="my-4">{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#172943',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Inverse Text</button>
            <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
            <button className="btn btn-primary mx-1" onClick={stopSpeak}>Stop Speaking</button>
            <button className="btn btn-primary mx-1" onClick={removeSpaces}>Remove Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleReClick}>Clear Text</button>
        </div>
        <div className='container my-4'>
          <h2>Your Text Summary</h2>
          <p>{text.trim()===""?0:text.match(/\S+/g).length} words,{text.replace(/\s+/g,"").length} characters</p>
          <p>{0.08 * (text.trim()===""?0:text.match(/\S+/g).length)} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Something in the textbox above to preview it"}</p>
        </div>

    </div>
  )
}

