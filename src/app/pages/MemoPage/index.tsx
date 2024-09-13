import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';

export function MemoPage() {
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Memo Main App" />
      </Helmet>
    </>
  );
}
