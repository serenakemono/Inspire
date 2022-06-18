import React from 'react'

import { Tab, Tabs } from "@material-ui/core"
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const ProfileHeaderTabs = ({ tab, setTab }) => {

    const handleTabs = (e, val) => {
        setTab(val);
    }

    return (
        <div className="header-links">
            <Tabs
                value={tab}
                onChange={handleTabs}
                centered
            >
                <Tab
                    style={{ textTransform: 'none' }}
                    icon={<AccountCircleRoundedIcon />}
                    label="About Me"
                />
                <Tab
                    style={{ textTransform: 'none' }}
                    icon={<PhotoLibraryRoundedIcon />}
                    label="Posts"
                />
                <Tab
                    style={{ textTransform: 'none' }}
                    icon={<ForumRoundedIcon />}
                    label="Discussions"
                />
                <Tab
                    style={{ textTransform: 'none' }}
                    icon={<StyleRoundedIcon />}
                    label="Tags"
                />
                <Tab
                    style={{ textTransform: 'none' }}
                    icon={<StarRoundedIcon />}
                    label="Collections"
                />
            </Tabs>
        </div>
    )
}

export default ProfileHeaderTabs