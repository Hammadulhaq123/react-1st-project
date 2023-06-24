import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
//console.log("button was clicked"+text)
let newText=text.toUpperCase();
setText(newText)
props.showAlert("converted to uppercase","success")
    }
    const handlesUpClick=()=>{
        //console.log("button was clicked"+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success")

            }
            const clearHandle=()=>{
                //console.log("button was clicked"+text)
                let newText=(' ')
                setText(newText)
                    }
                    const removeExtraSpaces=()=>{
                        let newText=text.split(/[ ]+/)
                    setText(newText.join(' '))
                    props.showAlert("remove extra spaces","success")

                    }
                    const CopyText=()=>{
                        let text=document.getElementById("myBox")
                        text.select()
                        text.setSelectionRange(0,9999)
                        navigator.clipboard.writeText(text.value)
                    }


    const handleOnChange=(event)=>{
        //console.log("on change")
       setText(event.target.value)
            }
    const[text,setText]=useState('Enter text here')
  return (
   <>
    <h1  style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className='container'>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'light'}} id="myBox" rows="9"></textarea>
</div>
<button type="button"  className="btn btn-primary  mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button type="button" className="btn btn-secondary  mx-2" onClick={handlesUpClick}>Convert to lowercase</button>
<button type="button" className="btn btn-secondary  mx-2" onClick={clearHandle}>Clear</button>
<button type="button" className="btn btn-secondary  mx-2" onClick={removeExtraSpaces}>remove extra spaces</button>
<button type="button" className="btn btn-secondary  mx-2" onClick={CopyText}>Copy Text</button>


    </div>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
       <p>{text.split(" ").length} and characters {text.length}</p>
       <p>{0.08* text.split(" ").length}</p>
       <h2>preview</h2>
       <p>{text.length>0?text:"enter your text above to preview here "}</p>
    </div>


    </>
  )
}
