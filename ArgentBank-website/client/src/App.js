import '@/css/main.css';
import '@/css/edituser.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter';
import AdminRouter from '@/pages/Admin/AdminRouter';
import Sign from '@/pages/Auth/Sign';
import AuthGuard from '@/_helpers/AuthGuard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />}/>
          <Route path="/admin/*" element={
            <AuthGuard>
              <AdminRouter />
            </AuthGuard>
          }/>
          <Route path="/auth/*" element={<Sign />}/> {/* un doute ! */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
