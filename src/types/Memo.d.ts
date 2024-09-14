interface IMemoItemContent {
  content: string; // editor에 입력될 본문(태그포함)
  preview: string; // 목록에 표기될 본문(태그 미포함)
}

interface IMemoItem extends IMemoItemContent {
  id: string;
  created_at: string;
  selected: boolean;
}
