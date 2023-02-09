const createDataEnqueue = <T extends { position: number }>() => {
  let nowPosition = 0;
  return (array: T[], item: T) => {
    nowPosition += 1;
    return array.concat({ ...item, position: nowPosition });
  };
};

export const reorder = <T extends { position: number }>(
  data: T[],
  oldIndex: number,
  newIndex: number,
) => {
  if (oldIndex === newIndex) {
    return data;
  }
  const enqueue = createDataEnqueue<T>();

  return data.reduce<T[]>((acc, current, index) => {
    if (index === newIndex && oldIndex > newIndex) {
      acc = enqueue(acc, data[oldIndex]);
    }
    if (index !== oldIndex) {
      acc = enqueue(acc, current);
    }
    if (index === newIndex && oldIndex < newIndex) {
      acc = enqueue(acc, data[oldIndex]);
    }
    return acc;
  }, []);
};
