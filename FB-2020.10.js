// ==UserScript==
// @name    FB-2.1
// @namespace  http://tampermonkey.net/
// @version   2.1
// @description try to take over the world!
// @author   You
// @match    https://www.facebook.com/bookmarks/*
// @match        https://www.facebook.com/bookmarks/pages?ref_type=logout_gear
// @match        https://www.facebook.com/bookmarks/pages?ref_type=logout_gear
// @match        https://www.facebook.com/*
// @match    https://www.facebook.com/*
// @require   http://code.jquery.com/jquery-1.11.0.min.js
// @require   https://qyz-admin.github.io/Email/layer.js
// @downloadURL  https://qyz-admin.github.io/Email/FB-2020.10.js
// @updateURL    https://qyz-admin.github.io/Email/FB-2020.10.js
// @grant    none
// ==/UserScript==

(function() {
    'use strict';
    // var targNode = document.querySelector('._cy7');
//      '<input type="button" value="暫時" class="search-button" id="zss_searchButton" >'
    var targNode =document.getElementsByClassName('thodolrn ojvp67qx taijpn5t buofh1pr j83agx80 aovydwv3 bqdfd6uv')[0];
  var wxzSearchBarNode = document.createElement('div');
     wxzSearchBarNode.setAttribute('id','header-close');
     wxzSearchBarNode.setAttribute('class','header-wxzbar header-info');
     wxzSearchBarNode.style = "height: 40px;font-size: 15px;"
     wxzSearchBarNode.innerHTML =
        ' <input class="search-query" autocomplete="off" placeholder="请输入--数值" id="wxz_input" style="text-align: center;width: 80px;">'
           +' <input type="button" value="通知 GO" class="search-button" id="tz_onputButton" >&nbsp'
           +' <input type="button" value=" 40 " class="search-button" id="tz_searchButton" > '
           +' <input type="button" value=" 40-80 " class="search-button" id="tz40_searchButton" >&nbsp'
           +' <input type="button" value=" 80以上 " class="search-button" id="tz45_searchButton" >&nbsp&nbsp'
           +'--- '
       +' <input type="button" value="消息 GO" class="search-button" id="wxz_searchButton" >&nbsp'
       +' <input type="button" value=" 40 " class="search-button" id="wxz40_searchButton" >&nbsp'
       +' <input type="button" value=" 40以上 " class="search-button" id="wxz45_searchButton" >&nbsp'
  targNode.appendChild(wxzSearchBarNode);
 //background
          //     +' <input class="search-query" autocomplete="off" placeholder="查詢--通知" id="tz_onput" style="text-align: center;width: 80px;">'
  var wxzbgNode = document.createElement('div');
      wxzbgNode.setAttribute('class','wxz-bg');
      wxzbgNode.style.display = 'none';
  document.querySelector('body').appendChild(wxzbgNode);
//-----------------------------------------------------------------------------------------公用函數--------------------------------------------------------------

//-------------------------------------------------------------------第一部分
 document.getElementById("wxz_searchButton").addEventListener("click", function fn() {//读取input数值
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
    var tags = document.getElementsByClassName(classnames);
        console.log(tags.length);
    var tip = "";
    for(var i=0; i<tags.length;i++){
        var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
        if(dd == 1 ){
            objArray[index] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
            index++;
        }else{
          console.log(99);
       }
   }
       return objArray;
};
  console.log(getElementByClassName("qjjbsfad j83agx80"));
  function sleep(n) {//計時函數
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
    var inputValue = document.getElementById("wxz_input").value;
      var inputValuee = document.getElementById("wxz40_searchButton").getAttribute("value");
      var inputValueee = document.getElementById("wxz45_searchButton").getAttribute("value");
if(inputValue == null || inputValue == ""){
  if(objArray.length<40 && objArray.length>0){
  for(var j=0; j<objArray.length;j++){
    var command=objArray[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
    vra.click();
    sleep(100);
   }
  }else if(objArray.length==0||objArray.length=="undefined"){
      alert("Hello 没有最新消息哦！！！");
     // layer.msg('Hello 没有最新消息哦！！！', {icon: 6});
  }else if(objArray.length>40){
     alert("数量 : "+objArray.length+" ; 请分别点击 40,； 45，按钮分两次打开页面 ");
  };
}else{
  for(var ij=0; ij<inputValue;ij++){
            var command0=objArray[ij];
            var vra0=document.createElement('a');
                vra0.target='_blank';
                vra0.href=command0;
           document.body.appendChild(vra0);
                vra0.click();
                sleep(100);
           }
     };
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("wxz45_searchButton").addEventListener("click", function fn() {//大于45直接打开页面
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
        if(dd == 1 ){
            objArray[index] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
            index++;
        }else{
          console.log(99);
       }
   }
       return objArray;
};
  console.log(getElementByClassName("qjjbsfad j83agx80"));
        function sleep(n) {//計時函數
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
     // var inputValueee = document.getElementById("wxz45_searchButton").getAttribute("value");
if(objArray.length>40){
   //  if(inputValueee > 40){
      for(var n=40; n<objArray.length+1;n++){
        var conmand=objArray[n];
        var vraa=document.createElement('a');
        vraa.target='_blank';
        vraa.href=conmand;
        document.body.appendChild(vraa);
        vraa.click();
        sleep(100);
        }
      }
  // }
 },false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
     document.getElementById("wxz40_searchButton").addEventListener("click", function fn() {//等于40-直接打开页面
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
        if(dd == 1 ){
            objArray[index] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
            index++;
        }else{
          console.log(99);
       }
   }
       return objArray;
};
  console.log(getElementByClassName("qjjbsfad j83agx80"));
                 function sleep(n) {//計時函數
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
    //  var inputValuee = document.getElementById("wxz40_searchButton").getAttribute("value");
 if(objArray.length>40){
    //  if(inputValuee < 41) {
       for(var m=0; m<41;m++){
       var comand=objArray[m];
       window.open(comand);
       window.location.reload;
       sleep(100);
           }
         }
    //   }
     },false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
 //-------------------------------------------------------------------------------------第二部分--------------------------------------------------------------------
     document.getElementById("tz_onputButton").addEventListener("click", function fn() {//读取onput数值
        var objArrayy= new Array();
        var indexyy = 0;
       function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
        if(dd == 1 ){
            objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
            indexyy++;
        }else{
          console.log(99);
       }
   }
       return objArrayy;
};
  console.log(getElementByClassNamey("qjjbsfad j83agx80"));
 function sleep(n) {//計時函數
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };

  for(var j=0; j<inputValue;j++){
    var command=objArrayy[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
    vra.click();
    sleep(100);
  }
     var inputValue = document.getElementById("wxz_input").value;
if(inputValue == null || inputValue == ""){
    if(objArrayy.length<40 && objArrayy.length>0){
      for(var jj=0; jj<objArrayy.length;jj++){
         var commandj=objArrayy[jj];
         var vraj=document.createElement('a');
         vraj.target='_blank';
         vraj.href=commandj;
         document.body.appendChild(vraj);
         vraj.click();
         sleep(100);
     }
  }else if(objArrayy.length==0||objArrayy.length=="undefined"){
      alert("Hello 没有最新通知哦！！！");
  }else if(objArrayy.length>40){
     alert("数量 : "+objArrayy.length+" ; 请分别点击 40,； 80； 120; 按钮分三次打开页面 ");
  };
}else{
  for(var ij=0; ij<inputValue;ij++){
            var command0=objArrayy[ij];
            var vra0=document.createElement('a');
                vra0.target='_blank';
                vra0.href=command0;
           document.body.appendChild(vra0);
                vra0.click();
                sleep(100);
           }
     };
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz_searchButton").addEventListener("click", function fn() {//通知信息40打開
        var objArrayy= new Array();
        var indexyy = 0;
       function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
        if(dd == 1 ){
            objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
            indexyy++;
        }else{
          console.log(99);
       }
   }
       return objArrayy;
};
  console.log(getElementByClassNamey("qjjbsfad j83agx80"));
 function sleep(n) {//計時函數
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
  for(var j=0; j<40;j++){
    var command=objArrayy[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
    vra.click();
    sleep(100);
  }
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz40_searchButton").addEventListener("click", function fn() {//通知信息40-80打開
        var objArrayy= new Array();
        var indexyy = 0;
       function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
        if(dd == 1 ){
            objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
            indexyy++;
        }else{
          console.log(99);
       }
   }
       return objArrayy;
};
  console.log(getElementByClassNamey("qjjbsfad j83agx80"));
 function sleep(n) {//計時函數
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
  for(var j=40; j<80;j++){
    var command=objArrayy[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
    vra.click();
    sleep(100);
  }
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz45_searchButton").addEventListener("click", function fn() {//通知信息80以上打開
        var objArrayy= new Array();
        var indexyy = 0;
       function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
        if(dd == 1 ){
            objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
            indexyy++;
        }else{
          console.log(99);
       }
   }
       return objArrayy;
};
  console.log(getElementByClassNamey("qjjbsfad j83agx80"));
 function sleep(n) {//計時函數
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
  for(var j=80; j<objArrayy.length;j++){
    var command=objArrayy[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
    vra.click();
    sleep(100);
  }
},false);

 //------------------------------------------------------------------------------------第三部分------页面刷新---------------------------------------------------------------

   //window.onload = function(){testTab();};
  //window.onload = function(){testTab();};
  //testTab();
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
        if(document.readyState=="complete"){
            if (width == 30) {
                  console.log("终止");
                   clearInterval(id);
            }else {
             //   testA();
              var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
                         console.log(tags[16]);
                 if (tags[16] == undefined) {
                    console.log("止");
                    width++;
                 }else{
                    testTab();
                 }
            }
        }
 };
    function testA() {
        var width = 0;
        var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
                       console.log(tags[16]);
        if (tags[16] == undefined) {
               width++;
               console.log("止");
        }else{
             width--;
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