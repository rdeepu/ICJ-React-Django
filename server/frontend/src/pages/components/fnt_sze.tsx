import React, {Dispatch} from 'react'
import './fnt_sze.css'
import {useDispatch,useSelector} from 'react-redux'
import {TSetFntSze,langStatus} from './redux'

let color_a:string,color_b:string,color_c:string,color_d:string;


export default function Font(props:any){

    const slctdFont = useSelector((state:langStatus)=>state.slctdFont.fnt)

    const Disp = useDispatch<Dispatch<TSetFntSze>>()


    const fntSze_a=()=>{
       Disp({type:"FNTSZE_A",payload:20}) 
    }
    const fntSze_b=()=>{
       Disp({type:"FNTSZE_B",payload:22}) 
    }
    const fntSze_c=()=>{
       Disp({type:"FNTSZE_C",payload:24})
    }
    const fntSze_d=()=>{
       Disp({type:'FNTSZE_D',payload:26})
    }

   switch(slctdFont){
     case 20:
         color_a='red'
         color_b=''
         color_c=''
         color_d=''
         break;
     case 22:
         color_a=''
         color_b='red'
         color_c=''
         color_d=''
         break;
     case 24:
        color_a=''
         color_b=''
         color_c='red'
         color_d=''
         break;
     case 26:
         color_a=''
         color_b=''
         color_c=''
         color_d='red'
         break;
   }

return (
<div>

    <figure className = 'fnt_slct' style={{display:props.varENG}}>

        <img  src = {require('../images/font.svg')} alt = 'Adjust font size'/>

        <figcaption><b>Font size</b>
       
         <div className='fnt_list' >
            <h3 onClick = {fntSze_a} style={{color:color_a}}>20</h3>
            <h3 onClick = {fntSze_b} style={{color:color_b}}>22</h3>
            <h3 onClick = {fntSze_c} style={{color:color_c}}>24</h3>
            <h3 onClick = {fntSze_d} style={{color:color_d}}>26</h3>
         </div>

        </figcaption>
      
    </figure>

    <figure className = 'fnt_slct' style={{display:props.varDEU}}>

        <img  src = {require('../images/font.svg')} alt = 'Adjust font size'/>

        <figcaption><b>Schriftgröße</b>
       
         <div className='fnt_list' >
            <h3 onClick = {fntSze_a} style={{color:color_a}}>20</h3>
            <h3 onClick = {fntSze_b} style={{color:color_b}}>22</h3>
            <h3 onClick = {fntSze_c} style={{color:color_c}}>24</h3>
            <h3 onClick = {fntSze_d} style={{color:color_d}}>26</h3>
         </div>

        </figcaption>
      
    </figure>

</div>
)
}