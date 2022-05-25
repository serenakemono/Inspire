import React from 'react'
import ProfileFeed from './ProfileFeed'

const ProfilePostsDisplay = () => {
    const op = {
        username: "Serena",
        userImg: "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
    }
    const post1 = {
        id: 1,
        op: op,
        text: "HAHAHAHAHA",
        img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    }

    const post2 = {
        id: 2,
        op: op,
        text: "a good day",
        img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    }

    const posts = [post1, post2]


    return (
        <div className="row">
            {posts.length ? (
                <ProfileFeed posts={ posts } />
            ) : (
                <p>No posts to display.</p>
            )}
        </div>
    )
}

export default ProfilePostsDisplay