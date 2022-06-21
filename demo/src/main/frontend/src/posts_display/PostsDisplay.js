import React from 'react'
import Feed from './Feed'

const PostsDisplay = ({ posts }) => {

    if (posts === null) return;

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"

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