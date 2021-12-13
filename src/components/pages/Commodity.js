import React from 'react';
import '../items.css';
import CardItem from '../items';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the import and export quantity</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/fishimport.jpg'
              className="Wheat"
              text='Fish import from the ColdStorage'
              path="/import"
          
            />
            <CardItem
              src='images/fishexport.jpg'
              text='Fish export from the ColdStorage'
              path="/export"
         
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
