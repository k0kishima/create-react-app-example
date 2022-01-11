import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useSelector } from '@/stores/store';

export const Landing: React.VFC = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, []);

  if (isAuthenticated) {
    return <div>You are signed in.</div>;
  } else {
    return (
      <div>
        You are not signed in.
        <br />
        <a href='/auth/openid/authorize'>Sign in</a>
      </div>
    );
  }
};
