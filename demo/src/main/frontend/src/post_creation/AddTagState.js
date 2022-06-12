import React from 'react';
import '../App.css';
import './PostCreation.css';
import { IconButton, Button } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

const AddTagState = ({
    handleClose,
    tags,
    setTags,
    windowStates,
    setWindowState,
}) => {

    function handleKeyDown(e) {
        // If user did not press enter key, return
        if (e.key !== 'Enter') return;
        // Get the value of the input
        var value = e.target.value;
        // If the value is empty, return
        if (!value.trim()) return;
        if (!value.startsWith('#')) {
            value = '#' + value;
        }
        // Add the value to the tags array
        setTags([...tags, value])
        // Clear the input
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    function doneAddingTagsHandler() {
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
            <h5>Add tags</h5>
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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "12rem"
            }}>
            <div className="tags-input-container">
                { tags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text">{tag}</span>
                        <span
                            className="close"
                            onClick={() => removeTag(index)}
                        >&times;</span>
                    </div>
                )) }
                <input
                    onKeyDown={handleKeyDown}
                    type="text"
                    className="tags-input"
                    placeholder="Type somthing & press enter to add"
                />
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
                variant="contained"
                style={{
                    backgroundColor: "#e51b23",
                    color: "#ffffff",
                    marginLeft: "10px",
                    textTransform: "none"
                }}
                onClick={doneAddingTagsHandler}
            >
                Done
            </Button>
        </div>
    </>)
}

export default AddTagState