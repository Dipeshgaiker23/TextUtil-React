import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter the text here'); // State where text = var & setText = func
    // text = "jisdufhui"; // wrong way to define
    // setText("jisdufhui"); // right way to define

    const handleUpClick = () =>{
        console.log("uppercase button clicked");
        setText("You have clicked on Uppercase button");
    }

    const handleOnChange = (event) =>{
        console.log("on change button clicked");
        setText(event.target.value); // will set new text added to the textArea 
    }

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"  id="mybox" value={text} onChange={handleOnChange} rows="10"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        </>
    )
}
