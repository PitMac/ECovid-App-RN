const url = 'https://api.covid19api.com/summary';

export const getDataGeneral = async () => {
  const res = await fetch(url);
  return await res.json();
};

export const getDataCountries = async () => {
  const res = await fetch(url);
  return await res.json();
};
