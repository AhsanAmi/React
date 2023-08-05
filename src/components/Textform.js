import React, { useState } from 'react';

export default function Textform() {
    const [text, setText] = useState(' ');

    const ConvertUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };     
    const Clear = () => {
        let newText =" ";
        setText(newText);
    };   
     const ConvertLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const HandleonChange = (event) => {
        setText(event.target.value);
    };
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }


      const CapitalizedFirstLetter =() =>{
        var arr = text.split(" ")
        var c = arr.length
        var temp = ""
        while(c!==0){
            temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
            c--;
        }

        setText(temp)
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
 }

 const performPaste =() =>{
    navigator.clipboard.readText()
      .then((text) => {
        setText(text);
      })}
    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h3>Enter Your Text</h3>
                <textarea className="form-control" value={text} onChange={HandleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={ConvertUpperCase}>UPPER CASE</button>
            <button className="btn btn-primary mx-1 my-1" onClick={ConvertLowerCase}>lower case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={CapitalizedFirstLetter}>Capitalized First Letter</button>
            <button className="btn btn-primary  mx-1 my-1" onClick={speak} >Speak</button>
            <button className="btn btn-primary  mx-1 my-1" onClick={copyText} >Copy Text</button>
            <button className="btn btn-primary  mx-1 my-1" onClick={performPaste} >Paste Text</button>
            <button className="btn btn-primary  mx-1 my-1" onClick={Clear}>Clear</button>


        </div>

        <div className="container">
            <h4>Your Text Summary:</h4>
            <p>{text.split(" ").filter((element)=>{return element.length!==0} ).length} Words && {text.length} Characters</p>
            <p>{(0.008*(text.split(" ").length))} Minutes to read</p>
        </div>
        </>
    );
}
