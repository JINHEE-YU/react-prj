/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { MemoPage } from './pages/MemoPage/Loadable';
import { TodoPage } from './pages/TodoPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React-proj"
        defaultTitle="React-proj"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React-proj application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<MemoPage />} />
        <Route path="/memo" element={<MemoPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
