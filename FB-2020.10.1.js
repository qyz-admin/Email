// ==UserScript==
// @name    FB_rb-20.12.9
// @namespace  http://tampermonkey.net/
// @version   20.12.9
// @description try to take over the world!
// @author   You
// @match    https://www.facebook.com/*
// @match    https://www.facebook.com/bookmarks/*
// @require   http://code.jquery.com/jquery-1.11.0.min.js
// @require   https://qyz-admin.github.io/Email/layer.js
// @downloadURL  https://qyz-admin.github.io/Email/FB-2020.10.1.js
// @updateURL    https://qyz-admin.github.io/Email/FB-2020.10.1.js
// @grant    none
// ==/UserScript==

window.onload = (function() {
//------页面自动刷新设置-----
    SubmitWeb();
function SubmitWeb() { //总网址加载判断设置（一）
        var cod99=window.location.href;
        var reg = /\d{10,}/;
        if (reg.test(cod99)) {
            console.log("正在刷新网页详细内容---");
            var width = 0;
            var idB = setInterval(SubmitAB, 2000);
            function SubmitAB() {
                // var tags = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb mdeji52x jagab5yi g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m");
               //  var tagsValue =  tags[0].innerText
                var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
                var tagsValue = tags[15].firstElementChild.firstElementChild.innerText;
                if(cod99.search(/inbox/i) == "-1" && cod99.search(/notifications/i) == "-1"){
                    if (tagsValue == "首页" || tagsValue == "Home") {
                        console.log("终止刷新网页");
                        clearInterval(idB);
                        testAAA();
                    }else{
                        console.log("正在刷新网页");
                        testAAA();
                   }
                }else{
                    console.log("不需要刷新网页");
                    clearInterval(idB);
                }
           }
        }else{
            console.log("正在加载网页标题内容---");//  yemian();
            var interval = setInterval(Fload, 2000);
            function Fload(){
                if(document.readyState =="complete"){
                    var targNode =document.getElementsByClassName('thodolrn ojvp67qx taijpn5t buofh1pr j83agx80 aovydwv3 bqdfd6uv')[0];
                    if(targNode.childElementCount == 7){
                        console.log("页面标题已获取---加载成功");
                        clearInterval(interval);
                    }else{
                        console.log("页面标题正获取中---");
                        yemian();
                    }
                }
            }
        }
    };
//--------------------------------1、-检测是否有私讯
 function testAAA() { //正在刷新网页内容（三）
     //  var tags = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb mdeji52x jagab5yi g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m");
     //             console.log(tags);
       var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
       var tagsValue = tags[15].firstElementChild.firstElementChild.innerText;
       for(var t=0; t<tags.length;t++){
        //  if (tags[t].innerText == "Inbox" || tags[t].innerText == "收件箱") {
            if (tags[t].firstElementChild.firstElementChild.innerText == "Inbox" || tags[t].firstElementChild.firstElementChild.innerText == "收件箱") {
                 console.log(tags[t].parentNode.parentNode.childElementCount);
             var rr = tags[t].parentNode.parentNode.childElementCount;
             if (rr == "2") {
                    console.log("进行跳转网页");
                 var cod009=window.location.href;
                     cod009=cod009 +"inbox";
                 var vraa009=document.createElement('a');
                    vraa009.target='_self';
                    vraa009.href=cod009;
                    document.body.appendChild(vraa009);
                    vraa009.click();
                }else{
                    console.log("进行关闭网页");
                    window.opener = null;//禁止某些浏览器的一些弹窗
                    window.open('','_self');
                    window.close()
                    //    console.log(1112222333);
                    //      window.location.href="about:blank";
                    //    window.close();
                }
           }
        }
    };
//------页面自动刷新设置-----
function yemian(){ //正在加载网页标题内容（二）
    'use strict';
    // var targNode = document.querySelector('._cy7');     window.onload =
//      '<input type="button" value="暫時" class="search-button" id="zss_searchButton" >'
    var targNode =document.getElementsByClassName('thodolrn ojvp67qx taijpn5t buofh1pr j83agx80 aovydwv3 bqdfd6uv')[0];
  var wxzSearchBarNode = document.createElement('div');
     wxzSearchBarNode.setAttribute('id','header-close');
     wxzSearchBarNode.setAttribute('class','header-wxzbar header-info');
     wxzSearchBarNode.style = "height: 50px;font-size: 15px;width: 35%;"
     wxzSearchBarNode.innerHTML =
           ' <input type="button" value="通知 GO" class="search-button" id="tz_onputButton" title="点击查询-通知数量">&nbsp'
           +' <input type="button" value="30" class="search-button" id="tz_searchButton" title=" 0-30 ">&nbsp'
           +' <input type="button" value="60" class="search-button" id="tz60_searchButton" title=" 30-60 ">&nbsp'
           +' <input type="button" value="90" class="search-button" id="tz90_searchButton" title=" 60-90 ">&nbsp'
           +' <input type="button" value="120" class="search-button" id="tz120_searchButton" title=" 90-120 ">&nbsp'
           +' <input type="button" value="150" class="search-button" id="tz150_searchButton" title=" 120-150 ">&nbsp'
           +' <input type="button" value="180" class="search-button" id="tz180_searchButton" title=" 150-180 ">&nbsp'
           +' <input type="button" value="210" class="search-button" id="tz210_searchButton" title=" 180-210 ">&nbsp'
           +' <input type="button" value="240" class="search-button" id="tz240_searchButton" title=" 210-240 ">&nbsp'
           +' <input type="button" value="270" class="search-button" id="tz270_searchButton" title=" 240-270 ">&nbsp'
           +' <input type="button" value="270以上" class="search-button" id="tz45_searchButton" title=" 270以上全部打开 ">&nbsp&nbsp'
       +' <input type="button" value="消息 GO" class="search-button" id="wxz_searchButton" title="点击查询-消息数量">&nbsp'
       +' <input type="button" value="40" class="search-button" id="wxz40_searchButton" title=" 0-40 ">&nbsp'
       +' <input type="button" value="80" class="search-button" id="wxz80_searchButton" title=" 40-80 ">&nbsp'
       +' <input type="button" value="120" class="search-button" id="wxz120_searchButton" title=" 80-120 ">&nbsp'
       +' <input type="button" value="120以上" class="search-button" id="wxz45_searchButton" title=" 120以上全部打开 ">&nbsp'
           +' <input class="search-query" autocomplete="off" placeholder="请输入--" id="wxz_input" style="text-align: center;width: 80px;" title="请输入要打开--数值">'
  targNode.appendChild(wxzSearchBarNode);
 //background
          //     +' <input class="search-query" autocomplete="off" placeholder="查詢--通知" id="tz_onput" style="text-align: center;width: 80px;">'
  var wxzbgNode = document.createElement('div');
      wxzbgNode.setAttribute('class','wxz-bg');
      wxzbgNode.style.display = 'none';
  document.querySelector('body').appendChild(wxzbgNode);
//-----------------------------------------------------------------------------------------函數--------------------------------------------------------------

//-------------------------------------------------------------------第一部分----------------------------------
 document.getElementById("wxz_searchButton").addEventListener("click", function fn() {//读取input数值
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
    var tags = document.getElementsByClassName(classnames);
        console.log(tags.length);
    var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
        if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
           if(dd == 1 ){
               objArray[index] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
               index++;
           }else{
               console.log(99);
           }
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
  if(objArray.length<=40 && objArray.length>0){
  for(var j=0; j<=objArray.length+1;j++){
   var ev = document.createEvent("MouseEvents");
       ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
    var command=objArray[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
    //vra.click();
      vra.dispatchEvent(ev);
    sleep(100);
   }
  }else if(objArray.length==0||objArray.length=="undefined"){
      alert("Hello 没有最新消息哦！！！");
     // layer.msg('Hello 没有最新消息哦！！！', {icon: 6});
  }else if(objArray.length>40){
     alert("数量 : "+objArray.length+" ; 请分别点击 40,； 80,； 120,；按钮分三次打开页面 ");
  };
}else{
  for(var ij=0; ij<=inputValue;ij++){
            var ev2 = document.createEvent("MouseEvents");
                ev2.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
            var command0=objArray[ij];
            var vra0=document.createElement('a');
                vra0.target='_blank';
                vra0.href=command0;
           document.body.appendChild(vra0);
              //  vra0.click();
                  vra0.dispatchEvent(ev2);
                sleep(100);
           }
     };
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
        var tags2 = tags[i].parentNode.getAttribute("class");
        if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
           if(dd == 1 ){
               objArray[index] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
               index++;
           }else{
               console.log(99);
           }
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
       for(var m=0; m<=41;m++){
       var ev = document.createEvent("MouseEvents");
           ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
       var comand=objArray[m];
       var vraaa=document.createElement('a');
           vraaa.target='_blank';
           vraaa.href=comand;
        document.body.appendChild(vraaa);
      //  vraaa.click();
          vraaa.dispatchEvent(ev);
       sleep(100);
           }
    }
},false);
 //----------------------------------------------------------------------第一部分（公用函数）----------------------------------------------------------------------------------
 function tem_wx(key,count){
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
        if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
           if(dd == 1 ){
               objArray[index] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
               index++;
           }else{
               console.log(99);
           }
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
if(objArray.length > key && objArray.length<=count){//通知信息打開
   for(var m2=key; m2<=objArray.length;m2++){
       var ev2 = document.createEvent("MouseEvents");
           ev2.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
       var comand2=objArray[m2];
       var vraaa2=document.createElement('a');
           vraaa2.target='_blank';
           vraaa2.href=comand2;
        document.body.appendChild(vraaa2);
      //  vraaa.click();
          vraaa.dispatchEvent(ev2);
       sleep(100);
   }
}else if(objArray.length>count){
   for(var m=key; m<=count;m++){
       var ev = document.createEvent("MouseEvents");
           ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
       var comand=objArray[m];
       var vraaa=document.createElement('a');
           vraaa.target='_blank';
           vraaa.href=comand;
        document.body.appendChild(vraaa);
      //  vraaa.click();
          vraaa.dispatchEvent(ev);
       sleep(100);
     }
   }else{
     alert("数量不满足打开需要 ; 请点击 消息 查询数量 ");
   }
};
//-----------------------------------------------------------------------------------------------------
document.getElementById("wxz80_searchButton").addEventListener("click", function fn() {//等于80-直接打开页面
     tem_wx(40,80)
},false);
//-----------------------------------------------------------------------------------------------------
document.getElementById("wxz80_searchButton").addEventListener("click", function fn() {//等于120-直接打开页面
     tem_wx(80,120)
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("wxz45_searchButton").addEventListener("click", function fn() {//大于80直接打开页面
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
        if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
           if(dd == 1 ){
               objArray[index] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
               index++;
           }else{
               console.log(99);
           }
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
if(objArray.length>80){
   //  if(inputValueee > 40){
      for(var n=80; n<=objArray.length+1;n++){
         var ev = document.createEvent("MouseEvents");
             ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
        var conmand=objArray[n];
        var vraa=document.createElement('a');
        vraa.target='_blank';
        vraa.href=conmand;
        document.body.appendChild(vraa);
      //  vraa.click();
          vraa.dispatchEvent(ev);
        sleep(100);
        }
      }
  // }
 },false);

 //-------------------------------------------------------------------------------------第一部分结束-------------------------------------------------------------------

 //-------------------------------------------------------------------------------------第二部分--------------------------------------------------------------------
     document.getElementById("tz_onputButton").addEventListener("click", function fn() {//读取onput数值
        var objArrayy= new Array();
        var indexyy = 0;
       function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
        if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
           if(dd == 1 ){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
               indexyy++;
           }else{
               console.log(99);
           }
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
     var inputValue = document.getElementById("wxz_input").value;
if(inputValue == null || inputValue == ""){
    if(objArrayy.length<=30 && objArrayy.length>0){
      for(var jj=0; jj<=objArrayy.length+1;jj++){
        var ev = document.createEvent("MouseEvents");
            ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
         var commandj=objArrayy[jj];
         var vraj=document.createElement('a');
         vraj.target='_blank';
         vraj.href=commandj;
       document.body.appendChild(vraj);
         vraj.dispatchEvent(ev);;
         sleep(100);
     }
  }else if(objArrayy.length==0||objArrayy.length=="undefined"){
      alert("Hello 没有最新通知哦！！！");
  }else if(objArrayy.length>30){
     alert("数量 : "+objArrayy.length+" ; 请分别点击 30,； 60； 90; 按钮分三次打开页面 ");
  };
}else{
   // var ev = document.createEvent("MouseEvents");
   //     ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
  for(var ij=0; ij<=inputValue;ij++){
           var ev2 = document.createEvent("MouseEvents");
               ev2.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
            var command0=objArrayy[ij];
            var vra0=document.createElement('a');
                vra0.target='_blank';
                vra0.href=command0;
           document.body.appendChild(vra0);
               // vra0.click();
                vra0.dispatchEvent(ev2);
                sleep(100);
           }
     };
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz_searchButton").addEventListener("click", function fn() {//通知信息30打開
        var objArrayy= new Array();
        var indexyy = 0;
function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
        if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
           if(dd == 1 ){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
               indexyy++;
           }else{
               console.log(99);
           }
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
   for(var j=0; j<=30;j++){//通知信息30打開
   var ev = document.createEvent("MouseEvents");
       ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
    var command=objArrayy[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
   // vra.click();
      vra.dispatchEvent(ev);
    sleep(100);
  }
},false);
 //--------------------------------------------------------------------------------(第二部分公用函数)-------------------------------------------------------------------------
function tem(key,count){
        var objArrayy= new Array();
        var indexyy = 0;
function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
         if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
           if(dd == 1 ){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
               indexyy++;
           }else{
               console.log(99);
           }
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
if(objArrayy.length > key && objArrayy.length<=count){//通知信息打開
  for(var j2=key; j2<=objArrayy.length;j2++){
   var ev2 = document.createEvent("MouseEvents");
       ev2.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
    var command2=objArrayy[j2];
    var vra2=document.createElement('a');
        vra2.target='_blank';
        vra2.href=command2;
    document.body.appendChild(vra2);
    //vra.click();
      vra2.dispatchEvent(ev2);
    sleep(100);
  }
}else if(objArrayy.length > count){
 for(var j=key; j<=count;j++){
   var ev = document.createEvent("MouseEvents");
       ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
    var command=objArrayy[j];
    var vra=document.createElement('a');
        vra.target='_blank';
        vra.href=command;
    document.body.appendChild(vra);
    //vra.click();
      vra.dispatchEvent(ev);
    sleep(100);
   }
 }else{
     alert("数量不满足打开需要 ; 请点击 通知 查询数量 ");
 }
};
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("tz60_searchButton").addEventListener("click", function fn() {//通知信息30-60打開
        tem(30, 60);
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz90_searchButton").addEventListener("click", function fn() {//通知信息60-90打開
      tem(60, 90);
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz120_searchButton").addEventListener("click", function fn() {//通知信息90-120打開
     tem(90, 120);
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz150_searchButton").addEventListener("click", function fn() {//通知信息120-150打開
     tem(120, 150);
},false);
//---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz180_searchButton").addEventListener("click", function fn() {//通知信息150-180打開
     tem(150, 180);
},false);
//---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz210_searchButton").addEventListener("click", function fn() {//通知信息180-210打開
     tem(180, 210);
},false);
//---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz240_searchButton").addEventListener("click", function fn() {//通知信息210-240打開
     tem(210, 240);
},false);
//---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz270_searchButton").addEventListener("click", function fn() {//通知信息240-270打開
     tem(240, 270);
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz45_searchButton").addEventListener("click", function fn() {//通知信息270以上打開
        var objArrayy= new Array();
        var indexyy = 0;
