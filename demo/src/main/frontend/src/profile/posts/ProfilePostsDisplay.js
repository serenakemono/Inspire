import React, { useEffect, useState } from 'react'
import ProfileFeed from './ProfileFeed'
import axios from 'axios'

const ProfilePostsDisplay = ({ user }) => {

    if (user === null) return;

    const [posts, setPosts] = useState([]);

    const GET_POSTS_URL = `http://localhost:8080/api/v1/${user.username}/posts`

    useEffect(() => {
        axios.get(GET_POSTS_URL)
            .then((response) => {
                if (response.data) {
                    setPosts(response.data);
                }
            })
            .catch((error) => { console.log(error) }
            )
    }, []);

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"

    return (
        <div className="row">
            {posts.length ? (
                <ProfileFeed posts={ posts } userImg={ userImg } />
            ) : (
                <p>No posts to display.</p>
            )}
        </div>
    )
}

export default ProfilePostsDisplay