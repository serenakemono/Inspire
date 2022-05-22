import React from 'react'
import Feed from './Feed'

const PostsDisplay = ({ posts }) => {
  return (
    <main className="content">
      {posts.length ? (
        <Feed posts={ posts } />
      ) : (
          <p>No posts to display.</p>
      )}
    </main>
  )
}

export default PostsDisplay