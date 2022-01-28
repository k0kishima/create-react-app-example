import React from 'react';

import { AdminLayout } from '@/components/Layout';
import { ItemList } from '../';

export const Settings = () => {
  return (
    <AdminLayout title='システム設定'>
      <ItemList />
    </AdminLayout>
  );
};
