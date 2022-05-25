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
                        <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="" />
                        <div className="ml-2">
                            <p>jassa</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                      </div>
                      <IconButton>
                          <PersonAddRoundedIcon />
                      </IconButton>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png" alt="" />
                        <div className="ml-2">
                            <p>jassa</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar4.png" alt="" />
                        <div className="ml-2">
                            <p>jassa</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar5.png" alt="" />
                        <div className="ml-2">
                            <p>jassa</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                        <div className="ml-2">
                            <p>jassa</p>
                            <p className="tx-11 text-muted">12 Mutual Friends</p>
                        </div>
                    </div>
                    <IconButton>
                        <PersonAddRoundedIcon />
                    </IconButton>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center hover-pointer">
                        <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar7.png" alt="" />
                        <div className="ml-2">
                            <p>jassa</p>
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