import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import Item from '@material-ui/core/ListItem';

const TagCard = ({ tagname }) => {

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
        }
    }))
    
    const { tagImg, tagName, followerInfo, followButton } = useStyles();

    return (
        <div className="col-md-12 grid-margin">
            <div className="card rounded">
                <div
                    className="card-body"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <div>
                        <img className={tagImg} src={TAG_IMG} alt="tag" />
                    </div>
                    <div>
                        <div className={tagName}>#{tagname}</div>
                        <div className={followerInfo}>199 followers</div>
                        <div>
                            <Button variant="contained" className={followButton}>
                                Follow
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagCard