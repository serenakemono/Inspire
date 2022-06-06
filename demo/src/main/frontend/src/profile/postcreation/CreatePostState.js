import React, {useState} from 'react'
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
    selectedImgs
}) => {

    const POST_URL = "http://localhost:8080/api/v1/post"
    
    const [text, setText] = useState("");

    const handleInputChange = (e) => {
        setText(e.target.value);
        setPostError(false)
    }

    const handlePost = (e) => {
        e.preventDefault();

        const dateTime = Date.now();
        const timestamp = Math.floor(dateTime / 1000);

        const formData = new FormData();
        formData.append('username', user.username);
        formData.append('timestamp', timestamp);
        formData.append('text', text);
        for (let i = 0; i < selectedImgs.length; i++) {
            formData.append('files', selectedImgs[i]);
        }
        // formData.append('files', selectedImgs);
        // const post = {
        //     username: user.username,
        //     timestamp: timestamp,
        //     text: text,
        //     selectedImgs: selectedImgs
        // }
        for (var pair of formData.entries()) {
            console.log(pair); 
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        axios.post(POST_URL, formData, config).
            then((response) => {
                console.log(response);
                setPopup(false);
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
                    rows={5}
                    onChange={handleInputChange}
                />
                <Button># Add hashtag</Button>
            </form>
            <div>
                {selectedImgs.map((image) =>
                    <img
                        src={URL.createObjectURL(image)}
                        style={{maxWidth: "100px", maxHeight: "100px"}}
                        alt="Thumb"
                    />
                )}
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
                <IconButton onClick={()=>setWindowState(windowStates[1])}><InsertPhotoIcon /></IconButton>
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
                    style={{textTransform: "none", backgroundColor: "#f8c6c8"}}
                    onClick={handlePost}
                >
                    Post
                </Button>
            </div>
        </div>
    </>)
}

export default CreatePostState