import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { Stack } from '@mui/material'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import axios from 'axios';

const PostFooter = ({ post }) => {

    const [username, setUsername] = useState(null);
    const [liked, setLiked] = useState(false);
    
    useEffect(() => {
        console.log('liked: ' + liked);
        const name = JSON.parse(localStorage.getItem("info")).username;
        setUsername(name);
        if (post.likers.includes(name)) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [])

    const handleLike = () => {
        const like = async () => {
            const res = await axios.put(`http://localhost:8080/api/v1/${username}/like/post/${post.id}`);
            console.log(res);
            setLiked(true);
        }

        like().catch((error) => {
            console.log(error);
        })
    }

    const handleUnlike = () => {
        const unlike = async () => {
            const res = await axios.put(`http://localhost:8080/api/v1/${username}/unlike/post/${post.id}`);
            console.log(res);
            setLiked(false);
        }

        unlike().catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="card-footer">
            <Stack direction="row" spacing={2}>
                <Button
                    style={{ textTransform: 'none' }}
                    startIcon={liked ? <FavoriteIcon style={{color: "#e51b23"}} /> : <FavoriteBorderRoundedIcon />}
                    onClick={liked ? ()=>handleUnlike() : ()=>handleLike()}
                    className="text-muted"
                >
                    Like
                </Button>
                <Button
                    style={{ textTransform: 'none' }}
                    startIcon={<ChatOutlinedIcon />}
                    className="text-muted"
                >
                    Comment
                </Button>
                <Button
                    style={{ textTransform: 'none' }}
                    startIcon={<StarRoundedIcon />}
                    className="text-muted"
                >
                    Favorite
                </Button>
                <Button
                    style={{ textTransform: 'none' }}
                    startIcon={<IosShareRoundedIcon />}
                    className="text-muted"
                >
                    Share
                </Button>
            </Stack>
        </div>
    )
}

export default PostFooter