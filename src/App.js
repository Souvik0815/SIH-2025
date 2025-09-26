import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Beneficiaries from './pages/Beneficiaries';
import CreditScoring from './pages/CreditScoring';
import DataUpload from './pages/DataUpload';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/credit-scoring" element={<CreditScoring />} />
          <Route path="/data-upload" element={<DataUpload />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
