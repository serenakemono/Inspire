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
import Box from "@material-ui/core/Box"

const ProfileHeader = ({ userImg }) => {
    
    const context = useContext(AuthContext);
    console.log(context);

  return (
    <div className="profile-header">
        <div className="cover">
            <div className="gray-shade"></div>
            <div className="cover-body d-flex justify-content-between align-items-center">
                <div>
                    <img className="profile-pic" src={userImg} alt="profile" />
                    <Box style={{display: "flex"}}>
                        <span className="profile-name">Username</span>
                      <span>111 Followers  111 Following</span>
                    </Box>
                      
                </div>
                  
                <div className="d-none d-md-block">
                      <Button
                          variant="contained"
                          style={{ backgroundColor: "#e51b23", color: "#FFFFFF" }}
                          startIcon={<EditRoundedIcon />}
                      >Edit profile
                    </Button>
                </div>
                  
            </div>
        </div>
    
          <div className="header-links">
              <Tabs value={0}>
                  <Tab
                      icon={<AccountCircleRoundedIcon />}
                      iconPosition="start"
                      label="About" />
                  <Tab
                      icon={<PhotoLibraryRoundedIcon />}
                      iconPosition="start"
                      label="Posts" />
                  <Tab
                      icon={<ForumRoundedIcon />}
                      iconPosition="start"
                      label="Discussions" />
                  <Tab
                      icon={<StyleRoundedIcon />}
                      iconPosition="start"
                      label="Tags" />
                  <Tab
                      icon={<StarRoundedIcon />}
                      iconPosition="start"
                      label="Collections" />
                </Tabs>
        </div>
    </div>
  )
}

export default ProfileHeader