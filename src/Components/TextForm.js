import React, { useState } from 'react'

export default function TextForm(props) {
    const [state, setState] = useState('');

    const handleClick = () => {
        // console.log("btn clicked");

        setState(state.toUpperCase());
    }
    const handleClick2 = () => {
        // console.log("btn clicked");
        setState(state.toLowerCase());
    }
    const handleClick3 = () => {
        // console.log("btn clicked");
        setState("");
    }

    const handleChange = (e) => {
        setState(e.target.value);

    }

    return (
        <>
        <div className="container-sm" style={{backgroundColor:props.mode === 'light'?'white':'#121212',color:props.mode === 'light'?'black':'white'}}>
        <div className="mb-3">
                <h1>{props.name} </h1>
                <input type="Email" placeholder='Enter Text here'  className="form-control" value={state} onChange={handleChange} id="mytext" aria-describedby="emailHelp" />
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClick}>Conver to upper case</button>
            <button className="btn btn-success mx-2" onClick={handleClick2}>Conver to lower case</button>
            <button className="btn btn-danger mx-2" onClick={handleClick3}>Clear text</button>


        
        
            <h1>Your text Summary</h1>
            <p>{state.split(" ").length} words and {state.length} Characters</p>
            <p>{0.008 * state.split(" ").length} Minutes to read </p>
            <h2>Preview</h2>
            <p>{state.length>0?"Preview":"Enter Text abow to preview"}</p>
        </div>
        </>



    )
}
