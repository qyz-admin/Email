// ==UserScript==
// @name         admin-5.20
// @namespace    http://tampermonkey.net/
// @version      5.20
// @description  �Կͷ���ԃ�������
// @author       You
// @match        http://13.229.176.203/admin/index/index.html
// @match        https://goms.giikin.com/admin/index/index.html
// @require      https://libs.baidu.com/jquery/1.9.0/jquery.js
// @require      file://C:\user.js
// @require      file://H:\clipboard.js
// @updateURL    https://github.com/qyz-admin/-/blob/0fb1e98ff0881a2420414bb9467a5f948121b84b/admin-2.0.user.js
// ==/UserScript==https://13.229.176.203/static/admin/js/tabs.js  // @grant        none Tampermonkey
(function() {
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // var a= 15511;
  //  func(a);
      var checkUser = document.getElementsByClassName("username username-hide-on-mobile")[0];
         console.log(checkUser.innerText);
       if ( checkUser.innerText == "qiyuanzhang@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "jiangtiantian@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "yangzhiyu@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "sunyaru@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "liruolan@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "yuanhuanxin@jikeyin.com"){
            console.log(2222);
                fn_nav();
          }else if ( checkUser.innerText == "yangjiayi@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "xuwenjian@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "qukaituo@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "liyafang@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "caokeke@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else if ( checkUser.innerText == "yanghao@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else{
            var navTable = document.getElementById("header-nav");
                       console.log(navTable);
               navTable.parentNode.removeChild(navTable);
          };
 /* var date=new Date();
      console.log(date);
  var time = date.getHours();
      console.log(time);
  if ( time >= 8 && time < 24){
            console.log(2222);
                 fn_nav();
     }else{
           var navTable = document.getElementById("header-nav");
                       console.log(navTable);
               navTable.parentNode.removeChild(navTable);
  };*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var stNode1 = document.createElement('script');
        stNode1 .src ="https://libs.baidu.com/jquery/1.9.0/jquery.js"
       document.querySelector('body').appendChild(stNode1);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var stNode11 = document.createElement('script');
        stNode11 .innerHTML =
                  "layui.use(['layer', 'form'], function(){"
                       +"var layer = layui.layer"
                         +" ,form = layui.form;"
                      +"});"
       document.querySelector('body').appendChild(stNode11);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
         //  fn_nav();
  function fn_nav() {//��������
    var targNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];
    var wxzSearchBarNode = document.createElement('div');
        wxzSearchBarNode.setAttribute('class','header-wxzbar header-info');
        wxzSearchBarNode.setAttribute('id','header-nav');
        wxzSearchBarNode.style = "position: absolute;float: left;top: 10px; left: 235px;width:1625px;";//left:235
        wxzSearchBarNode.innerHTML =
      '<input placeholder=" ݔ��--����̖��" class="search-button btn-sm" id="wxz_input" type="hidden">\
                   <input type="button" value="�ر�" class="btn default showcol btn-sm" id="close_searchButton">\
       &nbsp &nbsp\
                                 <input value="GO-�ͷ�" class="btn default showcol btn-sm" id="wxcx_searchButton" type="hidden">\
                   <input type="button" value="������ѯ" class="btn green btn-sm" id="w_searchButton" >\
                   <input type="button" value="�˵��Ų�ѯ" class="btn default showcol btn-sm" id="waybill_searchButton" >\
                   <input type="button" value="���~��ѯ" class="btn default showcol btn-sm" id="cd_searchButton" >\
                                 <input value="��ʾ/������" class="btn purple btn-sm" id="wxcd_searchButton" type="hidden">\
                                 <input value="��ԃ-�a�l" class="btn default showcol btn-sm" id="wxz_searchButton" type="hidden">&nbsp &nbsp\
                   <input type="button" value="��Ϣ����ʾ" class="btn green btn-sm" id="xxb_searchButton">\
                   <input type="button" value="open��������" class="btn green btn-sm" id="test_searchButton">\
                                 <input value="��Ϣ55" class="btn green btn-sm" id="xxbb_searchButton" type="hidden">\
   <input type="button" value="������O�� &nbsp " class="btn yellow-gold btn-sm" id="demo_search" >\
    &nbsp &nbsp\
                   <input type="button" value="�� ��" class="tool-action btn yellow btn-sm" id="save_searchButton">\
                   <input type="button" value="�� ��" class="btn yellow-gold btn-sm" id="th_searchButton">\
                   <input type="button" value="�� ��" class="btn yellow-gold btn-sm" id="hh_searchButton">\
                   <input type="button" value="�� ��" class="btn yellow-gold btn-sm" id="bf_searchButton"> \
                   <input value="�������" class="btn green btn-sm" id="fz_searchButton" type="hidden">\
     <input type="button" value="�������  �� �� ��" class="tool-action btn yellow btn-sm" id="ffz_searchButton">\
     &nbsp  &nbsp  &nbsp &nbsp\
                <select name="djr" id= "djr">\
                    <option value="0">---�Ǽ���---</option>\
					<option value="�RԪ��">�RԪ��</option>\
					<option value="��΃x">��΃x</option>\
                    <option value="���Ľ�">���Ľ�</option>\
                    <option value="�����m">�����m</option>\
                    <option value="��  ��">��  ��</option>\
                    <option value="���_��">���_��</option>\
                    <option value="������">������</option>\
                    <option value="���">���</option>\
                    <option value="Ԭ����">Ԭ����</option>\
                    <option value="��  �">��  �</option>\
                    <option value="���߼�">���߼�</option>\
                    </select>\
                <select name="tigong" id= "tigong">\
                    <option value="�\�M0">-----���]-----</option>\
					<option value="�\�M300">�\�M300</option>\
					<option value="�\�M99">�\�M99</option>\
                    <option value="�\�Mһ��">��һ�벻ȡ��</option>\
                    </select>\
                <select name="thvalue" id= "thvalue" style = "width:115px;">\
                    <option value="">---��؛ԭ��---</option>\
					<option value="�c�aƷ�W퓲���">�c�aƷ�W퓲���</option>\
					<option value="������">������</option>\
                    <option value="��С������">��С������</option>\
                    <option value="δ����">δ����</option>\
                    <option value="����ƷҪ����؛">����ƷҪ����؛</option>\
                    <option value="�����ã���ϲ��������Ҫ">�����ã���ϲ��������Ҫ</option>\
                    <option value="��Ʒ��覴ã��p��">��Ʒ��覴ã��p��</option>\
                    <option value="��������ʹ��">��������ʹ��</option>\
                    <option value="Ʒ�|�����A��">Ʒ�|�����A��</option>\
                    <option value="�����">�����</option>\
                    <option value="������Ʒ���ٷ�">������Ʒ���ٷ�</option>\
                    </select>\
            <select name="hhvalue" id= "hhvalue" style = "width:115px;">\
                     <option value="">---�Q؛ԭ��---</option>\
					 <option value="���󣬲ֿⷢ��">���󣬲ֿⷢ��</option>\
					 <option value="��С���ֿⷢ��">��С���ֿⷢ��</option>\
                     <option value="����ɫ���ֿⷢ��">����ɫ���ֿⷢ��</option>\
                     <option value="���󣬿ͻ��Լ�ѡ��">���󣬿ͻ��Լ�ѡ��</option>\
                     <option value="��С���ͻ��Լ�ѡ��">��С���ͻ��Լ�ѡ��</option>\
                     <option value="���󣬲�Ʒ���벻����">���󣬲�Ʒ���벻����</option>\
                     <option value="��С����Ʒ���벻����">��С����Ʒ���벻����</option>\
                     <option value="����ɫ����Ʒ��ɫ����վ����">����ɫ����Ʒ��ɫ����վ����</option>\
                     <option value="�������£��ͻ��Լ�ѡ��">�������£��ͻ��Լ�ѡ��</option>\
                    <option value="�������£��ֿⷢ��">�������£��ֿⷢ��</option>\
                    <option value="覴ã�����">覴ã�����</option>\
                    <option value="�𻵣�����">�𻵣�����</option>\
                    <option value="���������⣬����վ����������">���������⣬����վ����������</option>\
                    <option value="�Q�aƷ�a��r����Ʒ������">�Q�aƷ�a��r����Ʒ������</option>\
                    <option value="�Q�aƷ�a��r������վ����">�Q�aƷ�a��r������վ����</option>\
                    <option value="�l�e؛�����ΓQ؛���ֿⷢ��">�l�e؛�����ΓQ؛���ֿⷢ��</option>\
                    <option value="�l�e؛�����ΓQ؛���ͻ��Լ��ṩ��">�l�e؛�����ΓQ؛���ͻ��Լ��ṩ��</option>\
                    <option value="����Ʒ">����Ʒ</option>\
                    <option value="�o��ʹ�ã��Q��">�o��ʹ�ã��Q��</option>\
                    </select>\;'
      targNode.appendChild(wxzSearchBarNode);
    //targNode.insertBefore(wxzSearchBarNode,oldNode); style = "position: relative; float: right;"
  };
      /*   var checkUser = document.getElementsByClassName("username username-hide-on-mobile")[0];
         console.log(checkUser.innerHTML);
       if ( checkUser.innerHTML == "qiyuanzhang@jikeyin.com"){
            console.log(2222);
                 fn_nav();
          }else{
            var navTable = document.getElementById("header-nav");
                       console.log(navTable);
               navTable.parentNode.removeChild(navTable);
          };*/
//-------------------------------------------------------------------------------------------------------------
     document.getElementById("test_searchButton").addEventListener("click", function fn() {//test��ʾ  tanchuang
   var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);
                var thNode101 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> ������  </th>"
                                          + "<th> ����״̬ </th>"
                                          + "<th> �������� </th>"
                                          + "<th> ��Դƽ̨ </th>"
                                          + "<th> ��Ʒ���� </th>"
                                          + "<th> �Ƿ���θ��� </th>"
                                          + "<th> �Ƿ��¡ </th>"
                                          + "<th> ���</th>"
                                          + "<th> ���� </th>"
                                          + "<th> ����</th>"
                                          + "<th> ���ӵ�ַ</th>"
                                          + "<th> �µ�ʱ��</th>"
                                          + "<th> ����</th>"
                                          + "<th> �绰</th>"
                                          + "<th> ������ </th>"
                                          + "<th> ����</th>"
    + "<th> ����״̬</th>"
    + "<th> ��ַ</th>"
    + "<th> IP </th>"
    + "<th> վ��ID</th>"
    + "<th> ����</th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
             var xhr;
             var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value=wxcx.value;
             var cx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("btn green")[0];

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
           layer.msg("��ȫ����ԃ����", {icon: 6},{time: 500});
            // cx.click();
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
              console.log(xhr.responseText);
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
               var item = splitVal2.indexOf("��ɾ��");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" +splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                var splitVal20 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                var splitVal200 = xhrVal.split('href="')[1].split('" target="_blank"')[0];
                 console.log('https://goms.giikin.com/admin/order/' + splitVal20);
//var thNode1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                //var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
                var thNode331 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
                var thNode2 = document.createElement('tr');
                    thNode2.innerHTML =
                                        "<td>" + xhrVal.split("<td>")[1].split("</td>")[0] + "</td>"
                + "<td" + splitVal2 + "</td>"
                + "<td>" + xhrVal.split("<td>")[3].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[4].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[5].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[6].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[7].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[8].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[9].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[10].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[11].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[12].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[13].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[14].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[15].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[16].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[17].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[18].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[19].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[20].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[21].split("</td>")[0] + "</td>";
                  //  thNode1.append(thNode2);
                    thNode111.append(thNode2);
                 window.open('https://goms.giikin.com/admin/order/' + splitVal20, 'newwindow', 'height=750, width=1150, top=50, left=250, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=yes');
                getImg();//?��
                 }
              };
      };//
           },false)
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var djrNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];//�Ǽ���
    //var SearchBarNode = document.getElementById("header-nav");//nav

    var djrvalue = document.createElement('select');
        djrvalue.setAttribute('name','djr');
        djrvalue.setAttribute('id','djr');
        djrvalue.style = "position: relative; float: left;top: -20px;left: 35px;height:30px;text-align:center;font-size;50px;color:red;border:1px solid red;";
        djrvalue.innerHTML =
                     '<option value="0" >---�Ǽ���---</option>'
					+'<option value="�RԪ��">�RԪ��</option>'
					+'<option value="��΃x">��΃x</option>'
                    +'<option value="���Ľ�">���Ľ�</option>'
                    +'<option value="�����m">�����m</option>'
                    +'<option value="��  ��">��  ��</option>'
                    +'<option value="���_��">���_��</option>'
                    +'<option value="������">������</option>'
                    +'<option value="���">���</option>'
     //  djrNode.appendChild(djrvalue);
      // SearchBarNode.appendChild(djrNode);
    var thNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];//���]
    var thhNode = document.createElement('select');
        thhNode.setAttribute('name','tigong');
        thhNode.setAttribute('id','tigong');
        thhNode.style = "position: relative;"
                       + "float: left;"
                       + "top: -20px;"
                       + "left: 40px;"
                       + "height:30px;"
                       + "width:100px;"
                       + "text-align:center;"
                       + "font-size;50px;"
                       + "color:red;"
                       + "border:1px solid red;";
       thhNode.innerHTML =
                     '<option value="�\�M0">-----���]-----</option>'
					+'<option value="�\�M300">�\�M300</option>'
					+'<option value="�\�M99">�\�M99</option>'
                    +'<option value="�\�Mһ��">��һ�벻ȡ��</option>'
      // thNode.appendChild(thhNode);
    var thyyNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];//��؛
    var thhyyNode = document.createElement('select');
        thhyyNode.setAttribute('name','thvalue');
        thhyyNode.setAttribute('id','thvalue');
        thhyyNode.style = "position: relative;"
                       + "float: left;"
                       + "top: -20px;"
                       + "left: 50px;"
                       + "height:30px;"
                       + "text-align:center;"
                       + "font-size;50px;"
                       + "color:red;"
                       + "border:1px solid red;";
       thhyyNode.innerHTML =
                     '<option value="">-----------��؛ԭ��-----------</option>'
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
       //thyyNode.appendChild(thhyyNode);
