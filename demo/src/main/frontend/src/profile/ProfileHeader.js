import React from 'react'
import { Button, Tab, Tabs, Grid, makeStyles } from "@material-ui/core"
import Item from "@material-ui/core/ListItem"
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddBoxIcon from '@mui/icons-material/AddBox';


const ProfileHeader = ({ self, userImg, user, handleEditProfile, tab, setTab }) => {

  if (user === null) return;
  
  const username = user.username;
  const bio = user.bio;

  const handleTabs = (e, val) => {
    setTab(val);
  }

  const useStyles = makeStyles(() => ({
    buttons: {
      backgroundColor: "#e51b23",
      color: "#FFFFFF",
      textTransform: 'none',
      width: "130px",
      borderRadius: '35rem',
    },
  }))
    
  const { buttons } = useStyles();

  return (
    <div className="profile-header">
      <div className="cover">
        <div className="gray-shade"></div>
        <div 
          className="cover-body"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          <Grid container spacing={2}>
            <Grid item>
              <img className="profile-pic" src={userImg} alt="profile" />
            </Grid>
            <Grid item>
              <Item className="profile-name">{ username }</Item>
              <Item className="bio">{ bio }</Item>
              <Item className="follower-stats">111 Followers 111 Following</Item>
            </Grid>
          </Grid>

          {self == true &&
            <div>
              <Button
                variant="contained"
                className={buttons}
                startIcon={<EditRoundedIcon />}
                onClick={() => handleEditProfile()}
              >Edit profile
              </Button>
            </div>
          }

          {self == false &&
            <div>
              <Button
                variant="contained"
                className={buttons}
                startIcon={<AddBoxIcon />}
                // onClick={() => handleEditProfile()}
              >Follow
              </Button>
            </div>
          }
        </div>
      </div>
    
      <div className="header-links">
        <Tabs
          value={tab}
          onChange={handleTabs}
          centered>
          <Tab
            style={{ textTransform: 'none' }}
            icon={<AccountCircleRoundedIcon />}
            label="About Me" />
          <Tab
            style={{ textTransform: 'none' }}
            icon={<PhotoLibraryRoundedIcon />}
            label="Posts" />
          <Tab
            style={{ textTransform: 'none' }}
            icon={<ForumRoundedIcon />}
            label="Discussions" />
          <Tab
            style={{ textTransform: 'none' }}
            icon={<StyleRoundedIcon />}
            label="Tags" />
          <Tab
            style={{ textTransform: 'none' }}
            icon={<StarRoundedIcon />}
            label="Collections" />
        </Tabs>
      </div>
    </div>
  )
}

export default ProfileHeader