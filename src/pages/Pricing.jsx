import React from 'react'

import { Header } from '../components/Header'

import '../style/pages/Pricing.css'

export function Pricing() {
    return (
        <div id="Pricing">
            <Header/>
            <div className="main-content-pricing">
                <div className="title-pricing-container">
                    <h1 className='title-pricing'>Comece com o site.marker de graça.</h1>
                    <h2 className='sub-title-pricing'>Não precisa informar cartão de crédito.</h2>
                </div>
                <div className="grid-pricing-container">
                    <div className="princing-container">
                        <div className="intro-pricing-container">
                            <h1 className='title-plan'>Básico</h1>
                            <p className='pricing-plan'>$0 <span className='mounth'>mounth</span></p>
                        </div>
                        <div className="list-of-content-pricing-container">
                            <ul className='list-spef'>
                                <li className='spef-text'>Domínio Personalizado.</li>
                                <li className="spef-text">Primeiro mês de domínio grátis.</li>
                                <li className="spef-text">Com anúncios Site.maker .</li>
                                <li className="spef-text">5gb de espaço de armazenamento .</li>
                                <li className="spef-text">5 minutos de vídeo .</li>
                            </ul>
                        </div>
                    </div>
                    <div className="princing-container">
                    <div className="intro-pricing-container">
                            <h1 className='title-plan'>Intermediário</h1>
                            <p className='pricing-plan'>$15 <span className='mounth'>mounth</span></p>
                        </div>
                        <div className="list-of-content-pricing-container">
                            <ul className='list-spef'>
                                <li className='spef-text'>Domínio Personalizado.</li>
                                <li className="spef-text">Primeiro mês de domínio grátis.</li>
                                <li className="spef-text">Sem anúncios Site.maker .</li>
                                <li className="spef-text">10gb de espaço de armazenamento .</li>
                                <li className="spef-text">15 minutos de vídeo .</li>
                                <li className="spef-text">Logo Personalizado .</li>
                                <li className="spef-text">Usar bibliotecas de animação .</li>
                                <li className="spef-text">5 minutos de vídeo .</li>
                                <li className="spef-text">Estatísticas para visitantes .</li>
                            </ul>
                        </div>
                    </div>
                    <div className="princing-container">
                        <div className="intro-pricing-container">
                            <h1 className='title-plan'>Completo</h1>
                            <p className='pricing-plan'>$50 <span className='mounth'>mounth</span></p>
                        </div>
                        <div className="list-of-content-pricing-container">
                            <ul className='list-spef'>
                                <li className='spef-text'>Domínio Personalizado.</li>
                                <li className="spef-text">Primeiro mês de domínio grátis.</li>
                                <li className="spef-text">Sem anúncios Site.maker .</li>
                                <li className="spef-text">20gb de espaço de armazenamento .</li>
                                <li className="spef-text">55 minutos de vídeo .</li>
                                <li className="spef-text">Logo Personalizado .</li>
                                <li className="spef-text">Usar bibliotecas de animação .</li>
                                <li className="spef-text">Estatísticas para visitantes .</li>
                                <li className="spef-text">Um desenvolver gerenciador .</li>
                                <li className="spef-text">Métodos de pagamentos .</li>
                                <li className="spef-text">Aréa para criação de um chatbot .</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}