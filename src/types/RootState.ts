// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { MemoState } from 'store/memo/types';
import { TodoState } from 'store/todo/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  todo: TodoState;
  memo: MemoState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
