import React from 'react'

export default function About(props) {
    let myStyle = {
      color: props.mode === 'dark' ? 'white' : '#042743',
      backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
      border: '2px solid',
      borderColor: props.mode === 'dark' ? 'white' : '#042743'
    }

  return (
    <div className="about container my-3 mx-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>About TextUtils</h1>
        <p className="my-3">
          TextUtils is a lightweight React application for editing and analyzing text.
          It helps you clean up text, change letter case, remove extra spaces, copy results,
          and quickly see counts for words, characters, and reading time.
        </p>

      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Text Analysis</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils displays useful information about your text, including word count, character count,
        and estimated reading time. This makes it easy to prepare text for essays, posts, and reports.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Text Transformation</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Use the app to convert text between uppercase and lowercase, remove extra spaces,
        and clear the text area. These features help you format and clean text quickly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>App Experience</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        The Navbar contains the theme toggle, and alerts provide feedback when actions are completed.
        TextUtils is built to be simple, fast, and easy to use for everyday text editing tasks.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
