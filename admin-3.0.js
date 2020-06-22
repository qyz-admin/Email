// ==UserScript==
// @name         admin-6.32-
// @namespace    http://tampermonkey.net/
// @version      6.32
// @description  港台审核-以待审核、待发货、客服查询、界面為主
// @author       You
// @match        http://13.229.176.203/admin/index/index.html
// @match        https://goms.giikin.com/admin/index/index.html
// @require      https://libs.baidu.com/jquery/1.9.0/jquery.js
// @require      https://cdn.staticfile.org/vue/2.2.2/vue.min.js
// @downloadURL  https://qyz-admin.github.io/Email/admin-3.0.js
// @updateURL    https://qyz-admin.github.io/Email/admin-3.0.js
// ==/UserScript==https://13.229.176.203/static/admin/js/tabs.js  // @grant        none Tampermonkey
(function() {
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // var a= 15511;
  //  func(a);
      var checkUser = document.getElementsByClassName("username username-hide-on-mobile")[0];
         console.log(checkUser.innerText);
       if ( checkUser.innerText == "qiyuanzhang@jikeyin.com"){
            console.log(2222);
              //   fn_nav();
            fun_nav();
          }else if ( checkUser.innerText == "jiangtiantian@jikeyin.com"){
            console.log(2222);
                fun_nav();
          }else if ( checkUser.innerText == "sunyaru@jikeyin.com"){
            console.log(2222);
                fun_nav();
          }else if ( checkUser.innerText == "yanghao@giikin.com"){
            console.log(2222);
                fun_nav();
          }else if ( checkUser.innerText == "liruolan@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else if ( checkUser.innerText == "yuanhuanxin@jikeyin.com"){
            console.log(2222);
                fun_nav();
          }else if ( checkUser.innerText == "yangjiayi@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else if ( checkUser.innerText == "xuwenjian@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else if ( checkUser.innerText == "qukaituo@jikeyin.com"){
            console.log(2222);
                fun_nav();
          }else if ( checkUser.innerText == "liyafang@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else if ( checkUser.innerText == "yangzhiyu@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else if ( checkUser.innerText == "caokeke@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else if ( checkUser.innerText == "wujingjing@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else if ( checkUser.innerText == "liujuan@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else if ( checkUser.innerText == "zhouhaodi@jikeyin.com"){
            console.log(2222);
                 fun_nav();
          }else{
            var navTable = document.getElementById("header-nav");
                       console.log(navTable);
               navTable.parentNode.removeChild(navTable);
          };
 /*
     <button v-on:click='fun()'>筛选</button> <!-- v-on:keyup.enter='fun()' -->
     <ul style ="list-style-type: none">
         <li v-for='item in arr' v-show ='fal'>     <!-- v-for='item in arr' 数组-->
               <input type="checkbox" name="che">   <!-- checkbox复选框 -->
               <span v-text='item.des'></span>      <!-- v-text=''更新数据 -->
         </li>
    </ul>


<script>
var vm = new Vue({
         el: '#app',
       data: {
              fal:false,
          message: 'Runoob!',
              arr:[
                  { des:'设计',bol:false },
                  { des:'编写页面代码',bol:false },
                  { des:'编写js代码',bol:false },
                  { des:'设计产品原型',bol:false },
                  ],
              msg : ''
           },
  methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
           },
                add:function(){
                   //alert(this.msg);
                  this.arr.push( {des:this.msg, bol:false} );
                  this.msg='';
                 },
               fun:function(){
                   if(!this.fal){
                       this.fal = true;
                    }else{
                       this.fal = false;
                    }
    }
  }
})
</script>
 */
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var stNode1 = document.createElement('script');
        stNode1 .src ="https://libs.baidu.com/jquery/1.9.0/jquery.js"
       document.querySelector('body').appendChild(stNode1);
    var stNode111 = document.createElement('script');
        stNode111 .src ="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"
       document.querySelector('body').appendChild(stNode111);
   var stNode1122 = document.createElement('script');
       stNode1122 .innerHTML =
           'var vm = new Vue({ el: "#app",'
             +'data: {  fal:false,'
          +'message: "Runoob!",'
              +'arr:[ { des:"设计",bol:false },'
                    +'{ des:"编写页面代码",bol:false },'
                    +'{ des:"编写js代码",bol:false },'
                    +'{ des:"设计产品原型",bol:false }, ],'
              +'msg : "" },'
         +'methods: {'
           +'reverseMessage: function () {  this.message = this.message.split("").reverse().join("") },'
                +'add:function(){'
                  +'this.arr.push( {des:this.msg, bol:false} );'
                  +'this.msg=""; },'
               +'fun:function(){'
                   +'if(!this.fal){ this.fal = true;'
                    +'}else{ this.fal = false;   }'
                    +'}  }'
              +'})'
       document.querySelector('body').appendChild(stNode1122);
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
 /* function fn_nav() {//导航加载
    var targNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];
    var wxzSearchBarNode = document.createElement('div');
        wxzSearchBarNode.setAttribute('class','header-wxzbar header-info');
        wxzSearchBarNode.setAttribute('id','header-nav');
        wxzSearchBarNode.style = "position: absolute;float: left;top: 10px; left: 235px;width:1625px;";//left:235
        wxzSearchBarNode.innerHTML =
      '<input placeholder=" 輸入--（編號）" class="search-button" id="wxz_input" type="hidden">\
                   <input type="button" value="开关" class="btn default showcol" id="close_searchButton">\
       &nbsp &nbsp\
                   <input type="button" value="批量查询" class="btn green" id="w_searchButton" >\
                   <input type="button" value="运单号查询" class="btn default showcol" id="waybill_searchButton" >\
                   <input type="button" value="金額查询" class="btn default showcol" id="cd_searchButton" >\
                                 <input value="显示/隐藏列" class="btn purple" id="wxcd_searchButton" type="hidden">\
                                 <input value="查詢-補發" class="btn default showcol" id="wxz_searchButton" type="hidden">&nbsp\
                   <input type="hidden" value="信息表显示" class="btn green" id="xxb_searchButton">\
                   <input type="hidden" value="open订单窗口" class="btn green" id="test_searchButton">&nbsp&nbsp&nbsp\
     <input type="button" value="待审核設置 &nbsp " class="tool-action btn yellow" id="demo_search" >&nbsp&nbsp\
     <input type="button" value="待发货" class="tool-action btn yellow" id="T_search" >\
     <input type="button" value="姓 名" class="btn yellow-gold" id="name_search" >\
     <input type="button" value="地 址" class="btn yellow-gold" id="address_search" >\
     <input type="button" value="邮 箱" class="btn yellow-gold" id="email_search" >\
     <input type="button" value="金 额" class="btn yellow-gold" id="jine_search" >\
     <input type="button" value="留 言" class="btn yellow-gold" id="liuyan_search" >&nbsp&nbsp&nbsp\
     <input type="button" value="I P" class="btn yellow-gold" id="ip_search" >\
     <input type="button" value="S K U" class="btn yellow-gold" id="sku_search" >\
                                 <input value="信息55" class="btn green" id="xxbb_searchButton" type="hidden">\
      &nbsp &nbsp\
     <input type="button" value="筛选" class="btn green" id="xx_searchButton" >\
                   <input type="button" value="导 出" class="tool-action btn yellow" id="save_searchButton">\
                   <input type="hidden" value="退 货" class="btn yellow-gold" id="th_searchButton">\
                   <input type="hidden" value="换 货" class="btn yellow-gold" id="hh_searchButton">\
                   <input type="hidden" value="补 发" class="btn yellow-gold" id="bf_searchButton"> \
                   <input value="点击复制" class="btn green" id="fz_searchButton" type="hidden">\
     <input type="hidden" value="点击复制  退 换 补" class="tool-action btn yellow" id="ffz_searchButton">\
     &nbsp  &nbsp  &nbsp &nbsp\
                <select name="djr" id= "djr" style = "display:none">\
                    <option value="0">---登记人---</option>\
					<option value="齊元章">齊元章</option>\
					<option value="楊嘉儀">楊嘉儀</option>\
                    <option value="徐文建">徐文建</option>\
                    <option value="李若蘭">李若蘭</option>\
                    <option value="曹  可">曹  可</option>\
                    <option value="曲開拓">曲開拓</option>\
                    <option value="姜甜甜">姜甜甜</option>\
                    <option value="李亞芳">李亞芳</option>\
                    </select>\
                <select name="tigong" id= "tigong" style = "display:none">\
                    <option value="運費0">-----備註-----</option>\
					<option value="運費300">運費300</option>\
					<option value="運費99">運費99</option>\
                    <option value="運費一半">退一半不取件</option>\
                    </select>\
                <select name="thvalue" id= "thvalue" style = "display:none">\
                    <option value="">-----------退貨原因-----------</option>\
					<option value="與產品網頁不符">與產品網頁不符</option>\
					<option value="质量差">质量差</option>\
                    <option value="大小不合适">大小不合适</option>\
                    <option value="未订购">未订购</option>\
                    <option value="非正品要求退貨">非正品要求退貨</option>\
                    <option value="不适用，不喜欢，不想要">不适用，不喜欢，不想要</option>\
                    <option value="商品有瑕疵，損壞">商品有瑕疵，損壞</option>\
                    <option value="到货不能使用">到货不能使用</option>\
                    <option value="品質不符預期">品質不符預期</option>\
                    <option value="问题件">问题件</option>\
                    <option value="发错商品，少发">发错商品，少发</option>\
                    </select>\
            <select name="hhvalue" id= "hhvalue" style = "display:none">\
                     <option value="">-------------------換貨原因------------------</option>\
					 <option value="换大，仓库发错">换大，仓库发错</option>\
					 <option value="换小，仓库发错">换小，仓库发错</option>\
                     <option value="换颜色，仓库发错">换颜色，仓库发错</option>\
                     <option value="换大，客户自己选错">换大，客户自己选错</option>\
                     <option value="换小，客户自己选错">换小，客户自己选错</option>\
                     <option value="换大，产品尺码不正常">换大，产品尺码不正常</option>\
                     <option value="换小，产品尺码不正常">换小，产品尺码不正常</option>\
                     <option value="换颜色，产品颜色与网站不符">换颜色，产品颜色与网站不符</option>\
                     <option value="发错，换新，客户自己选错">发错，换新，客户自己选错</option>\
                    <option value="发错，换新，仓库发错">发错，换新，仓库发错</option>\
                    <option value="瑕疵，换新">瑕疵，换新</option>\
                    <option value="损坏，换新">损坏，换新</option>\
                    <option value="到货不满意，与网站不符，换新">到货不满意，与网站不符，换新</option>\
                    <option value="換產品補差價，产品不满意">換產品補差價，产品不满意</option>\
                    <option value="換產品補差價，与网站不符">換產品補差價，与网站不符</option>\
                    <option value="發錯貨，二次換貨，仓库发错">發錯貨，二次換貨，仓库发错</option>\
                    <option value="發錯貨，二次換貨，客户自己提供错">發錯貨，二次換貨，客户自己提供错</option>\
                    <option value="换产品">换产品</option>\
                    <option value="無法使用，換新">無法使用，換新</option>\
                    </select>\
      <div id="app">\
           <button v-on:click="fun()">筛选</button>\
           <ul style ="list-style-type: none">\
                 <li v-for="item in arr" v-show ="fal">\
                     <input type="checkbox" name="che">\
                     <span v-text="item.des"></span>\
                </li>\
          </ul>\
      </div>\;'
      targNode.appendChild(wxzSearchBarNode);
    //targNode.insertBefore(wxzSearchBarNode,oldNode); style = "position: relative; float: right;"
  };
*/
  function fun_nav() {//导航加载
    var targNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];
    var wxzSearchBarNode = document.createElement('div');
        wxzSearchBarNode.setAttribute('class','header-wxzbar header-info');
        wxzSearchBarNode.setAttribute('id','header-nav');
        wxzSearchBarNode.style = "position: absolute;float: left;top: 10px; left: 235px;width:1545px;/*text-align: center;*/";//left:235
        wxzSearchBarNode.innerHTML =
      '<input placeholder=" 輸入--（編號）" class="search-button" id="wxz_input" type="hidden">\
                   <input type="button" value="关闭" class="btn default showcol btn-sm" id="close_searchButton">\
       &nbsp &nbsp\
                                 <input value="GO-客服" class="btn default showcol btn-sm" id="wxcx_searchButton" type="hidden">\
                   <input type="button" value="批量查询" class="btn green btn-sm" id="w_searchButton" >\
                   <input type="button" value="运单号" class="btn default showcol btn-sm" id="waybill_searchButton" >\
                   <input type="button" value="金額查询" class="btn green btn-sm" id="cd_searchButton" >\
                                 <input value="显示/隐藏列" class="btn purple btn-sm" id="wxcd_searchButton" type="hidden">\
                                 <input value="查詢-補發" class="btn default showcol btn-sm" id="wxz_searchButton" type="hidden">\
                   <input type="hidden" value="信息表显示" class="btn green btn-sm" id="xxb_searchButton">\
                   <input type="hidden" value="open订单窗口" class="btn green btn-sm" id="test_searchButton">&nbsp&nbsp\
      <input type="button" value="待审核设置" class="btn yellow-gold btn-sm" id="demo_search" >&nbsp\
<input type="button" value="重复 " class="btn purple btn-sm" id="cf_search" >&nbsp\
<input type="button" value="拉黑率 " class="btn purple btn-sm" id="lhl_search" >&nbsp\
<input type="button" value="IP " class="btn purple btn-sm" id="ipcf_search" >&nbsp\
<input type="button" value="重置" class="btn default showcol btn-sm" id="huifuButton" >&nbsp\
     <input type="button" value="姓 名 " class="btn yellow-gold btn-sm" id="name_search" >\
     <input type="button" value="地 址 " class="btn yellow-gold btn-sm" id="address_search" >\
     <input type="button" value="邮 箱 " class="btn yellow-gold btn-sm" id="email_search" >\
     <input type="button" value="留 言 " class="btn yellow-gold btn-sm" id="liuyan_search" >&nbsp&nbsp&nbsp\
     <input type="button" value="金 额 " class="btn yellow-gold btn-sm" id="jine_search" >\
     <input type="button" value="I P " class="btn yellow-gold btn-sm" id="ip_search" >\
     <input type="hidden" value="S K U " class="btn yellow-gold btn-sm" id="sku_search" >&nbsp&nbsp\
     <input type="button" value="留言修改 " class="btn yellow-gold btn-sm" id="xiugai_search" >&nbsp&nbsp&nbsp&nbsp&nbsp\
<input type="button" value="待发货设置" class="btn yellow btn-sm" id="DFH_search" >&nbsp&nbsp\
<input type="button" value="拆 单 " class="btn yellow btn-sm" id="chai_search" >&nbsp\
<input type="button" value="姓 名 " class="btn yellow btn-sm" id="Dname_search" >&nbsp\
<input type="button" value="电 话 " class="btn yellow btn-sm" id="Dphone_search" >&nbsp\
<input type="button" value="拉黑率 " class="btn yellow btn-sm" id="Dblack_search" >&nbsp\
<input type="hidden" value="森鸿自发 &nbsp " class="tool-action btn yellow btn-sm" id="T_search" >\
<input type="button" value="反审核 " class="btn default showcol btn-sm" id="back_search" >&nbsp\
                                 <input value="信息55" class="btn green btn-sm" id="xxbb_searchButton" type="hidden">\
      &nbsp &nbsp\
     <input type="hidden" value="|" class="btn green btn-sm" id="xx_searchButton" >\
                   <input type="button" value="导 出" class="btn green btn-sm" id="save_searchButton">\
                   <input type="hidden" value="退 货" class="btn yellow-gold btn-sm" id="th_searchButton">\
                   <input type="hidden" value="换 货" class="btn yellow-gold btn-sm" id="hh_searchButton">\
                   <input type="hidden" value="补 发" class="btn yellow-gold btn-sm" id="bf_searchButton"> \
                   <input value="点击复制" class="btn green btn-sm" id="fz_searchButton" type="hidden">\
     <input type="hidden" value="点击复制  退 换 补" class="tool-action btn yellow btn-sm" id="ffz_searchButton">\
     &nbsp  &nbsp  &nbsp &nbsp\
                <select name="djr" id= "djr" style = "display:none">\
                    <option value="0">---登记人---</option>\
					<option value="齊元章">齊元章</option>\
					<option value="楊嘉儀">楊嘉儀</option>\
                    <option value="徐文建">徐文建</option>\
                    <option value="李若蘭">李若蘭</option>\
                    <option value="曹  可">曹  可</option>\
                    <option value="曲開拓">曲開拓</option>\
                    <option value="姜甜甜">姜甜甜</option>\
                    <option value="李亞芳">李亞芳</option>\
                    </select>\
                <select name="tigong" id= "tigong" style = "display:none">\
                    <option value="運費0">-----備註-----</option>\
					<option value="運費300">運費300</option>\
					<option value="運費99">運費99</option>\
                    <option value="運費一半">退一半不取件</option>\
                    </select>\
                <select name="thvalue" id= "thvalue" style = "display:none">\
                    <option value="">-----------退貨原因-----------</option>\
					<option value="與產品網頁不符">與產品網頁不符</option>\
					<option value="质量差">质量差</option>\
                    <option value="大小不合适">大小不合适</option>\
                    <option value="未订购">未订购</option>\
                    <option value="非正品要求退貨">非正品要求退貨</option>\
                    <option value="不适用，不喜欢，不想要">不适用，不喜欢，不想要</option>\
                    <option value="商品有瑕疵，損壞">商品有瑕疵，損壞</option>\
                    <option value="到货不能使用">到货不能使用</option>\
                    <option value="品質不符預期">品質不符預期</option>\
                    <option value="问题件">问题件</option>\
                    <option value="发错商品，少发">发错商品，少发</option>\
                    </select>\
            <select name="hhvalue" id= "hhvalue" style = "display:none">\
                     <option value="">-------------------換貨原因------------------</option>\
					 <option value="换大，仓库发错">换大，仓库发错</option>\
					 <option value="换小，仓库发错">换小，仓库发错</option>\
                     <option value="换颜色，仓库发错">换颜色，仓库发错</option>\
                     <option value="换大，客户自己选错">换大，客户自己选错</option>\
                     <option value="换小，客户自己选错">换小，客户自己选错</option>\
                     <option value="换大，产品尺码不正常">换大，产品尺码不正常</option>\
                     <option value="换小，产品尺码不正常">换小，产品尺码不正常</option>\
                     <option value="换颜色，产品颜色与网站不符">换颜色，产品颜色与网站不符</option>\
                     <option value="发错，换新，客户自己选错">发错，换新，客户自己选错</option>\
                    <option value="发错，换新，仓库发错">发错，换新，仓库发错</option>\
                    <option value="瑕疵，换新">瑕疵，换新</option>\
                    <option value="损坏，换新">损坏，换新</option>\
                    <option value="到货不满意，与网站不符，换新">到货不满意，与网站不符，换新</option>\
                    <option value="換產品補差價，产品不满意">換產品補差價，产品不满意</option>\
                    <option value="換產品補差價，与网站不符">換產品補差價，与网站不符</option>\
                    <option value="發錯貨，二次換貨，仓库发错">發錯貨，二次換貨，仓库发错</option>\
                    <option value="發錯貨，二次換貨，客户自己提供错">發錯貨，二次換貨，客户自己提供错</option>\
                    <option value="换产品">换产品</option>\
                    <option value="無法使用，換新">無法使用，換新</option>\
                    </select>\;'
      targNode.appendChild(wxzSearchBarNode);
    //targNode.insertBefore(wxzSearchBarNode,oldNode); style = "position: relative; float: right;"
  };

     document.getElementById("demo_search").addEventListener("click", function fnn() { // 待審核設置
             var demo = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("btn default showcol")[0];
                   demo.click();
             var demoput00 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[2];//币种
                   demoput00.click();
             var demoput = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[5];//产品id
                   demoput.click();
             var demoput1 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[14];//电话长度
                   demoput1.click();
             var demoput2 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[21];//订单状态
                   demoput2.click();
             var demoput3 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[22];//
                   demoput3.click();
             var demoput4 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[30];//留言
                   demoput4.click();
             var demoput5 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[34];//改派商品
                   demoput5.click();
             var demoput60 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[37];//是否发送邮件
                   demoput60.click();
          var demoput61 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[40];//IP
                   demoput61.click();
          var demoput6 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("toggle-vis")[41];//备注
                   demoput6.click();
             var demoput7 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("btn default showcol")[0];//
                   demoput7.click();
            //var demoput8 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("form-control input-sm input-xsmall input-inline")[0];//
             //      demoput8.selectedIndex = 3;//显示数量
             var demoput9 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("chosen")[1];//
                   demoput9.selectedIndex = 1;//选择币种
             var demoput10 = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("order_search form-control input-sm input-inline")[0];//
                   demoput10.click();//选择搜索

},false);
      document.getElementById("huifuButton").addEventListener("click", function fnn() { // 重置订单列表
             var orderVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("input");
               console.log(orderVal.length);
             var orderVall = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("input")[46];
               console.log(orderVall.type);
              // console.log(orderVal.value="");
             for(var i=44;i<52;i++){
                 if(orderVal[i].type=="text"){
                 orderVal[i].value=""
                      };
             }
            var searchval = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByName("search")[0];
                searchval.click();
 },false);
 document.getElementById("xiugai_search").addEventListener("click", function fnn() { // 修改操作按钮
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "操作") {
                            console.log(i);
                      for (var j = 1; j < cout; j++) {
                      // var iptxt = countVal.rows[j].cells[i].children[1].href;
                 var iptxt = countVal.rows[j].cells[i].children[1]
                 var ip =  iptxt.href;
                      // var iptxtVal = iptxt.attributes("href");
                       // var dataneme = countVal.rows[j].cells[1].innerHTML;
                        //    data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
                          console.log(iptxt); console.log(ip);
                          var vraa=document.createElement('a');
                              vraa.target='_blank';
                              vraa.href=ip;
                           document.body.appendChild(vraa);
                              vraa.click();
                      }
               }
          };
},false);
 document.getElementById("back_search").addEventListener("click", function fnn() { // 反审核
             function sleep(n) {
               var start=new Date().getTime();
                while (true) {
                  var time=new Date().getTime();
                  if(time - start>n) {
                      break;
                    }
                 }
            };
             function op(iptxthref){
                 var newwin;
                 newwin=window.open(iptxthref);
                        setTimeout(function(){
                                     newwin.close();
                        },3000);
                }
          //  function co(){
           //     newwin.close();
               // setTimeout("op();",1000);
           //    }
            var countVal = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
             var data = 0 + "\n";//换行
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "操作") {
                            console.log(i);
                      for (var j = 1; j < cout; j++) {
                               var iptxt = countVal.rows[j].cells[i];
                                    console.log(iptxt.children[1].href);
                               var iptxthref = iptxt.children[1].href;
                         op(iptxthref);
                   }
               }
          };
	// var searchval = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByName("search")[0];
         //       searchval.click();
         //   alert(data);
          /*
             var newwin;
             function op(){
                 newwin=window.open(iptxt.children[1].href);
                       // setTimeout("co();",7000);
                }
            function co(){
                newwin.close();
                setTimeout("op();",1000);
               }
         */
         /*
                      for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "操作") {
                            console.log(i);
                      for (var j = 1; j < cout; j++) {
                               var iptxt = countVal.rows[j].cells[i];
                          console.log(iptxt.children[1].href);
                // var downloadA = document.createElement('a');
                 //   downloadA.href = iptxt.children[1].href;
                 //   downloadA.target='_blank';
                  //  downloadA.click(); // 点我，点我，快点我
                  newwin = window.open(iptxt.children[1].href);//打开一个新的窗口
                      // sleep(100);
                      setTimeout(function () {
                      //    newwin = window.open(iptxt.children[1].href);//打开一个新的窗口
                           newwin.close();
                        },3000);
                          // newwin.close();
                  // setTimeout(co(),1000);//设置1秒后关闭新窗口
                  //  function co(){
                  //     newwin.close();//关闭新窗口
                  // setTimeout("op();",1000);//过1秒再次打开新窗口
                   //    };
                   //  window.close();
                   }
               }
          };
             var newwin;
             function op(){
                 newwin=window.open('http://heisetoufa.iteye.com');
                        setTimeout("co();",7000);
                }
            function co(){
                newwin.close();
                setTimeout("op();",1000);
               }
         */
},false);
 document.getElementById("ip_search").addEventListener("click", function fnn() { // ip筛选
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var myAarry= new Array("1.175.2.75","223.136.23.172","123.193.134.179","1.173.60.30","110.28.194.201","1.173.48.155","114.41.0.86","114.25.81.248","10.210.44.58"," 123.192.51.182","101.14.130.79","1.200.35.118"," 175.113.202.155","219.100.37.236","220.140.14.9","220.140.10.237","114.41.14.171","180.217.72.0","49.216.46.180","49.214.180.22","114.26.41.106","49.216.160.208",
);
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
             var data = 0 + "\n";//换行
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "IP") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                                         var iptxt = countVal.rows[j].cells[i].innerHTML;
                                         if (myAarry.indexOf(iptxt) != -1) {
                                                  console.log(iptxt);
                                                  console.log(myAarry.indexOf(iptxt) );
                                                  console.log(countVal.rows[j].cells[1].innerHTML);
                                                     data = data + countVal.rows[j].cells[1].innerHTML+ "\n";
                                         }
                      }
               }
          };
            alert(data);
},false)
         document.getElementById("T_search").addEventListener("click", function fnn() { // T筛选
             var countVal = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
             var data = 0 + "\n";//换行
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "预选物流公司(新)") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                                         var iptxt = countVal.rows[j].cells[i].innerHTML; console.log(iptxt);
                                      if (iptxt.indexOf('T') != -1) {
                                                  console.log(iptxt);
                                                  console.log(countVal.rows[j].cells[1].innerHTML);
                                                     data = data + countVal.rows[j].cells[1].innerHTML+ ",";
                                         }
                      }
               }
          };
            alert(data);
},false)
    /*收货人检测
            var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
             var data = 0 + "\n";//换行
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "收货人") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i].innerHTML;
                            data = data + iptxt+ "\n";
                                      //  alert(iptxt);
                      }
               }
          };
            alert(data);
    */
	  document.getElementById("cf_search").addEventListener("click", function fnn() { // 重复订单
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
            // var data ="";
             var data = "\n";//换行
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "收货人") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i+1].innerHTML;
                       var iptxtt = countVal.rows[j].cells[i];
                       var dataneme = countVal.rows[j].cells[1].innerHTML;
                           // data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
                           if(iptxtt.style.backgroundColor=="rgb(248, 140, 142)"){
                              //  console.log(iptxt);
                              // data = data + dataneme +";-----电话：" + iptxt +";-----           " + "\n" + "\n";
                               data = data + dataneme +","
                           }else{
                               layer.msg("正在加載---重复订单哦", {icon: 6},{time: 500});
                           }
                      }
               }
          };
         // alert(data);
          console.log(data);
             var orderVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByName("order_number")[0];
                 orderVal.value = data;
            var searchval = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByName("search")[0];
                searchval.click();
 },false);
      document.getElementById("lhl_search").addEventListener("click", function fnn() { // 拉黑率
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
          //   var data ="";
           var data = "\n";//换行
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "配送地址") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i-3].innerHTML;//电话
                       var iptxtval = countVal.rows[j].cells[i-2].innerHTML;//拉黑率
                       var iptxtt = countVal.rows[j].cells[i];
                       var dataneme = countVal.rows[j].cells[1].innerHTML;
                           // data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
                           if(iptxtt.style.backgroundColor=="rgb(245, 69, 69)"){
                              //  console.log(iptxt);
                              // data = data + dataneme +";-----拉黑率：" + iptxtval +";-----电话："+ iptxt +";-----           " + "\n" + "\n";
                                data = data + dataneme +","
                           }else{
                              layer.msg("正在加載---拉黑订单哦", {icon: 6},{time: 500});
                           }
                      }
               }
          };
                   // alert(data);
          console.log(data);
             var orderVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByName("order_number")[0];
                 orderVal.value = data;
            var searchval = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByName("search")[0];
                searchval.click();
 },false);
      document.getElementById("ipcf_search").addEventListener("click", function fnn() { // ip重复订单
     var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
            // var data ="";
           var data = "\n";//换行
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "IP") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i].innerHTML; var iptxtval = countVal.rows[j].cells[i-8].innerHTML;
                       var iptxtt = countVal.rows[j].cells[i];
                       var dataneme = countVal.rows[j].cells[1].innerHTML;
                           // data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
                           if(iptxtt.style.backgroundColor=="rgb(249, 211, 78)"){
                              //  console.log(iptxt);
                             //  data = data + dataneme +";-----电话：" + iptxtval +";-----IP："+ iptxt +";-----           " + "\n" + "\n";
                                data = data + dataneme +","
                           }else{
                              layer.msg("正在加載---ip重复订单哦", {icon: 6},{time: 500});
                           }
                      }
               }
          };
                   // alert(data);
          console.log(data);
             var orderVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByName("order_number")[0];
                 orderVal.value = data;
            var searchval = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByName("search")[0];
                searchval.click();
 },false);
 document.getElementById("name_search").addEventListener("click", function fnn() { // 姓名筛选
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "收货人") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i].innerHTML;
                        var dataneme = countVal.rows[j].cells[1].innerHTML;
                            data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
                      }
               }
          };
            alert(data);
 },false)
     document.getElementById("address_search").addEventListener("click", function fnn() { // 地址筛选
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "配送地址") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i].innerHTML;
                          if (iptxt.indexOf('臺北市大安區敦化南路一段225號') != -1) {
                                                  console.log(iptxt);
                                                  console.log(countVal.rows[j].cells[1].innerHTML);
                                                     data = data + countVal.rows[j].cells[1].innerHTML+ ",";
                                         }else  if (iptxt.indexOf('台北市大安区敦化南路一段225号') != -1) {
                                                  console.log(iptxt);
                                                  console.log(countVal.rows[j].cells[1].innerHTML);
                                                     data = data + countVal.rows[j].cells[1].innerHTML+ ",";
                                         }else  if (iptxt.indexOf('敦化南路一段225号') != -1) {
                                                  console.log(iptxt);
                                                  console.log(countVal.rows[j].cells[1].innerHTML);
                                                     data = data + countVal.rows[j].cells[1].innerHTML+ ",";
                                         }else  if (iptxt.indexOf('敦化南路一段225號') != -1) {
                                                  console.log(iptxt);
                                                  console.log(countVal.rows[j].cells[1].innerHTML);
                                                     data = data + countVal.rows[j].cells[1].innerHTML+ ",";
                                         }
                        var dataneme = countVal.rows[j].cells[1].innerHTML;
                            data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
                      }
               }
          };
            alert(data);
 },false)
         document.getElementById("email_search").addEventListener("click", function fnn() { //  邮箱 筛选
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "邮箱") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i].innerHTML;
                        var dataneme = countVal.rows[j].cells[1].innerHTML;
                            data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
                      }
               }
          };
            alert(data);
 },false)
         document.getElementById("jine_search").addEventListener("click", function fnn() { //  应付金额 筛选
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
            var data = 0 + "\n";//换行
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "应付金额") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                             var iptxt = countVal.rows[j].cells[i].innerHTML;
                             var splitVal = iptxt.split(".")[0];
                               if(splitVal>3500){
                                  var dataneme = countVal.rows[j].cells[1].innerHTML;
                                         data = data + dataneme +";大于3500-----" + iptxt +";-----           " + "\n" + "\n";
                                }else{
                                          console.log(19999999991);
                                }
                      }
               }
          };
            alert(data);
 },false)
         document.getElementById("liuyan_search").addEventListener("click", function fnn() { // 留言筛选
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "留言") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i].innerHTML;
                        var dataneme = countVal.rows[j].cells[1].innerHTML;
                             data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
                      }
               }
          };
            alert(data);
 },false)
     document.getElementById("sku_search").addEventListener("click", function fnn() { // 备注sku筛选
             var countVal = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
             var data = 0 + "\n";//换行
            // var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "备注") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                                     var iptxt = countVal.rows[j].cells[i].innerHTML;
                                     var dataneme = countVal.rows[j].cells[1].innerHTML;
                                         if (iptxt.indexOf("sku") != -1) {
                                               data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                         }else if (iptxt.indexOf("恶意订单") != -1) {
                                               data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                         }
                      }
               }
          };
            alert(data);
 },false);
     document.getElementById("DFH_search").addEventListener("click", function fnn() { // 待发货設置
             var demo9 = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("btn default showcol")[0];
                   demo9.click();
             var demoput009 = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("toggle-vis")[11];//收货人
                   demoput009.click();
	     var demoput901 = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("toggle-vis")[20];//预选物流渠道
                   demoput901.click();
             var demoput9 = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("toggle-vis")[41];//预选物流渠道
                   demoput9.click();
            //var demoput8 = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("form-control input-sm input-xsmall input-inline")[0];//
             //      demoput8.selectedIndex = 3;//显示数量
             var demoput99 = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("chosen")[1];//
                   demoput99.selectedIndex = 1;//选择币种
             var demoput109 = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("order_search form-control input-sm input-inline")[0];//
                   demoput109.click();//选择搜索
          demo9.click();

},false);
	  document.getElementById("chai_search").addEventListener("click", function fnn() { // 拆单筛选
             var countVal = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
             var data = 0 + "\n";//换行
         //    var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "订单编号") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                                   var iptxt = countVal.rows[j].cells[i].innerHTML;
		                   var iptxn = countVal.rows[j].cells[5].innerHTML;
                              if (iptxt.indexOf("NR") == "-1") {
                                      //    if (iptxt.indexOf("NR") == -1) {备用
                                               data = data +";---" + iptxt +";---" + iptxn + "\n" + "\n";
                                         }
                      }
               }
          };
            alert(data);
 },false);
     document.getElementById("Dname_search").addEventListener("click", function fnn() { // 姓名筛选
             var countVal = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "收货人") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                       var iptxt = countVal.rows[j].cells[i].innerHTML;
		       var iptxn = countVal.rows[j].cells[i+1].innerHTML;
                       var dataneme = countVal.rows[j].cells[1].innerHTML;
                         //   data = data + dataneme +";-----" + iptxt +";-----           " + "\n" + "\n";
                                      //  alert(iptxt);
			     // data = data + iptxn +";------" + iptxt +";------" + dataneme + "\n" + "\n";
			        data = data + iptxn +";------" + iptxt +";------" + "\n" + "\n";
                      }
               }
          };
            alert(data);
 },false);
         document.getElementById("Dphone_search").addEventListener("click", function fnn() { // 电话筛选
             var countVal = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "联系电话") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                         var dataneme = countVal.rows[j].cells[i].innerHTML;
                            data = data + dataneme +  "\n";
                      }
               }
          };
            //alert(data);
    var textArea01 = document.createElement('textarea');
        textArea01.value = data;
      document.body.appendChild(textArea01);
      //  textArea.style.display = "none";
        textArea01.select();
       // document.execCommand('copy', false);
      document.execCommand('copy');
       layer.msg('Hello 复制成功', {icon: 6});
         setTimeout(function () {
            document.body.removeChild(textArea01);
        }, 100);
 },false);
     /*    document.getElementById("Dblack_search").addEventListener("click", function fnn() { // 拉黑率筛选
             var countVal = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];

             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             var data ="";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "拉黑率") {
                            console.log(i);
                      for (var j = 0; j < cout; j++) {
                           var iptxtval = countVal.rows[j].cells[i].innerHTML;
                           var iptxt = countVal.rows[j].cells[i].childNodes.length;
                           var iptx = countVal.rows[j].cells[i-1].innerHTML;
                                 if (iptxt==1) {
                                         data = data + iptx +";-----" + iptxtval+"\n" + "\n";
                                }
                      }
               }
          };
            alert(data);
 },false);*/
    document.getElementById("Dblack_search").addEventListener("click", function fnn() { // 拉黑率筛选
     var countVal = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
             var cout= countVal.rows.length;
                 console.log(cout);
             var ip_val = document.getElementById("tab_iframe_待发货").contentDocument.getElementsByTagName("th");
                 console.log(ip_val.length);
        //     var data = 0 + "\n";//换行
             function op(iptxthref){
                 var newwin;
                 newwin=window.open(iptxthref);
                        setTimeout(function(){
                                     newwin.close();
                        },3000);
                };
             var data ="联系电话;-----"+"拉黑率"+ "\n"+ "\n";
             for (var i = 0, ii = ip_val.length; i < ii; i++) {
                      if (ip_val[i].innerText == "拉黑率") {
                            console.log(i);
                      for (var j = 1; j < cout; j++) {
                           var iptxtval = countVal.rows[j].cells[i].innerHTML;
                           var iptxt = countVal.rows[j].cells[i].childNodes.length;
                           var iptx = countVal.rows[j].cells[i-1].innerHTML;
                                 if (iptxt==1) {
                                         data = data + iptx +";-----" + iptxtval+"\n" + "\n";
                      console.log(countVal.rows[j].cells[i-1].innerHTML);
                      console.log(countVal.rows[j].cells[i+9].children[1].href);
                                       var lhlhref = countVal.rows[j].cells[i+9].children[1].href;
                                      op(lhlhref);
                                }
                      }
               }
          };
         setTimeout(function(){
                                alert(data);
                        },3000);
},false);
     document.getElementById("test_searchButton").addEventListener("click", function fn() {//test显示  tanchuang
   var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);
                var thNode101 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> 订单号  </th>"
                                          + "<th> 订单状态 </th>"
                                          + "<th> 物流单号 </th>"
                                          + "<th> 来源平台 </th>"
                                          + "<th> 商品名称 </th>"
                                          + "<th> 是否二次改派 </th>"
                                          + "<th> 是否克隆 </th>"
                                          + "<th> 规格</th>"
                                          + "<th> 数量 </th>"
                                          + "<th> 币种</th>"
                                          + "<th> 链接地址</th>"
                                          + "<th> 下单时间</th>"
                                          + "<th> 姓名</th>"
                                          + "<th> 电话</th>"
                                          + "<th> 拉黑率 </th>"
                                          + "<th> 重量</th>"
    + "<th> 物流状态</th>"
    + "<th> 地址</th>"
    + "<th> IP </th>"
    + "<th> 站点ID</th>"
    + "<th> 操作</th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
             var xhr;
             var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value=wxcx.value;
             var cx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("btn green")[0];

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
           layer.msg("已全部查詢完了", {icon: 6},{time: 500});
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
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
               var item = splitVal2.indexOf("已删除");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" +splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                var splitVal20 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                var splitVal200 = xhrVal.split('href="')[1].split('" target="_blank"')[0];
                 console.log('https://goms.giikin.com/admin/order/' + splitVal20);
//var thNode1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                //var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
                var thNode331 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
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
                 window.open('https://goms.giikin.com/admin/order/' + splitVal20, 'newwindow', 'height=950, width=1350, top=50, left=250, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, status=yes');
                getImg();//?代
                 }
              };
      };//
           },false)
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var djrNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];//登记人
    //var SearchBarNode = document.getElementById("header-nav");//nav

    var djrvalue = document.createElement('select');
        djrvalue.setAttribute('name','djr');
        djrvalue.setAttribute('id','djr');
        djrvalue.style = "position: relative; float: left;top: -20px;left: 35px;height:30px;text-align:center;font-size;50px;color:red;border:1px solid red;";
        djrvalue.innerHTML =
                     '<option value="0" >---登记人---</option>'
					+'<option value="齊元章">齊元章</option>'
					+'<option value="楊嘉儀">楊嘉儀</option>'
                    +'<option value="徐文建">徐文建</option>'
                    +'<option value="李若蘭">李若蘭</option>'
                    +'<option value="曹  可">曹  可</option>'
                    +'<option value="曲開拓">曲開拓</option>'
                    +'<option value="姜甜甜">姜甜甜</option>'
                    +'<option value="李亞芳">李亞芳</option>'
     //  djrNode.appendChild(djrvalue);
      // SearchBarNode.appendChild(djrNode);
    var thNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];//備註
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
                     '<option value="運費0">-----備註-----</option>'
					+'<option value="運費300">運費300</option>'
					+'<option value="運費99">運費99</option>'
                    +'<option value="運費一半">退一半不取件</option>'
      // thNode.appendChild(thhNode);
    var thyyNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];//退貨
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
                     '<option value="">-----------退貨原因-----------</option>'
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
       //thyyNode.appendChild(thhyyNode);
