import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Settings } from './Settings';

export const SettingRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Settings />} />
    </Routes>
  );
};
