import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { authStore } from '@/features/auth/openid';
import { useAppDispatch } from '@/stores/store';

export const Container: React.VFC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authStore.actions.createSession());
    navigate('/');
  }, []);

  return <React.Fragment />;
};
