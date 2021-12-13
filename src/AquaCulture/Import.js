import React from 'react';
import  '../components/items.css';
import CardItem from '../components/items';
// import { Search } from '@material-ui/icons';
import Search from './search';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Profits of the top 5 Fish in India!</h1>
      <Search/>
    </div>
  );
}

export default Cards;
