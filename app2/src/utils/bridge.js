// util/bridge.js
let bridge = null

// ios
function setupWebViewJavascriptBridgeIOS(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  let WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)

  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

// 安卓
function setupWebViewJavascriptBridgeAZ(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  let WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  //这里最新IOS版是 https的scheme，真实环境下 需要判断iOS和Android，做下区分。
  //WVJBIframe.src = 'wvjbscheme://BRIDGE_LOADED';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

function bridgeInit() {
  if (bridge) {
    //已经注册过了就不要再次注册了
    return Promise.resolve(bridge)
  }
  //console.log('调用bridgeInit');
  var ua = navigator.userAgent //获取判断用的对象
  //console.log(ua);
  var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1 || ua.indexOf('android') > -1 //android终端
  var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  //ios 调用
  if (isiOS) {
    //console.log('判断出是ios');
    return new Promise((resolve, reject) => {
      try {
        setupWebViewJavascriptBridgeIOS(function (webViewJavascriptBridge) {
          //console.log('生成bridgeios', webViewJavascriptBridge);
          bridge = webViewJavascriptBridge //保存起来以后别的页面用
          resolve(bridge)
        })
      } catch (e) {
        reject(e)
      }
    })
  }
  //安卓调用
  if (isAndroid) {
    //console.log('判断出是Android');
    return new Promise((resolve, reject) => {
      try {
        setupWebViewJavascriptBridgeAZ(function (webViewJavascriptBridge) {
          // 是个异步的方法，不能直接return，（直接return的是里面那个方法）所以需要全局变量接收
          //console.log('生成bridgeAndroid', webViewJavascriptBridge);
          bridge = webViewJavascriptBridge //保存起来以后别的页面用
          resolve(bridge)
        })
      } catch (e) {
        reject(e)
      }
    })

  }
}

export const callHandler = (name, data) => {
  return bridgeInit().then(bridge => new Promise((resolve, reject) => {
    try {
      bridge.callHandler(name, data, (data) => resolve(data))
    } catch (e) {
      reject(e)
    }
  }))
}

export default {
  callHandler
}

