import React, {useState, useEffect} from 'react';
import "./PostCreationCard"
import "../../App.css"
import CreatePostState from './CreatePostState';
import AddPhotoState from './AddPhotoState';

const PostCreationPopup = ({ setPopup, userImg, user }) => {

    const CREATE_POST = "create a post";
    const ADD_PHOTO = "add a photo";
    const ADD_VIDEO = "add a video";
    const windowStates = [CREATE_POST, ADD_PHOTO, ADD_VIDEO]
    const [windowState, setWindowState] = useState(windowStates[0])
    const [postError, setPostError] = useState(false);
    const [selectedImgs, setSelectedImgs] = useState([]);

    const handleClose = () => {
        setPopup(false);
        setPostError(false);
        setWindowState(windowStates[0]);
    }

    return (
        <div className="PopUp card rounded">
            {(windowState === CREATE_POST) && (<CreatePostState
                user={user}
                userImg={userImg}
                setPopup={setPopup}
                handleClose={handleClose}
                windowStates={windowStates}
                setWindowState={setWindowState}
                postError={postError}
                setPostError={setPostError}
                selectedImgs={selectedImgs}
            />)}
            {(windowState === ADD_PHOTO) && (<AddPhotoState
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