import React, { useEffect, useState } from 'react'

import { Box } from '@mui/system'
import { Button, makeStyles } from '@material-ui/core'
import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import axios from 'axios'

const UserRow = ({ username }) => {

    const GET_USER_INFO = 'http://localhost:8080/api/v1/user/' + username
    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
    
    const [user, setUser] = useState(null);
    const [currUsername, setCurrUsername] = useState('');
    const [hasFollowed, setHasFollowed] = useState(false);

    const useStyles = makeStyles(() => ({
        buttonContainer: {
            display: "flex",
            alignItems: "center"
        },
        buttons: {
            backgroundColor: "#f8c6c8",
            color: "#000",
            textTransform: 'none',
            width: "130px",
            borderRadius: '35rem',
            '&:hover': {
                backgroundColor: "#f8c6c8"
            }
        },
    }))
    const { buttonContainer, buttons } = useStyles();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(GET_USER_INFO);
            setUser(res.data);
        }
        fetchUser().catch(error => {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        if (user == null) return;
        const currUser = JSON.parse(localStorage.getItem("info")).username;
        setCurrUsername(currUser);
        if (user.followers.includes(currUser)) {
            setHasFollowed(true);
        }
    }, [user])

    const handleStartFollowing = () => {
        const follow = async () => {
            await axios.put(`http://localhost:8080/api/v1/${currUsername}/follow/${user.username}`);
        }
        follow().catch((error) => {
            console.log(error);
        })
        setHasFollowed(!hasFollowed);
    }

    const handleUnfollow = () => {
        const unfollow = async () => {
            await axios.put(`http://localhost:8080/api/v1/${currUsername}/unfollow/${user.username}`);
        }
        unfollow().catch((error) => {
            console.log(error);
        })
        setHasFollowed(!hasFollowed);
    }

    return (user != null &&
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "3.5rem"
    }}>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <img
                className="img-xs rounded-circle"
                src={userImg}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                    window.location.href = `http://localhost:3000/user/${user.username}`
                }}
        />
            <div style={{ marginLeft: "10px" }}>
                <div
                    style={{ fontSize: "17px", cursor: "pointer" }}
                    onClick={() => { window.location.href = `http://localhost:3000/user/${user.username}` }}
                >
                    {user.username}
                </div>
                <div className="text-muted" style={{ fontSize: "14px" }}>
                    {user.bio == null ? '' :
                        user.bio.length <= 50 ? user.bio : user.bio.substring(0, 50) + '...'}
                </div>
            </div>
        </div>
        
        <div className={buttonContainer}>
            <Button
                variant="contained"
                className={buttons}
                startIcon={hasFollowed ? <CheckCircleIcon /> : <AddBoxIcon />}
                onClick={hasFollowed ? () => handleUnfollow() : () => handleStartFollowing()}
            >
                {hasFollowed ? 'Following' : 'Follow'}
            </Button>
        </div>
    </div>)
}

export default UserRow