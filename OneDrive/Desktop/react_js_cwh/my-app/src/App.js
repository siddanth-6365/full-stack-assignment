// import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/navbar';
import TextForm from './MyComponents/TextForm';


function App() {
  return (
    <>
    <div className="header">
    <Navbar title = "TextUtils" />
    </div>
   <div className="container my-3">
    <h1>Enter to Analysis</h1>
    <TextForm />
   </div>
   </>

  );
}

export default App;
