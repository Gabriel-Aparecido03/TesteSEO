import React from 'react'

import '../style/pages/Home.css'

import vetorImg from '../assets/images/background.png'

import { Header } from '../components/Header.jsx'

export function Home() {
    return (
        <div id="Home">
            <Header/>
            <main>
                <div className="principal-container">
                    <div className="intro-text-main-container">
                        <h1 className='text-title-main'>Agora criar site se tornou facíl e rápido.</h1>
                        <h3 className='text-sub-main-container'>Ferramentas práticas e inteligentes,como arrasta e solta.</h3>
                    </div>
                    <div className="principal-image-container">
                        <img className='image-background' src={vetorImg} alt="pessoas vendo a melhor forma de fazer um site de um jeito simples e rápido." />
                    </div>
                    <div className="button-main-know-more-container">
                        <button className="button-main-know-more">Saiba mais</button>
                    </div>
                </div>
            </main>
        </div>
    )
}