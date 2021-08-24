import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    window.onscroll =() => {
        setIsScroll(window.pageYOffset === 0 ? false:true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScroll? 'navbar scrolled': 'navbar'}>
            <div className="container">
                <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                     alt=""
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>Homepage</span>
                <span>My list</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>Kids</span>
                    <Notifications className='icon'/>
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <NavLink exact to ='/register' className='navlink'>
                            <span className='log-out'>Logout</span>
                            </NavLink>
                        </div>
                    </div>
                    
                </div>
              
            </div>
        </div>
    )
}

export default Navbar
