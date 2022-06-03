import React, {useEffect, useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import ProfilePostsDisplay from './posts/ProfilePostsDisplay';
import ProfileLatestPics from './ProfileLatestPics';
import ProfileSuggestions from './ProfileSuggestions';
import AuthService from '../authentication/AuthService';
import axios from 'axios'
import PostCreationCard from './postcreation/PostCreationCard';
import PostCreationPopup from './postcreation/PostCreationPopup';

const ProfilePage = () => {

    const currentUser = AuthService.getCurrUser();
    const token = currentUser.token;

    const GET_USER_INFO_URL
        = 'http://localhost:8080/api/v1/auth/userinfo'

    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState(null);
    const [tab, setTab] = useState(0);
    const [sessionExpired, setSessionExpired] = useState(false);

    useEffect(() => {
        axios.get(GET_USER_INFO_URL,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                const newUser = {
                    username: res.data.username,
                    bio: res.data.bio,
                    email: res.data.email,
                }
                setUser(newUser);
            }).catch((error) => {
                setSessionExpired(true);
                console.log(error);
            }
        )
    }, []);

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
    
    if (!currentUser) return window.location.href = '/login';

    const handleEditProfile = () => {
        setEditMode(true);
        setTab(0)
    }

    const [popup, setPopup] = useState(false);
    const duringPopup = popup ? "during-popup" : ""

    return (
        <div>
            {sessionExpired && (window.location.href = '/login')}
            <div className={duringPopup}></div>
            <div className="maincontainer">
                <div className="container">
                    <div className="profile-page tx-13">
                        <div className="row">
                            <div className="col-12 grid-margin">
                                <ProfileHeader
                                    userImg={userImg}
                                    user={user}
                                    handleEditProfile={handleEditProfile}
                                    editMode={editMode}
                                    tab={tab}
                                    setTab={setTab}
                                />
                            </div>
                        </div>
                        <div className="profile-body row">
                            <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                                <ProfileCard
                                    user={user}
                                    editMode={editMode}
                                    setEditMode={setEditMode}
                                    handleEditProfile={handleEditProfile}
                                />
                            </div>
                        
                            <div className="col-md-8 col-xl-6 middle-wrapper">
                                <PostCreationCard
                                    user={user}
                                    userImg={userImg}
                                    setPopup={setPopup} />
                                <ProfilePostsDisplay user={user} />
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
            {popup && <PostCreationPopup
                setPopup={setPopup}
                userImg={userImg}
                user={user}
            />}
        </div>
    )
}

export default ProfilePage
