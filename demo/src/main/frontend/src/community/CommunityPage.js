import React, { useState, useEffect } from 'react'
import AuthService from '../authentication/AuthService'
import PostsDisplay from '../posts_display/PostsDisplay';
import PostCreationCard from '../post_creation/PostCreationCard';
import axios from 'axios';

const CommunityPage = () => {

    const GET_POSTS_URL = 'http://localhost:8080/api/v1/posts';
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const currentUser = AuthService.getCurrUser();
        if (!currentUser) return window.location.href = '/login';

        console.log(currentUser);

        axios.get(GET_POSTS_URL)
            .then((response) => {
                if (response.data) {
                    setPosts(response.data);
                }
            })
            .catch((error) => { console.log(error) })
    }, [])

    return (
        <div className="maincontainer">
            <div className="container">
                <div className="profile-page tx-13">
                    <div style={{height: "80px"}}></div>
                    <div className="profile-page-body row">
                        <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                        </div>
                    
                        <div className="col-md-8 col-xl-6 middle-wrapper">
                            <PostCreationCard />
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

export default CommunityPage