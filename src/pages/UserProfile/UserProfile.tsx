
import React from 'react'
import './UserProfile.css'
import Users from '../../services/Users';
import { useAuth } from '../../providers/AuthProvider';
import { useHistory } from "react-router-dom";

const UserProfile = () => {
    
    const {setUserScreen} = useAuth();
    const history = useHistory();

    const handleScreenSelected = (userScreen) => {
        setUserScreen(userScreen);
        history.push("/home");
    }

    return (
        <>
        <header >
            <div className="header--logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Netflix" />
                </a>
            </div>
        </header>
        <div className="userprofile">
        <h1>Quem está assistindo?</h1>   
        <div className="userprofile--users">
            { Users.users.map((item,key)=>(
             <div key={key} className="userprofile--item" onClick={e => handleScreenSelected(item)}>
             <img src={item.avatar}  />
             <h2>{item.name}</h2>
             </div>

            ))}
        </div>
        </div>
       </>

    )
}

export default UserProfile
