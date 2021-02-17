import * as React from 'react'
import './pageFive.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';

export default function  Organization(){

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

            <Navbar  pg_Organization = '4px solid red' />

            <div className='txt_box'>

                <h1 style={{display:varENG}}>Organization</h1>
                <h1 style={{display:varDEU}}>Organisation</h1>

                <Font  varENG={varENG} varDEU={varDEU}/>

                <hr className='hr_a'></hr>

                <p style={{display:varENG,fontSize:slctdFont}}>The governing body consists of:</p>
                <p style={{display:varDEU,fontSize:slctdFont}}>Der Vorstand besteht aus:</p>

                <div className = 'grd_cont_org' style={{fontSize:slctdFont, display:grd_varENG}} >

                    <div>Ms. Myriam Woischnick-De Buck</div>
                    <div>President</div> 

                    <div>Mr. Rolf Skowronek</div>
                    <div>Vice-President</div> 

                    <div>Ms. Helga Neulen</div>
                    <div>Treasurer</div> 

                    <div>Ms. Rajalekshmi Deepu</div>
                    <div>Secretary</div> 

                    <div>Ms. Lorraine Buchner</div>
                    <div>Committee member</div> 

                    <div>Ms. Nathalia Faley</div>
                    <div>Committee member</div> 

                    <div>Ms. Brunhilde Hütten</div>
                    <div>Committee member</div> 

                    <div>Ms. Barbara Kobertz</div>
                    <div>Committee member</div> 

                    <div>Ms. Karina Minkenberg</div>
                    <div>Committee member</div> 

                    <div>Mr. Georg Neulen</div>
                    <div>Committee member</div> 
            
                </div>

                <div className = 'grd_cont_org' style={{fontSize:slctdFont, display:grd_varDEU}} >

                    <div>Frau Myriam Woischnick-De Buck</div>
                    <div>Präsident</div> 

                    <div>Herr Rolf Skowronek</div>
                    <div>Vize-Präsident</div> 

                    <div>Frau Helga Neulen</div>
                    <div>Schatzmeister </div> 

                    <div>Frau Rajalekshmi Deepu</div>
                    <div>Schriftführer</div> 

                    <div>Frau Lorraine Buchner</div>
                    <div>Beisitzer</div> 

                    <div>Frau Nathalia Faley</div>
                    <div>Beisitzer</div> 

                    <div>Frau Brunhilde Hütten</div>
                    <div>Beisitzer</div> 

                    <div>Frau Barbara Kobertz</div>
                    <div>Beisitzer</div> 

                    <div>Frau Karina Minkenberg</div>
                    <div>Beisitzer</div> 

                    <div>Herr Georg Neulen</div>
                    <div>Beisitzer</div> 
                </div>

                <hr className = 'hr_b'></hr>

            </div>

        </div>
    )
}