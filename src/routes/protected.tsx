import React from 'react';
import { DashboardRoutes } from '@/features/dashboard';
import { SettingRoutes } from '@/features/setting';

export const protectedRoutes = [
  {
    path: '/dashboard/*',
    element: <DashboardRoutes />,
  },
  {
    path: '/setting/*',
    element: <SettingRoutes />,
  },
];
