import React, { useEffect, useState } from 'react'

import PostsDisplay from '../../posts_display/PostsDisplay';
import TabPanel from './TabPanel';
import PostCreationCard from '../../post_creation/PostCreationCard';
import ProfileSocialTab from '../profile_body_mid/ProfileSocialTab';

const MainBodyDisplay = ({
    self,
    tab,
    setPopup,
    windowStates,
    setWindowState,
    user
}) => {

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"

    return (user != null && <>
        <TabPanel tab={tab} index={0}>
            <PostCreationCard
                userImg={userImg}
                setPopup={setPopup}
                windowStates={windowStates}
                setWindowState={setWindowState}
            />
            <PostsDisplay posts={user.posts.reverse()} />
        </TabPanel>
        <TabPanel tab={tab} index={1}>
            <PostCreationCard
                userImg={userImg}
                setPopup={setPopup}
                windowStates={windowStates}
                setWindowState={setWindowState}
            />
            <div>No discussions to display.</div>
        </TabPanel>
        <TabPanel tab={tab} index={2}>tags detail</TabPanel>
        <TabPanel tab={tab} index={3}>
            <PostsDisplay posts={user.collectedPosts.reverse()} />
        </TabPanel>
        <TabPanel tab={tab} index={4}>
            <PostsDisplay posts={user.likedPosts.reverse()} />
        </TabPanel>
        <TabPanel tab={tab} index={5}>
            <ProfileSocialTab user={user} />
        </TabPanel>
    </>)
}

export default MainBodyDisplay