// ==UserScript==
// @name         New admin7.0
// @namespace    http://tampermonkey.net/
// @version      7.0.1
// @description  try to take over the world!
// @author       qyz
// @match        http://gimp.giikin.com/front/*
// @match        http://gsso.giikin.com/admin/index/*
// @match        http://gimp.giikin.com/front/orderToolsServiceQuery?_user=1343&_token=bed20077efe149ec18ad68173c6afd35&_url=http%3A%2F%2Fgimp.giikin.com%2Ffront%2ForderToolsServiceQuery
// @grant        none
// @require      https://libs.baidu.com/jquery/1.9.0/jquery.js
// @require      https://cdn.staticfile.org/vue/2.2.2/vue.min.js
// @downloadURL  https://qyz-admin.github.io/Email/new-admin-7.0.js
// @updateURL    https://qyz-admin.github.io/Email/new-admin-7.0.js
// ==/UserScript==https://13.229.176.203/static/admin/js/tabs.js  // @grant        none Tampermonkey
// ==/UserScript==

(function() {
    'use strict';
     var nav = document.getElementsByClassName("hor-menu   hidden-sm hidden-xs")[1];
             console.log(nav);
     var targNode = document.createElement('div');
       //  targNode.setAttribute('class','classic-menu-dropdown');
         targNode.setAttribute('id','header-nav');
         targNode.style = "position: relative;float: left;top: -42px; left: 100px;width:100%;";
         targNode.innerHTML = '<input type="text" placeholder=" 订单编号 " class="search-button" id="order_input" style = "height:35px;"> &nbsp&nbsp'
                             +'<input type="button" class="btn default showcol" id="close99_searchButton" value="开关" onclick="add()"> &nbsp;'
                             +'<input type="button" class="btn default showcol" id="order_search"  value="GO-客服" > &nbsp'
                             +'<input type="button" class="btn default showcol" id="w_searchButton"  value="促单查询"> &nbsp'
                             +'<input type="button" class="btn default showcol" id="cd_searchButton"  value="金額查询"> &nbsp'
                             +'<input type="button" class="btn default showcol" id="wxz_searchButton" value="查詢-補發"> &nbsp'
                             +'<input type="button" class="btn purple" id="wxcd_searchButton" value="显示/隐藏列"> &nbsp'
                             +'<input type="button" class="btn green" id="xxb_searchButton"  value="信息表显示"> &nbsp'
                             +'<input type="button" class="btn green" id="test_searchButton"  value="open订单窗口">'
     nav.appendChild(targNode);

  document.getElementById("order_search").addEventListener("click", function(){//test显示  tanchuang
      querty();
},false);
    //查询xhr , 以此为基础的函数
    function querty(){
        var xhr;
        var orderVal = document.getElementById("order_input").value;
            console.log(orderVal);
        var strHtml ="orderPrefix="+orderVal+"&_user=1343&_token=2798627534e017fc4c8df58d8170c2a1";
        var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
            if( window.XMLHttpRequest ){
                xhr=new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            };
           xhr.onreadystatechange=function(){
             if( xhr.readyState==4 && xhr.status==200){
                 console.log(xhr.responseText);//返回json字符串
            var resVal = eval("("+ this.responseText +")");//json转化为js对象
                 console.log(resVal);
//                  console.log(mp3.code);
//                  console.log(mp3.data.list);
//                  console.log(mp3.data.list[0]);
//            var listVal = mp3.data.list[0];
//                  console.log(listVal.addTime);
//               for(var i=0;i<listVal.length;i++){
//                      var dataVal = listVal[i];
//                       console.log(dataVal);
//                  }
             }
           };
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
  };

     window.onload=function () {

        };


    var stNode11 = document.createElement('script');
        stNode11 .innerHTML =
   'function add(){'
     +'var xhr0;var strHtml0 ="orderPrefix=NK200626202154378445,NR006052326353290";'
     +'var xhr_url0 = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";'
     +'if( window.XMLHttpRequest ){ xhr0=new XMLHttpRequest();  }else{xhr0=new ActiveXObject("Microsoft.XMLHTTP");};'
     +'xhr0.onreadystatechange=function(){'
            +'if(xhr0.readyState==4 && xhr0.status==200){ console.log(xhr0.responseText);console.log(xhr0.responseText.data); console.log(xhr0.responseText.code);'
          +'var mp3 = eval("("+ this.responseText +")"); console.log(mp3);console.log(mp3.code); console.log(mp3.data.list); console.log(mp3.data.list[0]);'
          +'var listVal =   mp3.data.list[0]; console.log(listVal.addTime);'
         +'for(var i=0;i<listVal.length;i++){'
               +'var dataVal = listVal[i]; console.log(dataVal); } } },'
    +'xhr0.open("post",xhr_url0,true);'
    +'xhr0.setRequestHeader("Content-type","application/x-www-form-urlencoded");'
         +'xhr0.send(strHtml0);}'
       document.querySelector('body').appendChild(stNode11);

})();