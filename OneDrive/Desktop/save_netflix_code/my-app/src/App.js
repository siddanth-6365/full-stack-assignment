import Navbar from "./MyComponents/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
<Route exact path="/login" element={ <Login />} />
<Route exact path="/signup" element={ <SignUp />} />
<Route exact path="/Account" element={ <Account />} />

        </Routes>

      </AuthContextProvider>

    </>
  );
}

export default App;
