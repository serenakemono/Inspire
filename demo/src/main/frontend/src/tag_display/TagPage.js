import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import AuthService from '../authentication/AuthService'
import PostsDisplay from '../posts_display/PostsDisplay';
import PostCreationCard from '../post_creation/PostCreationCard';
import axios from 'axios';
import TagCard from './TagCard';

const TagPage = () => {

    let { tagname } = useParams();

    const currentUser = AuthService.getCurrUser();

    if (!currentUser) return window.location.href = '/login';

    const GET_POSTS_URL = `http://localhost:8080/api/v1/tag/${tagname}`;

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        console.log(GET_POSTS_URL);
        axios.get(GET_POSTS_URL)
            .then((response) => {
                console.log(response);
                if (response.data) {
                    setPosts(response.data.posts);
                }
            })
            .catch((error) => { console.log(error) })
    }, [])

    return (
        <div className="maincontainer">
            <div className="container">
                <div className="profile-page tx-13">
                    <div style={{ height: "80px" }}></div>
                    <div className="profile-page-body row">
                        <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                            
                        </div>
                    
                        <div className="col-md-8 col-xl-6 middle-wrapper">
                            <TagCard tagname={tagname} />
                            <PostCreationCard />
                            <PostsDisplay posts={posts.reverse()} />
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

export default TagPage