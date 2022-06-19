import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import '../../common/assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import ProfileHeader from '../profile_header/ProfileHeader';
import ProfileCard from '../profile_body_left/ProfileCard';
import PostsDisplay from '../../posts_display/PostsDisplay';
import ProfileLatestPics from '../profile_body_right/ProfileLatestPics';
import ProfileSuggestions from '../profile_body_right/ProfileSuggestions';

const OtherProfilePage = () => {

    let { username } = useParams();
    const [user, setUser] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [posts, setPosts] = useState([]);
    const [currUser, setCurrUser] = useState(null);

    const GET_USER_INFO_URL = `http://localhost:8080/api/v1/user/`;

    useEffect(() => {
        const fetch = async () => {
            const info = JSON.parse(localStorage.getItem("info"));
            if (info.username == username) {
                window.location.href = 'http://localhost:3000/me';
                return;
            }
            const res = await axios.get(GET_USER_INFO_URL + username);
            setUser(res.data);
            setPosts(res.data.posts);
            const response = await axios.get(GET_USER_INFO_URL + info.username);
            setCurrUser(response.data);
        }
        fetch().catch((error) => {
            console.log(error);
            setErrorMsg(error.response.message);
        });
    }, []);

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"

    const [tab, setTab] = useState(0);

    return (
        errorMsg != '' ?
            (<div style={{
                display: "flex",
                marginTop: "80px",
                marginLeft: "15px"
            }}>
                {errorMsg}
            </div>) :
            (<div>
                <div className="maincontainer">
                    <div className="container">
                        <div className="profile-page tx-13">
                            <div className="row">
                                <div className="col-12 grid-margin">
                                    <ProfileHeader
                                        self={false}
                                        currUser={currUser}
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
            </div>)
    )
}

export default OtherProfilePage