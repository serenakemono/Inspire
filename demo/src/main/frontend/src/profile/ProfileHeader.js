import React, { useEffect, useState } from 'react'
import { Button, Tab, Tabs, Grid, makeStyles } from "@material-ui/core"
import Item from "@material-ui/core/ListItem"
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

  const useStyles = makeStyles(() => ({
    buttons: {
      backgroundColor: "#e51b23",
      color: "#FFFFFF",
      textTransform: 'none',
      width: "130px",
      borderRadius: '35rem',
      '&:hover': {
        backgroundColor: "#e51b23"
      }
    },
  }))
  const { buttons } = useStyles();

  const [hasFollowed, setHasFollowed] = useState(false);
  useEffect(() => {
    if (self) return;
    if (currUser.following.includes(user.username)) {
      setHasFollowed(true);
    }
  }, [])

  const FOLLOW_URL = `http://localhost:8080/api/v1/${currUser.username}/follow/${user.username}`;
  const UNFOLLOW_URL = `http://localhost:8080/api/v1/${currUser.username}/unfollow/${user.username}`;
  
  const handleStartFollowing = () => {
    const follow = async () => {
      await axios.put(FOLLOW_URL);
    }
    follow().catch((error) => {
      console.log(error);
    })
    setHasFollowed(!hasFollowed);
  }

  const handleUnfollow = () => {
    const unfollow = async () => {
      await axios.put(UNFOLLOW_URL);
    }
    unfollow().catch((error) => {
      console.log(error);
    })
    setHasFollowed(!hasFollowed);
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
              <Item className="profile-name">{ user.username }</Item>
              <Item className="bio">{ user.bio }</Item>
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
              startIcon={hasFollowed ? <CheckCircleIcon /> : <AddBoxIcon />}
              onClick={hasFollowed ? () => handleUnfollow() : () => handleStartFollowing()}
            >
              {hasFollowed ? 'Following' : 'Follow'}
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