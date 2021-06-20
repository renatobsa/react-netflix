import React from 'react'
import { useAuth } from '../../providers/AuthProvider';
import './Header.css'

const Header = ({black}:any) => {
    const {userScreen,signed} = useAuth();

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src={signed ? userScreen.avatar : ''} alt="Usuario" />
                </a>
            </div>
        </header>
    )
}

export default Header
