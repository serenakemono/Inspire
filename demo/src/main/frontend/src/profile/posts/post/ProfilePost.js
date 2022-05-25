import React from 'react'
import ProfilePostBody from './ProfilePostBody'
import ProfilePostFooter from './ProfilePostFooter'
import ProfilePostHeader from './ProfilePostHeader'

const ProfilePost = () => {

    const op = {
        username: "Serena",
        userImg: "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
    }
    const post = {
        op: op,
        text: "HAHAHAHAHA",
        img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    }

  return (
    <div className="col-md-12 grid-margin">
            <div className="card rounded">
                <ProfilePostHeader post={post} />
                <ProfilePostBody post={post} />
                <ProfilePostFooter post={post} />
            </div>
        </div>
  )
}

export default ProfilePost