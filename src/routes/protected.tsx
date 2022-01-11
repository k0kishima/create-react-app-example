import React from 'react';
import { DashboardRoutes } from '@/features/dashboard';

export const protectedRoutes = [
  {
    path: '/dashboard/*',
    element: <DashboardRoutes />,
  },
];
