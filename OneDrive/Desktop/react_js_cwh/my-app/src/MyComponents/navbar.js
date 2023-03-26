import React from 'react'
import { useState } from 'react'
import "./DarkMode.css";


const Navbar = (props) => {

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };
  
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  
  const storedTheme = localStorage.getItem("theme");
  const [theme2, setTheme2] = useState("navbar navbar-expand-lg navbar-dark bg-dark");
  const [fontchange,setFont]=useState("black")

  
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);
  if (defaultDark) {
    setDark();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
      // setTheme2("navbar navbar-expand-lg navbar-dark bg-light")
    } else {
      setLight();
      // setTheme2("navbar navbar-expand-lg navbar-dark bg-dark")

    }
  };

  return (
    <div>
     <nav className= { theme2} >
  <div className="container-fluid"  >
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>       
      </ul>
      <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="checkbox" onChange={toggleTheme} defaultChecked={defaultDark} ></input> </div>
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
