import '@/css/main.css';
import '@/css/edituser.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.js';
import Sign from '@/pages/Sign.js';
import User from '@/pages/User.js';
import Layout from '@/pages/Layout.js';
import EditUser from '@/pages/EditUser';
import ArgentBank from './components/ArgentBank';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sign' element={<Sign />} />
            <Route path='/user' element={<User />} />
            <Route path='/useredit' element={<EditUser />} />
            <Route path='/argentbank' element={<ArgentBank />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
