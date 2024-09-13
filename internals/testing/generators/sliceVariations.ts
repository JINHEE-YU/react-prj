import { SliceProptNames } from '../../generators/slice';

type SliceVariationType = { [P in SliceProptNames]: any }[];

const sliceNameBase = `generatorTestingSlice`;

export const sliceVariations = (): SliceVariationType => {
  const variations: SliceVariationType = [
    {
      sliceName: `${sliceNameBase}1`,
      path: ``,
      wantSaga: true,
    },
    {
      sliceName: `${sliceNameBase}2`,
      path: `/pages/TodoPage`,
      wantSaga: false,
    },
    {
      sliceName: `${sliceNameBase}3`,
      path: `/pages/TodoPage/Features`,
      wantSaga: true,
    },
  ];

  return variations;
};
