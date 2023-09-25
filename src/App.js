import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import CommentsPage from './pages/Comments';
// import ErrorPage from './pages/ErrorPage';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Outlet />
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        {/* <Routes path="/error" component={ErrorPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
