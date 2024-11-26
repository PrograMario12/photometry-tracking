import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Priority from './components/Priority/Priority';
import Register from './components/Register/Register';
import Final from './components/Final/Final';
import Login from './components/Auth/Login';
import { AuthProvider } from './components/Auth/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="container-fluid">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/priority" element={<Priority onChange={(priority) => console.log(priority)} />} />
              <Route path="/final" element={<Final />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
