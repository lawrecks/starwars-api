export const calculateTotalHeight = (characters) => {
  const data = characters.reduce((accumulator, currentVal) => {
    if (!accumulator.cm) {
      accumulator.count = 1;
      accumulator.cm = Number(currentVal.height);
    } else {
      accumulator.count += 1;
      accumulator.cm += Number(currentVal.height);
    }
    return accumulator;
  }, {});
  return {
    ...data,
    ft: Math.floor(data.cm / 30.48),
    inches: Number((data.cm / 2.54).toFixed(2)),
  };
};

export const compareItemValues = (key, order = 'asc') => (a, b) => {
  const keys = Object.keys(a);
  if (!keys.includes(key)) {
    return 0;
  }
  const int = ['height'];
  const itemA = (!int.includes(key))
    ? a[key].toUpperCase() : Number(a[key]);
  const itemB = (!int.includes(key))
    ? b[key].toUpperCase() : Number(b[key]);

  let comparison;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  } else {
    comparison = 0;
  }
  return (
    (order === 'desc') ? (comparison * -1) : comparison
  );
};

const filter = (data, key, value) => data.filter((el) => el[key] === value);

export const sortOrFilterCharacters = (data, query = {}) => {
  const queryKeys = Object.keys(query);
  let result = data;
  if (queryKeys.includes('sort')) {
    result = result.sort(compareItemValues(query.sort, query.order));
  }
  if (queryKeys.includes('gender')) {
    result = filter(data, 'gender', query.gender);
  }
  return result;
};
