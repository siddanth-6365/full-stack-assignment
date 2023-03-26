// import "./DarkMode.css";
// import { ChangeEventHandler } from "react";

// const setDark = () => {
//   localStorage.setItem("theme", "dark");
//   document.documentElement.setAttribute("data-theme", "dark");
// };

// const setLight = () => {
//   localStorage.setItem("theme", "light");
//   document.documentElement.setAttribute("data-theme", "light");
// };

// const storedTheme = localStorage.getItem("theme");

// const prefersDark =
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;
// const defaultDark =
//   storedTheme === "dark" || (storedTheme === null && prefersDark);
// if (defaultDark) {
//   setDark();
// }
// const toggleTheme = (e) => {
//   if (e.target.checked) {
//     setDark();
//     props.theme("navbar navbar-expand-lg navbar-dark bg-light")
//   } else {
//     setLight();
//   }
// };

// const DarkMode = (props) => {
//   return (
//     <div className="toggle-theme-wrapper">
//       <span>☀️</span>
//       <label className="toggle-theme" htmlFor="checkbox">
//         <div class="form-check form-switch">
//           <input class="form-check-input" type="checkbox" id="checkbox" onChange={toggleTheme} defaultChecked={defaultDark} ></input> </div>
//         <div className="slider round"></div>
//       </label>
//       <span>🌒</span>
//     </div>
//   );
// };

// export default DarkMode;