import React, { useEffect } from 'react';

export const Landing: React.VFC = () => {
  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) {
      alert('You are not signed in.');
    }
  }, []);

  if (isAuthenticated) {
    return <div>You are signed in.</div>;
  } else {
    return (
      <div>
        You are not signed in.
        <br />
        <a href='/singin'>Sign in</a>
      </div>
    );
  }
};
