import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
      <article>
          <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
              <h6>{post.datetime}</h6>
          </Link>
          <p>{
              (post.body).length <= 25
                  ? post.body
                  : `${(post.body).slice(0, 25)}...`
          }</p>
      </article>
  )
}

export default Post