import React from 'react'
import ProfilePostBody from './ProfilePostBody'
import ProfilePostFooter from './ProfilePostFooter'
import ProfilePostHeader from './ProfilePostHeader'

const ProfilePost = ({post}) => {

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