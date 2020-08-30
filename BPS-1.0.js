// ==UserScript==
// @name         BPS-1.05
// @namespace    http://tampermonkey.net/
// @version      1.05
// @description  try to take over the world!
// @author       qyz
// @match        http://gimp.giikin.com/front/*
// @match        http://gsso.giikin.com/admin/index/*
// @match        http://gimp.giikin.com/front/orderToolsServiceQuery?_user=1343&_token=bed20077efe149ec18ad68173c6afd35&_url=http%3A%2F%2Fgimp.giikin.com%2Ffront%2ForderToolsServiceQuery
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @require      https://libs.baidu.com/jquery/1.9.0/jquery.js
// @require      https://cdn.staticfile.org/vue/2.2.2/vue.min.js
// @downloadURL  https://qyz-admin.github.io/Email/BPS-1.0.js
// @updateURL    https://qyz-admin.github.io/Email/BPS-1.0.js
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @connect      *
// ==/UserScript==https://13.229.176.203/static/admin/js/tabs.js  // @grant        none Tampermonkey
// ==/UserScript==

(function() {
    'use strict';
//--------------------------------------------------------获取token取值-----------------------------------------------------------------------------------------
      var xhr_urlll = "http://gsso.giikin.com/admin/login/index.html?_system=18&_url=http://gimp.giikin.com/admin/index/home.html"
      GM_xmlhttpRequest({
                method: "get",
                   url: xhr_urlll,
               headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                      },
                //  data:orderVall,
                onload: function(response){
                        console.log("请求成功");
                       console.log(response);
                        console.log(response.finalUrl);
                    var urlToken = response.finalUrl.split("_token=")[1].split("&_url=")[0];
                        console.log(urlToken);
                    document.cookie="token=" + urlToken ;
                 },
               onerror: function(response){
                    console.log("请求失败");
                }

       });
   function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            arr = document.cookie.match(reg);
     //   console.log(arr[2]);
    }

   getCookie("token");

//layer彈窗加載
/*    var scriptNode1110 = document.createElement('script');//demo.js加載
        scriptNode1110.setAttribute('type','text/javascript');
        scriptNode1110.setAttribute('src','https:/gsso.giikin.com/static/admin/js/jquery.min.js');
        document.querySelector('body').appendChild(scriptNode1110);

    var scriptNode1111 = document.createElement('script');//demo.js加載
        scriptNode1111.setAttribute('type','text/javascript');
        scriptNode1111.setAttribute('src','https://goms.giikin.com/static/layui/layui.js');
        document.querySelector('body').appendChild(scriptNode1111);

    var stNode1112 = document.createElement('div');
        stNode1112.style = "display: none;";
        stNode1112 .innerHTML = 'layui.use(["layer", "form"], function(){'
                       +'var layer = layui.layer'
                         +',form = layui.form;'
                      +'});'
       document.querySelector('body').appendChild(stNode1112);
       */
//--------------------------------------------------分割線-----------------------------------------------------------
       var scriptNode = document.createElement('script');//js加載
        scriptNode.setAttribute('type','text/javascript');
        scriptNode.setAttribute('src',' https://gsso.giikin.com/static/admin/js/tabs.js');
       document.querySelector('body').appendChild(scriptNode);
/*
        var scriptNode12 = document.createElement('script');//demo.js加載
        scriptNode12.setAttribute('type','text/javascript');
        scriptNode12.setAttribute('src','https://qyz-admin.github.io/Email/BPSdemo-1.0.js');
        document.querySelector('body').appendChild(scriptNode12);
         */
//--------------------------------------------------分割線-----------------------------------------------------------
    fun_nav();
   function fun_nav() {//导航加载
    var nav = document.getElementsByClassName("hor-menu   hidden-sm hidden-xs")[1];
             console.log(nav);
      var targNav = document.createElement('div');
       // targNav.setAttribute('class','classic-menu-dropdown ');
          targNav.setAttribute('id','header-Nav');
          targNav.style = "position: relative;float: left;top: -50px; left: 135px;width:100%;";
          targNav.innerHTML = '&nbsp<input type="button" class="btn green" id="test_search"  value="显示窗口" style = "height:50px;"> &nbsp'
                             +'<input type="hidden" placeholder=" 订单编号 " class="search-button" id="order_input" style = "height:35px;"> &nbsp&nbsp'
                             +'<input type="hidden" class="btn default showcol" id="close99_searchButton" value="开关" onclick="add()"> &nbsp;'
                             +'<input type="hidden" class="btn default showcol" id="order_search"  value="GO-客服" > &nbsp'
                             +'<input type="hidden" class="btn default showcol" id="w_searchButton"  value="促单查询"> &nbsp'
                             +'<input type="hidden" class="btn default showcol" id="cd_searchButton"  value="金額查询"> &nbsp'
                             +'<input type="hidden" class="btn default showcol" id="wxz_searchButton" value="查詢-補發"> &nbsp'
                             +'<input type="hidden" class="btn purple" id="wxcd_searchButton" value="显示/隐藏列"> &nbsp'
                             +'<input type="hidden" class="btn green" id="xxb_searchButton"  value="信息表显示"> &nbsp'
                             +'<input type="hidden" class="btn green" id="tt_searchButton"  value="测试">'
                             +'<input type="hidden" class="btn green" id="test_searchButton"  value="弹窗">'
                             +'<button class="btn btn-primary" data-target="#mymodal" data-toggle="modal">开始演示</button>'
     nav.appendChild( targNav);
    var navheight =document.getElementsByClassName("hor-menu   hidden-sm hidden-xs")[1];
        navheight.style.height=0
        console.log(navheight.style.height=0)
//--------------------------------------------------分割線-----------------------------------------------------------
    var targNode = document.getElementsByClassName("page-sidebar-menu  page-header-fixed ")[0];
    var BarNode = document.createElement('li');
        BarNode.setAttribute('class','nav-item');
        BarNode.setAttribute('id','nav-header');
     //   BarNode.style = "position: absolute;float: left;top: 10px; left: 235px;width:1545px;/*text-align: center;*/";//left:235
        BarNode.innerHTML =
                '<a href="javascript:;" class="nav-link nav-toggle">'
                           +'<i class="icon-social-dribbble"></i> 不正式管理<span class="arrow open"></span>'
                    +'</a>'
                    +'<ul class="sub-menu" style="display: block;">'
                           +'<li class="nav-item">'
                               +'<a href="https://qyz-admin.github.io/Email/admin-index.html" class="nav-link"  target="view_window"><i class="icon-bulb"></i>常用信息表</a>'
                           +'</li>'
                           +'<li class="nav-item">'
                               +'<a href="https://qyz-admin.github.io/Email/orderquery.html" class="nav-link"  target="view_window"><i class="icon-bulb"></i>登记表</a>'
                           +'</li>'
                           +'<li class="nav-item" type="hidden">'
                               +'<a href="" id="demo_tab1"  class="nav-link"  target="view_window"><i class="icon-bulb"></i>显示表</a>'
                           +'</li>'
                   +'</ul>'
      targNode.appendChild(BarNode);
  };
//--------------------------------------------------分割線-----------------------------------------------------------
    document.getElementById("test_search").addEventListener("click", function fn() {//信息表
      var xxb = document.getElementById("demo_tab1");
          xxb.click()
         console.log( xxb)
//function fn() {
   var xxbdemo= document.getElementById("tab_iframe_显示表").contentDocument.getElementsByTagName("head")[0];
       xxbdemo.innerHTML =
            '<meta charset="utf-8">'
           +'<title>吉客印【正式】后台</title>'
           +'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
           +'<meta content="width=device-width, initial-scale=1" name="viewport" />'
           +'<meta content="" name="description" />'
           +'<meta content="" name="author">'
           +'<meta http-equiv="Access-Control-Allow-Origin" content="*">'
           +'<!-- BEGIN GLOBAL STYLES -->'
           +'<link href="https://gsso.giikin.com/static/admin/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />'

           +'<link href="https://gsso.giikin.com/static/admin/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />'
           +'<link href="https://gsso.giikin.com/static/admin/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />'
           +'<!-- BEGIN THIS PAGE -->'

           +'<!-- BEGIN GLOBAL STYLES -->'
           +'<link href="https://gsso.giikin.com/static/admin/css/components.min.css" rel="stylesheet" type="text/css" />'
           +'<link href="https://gsso.giikin.com/static/admin/css/plugins.min.css" rel="stylesheet" type="text/css" />'
           +'<!-- BEGIN THEME GLOBAL STYLES -->'
           +'<link href="https://gsso.giikin.com/static/admin/css/layout.min.css" rel="stylesheet" type="text/css" />'
           +'<link href="https://gsso.giikin.com/static/admin/css/themes/darkblue.min.css" rel="stylesheet" type="text/css" id="style_color" />'
           +'<link rel="shortcut icon" href="https://gsso.giikin.com/static/admin/img/favicon.ico" />'
           +'<link rel="stylesheet" href="https://gsso.giikin.com/static/layui/css/layui.css" media="all">'
           +'<link id="layuicss-skinlayercss" rel="stylesheet" href="https://gsso.giikin.com/static/layui/css/modules/layer/default/layer.css?v=3.0.3303" media="all">'
           +'<link rel="shortcut icon" href="https://gsso.giikin.com/static/admin/img/favicon.ico">'
  +'<style>'
   +'.page-content-wrapper .page-content {'
        +'margin-top: -10;'
        +'min-height: 990px;'
        +'padding: 0px 0px 5px;'
        +'margin-left: 0; }'
   +'.page-header-fixed .page-container {'
        +'margin-top: 0px;}'
   +'.page-bar{'
        +'display:none;}'
 +'</style>'
+'<script src="https://gsso.giikin.com/static/admin/js/jquery.min.js" type="text/javascript"></script>'
+'<script src="https://gsso.giikin.com/static/admin/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>'
+'<script src="https://gsso.giikin.com/static/admin/js/js.cookie.min.js" type="text/javascript"></script>'
+'<script src="https://gsso.giikin.com/static/admin/js/jquery.slimscroll.min.js" type="text/javascript"></script>'
+'<script src="https://gsso.giikin.com/static/admin/js/jquery.blockui.min.js" type="text/javascript"></script>'
+'<script src="https://gsso.giikin.com/static/admin/js/app.min.js" type="text/javascript"></script>'
+'<script src="https://gsso.giikin.com/static/admin/js/layout.min.js" type="text/javascript"></script>'
+'<script src="https://gsso.giikin.com/static/admin/js/demo.min.js" type="text/javascript"></script>'
+'<script src="https://gsso.giikin.com/static/admin/js/quick-sidebar.min.js" type="text/javascript"></script>'
+'<script src="https://qyz-admin.github.io/Email/BPSdemo-1.0.js" type="text/javascript"></script>'

  var xxbdemo1= document.getElementById("tab_iframe_显示表").contentDocument.getElementsByTagName("body")[0];
      xxbdemo1.setAttribute('class','page-header-fixed page-sidebar-closed-hide-logo page-content-white');
      xxbdemo1.setAttribute('style','zoom: 1;');

  var stNode10 = document.createElement('script');
      stNode10.setAttribute('type','text/javascript');
      stNode10.setAttribute('src',"https://qyz-admin.github.io/Email/jquery.min.js")
      xxbdemo1.appendChild(stNode10);
 /* var stNode11001 = document.createElement('script');
      stNode11001.setAttribute('type','text/javascript');
      stNode11001.setAttribute('src','https://qyz-admin.github.io/Email/layui.all.js');
      stNode11001.setAttribute('charset','utf-8');
      xxbdemo1.appendChild(stNode11001);*/
  var scriptNode121 = document.createElement('script');//demo.js加載
       scriptNode121.setAttribute('type','text/javascript');
       scriptNode121.setAttribute('src','https://qyz-admin.github.io/Email/layer.js');
       xxbdemo1.appendChild(scriptNode121);

  /*var stNode100 = document.createElement('script');
      stNode100.setAttribute('type','text/javascript');
      stNode100.setAttribute('src',"https://qyz-admin.github.io/Email/jquery.js");
      xxbdemo1.appendChild(stNode100);*/


  var stNode1100 = document.createElement('link');
        stNode1100.setAttribute('id','layuicss-skinlayercss');
        stNode1100.setAttribute('rel','stylesheet');
        stNode1100.setAttribute('src','https://qyz-admin.github.io/Email/css/layui.css');
        stNode1100.setAttribute('charset','utf-8');
    xxbdemo.appendChild(stNode1100);
  /*
   //  https://heerey525.github.io/layui-v2.4.3/layui-v2.4.5/layui.js      https://goms.giikin.com/static/layui/layui.js
   var stNode11001 = document.createElement('script');
        stNode11001.setAttribute('type','text/javascript');
        stNode11001.setAttribute('src','https://gsso.giikin.com/static/layui/layui.js');
        stNode11001.setAttribute('charset','utf-8');
        xxbdemo1.appendChild(stNode11001);
*/
   var scriptNode1 = document.createElement('script');//demo.js加載
       scriptNode1.setAttribute('type','text/javascript');
       scriptNode1.setAttribute('src','https://qyz-admin.github.io/Email/BPSdemo-1.0.js');
       xxbdemo1.appendChild(scriptNode1);

 /*
     var stNode1221 = document.createElement('script');
        stNode1221 .innerHTML =
                  'layui.use(["layer", "form"], function(){\n'
                       +'var layer = layui.layer ,form = layui.form;\n'
                      +'});\n'
       xxbdemo1.appendChild(stNode1221);
*/
    var xxbNode2 = document.createElement('div');
        xxbNode2.setAttribute('class','page-wrapper');
        xxbNode2.innerHTML ='<div class="clearfix"> </div>'
    +'<div class="page-container" style="margin-top:10px">'
        +'<div class="page-content-wrapper">'
            +'<div class="page-content" style="overflow:scroll;">'
                +'<!-- BEGIN PAGE HEADER-->'
                +'<!-- BEGIN PAGE BAR -->'
                +'<div class="page-bar">'
                    +'<ul class="page-breadcrumb">'
                        +'<li>'
                            +'<a href="/admin/index/index.html">Home</a>'
                            +'<i class="fa fa-circle"></i>'
                        +'</li>'
                        +'<li>'
                            +'<span> 客服查询 </span>'
                        +'</li>'
                    +'</ul>'
                +'</div>'
                +'<!-- END PAGE BAR -->'
                +'<!-- START ROW-->'
                +'<div class="row">'
                    +'<div class="col-md-12">'
                        +'<div class="portlet box green">'
                            +'<div class="portlet-title">'
                                  +'<div class="caption">'
                                       +'<i class="fa icon-settings"></i>客服查询'
                                  +'</div>'
                                  +'<div class="actions">'
                                              +'<select name="djr" id= "djr" style="height: 30px;">'
                                                   +'<option value="0">---登记人---</option>'
					                               +'<option value="齊元章">齊元章</option>'
					                               +'<option value="楊嘉儀">楊嘉儀</option>'
                                                   +'<option value="徐文建">徐文建</option>'
                                                   +'<option value="李若蘭">李若蘭</option>'
                                                   +'<option value="曹  可">曹  可</option>'
                                                   +'<option value="曲開拓">曲開拓</option>'
                                                   +'<option value="李亞芳">李亞芳</option>'
                                                   +'<option value="袁焕欣">袁焕欣</option>'
                                                   +'<option value="杨  昊">杨  昊</option>'
                                                   +'<option value="客诉件">客诉件</option>'
                                                   +'<option value="电话客服">\电话客服</option>'
                                                +'</select>'
                                                +'<select name="tigong" id= "tigong" style="height: 30px;">'
                                                   +'<option value="運費0">-----備註-----</option>'
					                               +'<option value="運費300">運費300</option>'
					                               +'<option value="運費99">運費99</option>'
                                                   +'<option value="運費一半">退一半不取件</option>'
                                               +'</select>'
                                               +'<select name="thvalue" id= "thvalue" style = "width:150px;height: 30px;">'
                                                   +'<option value="">------退貨原因------</option>'
					                               +'<option value="與產品網頁不符">與產品網頁不符</option>'
					                               +'<option value="质量差">质量差</option>'
                                                   +'<option value="大小不合适">大小不合适</option>'
                                                   +'<option value="未订购">未订购</option>'
                                                   +'<option value="非正品要求退貨">非正品要求退貨</option>'
                                                   +'<option value="不适用，不喜欢，不想要">不适用，不喜欢，不想要</option>'
                                                   +'<option value="商品有瑕疵，損壞">商品有瑕疵，損壞</option>'
                                                   +'<option value="到货不能使用">到货不能使用</option>'
                                                   +'<option value="品質不符預期">品質不符預期</option>'
                                                   +'<option value="问题件">问题件</option>'
                                                   +'<option value="发错商品，少发">发错商品，少发</option>'
                                              +'</select>'
                                              +'<select name="hhvalue" id= "hhvalue" style = "width:150px;height: 30px;">'
                                                   +'<option value="">------換貨原因------</option>'
					                               +'<option value="换大，仓库发错">换大，仓库发错</option>'
					                               +'<option value="换小，仓库发错">换小，仓库发错</option>'
                                                   +'<option value="换颜色，仓库发错">换颜色，仓库发错</option>'
                                                   +'<option value="换大，客户自己选错">换大，客户自己选错</option>'
                                                   +'<option value="换小，客户自己选错">换小，客户自己选错</option>'
                                                   +'<option value="换大，产品尺码不正常">换大，产品尺码不正常</option>'
                                                   +'<option value="换小，产品尺码不正常">换小，产品尺码不正常</option>'
                                                   +'<option value="换颜色，产品颜色与网站不符">换颜色，产品颜色与网站不符</option>'
                                                   +'<option value="发错，换新，客户自己选错">发错，换新，客户自己选错</option>'
                                                   +'<option value="发错，换新，仓库发错">发错，换新，仓库发错</option>'
                                                   +'<option value="瑕疵，换新">瑕疵，换新</option>'
                                                   +'<option value="损坏，换新">损坏，换新</option>'
                                                   +'<option value="到货不满意，与网站不符，换新">到货不满意，与网站不符，换新</option>'
                                                   +'<option value="換產品補差價，产品不满意">換產品補差價，产品不满意</option>'
                                                   +'<option value="換產品補差價，与网站不符">換產品補差價，与网站不符</option>'
                                                   +'<option value="發錯貨，二次換貨，仓库发错">發錯貨，二次換貨，仓库发错</option>'
                                                   +'<option value="發錯貨，二次換貨，客户自己提供错">發錯貨，二次換貨，客户自己提供错</option>'
                                                   +'<option value="换产品">换产品</option>'
                                                   +'<option value="無法使用，換新">無法使用，換新</option>'
                                                +'</select>'
                                  +'</div>'
                            +'</div>'
                            +'<div class="portlet-body">'
                                +'<div class="row" style="margin-bottom:10px;">'
                                    +'<div class="col-md-12 col-sm-10">'
                                        +'<form class="form-horizontal" role="form" id="formdata" method="post" action="">'
            +'<div class="table-group-actions pull-left"  style="width:auto;">'
                                                +'<input type="text" class="form-control input-inline input-medium" name="order_number" placeholder="请输入订单号">'
                                                +'<input disabled="disabled" type="text" class="form-control input-inline input-medium" name="phone" placeholder="请输入电话号码">'
                                                +'<input type="text" class="form-control input-inline input-medium" name="waybill_number" placeholder="请输入物流单号">'
                                                +'<input  disabled="disabled" type="text" class="form-control input-inline input-small" name="ip" placeholder="请输入IP">&nbsp'
                                                +'<button type="button" class="btn green" onclick="show()">查询</button>&nbsp'
                         +'<button type="button" class="btn green" onclick="showw()">查询00</button>&nbsp&nbsp&nbsp&nbsp'
                                              +'<button type="button" class="btn yellow-gold " onclick="tuohuo()">退货</button>&nbsp'
                                      +'<button type="button" class="btn yellow-gold " onclick="huanhuo()">换货</button>&nbsp'
                                      +'<button type="button" class="btn yellow-gold " onclick="bufa()">补发</button>&nbsp'
                                      +'<button type="button" class="tool-action btn yellow " onclick="fuzhi()">点击复制</button>&nbsp&nbsp'
                                      +'<button type="button" class="tool-action btn yellow " onclick="daochu()">导出</button>&nbsp&nbsp'
                                      +'<button type="button" class="tool-action btn yellow " onclick="daochu1()">导出备用</button>&nbsp&nbsp'
                                            +'</div>'
                                        +'</form>'
                                    +'</div>'
                                +'</div>'
                                +'<table class="table table-striped table-bordered table-hover">'
                                    +'<thead>'
                                        +'<tr>'
                                            +'<th> 订单号 </th>'
                                            +'<th> 订单状态 </th>'
                                            +'<th> 物流单号 </th>'
                                            +'<th> 来源平台 </th>'
                                            +'<th> 商品名称 </th>'
                                            +'<th> 是否二次改派 </th>'
                                            +'<th> 是否克隆 </th>'
                                            +'<th> 规格 </th>'
                                            +'<th> 数量 </th>'
                                            +'<th> 币种 </th>'
                                            +'<th> 金额 </th>'
                                            +'<th> 支付类型 </th>'
                                            +'<th> 链接地址 </th>'
                                            +'<th> 下单时间 </th>'
                                            +'<th> 姓名 </th>'
                                            +'<th> 电话 </th>'
                                            +'<th> 拉黑率 </th>'
                                            +'<th> 重量 </th>'
                                            +'<th> 物流状态 </th>'
                                            +'<th> 物流更新时间 </th>'
                                            +'<th> 物流公司 </th>'
                                            +'<th> 地址 </th>'
                                            +'<th> IP </th>'
                                            +'<th> 站点ID </th>'
                                            +'<th> 审核方式 </th>'
                                            +'<th> 操作 </th>'
                                        +'</tr>'
                                    +'</thead>'
                                    +'<tbody>'
                                    +'</tbody>'
                                +'</table>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
                +'<!-- END ROW-->'
            +'</div>'
            +'<!-- END CONTENT BODY -->'
        +'</div>'
    +'</div>'
    +'<!-- END CONTAINER -->'
   xxbdemo1.appendChild(xxbNode2);

     var xxbNode001 = document.createElement('script');
         xxbNode001.innerHTML ='function show(){\n'
        +'var xhr;\n'
        +'var arr;\n'
        +'var reg = new RegExp("(^| )token=([^;]*)(;|$)");\n'
            +'arr = document.cookie.match(reg);\n'
               +'console.log(arr[2]);\n'
         +'function formValue(){\n'
         +'var form = document.getElementsByClassName("form-control input-inline input-medium")[0].value;\n'
         +'var form2 = document.getElementsByClassName("form-control input-inline input-medium")[2].value;\n'
         +'var item_arr = form.split(/[\\n\\s+,，；;]/g);\n'
               +'console.log(item_arr);\n'
         +'var orderValue="";\n'
         +'for (var i=0;i<item_arr.length;i++){\n'
             +'orderValue+= item_arr[i]+","\n'
            +'}\n'
            +'return orderValue\n'
        +'}\n'
        +'var strHtml ="_user=1343&_token="+arr[2] + "&orderPrefix=" + formValue();\n'
        +'var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";\n'
           +'if( window.XMLHttpRequest ){\n'
              +'xhr=new XMLHttpRequest();\n'
            +'}else{\n'
              +'xhr = new ActiveXObject("Microsoft.XMLHTTP");\n'
           +'};\n'
          +'xhr.onreadystatechange=function(){\n'
            +'if( xhr.readyState==4 && xhr.status==200){\n'
              +'var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];\n'
                  +'hhNode.firstChild.innerHTML ="<tr>'
                                            +'<th> 订单号 </th>'
                                            +'<th> 订单状态 </th>'
                                            +'<th> 物流单号 </th>'
                                            +'<th> 来源平台 </th>'
                                            +'<th> 商品名称 </th>'
                                            +'<th> 是否二次改派 </th>'
                                            +'<th> 是否克隆 </th>'
                                            +'<th> 规格 </th>'
                                            +'<th> 数量 </th>'
                                            +'<th> 币种 </th>'
                                            +'<th> 金额 </th>'
                                            +'<th> 支付类型 </th>'
                                            +'<th> 链接地址 </th>'
                                            +'<th> 下单时间 </th>'
                                            +'<th> 姓名 </th>'
                                            +'<th> 电话 </th>'
                                            +'<th> 拉黑率 </th>'
                                            +'<th> 重量 </th>'
                                            +'<th> 物流状态 </th>'
                                            +'<th> 物流更新时间 </th>'
                                            +'<th> 物流公司 </th>'
                                            +'<th> 地址 </th>'
                                            +'<th> IP </th>'
                                            +'<th> 站点ID </th>'
                                            +'<th> 审核方式 </th>'
                                            +'<th> 操作 </th>'
                                        +'</tr>";'
                +'console.log(xhr.responseText);'
          +'var mp3 = eval("("+ this.responseText +")");'
                +'console.log(mp3);'
                +'console.log(mp3.data.list);'
                +'console.log(mp3.data.list[0]);'
                +'console.log(200);'
      +'var mp3Val = mp3.data.list;'
          +'product(mp3Val);'
+'function product(mp3Val){'
    +'var tableValue="";'
    +'for(var i=0;i<mp3Val.length;i++){'
         +'var listVal = mp3Val[i];'
             +'var autolist = listVal.autoVerify;'
              +'function autoReason(autolist){'
                   +'for(var i=0;i<autolist.length;i++){'
                         +'this.autoVal = autolist[i];'
                         +'return  this.autoVal'
                    +'};'
               +'};'
              +'var chanlist = listVal.specs;'
              +'function saleReason(chanlist){'
                   +'for(var i=0;i<chanlist.length;i++){'
                         +'var dataVal = chanlist[i];'
                         +'this.saleProduct = dataVal.saleProduct;'
                         +'return  this.saleProduct'
                    +'};'
               +'};'
               +'function linkReason(chanlist){'
                   +'for(var i=0;i<chanlist.length;i++){'
                         +'var dataVal = chanlist[i];'
                         +'this.link = dataVal.link;'
                         +'return  this.link'
                    +'};'
               +'};'
              +'function specReason(chanlist){'
                   +'for(var i=0;i<chanlist.length;i++){'
                         +'var dataVal = chanlist[i];'
                         +'this.spec =  dataVal.spec;'
                         +'return  this.spec'
                    +'};'
               +'};'
              +'var clonelist = listVal.isClone;'
              +'function cloneReason(clonelist){'
                      +'if(clonelist==0){'
                          +'this.clone = "否";'
                     +'}else{'
                         +'this.clone = "是";'
                     +'}'
                     +'return  this.clone;'
               +'};'
                                 +'tableValue +="<tr>'
                                              +'<td>"+listVal.orderNumber+"</td>'
                                              +'<td>"+listVal.orderStatus+"</td>'
                                              +'<td>"+listVal.wayBillNumber+"</td>'
                                              +'<td>"+listVal.befrom+"</td>'
                                              +'<td>"+saleReason(chanlist)+"</td>'
                                              +'<td>"+listVal.isSecondSend+"</td>'
                                              +'<td>"+cloneReason(clonelist)+"</td>'
                                              +'<td>"+specReason(chanlist)+"</td>'
                                                 +'<td>"+listVal.befrom+"</td>'
                                              +'<td>"+listVal.currency+"</td>'
                                              +'<td>"+listVal.amount+"</td>'
                                              +'<td>"+listVal.payType+"</td>'
                                              +'<td><a href="'
                                              +'+linkReason(chanlist)+"</a></td>'
                                              +'<td>"+listVal.addTime+"</td>'
                                              +'<td>"+listVal.shipInfo.shipName+"</td>'
                                              +'<td>"+listVal.shipInfo.shipPhone+"</td>'
                                              +'<td>"+listVal.befrom+"</td>'
                                              +'<td>"+listVal.weight+"</td>'
                                              +'<td>"+listVal.logisticsStatus+"</td>'
                                              +'<td>"+listVal.logisticsUpdateTime+"</td>'
                                              +'<td>"+listVal.logisticsName+"</td>'
                                              +'<td>"+listVal.shipInfo.shipAddress+"</td>'
                                              +'<td>"+listVal.ip+"</td>'
                                              +'<td>"+listVal.collId+"</td>'
                                              +'<td>"+autoReason(autolist)+"</td>'
                                                 +'<td>"+listVal.befrom+"</td>'
                                              +'<tr>";'

          +'console.log(listVal.addTime);'
          +'console.log(listVal.amount);'
          +'console.log(listVal.area);'
          +'console.log(listVal.autoVerify);'
      +'var areaList = listVal.autoVerify;'
          +'areaProduct(areaList);'
        +'function areaProduct(areaList) {'
           +'for(var i=0;i<areaList.length;i++){'
              +'var areaVal = areaList[i];'
                  +'console.log(areaVal);'
              +'}'
         +'};'
     +'console.log(listVal.befrom);'
     +'console.log(listVal.collDomain);'
     +'console.log(listVal.collId);'
     +'console.log(listVal.collName);'
     +'console.log(listVal.currency);'
          +'console.log(listVal.delReason);'
        +'var delList = listVal.delReason;'
                 +'delProduct(delList);'
        +'function delProduct(delList) {'
           +'for(var i=0;i<delList.length;i++){'
              +'var areaVal = delList[i];'
                  +'console.log(areaVal);'
             +'};'
         +'};'
    +'console.log(listVal.delTime);'
    +'console.log(listVal.deliveryTime);'
    +'console.log(listVal.emailStatus);'
    +'console.log(listVal.id);'
    +'console.log(listVal.ip);'
    +'console.log(listVal.isClone);'
    +'console.log(listVal.isSecondSend);'
    +'console.log(listVal.logisticsControl);'
    +'console.log(listVal.logisticsName);'
    +'console.log(listVal.logisticsStatus);'
    +'console.log(listVal.logisticsStyle);'
    +'console.log(listVal.logisticsUpdateTime);'
    +'console.log(listVal.lowerstatus);'
    +'console.log(listVal.notes);'
    +'console.log(listVal.orderNumber);'
    +'console.log(listVal.orderStatus);'
    +'console.log(listVal.payDomain);'
    +'console.log(listVal.payType);'
    +'console.log(listVal.phoneLength);'
       +'console.log(listVal.questionReason);'
   +'var queReasonlist = listVal.questionReason;'
        +'queReason(queReasonlist);'
     +'function queReason(queReasonlist) {'
         +'for(var i=0;i<queReasonlist.length;i++){'
              +'var dataVal = queReasonlist[i];'
               +'console.log(dataVal);'
          +'};'
       +'};'
       +'console.log(listVal.reassignmentType);'
       +'console.log(listVal.reassignmentTypeName);'
       +'console.log(listVal.remark);'
       +'console.log(listVal.shipInfo);'
       +'console.log(listVal.shipInfo.shipAddress);'
       +'console.log(listVal.shipInfo.shipEmail);'
       +'console.log(listVal.shipInfo.shipName);'
       +'console.log(listVal.shipInfo.shipPhone);'
       +'console.log(listVal.smsStatus);'
       +'console.log(listVal.specs);'
   +'var chanlist = listVal.specs;'
              +'chanReason(chanlist);'
     +'function chanReason(chanlist){'
         +'for(var i=0;i<chanlist.length;i++){'
              +'var dataVal = chanlist[i];'
               +'console.log(dataVal);'
               +'console.log(dataVal.link);'
               +'console.log(dataVal.saleProduct);'
               +'console.log(dataVal.spec);'
          +'};'
       +'};'
       +'console.log(listVal.transferTime);'
       +'console.log(listVal.update_time);'
       +'console.log(listVal.userId);'
       +'console.log(listVal.username);'
       +'console.log(listVal.verifyTime);'
       +'console.log(listVal.volume);'
       +'console.log(listVal.wayBillNumber);'
       +'console.log(listVal.weight);'
             +'};'
     +'var showNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];'
         +'showNode.lastElementChild.innerHTML = tableValue\n'
           +'};\n'
        +'};\n'
    +'};\n'
        +'xhr.open("post",xhr_url,true);\n'
        +'xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");\n'
        +'xhr.send(strHtml);\n'
 +'};\n'
   xxbdemo1.appendChild(xxbNode001);

         var xxbNode0021 = document.createElement('script');//複製
             xxbNode0021.innerHTML ='function fuzhi(){\n'
            +'var thNode111 = document.getElementsByTagName("tbody")[0];\n'
            +'var thNodeLen = thNode111.children.length;\n'
             +'if(thNodeLen == 1){\n'
            +'var text= document.getElementsByTagName("tbody")[0].innerText;\n'
            +'var textArea = document.createElement("input");\n'
                +'textArea.value = text;\n'
              +'document.body.appendChild(textArea);\n'
                +'textArea.select();\n'
                +'document.execCommand("copy");\n'
              +'layer.msg("Hello 复制成功", {icon: 6});\n'
                 +'setTimeout(function () {\n'
                    +'document.body.removeChild(textArea);\n'
                +'}, 100);\n'
          +'}else{\n'
            +'var text0= document.getElementsByTagName("tbody")[0].innerText;\n'
                   +'console.log(text0);\n'
            +'var textArea0 = document.createElement("textarea");\n'
                +'textArea0.value = text0;\n'
              +'document.body.appendChild(textArea0);\n'
                +'textArea0.select();\n'
              +'document.execCommand("copy");\n'
               +'layer.msg("Hello 复制成功", {icon: 6});\n'
                 +'setTimeout(function () {\n'
                    +'document.body.removeChild(textArea0);\n'
                +'}, 100)\n'
          +'};\n'
         +'};\n'
         xxbdemo1.appendChild(xxbNode0021);

        var xxbNode0022 = document.createElement('script');//导出
         xxbNode0022.innerHTML ='function daochu(){\n'
                 +'var exportFileContent = document.getElementsByClassName("table table-striped table-bordered table-hover")[0].outerHTML;\n'
                 +'var downloadA = document.createElement("a");\n'
                 +'var blob = new Blob([exportFileContent], {type: "text/plain;charset=utf-8"});\n'
                    +'downloadA.href = window.URL.createObjectURL(blob);\n'
                    +'downloadA.download = "数据下载.xlsx";\n'
                    +'downloadA.click();\n'
               +'};\n'
         xxbdemo1.appendChild(xxbNode0022);

     var xxbNode002 = document.createElement('script');
         xxbNode002.innerHTML ='function huanhuo(){\n'
       +'var xhr;\n'
       +'var arr;\n'
       +'var reg = new RegExp("(^| )token=([^;]*)(;|$)");\n'
            +'arr = document.cookie.match(reg);\n'
               +'console.log(arr[2]);\n'
       +'var form = document.getElementsByClassName("form-control input-inline input-medium")[0].value;\n'
       +'var strHtml ="orderPrefix=" + form + "&_user=1343&_token=" + arr[2];\n'
       +'var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";\n'
       +'if(window.XMLHttpRequest){\n'
              +'xhr=new XMLHttpRequest();\n'
            +'}else{\n'
              +' xhr=new ActiveXObject("Microsoft.XMLHTTP");\n'
              +'};\n'
         +'xhr.open("post",xhr_url,true);\n'
         +'xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");\n'
         +'xhr.send(strHtml);\n'
         +'xhr.onreadystatechange = function(){\n'
           +'if(xhr.readyState==4 && xhr.status==200){\n'
              +'console.log(xhr.response);\n'
              +'var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];\n'
                  +'hhNode.firstChild.innerHTML ="<tr>'
                                          +'<th> 换新品名 </th>'
                                          +'<th> 姓名 </th>'
                                          +'<th> 电话 </th>'
                                          +'<th> 规格 </th>'
                                          +'<th> 备注 </th>'
                                          +'<th> 地址 </th>'
                                          +'<th> 收回货物的运单号</th>'
                                          +'<th> 原产品 </th>'
                                          +'<th> 原规格 </th>'
                                          +'<th> 原因 </th>'
                                          +'<th> 备注原因 </th>'
                                          +'<th> 分组 </th>'
                                          +'<th> 数量 </th>'
                                          +'<th> 产品ID </th>'
                                          +'<th> 物流渠道 </th>'
                                          +'<th> 登记人 </th>'
                                          +'<th> 订单来源 </th>'
                                          +'<th> 换货备注 </th>'
                                          +'<th> 时间戳 </th>'
                                          +'<th> 备注 </th>'
                                          +'<th> 站點ID </th>'
                                          +'</tr>";'
            +'hhNode.lastChild.innerHTML="<td></td>"'
              +'}'
        +'};'
     +'}'
   xxbdemo1.appendChild(xxbNode002);
},false);

//--------------------------------------------------------------------------------------------------------------------         +'var strHtml ="_user=1343&_token=2808f4bc7e60b89ca3fc0b93cd3997ec&orderPrefix=NR007311326091024";'
 document.getElementById("order_search").addEventListener("click", function(){//test显示  tanchuang
      querty();
},false);
//--------------------------------------------------分割線-----------------------------------------------------------
    //查询xhr , 以此为基础的函数
    function querty(){
      var xhr;
       // var orderVal = document.getElementById("order_input").value;
      //      console.log(orderVal);
        var strHtml ="orderPrefix=NR007080504559891&_user=1343&_token=2808f4bc7e60b89ca3fc0b93cd3997ec";
        var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
            if( window.XMLHttpRequest ){
                xhr=new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            };
           xhr.onreadystatechange=function(){
             if( xhr.readyState==4 && xhr.status==200){
                 console.log(xhr.responseText);//返回json字符串
   //var resVal = eval("("+ this.responseText +")");//json转化为js对象
   //    console.log(resVal);// console.log(mp3.code); //console.log(mp3.data.list);
  var mp3 = eval('('+ this.responseText +')');
         console.log(mp3);
         console.log(mp3.data.list);
         console.log(mp3.data.list[0]);
 console.log(99990000);

      var mp3Val = mp3.data.list;
          product(mp3Val);
 function product(mp3Val){
    for(var i=0;i<mp3Val.length;i++){
     var listVal = mp3Val[i]
          console.log(listVal.addTime);//下单时间3
          console.log(listVal.amount);//订单金额4
          console.log(listVal.area);//归属团队10
        console.log(listVal.autoVerify);//自动问题
    var areaList = listVal.autoVerify;//自动问题信息------99
        areaProduct(areaList);
   function areaProduct(areaList) {
        for(var i=0;i<areaList.length;i++){
            var areaVal = areaList[i]
                console.log(areaVal);
           }
        };
      console.log(listVal.befrom);//投放平台7
      console.log(listVal.collDomain);//来源域名9
      console.log(listVal.collId);//站点/集合ID8
      console.log(listVal.collName);//站点名称
      console.log(listVal.currency);//币种4
         console.log(listVal.delReason);//删除原因---99
     var delList = listVal.delReason;//删除信息------99
         delProduct(delList);
    function delProduct(delList) {
   for(var i=0;i<delList.length;i++){
          var areaVal = delList[i]
              console.log(areaVal);
          }
     };
    console.log(listVal.delTime);//删除时间---99
    console.log(listVal.deliveryTime);//删除
    console.log(listVal.emailStatus);//邮件13
    console.log(listVal.ip);//收货人ip
    console.log(listVal.logisticsControl);//物流设置
    console.log(listVal.logisticsName);//物流公司18
    console.log(listVal.logisticsStatus);//物流状态
    console.log(listVal.logisticsStyle);//物流专线
    console.log(listVal.logisticsUpdateTime);//物流更新时间
    console.log(listVal.lowerstatus);//仓库状态
    console.log(listVal.notes);//客户留言11
    console.log(listVal.orderNumber);//订单编号1
    console.log(listVal.orderStatus);//订单状态2
    console.log(listVal.payDomain);//订单来源7
    console.log(listVal.payType);//支付类型16
    console.log(listVal.addTime);//
    console.log(listVal.phoneLength);//电话长度12
        console.log(listVal.productSpecs);//产品信息------99
    var productlist = listVal.productSpecs;//产品信息------99
        dataproduct(productlist);
  function dataproduct(productlist){
        for(var i=0;i<productlist.length;i++){
              var dataVal = productlist[i]
               console.log(dataVal);
                   console.log(dataVal.id);//商品id
                  console.log(dataVal.price);//价格
                  console.log(dataVal.productName);//
                  console.log(dataVal.saleName);//商品名称
                 console.log(dataVal.sku);//
                 console.log(dataVal.quantity);//数量
          }
     };
        console.log(listVal.questionReason);//问题原因----99
    var queReasonlist = listVal.questionReason;
        queReason(queReasonlist);
  function queReason(queReasonlist) {
      for(var i=0;i<queReasonlist.length;i++){
              var dataVal = queReasonlist[i]
               console.log(dataVal);
          }
      };
       console.log(listVal.shipInfo);//收货人信息----99
       console.log(listVal.shipInfo.shipAddress);//地址
       console.log(listVal.shipInfo.shipEmail);//邮箱
       console.log(listVal.shipInfo.shipName);//姓名
       console.log(listVal.shipInfo.shipPhone);//電話
       console.log(listVal.reassignmentTypeName);//订单类型17
       console.log(listVal.remark);//问题订单审核人
       console.log(listVal.smsStatus);//邮箱发送状态
       console.log(listVal.transferTime);//审核操作时间
       console.log(listVal.update_time);//更新时间
       console.log(listVal.userId);//
       console.log(listVal.username);//审核人15
       console.log(listVal.verifyTime);//审核时间14
       console.log(listVal.wayBillNumber);//物流运单号5
       console.log(listVal.weight);//重量6
             }
           };
       };
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
    }
 };
//------分割線---------
     window.onload=function () {

        };

//弹窗主体
   var nav_body = document.getElementsByTagName("body")[0];
   var nav_Node = document.createElement('div');
       //  targNode.setAttribute('class','classic-menu-dropdown');
         nav_Node.setAttribute('id','header-nav');
       //  nav_Node.style = "position: relative;float: left;top: -42px; left: 100px;width:100%;";
         nav_Node.innerHTML =
	'<div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" data-backdrop ="true">'
		+'<div class="modal-dialog">'
			+'<div class="modal-content">'
				+'<div class="modal-header">'
					+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
					+'<h4 class="modal-title">标题</h4>'
				+'</div>'
				+'<div class="modal-body">文本内容 creatTable() </div>'
				+'<div class="modal-footer">'
					+'<button type="button" class="btn btn-primary" data-dismiss="modal" data-backdrop="true">关闭</button>'
					+'<button type="button" class="btn btn-primary">提交更改</button>'
				+'</div>'
			+'</div>'
		+'</div>'
	+'</div>'
   document.querySelector('body').appendChild(nav_Node);

 //cheng
    function creatTable(data){//这个函数的参数可以是从后台传过来的也可以是从其他任何地方传过来的这里我假设这个data是一个长度为5的字符串数组 我要把他放在表格的一行里面，分成五列
         var tableData="<tr>" //动态增加5个td,并且把data数组的五个值赋给每个td
       for(var i=0;i<data.length;i++){
          tableData+="<td>"+data[i]+"</td>"
        }
      tableData+="</tr>"//现在tableData已经生成好了，把他赋值给上面的tbody
       // $("#tbody1").html(tableData)
        return tableData;
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

    //测试
  document.getElementById("tt_searchButton").addEventListener("click", function(){//test显示  tanchuang
 quert();
        var orderVall = document.getElementById("order_input").value;
            console.log(orderVall);
        var strHtmll ="orderPrefix="+orderVall+"&_user=1343&_token=b3cd0ccbed66c999c970cdb363d30e62";
        var xhr_urll = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";

      GM_xmlhttpRequest({
                method: "POST",
                   url: xhr_urll,
               headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                      },
                  data:orderVall,
                onload: function(response){
                        console.log("请求成功");
                       console.log(response);
                        console.log(response.responseText);
                 },
               onerror: function(response){
                    console.log("请求失败");
                }

       });
  },false);
//-------------------------------------------------------------------------------------------------测试使用-----------------------------------------------------------------------------------------
 setTimeout(function(){
                                 //    quert()
                        },3000);

function quert(){
//var strData = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
//var fullUrl ="http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder&orderPrefix=NA200803180058647860&_user=1343&_token=2a285b0988bc906f0f091616756b7f7c";
    var fullUrl ="http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
GM_xmlhttpRequest({
    method: 'post',
    url: fullUrl,
    data:"orderPrefix=NA200803180058647860&_user=1343&_token=2a285b0988bc906f0f091616756b7f7c",
    headers: {
        'User-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
        'Accept': '/',
    },
    onload: function(responseDetails) {
          console.log( responseDetails);
         console.log( responseDetails.responseText);
    }
   });
}


/*----备用
      var mp3Val = mp3.data.list;
          product(mp3Val);
 function product(mp3Val){
    for(var i=0;i<mp3Val.length;i++){
     var listVal = mp3Val[i]
          console.log(listVal.addTime);//下单时间3
          console.log(listVal.amount);//订单金额4
          console.log(listVal.area);//归属团队10
        console.log(listVal.autoVerify);//自动问题
    var areaList = listVal.autoVerify;//自动问题信息------99
        areaProduct(areaList);
   function areaProduct(areaList) {
        for(var i=0;i<areaList.length;i++){
            var areaVal = areaList[i]
                console.log(areaVal);
           }
        };
      console.log(listVal.befrom);//投放平台7
      console.log(listVal.collDomain);//来源域名9
      console.log(listVal.collId);//站点/集合ID8
      console.log(listVal.collName);//站点名称
      console.log(listVal.currency);//币种4
         console.log(listVal.delReason);//删除原因---99
     var delList = listVal.delReason;//删除信息------99
         delProduct(delList);
    function delProduct(delList) {
   for(var i=0;i<delList.length;i++){
          var areaVal = delList[i]
              console.log(areaVal);
          }
     };
    console.log(listVal.delTime);//删除时间---99
    console.log(listVal.deliveryTime);//删除
    console.log(listVal.emailStatus);//邮件13
    console.log(listVal.ip);//收货人ip
    console.log(listVal.logisticsControl);//物流设置
    console.log(listVal.logisticsName);//物流公司18
    console.log(listVal.logisticsStatus);//物流状态
    console.log(listVal.logisticsStyle);//物流专线
    console.log(listVal.logisticsUpdateTime);//物流更新时间
    console.log(listVal.lowerstatus);//仓库状态
    console.log(listVal.notes);//客户留言11
    console.log(listVal.orderNumber);//订单编号1
    console.log(listVal.orderStatus);//订单状态2
    console.log(listVal.payDomain);//订单来源7
    console.log(listVal.payType);//支付类型16
    console.log(listVal.addTime);//
    console.log(listVal.phoneLength);//电话长度12
        console.log(listVal.productSpecs);//产品信息------99
    var productlist = listVal.productSpecs;//产品信息------99
        dataproduct(productlist);
  function dataproduct(productlist){
        for(var i=0;i<productlist.length;i++){
              var dataVal = productlist[i]
               console.log(dataVal);
                   console.log(dataVal.id);//商品id
                  console.log(dataVal.price);//价格
                  console.log(dataVal.productName);//
                  console.log(dataVal.saleName);//商品名称
                 console.log(dataVal.sku);//
                 console.log(dataVal.quantity);//数量
          }
     };
        console.log(listVal.questionReason);//问题原因----99
    var queReasonlist = listVal.questionReason;
        queReason(queReasonlist);
  function queReason(queReasonlist) {
      for(var i=0;i<queReasonlist.length;i++){
              var dataVal = queReasonlist[i]
               console.log(dataVal);
          }
      };
       console.log(listVal.shipInfo);//收货人信息----99
       console.log(listVal.shipInfo.shipAddress);//地址
       console.log(listVal.shipInfo.shipEmail);//邮箱
       console.log(listVal.shipInfo.shipName);//姓名
       console.log(listVal.shipInfo.shipPhone);//電話
       console.log(listVal.reassignmentTypeName);//订单类型17
       console.log(listVal.remark);//问题订单审核人
       console.log(listVal.smsStatus);//邮箱发送状态
       console.log(listVal.transferTime);//审核操作时间
       console.log(listVal.update_time);//更新时间
       console.log(listVal.userId);//
       console.log(listVal.username);//审核人15
       console.log(listVal.verifyTime);//审核时间14
       console.log(listVal.wayBillNumber);//物流运单号5
       console.log(listVal.weight);//重量6
             }
           };
*/
      var xxbb = document.getElementById("nav-header");
              console.log(xxbb);
          xxbb.click();
})();
