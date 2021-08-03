import * as React from 'react'
import './pageEight.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';
import axios from "axios"
import {useState,useEffect} from 'react'
import cookie from 'react-cookies'
cookie.load('csrftoken')




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



   const [State_postalAddress,setState_postalAddress] = useState([])

   const [State_fullName,setState_fullName] = useState([])
   const [State_subject,setState_subject] = useState([])
   const [State_email,setState_email] = useState([])
   const [State_queryText,setState_queryText] = useState([])

   const submitFullname=(event:any)=>{
       setState_fullName(event.target.value)       
   }

   const submitSubject=(event:any)=>{
    setState_subject(event.target.value)
   }

   const submitEmail=(event:any)=>{
    setState_email(event.target.value)
   }

   const submitQuery=(event:any)=>{
    setState_queryText(event.target.value)
   }

   const submittedData = {
       fullName: State_fullName,
       subject: State_subject,
       mailEmail:State_email,
       areaQuery:State_queryText
   }   

   useEffect(() => {

     fetchData()     
     
   },[])   
  

   function fetchData(){
    axios.all([
        axios.get("postalAddress_Contact_api")
    ]).then((retrieve) => {
        setState_postalAddress(retrieve[0].data)
    })
   }

   const submitContactus = (event:any) =>{
       event.preventDefault();
       axios.defaults.xsrfCookieName = 'csrftoken'
       axios.defaults.xsrfHeaderName = 'X-XSRFTOKEN'
       axios.post('contactUs/',submittedData).then((retrieve) => alert(retrieve.data))
       setState_fullName([])
       setState_subject([])
       setState_email([])
       setState_queryText([])
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

                {State_postalAddress.map((data:any) => ( 
               
                <p style = {{fontSize:slctdFont}}>

                    <h4 style={{display:varENG}}>Postal address</h4>
                    <h4 style={{display:varDEU}}>Postanschrift</h4>

                    <p> {data.contactPerson}</p>
                    <br></br>
                    <p> {data.institutionName},</p>
                    <br></br>
                    <p> {data.streetNumber},</p>
                    <br></br>
                    <p> {data.postcodeCity}.</p>
                    <br></br>
                    <br></br>
                    <p><b>E-mail:</b> {data.Email}</p>
                </p>               
               
                ))}


                <form method = 'POST' onSubmit = {submitContactus}>                  
                    
                    <h4 style={{fontSize:slctdFont,display:varENG}}>You can also reach us here...</h4>

                    <h4 style={{fontSize:slctdFont,display:varDEU}}>Sie erreichen uns auch hier......</h4>                
                    
                    
                    <input style={{fontSize:slctdFont,display:varENG}} className = 'qry' type = 'text' value={State_fullName} onChange={submitFullname} name ='full_name' placeholder = 'Full name' required />
                    <input style={{fontSize:slctdFont,display:varDEU}} className = 'qry' type = 'text' value={State_fullName} onChange={submitFullname} name ='full_name' placeholder = 'Name' required />
                    
                    <input style={{fontSize:slctdFont,display:varENG}} className = 'qry' type = 'text' value={State_subject} onChange={submitSubject} name='subject' placeholder = 'Subject' required />
                    <input style={{fontSize:slctdFont,display:varDEU}} className = 'qry' type = 'text' value={State_subject} onChange={submitSubject} name='subject' placeholder = 'Betreff' required />
                    
                    <input style={{fontSize:slctdFont}}className = 'qry' type = 'email' value = {State_email} onChange={submitEmail} name = 'email' placeholder = 'E-mail' required />
                     
                    <textarea style={{fontSize:slctdFont,display:varENG}} className = 'qry_cont' value = {State_queryText} onChange={submitQuery} name = 'content' placeholder = 'Your query / suggestions here...' required />
                    <textarea style={{fontSize:slctdFont,display:varDEU}} className = 'qry_cont' value = {State_queryText} onChange={submitQuery} name = 'content' placeholder = 'Ihre Anfrage / Anregungen hier...' required />
                    
                    <br></br>

                    <button style={{fontSize:slctdFont,display:varENG}} className = 'qry_submit' type = "submit">Submit</button> 
                    <button style={{fontSize:slctdFont,display:varDEU}} className = 'qry_submit' type = "submit">Senden</button> 
                </form>                

            </div>

        </div>
    )
}