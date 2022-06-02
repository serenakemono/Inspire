import React, {useState} from 'react';
import "./PostCreationCard"
import "../../App.css"
import Button from '@material-ui/core/Button'
import { IconButton, InputBase } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"

const PostCreationPopup = ({ setPopup, userImg, user }) => {
    const POST_URL = "http://localhost:8080/api/v1/post"

    const [text, setText] = useState("");

    const handleInputChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const handlePost = () => {
        const dateTime = Date.now();
        const timestamp = Math.floor(dateTime / 1000);

        const post = {
            username: user.username,
            timestamp: timestamp,
            text: text
        }
        console.log(post)

        axios.post(POST_URL, post).
            then((response) => {
                console.log(response);
            }).
            catch(function (error) {
                console.log(error);
            })
        
        setPopup(false);
    }

    return (
        <div className="PopUp card rounded">
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
                    className="popup-x"
                    onClick={() => setPopup(false)}
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
                <InputBase
                    placeholder="What inspired you today?"
                    value={text}
                    fullWidth
                    multiline
                    rows={5}
                    onChange={handleInputChange}
                />
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
                <p>add hashtags</p>
                <Button
                    style={{textTransform: "none", backgroundColor: "#f8c6c8"}}
                    onClick={handlePost}
                >
                    Post
                </Button>
            </div>
        </div>
    )
}

export default PostCreationPopup