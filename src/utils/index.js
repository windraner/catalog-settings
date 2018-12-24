export const createSelectOptions = (data = []) => {
  return data.map(item => {
    return { value: item, label: item };
  });
};
