import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import "./nav_bar.css";
import { useDispatch, useSelector } from "react-redux";
import { langStatus, TSetLang } from "./redux";

export default function Navbar(props: any) {
  let varENG: string, varDEU: string;

  const slctdLang = useSelector((state: langStatus) => state.slctdLang.lang);

  if (slctdLang === "ENG") {
    varENG = "block";
    varDEU = "none";
  } else {
    varENG = "none";
    varDEU = "block";
  }

  const Disp = useDispatch<Dispatch<TSetLang>>();

  const chngDEU = () => {
    Disp({ type: "SET_DEUTSCH", payload: "DEU" });
  };
  const chngENG = () => {
    Disp({ type: "SET_ENGLISH", payload: "ENG" });
  };

  return (
    <div>
      <div className="navbar_en" style={{ display: varENG }}>
        <ul>
          <li style={{ borderBottom: props.pg_Home }}>Home</li>

          <li style={{ borderBottom: props.pg_Objectives }}>Objectives</li>

          <li style={{ borderBottom: props.pg_Activities }}>Activities</li>

          <li style={{ borderBottom: props.pg_Membership }}>Membership</li>

          <li style={{ borderBottom: props.pg_Organization }}>Organization</li>

          <li style={{ borderBottom: props.pg_Imprint }}>Imprint</li>

          <li style={{ borderBottom: props.pg_History }}>History</li>

         

          <li>
            <img
              className="lang_sel"
              onClick={chngDEU}
              src={require("../images/de.png")}
              alt="Lang_Deutsch"
            />
          </li>

          <li className="active">
            <img
              className="lang_sel"
              src={require("../images/uk.png")}
              alt="Lang_English"
            />
          </li>

          <li style={{ borderBottom: props.pg_Contact }}>Contact</li>
          
        </ul>
      </div>

      <div className="navbar_de" style={{ display: varDEU }}>
        <ul>
          <li style={{ borderBottom: props.pg_Home }}>Home</li>

          <li style={{ borderBottom: props.pg_Objectives }}>Aufgaben</li>

          <li style={{ borderBottom: props.pg_Activities }}>Aktivitäten</li>

          <li style={{ borderBottom: props.pg_Membership }}>Mitgliedschaft</li>

          <li style={{ borderBottom: props.pg_Organization }}>Organisation</li>

          <li style={{ borderBottom: props.pg_Imprint }}>Impressum</li>

          <li style={{ borderBottom: props.pg_History }}>Geschichte</li>

          

          <li className="active">
            <img
              className="lang_sel"
              src={require("../images/de.png")}
              alt="Lang_Deutsch"
            />
          </li>

          <li>
            <img
              className="lang_sel"
              onClick={chngENG}
              src={require("../images/uk.png")}
              alt="Lang_English"
            />
          </li>

          <li style={{ borderBottom: props.pg_Contact }}>Kontakt</li>
        </ul>
      </div>
    </div>
  );
}
