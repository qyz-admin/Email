// ==UserScript==
// @name         BPS-1.0
// @namespace    http://tampermonkey.net/
// @version      1.01
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
       var scriptNode = document.createElement('script');//js���d
        scriptNode.setAttribute('type','text/javascript');
        scriptNode.setAttribute('src',' https://gsso.giikin.com/static/admin/js/tabs.js');
    document.querySelector('body').appendChild(scriptNode);
//--------------------------------------------------�ָ-----------------------------------------------------------
    fun_nav();
   function fun_nav() {//��������
//--------------------------------------------------�ָ-----------------------------------------------------------
    var nav = document.getElementsByClassName("hor-menu   hidden-sm hidden-xs")[1];
             console.log(nav);
      var targNav = document.createElement('div');
       // targNav.setAttribute('class','classic-menu-dropdown');
          targNav.setAttribute('id','header-nav');
          targNav.style = "position: relative;float: left;top: -50px; left: 135px;width:100%;";
          targNav.innerHTML = '<input type="button" class="btn green" id="test_search"  value="��ʾ����" style = "height:50px;"> &nbsp'
                             +'<input type="text" placeholder=" ������� " class="search-button" id="order_input" style = "height:35px;"> &nbsp&nbsp'
                             +'<input type="hidden" class="btn default showcol" id="close99_searchButton" value="����" onclick="add()"> &nbsp;'
                             +'<input type="hidden" class="btn default showcol" id="order_search"  value="GO-�ͷ�" > &nbsp'
                             +'<input type="hidden" class="btn default showcol" id="w_searchButton"  value="�ٵ���ѯ"> &nbsp'
                             +'<input type="hidden" class="btn default showcol" id="cd_searchButton"  value="���~��ѯ"> &nbsp'
                             +'<input type="hidden" class="btn default showcol" id="wxz_searchButton" value="��ԃ-�a�l"> &nbsp'
                             +'<input type="hidden" class="btn purple" id="wxcd_searchButton" value="��ʾ/������"> &nbsp'
                             +'<input type="button" class="btn green" id="xxb_searchButton"  value="��Ϣ����ʾ"> &nbsp'
                             +'<input type="hidden" class="btn green" id="tt_searchButton"  value="����">'
                             +'<input type="hidden" class="btn green" id="test_searchButton"  value="����">'
                             +'<button class="btn btn-primary" data-target="#mymodal" data-toggle="modal">��ʼ��ʾ</button>'
     nav.appendChild( targNav);
    var navheight =document.getElementsByClassName("hor-menu   hidden-sm hidden-xs")[1];
        navheight.style.height=0
        console.log(navheight.style.height=0)
//--------------------------------------------------�ָ-----------------------------------------------------------
    var targNode = document.getElementsByClassName("page-sidebar-menu  page-header-fixed ")[0];
    var BarNode = document.createElement('li');
        BarNode.setAttribute('class','nav-item');
        BarNode.setAttribute('id','header-nav');
     //   BarNode.style = "position: absolute;float: left;top: 10px; left: 235px;width:1545px;/*text-align: center;*/";//left:235
        BarNode.innerHTML =
                '<a href="javascript:;" class="nav-link nav-toggle">'
                           +'<i class="icon-social-dribbble"></i> ����ʽ����<span class="arrow open"></span>'
                    +'</a>'
                    +'<ul class="sub-menu" style="display: block;">'
                           +'<li class="nav-item">'
                               +'<a href="https://qyz-admin.github.io/Email/admin-index.html" class="nav-link"  target="view_window"><i class="icon-bulb"></i>������Ϣ��</a>'
                           +'</li>'
                           +'<li class="nav-item">'
                               +'<a href="https://qyz-admin.github.io/Email/orderquery.html" class="nav-link"  target="view_window"><i class="icon-bulb"></i>�ǼǱ�</a>'
                           +'</li>'
                           +'<li class="nav-item">'
                               +'<a href="" id="demo_tab1"  class="nav-link"  target="view_window"><i class="icon-bulb"></i>��ʾ��</a>'
                           +'</li>'
                   +'</ul>;'
      targNode.appendChild(BarNode);
  };
//--------------------------------------------------�ָ-----------------------------------------------------------
    document.getElementById("test_search").addEventListener("click", function fn() {//��Ϣ��
      var xxb = document.getElementById("demo_tab1");
          xxb.click()
         console.log( xxb)
//function fn() {
   var xxbdemo= document.getElementById("tab_iframe_��ʾ��").contentDocument.getElementsByTagName("head")[0];
       xxbdemo.innerHTML =
            '<meta charset="utf-8">'
           +'<title>����ӡ����ʽ����̨</title>'
           +'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
           +'<meta content="width=device-width, initial-scale=1" name="viewport" />'
           +'<meta content="" name="description" />'
           +'<meta content="" name="author">'
           +'<meta http-equiv="Access-Control-Allow-Origin" content="*">'
           +'<!-- BEGIN GLOBAL STYLES -->'
           +'<link href="/static/admin/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />'
           +'<link href="/static/admin/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />'
           +'<link href="/static/admin/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />'
           +'<link href="/static/admin/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />'
           +'<!-- BEGIN THIS PAGE -->'

           +'<!-- BEGIN GLOBAL STYLES -->'
           +'<link href="/static/admin/css/components.min.css" rel="stylesheet" type="text/css" />'
           +'<link href="/static/admin/css/plugins.min.css" rel="stylesheet" type="text/css" />'
           +'<!-- BEGIN THEME GLOBAL STYLES -->'
           +'<link href="/static/admin/css/layout.min.css" rel="stylesheet" type="text/css" />'
           +'<link href="/static/admin/css/themes/darkblue.min.css" rel="stylesheet" type="text/css" id="style_color" />'
           +'<link rel="shortcut icon" href="../static/admin/img/favicon.ico" />'
      +'<link rel="stylesheet" href="/static/layui/css/layui.css" media="all">'
      +'<link id="layuicss-skinlayercss" rel="stylesheet" href="https://goms.giikin.com/static/layui/css/modules/layer/default/layer.css?v=3.0.3303" media="all">'
            +'<link rel="shortcut icon" href="/static/admin/img/favicon.ico">'
     //   xxbdemo.appendChild(stNode12);
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

    var xxbdemo1= document.getElementById("tab_iframe_��ʾ��").contentDocument.getElementsByTagName("body")[0];
        xxbdemo1.setAttribute('class','page-header-fixed page-sidebar-closed-hide-logo page-content-white');
        xxbdemo1.setAttribute('style','zoom: 1;');
    var stNode10 = document.createElement('script');
        stNode10 .src ="https://libs.baidu.com/jquery/1.9.0/jquery.js"
        xxbdemo1.appendChild(stNode10);
/*
    var stNode1100 = document.createElement('script');
        stNode1100.setAttribute('type','text/javascript');
        stNode1100.setAttribute('src','https://goms.giikin.com/static/layui/layui.js');
        stNode1100.setAttribute('charset','utf-8');
        xxbdemo.appendChild(stNode1100);
*/
   //   https://heerey525.github.io/layui-v2.4.3/layui-v2.4.5/layui.js      https://goms.giikin.com/static/layui/layui.js
    var stNode11001 = document.createElement('script');
        stNode11001.setAttribute('type','text/javascript');
        stNode11001.setAttribute('src','https://goms.giikin.com/static/layui/lay/modules/layer.js');
        stNode11001.setAttribute('charset','utf-8');
        xxbdemo1.appendChild(stNode11001);

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
                            +'<span> �ͷ���ѯ </span>'
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
                                    +'<i class="fa icon-settings"></i>�ͷ���ѯ</div>'
                            +'</div>'
                            +'<div class="portlet-body">'
                                +'<div class="row" style="margin-bottom:10px;">'
                                    +'<div class="col-md-12 col-sm-10">'
                                        +'<form class="form-horizontal" role="form" id="formdata" method="post" action="">'
            +'<div class="table-group-actions pull-left"  style="width:auto;">'
                                                +'<input type="text" class="form-control input-inline input-medium" name="order_number" placeholder="�����붩����">'
                                                +'<input type="text" class="form-control input-inline input-medium" name="phone" placeholder="������绰����">'
                                                +'<input type="text" class="form-control input-inline input-medium" name="waybill_number" placeholder="��������������">'
                                                +'<button type="button" class="btn green" onclick="show()">��ѯ</button>&nbsp'
                                                +'<button type="button" class="btn yellow-gold " onclick="tuohuo()">�˻�</button>&nbsp'
                                                +'<button type="button" class="btn yellow-gold " onclick="huanhuo()">����</button>&nbsp'
                                                +'<button type="button" class="btn yellow-gold " onclick="bufa()">����</button>&nbsp'
                                                +'<button type="button" class="tool-action btn yellow " onclick="copy()">�������  �� �� ��</button>&nbsp&nbsp'
                                                +'<select name="djr" id= "djr" style="height: 30px;">'
                                                   +'<option value="0">---�Ǽ���---</option>'
					                               +'<option value="�RԪ��">�RԪ��</option>'
					                               +'<option value="��΃x">��΃x</option>'
                                                   +'<option value="���Ľ�">���Ľ�</option>'
                                                   +'<option value="�����m">�����m</option>'
                                                   +'<option value="��  ��">��  ��</option>'
                                                   +'<option value="���_��">���_��</option>'
                                                   +'<option value="������">������</option>'
                                                   +'<option value="���">���</option>'
                                                   +'<option value="Ԭ����">Ԭ����</option>'
                                                   +'<option value="��  �">��  �</option>'
                                                   +'<option value="���߼�">���߼�</option>'
                                                   +'<option value="�绰�ͷ�">\�绰�ͷ�</option>'
                                                +'</select>'
                                                +'<select name="tigong" id= "tigong" style="height: 30px;">'
                                                   +'<option value="�\�M0">-----���]-----</option>'
					                               +'<option value="�\�M300">�\�M300</option>'
					                               +'<option value="�\�M99">�\�M99</option>'
                                                   +'<option value="�\�Mһ��">��һ�벻ȡ��</option>'
                                               +'</select>'
                                               +'<select name="thvalue" id= "thvalue" style = "width:150px;height: 30px;">'
                                                   +'<option value="">------��؛ԭ��------</option>'
					                               +'<option value="�c�aƷ�W퓲���">�c�aƷ�W퓲���</option>'
					                               +'<option value="������">������</option>'
                                                   +'<option value="��С������">��С������</option>'
                                                   +'<option value="δ����">δ����</option>'
                                                   +'<option value="����ƷҪ����؛">����ƷҪ����؛</option>'
                                                   +'<option value="�����ã���ϲ��������Ҫ">�����ã���ϲ��������Ҫ</option>'
                                                   +'<option value="��Ʒ��覴ã��p��">��Ʒ��覴ã��p��</option>'
                                                   +'<option value="��������ʹ��">��������ʹ��</option>'
                                                   +'<option value="Ʒ�|�����A��">Ʒ�|�����A��</option>'
                                                   +'<option value="�����">�����</option>'
                                                   +'<option value="������Ʒ���ٷ�">������Ʒ���ٷ�</option>'
                                              +'</select>'
                                              +'<select name="hhvalue" id= "hhvalue" style = "width:150px;height: 30px;">'
                                                   +'<option value="">------�Q؛ԭ��------</option>'
					                               +'<option value="���󣬲ֿⷢ��">���󣬲ֿⷢ��</option>'
					                               +'<option value="��С���ֿⷢ��">��С���ֿⷢ��</option>'
                                                   +'<option value="����ɫ���ֿⷢ��">����ɫ���ֿⷢ��</option>'
                                                   +'<option value="���󣬿ͻ��Լ�ѡ��">���󣬿ͻ��Լ�ѡ��</option>'
                                                   +'<option value="��С���ͻ��Լ�ѡ��">��С���ͻ��Լ�ѡ��</option>'
                                                   +'<option value="���󣬲�Ʒ���벻����">���󣬲�Ʒ���벻����</option>'
                                                   +'<option value="��С����Ʒ���벻����">��С����Ʒ���벻����</option>'
                                                   +'<option value="����ɫ����Ʒ��ɫ����վ����">����ɫ����Ʒ��ɫ����վ����</option>'
                     +                             +'<option value="�������£��ͻ��Լ�ѡ��">�������£��ͻ��Լ�ѡ��</option>'
                                                   +'<option value="�������£��ֿⷢ��">�������£��ֿⷢ��</option>'
                                                   +'<option value="覴ã�����">覴ã�����</option>'
                                                   +'<option value="�𻵣�����">�𻵣�����</option>'
                                                   +'<option value="���������⣬����վ����������">���������⣬����վ����������</option>'
                                                   +'<option value="�Q�aƷ�a��r����Ʒ������">�Q�aƷ�a��r����Ʒ������</option>'
                                                   +'<option value="�Q�aƷ�a��r������վ����">�Q�aƷ�a��r������վ����</option>'
                                                   +'<option value="�l�e؛�����ΓQ؛���ֿⷢ��">�l�e؛�����ΓQ؛���ֿⷢ��</option>'
                                                   +'<option value="�l�e؛�����ΓQ؛���ͻ��Լ��ṩ��">�l�e؛�����ΓQ؛���ͻ��Լ��ṩ��</option>'
                                                   +'<option value="����Ʒ">����Ʒ</option>'
                                                   +'<option value="�o��ʹ�ã��Q��">�o��ʹ�ã��Q��</option>'
                                                +'</select>'
                                            +'</div>'
                                        +'</form>'
                                    +'</div>'
                                +'</div>'
                                +'<table class="table table-striped table-bordered table-hover">'
                                    +'<thead>'
                                        +'<tr>'
                                            +'<th> ������ </th>'
                                            +'<th> ����״̬ </th>'
                                            +'<th> �������� </th>'
                                            +'<th> ��Դƽ̨ </th>'
                                            +'<th> ��Ʒ���� </th>'
                                            +'<th> �Ƿ���θ��� </th>'
                                            +'<th> �Ƿ��¡ </th>'
                                            +'<th> ��� </th>'
                                            +'<th> ���� </th>'
                                            +'<th> ���� </th>'
                                            +'<th> ���ӵ�ַ </th>'
                                            +'<th> �µ�ʱ�� </th>'
                                            +'<th> ���� </th>'
                                            +'<th> �绰 </th>'
                                            +'<th> ������ </th>'
                                            +'<th> ���� </th>'
                                            +'<th> ����״̬ </th>'
                                            +'<th> ��ַ </th>'
                                            +'<th> IP </th>'
                                            +'<th> վ��ID </th>'
                                            +'<th> ���� </th>'
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
         xxbNode001.innerHTML ='function show(){'
              +'var xhr;'
       +'var strHtml ="orderPrefix=NR007311326091024&_user=1343&_token=c6ba81ceb060e8abeab0d0280c9726d4";'
       +'var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";'
           +'if( window.XMLHttpRequest ){'
              +'xhr=new XMLHttpRequest();'
            +'}else{'
              +'xhr = new ActiveXObject("Microsoft.XMLHTTP");'
           +'};'
          +'xhr.onreadystatechange=function(){'
            +'if( xhr.readyState==4 && xhr.status==200){'
              +'var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];'
                  +'hhNode.firstChild.innerHTML ="<tr>'
                                            +'<th> ������ </th>'
                                            +'<th> ����״̬ </th>'
                                            +'<th> �������� </th>'
                                            +'<th> ��Դƽ̨ </th>'
                                            +'<th> ��Ʒ���� </th>'
                                            +'<th> �Ƿ���θ��� </th>'
                                            +'<th> �Ƿ��¡ </th>'
                                            +'<th> ��� </th>'
                                            +'<th> ���� </th>'
                                            +'<th> ���� </th>'
                                            +'<th> ���ӵ�ַ </th>'
                                            +'<th> �µ�ʱ�� </th>'
                                            +'<th> ���� </th>'
                                            +'<th> �绰 </th>'
                                            +'<th> ������ </th>'
                                            +'<th> ���� </th>'
                                            +'<th> ����״̬ </th>'
                                            +'<th> ��ַ </th>'
                                            +'<th> IP </th>'
                                            +'<th> վ��ID </th>'
                                            +'<th> ���� </th>'
                                        +'</tr>";'
                +'console.log(xhr.responseText);'
          +'var mp3 = eval("("+ this.responseText +")");'
                +'console.log(mp3);'
                +'console.log(mp3.data.list);'
                +'console.log(mp3.data.list[0]);'
                +'console.log(99990000);'
      +'var mp3Val = mp3.data.list;'
          +'product(mp3Val);'
+'function product(mp3Val){'
    +'for(var i=0;i<mp3Val.length;i++){'
         +'console.log(999900001111111111);'
     +'var listVal = mp3Val[i];'
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
           +'};'
        +'};'
    +'};'
        +'xhr.open("post",xhr_url,true);'
        +'xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");'
        +'xhr.send(strHtml);'
 +'};'
   xxbdemo1.appendChild(xxbNode001);

     var xxbNode002 = document.createElement('script');
         xxbNode002.innerHTML ='function huanhuo(){'
       +'var xhr;'
       +'var strHtml ="orderPrefix=NR007312128585657&_user=1343&_token=c6ba81ceb060e8abeab0d0280c9726d4";'
       +'var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";'
       +'if(window.XMLHttpRequest){'
              +'xhr=new XMLHttpRequest();'
            +'}else{'
              +' xhr=new ActiveXObject("Microsoft.XMLHTTP");'
              +'};'
         +'xhr.open("post",xhr_url,true);'
         +'xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");'
         +'xhr.send(strHtml);'
         +'xhr.onreadystatechange = function(){'
           +'if(xhr.readyState==4 && xhr.status==200){'
              +'console.log(xhr.response);'
              +'var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];'
                  +'hhNode.firstChild.innerHTML ="<tr>'
                                          +'<th> ����Ʒ�� </th>'
                                          +'<th> ���� </th>'
                                          +'<th> �绰 </th>'
                                          +'<th> ��� </th>'
                                          +'<th> ��ע </th>'
                                          +'<th> ��ַ </th>'
                                          +'<th> �ջػ�����˵���</th>'
                                          +'<th> ԭ��Ʒ </th>'
                                          +'<th> ԭ��� </th>'
                                          +'<th> ԭ�� </th>'
                                          +'<th> ��עԭ�� </th>'
                                          +'<th> ���� </th>'
                                          +'<th> ���� </th>'
                                          +'<th> ��ƷID </th>'
                                          +'<th> �������� </th>'
                                          +'<th> �Ǽ��� </th>'
                                          +'<th> ������Դ </th>'
                                          +'<th> ������ע </th>'
                                          +'<th> ʱ��� </th>'
                                          +'<th> ��ע </th>'
                                          +'<th> վ�cID </th>'
                                          +'</tr>";'
            +'hhNode.lastChild.innerHTML="<td></td>"'
              +'}'
        +'};'
     +'}'
   xxbdemo1.appendChild(xxbNode002);
},false);

