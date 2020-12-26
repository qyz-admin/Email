//----------------------------------------------------------------------------------导出---------------------------------------------------------------------------
function daochu1(){
        var exportFileContent = document.getElementsByClassName("table table-striped table-bordered table-hover")[0].outerHTML;
	var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office"xmlns:x="urn:schemas-microsoft-com:office:excel"xmlns="http://www.w3.org/TR/REC-html40">'+
        '<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'+
        '<x:Name>worksheet</x:Name>'+
        '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>'+
        '</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->'+
        '</head><body>'+exportFileContent+'</body></html>';

                var downloadA = document.createElement("a");
                var blob = new Blob([template], {type: "text/plain;charset=utf-8"});
                    downloadA.href = window.URL.createObjectURL(blob);
                    downloadA.download = "数据下载.xlsx";
                    downloadA.click(); 
               };
//----------------------------------------------------------------------------------复制---------------------------------------------------------------------------
 function fuzhii(){ 
             var thNode111 = document.getElementsByTagName("tbody")[0]; 
             var thNodeLen = thNode111.children.length; 
              if(thNodeLen == 1){ 
             var text= document.getElementsByTagName("tbody")[0].innerText; 
             var textArea = document.createElement("input"); 
                 textArea.value = text; 
               document.body.appendChild(textArea); 
                 textArea.select(); 
                 document.execCommand("copy"); 
               layer.msg("Hello 复制成功", {icon: 6}); 
                  setTimeout(function () { 
                     document.body.removeChild(textArea); 
                 }, 100); 
           }else{ 
             var text0= document.getElementsByTagName("tbody")[0].innerText; 
                    console.log(text0); 
             var textArea0 = document.createElement("textarea"); 
                 textArea0.value = text0; 
               document.body.appendChild(textArea0); 
                 textArea0.select(); 
               document.execCommand("copy"); 
                layer.msg("Hello 复制成功", {icon: 6}); 
                  setTimeout(function () { 
                     document.body.removeChild(textArea0); 
                 }, 100) 
           }; 
      }; 
//------------------------------------------------------------------------------------重置-------------------------------------------------------------------------
function reset(){
      var form = document.getElementsByClassName("form-control input-inline input-medium")[0];
      var form2 = document.getElementsByClassName("form-control input-inline input-medium")[2];
          form.value ="";
	  form2.value ="";
 };
