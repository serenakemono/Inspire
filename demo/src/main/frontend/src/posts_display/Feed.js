import React from 'react'
import Post from './post/Post'

const Feed = ({posts}) => {
  return (
    <>{posts.map((post) => (
        <Post key={post.timestamp} post={post} />
    ))}</>
  )
}

export default Feed