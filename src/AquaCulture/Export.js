import React from 'react'
import '../components/items.css'
import CardItem from '../components/items';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './search';
export default function Export() {
    return (
        <div>
            <div className='cards'>
      <h1>Check out Profits of the top 5 AquaCulture in India!</h1>
      <Search/>
      </div>
        </div>
    )
}
