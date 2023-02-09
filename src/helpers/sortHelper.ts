export const sortInOrder =
  <T>(orderArr: T[]) =>
  (first: T, second: T) => {
    const idxFirst = orderArr.indexOf(first);
    const idxSecond = orderArr.indexOf(second);
    if (idxFirst === -1 || idxSecond === -1) {
      throw new Error('element in original array does not exist in orderArr');
    }
    return idxFirst - idxSecond;
  };
