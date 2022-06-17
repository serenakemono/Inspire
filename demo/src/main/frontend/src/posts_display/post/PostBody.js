import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../post_creation/assets/PostCreation.css'
import Button from '@material-ui/core/Button'

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
            <div
              className="text"
              onClick={()=>{window.location.href = `/feed/hashtag/${tag.substring(1)}`}}
            >
              {tag}
            </div>
          </div>
        ))}
      </div>}
      
    </div>
  )
}

export default PostBody