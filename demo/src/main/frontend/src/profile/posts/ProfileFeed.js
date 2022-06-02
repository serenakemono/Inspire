import React from 'react'
import ProfilePost from './post/ProfilePost'

const ProfileFeed = ({posts, userImg}) => {
  return (
    <>{posts.map((post) => (
        <ProfilePost key={post.id} post={post} userImg={userImg} />
    ))}</>
  )
}

export default ProfileFeed