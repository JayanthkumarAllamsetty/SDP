import React from 'react';
import './items.css';
import CardItem from './items';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Profits of the top 5 crops in India!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/black_gram.jpg'
              className="Wheat"
              text='Find the black gram profit'
           
              path='/Wheat'
            />
            <CardItem
              src='images/cotton.png'
              text='Find the profit of the Cotton'
              
              path='/Cotton'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/paddy.png'
              text='Find the profit the rice'
              
              path='/Rice'
            />
            <CardItem
              src='images/Sugercane.jpg'
              text='Find the profit of the Sugar Cane'
              
              path='/SugerCane'
            />
            <CardItem
              src='images/wheat.png'
              text='Find the profit of the Wheat'
            
              path='/Wheat'
            />
             <CardItem
              src='images/Weather.png'
              text='Weather API'
            
              path="/weather"
            />
             
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
