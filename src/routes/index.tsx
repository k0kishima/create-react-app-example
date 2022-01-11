import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Landing } from '@/features/misc';
import { useSelector } from '@/stores/store';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = isAuthenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
