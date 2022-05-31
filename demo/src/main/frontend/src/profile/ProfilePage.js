import React, {useEffect, useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button"
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import ProfilePostsDisplay from './posts/ProfilePostsDisplay';
import ProfileLatestPics from './ProfileLatestPics';
import ProfileSuggestions from './ProfileSuggestions';
import AuthService from '../authentication/AuthService';
import axios from 'axios'

const ProfilePage = () => {

    const currentUser = AuthService.getCurrUser();
    const token = currentUser.token;

    const GET_USER_INFO_URL
        = 'http://localhost:8080/api/v1/auth/userinfo'
    
    const defaultUser = {
        username: "unknown",
        bio: "unknown",
        email: "unknown",
    }

    const [user, setUser] = useState(defaultUser);

    useEffect(() => {
        axios.get(GET_USER_INFO_URL,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                const newUser = {
                    username: res.data.username,
                    bio: res.data.bio,
                    email: res.data.email,
                }
                setUser(newUser);
            }).catch((error) => {
                console.log(error);
            }
        )
    }, []);

    const userImg = "https://i.pinimg.com/736x/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
    
    if (!currentUser) return window.location.href = '/login';

    const handleEditProfile = () => {
        console.log('editing');
        console.log(currentUser.token);
    }

    return (
        <div className="maincontainer">
            <div className="container">
                <div className="profile-page tx-13">
                    <div className="row">
                        <div className="col-12 grid-margin">
                            <ProfileHeader
                                userImg={userImg}
                                user={user}
                                handleEditProfile={handleEditProfile}
                            />
                        </div>
                    </div>
                    <div className="profile-body row">
                        <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                            <ProfileCard user={user} />
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