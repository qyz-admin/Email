// ==UserScript==
// @name    FB-2023.05.17.3
// @namespace  http://tampermonkey.net/
// @version  2023.05.17.3
// @description try to take over the world!
// @author   You
// @match    https://www.facebook.com/*
// @match    https://www.facebook.com/bookmarks/*
// @match    https://www.facebook.com/pages/?category=your_pages&ref=bookmarks
// @require   https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js
// @require   https://qyz-admin.github.io/Email/layer.js
// @downloadURL  https://qyz-admin.github.io/Email/FB-2023.5.js
// @updateURL    https://qyz-admin.github.io/Email/FB-2023.5.js
// @grant    none
// ==/UserScript==

window.onload = (function() {
//--------------------------------------页面自动刷新设置------------------------------
    SubmitWeb();
function SubmitWeb() { //总网址加载判断设置（一）
        var cod99=window.location.href;
        var reg = /\d{10,}/;
        if (reg.test(cod99)) {
            console.log("正在刷新网页详细内容---");
            var width = 0;
            var idB = setInterval(SubmitAB, 2000);
            function SubmitAB() {//正在刷新网页详细内容
                if(document.readyState =="complete"){//确定是否加载完成
                    if(cod99.search(/inbox/i) == "-1" && cod99.search(/notifications/i) == "-1"){
                        var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
                        var tagsValue = tags[15].firstElementChild.firstElementChild.innerText;
                        if(tagsValue == "首页") {
                            console.log("终止刷新网页");
                            clearInterval(idB);
                           testCCC();
                        }else if(tagsValue == "公共主页") {
                            console.log("终止刷新网页");
                            clearInterval(idB);
                            setTimeout(function () {
                                    testCCC();
                             }, 1000);
                        }else if(tagsValue == "Home") {
                            console.log("终止刷新网页");
                            clearInterval(idB);
                            testCCC();
                        }else{
                            console.log("正在刷新网页");
                            testCCC();
                        }
                    }else if(cod99.search(/notifications/i) >= "1"){
                         if(document.readyState =="complete"){//确定是否加载完成
                             var dianji5 = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t rgmg9uty b73ngqbp");
                             var dianji50= dianji5[0].lastElementChild;
                                 dianji50.click();
                              setTimeout(function () {
                                 var dianji6 = document.getElementsByClassName("qzhwtbm6 knvmm38d");
                                 for(var t2 = 0;t2 < dianji6.length; t2++){
                                     var val2 = dianji6[t2].firstElementChild.innerText;
                                     if (val2=="全标为已读") {
                                        var dj = dianji6[t2].firstElementChild;
                                            dj.click();
                                                window.opener = null;//禁止某些浏览器的一些弹窗
                                                window.open('','_self');
                                                window.close();
                                            break
                                     }else if (val2=="全部標示為已讀") {
                                        var dj2 = dianji6[t2].firstElementChild;
                                            dj2.click();
                                                window.opener = null;//禁止某些浏览器的一些弹窗
                                                window.open('','_self');
                                                window.close();
                                            break
                                     }
                                 }
                             }, 500);
                       }else{
                           console.log("页面加载失败");
                       };
                   }else{
                        console.log("不需要刷新网页");
                        clearInterval(idB);
                   }
              }//确定是否加载完成
           }//正在刷新网页详细内容
        }else{
            console.log("正在加载网页标题内容---");//  yemian();
            var interval = setInterval(Fload, 2000);
            function Fload(){
                if(document.readyState =="complete"){//确定是否加载完成
                    var targNode =document.getElementsByClassName('xuk3077 x78zum5 x1iyjqo2 xl56j7k x1p8ty84 x1na7pl x88anuq')[0];
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
   function testCCC() { //正在刷新网页内容（三）
       var tags = document.getElementsByClassName("j83agx80 cbu4d94t ew0dbk1b irj2b8pg");
       var tagsValue = tags[15].firstElementChild.firstElementChild.innerText;
       var shoujian = 0;//0 表示没有；1表示无信息；2表示有信息需查看；
        for(var t2=0;t2<tags.length;t2++){
            var val2 = tags[t2].firstElementChild.firstElementChild.innerText;
            if (val2=="收件箱") {
                shoujian = tags[t2].childElementCount;
                        console.log(val2);
                break
            }else{
                shoujian = 0;
            };
       };
       if(shoujian <= "1"){
                  console.log("进行关闭网页");
                  window.opener = null;//禁止某些浏览器的一些弹窗
                  window.open('','_self');
                  window.close()
       }else if(shoujian == "2"){
                    console.log("进行跳转网页");
                 var cod009=window.location.href;
                     cod009=cod009 +"inbox";
                 var vraa009=document.createElement('a');
                    vraa009.target='_self';
                    vraa009.href=cod009;
                    document.body.appendChild(vraa009);
                    vraa009.click();
       }
     function sleep(n) {//計時函數
            var start=new Date().getTime();
       while (true) {
            var time=new Date().getTime();
         if(time - start>n) {
            break;
         }
       }
    };
 };

//------------------------------------------------页面自动刷新设置-------------------------------------------
function yemian(){ //正在加载网页标题内容（二）
    'use strict';
  var targNode =document.getElementsByClassName('xuk3077 x78zum5 x1iyjqo2 xl56j7k x1p8ty84 x1na7pl x88anuq')[0];
  var wxzSearchBarNode = document.createElement('div');
     wxzSearchBarNode.setAttribute('id','header-close');
     wxzSearchBarNode.setAttribute('class','header-wxzbar header-info');
     wxzSearchBarNode.style = "height: 40px;font-size: 15px;width: 35%;"
     wxzSearchBarNode.innerHTML =
           ' <input type="button" value="消息 GO" class="search-button" id="wxz_searchButtonNew" title="点击查询-消息数量">&nbsp'
       +' <input type="button" value="50" class="search-button" id="wxz40_searchButton" title=" 0-50 ">&nbsp'
       +' <input type="button" value="100" class="search-button" id="wxz100_searchButton" title=" 50-100 ">&nbsp'
       +' <input type="button" value="150" class="search-button" id="wxz150_searchButton" title=" 100-150 ">&nbsp'
       +' <input type="button" value="150以上" class="search-button" id="wxz45_searchButton" title=" 150以上全部打开 ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
    +' <input class="search-query" autocomplete="off" placeholder="请输入--" id="wxz_input" style="text-align: center;width: 80px;" title="请输入要打开--数值">'
    +' <input type="button" value="点击加载主页" class="search-button" id="jiazai_input" style="text-align: center;width: 100px;" title="请点击显示更多主页">'
  targNode.appendChild(wxzSearchBarNode);

  var wxzbgNode = document.createElement('div');
      wxzbgNode.setAttribute('class','wxz-bg');
      wxzbgNode.style.display = 'none';
  document.querySelector('body').appendChild(wxzbgNode);
 //-------------------------------------------------------------------------------------第一部分结束-------------------------------------------------------------------
document.getElementById("jiazai_input").addEventListener("click", function fn() {//请点击显示更多主页
    var idB = setInterval(update, 1000);
function update() {
        var targNode = document.getElementsByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f x1dem4cn");
       //     alert("需要加载更多的次数：" + targNode.length)
    if(targNode.length == 0){
        alert("已加载主页完毕！！！");
        clearInterval(idB);
    }else{
           console.log(targNode);
           console.log(targNode.length);
        for(var i=0; i<targNode.length;i++){
            var tt = targNode[0].firstElementChild;
                tt.click();
         }
    }
};
},false);
//-------------------------------------------------------------------第一部分  自动判断使用----------------------------------
 document.getElementById("wxz_searchButton").addEventListener("click", function fn() {//读取input数值
          update_new(); //请点击显示更多主页
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var targNode = document.getElementsByClassName(classnames);
          //   var targNode =document.getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u');
            console.log(targNode.length);
        var tip = "";
    for(var i=0; i<targNode.length;i++){
        var tags_val = targNode[i].innerText
        var tags_val2 = targNode[i].childElementCount
        if (tags_val2 == 1) {
            if (tags_val.search("消息") != -1 && tags_val.search("未读") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else if (tags_val.search("訊息") != -1 && tags_val.search("未讀") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else{
              console.log(88);
            }
        }
   }
    return objArray;
};
  console.log(getElementByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u"));
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
  if(objArray.length< 40 && objArray.length>0){
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
  }else if(objArray.length =40){
     alert("当前数量 : "+objArray.length+" ;  正在加载更多主页，请稍后再次点击查询 主页数量");
  }else if(objArray.length>40){
     alert("数量 : "+objArray.length+" 大于 40; 请分别点击 40,； 90,； 150,；按钮分三次打开页面 ");
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

//-------------------------------------------------------------------第一部分  自动判断  test 使用----------------------------------
 document.getElementById("wxz_searchButtonNew").addEventListener("click", function fn() {//读取input数值
     console.log(909);
     var ct = "";
function wxz_search(classnames) {
     var targNode =document.getElementsByClassName(classnames);
    for(var i=0; i<targNode.length;i++){
        var tags_val = targNode[i].innerText;
      //  console.log(tags_val);
        if (tags_val == "加载更多" || tags_val == "載入更多") {
           ct = 1;
        }
   };
     if (ct == 1){
         alert("加载主页中  请等待......");
         console.log(99);
         update_new2();//请点击显示更多主页
     }else{
         console.log(88);
         searchButton();
     };
};
console.log(wxz_search("x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft"));
//----------  自动判断  加载主页完毕
function update_new2() {
    var idB22 = setInterval(update22, 1500);
    function update22() {
        var targNode = document.getElementsByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f x1dem4cn");
        //     alert("需要加载更多的次数：" + targNode.length)
        if(targNode.length == 0){
            // 查询加载后的主页数量
              var objArray2= new Array();
              var index2 = 0;
              var targNode2 =document.getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u');
                  console.log(targNode2.length);
            var tip = "";
            for(var ii=0; ii<targNode2.length;ii++){
                var tags_val = targNode2[ii].innerText
                var tags_val2 = targNode2[ii].childElementCount
                if (tags_val2 == 1) {
                    if (tags_val.search("消息") != -1 && tags_val.search("未读") == -1) {
                        objArray2[index2] = targNode2[ii].firstElementChild.firstElementChild.firstElementChild.href;
                        index2++;
                    }else if (tags_val.search("訊息") != -1 && tags_val.search("未讀") == -1) {
                        objArray2[index2] = targNode2[ii].firstElementChild.firstElementChild.firstElementChild.href;
                        index2++;
                    }else{
                        console.log(88);
                    }
                }
            };
        //   var count = searchCount();
            alert("已加载主页完毕！！！>>>数量 : " + objArray2.length + " 大于 50 ; 请分别点击 50,； 100,； 150,；按钮分三次打开页面 ");
            clearInterval(idB22);
         //   clearInterval(count);
        }else{
            console.log(targNode);
            console.log(targNode.length);
            for(var i=0; i<targNode.length;i++){
                var tt = targNode[0].firstElementChild;
                tt.click();
            }
        }
    };
};
//----------  查询数量 停用
 function searchCount(){
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var targNode = document.getElementsByClassName(classnames);
          //   var targNode =document.getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u');
            console.log(targNode.length);
        var tip = "";
    for(var i=0; i<targNode.length;i++){
        var tags_val = targNode[i].innerText
        var tags_val2 = targNode[i].childElementCount
        if (tags_val2 == 1) {
            if (tags_val.search("消息") != -1 && tags_val.search("未读") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else if (tags_val.search("訊息") != -1 && tags_val.search("未讀") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else{
              console.log(88);
            }
        }
   }
    return objArray;
};
  console.log(getElementByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u"));
 };
//----------  自动判断  数量打开
 function searchButton(){
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var targNode = document.getElementsByClassName(classnames);
          //   var targNode =document.getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u');
            console.log(targNode.length);
        var tip = "";
    for(var i=0; i<targNode.length;i++){
        var tags_val = targNode[i].innerText
        var tags_val2 = targNode[i].childElementCount
        if (tags_val2 == 1) {
            if (tags_val.search("消息") != -1 && tags_val.search("未读") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else if (tags_val.search("訊息") != -1 && tags_val.search("未讀") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else{
              console.log(88);
            }
        }
   }
    return objArray;
};
  console.log(getElementByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u"));
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
  if(objArray.length <= 50 && objArray.length > 0){
      for(var j=0; j<=objArray.length;j++){
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
  }
  //  else if(objArray.length =40){
 //    alert("当前数量 : "+objArray.length+" ;  正在加载更多主页，请稍后再次点击查询 主页数量");
 // }
    else if(objArray.length > 50){
     alert("数量 : "+objArray.length+" 大于 50; 请分别点击 50,； 100,； 150,；按钮分三次打开页面 ");
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
 };
     //
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("wxz40_searchButton").addEventListener("click", function fn() {//等于0-40 直接打开页面
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var targNode = document.getElementsByClassName(classnames);
            console.log(targNode.length);
        var tip = "";
     //   var targNode =document.getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u');
    for(var i=0; i<targNode.length;i++){
        var tags_val = targNode[i].innerText
        var tags_val2 = targNode[i].childElementCount
        if (tags_val2 == 1) {
            if (tags_val.search("消息") != -1 && tags_val.search("未读") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else if (tags_val.search("訊息") != -1 && tags_val.search("未讀") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else{
              console.log(88);
            }
        }
   }
    return objArray;
};
  console.log(getElementByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u"));
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
 if(objArray.length > 50){
       for(var m=0; m <= 50;m++){
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
        var targNode = document.getElementsByClassName(classnames);
            console.log(targNode.length);
        var tip = "";
     //   var targNode =document.getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u');
    for(var i=0; i<targNode.length;i++){
        var tags_val = targNode[i].innerText
        var tags_val2 = targNode[i].childElementCount
        if (tags_val2 == 1) {
            if (tags_val.search("消息") != -1 && tags_val.search("未读") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else if (tags_val.search("訊息") != -1 && tags_val.search("未讀") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else{
              console.log(88);
            }
        }
   }
    return objArray;
};
  console.log(getElementByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u"));
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
   for(var m2 = key; m2 <= objArray.length; m2++){
       var ev2 = document.createEvent("MouseEvents");
           ev2.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
       var comand2=objArray[m2];
       var vraaa2=document.createElement('a');
           vraaa2.target='_blank';
           vraaa2.href=comand2;
        document.body.appendChild(vraaa2);
      //  vraaa2.click();
          vraaa2.dispatchEvent(ev2);
       sleep(100);
   }
}else if(objArray.length>count){
   for(var m = key; m <= count;m++){
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
};
//};
//----------  自动判断  请点击显示更多主页
function update_new() {
    var idB2 = setInterval(update2, 1000);
    function update2() {
        var targNode = document.getElementsByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f x1dem4cn");
        //     alert("需要加载更多的次数：" + targNode.length)
        if(targNode.length == 0){
            alert("已加载主页完毕！！！");
            clearInterval(idB2);
        }else{
            console.log(targNode);
            console.log(targNode.length);
            for(var i=0; i<targNode.length;i++){
                var tt = targNode[0].firstElementChild;
                tt.click();
            }
        }
    };
};

//-----------------------------------------------------------------------------------------------------
document.getElementById("wxz100_searchButton").addEventListener("click", function fn() {//等于40-90-直接打开页面
     tem_wx(50,100)
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("wxz150_searchButton").addEventListener("click", function fn() {//等于90-150直接打开页面
     tem_wx(100,150)
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("wxz45_searchButton").addEventListener("click", function fn() {//大于150直接打开页面
        var objArray= new Array();
        var index = 0;
 function getElementByClassName(classnames){//查詢信息鏈接
        var targNode = document.getElementsByClassName(classnames);
            console.log(targNode.length);
        var tip = "";
     //   var targNode =document.getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u');
    for(var i=0; i<targNode.length;i++){
        var tags_val = targNode[i].innerText
        var tags_val2 = targNode[i].childElementCount
        if (tags_val2 == 1) {
            if (tags_val.search("消息") != -1 && tags_val.search("未读") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else if (tags_val.search("訊息") != -1 && tags_val.search("未讀") == -1) {
                objArray[index] = targNode[i].firstElementChild.firstElementChild.firstElementChild.href;
               index++;
            }else{
              console.log(88);
            }
        }
   }
    return objArray;
};
  console.log(getElementByClassName("x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen xo1l8bm xzsf02u"));
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
if(objArray.length>150){
   //  if(inputValueee > 40){
      for(var n=150; n<=objArray.length+1;n++){
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
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;//通知
          var ddd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;//消息
           if(dd == 1 && ddd ==1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
               indexyy++;
           }else if(dd == 1 && ddd < 1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
               indexyy++;
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href;
               indexyy++;
           }else if(dd < 1 && ddd == 1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
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
    if(objArrayy.length<30 && objArrayy.length>0){
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
  }else if(objArrayy.length>29 && objArrayy.length<60){
     alert("数量 : "+objArrayy.length+" ; 请分别点击 30,； 60； 按钮分两次打开页面 ");
  }else if(objArrayy.length>59 && objArrayy.length<90){
     alert("数量 : "+objArrayy.length+" ; 请分别点击 30,； 60； 90; 按钮分三次打开页面 ");
  }else if(objArrayy.length>89 && objArrayy.length<120){
     alert("数量 : "+objArrayy.length+" ; 请分别点击 30,； 60； 90; 120; 按钮分四次打开页面 ");
  }else if(objArrayy.length>119 && objArrayy.length<150){
     alert("数量 : "+objArrayy.length+" ; 请分别点击 30,； 60； 90; 120; 150; 按钮分五次打开页面 ");
  }else if(objArrayy.length>149 && objArrayy.length<180){
     alert("数量 : "+objArrayy.length+" ; 请分别点击 30,； 60； 90; 120; 150; 180;按钮分六次打开页面 ");
  }else if(objArrayy.length>179){
     alert("数量 : "+objArrayy.length+" ; 请分别点击 30,； 60； 90; 120; 150; 180;; 180以上;按钮分七次打开页面 ");
  };
}else{
   // var ev = document.createEvent("MouseEvents");
   //     ev.initMouseEvent("click", true, true, window, 1, 959, 262, 663, 158, true, false, false, false, 0, null); //点击事件参数设置 vra0.dispatchEvent(ev);
  for(var ij=0; ij<inputValue;ij++){
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
     }
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz_searchButton").addEventListener("click", function fn() {//通知信息0-30打開
        var objArrayy= new Array();
        var indexyy = 0;
function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
        if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;//通知
          var ddd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;//消息
           if(dd == 1 && ddd ==1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
               indexyy++;
           }else if(dd == 1 && ddd < 1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
               indexyy++;
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href;
               indexyy++;
           }else if(dd < 1 && ddd == 1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
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
   for(var j=0; j<30;j++){//通知信息30打開
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
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;//通知
          var ddd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;//消息
           if(dd == 1 && ddd ==1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
               indexyy++;
           }else if(dd == 1 && ddd < 1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
               indexyy++;
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href;
               indexyy++;
           }else if(dd < 1 && ddd == 1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
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
  for(var j2=key; j2<objArrayy.length;j2++){
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
 for(var j=key; j<count;j++){
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
     alert("数量不满足打开需要 ; 请点击 通知消息 查询数量 ");
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
  document.getElementById("tz180_searchButton").addEventListener("click", function fn() {//通知信息150-180打開
     tem(150, 180);
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz210_searchButton").addEventListener("click", function fn() {//通知信息180-210打開
     tem(180, 210);
},false);
  document.getElementById("tz240_searchButton").addEventListener("click", function fn() {//通知信息210-240打開
     tem(210, 240);
},false);
  document.getElementById("tz270_searchButton").addEventListener("click", function fn() {//通知信息240-270打開
     tem(240, 270);
},false);
  document.getElementById("tz300_searchButton").addEventListener("click", function fn() {//通知信息270-300打開
     tem(270, 300);
},false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz45_searchButton").addEventListener("click", function fn() {//通知信息300以上打開
        var objArrayy= new Array();
        var indexyy = 0;
function getElementByClassNamey(classnames){//查詢通知鏈接
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var tags2 = tags[i].parentNode.getAttribute("class");
        if (tags2 == "ki4skjgs p0x8y401 m7u2wfa4") {
           var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;//通知
          var ddd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;//消息
           if(dd == 1 && ddd ==1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
               indexyy++;
           }else if(dd == 1 && ddd < 1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href.replace(/\/notifications\//,"/");
               indexyy++;
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href;
               indexyy++;
           }else if(dd < 1 && ddd == 1){
               objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.href;
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
  for(var j=300; j<=objArrayy.length+1;j++){
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


})();
