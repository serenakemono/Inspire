import React, { useState } from 'react'
import axios from 'axios';
import { IconButton, Button, makeStyles } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

const UpdateDpPopup = ({
    setDpPopup,
    username
}) => {

    const UPDATE_URL = `http://localhost:8080/api/v1/${username}/dp`

    const [postError, setPostError] = useState(false);
    const [image, setImage] = useState(null);

    const handleClose = () => {
        setDpPopup(false);
        setPostError(false);
    }

    const handleSelectImage = (e) => {
        setImage(e.target.files[0]);
    }

    const handleCancelSelect = () => {
        setImage(null);
        setDpPopup(false);
    }

    const handleFinishSelecting = (e) => {
        e.preventDefault();

        const postFormData = new FormData();
        postFormData.append('file', image);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const upload = async () => {
            await axios.put(UPDATE_URL, postFormData, config);
        }

        upload().then(res => {
            console.log(res);
            setDpPopup(false);
            window.location.reload(false);
        }).catch(error => {
            console.log(error);
            setPostError(true);
        })
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
            <div
                className="card-header"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <h5>Upload your profile picture</h5>
                <IconButton
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
            </div>

        <div
            className="card-body"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "12rem"
            }}>
            {(image === null) && (
                <Button
                    style={{
                        textTransform: "none",
                        fontSize: "18px"
                    }}
                    component="label"
                >
                    Select image
                    <input
                        accept="image/*"
                        type="file"
                        hidden
                        onChange={handleSelectImage}
                    />
                </Button>
            )}
            <div>
                {(image !== null) && (
                    <img
                        src={URL.createObjectURL(image)}
                        style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            marginRight: "10px"
                        }}
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
                    justifyContent: "flex-end"
                }}
            >
                {postError && <div
                    style={{
                        color: "#e51b23",
                        display: "flex",
                        alignItems: "center",
                        marginRight: "8px"
                    }}
                >Error</div>}
                <Button
                    variant="outlined"
                    onClick={handleCancelSelect}
                    style={{
                        color: "#e51b23",
                        textTransform: "none"
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#e51b23",
                        color: "#ffffff",
                        marginLeft: "10px",
                        textTransform: "none"
                    }}
                    onClick={handleFinishSelecting}
                >
                    Upload
                </Button>
            </div>
        </div>
    )
}

export default UpdateDpPopup