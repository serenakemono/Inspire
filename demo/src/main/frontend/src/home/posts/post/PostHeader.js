import React, {useState} from 'react'
import { Menu, MenuItem, IconButton } from '@material-ui/core'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const PostHeader = ({post}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div className="card-header">
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
            <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                <img className="img-xs rounded-circle" src={post.op.userImg} alt="" />
                <div style={{marginLeft:"10px"}}>{ post.op.username }</div>
            </div>
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
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
            </div>
        </div>
    </div>
  )
}

export default PostHeader