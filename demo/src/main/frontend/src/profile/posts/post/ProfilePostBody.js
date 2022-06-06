import React from 'react'

const ProfilePostBody = ({post}) => {
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
      
    </div>
  )
}

export default ProfilePostBody