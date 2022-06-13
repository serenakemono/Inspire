import React, { useState } from 'react'
import './PostCreation.css'
import { IconButton, Button, InputBase } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ForumIcon from '@mui/icons-material/Forum';
import FeedIcon from '@mui/icons-material/Feed';
import axios from "axios"

const CreatePostState = ({
    user,
    userImg,
    setPopup,
    handleClose,
    windowStates,
    setWindowState,
    postError,
    setPostError,
    text,
    setText,
    selectedImgs,
    tags,
}) => {

    const POST_URL = "http://localhost:8080/api/v1/post"
    const TAG_URL = "http://localhost:8080/api/v1/tag"
    // const ADD_POSTS_TO_TAGS = (tag, postId) => `http://localhost:8080/api/v1/tag/${tag}/${postId}`

    const handleInputChange = (e) => {
        setText(e.target.value);
        setPostError(false);
    }

    async function handlePost(e) {
        e.preventDefault();
        
        // send request to create a post
        const dateTime = Date.now();
        const timestamp = Math.floor(dateTime / 1000);
        const postFormData = new FormData();
        postFormData.append('username', user.username);
        postFormData.append('timestamp', timestamp);
        postFormData.append('text', text);
        postFormData.append('tagnames', tags);
        postFormData.append('file', selectedImgs);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        var postId;
        await axios.post(POST_URL, postFormData, config).
            then((response) => {
                console.log(response);
                postId = response.data;
                window.location.reload(false);
            }).
            catch(function (error) {
                console.log(error);
                setPostError(true);
            })
    }

    return (<>
        <div
            className="card-header"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <h5>Create a post</h5>
            <IconButton
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>
        </div>
        <div className="card-body">
            <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px"
            }}>
                <img className="img-xs rounded-circle" src={userImg} alt="" />
                <div style={{marginLeft:"10px"}}>{ user.username }</div>
            </div>
            <form>
                <InputBase
                    placeholder="What inspired you today?"
                    value={text}
                    fullWidth
                    multiline
                    rows={3}
                    onChange={handleInputChange}
                />
            </form>
            <div>
                {(selectedImgs !== null) && (
                    <img
                        src={URL.createObjectURL(selectedImgs)}
                        style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            margin: "10px 0"
                        }}
                        alt="Thumb"
                    />
                )}
            </div>
            <div>
                {(tags.length !== 0) && <div>
                    {tags.map((tag, index) => (
                        <div className="tag-item" style={{marginRight: "5px"}} key={index}>
                            <span className="text">{tag}</span>
                        </div>
                    ))}
                </div>}
                <Button
                    style={{
                        color: "#e51b23",
                        padding: "0px",
                        marginTop: "10px",
                        textTransform: "none"
                    }}
                    onClick={()=>setWindowState(windowStates.add_tag)}
                >Add Hashtags</Button>
            </div>
        </div>
        <div
            className="card-footer"
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            <div>
                <IconButton onClick={()=>setWindowState(windowStates.add_photo)}><InsertPhotoIcon /></IconButton>
                <IconButton><OndemandVideoIcon /></IconButton>
                <IconButton><ForumIcon /></IconButton>
                <IconButton><FeedIcon /></IconButton>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                {postError &&
                    (<div style={{ color: "#e51b23", paddingBottom: "5px" }}>
                        Error
                    </div>)
                }
                <Button
                    disabled={text===""}
                    style={{textTransform: "none", backgroundColor: "#f8c6c8", borderRadius: "35rem"}}
                    onClick={handlePost}
                >
                    Post
                </Button>
            </div>
        </div>
    </>)
}

export default CreatePostState