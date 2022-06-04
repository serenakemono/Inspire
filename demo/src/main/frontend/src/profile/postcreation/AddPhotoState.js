import React, {useState} from 'react'
import { IconButton, Button } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close';
import { textTransform } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const AddPhotoState = ({
    handleClose,
    windowStates,
    setWindowState,
    selectedImgs,
    setSelectedImgs
}) => {

    const imgSelectedHandler = (event) => {
        console.log(event.target.files[0]);
        setSelectedImgs(prev => (
            [...prev, event.target.files[0]]
        ));
    }

    const removeImgHandler = () => {
        setSelectedImgs([]);
    }

    const cancelSelectingHandler = () => {
        setSelectedImgs([]);
        setWindowState(windowStates[0]);
    }
    
    const doneSelectingHandler = () => {
        setWindowState(windowStates[0])
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
            <h5>Add your photos</h5>
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
            {(selectedImgs.length===0) && (
                <Button
                    style={{
                        textTransform: "none",
                        fontSize: "18px"
                    }}
                    component="label"
                >
                    Select images to share
                    <input
                        accept="image/*"
                        type="file"
                        hidden
                        onChange={imgSelectedHandler}
                    />
                </Button>
            )}
            {(selectedImgs.length!==0) && (
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    {selectedImgs.map((image) =>
                        <img
                            src={URL.createObjectURL(image)}
                            style={{maxWidth: "100px", maxHeight: "100px"}}
                            alt="Thumb"
                        />
                    )}
                    {selectedImgs.length <= 9 && (
                        <IconButton component="label">
                            <AddIcon />
                            <input
                                accept="image/*"
                                type="file"
                                hidden
                                onChange={imgSelectedHandler}
                            />
                        </IconButton>
                    )}
                </div>
            )}
        </div>

        <div
            className="card-footer"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end"
            }}
        >
            <Button
                variant="outlined"
                onClick={cancelSelectingHandler}
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
                onClick={doneSelectingHandler}
            >
                Done
            </Button>
        </div>
    </>)
}

export default AddPhotoState