//--------------------------------------------------------------------------------------------------------------------
 document.getElementById("order_search").addEventListener("click", function(){//test��ʾ  tanchuang
      querty();
},false);
//--------------------------------------------------�ָ-----------------------------------------------------------
    //��ѯxhr , �Դ�Ϊ�����ĺ���
    function querty(){
      var xhr;
       // var orderVal = document.getElementById("order_input").value;
      //      console.log(orderVal);
        var strHtml ="orderPrefix=NR007080504559891&_user=1343&_token=170a9a396f8152b6723bffd46aa62af0";
        var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
            if( window.XMLHttpRequest ){
                xhr=new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            };
           xhr.onreadystatechange=function(){
             if( xhr.readyState==4 && xhr.status==200){
                 console.log(xhr.responseText);//����json�ַ���
   //var resVal = eval("("+ this.responseText +")");//jsonת��Ϊjs����
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
     console.log(999900001111111111);
     var listVal = mp3Val[i]
          console.log(listVal.addTime);//�µ�ʱ��3
          console.log(listVal.amount);//�������4
          console.log(listVal.area);//�����Ŷ�10

        console.log(listVal.autoVerify);//�Զ�����
    var areaList = listVal.autoVerify;//�Զ�������Ϣ------99
        areaProduct(areaList);
   function areaProduct(areaList) {
        for(var i=0;i<areaList.length;i++){
            var areaVal = areaList[i]
                console.log(areaVal);
           }
        };

      console.log(listVal.befrom);//Ͷ��ƽ̨7
      console.log(listVal.collDomain);//��Դ����9

      console.log(listVal.collId);//վ��/����ID8
      console.log(listVal.collName);//վ������
      console.log(listVal.currency);//����4

         console.log(listVal.delReason);//ɾ��ԭ��---99
     var delList = listVal.delReason;//ɾ����Ϣ------99
         delProduct(delList);
    function delProduct(delList) {
   for(var i=0;i<delList.length;i++){
          var areaVal = delList[i]
              console.log(areaVal);
          }
     };
    console.log(listVal.delTime);//ɾ��ʱ��---99
    console.log(listVal.deliveryTime);//ɾ��

    console.log(listVal.emailStatus);//�ʼ�13

    console.log(listVal.ip);//�ջ���ip

    console.log(listVal.logisticsControl);//��������
    console.log(listVal.logisticsName);//������˾18
    console.log(listVal.logisticsStatus);//����״̬
    console.log(listVal.logisticsStyle);//����ר��
    console.log(listVal.logisticsUpdateTime);//��������ʱ��
    console.log(listVal.lowerstatus);//�ֿ�״̬

    console.log(listVal.notes);//�ͻ�����11

    console.log(listVal.orderNumber);//�������1
    console.log(listVal.orderStatus);//����״̬2

    console.log(listVal.payDomain);//������Դ7
    console.log(listVal.payType);//֧������16
    console.log(listVal.addTime);//
    console.log(listVal.phoneLength);//�绰����12

        console.log(listVal.productSpecs);//��Ʒ��Ϣ------99
    var productlist = listVal.productSpecs;//��Ʒ��Ϣ------99
        dataproduct(productlist);
  function dataproduct(productlist){
        for(var i=0;i<productlist.length;i++){
              var dataVal = productlist[i]
               console.log(dataVal);
                   console.log(dataVal.id);//��Ʒid
                  console.log(dataVal.price);//�۸�
                  console.log(dataVal.productName);//
                  console.log(dataVal.saleName);//��Ʒ����
                 console.log(dataVal.sku);//
                 console.log(dataVal.quantity);//����
          }
     };

        console.log(listVal.questionReason);//����ԭ��----99
    var queReasonlist = listVal.questionReason;
        queReason(queReasonlist);
  function queReason(queReasonlist) {
      for(var i=0;i<queReasonlist.length;i++){
              var dataVal = queReasonlist[i]
               console.log(dataVal);
          }
      };

       console.log(listVal.shipInfo);//�ջ�����Ϣ----99
       console.log(listVal.shipInfo.shipAddress);//��ַ
       console.log(listVal.shipInfo.shipEmail);//����
       console.log(listVal.shipInfo.shipName);//����
       console.log(listVal.shipInfo.shipPhone);//�Ԓ

       console.log(listVal.reassignmentTypeName);//��������17
       console.log(listVal.remark);//���ⶩ�������

       console.log(listVal.smsStatus);//���䷢��״̬
       console.log(listVal.transferTime);//��˲���ʱ��
       console.log(listVal.update_time);//����ʱ��
       console.log(listVal.userId);//
       console.log(listVal.username);//�����15

       console.log(listVal.verifyTime);//���ʱ��14
       console.log(listVal.wayBillNumber);//�����˵���5
       console.log(listVal.weight);//����6
             }
           };
       };
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
    }
 };
