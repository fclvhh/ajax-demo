

console.log("请求js成功了!!!")
window.onload = function () {
  var getCSS = document.querySelector("#getCSS")
  console.log(getCSS)
  getCSS.onclick = function () {
    const reqAjax = new XMLHttpRequest()
    reqAjax.open("GET", "/style.css")
    reqAjax.onload = () => {
      console.log("请求css成功了")
      console.log("req.response")
      console.log(reqAjax.response)
      const style = document.createElement('style')
      style.innerHTML = reqAjax.response
      document.head.appendChild(style)
    }
    reqAjax.onerror = () => {
      console.log("失败了!!!")
    }
    reqAjax.send()
  }
}

