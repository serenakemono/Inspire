import React from 'react'
import Feed from './Feed'

const PostsDisplay = () => {
    const op1 = {
        username: "Serena",
        userImg: "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
    }
    const post1 = {
        id: 1,
        op: op1,
        text: "HAHAHAHAHA",
        img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    }

    const op2 = {
        username: "Sirius",
        userImg: "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
    }

    const post2 = {
        id: 2,
        op: op2,
        text: "a good day",
        img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    }

    const posts = [post1, post2]


    return (
        <div className="row">
            {posts.length ? (
                <Feed posts={ posts } />
            ) : (
                <p>No posts to display.</p>
            )}
        </div>
    )
}

export default PostsDisplay