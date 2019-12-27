

console.log("请求js成功了!!!")
window.onload = function () {
  // 请求css
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
  // 请求js
  var getJS = document.querySelector("#getJS")
  console.log(getJS)
  getJS.addEventListener('click', () => {
    var reqAjax2 = new XMLHttpRequest()
    reqAjax2.open("GET", "/try.js")
    reqAjax2.onload = () => {
      console.log("请求js成功")
      console.log("reqAjax2.response")

      var script = document.createElement("script")
      script.innerHTML = reqAjax2.responseText
      document.body.appendChild(script)
    }
    reqAjax2.onerror = ()=>{
      console.log("失败了!!!")
    }
    reqAjax2.send()
  }, false)
  // 请求html
  var getHTML = document.querySelector('#getHTML')
  getHTML.addEventListener('click',()=>{
    var xhr = new XMLHttpRequest()
    xhr.open("GET","/3.html")
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === 4){
        console.log("请求得到了响应!!!")
        if (xhr.status === 200){
          console.log(xhr.response)
          var div = document.createElement('div')
          div.innerHTML = xhr.response
          document.body.appendChild(div)
        }

      }
    }
  xhr.onerror = ()=>{
    console.log("失败了！！！")   
  }
  xhr.send()
  },false)
  // 请求json
  var getJSON = document.querySelector("#getJSON")
  getJSON.addEventListener("click",()=>{
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/5.json")
    xhr.onreadystatechange = ()=>{
      if (xhr.readyState === 4){
        if(xhr.status>=200 && xhr.status<300){
          console.log(xhr.response)
          var obj = JSON.parse(xhr.response)
          console.log(obj)
        }
      }
    }
    xhr.send()
  },false)
}

