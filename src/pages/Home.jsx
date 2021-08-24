import { AcUnit } from '@material-ui/icons'
import React from 'react'
import Featured from '../components/Featured'
import List from '../components/List'
import Navbar from '../components/Navbar'
import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
