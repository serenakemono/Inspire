import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const ProfileCard = ({ user, editMode, setEditMode, handleEditProfile }) => {

    if (user === null) return;

    const username = user.username;
    const bio = user.bio;
    const email = user.email;

    const UPDATE_USER_INFO_URL = `http://localhost:8080/api/v1/${username}`

    const defaultEditForm = {
        bio: bio,
        email: email,
    }
    const [editForm, setEditForm] = useState(defaultEditForm);

    const defaultFormStatus = {
        error: false,
        helperText: null
    }
    const [formStatus, setFormStatus] = useState(defaultFormStatus);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm({
            ...editForm,
            [name]: value,
        });
        setFormStatus(defaultFormStatus);
    };

    const handleCancelEdit = () => {
        setEditMode(false);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        axios.put(UPDATE_USER_INFO_URL, editForm)
            .then(response => {
                console.log(response);
                setEditMode(false);
                window.location.reload(false);
            })
            .catch(function (error) {
                console.log(error)
                if (error.response.data) {
                    setFormStatus({
                        error: true,
                        helperText: error.response.data.message
                    })
                }
            })
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    
    return (
        <div className="card rounded">
            {editMode ? (
                <form
                    onSubmit={handleEditSubmit}
                    style={{
                        paddingTop: "20px",
                        paddingBottom: "20px"
                    }}
                >
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        direction="column"
                        spacing={2}
                    >
                        <Grid item>
                            <TextField
                                style={{ paddingBottom: "20px" }}
                                variant="standard"
                                label="Bio"
                                name="bio"
                                value={editForm.bio}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ paddingBottom: "20px" }}
                                error={formStatus.error}
                                helperText={formStatus.helperText}
                                variant="standard"
                                label="Email"
                                name="email"
                                value={editForm.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: "#ffffff",
                                    textTransform: 'none',
                                    marginRight: "15px"
                                }}
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                style={{
                                    backgroundColor: "#f8c6c8",
                                    textTransform: 'none',
                                }}
                                disabled={formStatus.error}
                            >
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            ) : (
                <div className="card-body">
                <div
                    className="mb-2"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <h6 className="card-title mb-0">Bio</h6>
                    <div className="dropdown">
                        <div>
                            <IconButton
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizRoundedIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleEditProfile}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Show more</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
                <p>{ bio }</p>
                <div className="mt-3">
                    <label className="tx-11 font-weight-bold mb-0">Email:</label>
                    <p className="text-muted">{ email }</p>
                </div>
            </div>
            )}
            
        </div>
    )
}

export default ProfileCard