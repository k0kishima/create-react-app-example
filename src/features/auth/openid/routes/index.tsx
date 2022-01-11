import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Authorization, Callback } from '../';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='authorize' element={<Authorization />} />
      <Route path='callback' element={<Callback />} />
    </Routes>
  );
};
