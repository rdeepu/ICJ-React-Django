import * as React from 'react'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import './pageTwo.css'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';
import {useEffect,useState} from 'react';
import axios from "axios";

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

   const [State_ObjectivePurpose,setState_ObjectivePurpose] = useState([])

   useEffect(()=>{
       fetchData()
   },[])

   function fetchData(){
    axios.get("objectivePurpose_Objectives_api")
    .then((retrieve)=>(setState_ObjectivePurpose(retrieve.data)))
   }   

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

            {State_ObjectivePurpose.map((data:any)=>(
                <ul>                 

                    <li>{data.point_EN}</li>                  
                     
                </ul>
               
               ))}
            </p>           
            
            <p style={{display:varDEU,fontSize:slctdFont}}><b>Der Club hat die Aufgaben:</b>

            {State_ObjectivePurpose.map((data:any)=>(
                <ul>      

                    <li>{data.point_DE}</li>                  
                    
                </ul>
                ))}
               
            </p>            

        </div>

    </div>

)

}