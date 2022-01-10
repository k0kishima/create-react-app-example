import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminLayout } from '@/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <p>children</p>
      </AdminLayout>
    </BrowserRouter>
  );
}

export default App;
