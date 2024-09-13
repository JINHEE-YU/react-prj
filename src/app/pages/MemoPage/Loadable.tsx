/**
 * Asynchronously loads the component for Memo
 */

import { lazyLoad } from 'utils/loadable';

export const MemoPage = lazyLoad(
  () => import('./index'),
  module => module.MemoPage,
);
