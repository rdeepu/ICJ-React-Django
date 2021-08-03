import * as React from 'react'
import './pageFour.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';
import {useState,useEffect} from 'react';
import axios from 'axios'


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

   const [State_membershipData,setState_membershipData] = useState([])
   const [State_postalAddress,setState_postalAddress] = useState([])
   const [State_xyz,setState_xyz]=useState([])

   useEffect(()=>{
    fetchData() 
   },[])

   function fetchData(){
   
    axios.all([
        axios.get("membership_api"),
        axios.get("postalAddress_Contact_api"),
        axios.get("downloads_api")       
    ]).then((retrieve) => {
        setState_membershipData(retrieve[0].data)
        setState_postalAddress(retrieve[1].data)
        setState_xyz(retrieve[2].data)        
    })
   }

   function membershipForm(){
       State_xyz.map((data:any)=>(window.open(data.membership_file)))
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

                {State_membershipData.map((data:any)=> ( 
                <div>
                <p style={{fontSize:slctdFont, lineHeight:'2em', display:varENG}}>

                  At this time, the ICJ constitutes of {data.strength} members.

                   <ol style={{lineHeight:'2em'}}>

                       <li>"Any person interested in the club’s aims can become an ICJ member." (ICJ Statute, 1972).</li>

                       <li>Duly filled application towards membership should be submitted to the ICJ board. </li>

                       <li>The annual membership fee, per person and per family is {data.feePerson} and {data.feeFamily} respectively.</li>

                       <li>Each member will be provided with the monthly ICJ program.</li>

                       <li>Members will receive a reduction on the price for excursions.</li>                       

                   </ol>
                   Declarations of accession which are downloaded and completely filled can be sent / 
                   delivered as letter post or internal post to the International Club at the following address;
                   <br></br>
                   <br></br>
                   <button onClick={membershipForm}>Membership form</button> 
                   <br></br>
                   <br></br>
                   <b>Postal Address:</b> <br></br>
                 </p>                

                <p style={{fontSize:slctdFont, lineHeight:'2em', display:varDEU}}>
                Zur Zeit hat der ICJ {data.strength} Mitglieder.

                   <ol style={{lineHeight:'2em'}}>

                       <li>"Mitglied des Vereins kann jede natürliche Person werden, die an den  Aufgaben und Zielen des Vereins interessiert ist."
                           (ICJ-Satzung, 1972)</li>

                       <li>Registrierung beim Vorstand des ICJ. </li>

                       <li>Der Jahresbeitrag beträgt pro Person {data.feePerson}, pro Familie {data.feeFamily}.</li>

                       <li>Das monatliche Informationsprogramm des ICJ wird zugeschickt.</li>

                       <li>Das Mitglied erhält ermäßigte Preise bei Ausflügen und Veranstaltungen.</li>

                     </ol>

                   Heruntergeladene und ausgefüllte Beitrittserklärungen können als hausinterne Post oder 
                   Briefpost an den Internationalen Club;
                   <br></br>  
                   <br></br>
                   <button onClick={membershipForm}>Beitrittsformular</button> 
                   <br></br>                 
                   <br></br>
                   <b>Postanschrift:</b>                 
                </p>
                </div>

                ))}
                
                {State_postalAddress.map((data:any)=>( 
                <p style={{fontSize:slctdFont, lineHeight:'2em'}}>
                {data.contactPerson}<br></br>
                {data.institutionName},<br></br>
                {data.streetNumber},<br></br>
                {data.postcodeCity}.<br></br>
                <b>E-mail:</b>  {data.Email}
                </p>
                ))}

                <hr className='hr_b'></hr>
            </div>
           
        </div>
    )
}