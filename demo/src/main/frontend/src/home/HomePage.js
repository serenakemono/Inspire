import React from 'react'
import PostsDisplay from './posts/PostsDisplay'
import AuthService from '../authentication/AuthService'

const HomePage = () => {

    const currentUser = AuthService.getCurrUser();

    if (!currentUser) return window.location.href = '/login';

    return (
        <div className="maincontainer">
            <div className="container">
                <div className="profile-page tx-13">
                    <div style={{height: "80px"}}></div>
                    <div className="profile-page-body row">
                        <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                            
                        </div>
                    
                        <div className="col-md-8 col-xl-6 middle-wrapper">
                            <PostsDisplay />
                        </div>
                    
                        <div className="d-none d-xl-block col-xl-3 right-wrapper">
                            <div className="row">
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default HomePage