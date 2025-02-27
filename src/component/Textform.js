
import React, { useState } from 'react'
// import ColorPicker from './ColorPicker';


function Textform(props) {

  const [disp, setDisplay] = useState({
    display: 'block',
    border: '2px solid red'
  });
  const [color, setColor] = useState('#ff0000')
  const[font_Size,setFontSize]=useState('15')
  function fontSizeOnChange(event){
    setFontSize(event.target.value)
  }
  function colorOnchange(event) {
    setColor(event.target.value);
  }
  function toChangeUpperCase() {
    console.log("button clicked");
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  }
  function toChangeLowerCase() {
    console.log("button clicked");
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  }
  function toOnChnage(event) {
    console.log("onCHange")
    setText(event.target.value);
    /*

    Functions with Event Parameters:
    Yes, that's correct!
    Functions associated with event attributes, such as:
    onClick
    onChange
    onSubmit
    onMouseOver
    onKeyDown
    receive an event parameter.
    Event Attributes:
    These functions are typically attached to HTML elements using event attributes:
    */
    // setText("This is correct way to change state variable value which is text");
  }
  const [text, setText] = useState('Enter text here');
  //the string param given to useState() will stored in text varibable
  //  text="Try to chaning text variable directly"(state variable cannot be/wrong way changed directly)
  //using another param passes to useState() as function to change state of text varibale

  //Text: it will hold the value to current state
  //setText: this handler will keep changing the state variable value value
  /*  setText("This is correct way to change state variable value which is text");
    //causing infinity loop
    //render>>settext>>Comp rerender againg>>again setText invoked and so on...
    // 
    // */

  const wordCount = () => {
    const trimmedText = text.trim();
    let wordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;
    return wordCount;
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(alert("text is copied")).catch(error => {
      alert("falied to copy")
    });

  }
  const showColorPicker = () => {
    if (disp.display === 'none') {
      setDisplay({
        display: 'block',
        border: '2px solid red',
      }
      );
    }
    else {
      setDisplay({
        display: 'none'
      }
      );
    }
  }

  return (
    <>
      <div className='textContainer' style={{ backgroundColor: props.mode === 'dark' ? '#212529d1' : 'white' }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.textformHeading}</h1>
        <textarea style={{fontSize:`${font_Size}px`, color: color, backgroundColor: props.mode === 'dark' ? '#212529d1' : 'white' }} className="textform" id="text" rows={10} cols={100} value={text} onChange={toOnChnage}></textarea>
        <div className="btnContainer">
          <button className="upBtn" onClick={toChangeUpperCase}>Convert Uppercase</button>
          <button className="upBtn" onClick={toChangeLowerCase}>Convert Lowercase</button>
          <button className="upBtn" onClick={copyToClipboard}>Copy To Clipboard</button>
          <div style={disp}>
            <input type="color" id="favcolor" value={color} onChange={colorOnchange} />
            {color}
          </div>
          <button className="upBtn" onClick={showColorPicker}>Text color</button>

          
          <button className="upBtn" onClick={()=>{document.getElementById('fontDiv').style.display='block'}}>Font Size</button>
          <div  id='fontDiv' >
          <input type="number" id="fontSize_input" value={font_Size} onChange={fontSizeOnChange} />
          <ion-icon name="close-outline" onClick={()=>{document.getElementById('fontDiv').style.display='none'}}></ion-icon>
          </div>
         
        </div>
      </div>
      <div className = "textContainer" style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#212529d1' : 'white' }}>
        <h1>Summary</h1>
        <div>Total Characters:{text.length}</div>
        <div>Total Words:{wordCount()}</div>
      </div>
    </>
  )
}
export default Textform;
