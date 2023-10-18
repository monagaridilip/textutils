import React, { useState } from 'react';




export default function TextForms(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        if(text){
        props.showAlert("Uppercase is enabled","success")
        }
    }
    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        if(text){
        props.showAlert("LowerCase is enabled","success")
                }
    }
    
    const reset = () => {
         alert('are you okay to reset')
       
        let newText = ''
        setText(newText)
        
        props.showAlert("Reset is done!","danger")
    }
    const capitalize = () => {
        const titleCase = text.toLowerCase().split(' ').map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
    
       setText(titleCase);
       if(text){
       props.showAlert("Captilize is enabled","success")
       }
    }
    const handleCopy= () =>{
        // let text = document.getElementById("exampleFormControlTextarea1");
        // text.select();
        navigator.clipboard.writeText(text);
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied ","Success")
        

    }
    let myStyle = {
       color:props.mode==='dark'?'white':'black',
       background:props.mode==='dark'?'black':'white'
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={myStyle} >
                <div className="mb-3">
                    <h1 className='my-3'>{props.heading}</h1>
                    <textarea className="form-control" style={myStyle} id="exampleFormControlTextarea1" rows="8" value={text}  onChange={handleOnChange}></textarea>
                    <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUppercase}>Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-dark my-3 mx-3" onClick={handleLowercase}>Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-dark my-3 mx-3" onClick={capitalize}>Titlecase</button>
                    <button disabled={text.length===0} className="btn btn-danger my-3 mx-3" onClick={handleCopy}>Copy</button>
                    
                    <button disabled={text.length===0} className="btn btn-danger my-3 mx-3" onClick={reset}>Reset</button>

                </div>
            </div>
            <div className="container">
                <h2>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</h2>
                <h2>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} time to read the text</h2>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview! Enter any Text'}</p>
            </div>
                   
             
        </>
    )
}