//------------------------------------------------------------------------------------查询-------------------------------------------------------------------------
function showw(){
       var xhr;
       var strHtml ="_user=1343&_token="+ getCookie("token") +  formVal();

      // var strHtml ="_user=1343&_token=50b94b8a7357a458668946983d37ae40&" + "orderPrefix=" + form;
      // var strHtml ="orderPrefix=NR007311326091024&_user=1343&_token=50b94b8a7357a458668946983d37ae40";
       var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
           if( window.XMLHttpRequest ){
              xhr=new XMLHttpRequest();
            }else{
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
           };
          xhr.onreadystatechange=function(){
            if( xhr.readyState==4 && xhr.status==200){
              var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  hhNode.firstChild.innerHTML ='<tr>'
                                            +'<th> 订单号 </th>'
                                            +'<th> 订单状态 </th>'
                                            +'<th> 物流单号 </th>'
                                            +'<th> 来源平台 </th>'
                                            +'<th> 商品名称 </th>'
                                            +'<th> 是否二次改派 </th>'
                                            +'<th> 是否克隆 </th>'
                                            +'<th> 规格 </th>'
                                            +'<th> 币种 </th>'
                                            +'<th> 金额 </th>'
                                            +'<th> 支付类型 </th>'
                                            +'<th> 链接地址 </th>'
                                            +'<th> 下单时间 </th>'
                                            +'<th> 姓名 </th>'
                                            +'<th> 电话 </th>'
                                            +'<th> 重量 </th>'
                                            +'<th> 物流状态 </th>'
                                            +'<th> 物流更新时间 </th>'
                                            +'<th> 物流公司 </th>'
                                            +'<th> 地址 </th>'
                                            +'<th> IP </th>'
                                            +'<th> 站点ID </th>'
                                            +'<th> 审核方式 </th>'
                                        +'</tr>'
                console.log(xhr.responseText);
          var mp3 = eval("("+ this.responseText +")");
                console.log(mp3);
              //  console.log(mp3.data.list);
              //  console.log(mp3.data.list[0]);
          var mp3Val = mp3.data.list;
                product(mp3Val);
	 var form = document.getElementsByClassName("form-control input-inline input-medium")[0];
         var form2 = document.getElementsByClassName("form-control input-inline input-medium")[2];
             form.value ="";
	     form2.value ="";
             }
        }
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
};
//------------------------------------------------------------------------------------退货-------------------------------------------------------------------------
function tuihuoT(){
       var xhr;
       var strHtml ="_user=1343&_token="+ getCookie("token") +  formVal();

      // var strHtml ="_user=1343&_token=50b94b8a7357a458668946983d37ae40&" + "orderPrefix=" + form;
      // var strHtml ="orderPrefix=NR007311326091024&_user=1343&_token=50b94b8a7357a458668946983d37ae40";
       var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
           if( window.XMLHttpRequest ){
              xhr=new XMLHttpRequest();
            }else{
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
           };
          xhr.onreadystatechange=function(){
            if( xhr.readyState==4 && xhr.status==200){
              var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  hhNode.firstChild.innerHTML = "<tr>"
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
                console.log(xhr.responseText);
          var mp3 = eval("("+ this.responseText +")");
                console.log(mp3);
              //  console.log(mp3.data.list);
              //  console.log(mp3.data.list[0]);
          var mp3Val = mp3.data.list;
                th_product(mp3Val);
	 var form = document.getElementsByClassName("form-control input-inline input-medium")[0];
         var form2 = document.getElementsByClassName("form-control input-inline input-medium")[2];
             form.value ="";
	     form2.value ="";
             }
        }
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
};
//------------------------------------------------------------------------------------换货-------------------------------------------------------------------------
function huanhuoT(){
       var xhr;
       var strHtml ="_user=1343&_token="+ getCookie("token") +  formVal();
      // var strHtml ="_user=1343&_token=50b94b8a7357a458668946983d37ae40&" + "orderPrefix=" + form;
      // var strHtml ="orderPrefix=NR007311326091024&_user=1343&_token=50b94b8a7357a458668946983d37ae40";
       var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
           if( window.XMLHttpRequest ){
              xhr=new XMLHttpRequest();
            }else{
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
           };
          xhr.onreadystatechange=function(){
            if( xhr.readyState==4 && xhr.status==200){
              var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  hhNode.firstChild.innerHTML = "<tr>"
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
                                   + "</tr>"
                console.log(xhr.responseText);
          var mp3 = eval("("+ this.responseText +")");
                console.log(mp3);
              //  console.log(mp3.data.list);
              //  console.log(mp3.data.list[0]);
          var mp3Val = mp3.data.list;
                hh_product(mp3Val);
	 var form = document.getElementsByClassName("form-control input-inline input-medium")[0];
         var form2 = document.getElementsByClassName("form-control input-inline input-medium")[2];
             form.value ="";
	     form2.value ="";
             }
        }
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
};
//------------------------------------------------------------------------------------补发-------------------------------------------------------------------------
function bufaT(){
       var xhr;
       var strHtml ="_user=1343&_token="+ getCookie("token") +  formVal();

      // var strHtml ="_user=1343&_token=50b94b8a7357a458668946983d37ae40&" + "orderPrefix=" + form;
      // var strHtml ="orderPrefix=NR007311326091024&_user=1343&_token=50b94b8a7357a458668946983d37ae40";
       var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
           if( window.XMLHttpRequest ){
              xhr=new XMLHttpRequest();
            }else{
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
           };
          xhr.onreadystatechange=function(){
            if( xhr.readyState==4 && xhr.status==200){
              var hhNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
                  hhNode.firstChild.innerHTML ="<tr>"
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
                                   + "</tr>"
                console.log(xhr.responseText);
          var mp3 = eval("("+ this.responseText +")");
                console.log(mp3);
              //  console.log(mp3.data.list);
              //  console.log(mp3.data.list[0]);
          var mp3Val = mp3.data.list;
                bf_product(mp3Val);
	 var form = document.getElementsByClassName("form-control input-inline input-medium")[0];
         var form2 = document.getElementsByClassName("form-control input-inline input-medium")[2];
             form.value ="";
	     form2.value ="";
             }
        }
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
};
//------------------------------------------------------------------------------------begain(公用)---------------------------------------------------------------------
    //   var arr;
     //  var reg = new RegExp("(^| )token=([^;]*)(;|$)");
    //       arr = document.cookie.match(reg);
     //          console.log(arr[2]);
//獲取token值函數
   function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            arr = document.cookie.match(reg);
         console.log(arr[2]);
           return arr[2]
    };
//獲取form表格的值
     function formVal(){
           var orderValue="";
           var form = document.getElementsByClassName("form-control input-inline input-medium")[0].value;
           var form2 = document.getElementsByClassName("form-control input-inline input-medium")[2].value;
             if(form == "" && form2 == ""){
		     return  "&shippingNumber= ,&orderPrefix= ,"
                layer.msg("請輸入訂單編號");
		       // return;
               }else if(form != "" && form2 != ""){
		       layer.msg("請选择一个选项");
              }else if(form == "" && form2 != ""){
		        console.log(22);
                orderValue = formValue(form2);
		             return  "&shippingNumber=" +orderValue;
              }else if(form != "" && form2 == ""){
		        console.log(00);
                orderValue = formValue(form);
		             return  "&orderPrefix=" +orderValue;
             }
         };
    function formValue(val){
         var item_arr = val.split(/[\n\s+,，；;]/g);
               console.log(item_arr);
        var orderValue="";
        for (var i=0;i<item_arr.length;i++){
             orderValue+= item_arr[i]+","
            }
            console.log(orderValue);
            return orderValue
     };
//信息詳情product函數    (查询使用)
function product(mp3Val){
    var tableValue="";
    for(var i=0;i<mp3Val.length;i++){
           var listVal = mp3Val[i];
           var autolist = listVal.autoVerify;
              function autoReason(autolist){
                   for(var i=0;i<autolist.length;i++){
                         this.autoVal = autolist[i];
                         return  this.autoVal
                    };
               };
              var chanlist = listVal.specs;
              function saleReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.saleProduct = dataVal.saleProduct;
                         return  this.saleProduct
                    };
               };
               function linkReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.link = dataVal.link;
                         return  this.link
                    };
               };
              function specReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.spec =  dataVal.spec;
                         return  this.spec
                    };
               };
              var clonelist = listVal.isClone;
              function cloneReason(clonelist){
                      if(clonelist==0){
                          this.clone = "否";
                     }else{
                         this.clone = "是";
                     }
                     return  this.clone;
               };
                           tableValue +="<tr><td>"+listVal.orderNumber+"</td><td>"
				                  +listVal.orderStatus+"</td><td>"
				                  +listVal.wayBillNumber+"</td><td>"
				                  +listVal.befrom+"</td><td>"
				                  +saleReason(chanlist)+"</td><td>"
				                  +listVal.isSecondSend+"</td><td>"
				                  +cloneReason(clonelist)+"</td><td>"
				                  +specReason(chanlist)+"</td><td>"
				                  +listVal.currency+"</td><td>"
				                  +listVal.amount+"</td><td>"
				                  +listVal.payType+"</td><td><a href="+linkReason(chanlist)+'  target="_blank">'
				                  +linkReason(chanlist)+"</a></td><td>"
				                  +listVal.addTime+"</td><td>"
				                  +listVal.shipInfo.shipName+"</td><td>"
				                  +listVal.shipInfo.shipPhone+"</td><td>"
				                  +listVal.weight+"</td><td>"
				                  +listVal.logisticsStatus+"</td><td>"
				                  +listVal.logisticsUpdateTime+"</td><td>"
				                  +listVal.logisticsName+"</td><td>"
				                  +listVal.shipInfo.shipAddress+"</td><td>"
				                  +listVal.ip+"</td><td>"
				                  +listVal.collId+"</td><td>"
				                  +autoReason(autolist)+"</td><tr>"
          console.log(listVal.addTime);
          console.log(listVal.amount);
          console.log(listVal.area);
          console.log(listVal.autoVerify);
      var areaList = listVal.autoVerify;
          areaProduct(areaList);
        function areaProduct(areaList) {
           for(var i=0;i<areaList.length;i++){
              var areaVal = areaList[i];
                  console.log(areaVal);
              }
         };
     console.log(listVal.befrom);
     console.log(listVal.collDomain);
     console.log(listVal.collId);
     console.log(listVal.collName);
     console.log(listVal.currency);
          console.log(listVal.delReason);
        var delList = listVal.delReason;
                 delProduct(delList);
        function delProduct(delList) {
           for(var i=0;i<delList.length;i++){
              var areaVal = delList[i];
                  console.log(areaVal);
             };
         };
    console.log(listVal.delTime);
    console.log(listVal.deliveryTime);
    console.log(listVal.emailStatus);
    console.log(listVal.id);
    console.log(listVal.ip);
    console.log(listVal.isClone);
    console.log(listVal.isSecondSend);
    console.log(listVal.logisticsControl);
    console.log(listVal.logisticsName);
    console.log(listVal.logisticsStatus);
    console.log(listVal.logisticsStyle);
    console.log(listVal.logisticsUpdateTime);
    console.log(listVal.lowerstatus);
    console.log(listVal.notes);
    console.log(listVal.orderNumber);
    console.log(listVal.orderStatus);
    console.log(listVal.payDomain);
    console.log(listVal.payType);
    console.log(listVal.phoneLength);
       console.log(listVal.questionReason);
   var queReasonlist = listVal.questionReason;
        queReason(queReasonlist);
     function queReason(queReasonlist) {
         for(var i=0;i<queReasonlist.length;i++){
              var dataVal = queReasonlist[i];
               console.log(dataVal);
          };
       };
       console.log(listVal.reassignmentType);
       console.log(listVal.reassignmentTypeName);
       console.log(listVal.remark);
       console.log(listVal.shipInfo);
       console.log(listVal.shipInfo.shipAddress);
       console.log(listVal.shipInfo.shipEmail);
       console.log(listVal.shipInfo.shipName);
       console.log(listVal.shipInfo.shipPhone);
       console.log(listVal.smsStatus);
       console.log(listVal.specs);
   var chanlist = listVal.specs;
              chanReason(chanlist);
     function chanReason(chanlist){
         for(var i=0;i<chanlist.length;i++){
              var dataVal = chanlist[i];
               console.log(dataVal);
               console.log(dataVal.link);
               console.log(dataVal.saleProduct);
               console.log(dataVal.spec);
          };
       };
       console.log(listVal.transferTime);
       console.log(listVal.update_time);
       console.log(listVal.userId);
       console.log(listVal.username);
       console.log(listVal.verifyTime);
       console.log(listVal.volume);
       console.log(listVal.wayBillNumber);
       console.log(listVal.weight);
    }
     var showNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
         showNode.lastElementChild.innerHTML = tableValue;
};
//---------------------------------------------
//信息詳情product函數    (退货使用)
function th_product(mp3Val){
    var tableValue="";
    for(var i=0;i<mp3Val.length;i++){
           var listVal = mp3Val[i];
           var autolist = listVal.autoVerify;
              function autoReason(autolist){
                   for(var i=0;i<autolist.length;i++){
                         this.autoVal = autolist[i];
                         return  this.autoVal
                    };
               };
              var chanlist = listVal.specs;
              function saleReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.saleProduct = dataVal.saleProduct;
                         return  this.saleProduct
                    };
               };
               function linkReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.link = dataVal.link;
                         return  this.link
                    };
               };
              function specReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.spec =  dataVal.spec;
                         return  this.spec
                    };
               };
              var clonelist = listVal.isClone;
              function cloneReason(clonelist){
                      if(clonelist==0){
                          this.clone = "否";
                     }else{
                         this.clone = "是";
                     }
                     return  this.clone;
               };
	    var jishuliang = specReason(chanlist);
	    function jishu(jishuliang){
                    var shuliang =0
                    var index = -1; //定义变量index控制索引值;  当查找不到a，即indexOf()的值为-1时，结束循环
              do {
                    index = jishuliang.indexOf("』x", index + 1); //使用第二个参数index+1，控制每一次查找都是从上一次查找到字符a的下一个索引位置开始
                 if (index != -1) { //可以找到字符i
                    shuliang +=  parseInt(jishuliang.substr(index+2,2))
                  }
              } while (index != -1);
              return shuliang
            };
       var dd = document.getElementById("djr").value;
       var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
       var thhNode_val = document.getElementById("tigong").value;
           if(thhNode_val == "運費0"){
                 thhNode_val ="";
             }else if(thhNode_val == "運費一半"){
                    thhNode_val ="";
             } else {
                   thhNode_val = thhNode_val;
            };
	var thvalue = document.getElementById("thvalue").value;
                           tableValue +="<tr><td></td><td>"         
				             +listVal.orderNumber+"</td><td>"
	    				     +saleReason(chanlist)+"</td><td>"
	                                     +listVal.shipInfo.shipName+"</td><td>"
	                                     +listVal.shipInfo.shipPhone+"</td><td>"
	                                     +specReason(chanlist)+"</td><td>"
	                                     +listVal.amount+"</td><td>"
	                                     +listVal.shipInfo.shipAddress+"</td><td>"
	                                     +jishu(jishuliang)+"</td><td>"
	                                     +listVal.wayBillNumber+"</td><td>"
	                                     +thvalue+"</td><td>"
	                                     +"</td><td>"
	                                     +listVal.shipInfo.shipName+"</td><td>"
	                                     +"</td><td>"
	                                     +"</td><td>"
	                                     +listVal.amount+"</td><td>"
				             +listVal.addTime+"</td><td>"
	                                     +listVal.logisticsName+"</td><td>"
	                                     +dd+"</td><td>"
				             +listVal.befrom+"</td><td>"
	                                     +listVal.payType+"</td><td>"
	  	                             +djTime+"</td><td>"  
	    	                             +thhNode_val+"</td><td>"
	    	                             +listVal.collId+"</td><td>"
          console.log(listVal.addTime);
          console.log(listVal.amount);
          console.log(listVal.area);
          console.log(listVal.autoVerify);
      var areaList = listVal.autoVerify;
          areaProduct(areaList);
        function areaProduct(areaList) {
           for(var i=0;i<areaList.length;i++){
              var areaVal = areaList[i];
                  console.log(areaVal);
              }
         };
     console.log(listVal.befrom);
     console.log(listVal.collDomain);
     console.log(listVal.collId);
     console.log(listVal.collName);
     console.log(listVal.currency);
          console.log(listVal.delReason);
        var delList = listVal.delReason;
                 delProduct(delList);
        function delProduct(delList) {
           for(var i=0;i<delList.length;i++){
              var areaVal = delList[i];
                  console.log(areaVal);
             };
         };
    console.log(listVal.delTime);
    console.log(listVal.deliveryTime);
    console.log(listVal.emailStatus);
    console.log(listVal.id);
    console.log(listVal.ip);
    console.log(listVal.isClone);
    console.log(listVal.isSecondSend);
    console.log(listVal.logisticsControl);
    console.log(listVal.logisticsName);
    console.log(listVal.logisticsStatus);
    console.log(listVal.logisticsStyle);
    console.log(listVal.logisticsUpdateTime);
    console.log(listVal.lowerstatus);
    console.log(listVal.notes);
    console.log(listVal.orderNumber);
    console.log(listVal.orderStatus);
    console.log(listVal.payDomain);
    console.log(listVal.payType);
    console.log(listVal.phoneLength);
       console.log(listVal.questionReason);
   var queReasonlist = listVal.questionReason;
        queReason(queReasonlist);
     function queReason(queReasonlist) {
         for(var i=0;i<queReasonlist.length;i++){
              var dataVal = queReasonlist[i];
               console.log(dataVal);
          };
       };
       console.log(listVal.reassignmentType);
       console.log(listVal.reassignmentTypeName);
       console.log(listVal.remark);
       console.log(listVal.shipInfo);
       console.log(listVal.shipInfo.shipAddress);
       console.log(listVal.shipInfo.shipEmail);
       console.log(listVal.shipInfo.shipName);
       console.log(listVal.shipInfo.shipPhone);
       console.log(listVal.smsStatus);
       console.log(listVal.specs);
   var chanlist = listVal.specs;
              chanReason(chanlist);
     function chanReason(chanlist){
         for(var i=0;i<chanlist.length;i++){
              var dataVal = chanlist[i];
               console.log(dataVal);
               console.log(dataVal.link);
               console.log(dataVal.saleProduct);
               console.log(dataVal.spec);
          };
       };
       console.log(listVal.transferTime);
       console.log(listVal.update_time);
       console.log(listVal.userId);
       console.log(listVal.username);
       console.log(listVal.verifyTime);
       console.log(listVal.volume);
       console.log(listVal.wayBillNumber);
       console.log(listVal.weight);
    }
     var showNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
         showNode.lastElementChild.innerHTML = tableValue;
};
//---------------------------------------------
//信息詳情product函數    (换货使用)
function hh_product(mp3Val){
    var tableValue="";
    for(var i=0;i<mp3Val.length;i++){
           var listVal = mp3Val[i];
           var autolist = listVal.autoVerify;
              function autoReason(autolist){
                   for(var i=0;i<autolist.length;i++){
                         this.autoVal = autolist[i];
                         return  this.autoVal
                    };
               };
              var chanlist = listVal.specs;
              function saleReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.saleProduct = dataVal.saleProduct;
                         return  this.saleProduct
                    };
               };
               function linkReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.link = dataVal.link;
                         return  this.link
                    };
               };
              function specReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.spec =  dataVal.spec;
                         return  this.spec
                    };
               };
              var clonelist = listVal.isClone;
              function cloneReason(clonelist){
                      if(clonelist==0){
                          this.clone = "否";
                     }else{
                         this.clone = "是";
                     }
                     return  this.clone;
               };
	  var jishuliang = specReason(chanlist);
	    function jishu(jishuliang){
                    var shuliang =0
                    var index = -1; //定义变量index控制索引值;  当查找不到a，即indexOf()的值为-1时，结束循环
              do {
                    index = jishuliang.indexOf("』x", index + 1); //使用第二个参数index+1，控制每一次查找都是从上一次查找到字符a的下一个索引位置开始
                 if (index != -1) { //可以找到字符i
                    shuliang +=  parseInt(jishuliang.substr(index+2,2))
                  }
              } while (index != -1);
              return shuliang
            };
       var dd = document.getElementById("djr").value;
       var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
       var thhNode_val = document.getElementById("tigong").value;
           if(thhNode_val == "運費0"){
                 thhNode_val ="";
             }else if(thhNode_val == "運費一半"){
                    thhNode_val ="";
             } else {
                   thhNode_val = thhNode_val;
            };
	var hh_val = document.getElementById("hhvalue").value;
                           tableValue +='<tr><td width="80&">'+saleReason(chanlist)+'</td><td>'
	    	                                  +listVal.shipInfo.shipName+'</td><td>'
	                                          +listVal.shipInfo.shipPhone+'</td><td>'
	                                          +specReason(chanlist)+"</td><td>"
	    	                        + "客戶要求換貨；派送新貨的同時；需要把原貨收回；（需要收回的原貨運單號 "+listVal.wayBillNumber+" ）(原訂單編號：" +listVal.orderNumber+" )" 
				                  +'</td><td width="10%">'
	    	                                  +listVal.shipInfo.shipAddress+"</td><td>"
	    	                                  +listVal.wayBillNumber+"</td><td>"
	    	    				  +saleReason(chanlist)+"</td><td>"
	    	                                  +specReason(chanlist)+"</td><td>"
	                                          +hh_val+"</td><td>"
	                                          +"</td><td>"
	    	                                  +"</td><td>"
	                                          +jishu(jishuliang)+"</td><td>"
	                                          +saleReason(chanlist).split("#")[1]+"</td><td>"
	    	                                  +listVal.logisticsName+"</td><td>"
	                                          +dd+"</td><td>"
				                  +listVal.befrom+"</td><td>"
	    				          + "換貨原單號：" +listVal.orderNumber+ "來回件"+"</td><td>"
	    	                                  +djTime+"</td><td>"
	                                          +thhNode_val+"</td><td>"
	    	    	                          +listVal.collId+"</td><td>"
          console.log(listVal.addTime);
          console.log(listVal.amount);
          console.log(listVal.area);
          console.log(listVal.autoVerify);
      var areaList = listVal.autoVerify;
          areaProduct(areaList);
        function areaProduct(areaList) {
           for(var i=0;i<areaList.length;i++){
              var areaVal = areaList[i];
                  console.log(areaVal);
              }
         };
     console.log(listVal.befrom);
     console.log(listVal.collDomain);
     console.log(listVal.collId);
     console.log(listVal.collName);
     console.log(listVal.currency);
          console.log(listVal.delReason);
        var delList = listVal.delReason;
                 delProduct(delList);
        function delProduct(delList) {
           for(var i=0;i<delList.length;i++){
              var areaVal = delList[i];
                  console.log(areaVal);
             };
         };
    console.log(listVal.delTime);
    console.log(listVal.deliveryTime);
    console.log(listVal.emailStatus);
    console.log(listVal.id);
    console.log(listVal.ip);
    console.log(listVal.isClone);
    console.log(listVal.isSecondSend);
    console.log(listVal.logisticsControl);
    console.log(listVal.logisticsName);
    console.log(listVal.logisticsStatus);
    console.log(listVal.logisticsStyle);
    console.log(listVal.logisticsUpdateTime);
    console.log(listVal.lowerstatus);
    console.log(listVal.notes);
    console.log(listVal.orderNumber);
    console.log(listVal.orderStatus);
    console.log(listVal.payDomain);
    console.log(listVal.payType);
    console.log(listVal.phoneLength);
       console.log(listVal.questionReason);
   var queReasonlist = listVal.questionReason;
        queReason(queReasonlist);
     function queReason(queReasonlist) {
         for(var i=0;i<queReasonlist.length;i++){
              var dataVal = queReasonlist[i];
               console.log(dataVal);
          };
       };
       console.log(listVal.reassignmentType);
       console.log(listVal.reassignmentTypeName);
       console.log(listVal.remark);
       console.log(listVal.shipInfo);
       console.log(listVal.shipInfo.shipAddress);
       console.log(listVal.shipInfo.shipEmail);
       console.log(listVal.shipInfo.shipName);
       console.log(listVal.shipInfo.shipPhone);
       console.log(listVal.smsStatus);
       console.log(listVal.specs);
   var chanlist = listVal.specs;
              chanReason(chanlist);
     function chanReason(chanlist){
         for(var i=0;i<chanlist.length;i++){
              var dataVal = chanlist[i];
               console.log(dataVal);
               console.log(dataVal.link);
               console.log(dataVal.saleProduct);
               console.log(dataVal.spec);
          };
       };
       console.log(listVal.transferTime);
       console.log(listVal.update_time);
       console.log(listVal.userId);
       console.log(listVal.username);
       console.log(listVal.verifyTime);
       console.log(listVal.volume);
       console.log(listVal.wayBillNumber);
       console.log(listVal.weight);
    }
     var showNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
         showNode.lastElementChild.innerHTML = tableValue;
};
//---------------------------------------------
//信息詳情product函數    (补发使用)
function bf_product(mp3Val){
    var tableValue="";
    for(var i=0;i<mp3Val.length;i++){
           var listVal = mp3Val[i];
           var autolist = listVal.autoVerify;
              function autoReason(autolist){
                   for(var i=0;i<autolist.length;i++){
                         this.autoVal = autolist[i];
                         return  this.autoVal
                    };
               };
              var chanlist = listVal.specs;
              function saleReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.saleProduct = dataVal.saleProduct;
                         return  this.saleProduct
                    };
               };
               function linkReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.link = dataVal.link;
                         return  this.link
                    };
               };
              function specReason(chanlist){
                   for(var i=0;i<chanlist.length;i++){
                         var dataVal = chanlist[i];
                         this.spec =  dataVal.spec;
                         return  this.spec
                    };
               };
              var clonelist = listVal.isClone;
              function cloneReason(clonelist){
                      if(clonelist==0){
                          this.clone = "否";
                     }else{
                         this.clone = "是";
                     }
                     return  this.clone;
               };
	   var jishuliang = specReason(chanlist);
	    function jishu(jishuliang){
                    var shuliang =0
                    var index = -1; //定义变量index控制索引值;  当查找不到a，即indexOf()的值为-1时，结束循环
              do {
                    index =jishuliang.indexOf("』x", index + 1); //使用第二个参数index+1，控制每一次查找都是从上一次查找到字符a的下一个索引位置开始
                 if (index != -1) { //可以找到字符i
                    shuliang +=  parseInt(jishuliang.substr(index+2,2))
                  }
              } while (index != -1);
              return shuliang
            };
       var dd = document.getElementById("djr").value;
       var djTime = new Date().toLocaleString() + ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
       var thhNode_val = document.getElementById("tigong").value;
           if(thhNode_val == "運費0"){
                 thhNode_val ="";
             }else if(thhNode_val == "運費一半"){
                    thhNode_val ="";
             } else {
                   thhNode_val = thhNode_val;
            };
                           tableValue +="<tr><td>"+saleReason(chanlist)+"</td><td>"
	    	                                  +listVal.shipInfo.shipName+"</td><td>"
	                                          +listVal.shipInfo.shipPhone+"</td><td>"
	                                          +specReason(chanlist)+"</td><td>"
	    	                                  + "少發   (原訂單號："+listVal.orderNumber+")" +"</td><td>"
	    	                                  +listVal.shipInfo.shipAddress+"</td><td>"
	    	                                  +"</td><td>"
	                                          +"</td><td>"
	    	                                  +jishu(jishuliang)+"</td><td>"
	                                          +saleReason(chanlist).split("#")[1]+"</td><td>"
	    	                                  +dd+"</td><td>"
	    	                                  + "補發原單號："+listVal.orderNumber+"</td><td>"
	    	                                  +djTime+"</td><td>"
	    	                                  +thhNode_val+"</td><td>"
	    	    	                          +listVal.collId+"</td><td>"
          console.log(listVal.addTime);
          console.log(listVal.amount);
          console.log(listVal.area);
          console.log(listVal.autoVerify);
      var areaList = listVal.autoVerify;
          areaProduct(areaList);
        function areaProduct(areaList) {
           for(var i=0;i<areaList.length;i++){
              var areaVal = areaList[i];
                  console.log(areaVal);
              }
         };
     console.log(listVal.befrom);
     console.log(listVal.collDomain);
     console.log(listVal.collId);
     console.log(listVal.collName);
     console.log(listVal.currency);
          console.log(listVal.delReason);
        var delList = listVal.delReason;
                 delProduct(delList);
        function delProduct(delList) {
           for(var i=0;i<delList.length;i++){
              var areaVal = delList[i];
                  console.log(areaVal);
             };
         };
    console.log(listVal.delTime);
    console.log(listVal.deliveryTime);
    console.log(listVal.emailStatus);
    console.log(listVal.id);
    console.log(listVal.ip);
    console.log(listVal.isClone);
    console.log(listVal.isSecondSend);
    console.log(listVal.logisticsControl);
    console.log(listVal.logisticsName);
    console.log(listVal.logisticsStatus);
    console.log(listVal.logisticsStyle);
    console.log(listVal.logisticsUpdateTime);
    console.log(listVal.lowerstatus);
    console.log(listVal.notes);
    console.log(listVal.orderNumber);
    console.log(listVal.orderStatus);
    console.log(listVal.payDomain);
    console.log(listVal.payType);
    console.log(listVal.phoneLength);
       console.log(listVal.questionReason);
   var queReasonlist = listVal.questionReason;
        queReason(queReasonlist);
     function queReason(queReasonlist) {
         for(var i=0;i<queReasonlist.length;i++){
              var dataVal = queReasonlist[i];
               console.log(dataVal);
          };
       };
       console.log(listVal.reassignmentType);
       console.log(listVal.reassignmentTypeName);
       console.log(listVal.remark);
       console.log(listVal.shipInfo);
       console.log(listVal.shipInfo.shipAddress);
       console.log(listVal.shipInfo.shipEmail);
       console.log(listVal.shipInfo.shipName);
       console.log(listVal.shipInfo.shipPhone);
       console.log(listVal.smsStatus);
       console.log(listVal.specs);
   var chanlist = listVal.specs;
              chanReason(chanlist);
     function chanReason(chanlist){
         for(var i=0;i<chanlist.length;i++){
              var dataVal = chanlist[i];
               console.log(dataVal);
               console.log(dataVal.link);
               console.log(dataVal.saleProduct);
               console.log(dataVal.spec);
          };
       };
       console.log(listVal.transferTime);
       console.log(listVal.update_time);
       console.log(listVal.userId);
       console.log(listVal.username);
       console.log(listVal.verifyTime);
       console.log(listVal.volume);
       console.log(listVal.wayBillNumber);
       console.log(listVal.weight);
    }
     var showNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
         showNode.lastElementChild.innerHTML = tableValue;
};
//------------------------------------------------------------------------------------end------------------------------------------------------------------------------------



/*
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState == "hidden") {
        normal_title = document.title;
        document.title = "✪北斗BDS：为您开启导航服务"
    } else {
        document.title = "天眼系统";
        setTimeout(function () {
            document.title = normal_title
        })
    }
})
*/
