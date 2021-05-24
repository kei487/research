// デバイスのボタンイベントを検知するためのリスナー
function setVisibilityEvent(){
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") {
      hidden = "mozHidden";
      visibilityChange = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
    document.addEventListener(visibilityChange, function(){
      // ページ非表示と表示時に呼ばれるため、表示から非表示になった時だけ呼ばれるように
      // document.hidden条件を追加
      if(document.hidden){
        request("visibilitychange");
      }
    }, false);
  }
  
  // ページ遷移イベントを検知するためのリスナー
  function setPageTransitionListener(){
    window.addEventListener("pagehide", function(){
      request("pagehide");
    }, false);
  }
  
  // 非表示時の処理
  // 以下の場合、サーバに通知する処理
  function request(event){
    var id = 'test_'+window.btoa(event);
    var img = document.createElement('img');
    var endPoint = 'http://...';
    img.src = endPoint + query;
    img.id = id;
    body.appendChild(img);
    img.parentNode.removeChild(img);
  }
  
  function main(){
    setVisibilityEvent();
    setPageTransitionListener();
  }
  
  main();