function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
         if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
           if(dd == 1 ){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
               indexyy++;
           }else{
               console.log(99);
           }
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
  for(var j=270; j<=objArrayy.length+1;j++){
   var ev = document.createEvent("MouseEvents");
       ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
    var command=objArrayy[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
  //  vra.click();
      vra.dispatchEvent(ev);
    sleep(100);
  }
},false);

};//------页面自动刷新设置-----


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
//--------------------------------1、-检测是否有私讯
 function testAAAB() { //正在刷新网页内容（三）
     //  var tags = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb mdeji52x jagab5yi g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m");
     //             console.log(tags);
       var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
       var tagsValue = tags[15].firstElementChild.firstElementChild.innerText;
       for(var t=0; t<tags.length;t++){
        //  if (tags[t].innerText == "Inbox" || tags[t].innerText == "收件箱") {
            if (tags[t].firstElementChild.firstElementChild.innerText == "Inbox" || tags[t].firstElementChild.firstElementChild.innerText == "收件箱") {
                 console.log(tags[t].parentNode.parentNode.childElementCount);
             var rr = tags[t].parentNode.parentNode.childElementCount;
             if (rr == "2") {
                    console.log("进行跳转网页");
                 var cod009=window.location.href;
                     cod009=cod009 +"inbox";
                 var vraa009=document.createElement('a');
                    vraa009.target='_self';
                    vraa009.href=cod009;
                    document.body.appendChild(vraa009);
                    vraa009.click();
                }else{
                    console.log("进行关闭网页");
                    window.opener = null;//禁止某些浏览器的一些弹窗
                    window.open('','_self');
                    window.close()
                    //    console.log(1112222333);
                    //      window.location.href="about:blank";
                    //    window.close();
                }
           }
        }
    };

