import React, { useState } from 'react'
import PostsDisplay from '../home/PostsDisplay'
import TabPanel from './TabPanel'
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const Profile = ({posts}) => {

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"

    const [tab, setTab] = useState(0)

    const handleTabs = (e, val) => {
        setTab(val);
    }
    
  return (
    <div className="content">
        <div style={{borderBottom: "1px solid grey"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "70px",
            }}>
            <div>
                <img
                    style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                    src={userImg}
                />
            </div>
                <div>
                    <h4>Username</h4>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "108%"
                    }}>
                    <h6>10 posts</h6>
                    <h6>10 followers</h6>
                    <h6>10 following</h6>
                    </div>
                </div>
            </div>
            <Box position="static">
                <Tabs value={tab} onChange={handleTabs}>
                    <Tab label="Posts" />
                    <Tab label="Discussions" />
                    <Tab label="Activities" />
                </Tabs>
            </Box>
        </div>
        <TabPanel tab={tab} index={0}>
            <div>
                <PostsDisplay posts={posts}/>
            </div>
        </TabPanel>
        <TabPanel tab={tab} index={1}>Discussions detail</TabPanel>
        <TabPanel tab={tab} index={2}>Activities detail</TabPanel>
        
    </div>
  )
}

export default Profile