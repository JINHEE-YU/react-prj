interface ITodoItemContent {
  content: string;
}

interface IdotoItem extends ITodoItemContent {
  id: string;
  completed: boolean;
  edition: boolean;
}
