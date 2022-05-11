import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PostPage = ({ posts }) => {
    const { id } = useParams();
    const post =
        posts.find(post => (post.id).toString() === id);

    return (
        <main>
            <article>
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p>{post.datetime}</p>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post not found</h2>
                        <p>
                            <Link to='/home'>Visit our homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage