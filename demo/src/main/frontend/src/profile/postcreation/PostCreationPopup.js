import React, {useState, useEffect} from 'react';
import "./PostCreationCard"
import "../../App.css"
import CreatePostState from './CreatePostState';
import AddPhotoState from './AddPhotoState';

const PostCreationPopup = ({
    setPopup,
    windowState,
    windowStates,
    setWindowState,
    userImg,
    user
}) => {

    console.log('current window state is: ' + windowState)

    const [postError, setPostError] = useState(false);
    const [selectedImgs, setSelectedImgs] = useState(null);
    const [text, setText] = useState("");

    const handleClose = () => {
        setPopup(false);
        setPostError(false);
        setWindowState(windowStates[0]);
    }
    
    return (
        <div className="PopUp card rounded">
            {(windowState === windowStates[0]) && (<CreatePostState
                user={user}
                userImg={userImg}
                setPopup={setPopup}
                handleClose={handleClose}
                windowStates={windowStates}
                setWindowState={setWindowState}
                postError={postError}
                setPostError={setPostError}
                selectedImgs={selectedImgs}
                text={text}
                setText={setText}
            />)}
            {(windowState === windowStates[1]) && (<AddPhotoState
                handleClose={handleClose}
                windowStates={windowStates}
                setWindowState={setWindowState}
                selectedImgs={selectedImgs}
                setSelectedImgs={setSelectedImgs}
            />)}
        </div>
    )
}

export default PostCreationPopup