//--------------------------------2.备用刷新函数
    function testAA() {
     //  var tags = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb mdeji52x jagab5yi g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m");
     //             console.log(tags);
       var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
       var tagsValue = tags[15].firstElementChild.firstElementChild.innerText;
       for(var t=0; t<tags.length;t++){
        //  if (tags[t].innerText == "Inbox" || tags[t].innerText == "收件箱") {
            if (tags[t].firstElementChild.firstElementChild.innerText == "Inbox" || tags[t].firstElementChild.firstElementChild.innerText == "收件箱") {
                 console.log(tags[t].parentNode.parentNode.childElementCount);
             var rr = tags[t].parentNode.parentNode.childElementCount;
             if (rr == "2") {
                    console.log("进行跳转网页---");
                 var cod009=window.location.href;
                     cod009=cod009 +"inbox";
                 var vraa009=document.createElement('a');
                    vraa009.target='_self';
                    vraa009.href=cod009;
                    document.body.appendChild(vraa009);
                    vraa009.click();
                }else{
                    console.log("进行跳转网页---");
                 var cod0066=window.location.href;
                     cod0066=cod0066 +"notifications";
                 var vraa0066=document.createElement('a');
                    vraa0066.target='_self';
                    vraa0066.href=cod0066;
                    document.body.appendChild(vraa0066);
                    vraa0066.click();

                 var dianji = document.getElementsByClassName("oajrlxb2 tdjehn4e qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t qypqp5cg q676j6op");
                            console.log(dianji);
                     dianji[2].click();
                var dianji2 = document.getElementsByClassName("hu5pjgll m6k467ps sp_rwX6oq1JZW3 sx_f9af67");
                            console.log(dianji2);
                    dianji2[0].click();
                    sleep(500);
                var dianji3 = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db gfeo3gy3 a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m");
                           console.log(dianji3);
                    dianji3[0].click();
                   sleep(500);

                    console.log("进行关闭网页---");
                    window.opener = null;//禁止某些浏览器的一些弹窗
                    window.open('','_self');
                    window.close()
                    //    console.log(1112222333);
                    //      window.location.href="about:blank";
                    //    window.close();
                }
           }
        }
    };
 function sleep(n) {//計時函數
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };


//--------------------------------备用刷新
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
         //    console.log(1112222333);
        //      window.location.href="about:blank";
         //    window.close();
       }
    }
})();
