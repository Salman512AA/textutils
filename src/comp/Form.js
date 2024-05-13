import React,{useState} from 'react'

function Form({ty,mode,showAlert}) {
  const [text,setText]=useState("ENTER TEXT HERE")
  const Onsh=(event)=>{
    setText(event.target.value)
  }
  const Upcase=()=>{
    let txt=text.toUpperCase();
    setText(txt);
    showAlert(" convert to uppercase","success")

  }
  const Lowcase=()=>{
    let txt=text.toLowerCase();
    setText(txt);
    showAlert(" convert to lowercase","success")

  }
  const Inverse=()=>{
    let reverseText=''
    for(let i=text.length-1;i>=0;i--){
      reverseText += text[i];
    }
    setText(reverseText)
    showAlert(" text inversed","success")

  }
  const Clear=()=>{
    setText("")
  }
  const Copy=()=>{
    let a=document.getElementById("box")
    a.select();
    window.navigator.clipboard.writeText(text);
    showAlert(" copy to clipboard","success")

  }
 
  


  return (
   <>
   {/*  backgroundColor:  mode === 'dark' ? '#333333' : 'white',
    color: mode === 'dark' ? 'white' : 'black' */}
    <div className='container my-4' style={{  backgroundColor:  mode === 'dark' ? '#333333' : 'white',
    color: mode === 'dark' ? 'white' : 'black'}}>
      <h1>{ty}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={Onsh} style={{  backgroundColor:  mode === 'dark' ? '#333333' : 'white',
    color: mode === 'dark' ? 'white' : 'black'}}  id="box" rows="8"></textarea>
      </div>
      <div className="d-grid gap-2  justify-between d-md-block">
         <button className="btn btn-primary mx-2 mb-4" onClick={Upcase}>Convert To UpperCase</button>
         <button className="btn btn-primary mx-2 mb-4" onClick={Lowcase}>Convert To LowerCase</button>
         <button className="btn btn-primary mx-2 mb-4" onClick={Inverse}>Inverse The Text</button>
         <button className="btn btn-primary mx-2 mb-4" onClick={Clear}>Clear The Text</button>
         <button className="btn btn-primary mx-2 mb-4" onClick={Copy}>Copy Text</button>

      </div>
    </div>
    <div className="container my-3"style={{color: mode === 'dark' ? 'white': 'black'}}>
       <h2>Your text summary</h2>
       <p> {text.length===0?0:text.split(" ").length} words {text.length} charachters</p>
       <p> {0.008*text.split(" ").length} Minitue Read </p>
       <h2>PREVIEW</h2>
       <p>{text.length>0? text:"Enter something in Text Box above to preview it Here"}</p>
    </div>
    <div className="container">

    </div>
    </>   
  )
}

export default Form