//��������������������������������
//---------------------------------------------------------------------------------------------------------------------------------------------------------
        var hhyyNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];//�Q؛
        var hhhyyNode = document.createElement('select');
        hhhyyNode.setAttribute('name','hhvalue');
        hhhyyNode.setAttribute('id','hhvalue');
        hhhyyNode.style = "position: relative;"
                       + "float: left;"
                       + "top: 10px;"//280px
                       + "left: -135px;"//-24px
                       + "height:30px;"
                       + "text-align:center;"
                       + "font-size;50px;"
                       + "color:red;"
                       + "border:1px solid red;";
    hhhyyNode.innerHTML =
                     '<option value="">-------------------�Q؛ԭ��------------------</option>'
					+'<option value="���󣬲ֿⷢ��">���󣬲ֿⷢ��</option>'
					+'<option value="��С���ֿⷢ��">��С���ֿⷢ��</option>'
                    +'<option value="����ɫ���ֿⷢ��">����ɫ���ֿⷢ��</option>'
                    +'<option value="���󣬿ͻ��Լ�ѡ��">���󣬿ͻ��Լ�ѡ��</option>'
                    +'<option value="��С���ͻ��Լ�ѡ��">��С���ͻ��Լ�ѡ��</option>'
                    +'<option value="���󣬲�Ʒ���벻����">���󣬲�Ʒ���벻����</option>'
                    +'<option value="��С����Ʒ���벻����">��С����Ʒ���벻����</option>'
                    +'<option value="����ɫ����Ʒ��ɫ����վ����">����ɫ����Ʒ��ɫ����վ����</option>'
                    +'<option value="�������£��ͻ��Լ�ѡ��">�������£��ͻ��Լ�ѡ��</option>'
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
      // hhyyNode.appendChild(hhhyyNode);
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("wxcd_searchButton").addEventListener("click", function fn() {//��ʾ/������
            var navNode = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("btn default showcol")[0];
                console.log(navNode);
          var show_tab = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("showul dropdown_row")[0];
                        console.log(show_tab.style.display);
          if (show_tab.style.display == "none") {
              show_tab.style="display: block;";
           }else {
              show_tab.style="display: none;";
           };




},false);//--
//=---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("fz_searchButton").addEventListener("click", function fn() {//һ�I�}�u
    //var text= document.getElementById("tab_iframe_��ӛ�˓Q؛��").contentDocument.getElementsByTagName("tr")[3].innerText;//һ�I�}�u
        var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
           console.log(thNode111.children.length);
        var thNodeLen = thNode111.children.length;
  if(thNodeLen == 1){
    var text= document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue").innerText;
           console.log(text);
    var textArea = document.createElement('input');
        textArea.value = text;
      document.body.appendChild(textArea);
      //  textArea.style.display = "none";
        textArea.select();
        document.execCommand('copy');
      alert("���Ƴɹ�");
         setTimeout(function () {
            document.body.removeChild(textArea);
        }, 100);
  }else{
    var text0= document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue").innerText;
           console.log(text0);
    var textArea0 = document.createElement('textarea');
        textArea0.value = text0;
      document.body.appendChild(textArea0);
      //  textArea.style.display = "none";
        textArea0.select();
        document.execCommand('copy');
       alert("���Ƴɹ�");
         setTimeout(function () {
            document.body.removeChild(textArea0);
        }, 100);
      };
  },false)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("ffz_searchButton").addEventListener("click", function fn() {//һ�I
            var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
           console.log(thNode111.children.length);
        var thNodeLen = thNode111.children.length;
  if(thNodeLen == 1){
    var text= document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue").innerText;
           console.log(text);
    var textArea = document.createElement('input');
        textArea.value = text;
      document.body.appendChild(textArea);
      //  textArea.style.display = "none";
        textArea.select();
        document.execCommand('copy');
      layer.msg('Hello ���Ƴɹ�', {icon: 6});
  //    layer.msg('Hello ���Ƴɹ�', {icon: 2});
  //          layer.msg('Hello ���Ƴɹ�', {icon: 3});
   //         layer.msg('Hello ���Ƴɹ�', {icon: 4});
   //         layer.msg('Hello ���Ƴɹ�', {icon: 5});
    //             layer.msg('Hello ���Ƴɹ�', {icon: 6});
         setTimeout(function () {
            document.body.removeChild(textArea);
        }, 100);
  }else{
    var text0= document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue").innerText;
           console.log(text0);
    var textArea0 = document.createElement('textarea');
        textArea0.value = text0;
      document.body.appendChild(textArea0);
      //  textArea.style.display = "none";
        textArea0.select();
       // document.execCommand('copy', false);
      document.execCommand('copy');
       layer.msg('Hello ���Ƴɹ�', {icon: 6});
         setTimeout(function () {
            document.body.removeChild(textArea0);
        }, 100);
      };
      },false);
//------------------------------------------------------------------------------------------------------------------------------------------

 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function xxbTb() {
        var xxbdemo= document.getElementById("tab_iframe_��Ϣ��").contentDocument.getElementsByTagName("body")[0];
            console.log(xxbdemo);
        var xxbNode = document.createElement('div');
            xxbNode.setAttribute('class','tab_conten');
            xxbNode.setAttribute('id','tab_conten_��Ϣ��');
            xxbNode.innerHTML ="��������"
            xxbdemo.appendChild(xxbNode);
        }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  var tulNode = document.getElementsByClassName('page-sidebar-menu  page-header-fixed ')[0];
   var tul = document.createElement('li');
       tul.setAttribute('class','nav-item  ');
       tul.setAttribute('id','t_question_modal');
      // tul.style.display = 'none';
       tul.innerHTML =
               '<a href="javascript:; function (e)" class="nav-link nav-toggle">\
                    <i class="icon-layers"></i>\
                    <span class="title" style = "color:red">����ʽ����</span>\
                    <span class="arrow"></span>\
                </a>\
                      <ul class="sub-menu">\
             <li id="demo_tab1" class="nav-item  " target="_blank">\
                   <a href="" class="nav-link ">\
                   <i class="iconfont">�A</i>\
                   <span class="title" style = "color:red">��Ϣ��</span>\
                   </a>\
            </li>\
                           <li class="nav-item  ">\
                                <a href="https://fanyi.baidu.com/?aldtype=16047#auto/zh" class="nav-link "  id="tul_search" target="_blank">\
                                <i class="iconfont">�A</i>\
                                <span class="title">�ٶȷ���</span>\
                                </a>\
                           </li>\
                           <li class="nav-item  ">\
                                <a href="//tvlove.club/giikin/set/email.html" class="nav-link " target="view_window">\
                                <i class="iconfont">�A</i>\
                                <span class="title">�����¼</span>\
                                </a>\
                           </li>\
                           <li class="nav-item  ">\
                                <a href="https://www.hct.com.tw/search/searchgoods_n.aspx" class="nav-link " target="view_window">\
                                <i class="iconfont">�A</i>\
                                <span class="title">��������</span>\
                                </a>\
                           </li>\
                           <li class="nav-item  " target="_blank">\
                                <a href="https://alidocs.dingtalk.com/spreadsheet/edit?dentryKey=dYa20qQ3jSkNqY48" class="nav-link " target="view_window">\
                                <i class="iconfont">�A</i>\
                                <span class="title">�ᔵ�ӛ�˓Q؛��</span>\
                                </a>\
                           </li>\
 <li class="nav-item  " target="_blank">\
                                <a href="/admin/order/orderquery.html" class="nav-link " target="view_window">\
                                <i class="iconfont">�A</i>\
                                <span class="title"></span>\
                                </a>\
                           </li>\
<li class="nav-item">\
            <a id="add_tab" >\
            <i class="iconfont">�A</i>\
            <span class="title"></span>\
            </a>\
</li>\
                       </ul>\
            </li>\;'
       tulNode.appendChild(tul);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("xxb_searchButton").addEventListener("click", function fn() {//��Ϣ��

//function fn() {
            var xxbdemo9= document.getElementById("tab_iframe_��Ϣ��").contentDocument.getElementsByTagName("head")[0];
         // var stNode12 = document.createElement('head');
              xxbdemo9.innerHTML =
                     '<meta charset="utf-8">'
+'<title>����ӡ����ʽ����̨</title>'
+'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
+'<meta content="width=device-width, initial-scale=1" name="viewport">'
+'<meta content="" name="description">'
+'<meta content="" name="author">'
+'<!-- BEGIN GLOBAL STYLES -->'
+'<link href="/static/admin/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">'
+'<link href="/static/admin/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css">'
+'<link href="/static/admin/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">'
+'<link href="/static/admin/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css">'
+'<!-- BEGIN THIS PAGE -->'

+'<!-- BEGIN GLOBAL STYLES -->'
+'<link href="/static/admin/css/components.min.css" rel="stylesheet" type="text/css">'
+'<link href="/static/admin/css/plugins.min.css" rel="stylesheet" type="text/css">'
+'<!-- BEGIN THEME GLOBAL STYLES -->'
+'<link href="/static/admin/css/layout.min.css" rel="stylesheet" type="text/css">'
+'<link href="/static/admin/css/themes/darkblue.min.css" rel="stylesheet" type="text/css" id="style_color">'
      +'<link href="/static/admin/css/common.css" rel="stylesheet" type="text/css">'
      +'<link rel="stylesheet" href="/static/layui/css/layui.css" media="all">'
      +'<link id="layuicss-skinlayercss" rel="stylesheet" href="https://goms.giikin.com/static/layui/css/modules/layer/default/layer.css?v=3.0.3303" media="all">'
            +'<link rel="shortcut icon" href="/static/admin/img/favicon.ico">'
            //  xxbdemo9.appendChild(stNode12);

     var xxbdemo= document.getElementById("tab_iframe_��Ϣ��").contentDocument.getElementsByTagName("body")[0];
         xxbdemo.setAttribute('class','page-header-fixed page-sidebar-closed-hide-logo page-content-white');
         xxbdemo.setAttribute('style','zoom: 1;');

      // var xxbdemo = document.getElementsByClassName("tab-content")[0];

    var stNode10 = document.createElement('script');
        stNode10 .src ="https://libs.baidu.com/jquery/1.9.0/jquery.js"
        xxbdemo.appendChild(stNode10);

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
        xxbdemo.appendChild(stNode11001);
      /*
    var stNode11002 = document.createElement('script');
        stNode11002.setAttribute('type','text/javascript');
        stNode11002.setAttribute('src','https://goms.giikin.com/static/layui/lay/modules/form.js');
        stNode11002.setAttribute('charset','utf-8');
        xxbdemo.appendChild(stNode11002);           */
  //   +'<script type="text/javascript" src="/static/layui/layui.js" charset="utf-8"></script>'   file:static/layui/lay/modules

      var xxbNode2 = document.createElement('div');
          xxbNode2.setAttribute('class','page-wrapper');
          xxbNode2.innerHTML =
         '<style>'
                 + ' .page-content-wrapper .page-content {margin-top: 0;min-height: 600px;padding: 0px 0px 5px;margin-left: 0;}'
                 + ' .page-header-fixed .page-container {margin-top: 0px;}'
	             + ' .page-bar{display:none;}'
       + '</style>'

       + '<div class="clearfix"> </div>'
       + '<div class="page-container">'
         + '<div class="page-content-wrapper">'
          + '<div class="page-content" style="overflow: scroll;min-height: 812px;">'
             +'<div class="page-bar"><ul class="page-breadcrumb"><li><a href="/admin/index/index.html">Home</a><i class="fa fa-circle"></i></li><li><span>��Ϣ��</span></li></ul></div>'
             +'<div class="row">'
               +'<div class="col-md-12">'
                 +'<div class="portlet box green">'
                   +'<div class="portlet-title"><div class="caption"><i class="fa icon-settings"></i>��Ϣ��</div> </div>'
                   +'<div class="portlet-body">'

      /* +'<div class="row" style="margin-bottom:10px;">'
         +'<p style="text-align:center; "> <br><span id="site_runtime" style="">�����У� 382 �� 17 Сʱ 29 �� 15 �� <br><br>Fri Feb 07 2020 17:29:15 GMT+0800 (�й���׼ʱ��)</span>'
         +'<br> <br>��ǰIP ��<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script> &nbsp;'
            +'<script type="text/javascript">'
                +'document.write(returnCitySN["cip"]+' - '+returnCitySN["cname"])'
            +'</script>47.244.234.103 - CANADA - ���ɻ�Ҫ��PACģʽ'
         +'</p>'
         +' </div>'*/


                     +'<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;text-align:center;"><legend>����¼���������ơ�</legend></fieldset>'
                     +'<div class="row" style="margin-bottom:10px;">'
                      +'<div class="col-md-6">'//111111
                        +'<div class="layui-card">'
                         +'<div class="layui-card-header" style="font-size: 28px;">����</div>'
                          +'<div class="layui-card-body">'
                           +'<div class="layui-form">'
                            +'<table class="layui-table"><colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>ǰ��</th><th>��׺</th><th>����</th><th>��ݵ�½</th></tr></thead>'
                                +'<tbody><tr>'
                                    +'<td onclick="ad2(0)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(1)"><div class="js-copy" data-clipboard-text="libaka.tw"><span>libaka.tw</span></div></td>'
                                    +'<td onclick="ad2(2)"><div class="js-copy" data-clipboard-text="libaka@gk.2018!"><span>libaka@gk.2018!</span></div></td>'
                +'<td>'//����
         +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
         +'<input type="hidden" name="username" value="service@libaka.tw">'
         +'<input type="hidden" name="password" value="libaka@gk.2018!">'
         +'<input type="hidden" name="keepAccount" value="on">'
         +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
         +'<input type="hidden" name="systemid" value="app">'
         +'<input type="hidden" name="keepAccount" value="on">'
         +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">libaka &nbsp &nbsp &nbsp &nbsp &nbsp��ͨ 1</button></form>'
              +'</td></tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(3)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(4)"><div class="js-copy" data-clipboard-text="yoyomall.tw"><span>yoyomall.tw</span></div></td>'
                                    +'<td onclick="ad2(5)"><div class="js-copy" data-clipboard-text="Service123"><span>Service123</span></div></td>'
              +'<td>'//����
       +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@yoyomall.tw">'
        +'<input type="hidden" name="password" value="Service123">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">yoyomall &nbsp &nbsp ��ͨ 2</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(6)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(7)"><div class="js-copy" data-clipboard-text="vivishop.tw"><span>vivishop.tw</span></div></td>'
                                    +'<td onclick="ad2(8)"><div class="js-copy" data-clipboard-text="Service@123"><span>Service@123</span></div></td>'
              +'<td>'//����
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@vivishop.tw">'
        +'<input type="hidden" name="password" value="Service@123">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">vivishop &nbsp &nbsp &nbsp��ͨ 3</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(9)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(10)"><div class="js-copy" data-clipboard-text="cocomall.tw"><span>cocomall.tw</span></div></td>'
                                    +'<td onclick="ad2(11)"><div class="js-copy" data-clipboard-text="Service123"><span>Service123</span></div></td>'
              +'<td>'//����
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@cocomall.tw">'
        +'<input type="hidden" name="password" value="Service123">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">cocomall &nbsp &nbsp��ͨ 4</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(12)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(13)"><div class="js-copy" data-clipboard-text="mo11shop.com"><span>mo11shop.com</span></div></td>'
                                    +'<td onclick="ad2(14)"><div class="js-copy" data-clipboard-text="Service123"><span>Service123</span></div></td>'
              +'<td>'//����
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@mo11shop.com">'
        +'<input type="hidden" name="password" value="Service123">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">mo11shop ��ͨ 5</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(15)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(16)"><div class="js-copy" data-clipboard-text="lycocode.com"><span>lycocode.com</span></div></td>'
                                    +'<td onclick="ad2(17)"><div class="js-copy" data-clipboard-text="Taiwan1011#9120"><span>Taiwan1011#9120</span></div></td>'
              +'<td>'//����
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@lycocode.com">'
        +'<input type="hidden" name="password" value="Taiwan1011#9120">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">lycocode &nbsp &nbsp ��ͨ 6</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(18)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(19)"><div class="js-copy" data-clipboard-text="geegonlie.com"><span>geegonlie.com</span></div></td>'
                                    +'<td onclick="ad2(20)"><div class="js-copy" data-clipboard-text="geego@tw88!/"><span>geego@tw88!/</span></div></td>'
              +'<td>'//����
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@geegonlie.com">'
        +'<input type="hidden" name="password" value="geego@tw88!">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">geegonlie &nbsp&nbsp��ͨ 7</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(21)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(22)"><div class="js-copy" data-clipboard-text="cocalot.com"><span>cocalot.com</span></div></td>'
                                    +'<td onclick="ad2(23)"><div class="js-copy" data-clipboard-text="Line.tw@2019/"><span>Line.tw@2019/</span></div></td>'
              +'<td>'//����
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@cocalot.com">'
        +'<input type="hidden" name="password" value="Line.tw@2019/">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">cocalot &nbsp &nbsp &nbsp &nbsp��ͨ 8</button></form>'
              +'</td></tr>'
                                +'</tbody>'
                            +'</table>'
              //   +'<br>'
                   +'<a href="http://tvlove.club/giikin/set/email.html" target="_blank"><span style="color:red;">����1</span>-����]���ַ��&nbsp;&nbsp;&nbsp;http://tvlove.club/giikin/set/email.html</a>'
 +'<br>'
                   +'<a href="http://tvlove.club/giikin/set/email.html" target="_blank"><span style="color:red;">����2</span>-����]���ַ��&nbsp;&nbsp;&nbsp;https://qyz-admin.github.io/Email/email</a>'
                 +'<br>'
                 +'<br>'
                 +'</div>'
           +'</div>'
         +'</div>'
     +'</div>'//111111
            +'<div class="col-md-6">'//22222
                +'<div class="layui-card">'
                    +'<div class="layui-card-header" style="font-size: 30px;">Line</div>'
                    +'<div class="layui-card-body">'
                        +'<div class="layui-form">'
                            +'<table class="layui-table">'
                                +'<colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>����</th><th>I D</th><th>�˺�</th><th>����</th></tr></thead>'
                                +'<tbody><tr><td>�ۺ�</td>'
                                    +'<td onclick="ad2(24)"><div class="js-copy" data-clipboard-text="a5432678"><span>a5432678</span></div></td>'
                                    +'<td onclick="ad2(25)"><div class="js-copy" data-clipboard-text="a1812375850@gmail.com"><span>a1812375850@gmail.com</span></div></td>'
                                    +'<td onclick="ad2(26)"><div class="js-copy" data-clipboard-text="009988.qaz"><span>009988.qaz</span></div></td></tr>'
                                +'<tr><td>�ۺ�</td><td></td>'
                                    +'<td onclick="ad2(27)"><div class="js-copy" data-clipboard-text="jkydev@163.com"><span>jkydev@163.com</span></div></td>'
                                    +'<td onclick="ad2(28)"><div class="js-copy" data-clipboard-text="geego123456"><span>geego123456</span></div></td></tr>'
                                +'<tr><td>�ۺ�</td><td></td>'
                                    +'<td onclick="ad2(29)"><div class="js-copy" data-clipboard-text="594580153@qq.com"><span>594580153@qq.com</span></div></td>'
                                    +'<td onclick="ad2(30)"><div class="js-copy" data-clipboard-text="jikeyin.123"><span>jikeyin.123</span></div></td></tr>'
                                +'<tr><td>�̳�</td><td></td>'
                                    +'<td onclick="ad2(31)"><div class="js-copy" data-clipboard-text="848750869@qq.com"><span>848750869@qq.com</span></div></td>'
                                    +'<td onclick="ad2(32)"><div class="js-copy" data-clipboard-text="123456qaz"><span>123456qaz</span></div></td></tr>'
                               +'<tr><td>���߼�</td><td></td>'
                                    +'<td onclick="ad2(33)"><div class="js-copy" data-clipboard-text="765351485@qq.com"><span>765351485@qq.com</span></div></td>'
                                    +'<td onclick="ad2(34)"><div class="js-copy" data-clipboard-text="123456789qaz"><span>123456789qaz</span></div></td></tr>'
                               +'<tr><td>��ͻ�</td>'
                                    +'<td onclick="ad2(35)"><div class="js-copy" data-clipboard-text="6provence"><span>6provence</span></div></td>'
                                    +'<td onclick="ad2(36)"><div class="js-copy" data-clipboard-text="a1769235920@gmail.com"><span>a1769235920@gmail.com</span></div></td>'
                                    +'<td onclick="ad2(37)"><div class="js-copy" data-clipboard-text="sunan1022wang."><span>sunan1022wang.</span></div></td></tr>'
                                +'<tr><td>��֪��</td><td></td>'
                                    +'<td onclick="ad2(38)"><div class="js-copy" data-clipboard-text="1812375850@qq.com"><span>1812375850@qq.com</span></div></td>'
                                    +'<td onclick="ad2(39)"><div class="js-copy" data-clipboard-text="qaz123."><span>qaz123.</span></div></td></tr>'
                                +'</tbody>'
                            +'</table>'
                          +'</div>'
                        +'</div>'
                     +'</div>'
                     +'</div>'///2222
                                +'<br>'
                                 +'<br>'
                                 +'<hr>'
                                 +'<div class="portlet-body">'
                                      +'<div class="row" style="margin-bottom:10px;">'
                                                                       +'<div class="col-md-6">'//33333
                +'<div class="layui-card">'
                    +'<div class="layui-card-header" style="font-size: 28px;">�����˺�</div>'
                    +'<div class="layui-card-body">'
                        +'<div class="layui-form">'
                            +'<table class="layui-table">'
                                +'<colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>�˺�</th><th>����</th><th></th><th></th></tr></thead>'
                                +'<tbody>'
                                +'<tr>'
                                    +'<td onclick="ad2(40)"><div class="js-copy" data-clipboard-text="18736709763"><span>18736709763</span></div></td>'
                                    +'<td onclick="ad2(41)"><div class="js-copy" data-clipboard-text="826874"><span>826874</span></div></td>'
                                   +' <td></td><td></td>'
                                +'</tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(42)"><div class="js-copy" data-clipboard-text="18530986333"><span>18530986333</span></div></td>'
                                    +'<td onclick="ad2(43)"><div class="js-copy" data-clipboard-text="18530986333"><span>18530986333</span></div></td>'
                                   +' <td></td><td></td>'
                                +'</tr>'
                                +'</tbody>'
                            +'</table>'
                          +'</div>'
                        +'</div>'
                     +'</div>'
                     +'</div>'///33333
                                        +'<div class="col-md-6">'//3333311111111
                +'<div class="layui-card">'
                    +'<div class="layui-card-header" style="font-size: 28px;">�̳Ǻ�̨</div>'
                    +'<div class="layui-card-body">'
                        +'<div class="layui-form">'
                            +'<table class="layui-table">'
                                +'<colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>���</th><th>�˺�</th><th>����</th><th>��ַ</th></tr></thead>'
                                +'<tbody>'
                                +'<tr>'
                                    +'<td onclick="ad2(44)"><div class="js-copy" data-clipboard-text="VIVISHOP"><span>VIVISHOP</span></div></td>'
                                    +'<td onclick="ad2(45)"><div class="js-copy" data-clipboard-text="tw_admin"><span>tw_admin</span></div></td>'
                                    +'<td onclick="ad2(46)"><div class="js-copy" data-clipboard-text="tw123456"><span>tw123456</span></div></td>'
                                    +'<td onclick="ad2(47)" style="word-break:break-all; word-wrap:break-all;"><div class="js-copy" data-clipboard-text="http://admin.vivishop.tw/index.php/admin/dashboard/index/store/6/key/2f2ae74d8e129269d3e1061918b9d2d0/"><span>http://admin.vivishop.tw/index.php/admin/dashboard/index/store/6/key/2f2ae74d8e129269d3e1061918b9d2d0/</span></div></td>'
                                +'</tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(48)"><div class="js-copy" data-clipboard-text="cocomall"><span>cocomall</span></div></td>'
                                    +'<td onclick="ad2(49)"><div class="js-copy" data-clipboard-text="1769235920@qq.com"><span>1769235920@qq.com</span></div></td>'
                                    +'<td onclick="ad2(50)"><div class="js-copy" data-clipboard-text="sunan1022wang"><span>sunan1022wang</span></div></td>'
                                    +'<td onclick="ad2(51)" style="word-break:break-all; word-wrap:break-all;"><div class="js-copy" data-clipboard-text="https://uugo.myshopify.com/admin/orders"><span>https://uugo.myshopify.com/admin/orders</span></div></td>'
                                +'</tr>'
                                +'</tbody>'
                            +'</table>'
                          +'</div>'
                        +'</div>'
                     +'</div>'
                     +'</div>'///333331111111111
                                 +'<br>'
                                 +'<br>'
                                 +'<hr>'
                +'<div class="col-md-6">'//4444444444
                +'<div class="layui-card">'
                    +'<div class="layui-card-header" style="font-size: 28px;">����ͨ�˺�</div>'
                    +'<div class="layui-card-body">'
                        +'<div class="layui-form">'
                            +'<table class="layui-table">'
                                +'<colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>�˺�</th><th>�ǳ�</th><th>����</th><th>ʹ����</th></tr></thead>'
                                +'<tbody><tr>'
                                    +'<td onclick="ad2(52)"><div class="js-copy" data-clipboard-text="MHN74355580"><span>MHN74355580</span></div></td>'
                                    +'<td onclick="ad2(53)"><div class="js-copy" data-clipboard-text="����"><span>����</span></div></td>'
                                    +'<td onclick="ad2(54)"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(55)"><div class="js-copy" data-clipboard-text="LEF21785856"><span>LEF21785856</span></div></td>'
                                    +'<td onclick="ad2(56)"><div class="js-copy" data-clipboard-text="��ؑ������"><span>��ؑ������</span></div></td>'
                                    +'<td onclick="ad2(57)"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(58)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF29968484"><span>LEF29968484</span></div></td>'
                                    +'<td onclick="ad2(59)" style="color:red;"><div class="js-copy" data-clipboard-text="�ɿ�"><span>�ɿ�</span></div></td>'
                                    +'<td onclick="ad2(60)" style="color:red;"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(61)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF61392403"><span>LEF61392403</span></div></td>'
                                    +'<td onclick="ad2(62)" style="color:red;"><div class="js-copy" data-clipboard-text="����"><span>����</span></div></td>'
                                    +'<td onclick="ad2(63)" style="color:red;"><div class="js-copy" data-clipboard-text="aj0000"><span>aj0000</span></div></td></tr>'
                               +'<tr>'
                                    +'<td onclick="ad2(64)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF92795858"><span>LEF92795858</span></div></td>'
                                    +'<td onclick="ad2(65)" style="color:red;"><div class="js-copy" data-clipboard-text="����"><span>����</span></div></td>'
                                    +'<td onclick="ad2(66)" style="color:red;"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                               +'<tr>'
                                    +'<td onclick="ad2(67)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF66352023"><span>LEF66352023</span></div></td>'
                                    +'<td onclick="ad2(68)" style="color:red;"><div class="js-copy" data-clipboard-text="����"><span>����</span></div></td>'
                                    +'<td onclick="ad2(69)" style="color:red;"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                               +'<tr>'
                                    +'<td onclick="ad2(70)"><div class="js-copy" data-clipboard-text="LEF32552906"><span>LEF32552906</span></div></td>'
                                    +'<td onclick="ad2(71)"><div class="js-copy" data-clipboard-text="����������"><span>����/����</span></div></td>'
                                    +'<td onclick="ad2(72)"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                               +'<tr>'
                                    +'<td onclick="ad2(73)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF42180521"><span>LEF42180521</span></div></td>'
                                    +'<td onclick="ad2(74)" style="color:red;"><div class="js-copy" data-clipboard-text="С����С�f  ��С��"><span>С����С�f  ��С��</span></div></td>'
                                    +'<td onclick="ad2(75)" style="color:red;"><div class="js-copy" data-clipboard-text="jikeyin"><span>jikeyin</span></div></td></tr>'
                                +'</tbody>'
                            +'</table>'
                          +'</div>'
                        +'</div>'
                     +'</div>'
                     +'</div>'///444444
                                      +'</div>'
                                   +'</div>'

                 +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'
          +'</div>'
        +'</div>'
      +'</div>'
   +'</div>'
 +'</div>;'
          xxbdemo.appendChild(xxbNode2);
      var xxbNode005 = document.createElement('script');
          xxbNode005.innerHTML =
           'function ad(){'
             +'alert(1199)'
             +' }'
         xxbdemo.appendChild(xxbNode005);
//var a= 15511;
  //  func(a);
      var xxbNode0051 = document.createElement('script');
          xxbNode0051.innerHTML =
           'function ad1(){'
                +'var text05= document.getElementsByClassName("js-copy")[30].getAttribute("data-clipboard-text");'
                +'console.log(text05);'
                +'alert(text05);'
                +'};'
         xxbdemo.appendChild(xxbNode0051);
      //---------------

    var xxbNode0055 = document.createElement('script');
        xxbNode0055.innerHTML =
      'function ad2(i){'
           +'var text05= document.getElementsByClassName("js-copy")[i].getAttribute("data-clipboard-text");'
               +'console.log(text05);'
          +' var textArea05 = document.createElement("textarea");'
              +' textArea05.value = text05;'
         +' document.body.appendChild(textArea05);'
            +'   textArea05.select();'
       +'   document.execCommand("copy");'
             +'layer.msg("Hello ���Ƴɹ�", {icon: 6});'
      +'    setTimeout(function () {'
       +'      document.body.removeChild(textArea05);'
        +'  }, 10);'
     +'};'
          xxbdemo.appendChild(xxbNode0055);
//---------------------------------------------------------------------------------------------------------------
/*     var stNode19 = document.createElement('script');
        stNode19.src="//lib.baomitu.com/toastr.js/latest/js/toastr.min.js"
        xxbdemo.appendChild(stNode19);
    var stNode190 = document.createElement('script');
        stNode190.src="https://unpkg.com/clipboard@2.0.0/dist/clipboard.min.js"
        xxbdemo.appendChild(stNode190);*/

},false);
         document.getElementById("demo_search").addEventListener("click", function fnn() { // �������O��
             var demo = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("btn default showcol")[0];
                   demo.click();
             var demoput00 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[2];//����
                   demoput00.click();
             var demoput = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[5];//��Ʒid
                   demoput.click();
             var demoput1 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[14];//�绰����
                   demoput1.click();
             var demoput2 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[21];//����״̬
                   demoput2.click();
             var demoput3 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[22];//
                   demoput3.click();
             var demoput4 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[30];//����
                   demoput4.click();
             var demoput5 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[34];//������Ʒ
                   demoput5.click();
             var demoput60 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[36];//�Ƿ����ʼ�
                   demoput60.click();
          var demoput61 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[39];//IP
                   demoput61.click();
          var demoput6 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("toggle-vis")[40];//��ע
                   demoput6.click();
             var demoput7 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("btn default showcol")[0];//
                   demoput7.click();
            //var demoput8 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("form-control input-sm input-xsmall input-inline")[0];//
             //      demoput8.selectedIndex = 3;//��ʾ����
             var demoput9 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("chosen")[1];//
                   demoput9.selectedIndex = 2;//ѡ�����
             var demoput10 = document.getElementById("tab_iframe_�����").contentDocument.getElementsByClassName("order_search form-control input-sm input-inline")[0];//
                   demoput10.click();//ѡ������

},false);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function xxbTab() {
    setTimeout(function () {
        var xxbdemo= document.getElementById("tab_iframe_��Ϣ��").contentDocument.getElementsByTagName("body")[0];
            console.log(xxbdemo);
        var xxbNode = document.createElement('div');
            xxbNode.setAttribute('class','tab_conten');
            xxbNode.setAttribute('id','tab_conten_��Ϣ��');
            xxbNode.innerHTML =
                        '<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">'
                       +'<legend>�������������ơ�</legend>'
                       +'</fieldset>;'
            xxbdemo.appendChild(xxbNode);
          }, 5000);
        }
    var stNode111 = document.createElement('script');
        stNode111 .innerHTML =
                 'function xxbTab() {'
                   + 'setTimeout(function () {'
                      + ' var xxbdemo= document.getElementById("tab_iframe_��Ϣ��").contentDocument.getElementsByTagName("body")[0];'
                       + ' console.log(xxbdemo);'
                       + ' var xxbNode = document.createElement("div");'
                       + 'xxbNode.setAttribute("class","tab_conten");'
                        + 'xxbNode.innerHTML ='
                        +'<legend>�������������ơ�</legend>;'
                        + 'xxbdemo.appendChild(xxbNode);'
                  + '}, 5000);'
             + ' }'
       document.querySelector('body').appendChild(stNode111);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("add_tab").addEventListener("click", function fn() {
        var tabdemo= document.getElementsByClassName("nav nav-tabs")[0];
        var tabNode = document.createElement('li');
            tabNode.setAttribute('class','active');
            tabNode.setAttribute('id','tab_��Ϣ��');
            tabNode.innerHTML =
                  '<a href="#tab_panel_��Ϣ��" data-toggle="tab">��Ϣ��</a>'
                       +'<span class="close-tab">��</span>'
            tabdemo.appendChild(tabNode);
       var contentdemo= document.getElementsByClassName("tab-content")[0];
           console.log(contentdemo);
        var contentNode = document.createElement('div');
            contentNode.setAttribute('class','tab_conten');
            contentNode.setAttribute('id','tab_conten_��Ϣ��');
            contentNode.innerHTML =
                        '<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">'
                       +'<legend>�������������ơ�</legend>'
                       +'</fieldset>;'
            contentdemo.appendChild(contentNode);
  },false);
