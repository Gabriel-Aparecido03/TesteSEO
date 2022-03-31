import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { BiMenu } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

import '../style/components/Header.css'

import logo from '../assets/images/logo-remove.png'

export function Header() {
    
    const [icon,setIcon] = useState(<BiMenu/>)
    const [styleMenu,setStyleMenu] = useState("none")
    const [isOpenMenu,setIsOpenMenu] = useState(false)

    useEffect(()=>{
        if(window.innerWidth >= 1050 ) {
            setStyleMenu('block')
        }
    },)

    const navigate = useNavigate()

    const handleClickMenu = ()=> {
        
        if(isOpenMenu === false) {
            setStyleMenu("block")
            setIcon(<IoClose/>)
            setIsOpenMenu(!isOpenMenu)
        }
        else {
            setStyleMenu("none")
            setIcon(<BiMenu/>)
            setIsOpenMenu(!isOpenMenu)
        }
    }

    window.addEventListener('resize',()=>{
        if(window.innerWidth >= 1050) {
            setStyleMenu('block')
        }
        else {
            setStyleMenu('none')
        }
    })

    return (
        <header className='header-container'>
            <div className="image-container-header">
                <img className='image-logo-header' src={logo} alt="logo da maker.site" />
            </div>
            <div className="nav-options-header-container"style={{display:`${styleMenu}`}} >
                <ul className='list-header-container'>
                    <li className='text-nav' onClick={()=>{navigate('/')}}>Início</li>
                    <li className='text-nav'  onClick={()=>{navigate('/how-works')}}>Como funciona</li>
                    <li className='text-nav'  onClick={()=>{navigate('/pricing')}}>Preços</li>
                    
                </ul>          
            </div>
            <div className="button-container-header">
                <button onClick={()=>{navigate('/how-works')}} className='button-header'>Saiba mais</button>
            </div>
            <div className="icon-menu-container">
                <button className='button-open-menu' onClick={handleClickMenu}>{icon}</button>
            </div>
        </header>
    )
}