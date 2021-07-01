import React from 'react'
import CardBottom from './CardBottom';

const Card = ({ card }) => {
    const { top_section, bottom_section } = card
    return (
        <div className='main'>
            <section className='top' style={{ backgroundImage: `url(${top_section.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* <img className='card-img' src={testimg} alt="Avatar" /> */}
                <div className='top-options'>
                    <img className='back-option' src='/images/back.png' alt='back' />
                    <img className='settings-option' src='/images/setting.png' alt='setting' />
                </div>
                <div className='top-text'>
                    <span id='text1'>{top_section.city}</span>
                    <span id='text2'>{top_section.description}</span>
                </div>
                <div className='card-degree-text'>
                    {top_section.temperature}
                    <span className='degree-symbol'>&deg;</span>
                </div>
            </section>
            <section className='bottom'>
                <CardBottom cardbottom={bottom_section} />
            </section>
        </div >
    )
}

export default Card