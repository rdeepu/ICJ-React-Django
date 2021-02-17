import * as React from 'react'
import './pageThree.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';

export default function Activities(){
    let varENG:string,varDEU:string

    const slctdLang = useSelector((state:langStatus) => state.slctdLang.lang)
    const slctdFont = useSelector((state:langStatus)=>state.slctdFont.fnt)
  
   if (slctdLang === 'ENG'){
      varENG = 'block'
      varDEU='none'       
    } else {
      varENG = 'none'
      varDEU='block'    
   }

    const [Fntsze,SetFntsze]=React.useState(20)

return(
    <div>

        <Title/>

        <Navbar  pg_Activities = '4px solid red'/>

        <div className = 'txt_box'>

        <h1 style={{display:varENG}}>Activities</h1>
        <h1 style={{display:varDEU}}>Aktivitäten</h1>

        <Font varENG={varENG} varDEU={varDEU}/>

        <hr className='hr_a'></hr>
  
        <ul style={{fontSize:slctdFont,lineHeight:'2em',display:varENG}}>
            <li>Regular meetings on Tuesdays at 10 o'clock,where the following items will be discussed: </li>
            
                <ul>
                    <li>Guidance and assistance with those day-to-day issues.</li>
                    <li>Cultural themes: customs, holidays & traditions in Germany and other countries.</li>
                    <li>Culinary programs and "Bring-a-Dish" mornings.</li>
                    <li>Children's programs.</li>
                </ul>
            <li>Exercise with music (2 times per week ). </li>
            <li>English & German literature circles. </li>
            <li>Walking tours. </li>
            <li>Excursions. </li>
            <li>International evenings, with lectures, buffets and performances. </li>
            <li>Summer party. </li>
            <li>Ladies's night out. </li>
            <li>Scrapbooking </li>
            <li>Library (English, Russian, Japanese literature and more) </li>
            
        </ul>

        <ul style={{fontSize:slctdFont,lineHeight:'2em',display:varDEU}}>
            <li>Regelmäßiges Treffen, dienstags um 10 Uhr mit folgenden Programmpunkten: </li>            
                <ul>
                    <li>Informationen und Hilfe bei Alltagsproblemen.</li>
                    <li>Kulturelle Themen: Bräuche, Feiertage, Traditionen in Deutschland und anderen Ländern.</li>
                    <li>Kulinarische Vormittagsprogramme.</li>
                    <li>Kinderprogramme.</li>
                </ul>
            <li>Bewegung mit Musik (2-mal pro Woche). </li>
            <li>Englischer & Deutscher Literaturkreis. </li>
            <li>Wanderungen. </li>
            <li>Ausflugsfahrten. </li>
            <li>Internationale Abende mit Vorträgen, Büfett und Darbietungen. </li>
            <li>Sommerfeste. </li>
            <li>Ladies's night out. </li>
            <li>Scrapbooking. </li>
            <li>Bibliothek (Englisch, Russisch, Japanisch, usw).</li>
            
        </ul>

        </div>

    </div>
)

}