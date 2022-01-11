import React from 'react';
import { AuthRoutes } from '@/features/auth/openid';

export const publicRoutes = [
  {
    path: '/auth/openid/*',
    element: <AuthRoutes />,
  },
];
