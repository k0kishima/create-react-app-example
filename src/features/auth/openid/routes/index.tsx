import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Authorization } from '../';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='authorize' element={<Authorization />} />
    </Routes>
  );
};
