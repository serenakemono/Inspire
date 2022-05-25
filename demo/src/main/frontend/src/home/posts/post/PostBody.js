import React from 'react'

const PostBody = ({post}) => {
  return (
    <div className="card-body">
        <p className="mb-3 tx-14">{post.text}</p>
        <img className="img-fluid" src={post.img} alt="" />
    </div>
  )
}

export default PostBody