//————————————————
//---------------------------------------------------------------------------------------------------------------------------------------------------------
        var hhyyNode = document.getElementsByClassName("page-header navbar navbar-fixed-top")[0];//換貨
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
                     '<option value="">-------------------換貨原因------------------</option>'
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
      // hhyyNode.appendChild(hhhyyNode);
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("wxcd_searchButton").addEventListener("click", function fn() {//显示/隐藏列
            var navNode = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("btn default showcol")[0];
                console.log(navNode);
          var show_tab = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("showul dropdown_row")[0];
                        console.log(show_tab.style.display);
          if (show_tab.style.display == "none") {
              show_tab.style="display: block;";
           }else {
              show_tab.style="display: none;";
           };




},false);//--
//=---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("fz_searchButton").addEventListener("click", function fn() {//一鍵複製
    //var text= document.getElementById("tab_iframe_登記退換貨表").contentDocument.getElementsByTagName("tr")[3].innerText;//一鍵複製
        var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
           console.log(thNode111.children.length);
        var thNodeLen = thNode111.children.length;
  if(thNodeLen == 1){
    var text= document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue").innerText;
           console.log(text);
    var textArea = document.createElement('input');
        textArea.value = text;
      document.body.appendChild(textArea);
      //  textArea.style.display = "none";
        textArea.select();
        document.execCommand('copy');
      alert("复制成功");
         setTimeout(function () {
            document.body.removeChild(textArea);
        }, 100);
  }else{
    var text0= document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue").innerText;
           console.log(text0);
    var textArea0 = document.createElement('textarea');
        textArea0.value = text0;
      document.body.appendChild(textArea0);
      //  textArea.style.display = "none";
        textArea0.select();
        document.execCommand('copy');
       alert("复制成功");
         setTimeout(function () {
            document.body.removeChild(textArea0);
        }, 100);
      };
  },false)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("ffz_searchButton").addEventListener("click", function fn() {//一鍵
            var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
           console.log(thNode111.children.length);
        var thNodeLen = thNode111.children.length;
  if(thNodeLen == 1){
    var text= document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue").innerText;
           console.log(text);
    var textArea = document.createElement('input');
        textArea.value = text;
      document.body.appendChild(textArea);
      //  textArea.style.display = "none";
        textArea.select();
        document.execCommand('copy');
      layer.msg('Hello 复制成功', {icon: 6});
  //    layer.msg('Hello 复制成功', {icon: 2});
  //          layer.msg('Hello 复制成功', {icon: 3});
   //         layer.msg('Hello 复制成功', {icon: 4});
   //         layer.msg('Hello 复制成功', {icon: 5});
    //             layer.msg('Hello 复制成功', {icon: 6});
         setTimeout(function () {
            document.body.removeChild(textArea);
        }, 100);
  }else{
    var text0= document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue").innerText;
           console.log(text0);
    var textArea0 = document.createElement('textarea');
        textArea0.value = text0;
      document.body.appendChild(textArea0);
      //  textArea.style.display = "none";
        textArea0.select();
       // document.execCommand('copy', false);
      document.execCommand('copy');
       layer.msg('Hello 复制成功', {icon: 6});
         setTimeout(function () {
            document.body.removeChild(textArea0);
        }, 100);
      };
      },false);
//------------------------------------------------------------------------------------------------------------------------------------------

 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function xxbTb() {
        var xxbdemo= document.getElementById("tab_iframe_信息表").contentDocument.getElementsByTagName("body")[0];
            console.log(xxbdemo);
        var xxbNode = document.createElement('div');
            xxbNode.setAttribute('class','tab_conten');
            xxbNode.setAttribute('id','tab_conten_信息表');
            xxbNode.innerHTML ="单击复制"
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
                    <span class="title" style = "color:red">不正式管理</span>\
                    <span class="arrow"></span>\
                </a>\
                      <ul class="sub-menu">\
                           <li class="nav-item  " target="_blank">\
                                <a href="https://qyz-admin.github.io/Email/admin-index" class="nav-link " target="view_window">\
                                <i class="iconfont"></i>\
                                <span class="title">常用信息表</span>\
                                </a>\
                           </li>\
                           <li class="nav-item  ">\
                                <a href="https://fanyi.baidu.com/?aldtype=16047#auto/zh" class="nav-link "  id="tul_search" target="_blank">\
                                <i class="iconfont"></i>\
                                <span class="title">百度翻译</span>\
                                </a>\
                           </li>\
                           <li class="nav-item  ">\
                                <a href="https://qyz-admin.github.io/my/email" class="nav-link " target="view_window">\
                                <i class="iconfont"></i>\
                                <span class="title">邮箱登录</span>\
                                </a>\
                           </li>\
                           <li class="nav-item  ">\
                                <a href="https://www.hct.com.tw/search/searchgoods_n.aspx" class="nav-link " target="view_window">\
                                <i class="iconfont"></i>\
                                <span class="title">新竹物流</span>\
                                </a>\
                           </li>\
                           <li class="nav-item  " target="_blank">\
                                <a href="https://alidocs.dingtalk.com/spreadsheet/edit?dentryKey=dYa20qQ3jSkNqY48" class="nav-link " target="view_window">\
                                <i class="iconfont"></i>\
                                <span class="title">釘釘登記退換貨表</span>\
                                </a>\
                           </li>\
<li class="nav-item  " target="_blank">\
                                <a href="/admin/order/orderquery.html" class="nav-link " target="view_window">\
                                <span class="title"></span>\
                                </a>\
                           </li>\
<li class="nav-item">\
            <a id="add_tab" >\
            <span class="title"></span>\
            </a>\
</li>\
                       </ul>\
            </li>\;'
       tulNode.appendChild(tul);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  document.getElementById("xxb_searchButton").addEventListener("click", function fn() {//信息表
/*                           */
//function fn() {
            var xxbdemo9= document.getElementById("tab_iframe_信息表").contentDocument.getElementsByTagName("head")[0];
         // var stNode12 = document.createElement('head');
              xxbdemo9.innerHTML =
                     '<meta charset="utf-8">'
+'<title>吉客印【正式】后台</title>'
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

     var xxbdemo= document.getElementById("tab_iframe_信息表").contentDocument.getElementsByTagName("body")[0];
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
             +'<div class="page-bar"><ul class="page-breadcrumb"><li><a href="/admin/index/index.html">Home</a><i class="fa fa-circle"></i></li><li><span>信息表</span></li></ul></div>'
             +'<div class="row">'
               +'<div class="col-md-12">'
                 +'<div class="portlet box green">'
                   +'<div class="portlet-title"><div class="caption"><i class="fa icon-settings"></i>信息表</div> </div>'
                   +'<div class="portlet-body">'

      /* +'<div class="row" style="margin-bottom:10px;">'
         +'<p style="text-align:center; "> <br><span id="site_runtime" style="">已运行： 382 天 17 小时 29 分 15 秒 <br><br>Fri Feb 07 2020 17:29:15 GMT+0800 (中国标准时间)</span>'
         +'<br> <br>当前IP ：<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script> &nbsp;'
            +'<script type="text/javascript">'
                +'document.write(returnCitySN["cip"]+' - '+returnCitySN["cname"])'
            +'</script>47.244.234.103 - CANADA - 开飞机要用PAC模式'
         +'</p>'
         +' </div>'*/


                     +'<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;text-align:center;"><legend>备忘录【单击复制】</legend></fieldset>'
                     +'<div class="row" style="margin-bottom:10px;">'
                      +'<div class="col-md-6">'//111111
                        +'<div class="layui-card">'
                         +'<div class="layui-card-header" style="font-size: 28px;">邮箱</div>'
                          +'<div class="layui-card-body">'
                           +'<div class="layui-form">'
                            +'<table class="layui-table"><colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>前称</th><th>后缀</th><th>密码</th><th>快捷登陆</th></tr></thead>'
                                +'<tbody><tr>'
                                    +'<td onclick="ad2(0)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(1)"><div class="js-copy" data-clipboard-text="libaka.tw"><span>libaka.tw</span></div></td>'
                                    +'<td onclick="ad2(2)"><div class="js-copy" data-clipboard-text="libaka@gk.2018!"><span>libaka@gk.2018!</span></div></td>'
                +'<td>'//补充
         +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
         +'<input type="hidden" name="username" value="service@libaka.tw">'
         +'<input type="hidden" name="password" value="libaka@gk.2018!">'
         +'<input type="hidden" name="keepAccount" value="on">'
         +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
         +'<input type="hidden" name="systemid" value="app">'
         +'<input type="hidden" name="keepAccount" value="on">'
         +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">libaka &nbsp &nbsp &nbsp &nbsp &nbsp普通 1</button></form>'
              +'</td></tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(3)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(4)"><div class="js-copy" data-clipboard-text="yoyomall.tw"><span>yoyomall.tw</span></div></td>'
                                    +'<td onclick="ad2(5)"><div class="js-copy" data-clipboard-text="Service123"><span>Service123</span></div></td>'
              +'<td>'//补充
       +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@yoyomall.tw">'
        +'<input type="hidden" name="password" value="Service123">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">yoyomall &nbsp &nbsp 普通 2</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(6)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(7)"><div class="js-copy" data-clipboard-text="vivishop.tw"><span>vivishop.tw</span></div></td>'
                                    +'<td onclick="ad2(8)"><div class="js-copy" data-clipboard-text="Service@123"><span>Service@123</span></div></td>'
              +'<td>'//补充
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@vivishop.tw">'
        +'<input type="hidden" name="password" value="Service@123">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">vivishop &nbsp &nbsp &nbsp普通 3</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(9)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(10)"><div class="js-copy" data-clipboard-text="cocomall.tw"><span>cocomall.tw</span></div></td>'
                                    +'<td onclick="ad2(11)"><div class="js-copy" data-clipboard-text="Service123"><span>Service123</span></div></td>'
              +'<td>'//补充
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@cocomall.tw">'
        +'<input type="hidden" name="password" value="Service123">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">cocomall &nbsp &nbsp普通 4</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(12)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(13)"><div class="js-copy" data-clipboard-text="mo11shop.com"><span>mo11shop.com</span></div></td>'
                                    +'<td onclick="ad2(14)"><div class="js-copy" data-clipboard-text="Service123"><span>Service123</span></div></td>'
              +'<td>'//补充
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@mo11shop.com">'
        +'<input type="hidden" name="password" value="Service123">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">mo11shop 普通 5</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(15)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(16)"><div class="js-copy" data-clipboard-text="lycocode.com"><span>lycocode.com</span></div></td>'
                                    +'<td onclick="ad2(17)"><div class="js-copy" data-clipboard-text="Taiwan1011#9120"><span>Taiwan1011#9120</span></div></td>'
              +'<td>'//补充
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@lycocode.com">'
        +'<input type="hidden" name="password" value="Taiwan1011#9120">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">lycocode &nbsp &nbsp 普通 6</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(18)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(19)"><div class="js-copy" data-clipboard-text="geegonlie.com"><span>geegonlie.com</span></div></td>'
                                    +'<td onclick="ad2(20)"><div class="js-copy" data-clipboard-text="geego@tw88!/"><span>geego@tw88!/</span></div></td>'
              +'<td>'//补充
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@geegonlie.com">'
        +'<input type="hidden" name="password" value="geego@tw88!">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">geegonlie &nbsp&nbsp普通 7</button></form>'
              +'</td></tr>'
                                    +'<td onclick="ad2(21)"><div class="js-copy" data-clipboard-text="service"><span>service</span></div>'
                                    +'<td onclick="ad2(22)"><div class="js-copy" data-clipboard-text="cocalot.com"><span>cocalot.com</span></div></td>'
                                    +'<td onclick="ad2(23)"><div class="js-copy" data-clipboard-text="Line.tw@2019/"><span>Line.tw@2019/</span></div></td>'
              +'<td>'//补充
      +'<form name="frm1" action="https://sso-n.global-mail.cn/casserver/login?outer=true" method="POST" target="_blank">'
        +'<input type="hidden" name="username" value="service@cocalot.com">'
        +'<input type="hidden" name="password" value="Line.tw@2019/">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<input type="hidden" name="service" value="https://ssl-n.global-mail.cn/app/mail/index">'
        +'<input type="hidden" name="systemid" value="app">'
        +'<input type="hidden" name="keepAccount" value="on">'
        +'<button type="submit" class="layui-btn layui-btn-primary layui-btn-fluid layui-btn-lg">cocalot &nbsp &nbsp &nbsp &nbsp普通 8</button></form>'
              +'</td></tr>'
                                +'</tbody>'
                            +'</table>'
              //   +'<br>'
                   +'<a href="http://tvlove.club/giikin/set/email.html" target="_blank"><span style="color:red;">备用</span>-快捷郵箱地址：&nbsp;&nbsp;&nbsp;http://tvlove.club/giikin/set/email.html</a>'
       +'<br>'
                   +'<a href="http://tvlove.club/giikin/set/email.html" target="_blank"><span style="color:red;">备用2</span>-快捷郵箱地址：&nbsp;&nbsp;&nbsp;https://qyz-admin.github.io/Email/email</a>'
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
                                +'<thead><tr><th>类型</th><th>I D</th><th>账号</th><th>密码</th></tr></thead>'
                                +'<tbody><tr><td>售后</td>'
                                    +'<td onclick="ad2(24)"><div class="js-copy" data-clipboard-text="a5432678"><span>a5432678</span></div></td>'
                                    +'<td onclick="ad2(25)"><div class="js-copy" data-clipboard-text="a1812375850@gmail.com"><span>a1812375850@gmail.com</span></div></td>'
                                    +'<td onclick="ad2(26)"><div class="js-copy" data-clipboard-text="009988.qaz"><span>009988.qaz</span></div></td></tr>'
                                +'<tr><td>售后</td><td></td>'
                                    +'<td onclick="ad2(27)"><div class="js-copy" data-clipboard-text="jkydev@163.com"><span>jkydev@163.com</span></div></td>'
                                    +'<td onclick="ad2(28)"><div class="js-copy" data-clipboard-text="geego123456"><span>geego123456</span></div></td></tr>'
                                +'<tr><td>售后</td><td></td>'
                                    +'<td onclick="ad2(29)"><div class="js-copy" data-clipboard-text="594580153@qq.com"><span>594580153@qq.com</span></div></td>'
                                    +'<td onclick="ad2(30)"><div class="js-copy" data-clipboard-text="jikeyin.123"><span>jikeyin.123</span></div></td></tr>'
                                +'<tr><td>商城</td><td></td>'
                                    +'<td onclick="ad2(31)"><div class="js-copy" data-clipboard-text="848750869@qq.com"><span>848750869@qq.com</span></div></td>'
                                    +'<td onclick="ad2(32)"><div class="js-copy" data-clipboard-text="123456qaz"><span>123456qaz</span></div></td></tr>'
                               +'<tr><td>客诉件</td><td></td>'
                                    +'<td onclick="ad2(33)"><div class="js-copy" data-clipboard-text="765351485@qq.com"><span>765351485@qq.com</span></div></td>'
                                    +'<td onclick="ad2(34)"><div class="js-copy" data-clipboard-text="123456789qaz"><span>123456789qaz</span></div></td></tr>'
                               +'<tr><td>大客户</td>'
                                    +'<td onclick="ad2(35)"><div class="js-copy" data-clipboard-text="6provence"><span>6provence</span></div></td>'
                                    +'<td onclick="ad2(36)"><div class="js-copy" data-clipboard-text="a1769235920@gmail.com"><span>a1769235920@gmail.com</span></div></td>'
                                    +'<td onclick="ad2(37)"><div class="js-copy" data-clipboard-text="sunan1022wang."><span>sunan1022wang.</span></div></td></tr>'
                                +'<tr><td>不知道</td><td></td>'
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
                    +'<div class="layui-card-header" style="font-size: 28px;">短信账号</div>'
                    +'<div class="layui-card-body">'
                        +'<div class="layui-form">'
                            +'<table class="layui-table">'
                                +'<colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>账号</th><th>密码</th><th></th><th></th></tr></thead>'
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
                    +'<div class="layui-card-header" style="font-size: 28px;">商城后台</div>'
                    +'<div class="layui-card-body">'
                        +'<div class="layui-form">'
                            +'<table class="layui-table">'
                                +'<colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>类别</th><th>账号</th><th>密码</th><th>网址</th></tr></thead>'
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
                    +'<div class="layui-card-header" style="font-size: 28px;">商务通账号</div>'
                    +'<div class="layui-card-body">'
                        +'<div class="layui-form">'
                            +'<table class="layui-table">'
                                +'<colgroup><col width="150"><col width="150"><col width="200"><col></colgroup>'
                                +'<thead><tr><th>账号</th><th>昵称</th><th>密码</th><th>使用者</th></tr></thead>'
                                +'<tbody><tr>'
                                    +'<td onclick="ad2(52)"><div class="js-copy" data-clipboard-text="MHN74355580"><span>MHN74355580</span></div></td>'
                                    +'<td onclick="ad2(53)"><div class="js-copy" data-clipboard-text="阿雅"><span>主号</span></div></td>'
                                    +'<td onclick="ad2(54)"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(55)"><div class="js-copy" data-clipboard-text="LEF21785856"><span>LEF21785856</span></div></td>'
                                    +'<td onclick="ad2(56)"><div class="js-copy" data-clipboard-text="阿貞，阿潔"><span>阿貞，阿潔</span></div></td>'
                                    +'<td onclick="ad2(57)"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(58)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF29968484"><span>LEF29968484</span></div></td>'
                                    +'<td onclick="ad2(59)" style="color:red;"><div class="js-copy" data-clipboard-text="可可"><span>可可</span></div></td>'
                                    +'<td onclick="ad2(60)" style="color:red;"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                                +'<tr>'
                                    +'<td onclick="ad2(61)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF61392403"><span>LEF61392403</span></div></td>'
                                    +'<td onclick="ad2(62)" style="color:red;"><div class="js-copy" data-clipboard-text="阿嬌"><span>阿嬌</span></div></td>'
                                    +'<td onclick="ad2(63)" style="color:red;"><div class="js-copy" data-clipboard-text="aj0000"><span>aj0000</span></div></td></tr>'
                               +'<tr>'
                                    +'<td onclick="ad2(64)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF92795858"><span>LEF92795858</span></div></td>'
                                    +'<td onclick="ad2(65)" style="color:red;"><div class="js-copy" data-clipboard-text="阿杰"><span>阿杰</span></div></td>'
                                    +'<td onclick="ad2(66)" style="color:red;"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                               +'<tr>'
                                    +'<td onclick="ad2(67)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF66352023"><span>LEF66352023</span></div></td>'
                                    +'<td onclick="ad2(68)" style="color:red;"><div class="js-copy" data-clipboard-text="阿奈"><span>阿奈</span></div></td>'
                                    +'<td onclick="ad2(69)" style="color:red;"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                               +'<tr>'
                                    +'<td onclick="ad2(70)"><div class="js-copy" data-clipboard-text="LEF32552906"><span>LEF32552906</span></div></td>'
                                    +'<td onclick="ad2(71)"><div class="js-copy" data-clipboard-text="阿琦，阿文"><span>阿琦/阿文</span></div></td>'
                                    +'<td onclick="ad2(72)"><div class="js-copy" data-clipboard-text="yisainuo"><span>yisainuo</span></div></td></tr>'
                               +'<tr>'
                                    +'<td onclick="ad2(73)" style="color:red;"><div class="js-copy" data-clipboard-text="LEF42180521"><span>LEF42180521</span></div></td>'
                                    +'<td onclick="ad2(74)" style="color:red;"><div class="js-copy" data-clipboard-text="小吉，小穎  ，小雯"><span>小吉，小穎  ，小雯</span></div></td>'
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
             +'layer.msg("Hello 复制成功", {icon: 6});'
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
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function xxbTab() {
    setTimeout(function () {
        var xxbdemo= document.getElementById("tab_iframe_信息表").contentDocument.getElementsByTagName("body")[0];
            console.log(xxbdemo);
        var xxbNode = document.createElement('div');
            xxbNode.setAttribute('class','tab_conten');
            xxbNode.setAttribute('id','tab_conten_信息表');
            xxbNode.innerHTML =
                        '<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">'
                       +'<legend>备忘【单击复制】</legend>'
                       +'</fieldset>;'
            xxbdemo.appendChild(xxbNode);
          }, 5000);
        }
    var stNode1101 = document.createElement('script');
        stNode111 .innerHTML =
                 'function xxbTab() {'
                   + 'setTimeout(function () {'
                      + ' var xxbdemo= document.getElementById("tab_iframe_信息表").contentDocument.getElementsByTagName("body")[0];'
                       + ' console.log(xxbdemo);'
                       + ' var xxbNode = document.createElement("div");'
                       + 'xxbNode.setAttribute("class","tab_conten");'
                        + 'xxbNode.innerHTML ='
                        +'<legend>备忘【单击复制】</legend>;'
                        + 'xxbdemo.appendChild(xxbNode);'
                  + '}, 5000);'
             + ' }'
       document.querySelector('body').appendChild(stNode111);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("add_tab").addEventListener("click", function fn() {
        var tabdemo= document.getElementsByClassName("nav nav-tabs")[0];
        var tabNode = document.createElement('li');
            tabNode.setAttribute('class','active');
            tabNode.setAttribute('id','tab_信息表');
            tabNode.innerHTML =
                  '<a href="#tab_panel_信息表" data-toggle="tab">信息表</a>'
                       +'<span class="close-tab">×</span>'
            tabdemo.appendChild(tabNode);
       var contentdemo= document.getElementsByClassName("tab-content")[0];
           console.log(contentdemo);
        var contentNode = document.createElement('div');
            contentNode.setAttribute('class','tab_conten');
            contentNode.setAttribute('id','tab_conten_信息表');
            contentNode.innerHTML =
                        '<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">'
                       +'<legend>备忘【单击复制】</legend>'
                       +'</fieldset>;'
            contentdemo.appendChild(contentNode);
  },false);
//---------------------------------------------------------------------------------------------------
     document.getElementById("xxbb_searchButton").addEventListener("click", function fn(){ //{----------------------------------------------
  /*           var wxcx8 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
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
                layer.msg('请粘贴单号哦')
            }
            if (result.jsonCode == 1) {
                layer.msg("完成", {time: 500});
                var html = result.con;
                $("#ullist").html(html)
            }
            if (result.jsonCode == 2) {
                layer.msg("未查询到，可能未下单或后台延迟或信息错误", {time: 1000})
            }
        },
        error: function () {
            layer.msg('未查询到，可能是：权限失效 / 未下单 / 后台延迟 / 参数错误 ，若检查无误，那么再点一次或者使用主接口/>')
        }
    })
}/////////////////////////////////////////////////////////////////////////////////////
  */
         var xhr;
             var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
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
                getImg();//?代
                 }
              };
      };//

  },false);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 /*   //var tcdemo = document.getElementsByClassName('tab-content')[0];
    var tcdemo= document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName('page-content')[0];
    var tanchuang = document.createElement('div');//GO-弹窗
          tanchuang.setAttribute('id','tcAlert');
          tanchuang.style = "display: none;"
          tanchuang.innerHTML ="复制成功"
     // document.querySelector('body').appendChild(tanchuang);
          tcdemo.appendChild(tanchuang);

document.getElementById("ffz_searchButton").addEventListener("click", function fn() {//一鍵
    var tcdemo= document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName('page-content')[0];
    var tanchuang = document.createElement('div');//GO-弹窗
          tanchuang.setAttribute('id','tcAlert');
          //tanchuang.style = "inline-block;"
          tanchuang.innerHTML ="复制成功"
     // document.querySelector('body').appendChild(tanchuang);
          tcdemo.appendChild(tanchuang);
/*
    var text00= document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("tcAlert");//一鍵複製
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
      var cxvalue = document.createElement('script');//GO-查詢
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
   (function() {
        var stNode2 = document.createElement('script');
            stNode2 .src ="https://goms.giikin.com/static/admin/js/tabs.js"
            document.querySelector('body').appendChild(stNode2);
    })();
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    document.getElementById("waybill_searchButton").addEventListener("click", function fn() {//快捷-运单号查詢
         //var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody");
           //  for(var i = wxcxTable.length - 1; i >= 0; i--) {
           //  wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
           //  };//清除表格
          var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);
                var thNode101 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> 订单号  </th>"
                                          + "<th> 订单状态 </th>"
                                          + "<th> 物流单号 </th>"
                                          + "<th> 来源平台 </th>"
                                          + "<th> 商品名称 </th>"
                                          + "<th> 是否二次改派 </th>"
                                          + "<th> 是否克隆 </th>"
                                        //  + "<th> 规格</th>"
                                       //   + "<th> 数量 </th>"
                                          + "<th> 币种</th>"
                                         // + "<th> 链接地址</th>"
                                          + "<th> 下单时间</th>"
                                          + "<th> 姓名</th>"
                                          + "<th> 电话</th>"
                                        //  + "<th> 拉黑率 </th>"
                                       //   + "<th> 重量</th>"
    + "<th> 物流状态</th>"
 //   + "<th> 地址</th>"
   + "<th> IP </th>"
 //   + "<th> 站点ID</th>"
    + "<th> 操作</th>"
     + '<th id="delateVal">查询结果<font color="#FF5722">（刪除：0 单）</font></th>'
                                   + "</tr>";
                    thNode101.append(thNode202);
             var xhr;
             var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[2];
             var wxcx_value=wxcx.value;
             var cx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("btn green")[0];

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
          console.log(item_arr);
        var currentIndex = 0;
        var count = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
         //  show_nav();显示隐藏列
           layer.msg("已全部查詢完了", {icon: 6},{time: 500});
            dcountSum();
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
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
               var item = splitVal2.indexOf("已删除");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                      count++;
                     }else{
                     splitVal2 = ">" +splitVal2;
                      count = "";
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                var splitVal20 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
//var thNode1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                //var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
                var thNode331 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
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
                getImg();//?代
                 }//try结束
                catch(err) {
                          getImg();
                      }
                }
              };
      };//
  },false);
     function dcountSum() {
            var countVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("delateVal");
            var sum = {},all = 0;
            var isNumber=/\d+(\.\d+)?/;
            var countVal = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
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
           countVal0.innerHTML= '查询结果<font color="#FF5722">（刪除：'+ all +'单）</font>';
      };
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("w_searchButton").addEventListener("click", function fn() {//快捷-促單查詢
         //var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody");
           //  for(var i = wxcxTable.length - 1; i >= 0; i--) {
           //  wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
           //  };//清除表格
          var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);
                var thNode101 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> 订单号  </th>"
                                          + "<th> 订单状态 </th>"
                                          + "<th> 物流单号 </th>"
                                          + "<th> 来源平台 </th>"
                                          + "<th> 商品名称 </th>"
                                          + "<th> 是否二次改派 </th>"
                                          + "<th> 是否克隆 </th>"
                                        //  + "<th> 规格</th>"
                                       //   + "<th> 数量 </th>"
                                          + "<th> 币种</th>"
                                         // + "<th> 链接地址</th>"
                                          + "<th> 下单时间</th>"
                                          + "<th> 姓名</th>"
                                          + "<th> 电话</th>"
                                        //  + "<th> 拉黑率 </th>"
                                       //   + "<th> 重量</th>"
    + "<th> 物流状态</th>"
 //   + "<th> 地址</th>"
   + "<th> IP </th>"
 //   + "<th> 站点ID</th>"
    + "<th> 操作</th>"
     + '<th id="delateVal">查询结果<font color="#FF5722">（刪除：0 单）</font></th>'
                                   + "</tr>";
                    thNode101.append(thNode202);
             var xhr;
             var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
             var wxcx_value=wxcx.value;
             var cx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("btn green")[0];

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
          console.log(item_arr);
        var currentIndex = 0;
        var count = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
           show_nav();
           layer.msg("已全部查詢完了", {icon: 6},{time: 500});
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
                      var xhrVal = xhr.responseText;
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
               var item = splitVal2.indexOf("已删除");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                      count++;
                     }else{
                     splitVal2 = ">" +splitVal2;
                      count = "";
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                var splitVal20 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
//var thNode1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                //var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
                var thNode331 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
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
                getImg();//?代
                 }
              };
      };//
  },false);
function countSum() {
            var countVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("delateVal");
            var sum = {},all = 0;
            var isNumber=/\d+(\.\d+)?/;
            var countVal = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
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
       var countSum = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
           countVal0.innerHTML= '查询结果<font color="#FF5722">（总计：'+ countSum.children.length +' 单； 刪除：'+ all +' 单）</font>';
       var showSum = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("portlet-body")[0];
                    console.log(showSum );
       var showNode = document.createElement('div');
           showNode.innerHTML ='<br><div class="row">'
                               +'<div class="col-md-12 col-sm-12"><div class="dataTables_info" id="DataTable_info" role="status" aria-live="polite">显示第 1 至 '
                               + countSum.children.length
                               +' 项结果，共 '+ countSum.children.length + ' 项</div></div></div><br>';
           countSum.append(showNode);
      };
    /*
        var countVal = document.getElementById("tab_iframe_采购异常").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
            console.log(countVal.rows.item(2).cells[2].innerHTML);

            console.log(countVal.rows.length);
       for (var i = 1, ii = countVal.rows.length; i < ii; i++) {
             console.log(countVal.rows[i].cells[1].innerHTML);
          };

     function checkSum(a) {//-----------------------------------
          var countVal = document.getElementById("tab_iframe_采购异常").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
              console.log(countVal.rows.item(2).cells[2].innerHTML);
              console.log(countVal.rows.length);
          var dd=0;
         for (var i = 1, ii = countVal.rows.length; i < ii; i++) {
                          // console.log(countVal.rows[i].cells[a].innerHTML);
                      var countValNode= countVal.rows[i].cells[a].innerHTML;
               if(countValNode == "沈小果"){
                            console.log(countValNode);
                           dd++;
                };
          };console.log(dd);
     }
    */
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("cd_searchButton").addEventListener("click", function fn() {//详细订单查詢
      /*  var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody");
             for(var i = wxcxTable.length - 1; i >= 0; i--) {
                     wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
               };//清除表格  */
          var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);

                var thNode101 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> 订单号  </th>"
                                          + "<th> 订单状态 </th>"
                                          + "<th> 物流单号 </th>"
                                          + "<th> 来源平台 </th>"
                                          + "<th> 商品名称 </th>"
                                          + "<th> 是否二次改派 </th>"
                                          + "<th> 是否克隆 </th>"
                                          + "<th> 规格  </th>"
    + "<th> 数量 </th>"
    + "<th> 金额 </th>"
    + "<th> 支付方式 </th>"
                                          + "<th> 币种 </th>"
                                          + "<th> 链接地址  </th>"
                                          + "<th> 姓名 </th>"
                                          + "<th> 电话 </th>"
                                          + "<th> 下单时间  </th>"
                                          + "<th> 物流状态 </th>"
                                          + "<th> 地址  </th>"
    + "<th> 配送方式 </th>"
    + "<th> 電子郵件 </th>"
    + "<th> 客戶留言 </th>"
    + "<th> 超商 </th>"
    + "<th> 操作   </th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
          var xhr;
          var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
          console.log(item_arr);
        var currentIndex = 0;
           getImg();
   function getImg(){
	    if(currentIndex >= item_arr.length){
           wxcx.value = "";
           // countSumm();
           layer.msg("已全部查詢完了", {icon: 6},{time: 500});
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
                /*      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                          console.log(splitVal1);
               var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                   console.log(splitVal2);
               var item = splitVal2.indexOf("已删除");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" + splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                         console.log(splitVal18);
                var splitVal21 = xhrVal.split("<td>")[21].split("</td>")[0];//地址
                         console.log(splitVal21);*/
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getValue(splitVal0,xhrVal);//查詢網址
                            getImg();//?代
                 }
                 catch(err){
                          getImg();
                      }
            };
      };
          function getValue(splitVal0,xhrVal){//查詢網址
             var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
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
                var split50="";
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//订单编号2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//订单金额7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//支付方式21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//派送方式18
                var split40=hehe.split("</td>")[37].split('class="td-text">')[1];
                var split400=hehe.split("</td>")[45].split('class="td-text">')[1];//客戶留言
                var split500=hehe.split("</td>")[47].split('class="td-label">')[1];//超商
                if( split500.indexOf("超商类别") != -1){
                   split50=hehe.split("</td>")[48].split('class="td-text">')[1];;
                   }else if( split500.indexOf("暂无超商信息【点击添加】") != -1){
                   split50 = split500;
                   };
                if( split4.indexOf("易速配") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//站點ID24
               // var split6=hehe.split("商品清單")[1].split("<td>")[4].split("</td>")[0];//站點ID24
               //     console.log(split6);
                //var split77=hehe.split("</td>")[32].split('class="td-text">')[1];//金额
                 var dd = document.getElementById("djr").value;//登记人

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                          console.log(splitVal2);
                      var item = splitVal2.indexOf("已删除");
                          if(item == 1){
                            splitVal2 = '  style="color: red;">' + splitVal2 ;
                          }else{
                            splitVal2 = ">" + splitVal2;
                         };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal7 = xhrVal.split("<td>")[7].split("</td>")[0];//是否二次改派
                          console.log(splitVal7);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVa20 = xhrVal.split("<td>")[10].split("</td>")[0];//币种
                          console.log(splitVa20);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                          console.log(splitVal18);
                var splitVal21 = xhrVal.split("<td>")[21].split("</td>")[0];//地址
                         console.log(splitVal21);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode331 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                //var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
                console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                          "<td>" + splitVal1 + "</td>"//订单号
                                          + "<td" + splitVal2 + "</td>"//订单状态
                                          + "<td>" + splitVal3 + "</td>"//物流单号
                                          + "<td>" + splitVal4 + " </td>"//来源平台
                                          + "<td>" + splitVal5 + "</td>" //商品名称
                                          + "<td>" + splitVal6 + " </td>"//是否二次改派
                                          + "<td>" + splitVal7 + " </td>"//是否克隆
                                          + "<td>" + splitVal8 + " </td>"//规格
                + "<td>" + splitVal9 + " </td>"
                + '<td style="color: red;">' + split2 + '</td>'
                + "<td>" + splitVa20 + " </td>"//币种
                + '<td style="color: red;">' + split3 + '</td>'
                + "<td>" + xhrVal.split("<td>")[11].split("</td>")[0] + "</td>" //链接地址
                + "<td>" + splitVal13 + "</td>" //姓名
                + "<td>" + splitVal14 + "</td>"//电话
                + "<td>" + splitVal12 + "</td>"//下单时间
                + "<td>" + splitVal17 + "</td>" //物流状态
                + "<td>" + splitVal18 + "</td>" //地址
                + "<td>" + split4 + "</td>" //地址
                + "<td>" + split40 + "</td>"
                + "<td>" + split400 + "</td>"
                + "<td>" + split50 + "</td>"
                + "<td>" + splitVal21 + "</td>"
                thNode111.appendChild(thNode222);
              //  var thNodeVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              //      thNodeVal0.setAttribute("style","display:none");
               // var thNodeVal1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
               //     thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
   }
 },false);
         function countSumm() {
            var countVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("delateVal");
            var sum = {},all = 0;
            var isNumber=/\d+(\.\d+)?/;
            var countVal = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
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
       var countSum = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
       //    countVal0.innerHTML= '查询结果<font color="#FF5722">（总计：'+ countSum.children.length +' 单； 刪除：'+ all +' 单）</font>';
       var showSum = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("portlet-body")[0];
                    console.log(showSum );
       var showNode = document.createElement('div');
           showNode.innerHTML ='<br><div class="row">'
                               +'<div class="col-md-12 col-sm-12"><div class="dataTables_info" id="DataTable_info" role="status" aria-live="polite">显示第 1 至 '
                               + countSum.children.length
                               +' 项结果，共 '+ countSum.children.length + ' 项</div></div></div><br>';
           countSum.append(showNode);
      };
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    document.getElementById("wxz_searchButton").addEventListener("click", function fn() {//客服-批量查詢-補發
             var xhr;
             var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
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
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getVal(splitVal0,xhrVal);//查詢網址
                 }
           };
         xhr.open("post","https://goms.giikin.com/admin/order/orderquery.html",true);
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         xhr.send("order_number=" + wxcx_value);
      }else{
                var thNode1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode2 = document.createElement('thead');
                    thNode2.innerHTML =
                                       "<tr>"
                                          + "<th> 补发货品 </th>"
                                          + "<th> 姓名 </th>"
                                          + "<th> 电话 </th>"
                                          + "<th> 补发規格 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 地址 </th>"
                                          + "<th> 訂單備註</th>"
                                          + "<th> 分组 </th>"
                                          + "<th> 数量 </th>"
                                          + "<th> 产品ID </th>"
                                          + "<th> 登记人 </th>"
                                          + "<th> 补发备注 </th>"
                                          + "<th> 时间戳 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 站點ID </th>"
                                   + "</tr>";
                    thNode1.append(thNode2);
    var thNode331 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
    var thNode333 = document.createElement('tbody');
        thNode333.setAttribute('id','thvalue');
        thNode331.appendChild(thNode333);

        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
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
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getVal(splitVal0,xhrVal);//查詢網址
                getImg();//?代
                 }
              };
      };//
    }
  },false);

     function getVal(splitVal0,xhrVal){//查詢網址
             var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
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
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//订单编号2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//订单金额7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//支付方式21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//派送方式18
                if( split4.indexOf("易速配") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//站點ID24
                var split6=hehe.split("商品清單")[1].split("<td>")[4].split("</td>")[0];//站點ID24
                    console.log(split6);
                 var dd = document.getElementById("djr").value;//登记人

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                          console.log(splitVal18);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
                     console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                          "<td>" + splitVal5 + "</td>"//名称
                                          + "<td>" + splitVal13 + "</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//规格
                                          + "<td>(原訂單號：" + split1 + ")</td>" //备注
                                          + "<td>" + splitVal18 + " </td>"//地址
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + split6 + "</td>" //产品ID
                + "<td>" + dd + "</td>"//登记人
                + "<td>補發原單號：" + split1 + "</td>" //补发备注
                + "<td>" + djTime + "</td>"
                + "<td></td>" //备注
                + "<td>" + split5 + "</td>" //站點ID24
                thNode111.appendChild(thNode222);
                var thNodeVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
                    thNodeVal0.setAttribute("style","display:none");
                var thNodeVal1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
                    thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    document.getElementById("wxcx_searchButton").addEventListener("click", function fn() {//客服
      var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
             var xhr;
             var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
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
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
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
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//订单编号2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//订单金额7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//支付方式21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//派送方式18
                if( split4.indexOf("易速配") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//站點ID24
                var split6=hehe.split("商品清單")[1].split("<td>")[4].split("</td>")[0];//站點ID24
                    console.log(split6);
                 var dd = document.getElementById("djr").value;//登记人

                var thNode1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode2 = document.createElement('thead');
                    thNode2.innerHTML =
                                       "<tr>"
                                          + "<th> 补发货品 </th>"
                                          + "<th> 姓名 </th>"
                                          + "<th> 电话 </th>"
                                          + "<th> 补发規格 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 地址 </th>"
                                          + "<th> 訂單備註</th>"
                                          + "<th> 分组 </th>"
                                          + "<th> 数量 </th>"
                                          + "<th> 产品ID </th>"
                                          + "<th> 登记人 </th>"
                                          + "<th> 补发备注 </th>"
                                          + "<th> 时间戳 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 站點ID </th>"
                                   + "</tr>";
                    thNode1.append(thNode2);
                var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                    console.log(thNode111);
                var thNode222 = document.createElement('tbody');
                    thNode222.innerHTML =
                                  "<tr>"
                                          + "<td>" + splitVal5 + "</td>"//名称
                                          + "<td>" + splitVal13 + "</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//规格
                                          + "<td>(原訂單號：" + split1 + ")</td>" //备注
                                          + "<td>" + splitVal18 + " </td>"//地址
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + split6 + "</td>" //产品ID
                + "<td>" + dd + "</td>"//登记人
                + "<td>補發原單號：" + split1 + "</td>" //补发备注
                + "<td>" + djTime + "</td>"
                + "<td></td>" //备注
                + "<td>" + split5 + "</td>" //站點ID24
                thNode111.appendChild(thNode222);
                var thNodeVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
                    thNodeVal0.setAttribute("style","display:none");
                var thNodeVal1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
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
var thNodeVal = document.getElementById("tab_iframe_登記退換貨表").contentDocument.getElementsByClassName("portlet-body")[0];
       thNodeVal.setAttribute("style","display:none");*/

//-------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("bf_searchButton").addEventListener("click", function() {//补发
      /*  var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody");
             for(var i = wxcxTable.length - 1; i >= 0; i--) {
                     wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
               };//清除表格  */
          var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);

                var thNode101 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> 补发货品 </th>"
                                          + "<th> 姓名 </th>"
                                          + "<th> 电话 </th>"
                                          + "<th> 补发規格 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 地址 </th>"
                                          + "<th> 訂單備註</th>"
                                          + "<th> 分组 </th>"
                                          + "<th> 数量 </th>"
                                          + "<th> 产品ID </th>"
                                          + "<th> 登记人 </th>"
                                          + "<th> 补发备注 </th>"
                                          + "<th> 时间戳 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 站點ID </th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
          var xhr;
          var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
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
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                          console.log(splitVal1);
               var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                   console.log(splitVal2);
               var item = splitVal2.indexOf("已删除");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" + splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getValue(splitVal0,xhrVal);//查詢網址
                            getImg();//?代
                 }
            };
         };
          function getValue(splitVal0,xhrVal){//查詢網址
             var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
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
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//订单编号2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//订单金额7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//支付方式21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//派送方式18
                if( split4.indexOf("易速配") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//站點ID24
                var split6=hehe.split("商品清單")[1].split("<td>")[4].split("</td>")[0];//站點ID24
                    console.log(split6);
                 var dd = document.getElementById("djr").value;//登记人

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                          console.log(splitVal18);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode331 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                //var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
                console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                          "<td>" + splitVal5 + "</td>"//名称
                                          + "<td>" + splitVal13 + "</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//规格
                                          + "<td>s少發(原訂單號：" + split1 + ")</td>" //备注
                                          + "<td>" + splitVal18 + " </td>"//地址
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + split6 + "</td>" //产品ID
                + "<td>" + dd + "</td>"//登记人
                + "<td>補發原單號：" + split1 + "</td>" //补发备注
                + "<td>" + djTime + "</td>"
                + "<td></td>" //备注
                + "<td>" + split5 + "</td>" //站點ID24
                thNode111.appendChild(thNode222);
              //  var thNodeVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              //      thNodeVal0.setAttribute("style","display:none");
               // var thNodeVal1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
               //     thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
 },false);
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("hh_searchButton").addEventListener("click", function() {//换货
           var hh_val = document.getElementById("hhvalue").value;//換貨原因
      /*  var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody");
             for(var i = wxcxTable.length - 1; i >= 0; i--) {
                     wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
               };//清除表格  */
          var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);

                var thNode101 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                       "<tr>"
                                          + "<th> 换新品名 </th>"
                                          + "<th> 姓名 </th>"
                                          + "<th> 电话 </th>"
                                          + "<th> 规格 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 地址 </th>"
                                          + "<th> 收回货物的运单号</th>"
                                          + "<th> 原产品 </th>"
                                          + "<th> 原规格 </th>"
                                          + "<th> 原因 </th>"
                                          + "<th> 备注原因 </th>"
                                          + "<th> 分组 </th>"
                                          + "<th> 数量 </th>"
                                          + "<th> 产品ID </th>"
                                          + "<th> 物流渠道 </th>"
                                          + "<th> 登记人 </th>"
                                          + "<th> 订单来源 </th>"
                                          + "<th> 换货备注 </th>"
                                          + "<th> 时间戳 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 站點ID </th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
          var xhr;
          var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
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
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                          console.log(splitVal1);
               var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                   console.log(splitVal2);
               var item = splitVal2.indexOf("已删除");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" + splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getValue(splitVal0,xhrVal);//查詢網址
                            getImg();//?代
                 }
            };
         };
          function getValue(splitVal0,xhrVal){//查詢網址
             var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
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
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//订单编号2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//订单金额7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//支付方式21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//派送方式18
                if( split4.indexOf("易速配") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//站點ID24
                var split6=hehe.split("商品清單")[1].split("<td>")[4].split("</td>")[0];//站點ID24
                    console.log(split6);

                 var thhNode_val = document.getElementById("tigong").value;
                     if(thhNode_val == "運費0"){
                        thhNode_val ="";
                       }else if(thhNode_val == "運費一半"){
                        thhNode_val ="";
                       } else {
                        thhNode_val = thhNode_val;
                       };
                        console.log(thhNode_val);
                 var dd = document.getElementById("djr").value;//登记人

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                          console.log(splitVal18);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode331 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                //var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
                console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                            "<td>" + splitVal5 + "</td>"//名称
                                          + "<td>" + splitVal13 + "1</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//规格
                        + "<td>客戶要求換貨；派送新貨的同時；需要把原貨收回；（需要收回的原貨運單號"
                        + splitVal3+"）(原訂單編號： " + splitVal1 + ")</td>" //备注
                                          + "<td>" + splitVal18 + " </td>"//地址
                + "<td>" + splitVal3 + "</td>"
                + "<td>" + splitVal5 + "</td>"//名称
                + "<td>" + splitVal8 + " </td>"//规格
                + "<td>" + hh_val + "</td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + splitVal9 + "</td>"
                + "<td>" + split6 + "</td>" //产品ID
                + "<td>" + split4 + "</td>"
                + "<td>" + dd + "</td>"//登记人
                + "<td>" + splitVal4 + "</td>"
                + "<td>換貨原單號：" + split1 + "來回件</td>"//換貨备注
                + "<td>" + djTime + "</td>"
                + "<td>" + thhNode_val + "</td>"
                + "<td>" + split5 + "</td>" //站點ID24
                thNode111.appendChild(thNode222);
              //  var thNodeVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              //      thNodeVal0.setAttribute("style","display:none");
               // var thNodeVal1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
               //     thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
 },false);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    document.getElementById("th_searchButton").addEventListener("click", function() {//退货
          var th_val = document.getElementById("thvalue").value;//退货原因
      /*  var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody");
             for(var i = wxcxTable.length - 1; i >= 0; i--) {
                     wxcxTable[i].parentNode.removeChild(wxcxTable[i]);
               };//清除表格  */
          var wxcxTable = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
              wxcxTable.parentNode.removeChild(wxcxTable);
          var wxcxTable1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              wxcxTable1.parentNode.removeChild(wxcxTable1);

                var thNode101 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                var thNode202 = document.createElement('thead');
                    thNode202.innerHTML =
                                  "<tr>"
                                          + "<th> 客代 </th>"
                                          + "<th> 原订单号 </th>"
                                          + "<th> 出货单名称 </th>"
                                          + "<th> 收货人 </th>"
                                          + "<th> 联系电话 </th>"
                                          + "<th> 規格 </th>"
                                          + "<th> 订单金额</th>"
                                          + "<th> 地址 </th>"
                                          + "<th> 数量 </th>"
                                          + "<th> 运单号 </th>"
                                          + "<th> 原因 </th>"
                                          + "<th> 备注原因 </th>"
                                          + "<th> 戶名 </th>"
                                          + "<th> 银行账号 </th>"
                                          + "<th> 銀行/分行 </th>"
                                          + "<th> 退款金额 </th>"
                                          + "<th> 下单时间 </th>"
                                          + "<th> 物流渠道 </th>"
                                          + "<th> 登记人 </th>"
                                          + "<th> 订单来源 </th>"
                                          + "<th> 支付方式 </th>"
                                          + "<th> 时间戳 </th>"
                                          + "<th> 备注 </th>"
                                          + "<th> 站点ID </th>"
                                   + "</tr>";
                    thNode101.append(thNode202);
          var xhr;
          var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;

        var item = wxcx_value.indexOf(",");
            //console.log(item);
        var item_arr = wxcx_value.split(/[\n\s+,，；;]/g);
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
                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号
                          console.log(splitVal1);
               var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                   console.log(splitVal2);
               var item = splitVal2.indexOf("已删除");
                   if(item == 1){
                     splitVal2 = '  style="color: red;">' + splitVal2 ;
                     }else{
                     splitVal2 = ">" + splitVal2;
                    };
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                         console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                           console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                         console.log(splitVal18);
                var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
                          console.log(splitVal0);
                   getValue(splitVal0,xhrVal);//查詢網址
                            getImg();//?代
                 }
            };
         };
          function getValue(splitVal0,xhrVal){//查詢網址
             var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
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
                var split1=hehe.split("</td>")[2].split('class="td-text">')[1];//订单编号2
                var split2=hehe.split("</td>")[10].split('class="td-text">')[1];//订单金额7-16
                var split3=hehe.split("</td>")[18].split('class="td-text">')[1];//支付方式21
                var split4=hehe.split("</td>")[22].split('class="td-text">')[1];//派送方式18
                if( split4.indexOf("易速配") != -1){
                   split0="";
                   }else {
                   split0 += "4103173926";
                   };
                var split5=hehe.split("</td>")[32].split('class="td-text">')[1];//站點ID24
                var split6=hehe.split("商品清單")[1].split("<td>")[4].split("</td>")[0];//站點ID24
                    console.log(split6);
                 var thhNode_val = document.getElementById("tigong").value;
                 var splitBeizhu;
                    splitBeizhu = Number(split2) - Number(thhNode_val.split("運費")[1]);
                if(thhNode_val == "運費0"){
                   thhNode_val ="";
                  }else if(thhNode_val == "運費一半"){
                   thhNode_val ="退一半不取件";
                   splitBeizhu = Number(split2) - Number(split2)/2;
                  } else {
                   thhNode_val = thhNode_val;

                  };
                   console.log(thhNode_val);

                 var dd = document.getElementById("djr").value;//登记人

                      var splitVal1 = xhrVal.split("<td>")[1].split("</td>")[0];//订单号 111xx
                          console.log(splitVal1);
                      var splitVal2 = xhrVal.split("<td>")[2].split("</td>")[0];//订单状态
                          console.log(splitVal2);
                      var splitVal3 = xhrVal.split("<td>")[3].split("</td>")[0];//物流单号
                          console.log(splitVal3);
                var splitVal4 = xhrVal.split("<td>")[4].split("</td>")[0];//来源平台
                          console.log(splitVal4);
                var splitVal5 = xhrVal.split("<td>")[5].split("</td>")[0];//商品名称
                          console.log(splitVal5);
                var splitVal6 = xhrVal.split("<td>")[6].split("</td>")[0];//是否二次改派
                          console.log(splitVal6);
                var splitVal8 = xhrVal.split("<td>")[8].split("</td>")[0];//规格
                          console.log(splitVal8);
                var splitVal9 = xhrVal.split("<td>")[9].split("</td>")[0];//数量
                          console.log(splitVal9);
                var splitVal12 = xhrVal.split("<td>")[12].split("</td>")[0];//下单时间
                          console.log(splitVal12);
                var splitVal13 = xhrVal.split("<td>")[13].split("</td>")[0];//姓名
                          console.log(splitVal13);
                var splitVal14 = xhrVal.split("<td>")[14].split("</td>")[0];//电话
                          console.log(splitVal14);
                var splitVal17 = xhrVal.split("<td>")[17].split("</td>")[0];//物流状态
                          console.log(splitVal17);
                var splitVal18 = xhrVal.split("<td>")[18].split("</td>")[0];//地址
                          console.log(splitVal18);
               // var splitVal0 = xhrVal.split("/admin/order/")[1].split('" target="_blank"')[0];
               //           console.log(splitVal0);//22xx

                var thNode331 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];;
                var thNode333 = document.createElement('tbody');
                    thNode333.setAttribute('id','thvalue');
                    thNode331.appendChild(thNode333);
                //var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  var thNode111 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("thvalue");
                console.log(thNode111);
                var thNode222 = document.createElement('tr');
                    thNode222.innerHTML =
                                //  "<tr>"
                                            "<td> </td>"
                                          + "<td>" + splitVal1 + "</td>"
                                          + "<td>" + splitVal5 + "</td>"//名称
                                          + "<td>" + splitVal13 + "</td>"
                                          + "<td>" + splitVal14 + "</td>"
                                          + "<td>" + splitVal8 + " </td>"//规格
                                          + "<td>" + split2 + "</td>"
                                          + "<td>" + splitVal18 + " </td>"//地址
                + "<td>" + splitVal9 + "</td>"
                + "<td>" + splitVal3 + "</td>"//運單號
                + "<td>" + th_val + "</td>"
                + "<td>  </td>"
                + '<td style="color: red;">'+ splitVal13 + "</td>"
                + "<td>  </td>"
                + "<td>  </td>"
                + "<td>" + splitBeizhu + "</td>" //退款金额7-16
                + "<td>" + splitVal12 + "</td>"//時間
                + "<td>" + split4 + "</td>"
                + "<td>" + dd + "</td>"//登记人
                + "<td>" + splitVal4 + "</td>"
                + "<td>" + split3 + "</td>"//來源
                + "<td>" + djTime + "</td>"
                + "<td>" + thhNode_val + "</td>"//備註
                + "<td>" + split5 + "</td>" //站點ID24
                thNode111.appendChild(thNode222);
              //  var thNodeVal0 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("thead")[0];
              //      thNodeVal0.setAttribute("style","display:none");
               // var thNodeVal1 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("tbody")[0];
               //     thNodeVal1.setAttribute("style","display:none");
                 }
               }
         xhrVal0.open("GET",xhrVal_ur,true);
         xhrVal0.send();
       };
 },false);
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("save_searchButton").addEventListener("click", function() {//導出
                 var tc = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                         console.log(tc);
                     tc.setAttribute('id','tc-info');
                 var exportFileContent = document.getElementById("tab_iframe_客服查询").contentDocument.getElementById("tc-info").outerHTML;
                 var downloadA = document.createElement('a');
                 var blob = new Blob([exportFileContent], {type: "text/plain;charset=utf-8"});

                    downloadA.href = window.URL.createObjectURL(blob);
                    downloadA.download = '数据下载.xlsx';
                    downloadA.click(); // 点我，点我，快点我

   /*       var wxcx = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("form-control input-inline input-medium")[0];
          var wxcx_value=wxcx.value;
              console.log(wxcx_value);

    var $ = unsafeWindow.jQuery;
        $.ajax({
               type: "POST",//方法类型
               dataType: "json",//预期服务器返回的数据类型-
               url: "https://goms.giikin.com/admin/order/orderquery.html" ,//url
               data: "order_number=NR002192031108045",
               // data: {"order_number":'NK200501000023522846',"order_number":'NR005010000329823',"order_number":'NR005010000068576'},
               //data:"studentId="+stuId+"&subjectId="+subId,
               success:function (data) {
                   console.log(11);
                      console.log(data);
               }
            });
*/

      //       var action = $(this).attr('data-action');
      //      table.button(action).trigger();


     /*     var tc = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover");
                console.log(tc[0]);
              tc[0].setAttribute('id','tc-info');
               method1("tc-info");

       function method1(tableid) {//第一种方法
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
    var tc = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover");
                console.log(tc[0]);
              tc[0].setAttribute('id','tc-info');
    };
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  /*   function myTimer() {//------------------------------备用加载
          var dd = document.getElementsByClassName("nav nav-tabs")[0].children[1];
                   console.log(dd);
          var dd1 = dd.getAttribute("iframe");
         if ( dd1 == "tab_iframe_信息表"){
                   console.log(2222);
                //   alert(333);
                clearInterval(myVar);
                     fn();
          }
      };
     function myStopFunction() {
           clearInterval(myVar);
      };
     var myVar = setInterval(function(){//计时器-----信息表加载
           myTimer();
      }, 1000);

-------------------------------------------------------------------------

      var html = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("table table-striped table-bordered table-hover")[0];
console.log(html);
var nn = "<html><head><meta charset='utf-8' /></head><body>" + html + "</body></html>";
console.log(nn);

var downloadA = document.createElement('a');
var blob = new Blob([nn], { type: "application/vnd.ms-excel" });

downloadA.href = window.URL.createObjectURL(blob);
downloadA.download = '你所起的文件名.xlsx';
downloadA.click(); // 点我，点我，快点我
      */
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
<div class="actions">
        <a href="javascript:void(0)" data-action="0" id="search" class="btn yellow-gold"><i class="fa fa-search"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始筛选</font></font></a>
        <a class="btn purple" href="javascript:;" onclick="add()"> <i class="icon-plus"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 添加采购异常</font></font></a>
        <a href="javascript:void(0)" class="tool-action btn yellow"> <i class="icon-share-alt"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导出</font></font></a>
                        <div class="btn-group" style="z-index:100;">
                            <button class="btn default showcol"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示/隐藏列</font></font></button>
                            <ul class="showul dropdown_row">
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放置人</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">联系方式</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产品编号</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">品名</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">币种</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="6"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规格</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="7"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">订单编号</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="8"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">团队</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" data-column="9"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">订单状态</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" checked="" data-column="12"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理结果</font></font></label></li>
                                <li><label><input type="checkbox" class="toggle-vis" data-column="13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异常详情</font></font></label></li>
                            </ul>
                        </div>
                    </div>
*/

  function show_nav() {//导航加载
    var navNode = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("portlet-title")[0];

   // var navBarNode = document.createElement('div');
   //     navBarNode.setAttribute('class','tools');
    //    navNode.appendChild(navBarNode);

    var navSearchBarNode = document.createElement('div');
        navSearchBarNode.setAttribute('class','actions');
        navSearchBarNode.innerHTML =
                   '<div class="btn-group" style="z-index:100;">'
                            +'<button class="btn default showcol" onclick = "funN()">显示/隐藏列</button>'
                            +'<ul class="showul dropdown_row" style="display: none;">'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放置人</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">联系方式</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产品编号</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">品名</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">币种</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="6"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规格</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="7"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">订单编号</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="8"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">团队</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" data-column="9"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">订单状态</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="12"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理结果</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" data-column="13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异常详情</font></font></label></li>'
                            +'</ul>'
                 +'</div>';
       navNode.appendChild(navSearchBarNode);
//---------------------------------------------------------------------------
    var navNode10 = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByTagName("body")[0];
    var navNode11 = document.createElement('script');//加載js
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
                   +'var show_tab = document.getElementById("tab_iframe_客服查询").contentDocument.contentDocument.getElementsByTagName("body")[0];'
                       +'console.log(show_tab);'
                       +'};'
       navNode10.appendChild(navNode11);
//
    var stNode190 = document.createElement('script');//js加載
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
    var stNode1910 = document.createElement('script');//bootstrap-table加載
        stNode1910.setAttribute('type','text/javascript');
        stNode1910.setAttribute('src','https://goms.giikin.com/static/admin/bootstrap-table/bootstrap-table.min.js');
        navNode10.appendChild(stNode1910);
    var stNode1915 = document.createElement('script');//chosen加載
        stNode1915.setAttribute('type','text/javascript');
        stNode1915.setAttribute('src','https://goms.giikin.com/static/admin/chosen/chosen.jquery.js');
        navNode10.appendChild(stNode1915);
    var stNode1920 = document.createElement('script');//datatables加載
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
     document.getElementById("close_searchButton").addEventListener("click", function(){//關閉
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
        document.getElementById("btn-group-nav").addEventListener("click", function(){//導出
                 var show_tab = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("showul dropdown_row")[0];
                         console.log(show_tab);
                     show_tab.style="display: block;";

            },false);
    /*
 +'console.log(show_tab.style.display);'
                       +'show_tab.style="display: block;";'
    */
 document.getElementById("cd_searchButton0").addEventListener("click", function(){//導出--
            var navNode = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("portlet-title")[0];

   // var navBarNode = document.createElement('div');
   //     navBarNode.setAttribute('class','tools');
    //    navNode.appendChild(navBarNode);

    var navSearchBarNode = document.createElement('div');
        navSearchBarNode.setAttribute('class','actions');
        navSearchBarNode.innerHTML =
                   '<div class="btn-group" style="z-index:100;">'
                            +'<button id = "btn-group-nav" class="btn default showcol">显示/隐藏列</button>'
                            +'<ul class="showul dropdown_row" style="display: none;">'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放置人</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">联系方式</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产品编号</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">品名</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">币种</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="6"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规格</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="7"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">订单编号</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="8"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">团队</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" data-column="9"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">订单状态</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" checked="" data-column="12"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理结果</font></font></label></li>'
                                +'<li><label><input type="checkbox" class="toggle-vis" data-column="13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异常详情</font></font></label></li>'
                            +'</ul>'
                 +'</div>';
       navNode.appendChild(navSearchBarNode);


            //   var show_tab = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("showul dropdown_row")[0];
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
            var navNode = document.getElementById("tab_iframe_客服查询").contentDocument.getElementsByClassName("btn default showcol")[0];
                console.log(navNode);
       },false);//--
})();


/*
 var shaixuan = document.getElementById("tab_iframe_待审核").contentDocument.getElementsByTagName("thead")[0];
           console.log(shaixuan);
 var shaixuanNode = document.createElement('tr');
        shaixuanNode.setAttribute('class','header-wxzbar header-info');
        shaixuanNode.setAttribute('id','tr-nav');
        shaixuanNode.innerHTML =
    '<th><button class="btn btn-primary" data-target="#mymodal" data-toggle="modal">开始演示</button>'
    +'<div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" data-backdrop ="true">'
        +'<div class="modal-dialog">'
            +'<div class="modal-content">'
                +'<div class="modal-header">'
                    +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
                    +'<h4 class="modal-title">标题</h4>'
                +'</div>'
                +'<div class="modal-body">文本内容</div>'
                +'<div class="modal-footer">'
                    +'<button type="button" class="btn btn-primary" data-dismiss="modal" data-backdrop="true">关闭</button>'
                    +'<button type="button" class="btn btn-primary">提交更改</button>'
                +'</div>'
            +'</div>'
        +'</div>'
    +'</div></th>'
    +'<th><button class="btn btn-primary" data-target="#mymodal" data-toggle="modal">开始演示</button>'
    +'<div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" data-backdrop ="true">'
        +'<div class="modal-dialog">'
            +'<div class="modal-content">'
                +'<div class="modal-header">'
                    +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
                    +'<h4 class="modal-title">标题</h4>'
                +'</div>'
                +'<div class="modal-body">文本内容</div>'
                +'<div class="modal-footer">'
                    +'<button type="button" class="btn btn-primary" data-dismiss="modal" data-backdrop="true">关闭</button>'
                    +'<button type="button" class="btn btn-primary">提交更改</button>'
                +'</div>'
            +'</div>'
        +'</div>'
    +'</div></th>'
    +'<th><button class="btn btn-primary" data-target="#mymodal" data-toggle="modal">开始演示</button>'
    +'<div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" data-backdrop ="true">'
        +'<div class="modal-dialog">'
            +'<div class="modal-content">'
                +'<div class="modal-header">'
                    +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
                    +'<h4 class="modal-title">标题</h4>'
                +'</div>'
                +'<div class="modal-body">文本内容</div>'
                +'<div class="modal-footer">'
                    +'<button type="button" class="btn btn-primary" data-dismiss="modal" data-backdrop="true">关闭</button>'
                    +'<button type="button" class="btn btn-primary">提交更改</button>'
                +'</div>'
            +'</div>'
        +'</div>'
    +'</div></th>';
shaixuan.appendChild(shaixuanNode);*/