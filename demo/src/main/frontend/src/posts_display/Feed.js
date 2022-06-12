import React from 'react'
import Post from './post/Post'

const Feed = ({posts, userImg}) => {
  return (
    <>{posts.map((post) => (
        <Post key={post.timestamp} post={post} userImg={userImg} />
    ))}</>
  )
}

export default Feed