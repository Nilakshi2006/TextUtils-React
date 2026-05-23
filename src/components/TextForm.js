import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Convert to uppercase was clicked"+text)  //shows in inspect tab +text is the current state of text
 const newText=text.toUpperCase() //to convert text to uppercase
 setText(newText)
    // setText("You have clicked on Convert to Uppercase")//coreect way to chnage the state
  }
    
  const handleOnChange=(event)=>{
    // console.log("on Change was clicked")
    setText(event.target.value) //event.target.value is the text which is being typed in textarea
  }
    const [text, setText] = useState('Enter text Here')  
    //copied from react dev tools state->text setState->setText initial state ->'Enter text Here'
    // When use count it is updated evrywhere it is present
    
    return (
    <>
    <div>
    
        <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
</div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    </>
  )

}


