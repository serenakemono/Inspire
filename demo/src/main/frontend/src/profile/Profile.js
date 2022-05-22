import React, { useRef } from 'react'
import PostsDisplay from '../home/PostsDisplay'

const Profile = ({posts}) => {

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"

  return (
    <div className="content">
        <div style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "70px",
              borderBottom: "1px solid grey"
        }}>
        <div>
            <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                src={userImg}
            />
            </div>
                <div>
                    <h4>Username</h4>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "108%"
                    }}>
                    <h6>10 posts</h6>
                    <h6>10 followers</h6>
                    <h6>10 following</h6>
                </div>
            </div>
        </div>
        <div>
              <PostsDisplay posts={posts}/>
        </div>
    </div>
  )
}

export default Profile