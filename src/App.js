import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from "../src/Components/Navbar/Navbar"
import { AuthContextProvider } from './Context/AuthContext';
import Signup from './Pages/Signup/Signup';
import Account from './Pages/Account/Account';
import Login from './Pages/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {


  return (
    <div className='App'>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
