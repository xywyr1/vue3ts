import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/proxyApi';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '';
}

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截,添加token的头
axios.interceptors.request.use(
  config => {
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//响应请求拦截
axios.interceptors.response.use(
  response => {
    //返回码200，请求成功，返回数据
    if (response.status === 200) {
      if (response.data.code === 511) {
        //未授权调取授权接口
      } else if (response.data.code === 510) {
        //未登录跳转登录页
      } else {
        return Promise.resolve(response)
      }
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      return Promise.reject(error.response)
    }
  }
)

//GET请求
export function httpGet({
  url,
  params = {}
}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { param })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// POST请求
export function httpPost({
  url,
  data = {},
  params = {}
}){
  return new Promise((resolve,reject) => {
    axios({
      url,
      method: 'post',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      data,
      params
    }).then((res) => {
      resolve(res.data)
    })
  })
}



