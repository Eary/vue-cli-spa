// import 'whatwg-fetch';

function checkStatus(response) {
  console.info(response);
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  console.info(response.json())
  return response.json()
}

module.exports = {
  post(opts){
    // fetch(opts.api,{
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     'Accept': 'application/json'
    //   },
    //   body: "info={telephone:18601363531}"
    // })
    //   // .then(parseJSON)
    //   .then(function(data) {
    //     opts.callback(data)
    //   }).catch(function(error) {
    //   //TODO 请求错误处理
    //   console.log('request failed', error)
    // })
  },
  get(opts){
    // fetch(opts.api,{
    //   method: 'GET',
    //   body: JSON.stringify(opts.data)
    // })
    //   .then(checkStatus)
    //   .then(parseJSON)
    //   .then(function(data) {
    //     opts.callback(data)
    //   }).catch(function(error) {
    //   //TODO 请求错误处理
    //   console.log('request failed', error)
    // })
  },
  checkIsChinese(str){
    let reg = new RegExp("[\\u4E00]-\\u9FFF]+","g")
    return !reg.test(str);
  }
}
