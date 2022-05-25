import React, { useContext } from 'react'
import Button from "@material-ui/core/Button"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import AuthContext from '../login/AuthProvider'
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Item from "@material-ui/core/ListItem"
import Grid from '@material-ui/core/Grid'

const ProfileHeader = ({ userImg, username, bio }) => {
    
  const context = useContext(AuthContext);
  //console.log(context);

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
                  
                <div>
                      <Button
                          variant="contained"
                          style={{
                              backgroundColor: "#e51b23",
                              color: "#FFFFFF",
                              textTransform: 'none',
                              width: "130px"
                          }}
                          startIcon={<EditRoundedIcon />}
                      >Edit profile
                    </Button>
                </div>
            </div>
        </div>
    
        <div className="header-links">
            <Tabs value={1} centered sx={{width: "50%"}}>
                  <Tab
                    style={{textTransform: 'none'}}
                    icon={<AccountCircleRoundedIcon />}
                    label="About Me" />
                <Tab
                    style={{textTransform: 'none'}}
                    icon={<PhotoLibraryRoundedIcon />}
                    label="Posts" />
                  <Tab
                      style={{textTransform: 'none'}}
                    icon={<ForumRoundedIcon />}
                    label="Discussions" />
                  <Tab
                      style={{textTransform: 'none'}}
                    icon={<StyleRoundedIcon />}
                    label="Tags" />
                  <Tab
                      style={{textTransform: 'none'}}
                    icon={<StarRoundedIcon />}
                    label="Collections" />
            </Tabs>
        </div>
    </div>
  )
}

export default ProfileHeader