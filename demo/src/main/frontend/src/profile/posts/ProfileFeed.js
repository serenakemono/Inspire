import React from 'react'
import ProfilePost from './post/ProfilePost'

const ProfileFeed = ({posts}) => {
  return (
    <>{posts.map((post) => (
        <ProfilePost key={post.id} post={post} />
    ))}</>
  )
}

export default ProfileFeed