import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import axios from 'axios';

const TagCard = ({ tag, hasFollowed, setHasFollowed }) => {

    if (tag == null) return;

    const TAG_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb6yGgxKcIc7RPb4EIzSCM8_dt6f5JO5Atg&usqp=CAU"

    const useStyles = makeStyles(() => ({
        tagImg: {
            width: "75px",
            height: "75px",
            borderRadius: "50% !important",
            marginRight: "15px",
            marginLeft: "5px"
        },
        tagName: {
            fontSize: "25px",
            fontWeight: "700"
        },
        followerInfo: {
            fontSize: "15px",
            fontWeight: "400",
            marginBottom: "5px"
        },
        followButton: {
            backgroundColor: "#f8c6c8",
            color: "#000",
            textTransform: 'none',
            borderRadius: '35rem',
            "&:hover": {
                backgroundColor: "#e51b23",
                color: "#fff",
            }
        },
    }))
    const { tagImg, tagName, followerInfo, followButton } = useStyles();


    const [username, setUsername] = useState('');

    const FOLLOW_TAG_URL = `http://localhost:8080/api/v1/${username}/follow/tag/${tag.tagname.substring(1)}`;
    const UNFOLLOW_TAG_URL = `http://localhost:8080/api/v1/${username}/unfollow/tag/${tag.tagname.substring(1)}`;

    useEffect(() => {
        setUsername(JSON.parse(localStorage.getItem('info')).username);
    }, [])

    const handleFollow = () => {
        const follow = async () => {
            const res = await axios.put(FOLLOW_TAG_URL);
            setHasFollowed(true);
        }
        follow().catch(error => {
            console.log(error);
        })
        
    }

    const handleUnfollow = () => {
        const unfollow = async () => {
            const res = await axios.put(UNFOLLOW_TAG_URL);
            setHasFollowed(false);
        }
        unfollow().catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="col-md-12 grid-margin">
            <div className="card rounded">
                <div
                    className="card-body"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <div>
                            <img className={tagImg} src={TAG_IMG} alt="tag" />
                        </div>
                        <div>
                            <div className={tagName}>{tag.tagname}</div>
                            <div className={followerInfo}>
                                {tag.tagFollowers.length} {tag.tagFollowers.length > 1 ? 'followers' : 'follower'}
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <Button
                            variant="contained"
                            className={followButton}
                            startIcon={hasFollowed ? <BookmarkAddedIcon /> : <BookmarkBorderIcon /> }
                            onClick={hasFollowed ? handleUnfollow : handleFollow}
                        >
                            {hasFollowed ? 'Following' : 'Follow'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagCard