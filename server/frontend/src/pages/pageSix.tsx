import * as React from 'react'
import './pageSix.css'
import Title from './components/title_bar'
import Navbar from './components/nav_bar'
import Font from './components/fnt_sze'
import {useSelector} from 'react-redux';
import {langStatus} from './components/redux';

export default function Imprint(){

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

        <Navbar pg_Imprint="4px solid red"/>

        <div className = "txt_box">
        <h1 style={{display:varENG}}>Imprint</h1>
        <h1 style={{display:varDEU}}>Impressum</h1>

        <Font  varENG={varENG} varDEU={varDEU}/>
        <hr></hr>

        <p className = 'para_a' style={{display:varENG, fontSize:slctdFont}}>
            <b>Declarations according to § 5 TMG</b>
            <br></br>
            <br></br>
            Internationaler Club Jülich e.V.
            <br></br>
            <br></br>
            Registered in the register of associations, city of Jülich, VR 227
            <br></br>
            <br></br>
            <b>Postal address</b>
            <br></br>
            <br></br>
            Münchenerstraße - 4,
            <br></br>
            <br></br>
            52428, Jülich           
            <br></br>
            <br></br>
            E-Mail: info@int-club-juelich.de
            <br></br>
            <br></br>
            <b>Represented by:</b>
        </p>

        <p className = 'para_a' style={{display:varDEU, fontSize:slctdFont}}>
            <b>Angaben gemäß § 5 TMG:</b>
            <br></br>
            <br></br>
            Internationaler Club e.V.
            <br></br>
            <br></br>
            Eingetragen im Vereinsregister der Stadt Jülich, VR 227
            <br></br>
            <br></br>
            <b>Postanschrift</b>
            <br></br>
            <br></br>
            Münchenerstraße - 4,
            <br></br>
            <br></br>
            52428, Jülich
           
            <br></br>
            <br></br>
            E-Mail: info@int-club-juelich.de
            <br></br>
            <br></br>
            <b>Vertreten durch:</b>
        </p>

        <div className = 'grd_cont_imprint' style={{fontSize:slctdFont, display:grd_varENG}} >

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

            <div>Herr Nathalia Faley</div>
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

        <div className = 'grd_cont_imprint' style={{fontSize:slctdFont, display:grd_varDEU}} >

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

        <p className='para_b' style={{fontSize:slctdFont,display:varENG}}>
            <b>Translations</b>
            <br></br>
            Ms. Kay Stone, Ms. Claudia Prell-Zander.
            <br></br>
            <br></br>
            <b>Logo</b>
            <br></br>
            Ms. Barbara Kobertz.
            <br></br>
            <br></br>
            <b>Articles</b>
            <br></br>
            Ms. Brenda Robson-Eifler, Mr. Hans Georg Plott, u. a.
            <br></br>
            <br></br>
            <b>Disclaimer</b>
            <br></br>
            We assume no responsibility and/or liability towards the completeness and accuracy of the provided contents. 
            <br></br>
            <br></br>
            <b>Data protection</b>
            <br></br>
            Further information on our data protection procedures can be found at:
            <br></br>
            <br></br>
            <p className='para_c'>Imprint was created with the imprint generator from <a href='https://www.activemind.de/datenschutz/generatoren/impressum/'>activeMind AG</a></p>

        </p>

       

        <p className='para_b' style={{fontSize:slctdFont,display:varDEU}}>
            <b>Übersetzungen</b>
            <br></br>
            Frau. Kay Stone, Frau. Claudia Prell-Zander.
            <br></br>
            <br></br>
            <b>Logo</b>
            <br></br>
            Frau. Barbara Kobertz.
            <br></br>
            <br></br>
            <b>Beiträge</b>
            <br></br>
            Frau. Brenda Robson-Eifler, Herr Hans Georg Plott, u. a.
            <br></br>
            <br></br>
            <b>Haftungsausschluss</b>
            <br></br>
            Wir übernehmen keine Gewähr oder Haftung für Aktualität, Vollständigkeit und Richtigkeit der angebotenen Informationen.
            <br></br>
            <br></br>
            <b>Datenschutzerklärungen</b>
            <br></br>
            Weitere Erläuterungen zum Datenschutz finden Sie unter:
            <br></br>
            <br></br>
            <p className='para_c'>Das Impressum wurde auf Basis des <a href='https://www.activemind.de/datenschutz/generatoren/impressum/'>activeMind AG</a> erstellt</p>
        </p>
        
       </div>

     </div>

    )

}