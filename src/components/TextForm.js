import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState(''); // State where text = var & setText = func
    // text = "jisdufhui"; // wrong way to define
    // setText("jisdufhui"); // right way to define

    const handleUpClick = () =>{
        // console.log("uppercase button clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Uppercase", "success");
    }
    const handleClearClick = () =>{
        // console.log("uppercase button clicked");
        let newText = ""
        setText(newText);
        props.showAlert("Text is Cleared", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("on change button clicked");
        setText(event.target.value); // will set new text added to the textArea 
    }

    const handleLowClick = () =>{
         let newLow = text.toLowerCase();
         setText(newLow);
         props.showAlert("Text is converted to LowerCase", "success");
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text is Copied to clipboard", "success");
    }

    return (
        <>
            <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter the text here'  id="myBox" style={{backgroundColor : props.mode==='dark'?'#032749':'white',color : props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="10"></textarea>
                </div>
                <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-4" style={{color : props.mode==='dark'?'white':'black'}}>
                <h2>Your word summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Miniutes are required to read this text</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the Text above in Text area to preview it here"}</p>
            </div>
        </>
    )
}
