import React, { useState, useEffect } from 'react'
import AuthService from '../authentication/AuthService'
import PostsDisplay from '../posts_display/PostsDisplay';
import PostCreationCard from '../post_creation/PostCreationCard';
import axios from 'axios';
import { Functions } from '@material-ui/icons';

const HomePage = () => {

    const GET_FOLLOWING_URL = 'http://localhost:8080/api/v1/user/'
    const GET_POSTS_URL = 'http://localhost:8080/api/v1/posts/following';
    const [posts, setPosts] = useState([]);
    const [following, setFollowing] = useState([]);
    const [userImg, setUserImg] = useState([]);

    useEffect(() => {

        const currentUser = AuthService.getCurrUser();
        if (!currentUser) return window.location.href = '/login';

        const fetchFollowings = async () => {
            const username = JSON.parse(localStorage.getItem('info')).username;
            const res = await axios.get(GET_FOLLOWING_URL + username);
            console.log(res.data.following);
            setFollowing(res.data.following);
            setFollowing(oldArray => [...oldArray, username]);
            setUserImg(res.data.dp);
        }

        fetchFollowings().catch((error) => console.log(error));
    }, [])

    var qs = require('qs');
    useEffect(() => {
        if (following == []) return;

        const fetchPosts = async () => {
            const res = await axios.get(GET_POSTS_URL, {
                'params': { 'following': following },
                'paramsSerializer': function (params) {
                    return qs.stringify(params, {arrayFormat: 'repeat'})
                }

            });
            setPosts(res.data);
        }
        
        fetchPosts().catch((error) => { console.log(error) })
    }, [following])

    return (
        <div className="maincontainer">
            <div className="container">
                <div className="profile-page tx-13">
                    <div style={{height: "80px"}}></div>
                    <div className="profile-page-body row">
                        <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                        </div>
                    
                        <div className="col-md-8 col-xl-6 middle-wrapper">
                            <PostCreationCard userImg={userImg} />
                            <PostsDisplay posts={posts} />
                        </div>
                    
                        <div className="d-none d-xl-block col-xl-3 right-wrapper">
                            <div className="row">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default HomePage