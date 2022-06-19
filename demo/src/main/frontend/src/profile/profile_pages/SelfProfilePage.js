import React, { useEffect, useState } from 'react';
import '../../common/assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileHeader from '../profile_header/ProfileHeader';
import ProfileCard from '../profile_body_left/ProfileCard';
import ProfileLatestPics from '../profile_body_right/ProfileLatestPics';
import ProfileSuggestions from '../profile_body_right/ProfileSuggestions';
import AuthService from '../../authentication/AuthService';
import axios from 'axios'
import PostCreationPopup from '../../post_creation/PostCreationPopup';
import MainBodyDisplay from '../profile_body_mid/MainBodyDisplay';

const SelfProfilePage = () => {

    const GET_USER_INFO_URL = `http://localhost:8080/api/v1/user/`

    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState(null);
    const [tab, setTab] = useState(0);
    const [sessionExpired, setSessionExpired] = useState(false);

    useEffect(() => {
        if (AuthService.getCurrUser() == null) {
            setSessionExpired(true);
            AuthService.logout();
            window.location.href = '/login';
            return;
        }

        const fetchUser = async () => {
            const info = JSON.parse(localStorage.getItem('info'));
            const username = info.username;
            const res = await axios.get(GET_USER_INFO_URL + username);
            setUser(res.data);
        }

        fetchUser().catch((error) => {
            setSessionExpired(true);
            AuthService.logout();
        });
    }, []);

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"

    const handleEditProfile = () => {
        setEditMode(true);
        setTab(0)
    }

    const [popup, setPopup] = useState(false);
    const duringPopup = popup ? "during-popup" : ""

    const windowStates = {
        create_post: "create a post",
        add_tag: "add a tag",
        add_photo: "add a photo",
        add_video: "add a video",
    }
    const [windowState, setWindowState] = useState(windowStates.create_post)

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
                                    self={true}
                                    userImg={userImg}
                                    user={user}
                                    currUser={user}
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
                                    self={true}
                                    user={user}
                                    editMode={editMode}
                                    setEditMode={setEditMode}
                                    handleEditProfile={handleEditProfile}
                                />
                            </div>
                        
                            <div className="col-md-8 col-xl-6 middle-wrapper">
                                <MainBodyDisplay
                                    tab={tab}
                                    setPopup={setPopup}
                                    windowStates={windowStates}
                                    setWindowState={setWindowState}
                                    user={user}
                                    self={true}
                                />
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
                windowState={windowState}
                windowStates={windowStates}
                setWindowState={setWindowState}
                userImg={userImg}
                user={user}
            />}
        </div>
    )
}

export default SelfProfilePage
