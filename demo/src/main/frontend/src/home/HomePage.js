import React from 'react'
import PostsDisplay from './posts/PostsDisplay'

const HomePage = () => {
  return (
      <div className="maincontainer">
        <div className="container">
              <div className="profile-page tx-13">
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