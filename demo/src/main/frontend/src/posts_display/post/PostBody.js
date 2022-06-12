import React from 'react'
import '../../post_creation/PostCreation.css'

const PostBody = ({ post }) => {

  const tags = post.tags;

  return (
    <div className="card-body">
      <p className="mb-3 tx-14">{post.text}</p>
      <div style={{display: "flex", justifyContent: "center"}}>
        <img
          className="img-fluid"
          src={`data:image/jpeg;base64,${post.image}`}
          alt=""
        />
      </div>
      {(tags.length !== 0) && <div>
        {tags.map((tag, index) => (
            <div className="tag-item-in-post" style={{marginRight: "5px"}} key={index}>
                <span className="text">{tag}</span>
            </div>
        ))}
      </div>}
      
    </div>
  )
}

export default PostBody