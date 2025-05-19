import React, { useState, useEffect } from 'react';
import { useAuth }       from './context/AuthContext';
import Navbar            from './Components/NavBar';
import Toast             from './Components/Toast';
import Home              from './pages/Home';
import Auctions          from './pages/Auctions';
import MyBids            from './pages/MyBids';
import MyAuctions        from './pages/MyAuctions';
import Support           from './pages/Support';
import Login             from './pages/Login';
import Register          from './pages/Register';
import ForgotPassword    from './pages/ForgotPassword';

export default function App() {
  const [page, setPage] = useState('home');
  const [toast, setToast] = useState({ msg:'', isSuccess:true, visible:false });
  const { isLoggedIn, login, logout } = useAuth();

  const showToast = (msg, isSuccess = true) => {
    setToast({ msg, isSuccess, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3000);
  };

  const handleLogin    = () => { login(); showToast('Successfully logged in!'); setPage('home'); };
  const handleLogout   = () => { logout(); showToast('Logged out.'); setPage('home'); };
  const handleRegister = () => { showToast('Registration successful! Please login.'); setPage('login'); };
  const handleReset    = () => { showToast('Password reset link sent to your email!'); setPage('login'); };

  // Prevent Ctrl+wheel zoom
  useEffect(() => {
    const onWheel = e => { if (e.ctrlKey) e.preventDefault(); };
    document.body.addEventListener('wheel', onWheel, { passive: false });
    return () => document.body.removeEventListener('wheel', onWheel);
  }, []);

  const pagesMap = {
    home:           <Home showToast={showToast} onNav={setPage} />,
    auctions:       <Auctions showToast={showToast} onNav={setPage} />,
    myBids:         <MyBids />,
    myAuctions:     <MyAuctions />,
    support:        <Support />,
    login:          <Login onLogin={handleLogin} onNav={setPage} />,
    register:       <Register onRegister={handleRegister} onNav={setPage} />,
    forgotPassword: <ForgotPassword onReset={handleReset} onNav={setPage} />,
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar
        currentPage={page}
        onNav={setPage}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      <Toast {...toast} />
      <main className="pt-4">
        {pagesMap[page]}
      </main>
    </div>
  );
}
