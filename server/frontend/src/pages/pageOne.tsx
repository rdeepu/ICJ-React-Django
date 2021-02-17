import * as React from "react";
import Title from "./components/title_bar";
import Navbar from "./components/nav_bar";
import "./pageOne.css";
import { useSelector } from "react-redux";
import { langStatus } from "./components/redux";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  let varENG: string, varDEU: string;

  const slctdLang = useSelector((state: langStatus) => state.slctdLang.lang);

  if (slctdLang === "ENG") {
    varENG = "block";
    varDEU = "none";
  } else {
    varENG = "none";
    varDEU = "block";
  }

  const [State_newsUpdates, setState_newsUpdates] = useState([]);
  const [State_eventsCalender, setState_eventsCalender] = useState([]);
  const [State_recentEvents,setState_recentEvents] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.all([
            axios.get("newsUpdate_Home_api"),
            axios.get("eventsCalender_Home_api"),
            axios.get("recentEvents_Home_api")])
      .then((retrieve) => {
           setState_newsUpdates(retrieve[0].data);
           setState_eventsCalender(retrieve[1].data);
           setState_recentEvents(retrieve[2].data)
      });
  }

  return (
    <div>
      <Title />

      <Navbar pg_Home="4px solid red" />

      <div className="newsbox_a">
        <p style={{ display: varENG }}>News & Updates</p>
        <p style={{ display: varDEU }}>Nachrichten & Updates</p>
      </div>

      <div className="newsbox_b">
        {State_newsUpdates.map((data: any) => (
          <div>
            <p style={{ display: varENG }}>{data.newsUpdates_EN}</p>
            <p style={{ display: varDEU }}>{data.newsUpdates_DE}</p>
          </div>
        ))}
      </div>

      <div className="eventbox">
        <p style={{ display: varENG }}>Upcoming Events</p>
        <p style={{ display: varDEU }}>anstehende Veranstaltungen</p>

        <div className="grid_cont_event">
          <div style={{ display: varENG }}>Date</div>
          <div style={{ display: varENG }}>Time(24Hrs)</div>
          <div style={{ display: varENG }}>Duration(Hrs)</div>
          <div style={{ display: varENG }}>Event</div>

          <div style={{ display: varDEU }}>Datum</div>
          <div style={{ display: varDEU }}>Uhrzeit(24Hrs)</div>
          <div style={{ display: varDEU }}>Dauer(Hrs)</div>
          <div style={{ display: varDEU }}>Veranstaltung</div>
        </div>

        {State_eventsCalender.map((data: any) => (
          <div className = "grid_cont_event">
            <div style={{ display: varENG }}>{data.date}</div>
            <div style={{ display: varENG }}>{data.time}</div>
            <div style={{ display: varENG }}>{data.duration}</div>
            <div style={{ display: varENG }}>{data.events_EN}</div>

            <div style={{ display: varDEU }}>{data.date}</div>
            <div style={{ display: varDEU }}>{data.time}</div>
            <div style={{ display: varDEU }}>{data.duration}</div>
            <div style={{ display: varDEU }}>{data.events_DE}</div>
          </div>
        ))}
      </div>

      <div className = "photobox">
        <p className="photobox_txt" style={{ display: varENG }}>
          Recent events
        </p>
        <p className="photobox_txt" style={{ display: varDEU }}>
          Neueste Veranstaltungen
        </p>

      {State_recentEvents.map((data:any) => ( 
        <div className = "photo_pos">  
        <figure>
          <img
            className="photobox_img_a"
            src = {data.image}
            alt="Pancake Tuesday Celebrations"
          />
          <figcaption className="img_capt" style={{ display: varENG }}>
            {data.img_description_EN}
          </figcaption>
          <figcaption className="img_capt" style={{ display: varDEU }}>
            {data.img_description_DE}
          </figcaption>
        </figure>
        </div> 

      ))}       
      </div>
    </div>
  );
}
