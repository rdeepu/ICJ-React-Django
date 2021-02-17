import * as React from 'react'
import './pageFour.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';

export default function Membership(){

    let varENG:string,varDEU:string

    const slctdLang = useSelector((state:langStatus)=>state.slctdLang.lang)
    const slctdFont = useSelector((state:langStatus)=>state.slctdFont.fnt)
  
   if (slctdLang === 'ENG'){
      varENG = 'block'
      varDEU='none'       
    } else {
      varENG = 'none'
      varDEU='block'    
   }
   
    return(

        <div>
            <Title/>

            <Navbar  pg_Membership='4px solid red'/>

            <div className='txt_box'>
                <h1 style={{display:varENG}}>Membership</h1>
                <h1 style={{display:varDEU}}>Mitgliedschaft</h1>

                <Font varENG={varENG} varDEU={varDEU}/>

                <hr className='hr_a'></hr>

                <p style={{fontSize:slctdFont, lineHeight:'2em', display:varENG}}>
                  At this time, the ICJ constitutes of 156 members.

                   <ol style={{lineHeight:'2em'}}>

                       <li>"Any person interested in the club’s aims can become an ICJ member." (ICJ Statute, 1972).</li>

                       <li>Duly filled application towards membership should be submitted to the ICJ board (E-mail: info@int-club-juelich.de). </li>

                       <li>The annual membership fee, per person and per family is 24€ and 36€ respectively.</li>

                       <li>Each member will be provided with the monthly ICJ program.</li>

                       <li>Members will receive a reduction on the price for excursions.</li>

                       <li>Download the Membership Declaration form.</li>

                   </ol>

                   Declarations of accession which are downloaded and completely filled can be sent / delivered as letter post or internal post to 
                   the International Club at the following address; <br></br>
                   <b>Postal Address:</b> <br></br>
                   Gästehaus <br></br>
                   Münchenerstr. 4, <br></br>
                   52428, Jülich.

                </p>

                <p style={{fontSize:slctdFont, lineHeight:'2em', display:varDEU}}>
                Zur Zeit hat der ICJ 156 Mitglieder.

                   <ol style={{lineHeight:'2em'}}>

                       <li>"Mitglied des Vereins kann jede natürliche Person werden, die an den  Aufgaben und Zielen des Vereins interessiert ist."
                           (ICJ-Satzung, 1972)</li>

                       <li>Registrierung beim Vorstand des ICJ (E-mail: info@int-club-juelich.de). </li>

                       <li>Der Jahresbeitrag beträgt pro Person 24€, pro Familie 36€.</li>

                       <li>Das monatliche Informationsprogramm des ICJ wird zugeschickt.</li>

                       <li>Das Mitglied erhält ermäßigte Preise bei Ausflügen und Veranstaltungen.</li>

                       <li>Datei der Beitrittserklarung.</li>

                   </ol>

                   Heruntergeladene und ausgefüllte Beitrittserklärungen können als hausinterne Post oder Briefpost an den Internationalen Club; <br></br>
                   <b>Postanschrift:</b> <br></br>
                   Gästehaus <br></br>
                   Münchenerstr. 4, <br></br>
                   52428, Jülich.

                </p>

                

            </div>
        </div>
    )
}