import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

export const baseSelector = (state: RootState) => state.memo;

const MemoListSelector = createSelector(baseSelector, state =>
  //state는 직접적으로 sort함수 사용 불가.
  // 최신순 정렬
  [...state.memolist]
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
    .filter(memo => memo.content.includes(state.search)),
);

const SelectedMemoListSelector = createSelector(baseSelector, state =>
  state.memolist.find(memo => memo.selected),
);

const SearchMemoSelector = createSelector(baseSelector, state => state.search);

export { MemoListSelector, SelectedMemoListSelector, SearchMemoSelector };
