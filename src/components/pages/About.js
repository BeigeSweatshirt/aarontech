import React from 'react'
import '../css/Cards.css';
import '../css/About.css'
import CardItems from '../widgets/CardItems'
import shiva from '../assets/Shiva_selfie.JPG'
import jacob from '../assets/jacob.jpg'
import matt from '../assets/matt.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Team</h1>
      <h2 >AaronTech is a technology repair company that specializes in Windows computer repairs. </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={shiva}
              title="Shiva Shrestha"
              text="Born in Nepal. Junior" />
            <CardItems
              src={jacob}
              title="Jacob Fisher"
              text='Website dev. CS Junior' />
            <CardItems
              src={matt}
              title="Matt Holford"
              text="Android software dev and Junior at CWU" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
