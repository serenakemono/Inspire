import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import '../common/assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import PostsDisplay from '../posts_display/PostsDisplay';
import ProfileLatestPics from './ProfileLatestPics';
import ProfileSuggestions from './ProfileSuggestions';

import AuthService from '../authentication/AuthService';

const OtherProfilePage = () => {

    let { username } = useParams();
    const [currUser, setCurrUser] = useState(null);

    const currentUser = AuthService.getCurrUser();
    const token = currentUser.token;

    const GET_USER_INFO_URL = 'http://localhost:8080/api/v1/auth/userinfo'
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(GET_USER_INFO_URL,
                { headers: { "Authorization": `Bearer ${token}` } });
            setCurrUser(res.data.username);
        }
        fetch();
    }, []);
    useEffect(() => {
        if (currUser == username) {
            window.location.href = 'http://localhost:3000/me';
        }
    }, [currUser]);

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"

    const user = { username: username, bio: 'very good' };

    const posts = [];

    const [tab, setTab] = useState(0);

    return (
        <div>
            <div className="maincontainer">
                <div className="container">
                    <div className="profile-page tx-13">
                        <div className="row">
                            <div className="col-12 grid-margin">
                                <ProfileHeader
                                    self={false}
                                    userImg={userImg}
                                    user={user}
                                    tab={tab}
                                    setTab={setTab}
                                />
                            </div>
                        </div>
                        <div className="profile-body row">
                            <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                                <ProfileCard
                                    self={false}
                                    user={user}
                                    editMode={false}
                                    handleEditProfile={()=>{}}
                                />
                            </div>
                        
                            <div className="col-md-8 col-xl-6 middle-wrapper">
                                <PostsDisplay posts={posts} />
                            </div>
                        
                            <div className="d-none d-xl-block col-xl-3 right-wrapper">
                                <div className="row">
                                    <ProfileLatestPics />
                                    <ProfileSuggestions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherProfilePage