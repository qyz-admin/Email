// ==UserScript==
// @name    FB-2.0.1
// @namespace  http://tampermonkey.net/
// @version   2.0.1
// @description try to take over the world!
// @author   You
// @match    https://www.facebook.com/bookmarks/*
// @match        https://www.facebook.com/bookmarks/pages?ref_type=logout_gear
// @match        https://www.facebook.com/bookmarks/pages?ref_type=logout_gear
// @match    https://www.facebook.com/*
// @require   http://code.jquery.com/jquery-1.11.0.min.js
// @require   https://qyz-admin.github.io/Email/layer.js
// @downloadURL  https://qyz-admin.github.io/Email/FB-2020.js
// @updateURL    https://qyz-admin.github.io/Email/FB-2020.js
// @grant    none
// ==/UserScript==
/*
 var tags=document.getElementsByClassName("qjjbsfad j83agx80");
 var dd = tags[1];
var ddd = dd.firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
var dddd = dd.firstElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild;
//var ddddd = dddd.lastElementChild.childElementCount;
//console.log(tags);
console.log(dd);
console.log(ddd);
console.log(dddd.href);

var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=dddd.href;
    document.body.appendChild(vra);
    vra.click();

*/
(function() {
// var targNode = document.querySelector('._cy7');
//      '<input type="button" value="���r" class="search-button" id="zss_searchButton" >'
    var targNode =document.getElementsByClassName('thodolrn ojvp67qx taijpn5t buofh1pr j83agx80 aovydwv3 bqdfd6uv')[0];
  var wxzSearchBarNode = document.createElement('div');
     wxzSearchBarNode.setAttribute('id','header-close');
     wxzSearchBarNode.setAttribute('class','header-wxzbar header-info');
     wxzSearchBarNode.style = "height: 40px;"
     wxzSearchBarNode.innerHTML =
        ' <input type="button" value="֪ͨ" class="search-button" id="tz_searchButton" > '
       +' <input class="search-query" autocomplete="off" placeholder="��ԃ--����" id="wxz_input" style="text-align: center;width: 100px;">'
       +' <input type="button" value="GO" class="search-button" id="wxz_searchButton" > '
       +' <input type="button" value="40" class="search-button" id="wxz40_searchButton" > 0-40 '
       +' <input type="button" value="45" class="search-button" id="wxz45_searchButton" > 45���� '
       +' <input type="button" value="80" class="search-button" id="wxz80_searchButton" > 40-80 '
       +' <input type="button" value="120" class="search-button" id="wxz120_searchButton" > 80-120 '
  targNode.appendChild(wxzSearchBarNode);
 //background
  var wxzbgNode = document.createElement('div');
      wxzbgNode.setAttribute('class','wxz-bg');
      wxzbgNode.style.display = 'none';
  document.querySelector('body').appendChild(wxzbgNode);
//-----------------------------------------------------------------------------------------���ú���--------------------------------------------------------------
  var objArray= new Array();
  var index = 0;
 function getElementByClassName(classnames){//��ԃ��Ϣ朽�
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

 function sleep(n) {//Ӌ�r����
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
  var objArrayy= new Array();
  var indexyy = 0;

 function getElementByClassNamey(classnames){//��ԃ֪ͨ朽�
        var tags = document.getElementsByClassName(classnames);
            console.log(tags.length);
        var tip = "";
    for(var i=0; i<tags.length;i++){
        var dd = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.childElementCount;
        if(dd == 1 ){
            objArrayy[indexyy] = tags[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.href;
            indexyy++;
        }else{
          console.log(99);
       }
   }
       return objArrayy;
};
  console.log(getElementByClassNamey("qjjbsfad j83agx80"));
 //--------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("tz_searchButton").addEventListener("click", function fn() {//֪ͨ��Ϣ���_
     getElementByClassNamey("qjjbsfad j83agx80")
  for(var j=0; j<objArrayy.length;j++){
    var command=objArrayy[j];
    var vra=document.createElement('a');
    vra.target='_blank';
    vra.href=command;
    document.body.appendChild(vra);
    vra.click();
    sleep(100);
  }
},false);
//-------------------------------------------------------------------
 document.getElementById("wxz_searchButton").addEventListener("click", function fn() {//��ȡinput��ֵ
     getElementByClassName("qjjbsfad j83agx80");
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
      alert("Hello û��������ϢŶ������");
     // layer.msg('Hello û��������ϢŶ������', {icon: 6});
  }else if(objArray.length>40){
     alert("���� : "+objArray.length+" ; Ո�քe�c�� 40,�� 45�����o�փɴδ��_��� ");
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
  document.getElementById("wxz45_searchButton").addEventListener("click", function fn() {//����45ֱ�Ӵ�ҳ��
          getElementByClassName("qjjbsfad j83agx80");
      var inputValueee = document.getElementById("wxz45_searchButton").getAttribute("value");
if(objArray.length>40){
     if(inputValueee > 40){
      for(var n=40; n<objArray.length;n++){
        var conmand=objArray[n];
        var vraa=document.createElement('a');
        vraa.target='_blank';
        vraa.href=conmand;
        document.body.appendChild(vraa);
        vraa.click();
        sleep(100);
        }
      }
   }
 },false);
 //---------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("wxz40_searchButton").addEventListener("click", function fn() {//����40-ֱ�Ӵ�ҳ��
          getElementByClassName("qjjbsfad j83agx80");
      var inputValuee = document.getElementById("wxz40_searchButton").getAttribute("value");
 if(objArray.length>40){
      if(inputValuee < 41) {
       for(var m=0; m<inputValuee;m++){
       var comand=objArray[m];
       window.open(comand);
       window.location.reload;
       sleep(100);
           }
         }
       }
     },false);
//---------------------------------------------------------------------------------------------------------------------------------------------------------
    document.getElementById("wxz80_searchButton").addEventListener("click", function fn() {//80ֱ�Ӵ�ҳ��
          getElementByClassName("qjjbsfad j83agx80");
      var inputValue40 = document.getElementById("wxz80_searchButton").getAttribute("value");
if(objArray.length>40){
     if(inputValue40 > 40){
      for(var n=40; n<inputValue40;n++){
        var conmand=objArray[n];
        var vraa=document.createElement('a');
        vraa.target='_blank';
        vraa.href=conmand;
        document.body.appendChild(vraa);
        vraa.click();
        sleep(100);
        }
      }
   }
 },false)
//---------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("wxz120_searchButton").addEventListener("click", function fn() {//120ֱ�Ӵ�ҳ��
         getElementByClassName("qjjbsfad j83agx80");
    //  var inputValue60 = document.getElementById("wxz60_searchButton").getAttribute("value");
     var inputValue60 = document.getElementById("wxz120_searchButton").getAttribute("value");
if(objArray.length>80){
     if(inputValue60 > 80){
      for(var n=80; n<inputValue60;n++){
        var conmand=objArray[n];
        var vraa=document.createElement('a');
        vraa.target='_blank';
        vraa.href=conmand;
        document.body.appendChild(vraa);
        vraa.click();
        sleep(100);
        }
      }
   }
 },false);
 //----------------------------------------------
 /*   document.getElementById("zss_searchButton").addEventListener("click", function fn() {//ֱ�ӹر�
          var closeNav = document.getElementById("header-close");
              closeNav.parentElement.removeChild(closeNav);
         },false);
         */
//----------------------------------------------
/* document.getElementById("wxz80_searchButton").addEventListener("click", function fn() {//80ֱ�Ӵ�ҳ��
  var objArray= new Array();
  var index = 0;
  function getElementByClassName(classnames){
    var tags=document.getElementsByTagName("*");
    for(var i in tags){
      if(tags[i].nodeType==1){
        if(tags[i].getAttribute("class") == "linkWrap hasCount"&&tags[i].parentNode.firstChild.getAttribute("class")=="imgWrap"){ //��Ԫ�ص�classֵ����
          objArray[index]=tags[i].parentNode.href.replace(/\?ref=bookmarks/,"notifications");
          index++;

        }
      }
    }
    return objArray;
  } console.log(getElementByClassName("linkWrap hasCount"));
    function sleep(n) {
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
      var inputValue80 = document.getElementById("wxz80_searchButton").getAttribute("value");
if(objArray.length>20){
     if(inputValue80 > 20){
      for(var n=60; n<inputValue80;n++){
        var conmand=objArray[n];
        var vraa=document.createElement('a');
        vraa.target='_blank';
        vraa.href=conmand;
        document.body.appendChild(vraa);
        vraa.click();
        sleep(300);
        }
      }
   }
 },false);
 document.getElementById("wxz100_searchButton").addEventListener("click", function fn() {//100ֱ�Ӵ�ҳ��
  var objArray= new Array();
  var index = 0;
  function getElementByClassName(classnames){
    var tags=document.getElementsByTagName("*");
    for(var i in tags){
      if(tags[i].nodeType==1){
        if(tags[i].getAttribute("class") == "linkWrap hasCount"&&tags[i].parentNode.firstChild.getAttribute("class")=="imgWrap"){ //��Ԫ�ص�classֵ����
          objArray[index]=tags[i].parentNode.href.replace(/\?ref=bookmarks/,"notifications");
          index++;

        }
      }
    }
    return objArray;
  } console.log(getElementByClassName("linkWrap hasCount"));
    function sleep(n) {
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };
      var inputValue100 = document.getElementById("wxz100_searchButton").getAttribute("value");
if(objArray.length>20){
     if(inputValue100 > 20){
      for(var n=80; n<objArray.length;n++){
        var conmand=objArray[n];
        var vraa=document.createElement('a');
        vraa.target='_blank';
        vraa.href=conmand;
        document.body.appendChild(vraa);
        vraa.click();
        sleep(300);
        }
      }
   }
 },false);*/
/*    window.onload = function() {
    var aac=document.getElementsByClassName("_5xdz");
     if(aac[1].lastElementChild.className=="_5xdy"){
         console.log(11);
        }
}
*/
//------------------------------------------------------------------------------���ù���----------------------------------------------------------
    /*
// Your code here...
 //   var d = document;
    //    d.onload = testTab����;//������������
   // window.onload = testTab;//chrome���������
   // window.onload = function(){testTab();shuaxinTab();};
    window.onload = function(){testTab();};
    testTab();
  //  shuaxinTab();
    function testTab() {
     var aad=document.getElementsByClassName("_6wk8")[1];
     var aac=document.getElementsByClassName("_5xdz");
   if (aad.childNodes.length==0){
     if (aac[2].childNodes.length==2){//test   ������Ԫ��
            var abcd000=document.getElementsByClassName("_4jy0 _4jy3 _517h _51sy _42ft");
                abcd000[3].click();
             /*   for(var z in abcd000){
                   if(abcd000[z].innerText.indexOf("ȫ��Ϊ�Ѷ�") == 0){
                      abcd000[z].click();
                   }
                 };
*/
  /*              var cod00=window.location.href;
                    cod00=cod00.replace(/notifications/,"inbox");
                var vraa00=document.createElement('a');
                    vraa00.target='_self';
                    vraa00.href=cod00;
                    document.body.appendChild(vraa00);
                    vraa00.click();
          }else if (aac[1].childNodes.length==2&&aac[2].childNodes.length==1&&aac[3].childNodes.length==1&&aac[4].childNodes.length==1){
            var aabc=document.getElementsByClassName("_4jy0 _4jy3 _517h _51sy _42ft");
                aabc[3].click();
            /*  for(var x in aabc){
                   if(aabc[x].innerText.indexOf("ȫ��Ϊ�Ѷ�") == 0){
                      aabc[x].click();
                   }
                 };
*/
                     //window.location.href="about:blank";
                     //window.close();
                      //window.opener = null;
                     // window.open('', '_self');
   /*       }window.close();

   }else if (aad.lastElementChild.className="_ju_"){//1��������Ԫ�أ�2��������Ԫ��
        if (aac[2].childNodes.length==2){//test  ������Ԫ��
            var abcd0001=document.getElementsByClassName("_4jy0 _4jy3 _517h _51sy _42ft");
                abcd0001[3].click();
           /*  for(var g in abcd0001){
                   if(abcd0001[g].innerText.indexOf("ȫ��Ϊ�Ѷ�") == 0){
                      abcd0001[g].click();
                   }
                 };
*/
 /*               var cod001=window.location.href;
                    cod001=cod001.replace(/notifications/,"inbox");
                var vraa001=document.createElement('a');
                    vraa001.target='_self';
                    vraa001.href=cod001;
                    document.body.appendChild(vraa001);
                    vraa001.click();
          }else if (aac[1].childNodes.length==2&&aac[2].childNodes.length==1&&aac[3].childNodes.length==1&&aac[4].childNodes.length==1){//aac[1]����������Ԫ��
             var abc=document.getElementsByClassName("_4jy0 _4jy3 _517h _51sy _42ft");
                 abc[3].click();
               /* for(var h in abc){
                   if(abc[h].innerText.indexOf("ȫ��Ϊ�Ѷ�") == 0){
                      abc[h].click();
                   }
                 }; */
  /*                var cod=window.location.href;
                      cod=cod.replace(/notifications/,"inbox");
                var vraa=document.createElement('a');
                    vraa.target='_self';
                    vraa.href=cod;
                    document.body.appendChild(vraa);
                    vraa.click();
          }else if(aac[1].childNodes.length==1&&aac[2].childNodes.length==1&&aac[3].childNodes.length==1&&aac[4].childNodes.length==1){//aac[2]������������Ԫ��
            var abcd=document.getElementsByClassName("_4jy0 _4jy3 _517h _51sy _42ft");
                abcd[3].click();
               /*  for(var j in abcd){
                   if(abcd[j].innerText.indexOf("ȫ��Ϊ�Ѷ�") == 0){
                      abcd[j].click();
                   }
                 };*/
  /*                var codd=window.location.href;
                      codd=codd.replace(/notifications/,"inbox");
                  var vrraa=document.createElement('a');
                      vrraa.target='_self';
                      vrraa.href=codd;
                    document.body.appendChild(vrraa);
                      vrraa.click();
         }
     }//

  }//testTab��������

  function shuaxinTab() {
    var aad=document.getElementsByClassName("_4xj-");
    var reg=/\d/;
    var aad1=aad[1].firstChild.textContent;
    console.log(aad.length);
    for(var i in aad){
        var aadd=aad[i].firstChild.textContent;
              console.log(aadd);
         if(aadd.indexOf("֪ͨ") != -1 && reg.test(aadd) == false && reg.test(aad1) == true){
               console.log("�ռ������Ŷ");
               aad[1].click();
           }else if(aadd.indexOf("֪ͨ") != -1 && reg.test(aadd) == true){
               console.log("֪ͨ����Ŷ");
               aad[i].click();
               testTab();
           }else if(aadd == "֪ͨ"&&aad1 == "�ռ���"){
               console.log(1112222333);
              window.location.href="about:blank";
             }window.close();
       }
    };//��������

    */
})();
