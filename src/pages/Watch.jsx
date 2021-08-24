import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './Watch.scss'
import video from '../videos/video-1.mp4'
import { NavLink } from 'react-router-dom'
const Watch = () => {
     return (
        <div className='watch'>
            <div className="back">
            <NavLink exact to ='/'  className='navlink'> 
                <ArrowBackOutlined />
                Home
            </NavLink>
            </div>
            <video src={video} className="video" autoPlay={true} progress={true} controls></video>
        </div>
    )
}

export default Watch
