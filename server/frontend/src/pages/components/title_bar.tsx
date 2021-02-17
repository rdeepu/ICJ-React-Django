import React from 'react';
import './title_bar.css';

export default function Title() {

    return(         
        <div className = "titlebox">

            <img className = "name_logo" src = {require('../images/web.jpg')} alt = "logo_one"/>
            <img className = "symbol_logo" src = {require('../images/logo.jpg')} alt = "logo_two"/>
                
        </div>
    )
}

