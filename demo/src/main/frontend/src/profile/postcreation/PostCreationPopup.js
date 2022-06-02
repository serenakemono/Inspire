import React from 'react';
import "./Popup.css"
import "../../App.css"

const PostCreationPopup = ({setPopup}) => {
    return (
        <div className="PopUp card">
            {/* x close window */}
            <button className="popup-x" onClick={()=> setPopup(false)} >X</button>
            <div className="pu-content-container">
                <h1>Add more bones?</h1>
            </div>
            {/* button controls */}
            <div className="pu-button-container">
                <button onClick={()=> setPopup(false)}> MORE BONES! </button>
            </div>
        </div>
    )
}

export default PostCreationPopup