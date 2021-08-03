import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/pageOne'
import Objectives from './pages/pageTwo'
import Activities from './pages/pageThree'
import Membership from './pages/pageFour'
import Organization from './pages/pageFive'
import Imprint from './pages/pageSix'
import History from './pages/pageSeven'
import Contact from './pages/pageEight'

export default function App (){

    return (       
        <div className = "cont"> 
          <Activities/>         
        </div>       
    );  
}


