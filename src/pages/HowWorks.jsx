import React from 'react';

import '../style/pages/HowWorks.css'
import { Header } from '../components/Header'

import mailVerifited from '../assets/images/mail-verif.png'
import mailCheck from '../assets/images/mail.png'
import congrats from '../assets/images/congrats.png'
import ticket from '../assets/images/ticket.png'

export function HowWorks() {
    return (
        <div id="HowWorks">
            <Header/>
            <div className="text-container-how-works">
                <h1 className='title-how-works'>Crie seu próprio site,com ferramentas de arrasta e solta.</h1>
                <h3 className='sub-title-works'>Siga os 4 abaixo, e coloque seu site em outro patamar.</h3>
            </div>
            <div className="grid-container-how-works">
                <div className="container-step">
                    <div className="image-container-step">
                        <div className="image-step">
                            <img className='image-step-content' src={ticket} alt="um ingresso representando um primeiro contato com o site." />
                        </div>
                    </div>
                    <div className="text-container-step">
                        <h1 className='text-title-step' >Passo 1:</h1>
                        <h3 className='sub-title-step' >Crie uma conta.</h3>
                    </div>
                </div>
                <div className="container-step">
                    <div className="image-container-step">
                        <div className="image-step">
                            <img className='image-step-content' src={mailCheck} alt="carta representando o envio de um e-mail." />
                        </div>
                    </div>
                    <div className="text-container-step">
                        <h1 className='text-title-step' >Passo 2:</h1>
                        <h3 className='sub-title-step' >Informe seu e-mail.</h3>
                    </div>
                </div>
                <div className="container-step">
                    <div className="image-container-step">
                        <div className="image-step">
                            <img className='image-step-content' src={mailVerifited} alt="carta recebida representando um e-mail verificado pelo usuário." />
                        </div>
                    </div>
                    <div className="text-container-step">
                        <h1 className='text-title-step' >Passo 3:</h1>
                        <h3 className='sub-title-step' >Verifique seu e-mail.</h3>
                    </div>
                    
                </div>
                <div className="container-step">
                    <div className="image-container-step">
                        <div className="image-step">
                            <img className='image-step-content' src={congrats} alt="confetes representando festa,com um simbologia de festa,pois agora pode usar a melhor ferramenta para construir um site." />
                        </div>
                    </div>
                    <div className="text-container-step">
                        <h1 className='text-title-step' >Passo 4:</h1>
                        <h3 className='sub-title-step' >Agora é fazer o site.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}