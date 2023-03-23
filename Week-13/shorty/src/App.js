import './App.css';
import './Style/Main.css';

import Main from './Component/Main';
import ContactUs from './Component/ContactUs';
import NavBar from './Component/Navbar';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route index element={
          <div className="flex customShortUrlBody" >
          <div className=''>
            <Main />
          </div>
          </div>
        } />
        <Route path="/Contact" element={
          <>
            <div className='customContactUsBody'>
              <ContactUs />
            </div>
            <ToastContainer />
          </>
        } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
