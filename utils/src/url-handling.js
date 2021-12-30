import qs from 'qs';

const getParameterByName = (name, url = window.location.href) => {
  const [, queryParams] = url.split('?');
  const { [name]: paramValue = null } = qs.parse(queryParams);

  return paramValue;
};

const getParameters = (url = window.location.href) => {
  const [, queryParams] = url.split('?');
  return qs.parse(queryParams);
};

export { getParameterByName, getParameters };
