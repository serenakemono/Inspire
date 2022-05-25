import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button"
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import ProfilePostsDisplay from './posts/ProfilePostsDisplay';
import ProfileLatestPics from './ProfileLatestPics';
import ProfileSuggestions from './ProfileSuggestions';
import AuthService from '../authentication/AuthService';

const ProfilePage = () => {

    const currentUser = AuthService.getCurrUser();

    const username = "Serena"
    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
    const bio = "bio"
    const email = "abc@gmail.com"
    
    if (!currentUser) return window.location.href = '/login';

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
                                <ProfileLatestPics />
                                <ProfileSuggestions />
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ProfilePage

// class ProfilePage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
            
//         };
//     }

//     render() {

//         const { currentUser } = this.state;
        
        
        
        
//     return (
     
        
// )
// };
// }

// export default ProfilePage;