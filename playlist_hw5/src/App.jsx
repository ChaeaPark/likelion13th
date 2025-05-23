import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Playlist from './pages/Playlist';
import Top100 from './pages/Top100';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { Layout } from './components/layouts/Layout'; // ❗ 중괄호 주의

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Playlist />} />
          <Route path="top100" element={<Top100 />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
