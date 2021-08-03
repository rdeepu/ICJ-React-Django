import * as React from 'react'
import './pageSeven.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';
import axios from "axios";
import { useState, useEffect } from "react";

export default function History(){
    
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

   const [State_historyText, setState_historyText] = useState([]);
   const [State_historyTable, setState_historyTable] = useState([]);
    
   useEffect(() => {
       fetchData();
   },[]);


   function fetchData(){
       axios.all([
           axios.get("historyText_History_api"),
           axios.get("chairmenICJ_History_api")
       ]).then((retrieve)=>{
           setState_historyText(retrieve[0].data);
           setState_historyTable(retrieve[1].data)
       })     
    }

    
    return(

        <div>
            <Title/>

            <Navbar  pg_History='4px solid red'/>
            
            <div className = 'txt_box'>
                <h1 style={{display:varENG}} className='h1_a' >History</h1>
                <h1 style={{display:varDEU}} className='h1_a'>Geschichte</h1>

                <Font varENG={varENG} varDEU={varDEU}/>
            
                <hr></hr>
                
                {State_historyText.map((data:any)=> (
                 <div>
                <p style={{display:varENG,fontSize:slctdFont}}>{data.historyText_EN.split("\n").map((section:string)=>(<p>{section}</p>))}</p>

                <p style={{display:varDEU,fontSize:slctdFont}}>{data.historyText_DE.split("\n").map((section:string)=>(<p>{section}</p>))}</p>
                </div>  
                ))}               
               

                <h1 style={{display:varENG}} className='h1_b'>List of chairmen and vice-chairmen at the ICJ </h1>
                <h1 style={{display:varDEU}} className='h1_b'>Liste der Vorsitzenden und Vize-Vorsitzenden des ICJ </h1>

                
                
                <div className = 'grd_cont_history' style={{fontSize:slctdFont}}>

                    <div style={{display:varENG}}><b>Time Period</b></div>
                    <div style={{display:varENG}}><b>Chairman</b></div>
                    <div style={{display:varENG}}><b>Vice-Chairman</b></div>
                    <div style={{display:varDEU}}><b>Zeitraum</b></div>
                    <div style={{display:varDEU}}><b>Vorsitzender</b></div>
                    <div style={{display:varDEU}}><b>Vize-Vorsitzender</b></div>                   
                </div>  

                {State_historyTable.map((data:any) => (

                <div className = 'grd_cont_history' style={{fontSize:slctdFont}}> 
                    <div>{data.timePeriod} </div>
                    <div style={{display:varENG}}>{data.chairmen_EN}</div>
                    <div style={{display:varENG}}>{data.viceChairmen_EN}</div>
                    <div style={{display:varDEU}}>{data.chairmen_DE}</div>
                    <div style={{display:varDEU}}>{data.viceChairmen_DE}</div>
                </div>              
                  
                 ))}


            </div>

        </div>
    )
}