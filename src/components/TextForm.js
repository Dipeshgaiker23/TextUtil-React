import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState(''); // State where text = var & setText = func
    // text = "jisdufhui"; // wrong way to define
    // setText("jisdufhui"); // right way to define

    const handleUpClick = () =>{
        // console.log("uppercase button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        // console.log("uppercase button clicked");
        let newText = ""
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("on change button clicked");
        setText(event.target.value); // will set new text added to the textArea 
    }

    const handleLowClick = () =>{
         let newLow = text.toLowerCase();
         setText(newLow);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter the text here'  id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-4">
                <h2>Your word summary</h2>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Miniutes are required to read this text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
