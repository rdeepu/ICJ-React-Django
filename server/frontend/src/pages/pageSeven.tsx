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
           axios.get("historyText_History_api")
       ]).then((retrieve)=>{
           setState_historyText(retrieve[0].data)
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

                    <div>2020 - </div>
                    <div style={{display:varENG}}>Mrs. M. Woischnik-De Buck</div>
                    <div style={{display:varENG}}>Mr. R. Skowronek</div>
                    <div style={{display:varDEU}}>Frau M. Woischnik-De Buck</div>
                    <div style={{display:varDEU}}>Herr R. Skowronek</div>

                    <div>2018 - 2020</div>
                    <div style={{display:varENG}}>Mrs. M. Peyser</div>
                    <div style={{display:varENG}}>Mr. G. Schumacher</div>
                    <div style={{display:varDEU}}>Frau M. Peyser</div>
                    <div style={{display:varDEU}}>Herr G. Schumacher</div>

                    <div>2011 - 2018</div>
                    <div style={{display:varENG}}>Mrs. S. Cowling</div>
                    <div style={{display:varENG}}>Mrs. C. Prell-Zander</div>
                    <div style={{display:varDEU}}>Frau S. Cowling</div>
                    <div style={{display:varDEU}}>Frau C. Prell-Zander</div>


                    <div>2009 - 2011</div>
                    <div style={{display:varENG}}>Mrs. V. Kentzinger</div>
                    <div style={{display:varENG}}>Mrs. C. Prell-Zander</div>
                    <div style={{display:varDEU}}>Frau V. Kentzinger</div>
                    <div style={{display:varDEU}}>Frau C. Prell-Zander</div>

                    <div>2007 - 2009</div>
                    <div style={{display:varENG}}>Mrs. H. Acker-Mantel</div>
                    <div style={{display:varENG}}>Mr. W. Ullrich</div>
                    <div style={{display:varDEU}}>Frau H. Acker-Mantel</div>
                    <div style={{display:varDEU}}>Herr W. Ullrich</div>

                    <div>2005 - 2007</div>
                    <div style={{display:varENG}}>Mrs. H. Acker-Mantel</div>
                    <div style={{display:varENG}}>Mrs. B. Kobertz</div>
                    <div style={{display:varDEU}}>Frau H. Acker-Mantel</div>
                    <div style={{display:varDEU}}>Frau B. Kobertz</div>


                    <div>2003 - 2005</div>
                    <div style={{display:varENG}}>Mrs. A. Conrad-Wienands</div>
                    <div style={{display:varENG}}>Mrs. M. Brückel</div>
                    <div style={{display:varDEU}}>Frau A. Conrad-Wienands</div>
                    <div style={{display:varDEU}}>Frau M. Brückel</div>

                    <div>1999 - 2003</div>
                    <div style={{display:varENG}}>Mrs. H. Grünberg</div>
                    <div style={{display:varENG}}>Mrs. Shanta Gupta</div>
                    <div style={{display:varDEU}}>Frau H. Grünberg</div>
                    <div style={{display:varDEU}}>Frau Shanta Gupta</div>

                    <div >1995 - 1998</div>
                    <div style={{display:varENG}}>Mrs. D. Eberhardt</div>
                    <div style={{display:varENG}}>Mrs. A. Canty</div>
                    <div style={{display:varDEU}}>Frau D. Eberhardt</div>
                    <div style={{display:varDEU}}>Frau A. Canty</div>

                    <div >1993 - 1995</div>
                    <div style={{display:varENG}}>Mrs. I. Wolf</div>
                    <div style={{display:varENG}}>Mrs. M. v.Klitzing</div>
                    <div style={{display:varDEU}}>Frau I. Wolf</div>
                    <div style={{display:varDEU}}>Frau M. v.Klitzing</div>

                    <div >1989 - 1993</div>
                    <div style={{display:varENG}}>Mrs. E. Meister</div>
                    <div style={{display:varENG}}>Mrs. I. Wolf</div>
                    <div style={{display:varDEU}}>Frau E. Meister</div>
                    <div style={{display:varDEU}}>Frau I. Wolf</div>

                    <div >1985 - 1989</div>
                    <div >Mrs. U. Kielhorn</div>
                    <div >Mrs. I. Wolf</div>

                    <div >1981 - 1985</div>
                    <div style={{display:varENG}}>Mrs. M. Engelmann</div>
                    <div style={{display:varENG}}>Mrs. H. Schult</div>
                    <div style={{display:varDEU}}>Frau M. Engelmann</div>
                    <div style={{display:varDEU}}>Frau H. Schult</div>

                    <div  >1975 - 1981</div>
                    <div style={{display:varENG}}>Dr. M. Roeth-Kamat</div>
                    <div style={{display:varENG}}>Mrs. I. Beckurts</div>
                    <div style={{display:varDEU}}>Dr. M. Roeth-Kamat</div>
                    <div style={{display:varDEU}}>Frau I. Beckurts</div>

                    <div>1973 - 1975</div>
                    <div>Dr. K. Scharmer</div>
                    <div>Dr. M. Roeth-Kamat</div>

                    <div >1970 - 1973</div>
                    <div style={{display:varENG}}>Dr. Wald</div>
                    <div style={{display:varENG}}>Mr. V. Galikine</div>
                    <div style={{display:varDEU}}>Dr. Wald</div>
                    <div style={{display:varDEU}}>Herr V. Galikine</div> 

                </div>


            </div>

        </div>
    )
}