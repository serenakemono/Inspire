import React from 'react'
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { IconButton } from '@material-ui/core';

const ProfileSuggestions = () => {
  return (
    <div className="col-md-12 grid-margin">
        <div className="card rounded">
            <div className="card-body">
                <h6 className="card-title">suggestions for you</h6>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://secureservercdn.net/198.71.233.179/yke.2c1.myftpupload.com/wp-content/uploads/2018/03/Min-An4-600x357.jpeg" alt="" />
                        <div className="ml-2">
                            <p>Amy</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                      </div>
                      <IconButton>
                          <PersonAddRoundedIcon />
                      </IconButton>
                </div>
                {/* <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="" />
                        <div className="ml-2">
                            <p>Johnny</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div> */}
                {/* <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="" />
                        <div className="ml-2">
                            <p>Johnny</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div> */}
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://imageio.forbes.com/specials-images/imageserve/60499af394ecc49d30c586e5/Happy-smiling-African-American-woman/960x0.jpg?format=jpg&width=960" alt="" />
                        <div className="ml-2">
                            <p>Sansa</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://thumbs.dreamstime.com/b/smiling-black-man-4725389.jpg" alt="" />
                        <div className="ml-2">
                            <p>Eric</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://rudranibanikmd.com/wp-content/uploads/2017/02/Carole.jpg" alt="" />
                        <div className="ml-2">
                            <p>Margret</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileSuggestions