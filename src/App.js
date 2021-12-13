import React from 'react';
import Header from './components/header';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Commodity from './components/pages/Commodity';
import Login from './components/pages/Login';
import SignUpPage from './components/pages/SignUp';
import Visual from './components/pages/Visual';
import Char from './Char';
import Char2 from './Char2';
import Char3 from './Char3';
import Char5 from './Char5';
import Char4 from './Char4';
import Export from './AquaCulture/Export'
import Import from './AquaCulture/Import'
import API from './components/API'


function App() {
  return (
    <>
    
      <Router>
      <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Commodity' component={Commodity} />
          <Route path='/Visual'  component={Visual}/>
          <Route path='/register' component={SignUpPage} />
          <Route path='/Login' component={ Login} />
      
         
        </Switch>
        <Route path='/Wheat' component={Char}/>
        <Route path='/Paddy' component={Char2}/>
        <Route  path="/Rice" component={Char3}/>
        <Route path="/SugerCane" component={Char4}/>
        <Route path="/Cotton" component={Char5}/>
        <Route path='/export' component={Export}/>  
        <Route path="/import" component={Import}/>
        <Route path="/Weather" component={API}/>
      
      </Router>
    </>
  );
}

export default App;
