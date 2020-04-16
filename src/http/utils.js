import qs from 'qs';

/**
 * @deprecated 将对象转成 FormData
 * @param object {Object}
 * */
export function makeFormData (object) {
  let formData = new FormData();
  Object.keys(object).forEach(key => {
    formData.append(key, object[key]);
  });
  return formData;
}

/**
 * @deprecated 将对象转成 query string
 * @param object {Object}
 * */
export function makeQueryString (object) {
  return qs.stringify(object);
}

