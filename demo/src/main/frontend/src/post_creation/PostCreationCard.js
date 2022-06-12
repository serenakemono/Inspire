import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import '../App.css'
import './PostCreation.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ForumIcon from '@mui/icons-material/Forum';
import FeedIcon from '@mui/icons-material/Feed';

const PostCreationCard = ({
    userImg,
    setPopup,
    windowStates,
    setWindowState
}) => {

    const handleCreate = () => {
        setPopup(true);
        setWindowState(windowStates.create_post);
    }

    const handleAddPhoto = () => {
        setPopup(true);
        setWindowState(windowStates.add_photo)
    }

    return (
        <div className="col-md-12 grid-margin">
        <div className="card rounded">
            <div className="card-body">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "15px"
                }}>
                    <img className="img-xs rounded-circle" src={userImg} alt="" />
                    <button className="btn-create-post" onClick={handleCreate}>
                        Feeling inspired today?
                    </button>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <Button
                        startIcon={<InsertPhotoIcon style={{color:"#EB474D"}}/>}
                            style={{ textTransform: "none", fontSize: "16px", color: "#727272" }}
                            onClick={handleAddPhoto}
                    >
                    Photo
                    </Button>
                    <Button
                        startIcon={<OndemandVideoIcon style={{color:"#F6BD60"}} />}
                        style={{textTransform: "none", fontSize: "16px", color: "#727272"}}
                    >
                        Video
                    </Button>
                    <Button
                        startIcon={<ForumIcon style={{ color: "#649A47"}}/>}
                        style={{textTransform: "none", fontSize: "16px", color: "#727272"}}
                    >
                        Discussion
                    </Button>
                    <Button
                        startIcon={<FeedIcon style={{color: "#00AACC"}} />}
                        style={{textTransform: "none", fontSize: "16px", color: "#727272"}}
                    >
                        Article
                    </Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PostCreationCard