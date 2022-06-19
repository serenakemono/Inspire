import React, { useState } from 'react';
import { Tab, Tabs } from "@material-ui/core";
import TabPanel from './TabPanel';
import UsersDisplay from './UsersDisplay';

const ProfileSocialTab = ({ user }) => {

    const [tab, setTab] = useState(0);
    const handleTabs = (e, val) => {
        setTab(val);
    }

    const tabStyles = {
        minWidth: '6.5rem',
        textTransform: 'none',
        marginLeft: '3rem',
        marginRight: '3rem',
        fontSize: '1rem',
    };

    return (
        <div className="col-md-12 grid-margin">
            <div className="card rounded">
                <div className="card-body">
                    <Tabs
                        value={tab}
                        onChange={handleTabs}
                        centered
                        style={{marginBottom: '5px'}}
                    >
                        <Tab
                            style={tabStyles}
                            label={user.following.length  + " Followers"}
                        />
                        <Tab
                            style={tabStyles}
                            label={user.following.length  + " Following"}
                        />
                    </Tabs>
                    <TabPanel tab={tab} index={0}>
                        <UsersDisplay users={user.followers} cat='followers' />
                    </TabPanel>
                    <TabPanel tab={tab} index={1}>
                        <UsersDisplay users={user.following} cat='following' />
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default ProfileSocialTab