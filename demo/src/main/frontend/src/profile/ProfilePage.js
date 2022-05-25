import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button"
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';



class ProfilePage extends React.Component {
  
 
    render() {
        const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
        const bio = "bio"
        const email = "abc@gmail.com"
        
    return (
     
        <div className="maincontainer">
        <div className="container">
            <div className="profile-page tx-13">
                <div className="row">
                    <div className="col-12 grid-margin">
                    <ProfileHeader userImg ={userImg} bio={bio} />
                    </div>
                </div>
                <div className="profile-body row">
                   
                    <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                        <ProfileCard bio={bio} email={email} />
                    </div>
                  
                    <div className="col-md-8 col-xl-6 middle-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="card rounded">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                <div className="ml-2">
                                                    <p>Jassa</p>
                                                    <p className="tx-11 text-muted">1 min ago</p>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal icon-lg pb-3px">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-meh icon-sm mr-2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="8" y1="15" x2="16" y2="15"></line>
                                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                        </svg> <span className="">Unfollow</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-right-up icon-sm mr-2">
                                                            <polyline points="10 9 15 4 20 9"></polyline>
                                                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                        </svg> <span className="">Go to post</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2 icon-sm mr-2">
                                                            <circle cx="18" cy="5" r="3"></circle>
                                                            <circle cx="6" cy="12" r="3"></circle>
                                                            <circle cx="18" cy="19" r="3"></circle>
                                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                        </svg> <span className="">Share</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy icon-sm mr-2">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg> <span className="">Copy link</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="mb-3 tx-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
                                        <img className="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex post-actions">
                                            <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart icon-md">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <p className="d-none d-md-block ml-2">Like</p>
                                            </a>
                                            <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square icon-md">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                <p className="d-none d-md-block ml-2">Comment</p>
                                            </a>
                                            <a href="javascript:;" className="d-flex align-items-center text-muted">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share icon-md">
                                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                                    <polyline points="16 6 12 2 8 6"></polyline>
                                                    <line x1="12" y1="2" x2="12" y2="15"></line>
                                                </svg>
                                                <p className="d-none d-md-block ml-2">Share</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card rounded">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="img-xs rounded-circle" src="https://therichpost.com/wp-content/uploads/2021/03/avatar6.png" alt="" />
                                                <div className="ml-2">
                                                    <p>jassa</p>
                                                    <p className="tx-11 text-muted">5 min ago</p>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn p-0" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal icon-lg pb-3px">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-meh icon-sm mr-2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <line x1="8" y1="15" x2="16" y2="15"></line>
                                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                        </svg> <span className="">Unfollow</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-right-up icon-sm mr-2">
                                                            <polyline points="10 9 15 4 20 9"></polyline>
                                                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                        </svg> <span className="">Go to post</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2 icon-sm mr-2">
                                                            <circle cx="18" cy="5" r="3"></circle>
                                                            <circle cx="6" cy="12" r="3"></circle>
                                                            <circle cx="18" cy="19" r="3"></circle>
                                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                        </svg> <span className="">Share</span></a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy icon-sm mr-2">
                                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                        </svg> <span className="">Copy link</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="mb-3 tx-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                       
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex post-actions">
                                            <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart icon-md">
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <p className="d-none d-md-block ml-2">Like</p>
                                            </a>
                                            <a href="javascript:;" className="d-flex align-items-center text-muted mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square icon-md">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                <p className="d-none d-md-block ml-2">Comment</p>
                                            </a>
                                            <a href="javascript:;" className="d-flex align-items-center text-muted">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share icon-md">
                                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                                    <polyline points="16 6 12 2 8 6"></polyline>
                                                    <line x1="12" y1="2" x2="12" y2="15"></line>
                                                </svg>
                                                <p className="d-none d-md-block ml-2">Share</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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