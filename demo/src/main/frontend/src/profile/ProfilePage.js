import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button"
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import ProfilePostsDisplay from './posts/ProfilePostsDisplay';



class ProfilePage extends React.Component {
  
 
    render() {
        const username = "Serena"
        const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
        const bio = "bio"
        const email = "abc@gmail.com"
        
    return (
     
        <div className="maincontainer">
        <div className="container">
            <div className="profile-page tx-13">
                <div className="row">
                    <div className="col-12 grid-margin">
                    <ProfileHeader userImg ={userImg} username={username} bio={bio} />
                    </div>
                </div>
                <div className="profile-body row">
                    <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                        <ProfileCard bio={bio} email={email} />
                    </div>
                  
                    <div className="col-md-8 col-xl-6 middle-wrapper">
                        <ProfilePostsDisplay />
                    </div>
                  
                    <div className="d-none d-xl-block col-xl-3 right-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="card rounded">
                                    <div className="card-body">
                                        <h6 className="card-title">latest photos</h6>
                                        <div className="latest-photos">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <figure>
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar1.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure>
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure>
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure>
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar4.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure>
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar5.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure>
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure className="mb-0">
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar7.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure className="mb-0">
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar8.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-4">
                                                    <figure className="mb-0">
                                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar9.png" alt=""/>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                            <button className="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png" alt="" />
                                                <div className="ml-2">
                                                    <p>jassa</p>
                                                    <p className="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar4.png" alt="" />
                                                <div className="ml-2">
                                                    <p>jassa</p>
                                                    <p className="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar5.png" alt="" />
                                                <div className="ml-2">
                                                    <p>jassa</p>
                                                    <p className="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                <div className="ml-2">
                                                    <p>jassa</p>
                                                    <p className="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center hover-pointer">
                                                <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar7.png" alt="" />
                                                <div className="ml-2">
                                                    <p>jassa</p>
                                                    <p className="tx-11 text-muted">12 Mutual Friends</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </button>
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
            </div>
          </div> 
             
       
     
      
)
};
}

export default ProfilePage;