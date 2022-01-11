import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Container: React.VFC = () => {
  const navigate = useNavigate();
  const _query = new URLSearchParams(location.search);
  const state = _query.get('state') as string;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    alert(state);
    return;
  }, []);

  // TODO: 正式なUI決まったら書き直す
  if (loading) {
    return <React.Fragment />;
  } else {
    navigate('/');
    return <React.Fragment />;
  }
};
