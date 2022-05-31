import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const ProfileCard = ({ user }) => {

    const bio = user.bio;
    const email = user.email;

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
            <div className="card-body">
                <div
                    className="mb-2"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <h6 className="card-title mb-0">About Me</h6>
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
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
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
        </div>
    )
}

export default ProfileCard