import React from 'react'
import './App.css'

export default function Navbar(props) {
    
    return (
      <div className="Navbar">
        <div className="logo">
            <img className="logo-img" src="react.png" alt="react-logo"/>
        </div>
            <h1 className="text">Welcome to my Gallery</h1>
        <div className={props.Dark ? "dark" : "light"} onClick={props.onClicking}>
            <img className={props.Dark ? "dark" : "light"} src={props.Dark ? "moon.png" : "sun.png"} />
            <h3 className="small-text">{props.Dark ? "Dark Mode" : "Light Mode"}</h3>
        </div>
        <div className="profile">
            <a href="https://github.com/quintessentialdevrev" target="_blank">
            <img className="profile" src="/github.png" alt="Github Profile Link" />
            </a>
        </div>
      </div>
    )

}