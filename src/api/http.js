import axios from 'axios';

class Http {

  request(config) {
    return new Promise((resolve, reject) => {
      axios.create({
        baseURL: 'http://localhost',
        timeout: 1000 * 60,
        validateStatus: function (status) {
          return status === 200;
        }
      })
        .request(config)
        .then(response => {

          // 这里进行判断后端响应情况
          if (response.data.code === 0) {
            return resolve(response.data);
          } else {
            return reject({httpStatus: 200, message: response.data.message});
          }

        })
        .catch(error => {
          if (error.response) {
            // 服务端抛出非200状态码
            return reject({httpStatus: error.response.status, message: `Network error(${error.response.status})`});
          }
          // 服务端无响应，或者断网
          reject({httpStatus: 0, message: 'Network error(0)'});

        });

    });

  }

}

export default Http;
