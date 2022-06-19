import React from 'react'

import { Tab, Tabs } from "@material-ui/core"
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const ProfileHeaderTabs = ({ tab, setTab }) => {

    const handleTabs = (e, val) => {
        setTab(val);
    }

    const tabStyles = {
        minWidth: '6.5rem',
        textTransform: 'none',
    };

    return (
        <div className="header-links" style={{marginTop: "10px"}}>
            <Tabs
                value={tab}
                onChange={handleTabs}
                centered
            >
                <Tab
                    style={tabStyles}
                    icon={<PhotoLibraryRoundedIcon />}
                    label="Posts"
                />
                <Tab
                    style={tabStyles}
                    icon={<ForumRoundedIcon />}
                    label="Discussions"
                />
                <Tab
                    style={tabStyles}
                    icon={<StyleRoundedIcon />}
                    label="Tags"
                />
                <Tab
                    style={tabStyles}
                    icon={<StarRoundedIcon />}
                    label="Collections"
                />
                <Tab
                    style={tabStyles}
                    icon={<FavoriteIcon />}
                    label="Likes"
                />
                <Tab
                    style={tabStyles}
                    icon={<PeopleAltIcon />}
                    label="Social"
                />
            </Tabs>
        </div>
    )
}

export default ProfileHeaderTabs