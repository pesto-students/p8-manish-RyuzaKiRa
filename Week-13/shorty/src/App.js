import './App.css';
import './Style/Main.css';

import Main from './Component/Main';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="flex mask-custom" >
      <div className=''>
        <Main />
      </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
