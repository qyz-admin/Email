function showw(){
       var xhr;
       var form = document.getElementsByClassName("form-control input-inline input-medium")[0].value;
       var strHtml ="_user=1343&_token=50b94b8a7357a458668946983d37ae40&" + "orderPrefix=" + form;
      // var strHtml ="orderPrefix=NR007311326091024&_user=1343&_token=50b94b8a7357a458668946983d37ae40";
       var xhr_url = "http://gimp.giikin.com/service?service=gorder.customer&action=getQueryOrder";
           if( window.XMLHttpRequest ){
              xhr=new XMLHttpRequest();
            }else{
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
           };
          xhr.onreadystatechange=function(){
            if( xhr.readyState==4 && xhr.status==200){
                console.log(xhr.responseText);
          var mp3 = eval("("+ this.responseText +")");
                console.log(mp3);
                console.log(mp3.data.list);
                console.log(mp3.data.list[0]);
          var mp3Val = mp3.data.list;
                product(mp3Val);
             }
        }
        xhr.open("post",xhr_url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(strHtml);
};

         
function product(mp3Val){
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
     var showNode = document.getElementsByClassName("table table-striped table-bordered table-hover")[0];
         showNode.lastElementChild.innerHTML ='<tr>'
                                              +'<td>'+listVal.orderNumber+'</td>'
                                              +'<td>'+listVal.orderStatus+'</td>'
                                              +'<td>'+listVal.wayBillNumber+'</td>'
                                              +'<td>'+listVal.befrom+'</td>'
                                              +'<td>'+saleReason(chanlist)+'</td>'
                                              +'<td>'+listVal.isSecondSend+'</td>'
                                              +'<td>'+cloneReason(clonelist)+'</td>'
                                              +'<td>'+specReason(chanlist)+'</td>'
                                                 +'<td>'+listVal.befrom+'</td>'
                                              +'<td>'+listVal.currency+'</td>'
                                              +'<td>'+listVal.amount+'</td>'
                                              +'<td>'+listVal.payType+'</td>'
                                              +'<td>'+linkReason(chanlist)+'</td>'
                                              +'<td>'+listVal.addTime+'</td>'
                                              +'<td>'+listVal.shipInfo.shipName+'</td>'
                                              +'<td>'+listVal.shipInfo.shipPhone+'</td>'
                                              +'<td>'+listVal.befrom+'</td>'
                                              +'<td>'+listVal.weight+'</td>'
                                              +'<td>'+listVal.logisticsStatus+'</td>'
                                              +'<td>'+listVal.logisticsUpdateTime+'</td>'
                                              +'<td>'+listVal.logisticsName+'</td>'
                                              +'<td>'+listVal.shipInfo.shipAddress+'</td>'
                                              +'<td>'+listVal.ip+'</td>'
                                              +'<td>'+listVal.collId+'</td>'
                                              +'<td>'+autoReason(autolist)+'</td>'
                                                 +'<td>'+listVal.befrom+'</td>'
                                              +'<tr>'
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
};
