import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Setting } from '../';

export const SettingRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Setting />} />
    </Routes>
  );
};
