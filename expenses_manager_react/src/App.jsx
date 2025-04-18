import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/login/Login'
import Layout from './pages/layout/Layout'
import Dashboard from './pages/dashboard/Dashboard';
import Transactions from './pages/transactions/Transactions';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* {Protected Routes} */}
      <Route path="/" element={<ProtectedRoute />} >
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Route>

      {/* {Page not FOund} */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
