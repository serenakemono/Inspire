import React, { useState } from 'react';
import "./PostCreationCard"
import "../App.css"
import CreatePostState from './CreatePostState';
import AddPhotoState from './AddPhotoState';
import AddTagState from './AddTagState';

const PostCreationPopup = ({
    setPopup,
    windowState,
    windowStates,
    setWindowState,
    userImg,
    user
}) => {

    const [postError, setPostError] = useState(false);
    const [selectedImgs, setSelectedImgs] = useState(null);
    const [text, setText] = useState("");
    const [tags, setTags] = useState([]);

    const handleClose = () => {
        setPopup(false);
        setPostError(false);
        setWindowState(windowStates.create_post);
    }
    
    return (
        <div className="PopUp card rounded">
            {(windowState === windowStates.create_post) && (<CreatePostState
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
                tags={tags}
                setTags={setTags}
            />)}

            {(windowState === windowStates.add_tag) && (<AddTagState
                handleClose={handleClose}
                tags={tags}
                setTags={setTags}
                windowStates={windowStates}
                setWindowState={setWindowState}
            />)}

            {(windowState === windowStates.add_photo) && (<AddPhotoState
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