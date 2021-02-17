import * as React from 'react'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import './pageTwo.css'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';

export default function Objectives(){

    let varENG:string,varDEU:string

    const slctdLang = useSelector((state:langStatus)=>state.slctdLang.lang)
  
   if (slctdLang === 'ENG'){
      varENG = 'block'
      varDEU = 'none'       
    } else {
      varENG = 'none'
      varDEU='block'    
   }
  
   const slctdFont = useSelector((state:langStatus) => state.slctdFont.fnt)
   

return(
    <div>
        <Title/>

        <Navbar  pg_Objectives='4px solid red' />

        <div className='txt_box'>
            <h1 style={{display:varENG}}>Objective and purpose</h1>
            <h1 style={{display:varDEU}}>Zweck und ziel</h1>

            <Font varENG={varENG} varDEU={varDEU}/>
            
            <hr></hr>

            <p style={{display:varENG, fontSize:slctdFont}}><b>The purpose of the club is:</b>
                <ul>
                    <li>to encourage contact between the international workforce of the research center 
                       (Forschungszentrum Jülich GmbH) and the residents of Juelich,  to organisations of the same type, 
                       both at home and abroad. </li>
                     <li>to provide assistance to all club members. </li>
                </ul>
               To this end, the club will organise informative, cultural and social gatherings to
               lead people towards thoughts of tolerance and understanding.

               The club's exclusive and immediate purpose is to benifit the community (im Sinne der 
               Gemeinnützigkeitsverordnung vom 24. Dezember, 1953).
            </p>
            <p style={{display:varDEU,fontSize:slctdFont}}><b>Der Club hat die Aufgaben:</b>
                <ul>
                    <li>den Kontakt der in- und ausländischen Mitglieder untereinander, zur Jülicher Bevölkerung
                         sowie zu in- und ausländischen Organisationen gleicher Art zu pflegen,</li>

                    <li>das Einleben der Ausländer, die in Jülich tätig sind, zu fördern.</li>
                </ul>
                Zu diesem Zweck wird der Club insbesondere Veranstaltungen informativer, kultureller und 
                gesellschaftlicher Art durchführen. Seine Tätigkeit soll dem Gedanken der Toleranz und 
                Völkerverständigung dienen.
 
                Der Club verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke  im Sinne der 
                Gemeinnützigkeitsverordnung vom 24. Dezember 1953.
            </p>

        </div>

    </div>

)

}