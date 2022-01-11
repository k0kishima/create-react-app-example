import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
};