//------�ָ---------
     window.onload=function () {

        };

//��������
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
					+'<h4 class="modal-title">����</h4>'
				+'</div>'
				+'<div class="modal-body">�ı����� creatTable() </div>'
				+'<div class="modal-footer">'
					+'<button type="button" class="btn btn-primary" data-dismiss="modal" data-backdrop="true">�ر�</button>'
					+'<button type="button" class="btn btn-primary">�ύ����</button>'
				+'</div>'
			+'</div>'
		+'</div>'
	+'</div>'
   document.querySelector('body').appendChild(nav_Node);

 //cheng
    function creatTable(data){//��������Ĳ��������ǴӺ�̨��������Ҳ�����Ǵ������κεط��������������Ҽ������data��һ������Ϊ5���ַ������� ��Ҫ�������ڱ���һ�����棬�ֳ�����
         var tableData="<tr>" //��̬����5��td,���Ұ�data��������ֵ����ÿ��td
       for(var i=0;i<data.length;i++){
          tableData+="<td>"+data[i]+"</td>"
        }
      tableData+="</tr>"//����tableData�Ѿ����ɺ��ˣ�������ֵ�������tbody
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

    //����
  document.getElementById("tt_searchButton").addEventListener("click", function(){//test��ʾ  tanchuang
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
                        console.log("����ɹ�");
                       console.log(response);
                        console.log(response.responseText);
                 },
               onerror: function(response){
                    console.log("����ʧ��");
                }

       });
  },false);

 setTimeout(function(){
                                     quert()
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




})();