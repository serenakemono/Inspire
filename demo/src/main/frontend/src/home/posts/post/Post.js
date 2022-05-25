import React from 'react'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

const Post = ({post}) => {

  return (
    <div className="col-md-12 grid-margin">
            <div className="card rounded">
                <PostHeader post={post} />
                <PostBody post={post} />
                <PostFooter post={post} />
            </div>
        </div>
  )
}

export default Post