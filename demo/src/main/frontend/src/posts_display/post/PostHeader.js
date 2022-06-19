import React, {useState} from 'react'
import { Menu, MenuItem, IconButton } from '@material-ui/core'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const PostHeader = ({post, userImg}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const unixTime = post.timestamp*1000;
    let timestamp = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(unixTime);

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
                    <img
                        className="img-xs rounded-circle"
                        src={userImg}
                        alt=""
                        onClick={() => {
                            window.location.href = `http://localhost:3000/user/${post.username}`
                        }}
                    />
                <div style={{ marginLeft: "10px" }}>
                      <div
                          style={{ fontSize: "17px", cursor: "pointer" }}
                          onClick={() => { window.location.href = `http://localhost:3000/user/${post.username}` }}
                      >
                          {post.username}
                      </div>
                      <div className="text-muted" style={{fontSize: "14px"}}>{timestamp}</div>
                </div>
                
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