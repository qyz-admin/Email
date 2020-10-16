// ==UserScript==
// @name    FB-10.1.1
// @namespace  http://tampermonkey.net/
// @version   10.1.1
// @description try to take over the world!
// @author   You
//@exclude   https://www.facebook.com/bookmarks/pages?ref_type=logout_gear
//@exclude   https://www.facebook.com/bookmarks/pages
// @match    https://www.facebook.com/bookmarks/*
// @match    https://www.facebook.com/*
// @match    https://www.facebook.com/*
// @require   http://code.jquery.com/jquery-1.11.0.min.js
// @require   https://qyz-admin.github.io/Email/layer.js
// @downloadURL  https://qyz-admin.github.io/Email/FB-2020.10.1.js
// @updateURL    https://qyz-admin.github.io/Email/FB-2020.10.1.js
// @grant    none
// ==/UserScript==

(function() {
 //------------------------------------------------------------------------------------第三部分------页面刷新---------------------------------------------------------------

   //window.onload = function(){testTab();};
 //   window.onload = function(){testTab();};
 //   testTab();
     //    var d = document;
     //     d.onload = testTab();//火狐浏览器兼容
  //  window.onload = testTab();//chrome浏览器兼容
    /*
    var interval = setInterval(function () {
            console.log("调用testTab");
            if(document.readyState=="complete"){
                testTab();
                clearInterval(interval);
            }
        },2000);
        */
       var width = 0;
       var id = setInterval(frame, 2000);
      function frame() {
             if (width == 10) {
                  console.log("终止");
                   clearInterval(id);
            } else {
                  width++;
                  console.log("刷新");
                      testTab();
            }
      };
    function testTab() {
      var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
            console.log(tags[16]);
         //   console.log(tags[16].childElementCount);
        console.log(tags[16].childNodes.length);
      //  var tk = tags[16].childElementCount;
        var tk = tags[16].childNodes.length;
      if (tags[1].childNodes.length==2){
            var cod00=window.location.href;
                     cod00=cod00 +"inbox";
                var vraa00=document.createElement('a');
                    vraa00.target='_self';
                    vraa00.href=cod00;
                    document.body.appendChild(vraa00);
                    vraa00.click();
      }else if (tk==1){
           window.opener = null;//禁止某些浏览器的一些弹窗
          window.open('','_self');
          window.close()
             console.log(1112222333);
              window.location.href="about:blank";
             window.close();
       }
    }
})();