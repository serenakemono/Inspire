import React, { useState } from 'react';
import "./PostCreationCard"
import CreatePostState from './CreatePostState';
import AddPhotoState from './AddPhotoState';
import AddTagState from './AddTagState';
import { makeStyles } from '@material-ui/core';

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

    const useStyles = makeStyles(() => ({
        PopUp: {
            position: "fixed",
            top: "25%",
            left: "25%",
            width: "50%",
            zIndex: "10000",
            boxShadow: "0 0 10px 0 rgba(183, 192, 206, 0.2)",
            "-webkit-box-shadow": "0 0 10px 0 rgba(183, 192, 206, 0.2)",
            "-moz-box-shadow": "0 0 10px 0 rgba(183, 192, 206, 0.2)",
            "-ms - box - shadow": "0 0 10px 0 rgba(183, 192, 206, 0.2)",
            display: "flex",
            flexDirection: "column",
            minWidth: "0",
            wordWrap: "break-word",
            backgroundColor: "#fff",
            backgroundClip: "border-box",
            border: "1px solid #f2f4f9",
            borderRadius: "0.25rem",
            minHeight: "1px",
            borderRadius: "0.25rem !important",
        }
    }));

    const { PopUp } = useStyles();
    
    return (
        <div className={PopUp}>
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