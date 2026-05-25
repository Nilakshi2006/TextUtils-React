import React,{useState} from 'react'

export default function TextForm(props) {


  const handleUpClick=()=>{
    // console.log("Convert to uppercase was clicked"+text)  //shows in inspect tab +text is the current state of text
 const newText=text.toUpperCase() //to convert text to uppercase
 setText(newText)
    // setText("You have clicked on Convert to Uppercase")//coreect way to chnage the state
  }

  const handleLoClick=()=>{
const newText=text.toLowerCase() //to convert text to lowercase
 setText(newText)
  }


    const handleClearClick=()=>{
      const newText='' //to clear the text
      setText(newText)
    }

    const handleRemoveExtraSpacesClick=()=>{
      const newText=text.split(/[ ]+/) //to remove extra spaces
setText(newText.join(" "))
    }

    const handleReverseClick=()=>{
      const newText=text.split("").reverse().join("") //to reverse the text
      setText(newText)
    }

    const handleRemoveDuplicateWordsClick=()=>{
      const newText=text.split(" ") //to split the text into words
      const uniqueWords=[...new Set(newText)] //to remove duplicate words
      setText(uniqueWords.join(" "))
    }

    
  const handleOnChange=(event)=>{
    // console.log("on Change was clicked")
    setText(event.target.value) //event.target.value is the text which is being typed in textarea
  }
    const [text, setText] = useState('')  
    //copied from react dev tools state->text setState->setText initial state ->'Enter text Here'
    // When use count it is updated evrywhere it is present
    
    return (
    <>
    <div className="container">
    
        <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
</div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
<button className="btn btn-primary mx-2" onClick={handleRemoveDuplicateWordsClick}>Remove Duplicate Words</button>
    </div>

    <div className="container">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      {text}
    </div>
    </>
  )

}


