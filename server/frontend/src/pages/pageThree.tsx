import * as React from "react";
import "./pageThree.css";
import Title from "./components/title_bar";
import Navbar from "./components/nav_bar";
import Font from "./components/fnt_sze";
import { useSelector } from "react-redux";
import { langStatus } from "./components/redux";
import { useEffect, useState,useRef } from "react";
import axios from "axios";

export default function Activities() {
  let varENG: string,
    varDEU: string,
    pageStrength: number,
    articlesSelected: number;

  const leRef = useRef<HTMLDivElement|null>(null)  
  

  const slctdLang = useSelector((state: langStatus) => state.slctdLang.lang);
  const slctdFont = useSelector((state: langStatus) => state.slctdFont.fnt);

  if (slctdLang === "ENG") {
    varENG = "block";
    varDEU = "none";
  } else {
    varENG = "none";
    varDEU = "block";
  }

  const [State_scopeDisplay, setState_scopeDisplay] = useState("block");
  const [State_elcDisplay, setState_elcDisplay] = useState("none");
  const [State_leDisplay, setState_leDisplay] = useState("none");
  const [State_excursionsDisplay, setState_excursionsDisplay] = useState("none");
  const [State_fulltextDisplay,setState_fulltextDisplay] = useState("none")

  const [State_Scope_A, setState_Scope_A] = useState([]);
  const [State_Sub_Scope_A, setState_Sub_Scope_A] = useState([]);
  const [State_Scope_B, setState_Scope_B] = useState([]);
  const [State_elc, setState_elc] = useState([]);
  const [State_le, setState_le] = useState([]);
  
  const [State_scopeSelect, setState_scopeSelect] = useState("select");
  const [State_leSelect, setState_leSelect] = useState("unselect");
  const [State_excursionsSelect, setState_excursionsSelect] = useState("unselect");
  const [State_elcSelect, setState_elcSelect] = useState("unselect");

  const [State_pageOneMark, setState_pageOneMark] = useState("select");
  const [State_pageTwoMark, setState_pageTwoMark] = useState("unselect");
  const [State_pageThreeMark, setState_pageThreeMark] = useState("unselect");
  const [State_pageDotsMark, setState_pageDotsMark] = useState("unselect");

  const [State_pageFetch, setState_pageFetch] = useState(0);
  const [State_pageOne, setState_pageOne] = useState(1);
  const [State_pageTwo, setState_pageTwo] = useState(2);
  const [State_pageThree, setState_pageThree] = useState(3);
  const [State_pageDots, setState_pageDots] = useState("...");
  
  const [State_identity,setState_identity] = useState(0)

  useEffect(() => {
    fetchData();    
  }, []);

  function fetchData() {
    axios
      .all([
        axios.get("scopeActivities_A_api"),
        axios.get("scope_SubActivities_A_api"),
        axios.get("scopeActivities_B_api"),
        axios.get("englishLiteratureClub_api"),
        axios.get("latestActivities_api"),
      ])
      .then((retrieve) => {
        setState_Scope_A(retrieve[0].data);
        setState_Sub_Scope_A(retrieve[1].data);
        setState_Scope_B(retrieve[2].data);
        setState_elc(retrieve[3].data);
        setState_le(retrieve[4].data);
      });
  }

  function scopeSelect() {
    setState_scopeSelect("select");
    setState_elcSelect("unselect");
    setState_leSelect("unselect");
    setState_excursionsSelect("unselect");

    setState_scopeDisplay("block");
    setState_elcDisplay("none");
    setState_leDisplay("none");
    setState_excursionsDisplay("none");
    setState_fulltextDisplay("none");
  }
  function elcSelect() {
    setState_elcSelect("select");
    setState_leSelect("unselect");
    setState_scopeSelect("unselect");
    setState_excursionsSelect("unselect");

    setState_elcDisplay("block");
    setState_scopeDisplay("none");
    setState_leDisplay("none");
    setState_excursionsDisplay("none");
    setState_fulltextDisplay("none");
  }
  function leSelect() {
    setState_leSelect("select");
    setState_scopeSelect("unselect");
    setState_excursionsSelect("unselect");
    setState_elcSelect("unselect");

    setState_leDisplay("block");
    setState_elcDisplay("none");
    setState_scopeDisplay("none");
    setState_excursionsDisplay("none");
    setState_fulltextDisplay("none");

    setState_pageOneMark("select")
    setState_pageTwoMark("unselect")
    setState_pageThreeMark("unselect")
    setState_pageDotsMark("unselect")

    pageStrength = Math.ceil(State_le.length / 3);
    articlesSelected = pageStrength / 1;
    setState_pageFetch(articlesSelected);
  }

  function fullTextDisplay(id:number) {
    leRef.current?.scrollTo(0,0)
    setState_leDisplay("none")
    setState_fulltextDisplay("block")
    setState_identity(id)
  }

  function excursionsSelect() {
    setState_excursionsSelect("select");
    setState_leSelect("unselect");
    setState_scopeSelect("unselect");
    setState_elcSelect("unselect");

    setState_excursionsDisplay("block");
    setState_leDisplay("none");
    setState_elcDisplay("none");
    setState_scopeDisplay("none");
  }

  
  function articleSelector(pageId: number) {
    leRef.current?.scrollTo(0,0)   
    pageStrength = Math.ceil(State_le.length / 3);
    articlesSelected = pageStrength / pageId;
    setState_pageFetch(articlesSelected);
    
    if (pageId === 1) {
      setState_pageOneMark("select");
      setState_pageTwoMark("unselect");
    } else if (pageId === 2) {
      setState_pageOneMark("unselect");
      setState_pageTwoMark("select");
    }
  } 

  return (

    <div>

      <Title />

      <Navbar pg_Activities = "4px solid red" />

      <div ref={leRef} className="txt_box">

        <h1 style={{ display: varENG }}>Activities</h1>
        <h1 style={{ display: varDEU }}>Aktivitäten</h1>

        <Font varENG={varENG} varDEU={varDEU} />

        <hr className="hr_a"></hr>

        <div>
          <ul className="navbar" style={{ display: varENG }}>
            <li className={State_scopeSelect} onClick={scopeSelect}>
              Scope
            </li>

            <li className={State_elcSelect} onClick={elcSelect}>
              English literature club
            </li>

            <li className={State_leSelect} onClick={leSelect}>
              Latest activities
            </li>

            <li className={State_excursionsSelect} onClick={excursionsSelect}>
              Excursions
            </li>
          </ul>

          <ul className="navbar" style={{ display: varDEU }}>
            <li className={State_scopeSelect} onClick={scopeSelect}>
              Umfang
            </li>

            <li className={State_elcSelect} onClick={elcSelect}>
              Englische Literaturgruppe
            </li>

            <li className={State_leSelect} onClick={leSelect}>
              letzten Aktivitäten
            </li>

            <li className={State_excursionsSelect} onClick={excursionsSelect}>
              Ausflüge
            </li>
          </ul>
        </div>

        <div className="textDisplay" style={{ display: State_scopeDisplay }}>
          {State_Scope_A.map((content: any) => (
            <ul
              style={{
                fontSize: slctdFont,
                lineHeight: "2em",
                display: varENG,
              }}
            >
              <li> {content.heading_EN} </li>

              {State_Sub_Scope_A.map((data: any) => (
                <ul>
                  <li>{data.sub_heading_EN}</li>
                </ul>
              ))}
            </ul>
          ))}

          {State_Scope_A.map((content: any) => (
            <ul
              style={{
                fontSize: slctdFont,
                lineHeight: "2em",
                display: varDEU,
              }}
            >
              <li> {content.heading_DE} </li>

              {State_Sub_Scope_A.map((data: any) => (
                <ul>
                  <li>{data.sub_heading_DE}</li>
                </ul>
              ))}
            </ul>
          ))}

          {State_Scope_B.map((data: any) => (
            <div>
              <ul
                style={{
                  fontSize: slctdFont,
                  lineHeight: "2em",
                  display: varENG,
                }}
              >
                <li> {data.heading_EN} </li>
              </ul>

              <ul
                style={{
                  fontSize: slctdFont,
                  lineHeight: "2em",
                  display: varDEU,
                }}
              >
                <li> {data.heading_DE} </li>
              </ul>
            </div>
          ))}
        </div>

        <div
          className="textDisplay"
          style={{
            display: State_elcDisplay,
            fontSize: slctdFont,
            lineHeight: "2em",
          }}
        >
          {State_elc.map((data: any) => (
            <div>
              <p style={{ display: varENG }}>{data.section_EN}</p>
              <p style={{ display: varENG }}>
                <b>{data.contact_EN}</b>
              </p>
              <p style={{ display: varENG }}>
                <b>{data.topic_EN}</b>
              </p>
              <p style={{ display: varDEU }}>{data.section_DE}</p>
              <p style={{ display: varDEU }}>
                <b>{data.contact_DE}</b>
              </p>
              <p style={{ display: varDEU }}>
                <b>{data.topic_DE}</b>
              </p>
            </div>
          ))}
        </div>

        <div          
          className="textDisplay"
          style={{
            display: State_leDisplay,
            fontSize: slctdFont,
            lineHeight: "2em",
          }}
        >
          {State_le.map((data:any) => {

            if (data.displayPage == State_pageFetch) {

              return (
                <div>
                  <p style={{display:varENG}}><b>{data.title_EN}</b></p>
                  <p style={{display:varDEU}}><b>{data.title_DE}</b></p>

                  <div className = "banner">
                    <p style={{display:varENG}}>  
                      <b>Event held on:</b> {data.eventOn} 
                      <br></br>                   
                      <b>Published on:</b> {data.publishedOn} 
                      <br></br> 
                      <b>A report by:</b> {data.reportBy_EN}                
                    </p>

                    <p style={{display:varDEU}}>  
                      <b>Veranstaltung am:</b> {data.eventOn} 
                      <br></br>                   
                      <b>Veröffentlicht am:</b> {data.publishedOn} 
                      <br></br> 
                      <b>Ein Bericht von:</b> {data.reportBy_DE}              
                    </p>

                  </div>

                  <figure>
                    <img
                      className="img_pos"
                      src={data.sample_image}
                      alt="Photos"
                    />
                  </figure> 

                  <p style={{display:varENG}} >{data.summaryText_EN}</p>
                  <p style={{display:varDEU}} >{data.summaryText_DE}</p>

                  <button style={{display:varENG}} onClick={()=>fullTextDisplay(data.id)}>Continue reading...</button> 
                  <button style={{display:varDEU}} onClick={()=>fullTextDisplay(data.id)}>Weiter lesen...</button>
                  <br></br>          
                  <br></br>
                  <br></br>
                </div> 
              )       
              
            } 

          })}

          <div className="navButtons">
            <ul>
              <li>First</li>

              <li>Previous</li>

              <li
                className={State_pageOneMark}
                onClick={() => articleSelector(State_pageOne)}
              >
                {State_pageOne}
              </li>

              <li
                className={State_pageTwoMark}
                onClick={() => articleSelector(State_pageTwo)}
              >
                {State_pageTwo}
              </li>

              <li>{State_pageThree}</li>

              <li>{State_pageDots}</li>

              <li>Next</li>

              <li>End</li>
            </ul>
          </div>
        </div>

        <div  className = "textDisplay" style={{display:State_fulltextDisplay,fontSize:slctdFont,lineHeight:"2em"}}>
                  
          {State_le.map((data:any)=>{         
         
            if (State_identity == data.id){

              return(

                <div >
                  <p style={{display:varENG}}> <b>{data.title_EN}</b> </p>
                  <p style={{display:varDEU}}> <b>{data.title_DE}</b> </p>

                  <div className = "banner">
                    <p style={{display:varENG}}>  
                     <b>Event held on:</b> {data.eventOn} 
                     <br></br>                   
                     <b>Published on:</b> {data.publishedOn} 
                     <br></br> 
                     <b>A report by:</b> {data.reportBy_EN}                
                    </p>

                    <p style={{display:varDEU}}>  
                      <b>Veranstaltung am:</b> {data.eventOn} 
                      <br></br>                   
                      <b>Veröffentlicht am:</b> {data.publishedOn} 
                      <br></br> 
                      <b>Ein Bericht von:</b> {data.reportBy_DE}              
                    </p>

                  </div>

                  <figure>
                    <img
                      className="img_pos"
                      src={data.sample_image}
                      alt="Photos"
                    />
                  </figure> 

                  <p style={{display:varENG}}>{data.summaryText_EN}</p>
                  <p style={{display:varDEU}}>{data.summaryText_DE}</p>

                  <p style={{display:varENG}}>{data.paragraphOne_EN}</p>
                  <p style={{display:varDEU}}>{data.paragraphOne_DE}</p>

                  <p style={{display:varENG}}>{data.paragraphTwo_EN}</p>
                  <p style={{display:varDEU}}>{data.paragraphTwo_DE}</p>

                  <p style={{display:varENG}}>{data.paragraphThree_EN}</p>
                  <p style={{display:varDEU}}>{data.paragraphThree_DE}</p>
                </div> 
              )      

            }  

          })}
        </div>


      </div>
    </div>
  );
}
