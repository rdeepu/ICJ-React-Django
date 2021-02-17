import * as React from 'react'
import './pageEight.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';

export default function Contact(){

    let varENG:string,varDEU:string,grd_varENG:string,grd_varDEU:string

    const slctdLang = useSelector((state:langStatus)=>state.slctdLang.lang)
    const slctdFont = useSelector((state:langStatus)=>state.slctdFont.fnt)
  
   if (slctdLang === 'ENG'){
      varENG = 'block'
      varDEU='none'
      grd_varENG='grid'
      grd_varDEU='none'          
    } else {
      varENG = 'none'
      varDEU='block'
      grd_varDEU='grid'
      grd_varENG='none'      
   }  


    return(
        
        <div>
            <Title/>

            <Navbar  pg_Contact='4px solid red'/>

            <div className = 'txt_box'>

             <h1 style={{display:varENG}}>Contact</h1>
             <h1 style={{display:varDEU}}>Kontakt</h1>

             <Font varENG={varENG} varDEU={varDEU}/>
             
             
             <hr></hr>

                <p style = {{fontSize:slctdFont}}>
                    <h4 style={{display:varENG}}>Postal address</h4>
                    <h4 style={{display:varDEU}}>Postanschrift</h4>
                    Mrs. Myriam Woischnik-De Buck
                    <br></br>
                    <br></br>
                    Gästehaus, 
                    <br></br>
                    <br></br>
                    Münchenerstr. 4,
                    <br></br>
                    <br></br>
                    52428, Jülich
                    <br></br>
                    <br></br>
                    <br></br>
                    E-mail: info@int-club-juelich.de
                </p> 

                <form action = 'query' method='POST' style={{display:varENG}}>
                    <h4 style={{fontSize:slctdFont}}>You can also reach us here...</h4>
                    <input className = 'qry' type = 'text' name='first_name' placeholder = 'First name' required />
                    <br></br>
                    <input className = 'qry' type = 'text' name='last_name' placeholder = 'Last name' required />
                    <br></br>
                    <input className = 'qry' type = 'email' name='email' placeholder = 'E-mail' required />
                    <br></br>
                    <textarea className = 'qry_cont'  name='content' placeholder = 'Your query / suggestions here...' required />
                    <br></br>
                    <input className = 'qry_submit' type = 'submit' value = 'Submit'/>
                </form>

                <form action = 'query' method='POST' style={{display:varDEU}}>
                    <h4 style={{fontSize:slctdFont}}>Sie erreichen uns auch hier......</h4>
                    <input className = 'qry' type = 'text' name='first_name' placeholder = 'Vorname' required />
                    <br></br>
                    <input className = 'qry' type = 'text' name='last_name' placeholder = 'Nachname' required />
                    <br></br>
                    <input className = 'qry' type = 'email' name='email' placeholder = 'E-mail' required />
                    <br></br>
                    <textarea className = 'qry_cont'  name='content' placeholder = 'Ihre Anfrage / Anregungen hier...' required />
                    <br></br>
                    <input className = 'qry_submit' type = 'submit' value = 'Senden'/>
                </form>

            </div>

        </div>
    )
}