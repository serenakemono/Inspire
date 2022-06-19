import React, { useEffect, useState } from 'react'
import { Button, Tab, Tabs, Grid, makeStyles } from "@material-ui/core"
import Item from "@material-ui/core/ListItem"
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ProfileHeaderTabs from './ProfileHeaderTabs';
import axios from 'axios';

const ProfileHeader = ({
  self,
  currUser,
  userImg,
  user,
  handleEditProfile,
  tab,
  setTab
}) => {

  if (user === null) return;
  if (currUser === null) return;
  
  const username = user.username;
  const bio = user.bio;

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

  const [hasFollowed, setHasFollowed] = useState(false);
  useEffect(() => {
    if (self) return;
    console.log(currUser);
    if (currUser.followers.includes(user.username)) {
      console.log('following');
      setHasFollowed(true);
    }
  }, [])

  const FOLLOW_URL = `http://localhost:8080/api/v1/${currUser.username}/follow/${username}`;
  const handleStartFollowing = () => {
    const follow = async () => {
      await axios.put(FOLLOW_URL);
    }
    follow().catch((error) => {
      console.log(error);
    })
  }

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
              onClick={() => handleStartFollowing()}
              disabled={hasFollowed}
              >Follow
            </Button>
            </div>
          }
        </div>
      </div>
          
      <ProfileHeaderTabs tab={tab} setTab={setTab} />
      
    </div>
  )
}

export default ProfileHeader