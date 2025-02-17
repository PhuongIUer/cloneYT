import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Tag from '../../Components/Tag/Tag'

const Home = ({sidebar}) => {
  return (
    <div className='home'>
        <Sidebar sidebar={sidebar}/>
        <div className= {`${sidebar?"container":"large-container"}`} >
        <Tag/>
        <Feed/>
        </div>
        
    </div>
  )
}

export default Home