import React from 'react'
import { IconButton, Button } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close';

const AddPhotoState = ({
    handleClose,
    windowStates,
    setWindowState,
    selectedImgs,
    setSelectedImgs
}) => {

    const imgSelectedHandler = (e) => {
        setSelectedImgs(e.target.files[0]);
    }

    const removeImgHandler = () => {
        setSelectedImgs(null);
    }

    const cancelSelectingHandler = () => {
        setSelectedImgs(null);
        setWindowState(windowStates.create_post);
    }
    
    const doneSelectingHandler = () => {
        setWindowState(windowStates.create_post);
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
            {(selectedImgs === null) && (
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
            <div>
                {(selectedImgs !== null) && (
                    <img
                        src={URL.createObjectURL(selectedImgs)}
                        style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            marginRight: "10px"
                        }}
                        alt="Thumb"
                    />
                )}
                {/* {(selectedImgs.length >= 1 && selectedImgs.length <= 9) && (
                    <IconButton component="label">
                        <AddIcon />
                        <input
                            accept="image/*"
                            type="file"
                            hidden
                            multiple
                            onChange={imgSelectedHandler}
                        />
                    </IconButton>
                )} */}
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