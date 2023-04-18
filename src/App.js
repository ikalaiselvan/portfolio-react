import './App.css';
import { Routes, Route } from 'react-router-dom';
import Aside from './component/Aside';
import Main from './component/Main';
import Popup from './component/testing/Popup';

function App() {
  return (
    <main>
      <Aside />
      {/* <Popup /> */}
      <Main />
      {/* <Routes>
        <Route path="/side-bar" element={<Aside />} />
        <Route path="/main" element={<Main />} />
      </Routes> */}
    </main>
  );
}

export default App;

