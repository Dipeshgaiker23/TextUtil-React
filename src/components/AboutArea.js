import React, { useState } from 'react'

export default function AboutArea(props) {

    // const [myStyle, setMyStyle] =  useState(
    // {
    //     color : "#2b2b2b",
    //     backgroundColor : "white"
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#032749':'white'
    }

    return (
        <div classNameNameName='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className='my-3 mx-3 '>About us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Analyse your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This Website gives you a way to analyse your text</strong>such as coverting Text from LowerCase to UpperCase and has a inbuild Dark Mode for using it over night
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>The site requires no Server side scripting so it is very light weight</strong> You can use any browser such as Chrome, Firefox, Edge, etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Free to Use
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>The site is absolutely Free of cost to use</strong> It comes under development area so we decided to keep it free.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
