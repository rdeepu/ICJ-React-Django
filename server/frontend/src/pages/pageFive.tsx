import * as React from 'react'
import './pageFive.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux'
import {langStatus} from './components/redux'
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Organization(){

    let varENG:string,varDEU:string,grd_varENG:string,grd_varDEU:string

    const slctdLang = useSelector((state:langStatus)=>state.slctdLang.lang)
    const slctdFont = useSelector((state:langStatus)=>state.slctdFont.fnt)
  
   if (slctdLang === 'ENG'){
      varENG = 'block'
      varDEU = 'none' 
      grd_varENG = 'grid' 
      grd_varDEU = 'none'     
    } else {
      varENG = 'none'
      varDEU = 'block' 
      grd_varDEU = 'grid'
      grd_varENG = 'none'   
   }  

   const [State_organization, setState_organization] = useState([])

   useEffect(() => {

    fetchData()     
    
  },[]) 

   function fetchData(){

    axios.all([
        axios.get("organization_api")
    ]).then((retrieve) => { 
        setState_organization(retrieve[0].data)
    })
   }


    return(
       
        <div>

            <Title/>

            <Navbar  pg_Organization = '4px solid red' />

            <div className='txt_box'>

                <h1 style={{display:varENG}}>Organization</h1>
                <h1 style={{display:varDEU}}>Organisation</h1>

                <Font  varENG={varENG} varDEU={varDEU}/>

                <hr className='hr_a'></hr>

                <p style={{display:varENG,fontSize:slctdFont}}>The governing body consists of:</p>
                <p style={{display:varDEU,fontSize:slctdFont}}>Der Vorstand besteht aus:</p>
               
                {State_organization.map((data:any) => (
                
                <div className = 'grd_cont_org' style={{fontSize:slctdFont}}>               

                    <div style={{display:varENG}}>{data.personName_EN}</div>
                    <div style={{display:varENG}}>{data.positionHeld_EN}</div> 
                    <div style={{display:varDEU}}>{data.personName_DE}</div>
                    <div style={{display:varDEU}}>{data.positionHeld_DE}</div>                     
                   
                </div>
                               
                      ))}            

                <hr className = 'hr_b'></hr>

            </div>

        </div>
    )
}