//---------------------------------------------------------------------------------------------------
     document.getElementById("xxbb_searchButton").addEventListener("click", function fn(){ //{----------------------------------------------
  /*           var wxcx8 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value8=wxcx8.value;
                huanhuo();
         function huanhuo() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "c/register.php?t=hh",
        data: wxcx_value,
        success: function (result) {
            console.log(result);
            if (result.jsonCode == 0) {
                layer.msg('��ճ������Ŷ')
            }
            if (result.jsonCode == 1) {
                layer.msg("���", {time: 500});
                var html = result.con;
                $("#ullist").html(html)
            }
            if (result.jsonCode == 2) {
                layer.msg("δ��ѯ��������δ�µ����̨�ӳٻ���Ϣ����", {time: 1000})
            }
        },
        error: function () {
            layer.msg('δ��ѯ���������ǣ�Ȩ��ʧЧ / δ�µ� / ��̨�ӳ� / �������� �������������ô�ٵ�һ�λ���ʹ�����ӿ�/>')
        }
    })
}/////////////////////////////////////////////////////////////////////////////////////
  */
         var xhr;
             var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
              console.log(xhr.responseText);
                getImg();//?��
                 }
              };
      };//

  },false);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 /*   //var tcdemo = document.getElementsByClassName('tab-content')[0];
    var tcdemo= document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName('page-content')[0];
    var tanchuang = document.createElement('div');//GO-����
          tanchuang.setAttribute('id','tcAlert');
          tanchuang.style = "display: none;"
          tanchuang.innerHTML ="���Ƴɹ�"
     // document.querySelector('body').appendChild(tanchuang);
          tcdemo.appendChild(tanchuang);

document.getElementById("ffz_searchButton").addEventListener("click", function fn() {//һ�I
    var tcdemo= document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName('page-content')[0];
    var tanchuang = document.createElement('div');//GO-����
          tanchuang.setAttribute('id','tcAlert');
          //tanchuang.style = "inline-block;"
          tanchuang.innerHTML ="���Ƴɹ�"
     // document.querySelector('body').appendChild(tanchuang);
          tcdemo.appendChild(tanchuang);
/*
    var text00= document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("tcAlert");//һ�I�}�u
   // var text00= document.getElementById("tcAlert");
           console.log(text00);
        text00.style = "position: relative;"
                       + "float: left;"
                       + "display: inline-block;"
                       + "top: 50px;"
                       + "left: 700px;"
                       //+ "top: auto;"
                       //+ "left: auto;"
                       + "height:50px;"
                       + "line-height: 50px;"
                       + "width:90px;"
                       //+ "height:auto;"
                       //+ "width:auto;"
                       + "text-align:center;"
                       + "font-size;50px;"
                       + "color:red;"
                       + "border:1px solid red;";
         setTimeout(function () {
             text00.style = "display: none;"
          //  document.body.removeChild(text00);
        }, 800);
  },false)*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      var cxvalue = document.createElement('script');//GO-��ԃ
          cxvalue.setAttribute('type','text/javascript');
          cxvalue.innerHTML =
        'function loadDoc(){\
             var xhr;\
            if(window.XMLHttpRequest){\
                xhr=new XMLHttpRequest();\
            }else{\
                xhr=new ActiveXObject("Microsoft.XMLHTTP");\
                 };\
          xhr.onreadystatechange=function(){\
            if(xhr.readyState==4 && xhr.status==200){\
              console.log(xhr.responseText);\
                 }\
           };\
         xhr.open("GET","https://goms.giikin.com/admin/login/index.html",true);\
         xhr.send();\
           }\;'
       document.querySelector('body').appendChild(cxvalue);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   (function() {
        var stNode2 = document.createElement('script');
            stNode2 .src ="https://goms.giikin.com/static/admin/js/tabs.js"
            document.querySelector('body').appendChild(stNode2);
    })();

    document.getElementById("waybill_searchButton").addEventListener("click", function fn() {//���-�˵��Ų�ԃ
         //var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody");
           //  for(var i = wxcxTable.length - 1; i >= 0; i--) {
           //  wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
           //  };//������
          var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);
                var thNode101 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> ������  </th>"
                                          + "<th> ����״̬ </th>"
                                          + "<th> �������� </th>"
                                          + "<th> ��Դƽ̨ </th>"
                                          + "<th> ��Ʒ���� </th>"
                                          + "<th> �Ƿ���θ��� </th>"
                                          + "<th> �Ƿ��¡ </th>"
                                        //  + "<th> ���</th>"
                                       //   + "<th> ���� </th>"
                                          + "<th> ����</th>"
                                         // + "<th> ���ӵ�ַ</th>"
                                          + "<th> �µ�ʱ��</th>"
                                          + "<th> ����</th>"
                                          + "<th> �绰</th>"
                                        //  + "<th> ������ </th>"
                                       //   + "<th> ����</th>"
    + "<th> ����״̬</th>"
 //   + "<th> ��ַ</th>"
   + "<th> IP </th>"
 //   + "<th> վ��ID</th>"
    + "<th> ����</th>"
     + '<th id="delateVal">��ѯ���<font color="#FF5722">���h����0 ����</font></th>'
                                   + "</tr>";
                    thNode101.append(thNode202);
             var xhr;
             var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[2];
             var wxcx_value=wxcx.value;
             var cx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("btn green")[0];

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
        var count = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
           show_nav();
           layer.msg("��ȫ����ԃ����", {icon: 6},{time: 500});
           dcountSum();//����
            // cx.click();
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("waybill_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
              console.log(xhr.responseText);
                      var xhrVal = xhr.responseText;
                try{
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
               var item = splitVal2.indexOf("��ɾ��");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                      count++;
                     }else{
                     splitVal2 = ">" +splitVal2;
                      count = "";
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                var splitVal20 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
//var thNode1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                //var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
                var thNode331 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
                var thNode2 = document.createElement('tr');
                    thNode2.innerHTML =
                                        "<td>" + xhrVal.split("<td>")[1].split("</td>")[0] + "</td>"
                + "<td" + splitVal2 + "</td>"
                + "<td>" + xhrVal.split("<td>")[3].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[4].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[5].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[6].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[7].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[8].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[9].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[10].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[11].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[12].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[13].split("</td>")[0] + "</td>"
            //    + "<td>" + xhrVal.split("<td>")[14].split("</td>")[0] + "</td>"
              //  + "<td>" + xhrVal.split("<td>")[15].split("</td>")[0] + "</td>"
               // + "<td>" + xhrVal.split("<td>")[16].split("</td>")[0] + "</td>"
              //  + "<td>" + xhrVal.split("<td>")[17].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[18].split("</td>")[0] + "</td>"
              //  + "<td>" + xhrVal.split("<td>")[19].split("</td>")[0] + "</td>"
              //  + "<td>" + xhrVal.split("<td>")[20].split("</td>")[0] + "</td>"
                 + "<td>" + xhrVal.split("<td>")[10].split("</td>")[0] + "</td>"
                + "<td>" + splitVal12 + "</td>"
                + "<td>" + xhrVal.split("<td>")[13].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[14].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[17].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[19].split("</td>")[0] + "</td>"
                  + "<td>" + xhrVal.split("<td>")[21].split("</td>")[0] + "</td>"
                 + '<td>'+ count +'</td>';
                  //  thNode1.append(thNode2);
                    thNode111.append(thNode2);
                getImg();//?��
                 }//try����
                catch(err) {
                          getImg();
                      }
                }
              };
      };//
  },false);
     function dcountSum() {
            var countVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("delateVal");
            var sum = {},all = 0;
            var isNumber=/\d+(\.\d+)?/;
            var countVal = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             //   console.log(countVal.rows.item(2).cells[8].innerHTML);
           for (var i = 1, ii = countVal.rows.length; i < ii; i++) {
                 if (isNumber.test(countVal.rows[i].cells[8].innerHTML)) {
                      sum[i] = (sum[i] || 0) + parseFloat(countVal.rows[i].cells[8].innerHTML);
                         //   console.log(sum[i]);
               }
          };
           for (var attr in sum) {
                all += sum[attr];

            }console.log(all);
        // countVal0.innerHTML= '��ѯ���<font color="#FF5722">���h����'+ all +'����</font>';
       var countSum = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
           countVal0.innerHTML= '��ѯ���<font color="#FF5722">���ܼƣ�'+ countSum.children.length +' ����</font>';
       var showSum = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("portlet-body")[0];
                    console.log(showSum );
       var showNode = document.createElement('div');
           showNode.innerHTML ='<br><div class="row">'
                               +'<div class="col-md-12 col-sm-12"><div class="dataTables_info" id="DataTable_info" role="status" aria-live="polite">��ʾ�� 1 �� '
                               + countSum.children.length
                               +' �������� '+ countSum.children.length + ' ��</div></div></div><br>';
           countSum.append(showNode);
      };
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("w_searchButton").addEventListener("click", function fn() {//���-�نβ�ԃ
         //var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody");
           //  for(var i = wxcxTable.length - 1; i >= 0; i--) {
           //  wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
           //  };//������
          var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);
                var thNode101 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> ������  </th>"
                                          + "<th> ����״̬ </th>"
                                          + "<th> �������� </th>"
                                          + "<th> ��Դƽ̨ </th>"
                                          + "<th> ��Ʒ���� </th>"
                                          + "<th> �Ƿ���θ��� </th>"
                                          + "<th> �Ƿ��¡ </th>"
                                        //  + "<th> ���</th>"
                                       //   + "<th> ���� </th>"
                                        //  + "<th> ����</th>"
                                         // + "<th> ���ӵ�ַ</th>"
                                         // + "<th> �µ�ʱ��</th>"
                                        //  + "<th> ����</th>"
                                        //  + "<th> �绰</th>"
                                        //  + "<th> ������ </th>"
                                       //   + "<th> ����</th>"
  //  + "<th> ����״̬</th>"
 //   + "<th> ��ַ</th>"
 //   + "<th> IP </th>"
 //   + "<th> վ��ID</th>"
    + "<th> ����</th>"
     + '<th id="delateVal">��ѯ���<font color="#FF5722">���h����0 ����</font></th>'
                                   + "</tr>";
                    thNode101.append(thNode202);
             var xhr;
             var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value=wxcx.value;
             var cx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("btn green")[0];

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
        var count = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
           show_nav();
           layer.msg("��ȫ����ԃ����", {icon: 6},{time: 500});
            countSum();
            // cx.click();
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
              console.log(xhr.responseText);
                try{
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
               var item = splitVal2.indexOf("��ɾ��");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                      count++;
                     }else{
                     splitVal2 = ">" +splitVal2;
                      count = "";
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                var splitVal20 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
//var thNode1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                //var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
                var thNode331 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
                var thNode2 = document.createElement('tr');
                    thNode2.innerHTML =
                                        "<td>" + xhrVal.split("<td>")[1].split("</td>")[0] + "</td>"
                + "<td" + splitVal2 + "</td>"
                + "<td>" + xhrVal.split("<td>")[3].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[4].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[5].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[6].split("</td>")[0] + "</td>"
                + "<td>" + xhrVal.split("<td>")[7].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[8].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[9].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[10].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[11].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[12].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[13].split("</td>")[0] + "</td>"
            //    + "<td>" + xhrVal.split("<td>")[14].split("</td>")[0] + "</td>"
              //  + "<td>" + xhrVal.split("<td>")[15].split("</td>")[0] + "</td>"
               // + "<td>" + xhrVal.split("<td>")[16].split("</td>")[0] + "</td>"
              //  + "<td>" + xhrVal.split("<td>")[17].split("</td>")[0] + "</td>"
             //   + "<td>" + xhrVal.split("<td>")[18].split("</td>")[0] + "</td>"
              //  + "<td>" + xhrVal.split("<td>")[19].split("</td>")[0] + "</td>"
              //  + "<td>" + xhrVal.split("<td>")[20].split("</td>")[0] + "</td>"
                  + "<td>" + xhrVal.split("<td>")[21].split("</td>")[0] + "</td>"
                 + '<td>'+ count +'</td>';
                  //  thNode1.append(thNode2);
                    thNode111.append(thNode2);
                    getImg();
               }//try����
                catch(err){
                          getImg();
                      }
              };
      };//
   }
},false);
     function countSum() {
            var countVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("delateVal");
            var sum = {},all = 0;
            var isNumber=/\d+(\.\d+)?/;
            var countVal = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             //   console.log(countVal.rows.item(2).cells[8].innerHTML);
           for (var i = 1, ii = countVal.rows.length; i < ii; i++) {
                 if (isNumber.test(countVal.rows[i].cells[8].innerHTML)) {
                      sum[i] = (sum[i] || 0) + parseFloat(countVal.rows[i].cells[8].innerHTML);
                         //   console.log(sum[i]);
               }
          };
           for (var attr in sum) {
                all += sum[attr];

            }console.log(all);
       var countSum = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
           countVal0.innerHTML= '��ѯ���<font color="#FF5722">���ܼƣ�'+ countSum.children.length +' ���� �h����'+ all +' ����</font>';
       var showSum = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("portlet-body")[0];
                    console.log(showSum );
       var showNode = document.createElement('div');
           showNode.innerHTML ='<br><div class="row">'
                               +'<div class="col-md-12 col-sm-12"><div class="dataTables_info" id="DataTable_info" role="status" aria-live="polite">��ʾ�� 1 �� '
                               + countSum.children.length
                               +' �������� '+ countSum.children.length + ' ��</div></div></div><br>';
           countSum.append(showNode);
      };
    /*
    <div class="row"><div class="col-md-5 col-sm-5"><div class="dataTables_info" id="DataTable_info" role="status" aria-live="polite">��ʾ�� 0 �� 0 �������� 0 ��</div></div></div>

        var countVal = document.getElementById("tab_iframe_�ɹ��쳣").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
            console.log(countVal.rows.item(2).cells[2].innerHTML);

            console.log(countVal.rows.length);
       for (var i = 1, ii = countVal.rows.length; i < ii; i++) {
             console.log(countVal.rows[i].cells[1].innerHTML);
          };

     function checkSum(a) {//-----------------------------------
          var countVal = document.getElementById("tab_iframe_�ɹ��쳣").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
              console.log(countVal.rows.item(2).cells[2].innerHTML);
              console.log(countVal.rows.length);
          var dd=0;
         for (var i = 1, ii = countVal.rows.length; i < ii; i++) {
                          // console.log(countVal.rows[i].cells[a].innerHTML);
                      var countValNode= countVal.rows[i].cells[a].innerHTML;
               if(countValNode == "��С��"){
                            console.log(countValNode);
                           dd++;
                };
          };console.log(dd);
     }
    */
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("cd_searchButton").addEventListener("click", function fn() {//��ϸ������ԃ
      /*  var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody");
             for(var i = wxcxTable.length - 1; i >= 0; i--) {
                     wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
               };//������  */
          var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);

                var thNode101 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> ������  </th>"
                                          + "<th> ����״̬ </th>"
                                          + "<th> �������� </th>"
                                          + "<th> ��Դƽ̨ </th>"
                                          + "<th> ��Ʒ���� </th>"
                                          + "<th> �Ƿ���θ��� </th>"
                                          + "<th> �Ƿ��¡ </th>"
                                          + "<th> ���  </th>"
    + "<th> ���� </th>"
    + "<th> ��� </th>"
    + "<th> ֧����ʽ </th>"
                                          + "<th> ���� </th>"
                                          + "<th> ���ӵ�ַ  </th>"
                                          + "<th> ���� </th>"
                                          + "<th> �绰 </th>"
                                          + "<th> �µ�ʱ��  </th>"
                                          + "<th> ����״̬ </th>"
                                          + "<th> ��ַ  </th>"
    + "<th> ���ͷ�ʽ </th>"
    + "<th> ����]�� </th>"
    + "<th> �͑����� </th>"
    + "<th> ����   </th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
          var xhr;
          var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
           // countSumm();
           layer.msg("��ȫ����ԃ����", {icon: 6},{time: 500});
            // cx.click();
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
                console.log(xhr.responseText);
                 try{
                      var xhrVal = xhr.responseText;
                /*      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                          console.log(splitVal1);
               var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                   console.log(splitVal2);
               var item = splitVal2.indexOf("��ɾ��");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" + splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                         console.log(splitVal18);
                var splitVal21 = xhrVal.split("<td>")[21].split("</td>")[0];//��ַ
                         console.log(splitVal21);*/
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getValue(splitVal0,xhrVal);//��ԃ�Wַ
                            getImg();//?��
                 }
                 catch(err){
                          getImg();
                      }
            };
      };
          function getValue(splitVal0,xhrVal){//��ԃ�Wַ
             var djTime = new Date().toLocaleString() + ' ����'+'��һ����������'.charAt(new Date().getDay());
             var xhrVal0;
             var xhrVal_ur = "https://goms.giikin.com/admin/order/" + splitVal0;
                           //info/id/9424638/query/1/param/0.html
            if(window.XMLHttpRequest){
                xhrVal0=new XMLHttpRequest();
            }else{
                xhrVal0=new ActiveXObject("Microsoft.XMLHTTP");
                 };
            xhrVal0.onreadystatechange=function(){
            if(xhrVal0.readyState==4 && xhrVal0.status==200){
                var hehe=xhrVal0.responseText;
             console.log(xhrVal0.responseText);

                var split0="";
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//�������2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//�������7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//֧����ʽ21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//���ͷ�ʽ18
                var split40=hehe.split("</td>")[37].split('class="td-text">')[1];
                var split400=hehe.split("</td>")[45].split('class="td-text">')[1];//�͑�����
                if( split4.indexOf("������") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//վ�cID24
                var split6=hehe.split("��Ʒ���")[1].split("<td>")[4].split("</td>")[0];//վ�cID24
                    console.log(split6);
                //var split77=hehe.split("</td>")[32].split('class="td-text">')[1];//���
                 var dd = document.getElementById("djr").value;//�Ǽ���

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������ 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                          console.log(splitVal2);
                      var item = splitVal2.indexOf("��ɾ��");
                          if(item == 1){
                            splitVal2 = '  style="color: red;">' + splitVal2 ;
                          }else{
                            splitVal2 = ">" + splitVal2;
                         };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal7 = xhrVal.split("<td>")[7].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal7);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVa20 = xhrVal.split("<td>")[10].split("</td>")[0];//����
                          console.log(splitVa20);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                          console.log(splitVal18);
                var splitVal21 = xhrVal.split("<td>")[21].split("</td>")[0];//��ַ
                         console.log(splitVal21);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode331 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                //var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
                console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                          "<td>" + splitVal1 + "</td>"//������
                                          + "<td" + splitVal2 + "</td>"//����״̬
                                          + "<td>" + splitVal3 + "</td>"//��������
                                          + "<td>" + splitVal4 + " </td>"//��Դƽ̨
                                          + "<td>" + splitVal5 + "</td>" //��Ʒ����
                                          + "<td>" + splitVal6 + " </td>"//�Ƿ���θ���
                                          + "<td>" + splitVal7 + " </td>"//�Ƿ��¡
                                          + "<td>" + splitVal8 + " </td>"//���
                + "<td>" + splitVal9 + " </td>"
                + '<td style="color: red;">' + split2 + '</td>'
                + "<td>" + splitVa20 + " </td>"//����
                + '<td style="color: red;">' + split3 + '</td>'
                + "<td>" + xhrVal.split("<td>")[11].split("</td>")[0] + "</td>" //���ӵ�ַ
                + "<td>" + splitVal13 + "</td>" //����
                + "<td>" + splitVal14 + "</td>"//�绰
                + "<td>" + splitVal12 + "</td>"//�µ�ʱ��
                + "<td>" + splitVal17 + "</td>" //����״̬
                + "<td>" + splitVal18 + "</td>" //��ַ
                + "<td>" + split4 + "</td>" //��ַ
                + "<td>" + split40 + "</td>"
                + "<td>" + split400 + "</td>"
                + "<td>" + splitVal21 + "</td>"
                thNode111.appendChild(thNode222);
              //  var thNodeVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              //      thNodeVal0.setAttribute("style","display:none");
               // var thNodeVal1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
               //     thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
   }
 },false);
         function countSumm() {
            var countVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("delateVal");
            var sum = {},all = 0;
            var isNumber=/\d+(\.\d+)?/;
            var countVal = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             //   console.log(countVal.rows.item(2).cells[8].innerHTML);
           for (var i = 1, ii = countVal.rows.length; i < ii; i++) {
                 if (isNumber.test(countVal.rows[i].cells[8].innerHTML)) {
                      sum[i] = (sum[i] || 0) + parseFloat(countVal.rows[i].cells[8].innerHTML);
                         //   console.log(sum[i]);
               }
          };
           for (var attr in sum) {
                all += sum[attr];

            }console.log(all);
       var countSum = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
       //    countVal0.innerHTML= '��ѯ���<font color="#FF5722">���ܼƣ�'+ countSum.children.length +' ���� �h����'+ all +' ����</font>';
       var showSum = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("portlet-body")[0];
                    console.log(showSum );
       var showNode = document.createElement('div');
           showNode.innerHTML ='<br><div class="row">'
                               +'<div class="col-md-12 col-sm-12"><div class="dataTables_info" id="DataTable_info" role="status" aria-live="polite">��ʾ�� 1 �� '
                               + countSum.children.length
                               +' �������� '+ countSum.children.length + ' ��</div></div></div><br>';
           countSum.append(showNode);
      };
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    document.getElementById("wxz_searchButton").addEventListener("click", function fn() {//�ͷ�-������ԃ-�a�l
             var xhr;
             var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value=wxcx.value;
      var item = wxcx_value.indexOf(",")
    if(item == -1){
      if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest();
            }else{
                xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
          xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
              console.log(xhr.responseText);
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getVal(splitVal0,xhrVal);//��ԃ�Wַ
                 }
           };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + wxcx_value);
      }else{
                var thNode1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode2 = document.createElement('thead');
                    thNode2.innerHTML =
                                       "<tr>"
                                          + "<th> ������Ʒ </th>"
                                          + "<th> ���� </th>"
                                          + "<th> �绰 </th>"
                                          + "<th> ����Ҏ�� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> ��ַ </th>"
                                          + "<th> ӆ�΂��]</th>"
                                          + "<th> ���� </th>"
                                          + "<th> ���� </th>"
                                          + "<th> ��ƷID </th>"
                                          + "<th> �Ǽ��� </th>"
                                          + "<th> ������ע </th>"
                                          + "<th> ʱ��� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> վ�cID </th>"
                                   + "</tr>";
                    thNode1.append(thNode2);
    var thNode331 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
    var thNode333 = document.createElement('tbody');
        thNode333.setAttribute('id','thvalue');
        thNode331.appendChild(thNode333);

        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
                console.log(xhr.responseText);
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getVal(splitVal0,xhrVal);//��ԃ�Wַ
                getImg();//?��
                 }
              };
      };//
    }
  },false);

     function getVal(splitVal0,xhrVal){//��ԃ�Wַ
             var djTime = new Date().toLocaleString() + ' ����'+'��һ����������'.charAt(new Date().getDay());
             var xhrVal0;
             var xhrVal_ur = "https://goms.giikin.com/admin/order/" + splitVal0;
                           //info/id/9424638/query/1/param/0.html
            if(window.XMLHttpRequest){
                xhrVal0=new XMLHttpRequest();
            }else{
                xhrVal0=new ActiveXObject("Microsoft.XMLHTTP");
                 };
            xhrVal0.onreadystatechange=function(){
            if(xhrVal0.readyState==4 && xhrVal0.status==200){
                var hehe=xhrVal0.responseText;
             console.log(xhrVal0.responseText);

                var split0="";
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//�������2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//�������7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//֧����ʽ21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//���ͷ�ʽ18
                if( split4.indexOf("������") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//վ�cID24
                var split6=hehe.split("��Ʒ���")[1].split("<td>")[4].split("</td>")[0];//վ�cID24
                    console.log(split6);
                 var dd = document.getElementById("djr").value;//�Ǽ���

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������ 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                          console.log(splitVal18);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
                     console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                          "<td>" + splitVal5 + "</td>"//����
                                          + "<td>" + splitVal13 + "</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//���
                                          + "<td>(ԭӆ��̖��" + split1 + ")</td>" //��ע
                                          + "<td>" + splitVal18 + " </td>"//��ַ
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + split6 + "</td>" //��ƷID
                + "<td>" + dd + "</td>"//�Ǽ���
                + "<td>�a�lԭ��̖��" + split1 + "</td>" //������ע
                + "<td>" + djTime + "</td>"
                + "<td></td>" //��ע
                + "<td>" + split5 + "</td>" //վ�cID24
                thNode111.appendChild(thNode222);
                var thNodeVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
                    thNodeVal0.setAttribute("style","display:none");
                var thNodeVal1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
                    thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    document.getElementById("wxcx_searchButton").addEventListener("click", function fn() {//�ͷ�
      var djTime = new Date().toLocaleString() + ' ����'+'��һ����������'.charAt(new Date().getDay());
             var xhr;
             var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value=wxcx.value;
      var item = wxcx_value.indexOf(",")
      if(item=-1){
      if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest();
            }else{
                xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
          xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
              console.log(xhr.responseText);
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                          console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);

             var xhr0;
             var strHtml0 ="";
             var xhr_url0 = "https://goms.giikin.com/admin/order/" + splitVal0;
                           //info/id/9424638/query/1/param/0.html
            if(window.XMLHttpRequest){
                xhr0=new XMLHttpRequest();
            }else{
                xhr0=new ActiveXObject("Microsoft.XMLHTTP");
                 };
            xhr0.onreadystatechange=function(){
            if(xhr0.readyState==4 && xhr0.status==200){
                var split0="";
                var hehe=xhr0.responseText;
                    console.log(xhr0.responseText);
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//�������2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//�������7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//֧����ʽ21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//���ͷ�ʽ18
                if( split4.indexOf("������") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//վ�cID24
                var split6=hehe.split("��Ʒ���")[1].split("<td>")[4].split("</td>")[0];//վ�cID24
                    console.log(split6);
                 var dd = document.getElementById("djr").value;//�Ǽ���

                var thNode1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode2 = document.createElement('thead');
                    thNode2.innerHTML =
                                       "<tr>"
                                          + "<th> ������Ʒ </th>"
                                          + "<th> ���� </th>"
                                          + "<th> �绰 </th>"
                                          + "<th> ����Ҏ�� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> ��ַ </th>"
                                          + "<th> ӆ�΂��]</th>"
                                          + "<th> ���� </th>"
                                          + "<th> ���� </th>"
                                          + "<th> ��ƷID </th>"
                                          + "<th> �Ǽ��� </th>"
                                          + "<th> ������ע </th>"
                                          + "<th> ʱ��� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> վ�cID </th>"
                                   + "</tr>";
                    thNode1.append(thNode2);
                var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                    console.log(thNode111);
                var thNode222 = document.createElement('tbody');
                    thNode222.innerHTML =
                                  "<tr>"
                                          + "<td>" + splitVal5 + "</td>"//����
                                          + "<td>" + splitVal13 + "</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//���
                                          + "<td>(ԭӆ��̖��" + split1 + ")</td>" //��ע
                                          + "<td>" + splitVal18 + " </td>"//��ַ
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + split6 + "</td>" //��ƷID
                + "<td>" + dd + "</td>"//�Ǽ���
                + "<td>�a�lԭ��̖��" + split1 + "</td>" //������ע
                + "<td>" + djTime + "</td>"
                + "<td></td>" //��ע
                + "<td>" + split5 + "</td>" //վ�cID24
                thNode111.appendChild(thNode222);
                var thNodeVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
                    thNodeVal0.setAttribute("style","display:none");
                var thNodeVal1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
                    thNodeVal1.setAttribute("style","display:none");
                 }
           };
         xhr.open("GET",xhr_url0,true);
         xhr.send();
                 }
           };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + wxcx_value);
      }else{
        var item_arr = wxcx_value.split(",");
        var helper =function(){
           xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
              console.log(xhr.responseText);
                 }
              };
        };
          for (var i=0;i<item_arr.length;i++){
            if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest();
            }else{
                xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + item_arr[i]);
              helper();
          }
      }
  },false)
