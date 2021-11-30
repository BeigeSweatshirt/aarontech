import React from 'react'
import '../css/Cards.css';
import CardItems from '../CardItems'
import shiva from '../../photos/Shiva_selfie.JPG'
import jacob from '../../photos/jacob.jpg'
import matt from '../../photos/matt.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Team</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={shiva}
              title="Web Dev"
              text="Born in Nepal. Stack Overflow consultant." />
            <CardItems
              src={jacob}
              title="Web Dev"
              text='"Codes Websites"' />
            <CardItems
              src={matt}
              title="Web Dev"
              text="PhD in googling : )" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
