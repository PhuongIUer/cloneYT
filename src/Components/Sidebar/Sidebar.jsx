import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png' 
import meow from '../../assets/logo/meow.png' 
import cr7 from '../../assets/logo/cr7.png' 
import beast from '../../assets/logo/beast.png' 
import messi from '../../assets/logo/messi.png' 
import pewpew from '../../assets/logo/pewpew.png'
import subscriprion from '../../assets/subscriprion.png' 
import short from '../../assets/short.png' 
import vtv24 from '../../assets/logo/vtv24.png'
import cdt from '../../assets/logo/cdt.jpg'
import kenh14 from '../../assets/logo/kenh14.jpg'
import cdw from '../../assets/logo/cdw.jpg'
import cfl from '../../assets/logo/cfl.jpg'
import vnn from '../../assets/logo/vnn.jpg'
const Sidebar = ({sidebar}) => {
  return (
    <div className={`${sidebar?"sidebar":"small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className='side-link'>
          <img src={home} alt="" /><p>Trang chủ</p>
        </div>
        <div className='side-link'>
          <img src={short} alt="" /> <p>Short</p>
        </div>
        <div className='side-link'>
          <img src={subscriprion} alt="" /> <p>Kênh đăng ký</p>
        </div>
      </div>

      <hr className="separator" />

      <div className='subscribed-list'>
      <h3>Kênh đăng ký</h3>
        <div className='side-link'>
          <img src={vtv24} alt="" /> <p>VTV24</p>
        </div>
        <div className='side-link'>
          <img src={vnn} alt="" /> <p>Vietnamnet Online</p>
        </div>
        <div className='side-link'>
          <img src={kenh14} alt="" /> <p>KENH14 TV</p>
        </div>
        <div className='side-link'>
          <img src={cdw} alt="" /> <p>CD TEAM - WHY</p>
        </div>
        <div className='side-link'>
          <img src={cfl} alt="" /> <p>CAFELAND TV</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