/*
var thNodeVal = document.getElementById("tab_iframe_��ӛ�˓Q؛��").contentDocument.getElementsByClassName("portlet-body")[0];
       thNodeVal.setAttribute("style","display:none");*/

//-------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("bf_searchButton").addEventListener("click", function() {//����
      /*  var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody");
             for(var i = wxcxTable.length - 1; i >= 0; i--) {
                     wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
               };//������  */
          var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);

                var thNode101 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> ������Ʒ </th>"
                                          + "<th> ���� </th>"
                                          + "<th> �绰 </th>"
                                          + "<th> ����Ҏ�� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> ��ַ </th>"
                                          + "<th> ӆ�΂��]</th>"
                                          + "<th> ���� </th>"
                                          + "<th> ���� </th>"
                                          + "<th> ��ƷID </th>"
                                          + "<th> �Ǽ��� </th>"
                                          + "<th> ������ע </th>"
                                          + "<th> ʱ��� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> վ�cID </th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
          var xhr;
          var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
            // cx.click();
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
                console.log(xhr.responseText);
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                          console.log(splitVal1);
               var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                   console.log(splitVal2);
               var item = splitVal2.indexOf("��ɾ��");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" + splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getValue(splitVal0,xhrVal);//��ԃ�Wַ
                            getImg();//?��
                 }
            };
         };
          function getValue(splitVal0,xhrVal){//��ԃ�Wַ
             var djTime = new Date().toLocaleString() + ' ����'+'��һ����������'.charAt(new Date().getDay());
             var xhrVal0;
             var xhrVal_ur = "https://goms.giikin.com/admin/order/" + splitVal0;
                           //info/id/9424638/query/1/param/0.html
            if(window.XMLHttpRequest){
                xhrVal0=new XMLHttpRequest();
            }else{
                xhrVal0=new ActiveXObject("Microsoft.XMLHTTP");
                 };
            xhrVal0.onreadystatechange=function(){
            if(xhrVal0.readyState==4 && xhrVal0.status==200){
                var hehe=xhrVal0.responseText;
             console.log(xhrVal0.responseText);

                var split0="";
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//�������2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//�������7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//֧����ʽ21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//���ͷ�ʽ18
                if( split4.indexOf("������") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//վ�cID24
                var split6=hehe.split("��Ʒ���")[1].split("<td>")[4].split("</td>")[0];//վ�cID24
                    console.log(split6);
                 var dd = document.getElementById("djr").value;//�Ǽ���

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������ 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                          console.log(splitVal18);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode331 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                //var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
                console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                          "<td>" + splitVal5 + "</td>"//����
                                          + "<td>" + splitVal13 + "</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//���
                                          + "<td>s�ٰl(ԭӆ��̖��" + split1 + ")</td>" //��ע
                                          + "<td>" + splitVal18 + " </td>"//��ַ
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + split6 + "</td>" //��ƷID
                + "<td>" + dd + "</td>"//�Ǽ���
                + "<td>�a�lԭ��̖��" + split1 + "</td>" //������ע
                + "<td>" + djTime + "</td>"
                + "<td></td>" //��ע
                + "<td>" + split5 + "</td>" //վ�cID24
                thNode111.appendChild(thNode222);
              //  var thNodeVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              //      thNodeVal0.setAttribute("style","display:none");
               // var thNodeVal1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
               //     thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
 },false);
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("hh_searchButton").addEventListener("click", function() {//����
           var hh_val = document.getElementById("hhvalue").value;//�Q؛ԭ��
      /*  var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody");
             for(var i = wxcxTable.length - 1; i >= 0; i--) {
                     wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
               };//������  */
          var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);

                var thNode101 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> ����Ʒ�� </th>"
                                          + "<th> ���� </th>"
                                          + "<th> �绰 </th>"
                                          + "<th> ��� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> ��ַ </th>"
                                          + "<th> �ջػ�����˵���</th>"
                                          + "<th> ԭ��Ʒ </th>"
                                          + "<th> ԭ��� </th>"
                                          + "<th> ԭ�� </th>"
                                          + "<th> ��עԭ�� </th>"
                                          + "<th> ���� </th>"
                                          + "<th> ���� </th>"
                                          + "<th> ��ƷID </th>"
                                          + "<th> �������� </th>"
                                          + "<th> �Ǽ��� </th>"
                                          + "<th> ������Դ </th>"
                                          + "<th> ������ע </th>"
                                          + "<th> ʱ��� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> վ�cID </th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
          var xhr;
          var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
            // cx.click();
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
                console.log(xhr.responseText);
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                          console.log(splitVal1);
               var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                   console.log(splitVal2);
               var item = splitVal2.indexOf("��ɾ��");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" + splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getValue(splitVal0,xhrVal);//��ԃ�Wַ
                            getImg();//?��
                 }
            };
         };
          function getValue(splitVal0,xhrVal){//��ԃ�Wַ
             var djTime = new Date().toLocaleString() + ' ����'+'��һ����������'.charAt(new Date().getDay());
             var xhrVal0;
             var xhrVal_ur = "https://goms.giikin.com/admin/order/" + splitVal0;
                           //info/id/9424638/query/1/param/0.html
            if(window.XMLHttpRequest){
                xhrVal0=new XMLHttpRequest();
            }else{
                xhrVal0=new ActiveXObject("Microsoft.XMLHTTP");
                 };
            xhrVal0.onreadystatechange=function(){
            if(xhrVal0.readyState==4 && xhrVal0.status==200){
                var hehe=xhrVal0.responseText;
             console.log(xhrVal0.responseText);

                var split0="";
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//�������2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//�������7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//֧����ʽ21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//���ͷ�ʽ18
                if( split4.indexOf("������") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//վ�cID24
                var split6=hehe.split("��Ʒ���")[1].split("<td>")[4].split("</td>")[0];//վ�cID24
                    console.log(split6);

                 var thhNode_val = document.getElementById("tigong").value;
                     if(thhNode_val == "�\�M0"){
                        thhNode_val ="";
                       }else if(thhNode_val == "�\�Mһ��"){
                        thhNode_val ="";
                       } else {
                        thhNode_val = thhNode_val;
                       };
                        console.log(thhNode_val);
                 var dd = document.getElementById("djr").value;//�Ǽ���

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������ 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                          console.log(splitVal18);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode331 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                //var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
                console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                            "<td>" + splitVal5 + "</td>"//����
                                          + "<td>" + splitVal13 + "1</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//���
                        + "<td>�͑�Ҫ��Q؛��������؛��ͬ�r����Ҫ��ԭ؛�ջأ�����Ҫ�ջص�ԭ؛�\��̖"
                        + splitVal3+"��(ԭӆ�ξ�̖�� " + splitVal1 + ")</td>" //��ע
                                          + "<td>" + splitVal18 + " </td>"//��ַ
                + "<td>" + splitVal3 + "</td>"
                + "<td>" + splitVal5 + "</td>"//����
                + "<td>" + splitVal8 + " </td>"//���
                + "<td>" + hh_val + "</td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + splitVal9 + "</td>"
                + "<td>" + split6 + "</td>" //��ƷID
                + "<td>" + split4 + "</td>"
                + "<td>" + dd + "</td>"//�Ǽ���
                + "<td>" + splitVal4 + "</td>"
                + "<td>�Q؛ԭ��̖��" + split1 + "��ؼ�</td>"//�Q؛��ע
                + "<td>" + djTime + "</td>"
                + "<td>" + thhNode_val + "</td>"
                + "<td>" + split5 + "</td>" //վ�cID24
                thNode111.appendChild(thNode222);
              //  var thNodeVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              //      thNodeVal0.setAttribute("style","display:none");
               // var thNodeVal1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
               //     thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
 },false);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    document.getElementById("th_searchButton").addEventListener("click", function() {//�˻�
          var th_val = document.getElementById("thvalue").value;//�˻�ԭ��
      /*  var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody");
             for(var i = wxcxTable.length - 1; i >= 0; i--) {
                     wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
               };//������  */
          var wxcxTable = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);

                var thNode101 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                  "<tr>"
                                          + "<th> �ʹ� </th>"
                                          + "<th> ԭ������ </th>"
                                          + "<th> ���������� </th>"
                                          + "<th> �ջ��� </th>"
                                          + "<th> ��ϵ�绰 </th>"
                                          + "<th> Ҏ�� </th>"
                                          + "<th> �������</th>"
                                          + "<th> ��ַ </th>"
                                          + "<th> ���� </th>"
                                          + "<th> �˵��� </th>"
                                          + "<th> ԭ�� </th>"
                                          + "<th> ��עԭ�� </th>"
                                          + "<th> ���� </th>"
                                          + "<th> �����˺� </th>"
                                          + "<th> �y��/���� </th>"
                                          + "<th> �˿��� </th>"
                                          + "<th> �µ�ʱ�� </th>"
                                          + "<th> �������� </th>"
                                          + "<th> �Ǽ��� </th>"
                                          + "<th> ������Դ </th>"
                                          + "<th> ֧����ʽ </th>"
                                          + "<th> ʱ��� </th>"
                                          + "<th> ��ע </th>"
                                          + "<th> վ��ID </th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
          var xhr;
          var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,����;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
            // cx.click();
		  return;
        };
       var currentData = item_arr[currentIndex];console.log(currentIndex);
       if(window.XMLHttpRequest){
               xhr=new XMLHttpRequest();
            }else{
               xhr=new ActiveXObject("Microsoft.XMLHTTP");
                 };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + currentData);
         xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                currentIndex++;
                console.log(xhr.responseText);
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������
                          console.log(splitVal1);
               var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                   console.log(splitVal2);
               var item = splitVal2.indexOf("��ɾ��");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" + splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getValue(splitVal0,xhrVal);//��ԃ�Wַ
                            getImg();//?��
                 }
            };
         };
          function getValue(splitVal0,xhrVal){//��ԃ�Wַ
             var djTime = new Date().toLocaleString() + ' ����'+'��һ����������'.charAt(new Date().getDay());
             var xhrVal0;
             var xhrVal_ur = "https://goms.giikin.com/admin/order/" + splitVal0;
                           //info/id/9424638/query/1/param/0.html
            if(window.XMLHttpRequest){
                xhrVal0=new XMLHttpRequest();
            }else{
                xhrVal0=new ActiveXObject("Microsoft.XMLHTTP");
                 };
            xhrVal0.onreadystatechange=function(){
            if(xhrVal0.readyState==4 && xhrVal0.status==200){
                var hehe=xhrVal0.responseText;
             console.log(xhrVal0.responseText);

                var split0="";
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//�������2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//�������7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//֧����ʽ21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//���ͷ�ʽ18
                if( split4.indexOf("������") != -1){
                   split0="";
                   }else if( split4.indexOf("����") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//վ�cID24
                var split6=hehe.split("��Ʒ���")[1].split("<td>")[4].split("</td>")[0];//վ�cID24
                    console.log(split6);
                 var thhNode_val = document.getElementById("tigong").value;
                 var splitBeizhu;
                    splitBeizhu = Number(split2) - Number(thhNode_val.split("�\�M")[1]);
                if(thhNode_val == "�\�M0"){
                   thhNode_val ="";
                  }else if(thhNode_val == "�\�Mһ��"){
                   thhNode_val ="��һ�벻ȡ��";
                   splitBeizhu = Number(split2) - Number(split2)/2;
                  } else {
                   thhNode_val = thhNode_val;

                  };
                   console.log(thhNode_val);

                 var dd = document.getElementById("djr").value;//�Ǽ���

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//������ 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//����״̬
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//��������
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//��Դƽ̨
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//��Ʒ����
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//�Ƿ���θ���
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//���
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//����
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//�µ�ʱ��
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//����
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//�绰
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//����״̬
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//��ַ
                          console.log(splitVal18);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode331 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                //var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  var thNode111 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("thvalue");
                console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                            "<td> </td>"
                                          + "<td>" + splitVal1 + "</td>"
                                          + "<td>" + splitVal5 + "</td>"//����
                                          + "<td>" + splitVal13 + "</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//���
                                          + "<td>" + split2 + "</td>"
                                          + "<td>" + splitVal18 + " </td>"//��ַ
                + "<td>" + splitVal9 + "</td>"
                + "<td>" + splitVal3 + "</td>"//�\��̖
                + "<td>" + th_val + "</td>"
                + "<td>  </td>"
                + '<td style="color: red;">'+ splitVal13 + "</td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + splitBeizhu + "</td>" //�˿���7-16
                + "<td>" + splitVal12 + "</td>"//�r�g
                + "<td>" + split4 + "</td>"
                + "<td>" + dd + "</td>"//�Ǽ���
                + "<td>" + splitVal4 + "</td>"
                + "<td>" + split3 + "</td>"//��Դ
                + "<td>" + djTime + "</td>"
                + "<td>" + thhNode_val + "</td>"//���]
                + "<td>" + split5 + "</td>" //վ�cID24
                thNode111.appendChild(thNode222);
              //  var thNodeVal0 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("thead")[0];
              //      thNodeVal0.setAttribute("style","display:none");
               // var thNodeVal1 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("tbody")[0];
               //     thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
 },false);
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("save_searchButton").addEventListener("click", function() {//����
                 var tc = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                         console.log(tc);
                     tc.setAttribute('id','tc-info');
                 var exportFileContent = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementById("tc-info").outerHTML;
                 var downloadA = document.createElement('a');
                 var blob = new Blob([exportFileContent], {type: "text/plain;charset=utf-8"});

                    downloadA.href = window.URL.createObjectURL(blob);
                    downloadA.download = '��������.xlsx';
                    downloadA.click(); // ���ң����ң������

   /*       var wxcx = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;
              console.log(wxcx_value);

    var $ = unsafeWindow.jQuery;
        $.ajax({
               type: "POST",//��������
               dataType: "json",//Ԥ�ڷ��������ص���������-
               url: "https://goms.giikin.com/admin/order/orderquery.html" ,//url
               data: "order_number=NR002192031108045",
               success:function (data) {
                   console.log(11);
                      console.log(data);
               }
            });
*/

      //       var action = $(this).attr('data-action');
      //      table.button(action).trigger();


     /*     var tc = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover");
                console.log(tc[0]);
              tc[0].setAttribute('id','tc-info');
               method1("tc-info");

       function method1(tableid) {//��һ�ַ���
            var curTbl = document.getElementById(tableid);
            var oXL = new ActiveXObject("Excel.Application");
            var oWB = oXL.Workbooks.Add();
            var oSheet = oWB.ActiveSheet;
            var sel = document.body.createTextRange();
            sel.moveToElementText(curTbl);
            sel.select();
            sel.execCommand("Copy");
            oSheet.Paste();
            oXL.Visible = true;
        }
              */
 },false);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   // dem();
    function dem(){
    var tc = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover");
                console.log(tc[0]);
              tc[0].setAttribute('id','tc-info');
    };
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  /*   function myTimer() {//------------------------------���ü���
          var dd = document.getElementsByClassName("nav nav-tabs")[0].children[1];
                   console.log(dd);
          var dd1 = dd.getAttribute("iframe");
         if ( dd1 == "tab_iframe_��Ϣ��"){
                   console.log(2222);
                //   alert(333);
                clearInterval(myVar);
                     fn();
          }
      };
     function myStopFunction() {
           clearInterval(myVar);
      };
     var myVar = setInterval(function(){//��ʱ��-----��Ϣ�����
           myTimer();
      }, 1000);

-------------------------------------------------------------------------

      var html = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
console.log(html);
var nn = "<html><head><meta charset='utf-8' /></head><body>" + html + "</body></html>";
console.log(nn);

var downloadA = document.createElement('a');
var blob = new Blob([nn], { type: "application/vnd.ms-excel" });

downloadA.href = window.URL.createObjectURL(blob);
downloadA.download = '��������ļ���.xlsx';
downloadA.click(); // ���ң����ң������
      */
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
<div class="actions">
        <a href="javascript:void(0)" data-action="0" id="search" class="btn yellow-gold"><i class="fa fa-search"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��ʼɸѡ</font></font></a>
        <a class="btn purple" href="javascript:;" onclick="add()"> <i class="icon-plus"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ��Ӳɹ��쳣</font></font></a>
        <a href="javascript:void(0)" class="tool-action btn yellow"> <i class="icon-share-alt"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">����</font></font></a>
                        <div class="btn-group" style="z-index:100;">
                            <button class="btn default showcol"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��ʾ/������</font></font></button>
                            <ul class="showul dropdown_row">
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">������</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��ϵ��ʽ</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��Ʒ���</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ʒ��</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">����</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="6"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">���</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="7"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�������</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="8"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�Ŷ�</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" data-column="9"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��ַ</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ʱ��</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">����״̬</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="12"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">������</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" data-column="13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�쳣����</font></font></label></li>
                            </ul>
                        </div>
                    </div>
*/

  function show_nav() {//��������
    var navNode = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("portlet-title")[0];

   // var navBarNode = document.createElement('div');
   //     navBarNode.setAttribute('class','tools');
    //    navNode.appendChild(navBarNode);

    var navSearchBarNode = document.createElement('div');
        navSearchBarNode.setAttribute('class','actions');
        navSearchBarNode.innerHTML =
                   '<div class="btn-group" style="z-index:100;">'
                            +'<button class="btn default showcol" onclick = "funN()">��ʾ/������</button>'
                            +'<ul class="showul dropdown_row" style="display: none;">'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">������</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��ϵ��ʽ</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��Ʒ���</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ʒ��</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">����</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="6"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">���</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="7"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�������</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="8"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�Ŷ�</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" data-column="9"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��ַ</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ʱ��</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">����״̬</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="12"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">������</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" data-column="13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�쳣����</font></font></label></li>'
                            +'</ul>'
                 +'</div>';
       navNode.appendChild(navSearchBarNode);
//---------------------------------------------------------------------------
    var navNode10 = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByTagName("body")[0];
    var navNode11 = document.createElement('script');//���djs
        navNode11 .innerHTML =
         'layui.use("layer");'
        +'$(function(){'
        +'$(document.body).on("change",".toggle-vis",function(e){'
                +'e.preventDefault();'
                +'var column = table.column($(this).attr("data-column"));'
                +'column.visible(!column.visible());'
           +' });'
            +'$(".showcol").click(function () {'
                +'$(".showul").toggle(1000);'
                +'return false;'
            +'});'
        +' });'
                 +'function funN(){'
                 +'alert(0);'
                   +'var show_tab = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.contentDocument.getElementsByTagName("body")[0];'
                       +'console.log(show_tab);'
                       +'};'
       navNode10.appendChild(navNode11);
//
    var stNode190 = document.createElement('script');//js���d
        stNode190.setAttribute('type','text/javascript');
        stNode190.setAttribute('src','https://goms.giikin.com/static/admin/js/admin.js');
        navNode10.appendChild(stNode190);
          var stNode1901 = document.createElement('script');
        stNode1901.setAttribute('type','text/javascript');
        stNode1901.setAttribute('src','https://goms.giikin.com/static/admin/js/datatable.js');
        navNode10.appendChild(stNode1901);
          var stNode1902 = document.createElement('script');
        stNode1902.setAttribute('type','text/javascript');
        stNode1902.setAttribute('src','https://goms.giikin.com/static/admin/js/jquery.validate.min.js');
        navNode10.appendChild(stNode1902);
          var stNode1903 = document.createElement('script');
        stNode1903.setAttribute('type','text/javascript');
        stNode1903.setAttribute('src','https://goms.giikin.com/static/admin/js/moment.min.js');
        navNode10.appendChild(stNode1903);
    var stNode1910 = document.createElement('script');//bootstrap-table���d
        stNode1910.setAttribute('type','text/javascript');
        stNode1910.setAttribute('src','https://goms.giikin.com/static/admin/bootstrap-table/bootstrap-table.min.js');
        navNode10.appendChild(stNode1910);
    var stNode1915 = document.createElement('script');//chosen���d
        stNode1915.setAttribute('type','text/javascript');
        stNode1915.setAttribute('src','https://goms.giikin.com/static/admin/chosen/chosen.jquery.js');
        navNode10.appendChild(stNode1915);
    var stNode1920 = document.createElement('script');//datatables���d
        stNode1920.setAttribute('type','text/javascript');
        stNode1920.setAttribute('src','https://goms.giikin.com/static/admin/datatables/datatables.min.js');
        navNode10.appendChild(stNode1920);
          var stNode1921 = document.createElement('script');
        stNode1921.setAttribute('type','text/javascript');
        stNode1921.setAttribute('src','https://goms.giikin.com/static/admin/datatables/daterangepicker.js');
        navNode10.appendChild(stNode1921);
         var stNode1922 = document.createElement('script');
        stNode1922.setAttribute('type','text/javascript');
        stNode1922.setAttribute('src','https://goms.giikin.com/static/admin/datatables/plugins/bootstrap/datatables.bootstrap.js');
        navNode10.appendChild(stNode1922);
  };
     document.getElementById("close_searchButton").addEventListener("click", function(){//�P�]
      var targNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];
      var show_tab = document.getElementById("header-close");
        //  targNode.removeChild(show_tab);
      var show_tab00 = document.getElementById("header-nav");
          targNode.removeChild(show_tab00);
       var djrNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];
       var show_tab0 = document.getElementById("djr");
       var show_tab1 = document.getElementById("tigong");
       var show_tab2 = document.getElementById("thvalue");
       var show_tab3 = document.getElementById("hhvalue");
           djrNode.removeChild(show_tab0);
           djrNode.removeChild(show_tab1);
           djrNode.removeChild(show_tab2);
           djrNode.removeChild(show_tab3);
      var tulNode = document.getElementsByClassName('page-sidebar-menu  page-header-fixed ')[0];
      var tulNodeb0 = document.getElementById("t_question_modal");
           tulNode.removeChild(tulNodeb0);
},false);
//------------------------------------------------------------------------
    var stNode119 = document.createElement('div');
        stNode119.style = "display: none;";
        stNode119 .innerHTML =
                  "layui.use(['layer', 'form'], function(){"
                       +"var layer = layui.layer"
                         +" ,form = layui.form;"
                      +"});"
       document.querySelector('body').appendChild(stNode119);
   // usered();
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("btn-group-nav").addEventListener("click", function(){//����
                 var show_tab = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("showul dropdown_row")[0];
                         console.log(show_tab);
                     show_tab.style="display: block;";

            },false);
    /*
 +'console.log(show_tab.style.display);'
                       +'show_tab.style="display: block;";'
    */
 document.getElementById("cd_searchButton0").addEventListener("click", function(){//����--
            var navNode = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("portlet-title")[0];

   // var navBarNode = document.createElement('div');
   //     navBarNode.setAttribute('class','tools');
    //    navNode.appendChild(navBarNode);

    var navSearchBarNode = document.createElement('div');
        navSearchBarNode.setAttribute('class','actions');
        navSearchBarNode.innerHTML =
                   '<div class="btn-group" style="z-index:100;">'
                            +'<button id = "btn-group-nav" class="btn default showcol">��ʾ/������</button>'
                            +'<ul class="showul dropdown_row" style="display: none;">'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">������</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��ϵ��ʽ</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��Ʒ���</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ʒ��</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">����</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="6"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">���</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="7"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�������</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="8"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�Ŷ�</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" data-column="9"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">��ַ</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ʱ��</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">����״̬</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="12"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">������</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" data-column="13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">�쳣����</font></font></label></li>'
                            +'</ul>'
                 +'</div>';
       navNode.appendChild(navSearchBarNode);


            //   var show_tab = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("showul dropdown_row")[0];
             //           console.log(show_tab);
             //      show_tab.style="display: block;";
     /*  function fun() {
          if ($("#btn-group-nav").css("display") == "none") {
              $("#btn-group-nav").css("display", "block");
           } else {
            $("#btn-group-nav").css("display", "none");
           }
     }
     //----------------------------------
               'layui.use("layer");'
      +'$(function(){'
        +'$(document.body).on("change",".toggle-vis",function(e){'
                +'e.preventDefault();'
                +'var column = table.column($(this).attr("data-column"));'
                +'column.visible(!column.visible());'
           +' });'
            +'$(".showcol").click(function () {'
                +'$(".showul").toggle(1000);'
                +'return false;'
            +'});'
   +' });'
*/
      },false);//--
document.getElementById("cd_searchButton9").addEventListener("click", function(){//11111111111--
    alert(0);
            var navNode = document.getElementById("tab_iframe_�ͷ���ѯ").contentDocument.getElementsByClassName("btn default showcol")[0];
                console.log(navNode);
       },false);//--
})();